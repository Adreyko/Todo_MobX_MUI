import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { Add } from '@mui/icons-material'
import { ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import task from '../store/task';
const Panel = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [text, setText] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }


    const newTodo = {
        id: uuid(),
        text: text,
        completed: false
    }


    const addNewTodo = () => {
        task.addTodo(newTodo)
        setText("")
        
    }



    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
            <TextField ref={inputRef} id="outlined-basic" style={{ width: "80%", marginLeft: '10px' }} variant="outlined" onChange={handleInputChange}
                value={text} />
            <Button  style={{ width: "15%", marginRight: '10px',  }} variant="contained" disabled={text ? false : true} endIcon={<Add />} onClick={addNewTodo} >
                Add
            </Button>

        </Box>
    )
}

export default Panel