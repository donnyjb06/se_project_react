import exitModalIcon from "../../assets/images/exit-icon-white.svg"
import "./ItemModal.css"
import { useClothingData } from "../../hooks/useClothingData";

const ItemModal = ({ onClose, onDelete }) => {

  const {selectedItem} = useClothingData();

  const handleDelete = () => {
    onClose(false)
    onDelete(true)
  }

  return (
    <div className='modal modal_type_item' >
      <div className='modal__container'>
        <button className='modal__exit' onClick={() => onClose(false)}>
          <img src={exitModalIcon} alt='x icon for exit button' className='modal__exit-icon' />
        </button>
        <img src={selectedItem.imageUrl} alt={`Picture of ${selectedItem.name}`} className="modal__image"/>
        <div className="modal__content">
          <div className="modal__details">
            <p className='modal__name'>{selectedItem.name}</p>
            <p className='modal__condition'>Weather: {selectedItem.weather}</p>
          </div>
          <button type="button" className="modal__delete" onClick={handleDelete}>Delete item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
