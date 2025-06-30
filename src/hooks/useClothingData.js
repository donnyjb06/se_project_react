import { ClothingDataContext } from '../contexts/ClothingData/ClothingData.context';
import { useContext } from 'react';

export const useClothingData = () => {
  const context = useContext(ClothingDataContext);

  if (!context)
    throw new Error(
      'useClothingData must be used within a ClothingDataProvider component',
    );

  return context;
};
