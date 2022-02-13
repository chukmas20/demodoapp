import React, {useEffect} from 'react';
import {v4 as uuidV4} from "uuid"

const Form = ({input, setInput, todos, setTodos, setEditTodo, editTodo}) => {
     const updateTodo =(title, id, completed) =>{
         const newTodos = todos.map((todo)=>
             todo.id === id ? {title, id, completed} : todo
         )
         setTodos(newTodos);
         setEditTodo("")
     }
    const onFormSubmit =(e)=>{
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidV4(), title:input, completed:false}])
           setInput("")
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }    
    }

    useEffect(()=>{
       if(editTodo){
           setInput(editTodo.title)
       }else{
           setInput("")
       }
    },[editTodo,setInput])
  return (
     <form onSubmit={onFormSubmit}>
          <input type="text" 
              placeholder='Enter an item' 
               className='task-input' 
               value={input}
               required
               onChange={(e)=>setInput(e.target.value)}
            />
          <button className='button-add' type='submit'> 
              {editTodo ? "Ok" : "Add"}
          </button>
     </form>
  )
}

export default Form