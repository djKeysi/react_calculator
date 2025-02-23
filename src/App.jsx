import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');

	let [operator, setOperator] = useState('');

	const [equally, setEqually] = useState('');

	let [rezult, setRezult] = useState('');

	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<input
					className={styles.input}
					disabled={true}
					value={
						equally !== ''
							? rezult //+ operator + operand2
							: operand1 + operator + operand2 + equally
					}
				/>
				<div>
					{' '}
					<button
						className={styles.btn_block}
						onClick={() => {
							setOperator('-');
						}}
					>
						-
					</button>
					<button
						onClick={() => {
							setOperator('+');
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
									if (operator === '-' || operator === '+') {
										operand2 += num;
										setOperand2(operand2);
									} else {
										operand1 += num;
										setOperand1(operand1);
									}

									switch (operator) {
										case '-':
											rezult = Number(operand1) - Number(operand2);
											setRezult(rezult);

											break;
										case '+':
											rezult = Number(operand1) + Number(operand2);
											setRezult(rezult);
											break;
									}

									// if (rezult === '') {
									// 	setOperator('');
									// }

									console.log(
										'operand',
										operand1 + operator + operand2 + rezult,
									);
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
