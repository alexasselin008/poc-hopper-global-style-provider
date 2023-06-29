import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button'
import { HopperProvider } from './style-system/HopperProvider'
import viteLogo from '/vite.svg'

function App() {
  const [darkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">

            <HopperProvider withGlobalStyles withTokens colorScheme={darkMode ? "dark": "light"}>
                <Button onClick={() => setIsDarkMode(x => !x)} >
                Toggle Theme
                </Button>
            </HopperProvider>
            <div style={{marginTop: "40px"}}></div>
            <HopperProvider withTokens scope="o-ui-0-0-1" colorScheme={darkMode ? "dark": "light"}>
                <Button onClick={() => setIsDarkMode((x) => !x)} >
                    Toggle Theme
                </Button>
            </HopperProvider>
        </div>
      </>
  )
}

export default App
