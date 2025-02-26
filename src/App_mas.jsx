import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App_mas = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');
	let [valueInput, setvalueInput] = useState('');
	let [mas, setMas] = useState([]);
	let [value, setValue] = useState(0);

	const nums = [0, 1, 2, '+', '=', '-'];
	let str = '';
	//const operators = ['+', '-', '=', 'C'];
	//let valueInput =''

	const createButton = (label, index) => {
		return (
			<button
				onClick={() => {
					setMas([...mas, label]);
					console.log(typeof value);
					//console.log(' sss2', str);
					str = value + mas.join('').replace('=', ''); //1+1
					//mas = [];
					//console.log(' sss', str);

					if (label === '=' && str.indexOf('+')) {
						value = Number(str.split('+')[0]) + Number(str.split('+')[1]);
						//2
						setValue(value);
						//console.log(value);
						//2
						str = value;
						setMas([]);
						//setValue(str);
						console.log('in uslovie', str);
					}

					// if (label === '=' && str.indexOf('-')) {
					// 	value = Number(str.split('-')[0]) - Number(str.split('-')[1]);
					// }

					//console.log(value);
					// } else if (str.indexOf('-')) {
					// 	value = Number(str.split('-')[0]) + Number(str.split('-')[1]);
					// }

					// if (label === '+') {
					// 	value = Number(str.split('+')[0]) + Number(str.split('+')[1]);
					// 	setValue(value);
					// }

					//console.log(Number(str.split('+')[0]) + Number(str.split('+')[1]));
					//	console.log(str.split('+')[1]);

					// console.log(label);
					// // console.log(mas.join(''));

					// if (label === '+') {
					// 	operand2 = Number(label);
					// 	setOperand2(operand2);
					// 	console.log('operand2+', operand2);
					// } else if (label !== '+') {
					// 	operand1 = label;
					// 	setOperand1(operand1);
					// 	console.log('operand1111', operand1);
					// }
					// if (label === '=') {
					// 	console.log('operand2', operand2);

					// 	console.log(Number(operand1) + Number(operand2.slice(1)));
					// }
				}}
				key={index}
			>
				{label}
			</button>
		);
	};

	const onChange1 = (event) => {
		setValue(event.target.value);
	};

	// if(mas.join('') === '-'){
	//      operand1 = mas.join('')
	//      setOperand1(operand1)
	// }
	// else{
	//     operand2 = mas.join('')
	//     setOperand2(operand2)
	// }
	//console.log(operand1,operand2);

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<input
					// // className={
					// //     equally !== ''
					// //         ? styles.equally + ' ' + styles.input
					// //         : styles.notEqually + ' ' + styles.input
					// }
					disabled={true}
					value={
						value === 0 ? mas.join('') : value
						//	value
						// mas.join('')
						// (str = value)
						// // mas.join('')
						//mas.join('')
						//mas.join('')
						// valueInput  //operand1-operand2
						// equally === ''
						//     ? (valueInput = operand1 + operator + operand2)
						//     : operator === '-'
						//         ? (valueInput = Number(operand1) - Number(operand2))
						//         : operator === '+'
						//             ? (valueInput = Number(operand1) + Number(operand2))
						//             : 'Ошибка'
					}
					onChange={onChange1}
				/>
				<div className={styles.button}>
					{nums.map((num, index) => createButton(num, index))}
				</div>
				<div className={styles.button}>
					{/* {nums.map((num) => createButton(num))} */}
				</div>
				{/* <div className={styles.row}>
                        {['=', 'C'].map((num) => createButton(num))}
                    </div> */}
			</div>
		</div>
	);
};
