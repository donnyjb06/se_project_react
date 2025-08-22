import exitModalIcon from "../../assets/images/exit-icon-white.svg";
import "./ItemModal.css";
import { useClothingData } from "../../hooks/useClothingData";
import { useModal } from "../../hooks/useModal";
import { useUserData } from "../../hooks/useUserData";

const ItemModal = () => {
	const { modal, closeModal, setModal } = useModal();
	const isOpen = modal === "item-modal";

	const { selectedItem } = useClothingData();
	const { userData } = useUserData();
	const isOwner = userData._id === selectedItem.owner;

	const handleDelete = () => {
		setModal("delete-confirmation-modal");
	};

	return (
		<div className={`modal modal_type_item ${isOpen ? "modal_is-opened" : ""}`}>
			<div className="modal__container">
				<button className="modal__exit" onClick={closeModal}>
					<img
						src={exitModalIcon}
						alt="x icon for exit button"
						className="modal__exit-icon"
					/>
				</button>
				<div className="modal__image-wrapper">
					<img
						src={selectedItem.imageUrl}
						alt={`Picture of ${selectedItem.name}`}
						className="modal__image"
					/>
				</div>
				<div className="modal__content">
					<div className="modal__details">
						<p className="modal__name">{selectedItem.name}</p>
						<p className="modal__condition">Weather: {selectedItem.weather}</p>
					</div>
					{isOwner && (
						<button
							type="button"
							className="modal__delete"
							onClick={handleDelete}
						>
							Delete item
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemModal;
