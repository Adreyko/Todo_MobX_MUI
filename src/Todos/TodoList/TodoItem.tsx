import { Box, Checkbox, IconButton, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import React from 'react'
import { ITodo, ITodos } from '../../Interfaces/ITodos'
import DeleteIcon from '@mui/icons-material/Delete';
import task from '../../store/task';
import { observer } from 'mobx-react-lite';

interface Props {
  todos: ITodo
}

const TodoItem: React.FC<Props> = observer(({ todos }) => {

    return (

        <ListItem sx={{ border: 1 }} key={todos.id}
       
            secondaryAction={
                <IconButton color='error' edge="end" aria-label="comments" onClick={() => task.removeTodo(todos.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding>
            <ListItemButton role={undefined}  dense>
                <Checkbox
                color='success'
                    checked={todos.completed}
                    onChange={() => task.completedTodo(todos.id)}
                    inputProps={{ 'aria-label': 'todos.completed' }}
                    
                />
                <ListItemText primary={todos.text} />
            </ListItemButton>

        </ListItem>
    )
})

export default TodoItem
