import { useClothingData } from "../../hooks/useClothingData";
import { useModal } from "../../hooks/useModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = () => {
	const [name, setName] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [tempRange, setTempRange] = useState("hot");
	const { modal } = useModal();
	const isOpen = modal === "add-item-modal";

	const { handleAddItemSubmit } = useClothingData();

	const handleSubmit = async () => {
		const newItem = {
			name,
			imageUrl,
			weather: tempRange,
		};

		await handleAddItemSubmit(newItem);
		setName("");
		setImageUrl("");
		setTempRange("hot");
	};

	return (
		<ModalWithForm
			onSubmit={handleSubmit}
			title="New garment"
			btnLabel="Add garment"
			formId="add-garment-form"
			isOpen={isOpen}
		>
			<label className="form__label form__label_for_text">
				Name
				<input
					type="text"
					className="form__input"
					name="name"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
					value={name || ""}
					required
				/>
			</label>
			<label className="form__label form__label_for_text">
				Image
				<input
					type="url"
					className="form__input"
					name="imageUrl"
					placeholder="Image URL"
					onChange={(e) => setImageUrl(e.target.value)}
					value={imageUrl || ""}
					required
				/>
			</label>
			<fieldset className="form__fieldset">
				<legend className="form__legend">Select the weather type:</legend>

				<div className="form__group">
					<input
						type="radio"
						value="hot"
						className="form__input form__input_type_radio"
						checked={tempRange === "hot"}
						name="weather"
						onChange={(e) => setTempRange(e.target.value)}
						id="weather-hot"
						required
					/>
					<label
						className="form__label form__label_for_weather"
						htmlFor="weather-hot"
					>
						Hot
					</label>
				</div>

				<div className="form__group">
					<input
						type="radio"
						value="warm"
						className="form__input form__input_type_radio"
						checked={tempRange === "warm"}
						name="weather"
						onChange={(e) => setTempRange(e.target.value)}
						id="weather-warm"
					/>
					<label
						className="form__label form__label_for_weather"
						htmlFor="weather-warm"
					>
						Warm
					</label>
				</div>

				<div className="form__group">
					<input
						type="radio"
						value="cold"
						className="form__input form__input_type_radio"
						checked={tempRange === "cold"}
						name="weather"
						onChange={(e) => setTempRange(e.target.value)}
						id="weather-cold"
					/>
					<label
						className="form__label form__label_for_weather"
						htmlFor="weather-cold"
					>
						Cold
					</label>
				</div>
			</fieldset>
		</ModalWithForm>
	);
};

export default AddItemModal;
