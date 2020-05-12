import React from 'react';
import TodoTemplateProps from '../types/TodoTemplate';
import './TodoTemplate.scss';

export const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
    return (
        <div>
            <div className='TodoTemplate'>
                <div className='app-title'>일정 관리</div>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};
