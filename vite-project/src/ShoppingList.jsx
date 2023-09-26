export default function ShoppingList({items}){
return(
    <div>
        {items.map(i=> <li key={i.id}>{i.item} - {i.qty}</li>)}
    </div>
)
}