import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Landing from './pages/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  )
}

export default App
