import React from "react"
import { Header } from "./component/Header"
import { Home } from "./component/Home"
function App() {
  window.onload = function() {
    console.log('first')
  }
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Home />
    </div>
  )
}

export default App
