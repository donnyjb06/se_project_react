import { ClothingDataContext } from './ClothingData.context';
import { useEffect, useState, useCallback } from 'react';
import { getInitialItems, addNewItem } from '../../utils/api';

const ClothingDataProvider = ({ children, onItemModalOpen }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const getClothingItems = async () => {
      try {
        const items = await getInitialItems();
        setClothingItems(items)
      } catch (error) {
        console.error(error)
      }
    }

    getClothingItems()
  }, [])

  const handleAddItemSubmit = async (newItem) => {
    try {
      const addedItem = await addNewItem(newItem)
      setClothingItems(prevItems => ([addedItem, ...prevItems]))
    } catch (error) {
      console.error(error)
    }
  };

  const handleCardClick = useCallback(
      (item) => {
        setSelectedItem(item);
        onItemModalOpen(true);
      },
      [setSelectedItem, onItemModalOpen],
    );

  return (
    <ClothingDataContext.Provider value={{selectedItem, clothingItems, handleAddItemSubmit, handleCardClick}}>
      {children}
    </ClothingDataContext.Provider>
  )
}

export default ClothingDataProvider