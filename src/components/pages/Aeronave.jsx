import { useEffect } from "react"
import { useState } from "react"
import './Aeronaves.scss'

export const Aeronave = () => {

  const [Todos, setTodos] = useState([])

  useEffect(() => {
    peticionAPi()
  }, [])

  const peticionAPi = async () =>{

    const response = await fetch('http://dev.inaltec.com.co:60000/Aeronaves/Lista')
    const data = await response.json()
    console.log(data)
    setTodos(data)
  }
  
  return (
    <>
      <div className="container">
        <div className="Container-table">
          <div className="table">
            <div className="encabazados">
              <div className="titulo">
                <h2 > Listas Aeronaves</h2>
                <button><i class="fa-solid fa-plus"></i></button>
              </div>
              <hr/>
              <button></button>
              <tr className="item-encabezados">
                <th> </th>
                <th>id</th>
                <th>Description</th>
                <th>Fecha de registro</th>
              </tr>
              <hr />
            </div>
            <div>
              {
                Todos.map( todo => {
                  return(
                    <tr key={todo.id} className='info-table'>
                      <td> <button><i className="fa-solid fa-minus"></i></button> </td>
                      <td>{todo.id}</td>
                      <td>{todo.descripcion}</td>
                      <td>{todo.fechaRegistro}</td>
                    </tr>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className=" container-form ">
          <h2>Registro de Aeronaves</h2>
          <form action="submit">
            <div className="input-id">
              <p className="id-i">id:  </p>
              <input className="imp" type="text" required/>
            </div>
            
            <div className="textarea">
              <p className=" des">descripcion: </p>
              <textarea  className="tex" cols="30" rows="8" required></textarea>
            </div>
          </form>
          
          
        </div>

      </div>
      


    
    </>
  )
}
