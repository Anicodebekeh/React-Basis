import Box from "./Box"
import './MultipleBox.css'

export default function MultipleBox ({color}){
    const boxes = []
    for (let i=0; i<25; i++){
        boxes.push( <Box color={color}/>)
    }
    return <div className="multipleBox">{boxes}</div>
}