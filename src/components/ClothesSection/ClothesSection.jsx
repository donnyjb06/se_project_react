import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';
import { useClothingData } from '../../hooks/useClothingData';
import { useModal } from '../../hooks/useModal';
import { useMemo } from 'react';
import { useUserData } from '../../hooks/useUserData';

const ClothesSection = () => {
  const { clothingItems: items } = useClothingData();
  const { userData } = useUserData();
  const userClothingItems = useMemo(
    () => items.filter((item) => item.owner?._id === userData._id),
    [items, userData],
  );
  const { setModal } = useModal();

  return (
    <div className='clothes'>
      <div className='clothes__header'>
        <h2 className='clothes__title'>Your items</h2>
        <button
          className='clothes__add-new'
          onClick={() => setModal('add-item-modal')}>
          + Add new
        </button>
      </div>

      <ul className='clothes__gallery'>
        {userClothingItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
