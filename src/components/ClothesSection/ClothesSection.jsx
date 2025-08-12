import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';
import { useClothingData } from '../../hooks/useClothingData';
import { useModal } from '../../hooks/useModal';

const ClothesSection = () => {
  const {clothingItems: items, handleCardClick} = useClothingData()
  const {setModal} = useModal()

  return (
    <div className='clothes'>
      <div className='clothes__header'>
        <h2 className='clothes__title'>Your items</h2>
        <button className='clothes__add-new' onClick={() => setModal("add-item-modal")}>+ Add new</button>
      </div>

      <ul className='clothes__gallery'>
        {items.map((item) => (
          <ItemCard
            key={item._id}
            link={item.imageUrl}
            name={item.name}
            condition={item.weather}
            handleCardClick={() => handleCardClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
