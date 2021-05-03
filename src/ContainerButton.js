import Button from "./Button"
 
const ContainerButton = ({handle})=>{
    return <div className="container-button">
        <Button label="Tweet"/>
        <Button label="New Quote" handle={handle}/>
    </div>
}
export default ContainerButton;