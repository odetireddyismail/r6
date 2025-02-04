import { FormEvent, useState } from "react"
import { Ismail } from "../Store/Todos"
const Todo = () => {

    const [toDo, setToDo] = useState('')
    const { handleTodo} = Ismail()
    const Change = (e: FormEvent<HTMLFormElement>) => {
        handleTodo(toDo)
        setToDo('')

        e.preventDefault()
    }

    
    return (
        <div>
            <div>
            
            <form onSubmit={Change}>
                <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)}></input>
                <button type="submit">ADD</button>
            </form>
            </div>
        </div>
    )
}

export default Todo