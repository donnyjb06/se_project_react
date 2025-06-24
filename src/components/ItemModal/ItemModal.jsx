import { useEffect } from "react";
import exitModalIcon from "../../assets/images/exit-icon-white.svg"
import "./ItemModal.css"

const ItemModal = ({ link, name, condition, onClose }) => {

  return (
    <div className='modal modal_type_item' >
      <div className='modal__container'>
        <button className='modal__exit' onClick={() => onClose(false)}>
          <img src={exitModalIcon} alt='x icon for exit button' className='modal__exit-icon' />
        </button>
        <img src={link} alt={`Picture of ${name}`} className="modal__image"/>
        <div className="modal__details">
          <p className='modal__name'>{name}</p>
          <p className='modal__condition'>Weather:  {condition}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
