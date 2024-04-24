import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FrontPage from './page/frontPage'
import BackPage from './page/backPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FrontPage/>
      <BackPage/>
    </>
  )
}

export default App
