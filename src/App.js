import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [frends, setFrends] =  useState([])
  useEffect(() =>{
    fetch(`https://randomuser.me/api/?results=500`)
    .then(res => res.json())
    .then(data => setFrends(data.results)) 
  }, [])
  
  // const frends = [{name: 'Robin', age: 20}, {name: 'Titu', age: 23}, {name: 'Riyad', age: 20}, {name: 'Shadon', age: 23}, {name: 'Robin Hasan', age: 20}, {name: 'Sojib Khan', age: 24}]
  return (

    <div className="App">
      <MovieCounter></MovieCounter>
    {
      frends.map(fr => <Frend name={fr.location.street.name} email={fr.email} gender={fr.gender} country={fr.location.country}></Frend>)
    }  
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0)
  const handelClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handelClick}>Add Movies</button>
      <h4>Number of Movies : {count}</h4>
      <MovieDisplay movies= {count}></MovieDisplay>
      <MovieDisplay movies= {count + 5}></MovieDisplay>
      <MovieDisplay movies= {count + 2}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return(
    <div>
      <h4>Movies i have acted : {props.movies}</h4>
    </div>
  )
}
function Frend(props){
  const frendStyle={
    border: '2px solid green',
    margin: '10px',
    width: '400px'
    
  }
  return(
    <div style={frendStyle}>
      <h1>Student : {props.name}</h1>
      <p>Email : {props.email}</p>
      <p>Gender : {props.gender}</p>
      <h5>Country : {props.country}</h5>
    </div>
  )
}

export default App;
