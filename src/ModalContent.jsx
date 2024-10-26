import Modal from "./Modal"
import { Link } from "react-router-dom"


let ModelContent = ({ pet, modalFunc }) => {

    return (
        <Modal>

            <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
                <Link 
                    // to={`/adopt/${pet.id}`} 
                    to={"/adopt"}
                    state={{ pet: pet }}
                    >Yes
                    
                </Link>
                <button onClick={() => modalFunc(false)}>No</button>
            </div>
            </div>
        </Modal>
    )
}

export default ModelContent