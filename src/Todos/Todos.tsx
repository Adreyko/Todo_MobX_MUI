import { Button, Stack, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, flexbox, sizing } from '@mui/system';
import { Divider } from '@mui/material';
import Panel from './Panel';
import { theme } from './Theme';
import { observer } from 'mobx-react-lite';
import TodoList from './TodoList/TodoList';
import task from '../store/task';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useRef } from 'react';
import { toJS } from 'mobx';

const Todos = observer(() => {



    const completedTasks = task.todos.filter(el => el.completed === true)


    


    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Box sx={{ width: "100%", }} height='70vh' marginTop="50px" alignItems='center' width="100%" display='flex' justifyContent='center' flexDirection='column'   >
                    <Typography variant="h3" component="h2" align='center' color="#3f51b5" >
                        TODOLIST
                    </Typography>
                    <Panel />
                    <Divider sx={{ marginTop: "20px", width: "100%", fontSize: "50px", borderBottomWidth: '3px' }} variant="middle" />
                    <TodoList />
                    <Divider sx={{ marginTop: "20px", width: "100%", fontSize: "50px", borderBottomWidth: '3px' }} variant="middle" />
                    <Stack direction="row" spacing={60} marginTop="10px">
                        <Button onClick={() => task.removeAllTodo()} variant="outlined" color='warning' disabled={task.todos.length ? false : true} startIcon={<DeleteIcon />}>
                            Delete all
                        </Button>
                        <Stack>
                            <Typography variant='h6' color="#7b1fa2" component="h4">
                                Total tasks: {task.todos.length}
                            </Typography>
                            <Typography variant='h6' color="#4caf50" component="h4">
                                Completed tasks: {completedTasks.length}
                            </Typography>
                        </Stack>

                    </Stack>

                </Box>
            </Container>
        </ThemeProvider>
    )
})

export default Todos