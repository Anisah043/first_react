import { memo } from 'react';

const ToDo = ({ todos }) => {
    console.log("ToDo component rendered");
    return (
        <>
            <h2>My ToDos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
}

export default memo(ToDo);