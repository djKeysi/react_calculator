import './index.css';

import styles from './App.module.css';
import { useState } from 'react';

export const App_mas = () => {
    let [operand1, setOperand1] = useState(0);
	let [operand2, setOperand2] = useState(0);
	let [valueInput, setvalueInput] = useState('');
    let [mas,setMas] = useState([])
    
    const nums = [0, 1, 2];
    const operators = ['+','-','=','C'];
    //let valueInput =''
  
    const createButton = (label) =>{
        return(
            <button onClick={() =>{
                 setMas([...mas, label])
                //  console.log(typeof label);
                //  //console.log(mas);
                console.log('sdsds',mas.join(''));
                 
                 
                 if(mas.join('') === '+'){
                    operand2 = mas.join('')
                    setOperand2(operand2)

                    console.log(operand2);
                 }
                 else {
                   
                    operand1 = mas.join('').replace('+','') 
                    setOperand1(operand1)
                    console.log("operand1", operand1); 
                
                 }

                 if(label === '='){
                     valueInput = Number(operand1) + Number(operand2)
                     console.log("operand1",operand1);
                     console.log("operand2",operand2);
                     console.log(valueInput);
                     setvalueInput(valueInput)
                    
                 }
               
                 
                // }
                // else{
               
                
                   
                  
                
                //}
                
                }
                 
            }
            
            >
                {label}
            </button>
                 
        )
    }


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
                           // mas.join('')      
                           valueInput  
                           // valueInput  //operand1-operand2
                            // equally === ''
                            //     ? (valueInput = operand1 + operator + operand2)
                            //     : operator === '-'
                            //         ? (valueInput = Number(operand1) - Number(operand2))
                            //         : operator === '+'
                            //             ? (valueInput = Number(operand1) + Number(operand2))
                            //             : 'Ошибка'
                        }
                    />
                    <div className={styles.button}>
                        {nums.map((num) => createButton(num))}
                    </div>
                    <div className={styles.button}>
                        {operators.map((num) => createButton(num))}
                    </div>
                    {/* <div className={styles.row}>
                        {['=', 'C'].map((num) => createButton(num))}
                    </div> */}
                    </div>
                    </div>
    )
}


