
import React, { useRef, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';





function App() {


  // подтвержедние удаления //
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //


  const ref = useRef(null);

  const checkbox = useRef(null);

  const [inputs, setInputs] = useState([])
  const [list, setList] = useState([])
  const [edit, setEdit] = useState([])
  const [returnedit, setReturnedit] = useState([])

  // добвление элемента с интпута //
  const addfrominput = () => {
    let random = Math.random().toFixed(2) * 100

    setList([...list, { value: inputs, id: random }])

    // просто складываем сюда тоже самое что и в лист
    setReturnedit([...returnedit, { value: inputs, id: random }])


    // ищем последний элемент масссива, чтобы  положить  отправить его на сервер.
    console.log(list.length)
    let index = list.at(-1);
    let obj = {
      name: index.value
    }

    console.log(returnedit)
    console.log(list)


    fetch('https://todo.soprano.biz/note', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  //  изменение отредактированной строки 
  const send = (id, value) => {
    let obj = {
      value: `${edit}`,
      id: id,
    }

    for (let i = 0; i < list.length; i++)
      if (list[i].id !== obj.id) {
      }
      else {
        list[i].value = obj.value
      }

    let newarray = list.filter((item) => item.value !== value)
    setList(newarray)
    console.log(list)
    console.log(returnedit)



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

  // удаление заметки
  const deletehandler = (id) => {
    let newarray = list.filter((item) => item.id !== id)
    setList(newarray)
    console.log(list)
    setOpen(false);
  }

  // толи нужен толи нет
  let check = () => {
    checkbox.current.checked = true
    checkbox.current.styles = 'color:red';
  }

  let returndeleted = (id, value) => {

    let obj = {
     ids: id,
     }

    console.log(list)
    console.log('was')

    console.log(returnedit)
    console.log('was')

    for (let i = 0; i < returnedit.length; i++)
     if (returnedit[i].id === obj.ids) {
     list[i].value = returnedit[i].value
    // console.log(returnedit[i].value)
    // console.log(returnedit[i].id)
    // console.log(list[i].value)
    // console.log(list[i].id)
    // list[i].value = 22
    // console.log(list)
    // console.log(list[i].value + 'cтало')
    // console.log(returnedit[i].value + 'было')
    // setList(list)
    // console.log(list)
    // console.log('now')
    console.log(list)
    console.log('now')

    let newarray = list.filter((item) => item.value !== value)
    setList(newarray)

     }
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
              <div>
                <Tooltip title="Delete">
                  <IconButton onClick={handleClickOpen} >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Dialog className='modalDialog '
                  open={open}
                  onClose={handleClose}
                >
                  <DialogContent >
                    <DialogContentText className='modal'>
                      Вы точно  хотите удалить заметку?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button color="warning" onClick={() => deletehandler(item.id)}
                    >Да</Button>
                    <Button onClick={handleClose} autoFocus>
                      Нет
                    </Button>
                  </DialogActions>
                </Dialog>


              </div>

              {/* <Tooltip title="Delete">
                <IconButton onClick={() => deletehandler(item.id)} >
                  <DeleteIcon />
                 
                </IconButton>
             
              </Tooltip> */}


              <div className='opasity'>
                <input type="text" placeholder='add text' value={edit} onChange={(e) => setEdit(e.target.value)} />
                <Button variant="text" onClick={() => send(item.id)} >  edit </Button>
                <Tooltip title="return edit">
                  <IconButton onClick={() => returndeleted(item.id)} >
                    <BackspaceSharpIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App








