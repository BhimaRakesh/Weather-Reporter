import React ,{useState}from 'react'
import Products from "./Products";

function App() {
const[state,setState]=useState('');
const[data,setData]=useState([])
const YOUR_APP_ID = "3d422a92";
const YOUR_APP_KEY = "febe43c7c4cafa702c22226f9683d8ae"
const submitHandler=(e)=>{
    e.preventDefault();

    fetch(`https://api.edamam.com/search?q=${state}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
        response => response.json()
    ).then(
        data => setData(data.hits)
    )
  
}

  return (
    <div><center>
<form onSubmit={submitHandler}>
        <h3>FOOD RECIPE APPLICATION</h3>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
      <input type="submit" className="btn btn-primary" value="search"/>
      
      </form>
     <Products data={data} />
      </center>
    </div>
  )
}

export default App
