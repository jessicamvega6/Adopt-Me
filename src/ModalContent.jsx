import Modal from "./Modal"


let ModelContent = ({ pet, modalFunc }) => {

    return (
        <Modal>

            <div>
            <h1>Would you like to adopt {pet}?</h1>
            <div className="buttons">
                <button>Yes</button>
                {/* <Link to="/">Yes</Link> */}
                <button onClick={() => modalFunc(false)}>No</button>
            </div>
            </div>
        </Modal>
    )
}

export default ModelContent