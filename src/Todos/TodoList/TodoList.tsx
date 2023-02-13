import { Box, Grid, List, Typography } from '@mui/material'
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react'
import task from '../../store/task';
import TodoItem from './TodoItem'
import { ITodo, ITodos } from '../../Interfaces/ITodos';

const TodoList: FC = observer(() => {
  const allTodos = toJS(task.todos)

  const mappedTodoItems = allTodos.map((todo: ITodo) => <TodoItem key={todo.id} todos={todo} />)

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', height: "500px", overflow: 'auto' }}>
      {allTodos.length ?
        mappedTodoItems
        :
        <Typography sx={{ marginTop: '200px' }} variant="h2" component="h2" align='center' color="#3f51b5"  >
          Add your first task
        </Typography>

      }

    </List>
  )
})

export default TodoList
