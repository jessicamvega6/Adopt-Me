import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import ModelContent from "./ModalContent";


const Details = () => {
    let {id} = useParams();
    let results = useQuery(["details", id], fetchPet);
    const [showModal, setShowModal] = useState(false);

    if (results.isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
      }

    let pet = results.data.pets[0];
    // debugger
    return (
        <div className="details">
          <Carousel images={pet.images}></Carousel>
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city} - {pet.state}</h2>
                <button onClick={() => setShowModal(true)}>Adopt {pet.name} Today!</button>
                <p>{pet.description}</p>
                {showModal ? (
                  <ModelContent pet={pet} modalFunc={setShowModal} />
                ) : null}            
            </div>


        </div>
    );
  };


  function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props}/>
      </ErrorBoundary>
    )
  }
  
  export default DetailsErrorBoundary;