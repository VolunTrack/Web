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

      // 标记是否使用了 'in' 过滤，若使用则避免 orderBy 造成复合索引需求
      let usedInOperator = false;

      let q = query(volunteersRef);

      // 应用过滤器
      if (filters) {
        if (filters.organizations && filters.organizations.length > 0) {
          q = filters.organizations.length === 1
            ? query(q, where('organization', '==', filters.organizations[0]))
            : (usedInOperator = true, query(q, where('organization', 'in', filters.organizations)));
        }
        if (filters.categories && filters.categories.length > 0) {
          q = filters.categories.length === 1
            ? query(q, where('category', '==', filters.categories[0]))
            : (usedInOperator = true, query(q, where('category', 'in', filters.categories)));
        }
        if (filters.locations && filters.locations.length > 0) {
          q = filters.locations.length === 1
            ? query(q, where('location', '==', filters.locations[0]))
            : (usedInOperator = true, query(q, where('location', 'in', filters.locations)));
        }
        if (filters.durations && filters.durations.length > 0) {
          q = filters.durations.length === 1
            ? query(q, where('duration', '==', filters.durations[0]))
            : (usedInOperator = true, query(q, where('duration', 'in', filters.durations)));
        }
      }

      // 若没有使用 'in' 操作，则可以安全地按 createdAt 排序，减少索引冲突
      if (!usedInOperator) {
        q = query(q, orderBy('createdAt', 'desc'));
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
      let volunteers: VolunteerOpportunity[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        volunteers.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as VolunteerOpportunity);
      });

      // 若在查询中跳过了 orderBy，改为客户端排序
      if (usedInOperator) {
        volunteers = volunteers.sort((a, b) => {
          const timeA = a.createdAt ? a.createdAt.getTime() : 0;
          const timeB = b.createdAt ? b.createdAt.getTime() : 0;
          return timeB - timeA;
        });
      }

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
      
      // 标记 'in' 使用
      let usedInOperator = false;

      // 如果有搜索词，可以按标题搜索
      let q = query(
        volunteersRef,
        where('title', '>=', searchTerm),
        where('title', '<=', searchTerm + '\uf8ff'),
        orderBy('title')
      );

      // 应用其他过滤器
      if (filters) {
        if (filters.organizations && filters.organizations.length > 0) {
          q = filters.organizations.length === 1
            ? query(q, where('organization', '==', filters.organizations[0]))
            : query(q, where('organization', 'in', filters.organizations));
        }
        if (filters.categories && filters.categories.length > 0) {
          q = filters.categories.length === 1
            ? query(q, where('category', '==', filters.categories[0]))
            : query(q, where('category', 'in', filters.categories));
        }
        if (filters.locations && filters.locations.length > 0) {
          q = filters.locations.length === 1
            ? query(q, where('location', '==', filters.locations[0]))
            : query(q, where('location', 'in', filters.locations));
        }
        if (filters.durations && filters.durations.length > 0) {
          q = filters.durations.length === 1
            ? query(q, where('duration', '==', filters.durations[0]))
            : (usedInOperator = true, query(q, where('duration', 'in', filters.durations)));
        }
      }

      // 若没使用 in，则可安全按 createdAt 排序
      if (!usedInOperator) {
        q = query(q, orderBy('createdAt', 'desc'));
      }

      // 应用分页
      if (pagination?.limit) {
        q = query(q, limit(pagination.limit));
      }
      if (pagination?.lastDoc) {
        q = query(q, startAfter(pagination.lastDoc));
      }

      const querySnapshot = await getDocs(q);
      let volunteers: VolunteerOpportunity[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        volunteers.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as VolunteerOpportunity);
      });

      if (usedInOperator) {
        volunteers = volunteers.sort((a, b) => {
          const timeA = a.createdAt ? a.createdAt.getTime() : 0;
          const timeB = b.createdAt ? b.createdAt.getTime() : 0;
          return timeB - timeA;
        });
      }

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