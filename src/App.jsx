import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');

	let [operator, setOperator] = useState('');

	const [equally, setEqually] = useState('');

	let [rezult, setRezult] = useState('');
	let [valueInput, setvalueInput] = useState('');

	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const handle = (event) => {
		//return e.target.value;
		//setOperand1(e.target.value);
		//setvalueInput(event.target.value);
		console.log('sdsd', valueInput);
	};

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<input
					className={styles.input}
					disabled={false}
					value={
						//	valueInput.trim()
						equally === ''
							? (valueInput = operand1 + operator + operand2)
							: operator === '-'
								? (valueInput = Number(operand1) - Number(operand2))
								: operator === '+'
									? (valueInput = Number(operand1) + Number(operand2))
									: equally !== ' '
										? (valueInput = 'ssssss')
										: '1111'
						// operator === '+'
						// 	? operand1 + operator + operand2
						// 	: operand2 + operator + operand1
					}
					onChange={handle}
				/>
				<div>
					{' '}
					<button
						className={styles.btn_block}
						onClick={() => {
							setOperator('-');
							setEqually('');

							if (equally !== '') {
								setOperand1(valueInput);
								setOperand2('');
								// valueInput = operator;
								// console.log(valueInput);

								// setvalueInput(valueInput);
							}
						}}
					>
						-
					</button>
					<button
						onClick={() => {
							setOperator('+');
							setEqually('');

							if (equally !== '') {
								setOperand1(valueInput);
								setOperand2('');
								// valueInput = operator;
								// console.log(valueInput);

								// setvalueInput(valueInput);
							}
							// setOperand1('');
							// setOperand2('');
							// setOperator('');
						}}
					>
						+
					</button>
					<button
						className={styles.btn_block}
						onClick={() => {
							setEqually('=');
							//setRezult(rezult);
						}}
					>
						=
					</button>
					<button
						onClick={() => {
							setOperand1('');
							setOperand2('');
							setOperator('');
							setEqually('');
							setRezult('');
						}}
					>
						C
					</button>
					<ul>
						{nums.map((num, index) => (
							<button
								onClick={() => {
									// operand1 += num;
									// setOperand1(operand1);
									// if (operator === '-') {
									// 	operand2 += num;
									// 	setOperand2(operand2);
									// 	//setOperator('');
									// }
									if (operator === '-' || operator === '+') {
										operand2 += num;
										setOperand2(operand2);

										setvalueInput(operand2);

										//setOperator('');
									} else {
										operand1 += num;
										setOperand1(operand1);

										setvalueInput(operand1);

										//setOperator('');
									}

									//	setEqually('');

									//console.log(valueInput + operator);

									// setRezult(rezult);
									// if (rezult !== '') {
									// 	console.log('ddd', rezult);
									// }

									//
									// num += operand1;
									// operand2 += num;
									// setOperand1(num);
									// //	console.log(operand2);
									// switch (operator) {
									// 	case '-':
									// 		rezult = Number(operand1) - Number(operand2);
									// 		setRezult(rezult);
									// 		//setOperator('');
									// 		setOperand2(num);
									// 		break;
									// 	case '+':
									// 		rezult = Number(operand1) + Number(operand2);
									// 		setRezult(rezult);
									// 		break;
									// 	// default:
									// 	// 	setOperator('');
									// }
									// if (rezult !== '') {
									// 	//setRezult('');
									// 	//setOperator('');
									// 	// setOperand1('');
									// 	// setOperand2('');
									// } else {
									// 	setOperator('');
									// }
									//}
									// if (rezult === '') {
									// 	setOperator('');
									// }
									// console.log(
									// 	'operand',
									// 	operand1 + operator + operand2 + rezult,
									// );
								}}
								key={index}
							>
								{num}
							</button>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
