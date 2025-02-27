import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App_mas = () => {
	// let [operand1, setOperand1] = useState('');
	// let [operand2, setOperand2] = useState('');
	// let [operator, setOperator] = useState('');

	let [mas, setMas] = useState([]);
	let [value, setValue] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, '+', '=', '-', 'C'];
	let str = '';

	const funcCalc2 = (operator) => {
		value = Number(str.split(operator)[0]) + Number(str.split(operator)[1]);
		setValue(value);
		str = Number(value);
		console.log(typeof str);
		setMas([]);
	};
	const funcCalc = (operator) => {
		value = Number(str.split(operator)[0]) - Number(str.split(operator)[1]);
		setValue(value);
		str = Number(value);
		console.log(typeof str);
		setMas([]);
	};

	const createButton = (label, index) => {
		return (
			<button
				disabled={label === '-' || label === '+' ? !buttonDisabled : ''}
				onClick={() => {
					setMas([...mas, label]);

					str = value + mas.join('');

					if (label === '=') {
						if (str.includes('-')) {
							funcCalc('-');
						} else if (str.includes('+')) {
							funcCalc2('+');
						}
					}

					setButtonDisabled(true);
					if (isNaN(value)) {
						setValue('Значение должно быть числом!!!');
					}

					if (label === 'C') {
						setMas([]);
						setValue(0);
						setButtonDisabled(false);
					}
				}}
				key={index}
			>
				{label}
			</button>
		);
	};

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<input
					className={
						mas.join('') !== ''
							? styles.notEqually + ' ' + styles.input
							: styles.equally + ' ' + styles.input
					}
					disabled={true}
					value={value === 0 ? mas.join('') : value + mas.join('')}
				/>
				<div className={styles.button}>
					{nums.map((num, index) => createButton(num, index))}
				</div>
				<div className={styles.button}></div>
			</div>
		</div>
	);
};
