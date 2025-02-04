import { ReactNode, createContext, useContext, useState } from "react";

export type todoContextProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todo: Todo[];
  handleTodo: (task: string) => void; //call signature
  ChangeBoolen: (id: string) => void;
  Delete: (id: string) => void;
};

export const TodoContext = createContext<TodosContext | null>(null);

const TodoProvider = ({ children }: todoContextProps) => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    try {
      let newData = localStorage.getItem("todos") || "[]";
      return JSON.parse(newData) as Todo[];
    } catch (error) {
      return [];
    }
  });

  const handleTodo = (task: string) => {
    setTodo((pre) => {
      const newTodo: Todo[] = [
        ...pre,
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodo));

      return newTodo;

      // let da=localStorage.getItem("todos")

      //return JSON.stringify(da)
    });
  };

  //Change Completed Property

  const ChangeBoolen = (id: string) => {
    setTodo((pre) => {
      let newTodo = pre.map((curr) => {
        if (curr.id === id) {
          return { ...curr, completed: !curr.completed };
        }
        return curr;
      });

      localStorage.setItem("todos", JSON.stringify(newTodo));

      return [];
    });
  };

  //Delete the Data

  const Delete = () => {
    //console.log(del)
    setTodo((pre) => {
      let newData = pre.filter((curr) => curr.id !== del);
      // console.log(newData)
      localStorage.setItem("todos", JSON.stringify(newData));
      return newData;
    });
  };

  //console.log(todo)

  return (
    <TodoContext.Provider value={{ todo, handleTodo, ChangeBoolen, Delete }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const Ismail = () => {
  const Data = useContext(TodoContext);

  return Data;
  //console.log(Data);
};
