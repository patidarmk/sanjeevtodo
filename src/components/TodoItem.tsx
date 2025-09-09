import { useState } from "react";
import { Todo } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() !== todo.text) {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center p-4 border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="mr-4"
      />
      <div className="flex-grow">
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleUpdate}
            autoFocus
            className="h-8"
          />
        ) : (
          <label
            htmlFor={`todo-${todo.id}`}
            className={cn(
              "font-medium cursor-pointer",
              todo.completed && "line-through text-muted-foreground"
            )}
          >
            {todo.text}
          </label>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          Added {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
        </p>
      </div>
      <div className="flex items-center space-x-2 ml-4">
        {isEditing ? (
          <Button variant="ghost" size="icon" onClick={handleUpdate}>
            <Save className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
          </Button>
        )}
        <Button variant="ghost" size="icon" onClick={() => onDelete(todo.id)}>
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
}