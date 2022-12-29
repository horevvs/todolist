import React, { useRef, useEffect } from 'react';

import './App.css';


const names = ["whale", "squid", "turtle", "coral", "starfish"];





function Getcomponents() {
   
        const nameField = useRef(null);
        const send = () => {
          // свойство current указывает на элемент input
          const inputElement = nameField.current;
          console.log("Имя: " + inputElement.value);
        };
        return (
          <div>
            <input type="text" ref={nameField} />
            <button onClick={send}>Отправить</button>
          </div>
        );
      
};






// // return (
// //     <div>
// //         {names.map(item => {
// //             return (
// //             <ul>{item}</ul>
// //             )
// //         })}
// //     </div>
// );




















export default Getcomponents