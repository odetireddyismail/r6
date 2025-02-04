
import Navbar from './com/Navbar'
import Todo from './com/Todos'
import { AddTodos } from './com/AddTodos'
import './App.css'
const App = () => {
  return (
    <main>
      <h1>TODO NEXT + TYPESCRIPT</h1>
      <Navbar />
      <Todo />
      <AddTodos />
    </main>
  )
}

export default App