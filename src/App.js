
import React, { useRef, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



function App() {

  const ref = useRef(null);

  const checkbox = useRef(null);

  const [inputs, setInputs] = useState([])
  const [list, setList] = useState([])
  const [edit, setEdit] = useState([])

  const addfrominput = () => {
    let random = Math.random().toFixed(2) * 1000

    setList([...list, { value: inputs, id: random }])
    console.log(list.length)
    let index = list.at(-1);
    let obj = {
      name: index.value
    }

    console.log(index.value)
    console.log(index.id)
    console.log(obj.name)

    fetch('https://todo.soprano.biz/note', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }



  const send = (id, value) => {
    let obj = {
      value: `${edit}`,
      id: id,
    }



    let newarrays = list
    for (let i = 0; i < newarrays.length; i++)
      if (newarrays[i].id !== obj.id) {
      }
      else {
        newarrays[i].value = obj.value
      }
    setList(newarrays)

    let newarray = list.filter((item) => item.value !== value)
    setList(newarray)
    console.log(list)

    // сюда доюавить то что должно попадать с редактирования


    let obj2 = {
      name: obj.value
    }






    // здесб вместо 299 должен попадать то айдишник   в котором было записано изначально//
    fetch('https://todo.soprano.biz/note/299', {
      method: 'PUT',
      body: JSON.stringify(obj2),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })





  }


  const deletehandler = (id) => {

    let newarray = list.filter((item) => item.id !== id)
    setList(newarray)
    console.log(list)






  }

  let check = () => {
    checkbox.current.checked = true
  }

  return (
    <div >
      <div className='position'>
        <TextField id="standard-basic" label="заметки" variant="standard" ref={ref} value={inputs} onChange={(e) => setInputs(e.target.value)} />
        <Button onClick={addfrominput} variant="contained" endIcon={<SendIcon />}> Send  </Button>
      </div>

      {list.map((item) => {
        return (
          <div key={item.id} >
            <div className='flow positionreder'> <input type="checkbox" name="disabled" ref={checkbox} ></input>
              <p onClick={check}> {item.value} </p>
              <Tooltip title="Delete">
                <IconButton onClick={() => deletehandler(item.id)} >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <div className='opasity'>
                <input type="text" placeholder='add text' value={edit} onChange={(e) => setEdit(e.target.value)} />
                <Button variant="text" onClick={() => send(item.id)} >  edit </Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App








