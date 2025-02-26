import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');
	let [operator, setOperator] = useState('');
	const [equally, setEqually] = useState('');
	//let [valueInput, setvalueInput] = useState('');
	let valueInput =''

	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const getOperator = (oper)=>{
		if (valueInput !== '') {
			setOperator(oper);
			setEqually('');

			if (equally !== '') {
				setOperand1(valueInput);
				setOperand2('');
			}
		}
	}

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<input
					className={
						equally !== ''
							? styles.equally + ' ' + styles.input
							: styles.notEqually + ' ' + styles.input
					}
					disabled={true}
					value={
						equally === ''
							? (valueInput = operand1 + operator + operand2)
							: operator === '-'
								? (valueInput = Number(operand1) - Number(operand2))
								: operator === '+'
									? (valueInput = Number(operand1) + Number(operand2))
									: 'Ошибка'
					}
				
				/>
				<div>
					<button
						className={styles.btn_block}
						onClick={() => {
							getOperator('-')
							
						}}
					>
						-
					</button>
					<button
						onClick={() => {
							getOperator('+')
						
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
										//setvalueInput(valueInput);
									} else {
										operand1 += num;
										setOperand1(operand1);
										//setvalueInput(valueInput);			
									}
									
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
