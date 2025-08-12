import { ClothingDataContext } from './ClothingData.context';
import { useEffect, useState, useCallback } from 'react';
import { getInitialItems, addNewItem, deleteItem } from '../../utils/api';
import { useModal } from '../../hooks/useModal';

const ClothingDataProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState({
    name: 'Placeholder Name',
    imageUrl: '',
    weather: 'hot',
    _id: 0,
    owner: '',
  });
  const [clothingItems, setClothingItems] = useState([]);
  const { setModal } = useModal();

  useEffect(() => {
    const getClothingItems = async () => {
      try {
        const items = (await getInitialItems()).items.toReversed();
        console.log(items)
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
      console.log(item)
      setSelectedItem({
        name: item.name,
        _id: item._id,
        imageUrl: item.imageUrl,
        weather: item.weather,
        owner: item.owner?._id,
      });
      setModal('item-modal');
    },
    [setSelectedItem, setModal],
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
