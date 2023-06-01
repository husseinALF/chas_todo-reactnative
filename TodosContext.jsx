import { createContext, useState } from "react";

const TodosContext = createContext({});
const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Laga mat",
      description: "Jag måste laga middag ikväll, tror det blir tacos",
      done: false,
    },
    {
      id: 2,
      title: "Städa",
      description:
        "Jag måste städa huset, först börjar jag med vardagsrummet sen måste avsluta med badrummet",
      done: false,
    },
    {
      id: 3,
      title: "Handla mat",
      description:
        "Jag måste handla mat, för middagen blir det tacos ingredienser sen frukt och lite grönsaker",
      done: false,
    },
  ]);

  const handleAddTodo = (title, description) => {
    const newTodo = {
      id: Math.random().toString(),
      title: title,
      description: description,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const deleteTodo = (itemId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos(updatedTodos);
  };

  const updateDone = (itemId, done) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === itemId ? { ...todo, done } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        setTodos,
        deleteTodo,
        updateDone,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosProvider, TodosContext };
