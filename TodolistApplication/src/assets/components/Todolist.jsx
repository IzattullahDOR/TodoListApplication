import { Button, Stack, TextField } from '@mui/material';
import { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/lab';

export default function Todolist() {
    const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo({
            ...todo,
            [name]: value
        });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ desc: "", date: "", priority: "" }); // Clear all input fields
    }

    const handleDelete = () => {
        setTodos(todos.filter((todo, index) => 
            index != gridRef.current.getSelectedNodes()[0].id))
      };

    const [columnDefs, setColumnDefs] =useState([
        {field: 'desc'},
        {field: 'date'},
        {field: 'priority'}

    ]);

    const gridRef = useRef();

    return (
        <>
        <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
            <TextField
                label='Description'
                name='desc'
                onChange={handleChange}
                value={todo.desc}
            />
            <TextField
                type='date'
                name='date'
                onChange={handleChange}
                value={todo.date}
            />
             
            <TextField
                label='Priority'
                name='priority'
                onChange={handleChange}
                value={todo.priority}
            />
            <Button onClick={addTodo}>Add</Button>
            <Button onClick={handleDelete}>Delete</Button>

            </Stack>
            
            <div className="ag-theme-material" style={{width: 700, height: 500}}>
      <AgGridReact 
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        rowData={todos}
        columnDefs={columnDefs}
        rowSelection="single"
      />
    </div>
        </>
    );
}

