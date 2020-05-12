import { todosType } from './App';

export interface todoListProps {
    todos: todosType[];
    onRemove: (id: number) => void;
    onToggle: (id: any) => void;
}

export type itemType = todosType;
