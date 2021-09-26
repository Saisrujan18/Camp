import React, {useState} from 'react';

const Home2 = () => {
    const [name, setName]=useState('Heading Here')
    
    const handleClick = () => {
        setName('It is working indeed');
    }
    return (
        <div className="Home2">
            <h1>{name}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>

    );
}
export default Home2;