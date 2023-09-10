
import './App.css'
import Counter from './assets/counter'
import Team from './assets/team'
import Users from './assets/users'
import Friends from './assets/Friends'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }
  
  const handleClick2 = () =>{
    alert('button clicked') 
  }
 const addToFive = (num)=>{
  alert(num+5);
 }
  return (
    <>
     
      <h1>React core concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2} >Click -2</button>
      <button onClick={()=>{alert('third clicked')}}>Click-3</button>
      <button onClick={()=>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
