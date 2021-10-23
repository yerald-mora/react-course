import './Input.css'

const Input = ({label,...props}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <input {...props}/>
        </div>
    )
}

export default Input;