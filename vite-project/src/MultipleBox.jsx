import Box from "./Box"

export default function MultipleBox ({color}){
    return(
        <div>
            <Box color={color}/>
            <Box color={color}/>
            <Box color={color}/>
            <Box color={color}/>
        </div>
    )
}