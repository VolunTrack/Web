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

  const searchApi = async (_searchTerm: string) => {
    setErrorMessage('');
    try {
      const db = getFirestore(app);
      const resultsCol = collection(db, 'Volunteer');
      const firestoreSnapshot = await getDocs(resultsCol);
      const firestoreData = firestoreSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        source: 'Firestore',
      })) as VolunteerResult[];
      setResults(firestoreData);
    } catch (error) {
      console.error('Error during search:', error);
      setErrorMessage('Something went wrong...');
    }
  };

  return [searchApi, results, errorMessage];
};

export default useSearch;
