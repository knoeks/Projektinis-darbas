
import { useState } from "react"
import Trending from "./components/Trending.jsx"

function App() {
  const [update, setUpdate] = useState()

  return <Trending setUpdate={setUpdate}/>
}

export default App
