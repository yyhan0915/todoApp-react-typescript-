import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import { TodoTemplate } from './component/TodoTemplate';
import { TodoInsert } from './component/TodoInsert';
import { TodoList } from './component/TodoList';
import { todosType } from './types/App';

const App: React.FC = () => {
    const [todos, setTodos] = useState<todosType[]>([
        { id: 1, text: '리액트의 기초 알아보기', checked: true },
        { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
        { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
    ]);

    const nextId = useRef<number>(4);

    const onInsert = useCallback(
        (text: string): void => {
            const todo: todosType = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id: number): void => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}></TodoInsert>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
