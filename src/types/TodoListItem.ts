import { todosType } from './App';

export type TodoListItemProps = {
    todo: todosType;
    onRemove: (id: number) => void;
    onToggle: (id: any) => void;
};
