import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const r = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await r.json();
  return {
    todos: res,
  };
};

export default function Todos() {
  const { todos } = useLoaderData() as any;
  return (
    <>
      {todos.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
}
