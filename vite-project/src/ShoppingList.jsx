import ListItems from "./ListItems"

export default function ShoppingList({items}){
return(
    <div>
        {items.map(i=>{
            return <ListItems  key={i.id} item={i.item} qty={i.qty} completed={i.completed}  /> 
        })}
    </div>
)
}

        {/* {items.map(i=> <li key={i.id}>{i.item} - {i.qty}</li>)} */}