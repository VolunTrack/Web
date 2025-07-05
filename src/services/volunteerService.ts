import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter, 
  DocumentSnapshot,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';

// 志愿者机会接口
export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  location: string;
  category: string;
  duration: string;
  shortDescription: string;
  detailedDescription: string[];
  benefits: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// 搜索过滤器接口
export interface SearchFilters {
  organizations?: string[];
  categories?: string[];
  locations?: string[];
  durations?: string[];
  searchTerm?: string;
}

// 分页参数接口
export interface PaginationOptions {
  limit?: number;
  lastDoc?: DocumentSnapshot;
}

class VolunteerService {
  private collectionName = 'volunteers';

  // 获取所有志愿者机会
  async getAllVolunteers(
    filters?: SearchFilters,
    pagination?: PaginationOptions
  ): Promise<{ volunteers: VolunteerOpportunity[], lastDoc?: DocumentSnapshot }> {
    try {
      const volunteersRef = collection(db, this.collectionName);
      let q = query(volunteersRef, orderBy('createdAt', 'desc'));

      // 应用过滤器
      if (filters) {
        if (filters.organizations && filters.organizations.length > 0) {
          q = query(q, where('organization', 'in', filters.organizations));
        }
        if (filters.categories && filters.categories.length > 0) {
          q = query(q, where('category', 'in', filters.categories));
        }
        if (filters.locations && filters.locations.length > 0) {
          q = query(q, where('location', 'in', filters.locations));
        }
        if (filters.durations && filters.durations.length > 0) {
          q = query(q, where('duration', 'in', filters.durations));
        }
      }

      // 应用分页
      if (pagination) {
        if (pagination.limit) {
          q = query(q, limit(pagination.limit));
        }
        if (pagination.lastDoc) {
          q = query(q, startAfter(pagination.lastDoc));
        }
      }

      const querySnapshot = await getDocs(q);
      const volunteers: VolunteerOpportunity[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        volunteers.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as VolunteerOpportunity);
      });

      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      
      return { volunteers, lastDoc };
    } catch (error) {
      console.error('获取志愿者机会失败:', error);
      throw error;
    }
  }

  // 根据ID获取单个志愿者机会
  async getVolunteerById(id: string): Promise<VolunteerOpportunity | null> {
    try {
      const volunteerRef = doc(db, this.collectionName, id);
      const volunteerSnap = await getDoc(volunteerRef);
      
      if (volunteerSnap.exists()) {
        const data = volunteerSnap.data();
        return {
          id: volunteerSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as VolunteerOpportunity;
      }
      
      return null;
    } catch (error) {
      console.error('获取志愿者机会失败:', error);
      throw error;
    }
  }

  // 搜索志愿者机会（基于标题和描述）
  async searchVolunteers(
    searchTerm: string,
    filters?: SearchFilters,
    pagination?: PaginationOptions
  ): Promise<{ volunteers: VolunteerOpportunity[], lastDoc?: DocumentSnapshot }> {
    try {
      // 注意：Firestore的全文搜索能力有限，这里使用基本的字段匹配
      // 对于复杂的搜索，可能需要使用Algolia或其他搜索服务
      const volunteersRef = collection(db, this.collectionName);
      
      // 如果有搜索词，可以按标题搜索
      let q = query(
        volunteersRef,
        where('title', '>=', searchTerm),
        where('title', '<=', searchTerm + '\uf8ff'),
        orderBy('title'),
        orderBy('createdAt', 'desc')
      );

      // 应用其他过滤器
      if (filters) {
        if (filters.organizations && filters.organizations.length > 0) {
          q = query(q, where('organization', 'in', filters.organizations));
        }
        // ... 其他过滤器
      }

      // 应用分页
      if (pagination?.limit) {
        q = query(q, limit(pagination.limit));
      }
      if (pagination?.lastDoc) {
        q = query(q, startAfter(pagination.lastDoc));
      }

      const querySnapshot = await getDocs(q);
      const volunteers: VolunteerOpportunity[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        volunteers.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as VolunteerOpportunity);
      });

      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      
      return { volunteers, lastDoc };
    } catch (error) {
      console.error('搜索志愿者机会失败:', error);
      throw error;
    }
  }

  // 添加新的志愿者机会
  async addVolunteer(volunteer: Omit<VolunteerOpportunity, 'id'>): Promise<string> {
    try {
      const now = new Date();
      const volunteerData = {
        ...volunteer,
        createdAt: now,
        updatedAt: now
      };
      
      const docRef = await addDoc(collection(db, this.collectionName), volunteerData);
      return docRef.id;
    } catch (error) {
      console.error('添加志愿者机会失败:', error);
      throw error;
    }
  }

  // 更新志愿者机会
  async updateVolunteer(id: string, updates: Partial<VolunteerOpportunity>): Promise<void> {
    try {
      const volunteerRef = doc(db, this.collectionName, id);
      await updateDoc(volunteerRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('更新志愿者机会失败:', error);
      throw error;
    }
  }

  // 删除志愿者机会
  async deleteVolunteer(id: string): Promise<void> {
    try {
      const volunteerRef = doc(db, this.collectionName, id);
      await deleteDoc(volunteerRef);
    } catch (error) {
      console.error('删除志愿者机会失败:', error);
      throw error;
    }
  }

  // 获取所有可用的筛选选项
  async getFilterOptions(): Promise<{
    organizations: string[];
    categories: string[];
    locations: string[];
    durations: string[];
  }> {
    try {
      const volunteersRef = collection(db, this.collectionName);
      const querySnapshot = await getDocs(volunteersRef);
      
      const organizations = new Set<string>();
      const categories = new Set<string>();
      const locations = new Set<string>();
      const durations = new Set<string>();
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        organizations.add(data.organization);
        categories.add(data.category);
        locations.add(data.location);
        durations.add(data.duration);
      });
      
      return {
        organizations: Array.from(organizations),
        categories: Array.from(categories),
        locations: Array.from(locations),
        durations: Array.from(durations)
      };
    } catch (error) {
      console.error('获取筛选选项失败:', error);
      throw error;
    }
  }
}

export const volunteerService = new VolunteerService(); 