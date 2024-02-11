import React, { useState } from 'react';

export function Todos({ todos }) {
    // Define ClickMe function inside Todos component
    const ClickMe = ({ index }) => {
        const [buttonText, setButtonText] = useState('Mark as Done');
        const [clicked, setClicked] = useState(false);

        const handleClick = () => {
            if (!clicked) {
                setButtonText('Done');
                setClicked(true);
                // Perform any other actions related to this specific todo item
            }
        };

        return (
            <div key={todos[index].id}>
                <h1>{todos[index].title}</h1>
                <h2>{todos[index].description}</h2>
                <button onClick={handleClick} disabled={clicked}>{buttonText}</button>
            </div>
        );
    };

    return (
        <div>
            {todos.map((todo, index) => (
                <ClickMe key={index} index={index} />
            ))}
        </div>
    );
}
