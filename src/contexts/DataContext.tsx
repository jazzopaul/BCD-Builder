import React, { useState, useEffect, createContext, ReactNode } from 'react';
import DataContextType from '@/types/DataContextType';
import BcdData from '@/interfaces/BcdDataInterface';

const dataContextDefaultValues: DataContextType = {
  data: null,
  loading: true,
}

const DataContext = createContext<DataContextType>(dataContextDefaultValues);

type Props = {
  children: ReactNode;
};

export const DataProvider = ({children}: Props) => {

    const [data, setData] = useState<BcdData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          //const response = await fetch('/data/sparkCxDummyData.json');
          const response = await fetch('/data/testBcd3.json');
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.log('Error fetching data:', error);
          setLoading(false); // Set loading to false in case of an error
        }
      };
  
      fetchData();
    }, []);
    
      const contextValue: DataContextType = { data, loading };

      return (
        <DataContext.Provider value={contextValue}>
          {children}
        </DataContext.Provider>
      );

}

export default DataContext;