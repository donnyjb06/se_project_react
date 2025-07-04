import { ClothingDataContext } from './ClothingData.context';
import { useEffect, useState, useCallback } from 'react';
import { getInitialItems, addNewItem, deleteItem } from '../../utils/api';

const ClothingDataProvider = ({ children, onItemModalOpen }) => {
  const [selectedItem, setSelectedItem] = useState({
    name: 'Placeholder Name',
    imageUrl: '',
    weather: 'hot',
    _id: 0,
  });
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const getClothingItems = async () => {
      try {
        const items = await getInitialItems();
        setClothingItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    getClothingItems();
  }, []);

  const handleAddItemSubmit = async (newItem) => {
    try {
      const addedItem = await addNewItem(newItem);
      setClothingItems((prevItems) => [addedItem, ...prevItems]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = useCallback(
    (item) => {
      setSelectedItem({
        name: item.name,
        _id: item._id,
        imageUrl: item.imageUrl,
        weather: item.weather,
      });
      onItemModalOpen(true);
    },
    [setSelectedItem, onItemModalOpen],
  );

  const handleDeleteItem = async () => {
    try {
      await deleteItem(selectedItem._id);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== selectedItem._id),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ClothingDataContext.Provider
      value={{
        selectedItem,
        clothingItems,
        handleAddItemSubmit,
        handleCardClick,
        handleDeleteItem,
      }}>
      {children}
    </ClothingDataContext.Provider>
  );
};

export default ClothingDataProvider;
