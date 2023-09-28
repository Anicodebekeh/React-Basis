import Box from "./Box"
import './MultipleBox.css'

export default function MultipleBox ({color, nums}){
    const boxes = []
   
    for (let i=0; i<nums; i++){
        boxes.push(<Box color={color}/>)
    }

    
    return <div className="multipleBox">{boxes}</div>
}

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });