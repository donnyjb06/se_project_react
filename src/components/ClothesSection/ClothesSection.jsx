import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';
import { useClothingData } from '../../hooks/useClothingData';

const ClothesSection = () => {
  const {clothingItems: items} = useClothingData()

  return (
    <div className='clothes'>
      <div className='clothes__header'>
        <h2 className='clothes__title'>Your items</h2>
        <button className='clothes__add-new'>+ Add new</button>
      </div>

      <ul className='clothes__gallery'>
        {items.map((item) => (
          <ItemCard
            key={item._id}
            link={item.imageUrl}
            name={item.name}
            condition={item.weather}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
