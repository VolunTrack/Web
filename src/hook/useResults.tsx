import { useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../api/firebaseConfig';

export interface VolunteerResult {
  time: string;
  id: string;
  title: string;
  organization: string;
  location: string;
  category: string;
  duration: string;
  description: string;
  source: 'Firestore';
}

const useSearch = (): [
  (searchTerm: string) => Promise<void>,
  VolunteerResult[],
  string
] => {
  const [results, setResults] = useState<VolunteerResult[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * 根据搜索词从 Firestore 中获取并过滤志愿服务数据。
   *
   * 逻辑说明：
   * 1. 当前 Firestore 未建立全文索引，因此先一次性读取集合所有文档。
   * 2. 若用户输入了搜索词，则在内存中对常用字段（title、organization、location、category、description）做 includes 匹配。
   *    这样可以避免多次网络往返，也方便后期迁移至真正的全文检索服务（如 Algolia）。
   */
  const searchApi = async (searchTerm: string) => {
    setErrorMessage('');
    try {
      const db = getFirestore(app);
      const resultsCol = collection(db, 'Volunteer');
      const firestoreSnapshot = await getDocs(resultsCol);

      // 将 Firestore 文档映射为 VolunteerResult 数组
      let firestoreData = firestoreSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        source: 'Firestore',
      })) as VolunteerResult[];

      // 如果有搜索词，则在内存中过滤结果
      const trimmed = searchTerm.trim().toLowerCase();
      if (trimmed) {
        firestoreData = firestoreData.filter(item => {
          const fieldsToSearch = [
            item.title,
            item.organization,
            item.location,
            item.category,
            item.description,
          ];
          return fieldsToSearch.some(field =>
            (field ?? '').toLowerCase().includes(trimmed)
          );
        });
      }

      setResults(firestoreData);
    } catch (error) {
      console.error('Error during search:', error);
      setErrorMessage('Something went wrong...');
    }
  };

  return [searchApi, results, errorMessage];
};

export default useSearch;
