import React, { FC } from 'react';
import Todo from "./Todo";

interface TodoItem {
    id: number;
    completed: boolean;
    text: string;
}

interface TodoListProps {
    todos: TodoItem[];
    toggleTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                completed={todo.completed}
                text={todo.text}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
);
export default TodoList;