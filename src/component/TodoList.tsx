import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { todoListProps, itemType } from '../types/TodoList';

export const TodoList: React.FC<todoListProps> = ({
    todos,
    onRemove,
    onToggle,
}) => {
    return (
        <div className='TodoList'>
            {todos.map((item: itemType) => (
                <TodoListItem
                    todo={item}
                    key={item.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};
