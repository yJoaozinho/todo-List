import React, {useState}from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState ("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value||!category) return
        
        addTodo(value,category)
        setCategory("")
        setValue("")
            
        
    }

  return (
    <div className='Todo-from'>
        <h2 className='titulo-form'>Criar Tarefa</h2>
      
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder='Adicionar tarefa' onChange={(e)=> setValue(e.target.value)} />
        
        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Estudos">Estudos</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
        </select>
        <button className='btn-form' type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm