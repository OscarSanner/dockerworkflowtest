import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  let onClickPostRequest = async () => {
      try {
          const request = new Request('http://localhost:9000/update')
          const response = await fetch(request)
        }
      catch (e) {
          alert(e)
      }
  }

  let onClickGetRequest = async () => {
    try {
        const request = new Request('http://localhost:9000/get')
        const response = await fetch(request)
        const json = await response.json()
        setCount(json.counter)
      }
    catch (e) {
        alert(e)
    }
}

  return (
    <div className="App">
        <h1>{count}</h1>
        Hej
        <button onClick = {onClickPostRequest}> Click me</button>
        <button onClick = {onClickGetRequest}>Update counter</button>
    </div>
  );
}

export default App;
