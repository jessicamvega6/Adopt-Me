import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
    let {id} = useParams();
    let results = useQuery(["details", id], fetchPet);

    if (results.isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
      }

    let pet = results.data.pets[0];
    

    return (
        <div className="details">
          <Carousel images={pet.images} breed= "this is a test"></Carousel>
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city} - {pet.state}</h2>
                <button> Adpot {pet.name} Today!</button>
                <p>{pet.description}</p>
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