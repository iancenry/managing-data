import { useState } from 'react'
import data from './data'
import Box from './components/Box'

function App() {
  const [squares, setSquares] = useState(data)

  function toggle(id){
    setSquares(prevSquares =>{
      return prevSquares.map(square=> {
        return square.id === id? {...square, on: !square.on} : square
      })
      
    })
  }

  //using parenthesis instead square braces allows us to utilize the implicit return
  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ))

  return (
    <main>
      {squareElements}
      <hr />
    </main>
  )
}

export default App

// cont from 7:25:00