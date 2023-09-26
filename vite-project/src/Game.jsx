export default function Game({val1, val2, val3}){
    const result = val1===val2&&val1===val3

    return( 
    <div>
        <span>{val1}</span>
        <span>{val2}</span>
        <span>{val3}</span>
        <h1 style={{color:result? 'green': 'red'}}>{result? 'you win': 'you loss'}</h1>
        {result&&<h3>Congrat</h3>}
    </div>
    )}
    
    
