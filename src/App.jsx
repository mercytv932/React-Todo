import './App.css'
import Todo from './components/todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1>Todo</h1>
    <Todo/>

    </>
  )
}

export default App
