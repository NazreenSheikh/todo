import { useEffect, useState } from 'react'
import { useRef } from 'react/cjs/react.development'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [change, setChange] = useState('no')
  const [data, setData] = useState('')
  const taskRef = useRef('')
  const descRef = useRef('')
  const statusRef = useRef('')

  console.log(statusRef.current.checked)

  const handleSubmit = (e) => {
    e.preventDefault()
    let status = 0
    if (statusRef.current.checked === true) {
      status = 1
      console.log(status)
    }

    fetch('http://localhost:5000/add', {
      method: 'POST',
      body: JSON.stringify({
        todoName: taskRef.current.value,
        todoDesc: descRef.current.value,
        todoStatus: status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    taskRef.current.value = ''
    descRef.current.value = ''
    statusRef.current.value = 'off'
    fetchData()
    setChange('yes')
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => fetchData(), [change])

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="new task/todo" ref={taskRef} />
          <br />
          <input type="text" placeholder="description" ref={descRef} />
          <br />
          <input type="checkbox" ref={statusRef} />
          <label for="cricket">Done</label>
          <br />
          <button type="submit"> add</button>
        </form>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
        {data
          ? data.map((data) => {
              return (
                <div className="card">
                  <h4> {data.todoName}</h4>
                  <h4> {data.todoDesc}</h4>
                  <h4> {data.todoStatus}</h4>
                </div>
              )
            })
          : ''}
      </header>
    </div>
  )
}

export default App
