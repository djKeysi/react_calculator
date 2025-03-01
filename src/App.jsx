import './index.css';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	let [operand1, setOperand1] = useState('');
	let [operand2, setOperand2] = useState('');
	let [operator, setOperator] = useState('');
	let [rezult, setRezult] = useState('');
	const [equally, setEqually] = useState('');

	const data = [
		{
			operands: ['+', '-', '=', 'C'],
			operators: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
		},
	];

	const ButtonOperators = (e) => {
		if (operator === '+' || operator === '-') {
			operand2 += e.target.innerText;
			setOperand2(operand2);
		} else {
			operand1 += e.target.innerText;
			setOperand1(operand1);
		}

		switch (operator) {
			case '+':
				rezult = parseFloat(operand1) + parseFloat(operand2);
				setRezult(rezult);
				break;
			case '-':
				rezult = parseFloat(operand1) - parseFloat(operand2);
				setRezult(rezult);
				break;
		}
	};

	const ButtonOperands = (e) => {
		setOperator(e.target.innerText);
		if (e.target.innerText === 'C') {
			//operand1 = s'';
			setOperator('');
			setOperand1('');
			setOperand2('');
			setRezult('');
			setEqually('');
		}

		if (operator === '+' || operator === '-') {
			setEqually('=');
			setOperand1(rezult);
			setOperator('');
			setOperand2('');
		}
	};

	let operators = data.map((dataMas) => {
		return dataMas.operators.map((nameOperator, i) => (
			<button key={i} onClick={ButtonOperators}>
				{nameOperator}
			</button>
		));
	});

	let operands = data.map((dataMas) => {
		return dataMas.operands.map((nameOperands, i) => (
			<button key={i} onClick={ButtonOperands}>
				{nameOperands}
			</button>
		));
	});

	return (
		<div className={styles.parent}>
			<div className={styles.block}>
				<h1>Калькулятор</h1>
				<div
					className={
						equally !== '='
							? styles.notEqually + ' ' + styles.divborder
							: operator === '+' || operator === '-'
								? styles.notEqually + ' ' + styles.divborder
								: styles.equally + ' ' + styles.divborder
					}
				>
					{equally !== '='
						? operand1 + operator + operand2
						: rezult !== ''
							? operand1 + operator + operand2
							: rezult}
				</div>
				<div>{operators}</div>
				<div>{operands}</div>
			</div>
		</div>
	);
};
