import { useState, useEffect } from "react";
import { Todo } from "@/types";
import { mockTodos } from "@/data/mockTodos";

const APP_KEY = "applaa-todo-app";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const storedTodos = localStorage.getItem(APP_KEY);
      if (storedTodos) {
        return JSON.parse(storedTodos);
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage", error);
    }
    return mockTodos;
  });

  useEffect(() => {
    try {
      localStorage.setItem(APP_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to localStorage", error);
    }
  }, [todos]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, text: string) => {
    if (!text.trim()) return;
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    completedCount,
    totalCount,
    progress,
  };
}