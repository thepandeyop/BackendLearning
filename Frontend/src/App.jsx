import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
// import { response } from 'express' // This import is not needed in the client-side code

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>hey learning backend</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={index}> {/* Fixed key attribute and changed 'jokes.id' to 'index' */}
          <h3>
            {joke.title}
          </h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
