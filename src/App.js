
import React, { useRef, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function  App () {
  const ref = useRef(null);
  const checkbox = useRef(null);
 
  const [inputs, setInputs] = useState([])
  const [list, setList] = useState([])
 
  const addfrominput = () => {
    console.log(inputs)
    let random = Math.random()
    setList([...list, { value: inputs, id: random }])
    console.log(list)
  }


  const deletehandler=(id) => {
let newarray=list.filter((item)=>item.id !==id )
setList(newarray)

  }

  let check= () => {
    checkbox.current.checked = true
  }



  return (
    <>
      <div >
        <div className='position'>
          
           <TextField id="standard-basic" label="заметки" variant="standard"   ref={ref} value={inputs} onChange={(e) => setInputs(e.target.value)}  />
          
            <Button onClick={addfrominput}  variant="contained" endIcon={<SendIcon />}> Send  </Button>


          {/* <input ref={ref} value={inputs} onChange={(e) => setInputs(e.target.value)} placeholder='add text' />        */}
          {/* <button onClick={addfrominput}>добавить заметку</button> */}
        </div>

        
      

        
        {list.map((item) => {
          return (
            <div key={item.id} >

             



            <div className='flow positionreder' > <input type="checkbox" name="disabled"    ref={checkbox} ></input> 
             
             

              <p onClick={check}    > {item.value} </p> 


              <Tooltip title="Delete">
                <IconButton onClick={ ()=> deletehandler(item.id) } >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              dsd
              {/* <button  onClick={ ()=> deletehandler(item.id) } > удалить заметку</button> */}
                            
             </div>

              
            </div>
                      )
        })}
      </div> 
  
    </>
  )
}

 
export default App












// import './App.css';
// import React, { useState, useRef, } from 'react';



// function App() {


//   const [input, setInput] = useState([])
//   const [list, setList] = useState([])

//   const ref = useRef(null)

//   const addinfofrominput = () => {
 
//     let random = Math.random()
//     setList(...list, { id: random, value: input })
 
//   }


//   return (
//     <>
//       <input ref={ref} value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addinfofrominput} > добавить2</button>
// <div>

// {list.map((item) => {

//         return (
//           <div>{item.id} </div>
//         )
//       }
//       )}


// </div>
      

//     </>
//   )
// }







// export default App;



