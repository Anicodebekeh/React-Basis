
import './App.css'
import Game from './game'
import ShoppingList from './ShoppingList'
import Button from './Buttons'
import Toggler from './Toggler'
import Box from './Box'
import MultipleBox from './MultipleBox'


const items =[
  {id:1, item:"beans", qty:2, completed: true},
  {id:2, item:"rice", qty:4, completed: false},
  {id:3, item:"meat", qty:2, completed: true},
]

const colors =[
  'green', 'red', 'brown', 'purple', 'pink', 'orange'
]

function App() {



  return (
  <div>
     {/* <Game val1 = '🥕' val2 = '🥕' val3 = '🥕'/>
     <ShoppingList items={items}/> */}
     <Button button="click me" message="hey how are you today"/>
     <Toggler/>
     <MultipleBox color={colors}/>
  
     
  </div>
  )
}

export default App
