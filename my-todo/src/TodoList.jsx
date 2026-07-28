function TodoList({todos, deleteTodo}) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item.text}
            <button onClick={() => deleteTodo(index)}> ❌</button>
        </li>
      ))}
    </ul>
  )
}
export default TodoList;