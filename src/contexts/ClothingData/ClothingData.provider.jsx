import { ClothingDataContext } from './ClothingData.context';
import { useEffect, useState, useCallback } from 'react';
import { getInitialItems, addNewItem, deleteItem, toggleIsLiked } from '../../utils/api';
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
        const items = await getInitialItems();
        setClothingItems(items.reverse());
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
      console.log(item);
      setSelectedItem({
        name: item.name,
        _id: item._id,
        link: item.link,
        weather: item.weather,
        owner: item.owner?._id || null,
        likes: item.likes,
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

  const handleToggleLike = async (id, isLiked) => {
    try {
      const updatedItem = await toggleIsLiked(id, isLiked)

      setClothingItems(prevItems => {
        return prevItems.map(item => {
          if (item._id === id) {
            return {...item, likes: updatedItem.likes}
          }

          return item
        })
      })
    } catch (error) {
      throw error
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
        handleToggleLike
      }}>
      {children}
    </ClothingDataContext.Provider>
  );
};

export default ClothingDataProvider;
