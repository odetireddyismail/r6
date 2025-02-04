//import { useState } from ""
import { useSearchParams } from "react-router-dom"
import { Ismail } from "../Store/Todos"


export const AddTodos = () => {

    const [searchParems] = useSearchParams()

    const Search = searchParems.get('todo')
    //console.log(searchParems.get('todo'))

    const { todo, ChangeBoolen, Delete } = Ismail()
    //console.log(todo)

    let filterDa = todo
    console.log(Search)
    if (Search == 'Active') {
        filterDa = filterDa.filter((cu) => !cu.completed)
    }

    if (Search == 'completed') {
        filterDa = filterDa.filter((cu) => cu.completed)
    }
    // console.log(todo)
    return (
        <div>
            {filterDa.map((curr: [], index: number) => <ul key={index} className="main-task" style={{ listStyleType: 'none' }}>
                <li>
                    <input type="checkbox" checked={curr.completed} onChange={() => ChangeBoolen(curr.id)}></input>
                    <label>{curr.task}</label>
                    {curr.completed ? <button onClick={() => Delete(curr.id)}>Delete</button> : null}
                </li>
            </ul>)}
        </div>
    )
}