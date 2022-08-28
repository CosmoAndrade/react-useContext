import { useContext } from 'react'
import { CountContext } from './Context';


const Counter = () => {

    const {count , setCount , name , setName} = useContext(CountContext)

    const handleADD = () => {
        setCount( count +1)
    }



    return ( 
        <div>

            <h1>Valor: {count}</h1>

            <button onClick={handleADD}>ADD</button>

            <hr />

            <h2>{name}</h2>

            <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            
            />

           



        </div>
     );
}
 
export default Counter;

