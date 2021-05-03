const Button = ({label, handle})=>{
    return <div>
        <button className="button"
        onClick = {handle}
        >{label}</button>
    </div>
}
export default Button;