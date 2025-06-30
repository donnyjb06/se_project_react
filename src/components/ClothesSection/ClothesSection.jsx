import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';

const ClothesSection = ({ items }) => {
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
