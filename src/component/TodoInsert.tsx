import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import TodoInsertProps from '../types/TodoInsert';

export const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
    const [value, setValue] = useState<string>('');

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        },
        []
    );

    const onSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            onInsert(value);
            setValue('');
            event.preventDefault();
        },
        [onInsert, value]
    );
    return (
        <form action='' className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};
