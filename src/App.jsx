import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  )
}

export default App
