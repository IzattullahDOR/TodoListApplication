import { useState } from 'react'

import './App.css'
import Todolist from './assets/components/Todolist'
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'

function App() {
 

  return (
    <>
    <Container>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Todolist />
    </Container>
      
    </>
  )
}

export default App
