import Chicken from './Chicken'
import './App.css'
import Game from './game'
import ShoppingList from './ShoppingList'


const items =[
  {id:1, item:"beans", qty:2, completed: true},
  {id:2, item:"rice", qty:4, completed: false},
  {id:3, item:"meat", qty:2, completed: true},
]

function App() {



  return (
  <div>
     <Chicken />
     <Game val1 = '🥕' val2 = '🥕' val3 = '🥕'/>
     <ShoppingList items={items}/>
  </div>
  )
}

export default App
