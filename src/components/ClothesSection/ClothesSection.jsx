import './ClothesSection.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';

const ClothesSection = () => {
  return (
    <div className='clothes'>
      <div className="clothes__header">
        <h2 className="clothes__title">Your items</h2>
        <button className="clothes__add-new">+ Add new</button>
      </div>

      <ul className="clothes__gallery">
        {defaultClothingItems.map(item => (
          <ItemCard
            key={item._id}
            link={item.link}
            name={item.name}
            condition={item.condition} />
        ))}
      </ul>
    </div>
  )
}

export default ClothesSection