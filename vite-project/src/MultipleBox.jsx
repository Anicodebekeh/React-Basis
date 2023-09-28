import Box from "./Box"

export default function MultipleBox ({color}){
    const boxes = []
    for (let i=0; i<25; i++){
        boxes.push( <Box color={color}/>)
    }
    return <div>{boxes}</div>
}