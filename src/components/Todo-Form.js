import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

const hChange = e =>{
    setInput(e.target.value);
};
const hSubmit = e =>{
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });
    setInput('');
};
  return (
        <form onSubmit={hSubmit} className='todo-form' >
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={hChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={hSubmit} className='todo-button edit'>Update</button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Add a todo'
                        value={input}
                        onChange={hChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button onClick={hSubmit} className='todo-button'>Add todo</button>
                </>
            )}
        </form>
  );
}

export default TodoForm