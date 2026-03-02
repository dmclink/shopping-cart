import { MdDelete } from 'react-icons/md';
import '../styles/NumberInput.css';

function NumberInput({ id, onChange, defaultValue, label, removeFromCart }) {
	function handleChange(e) {
		const val = e.target.value;
		if (val === '') {
			e.target.value = '0';
			onChange(id, 0);
			return;
		}
		if (!/^\d+$/.test(val)) {
			e.target.value = val.slice(0, val.length - 1);
			return;
		}
		onChange(id, Number(val));
	}

	function increment() {
		onChange(id, Number(defaultValue + 1));
	}

	function decrement() {
		onChange(id, Math.max(1, Number(defaultValue - 1)));
	}

	function deleteItem() {
		removeFromCart(id);
	}

	return (
		<>
			{label ? <label className="number-input__label">{label}</label> : null}
			<input className="number-input__field" type="text" value={defaultValue} onChange={handleChange} />
			<div className="number-input__button-controls">
				<button className="number-input__button" type="button" onClick={increment}>
					+
				</button>
				<button className="number-input__button" type="button" onClick={decrement}>
					-
				</button>
				<button className="number-input__button" type="button" onClick={deleteItem}>
					<MdDelete size={14} color="red" />
				</button>
			</div>
		</>
	);
}

export default NumberInput;
