import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App_mas = () => {
	// let [operand1, setOperand1] = useState('');
	// let [operand2, setOperand2] = useState('');
	// let [operator, setOperator] = useState('');

	let [mas, setMas] = useState([]);
	let [value, setValue] = useState(0);
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const nums = [0, 1, 2, '+', '=', '-', 'C'];
	let str = '';
	str = value + mas.join('').replace('=', '');

	const funcCalc = (label, operator, flag) => {
		if (label === '=' && str.indexOf(operator)) {
			value = Number(str.split(operator)[0]) + Number(str.split(operator)[1]);
			setValue(value);
			str = value;
			setMas([]);
		}
		if (isNaN(value)) {
			setValue('Значение должно быть числом!!!');
		}
	};

	const funcCalc2 = (label, operator, flag) => {
		if (label === '=' && str.indexOf(operator)) {
			value = Number(str.split(operator)[0]) - Number(str.split(operator)[1]);
			setValue(value);
			str = value;
			setMas([]);
		}
		if (isNaN(value)) {
			setValue('Значение должно быть числом!!!');
		}
	};

	const createButton = (label, index) => {
		return (
			<button
				disabled={label === '-' || label === '+' ? !buttonDisabled : ''}
				onClick={() => {
					setMas([...mas, label]);
					// console.log(Number(label));

					setButtonDisabled(true);

					// console.log(mas.join(''));

					//funcCalc(label, '+');

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
