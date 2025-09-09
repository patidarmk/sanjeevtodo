import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TodoItem } from "@/components/TodoItem";
import { Download, PlusCircle } from "lucide-react";
import Papa from "papaparse";

export function Index() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    completedCount,
    totalCount,
    progress,
  } = useTodos();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText("");
  };

  const handleExport = () => {
    const csvData = todos.map(({ id, createdAt, ...rest }) => rest);
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "todos.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">My Tasks</CardTitle>
          <CardDescription>
            Manage your daily tasks and stay productive.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" disabled={!newTodoText.trim()}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </form>

          <div className="mb-6 space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Progress</span>
              <span className="text-muted-foreground">
                {completedCount} / {totalCount} completed
              </span>
            </div>
            <Progress value={progress} />
          </div>

          <div className="flex justify-end mb-4">
            <Button variant="outline" onClick={handleExport} disabled={todos.length === 0}>
              <Download className="h-4 w-4 mr-2" />
              Export to CSV
            </Button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onUpdate={updateTodo}
                />
              ))
            ) : (
              <div className="text-center p-8 text-muted-foreground">
                <p className="font-medium">You're all caught up!</p>
                <p className="text-sm">Add a new task to get started.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}