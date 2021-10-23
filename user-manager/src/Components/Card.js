import './Card.css'

const Card = ({children}) => {
    return(
        <div className="Card">
            {children}
        </div>
    )
}

export default Card;