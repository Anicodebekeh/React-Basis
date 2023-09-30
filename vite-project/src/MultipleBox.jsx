import Box from "./Box"
import './MultipleBox.css'

export default function MultipleBox ({color, nums}){
    const boxes = []
    for (let i=0; i<nums; i++){
        // console.log(i)
        boxes.push( <Box color={color}/>)
    }
    
    return <div className="multipleBox">{boxes}</div>
}
