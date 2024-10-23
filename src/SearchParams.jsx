import { useState  } from "react"
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


let SearchParams = () => {
    // let [location, setLocation] = useState('');
    // let [breed, setBreed] = useState('')
    let [animal, setAnimal] = useState('');    
    // let [pets, setPets] = useState([]);
    let [breeds] = useBreedList(animal);    

    let [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    })

    let results = useQuery(["search", requestParams], fetchSearch);
    let pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form onSubmit={e => { 
                e.preventDefault(); //prevents default behavior ie sumbitting the form
                let formData = new FormData(e.target) //browser API not react
                let obj = {
                    animal: formData.get("animal") ?? "",
                    location: formData.get("location") ?? "",
                    breed: formData.get("breed") ?? ""
                };
                setRequestParams(obj);
            }}>
                <label htmlFor="location">
                    Location
                        <input
                        id="location"
                        placeholder="Location"
                        name="location"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                    onChange={ (e) => {
                            setAnimal(e.target.value);
                        }} 
                        id="animal"
                        placeholder="Animal"
                        name="animal"
                        >
                            
                        <option />
                        
                        {ANIMALS.map((animal) => (
                             <option key={animal} value={animal}>{animal} </option>
                        ) )}

                    </select>
                </label>


                <label htmlFor="Breed">
                    Breed
                    <select
                    
                        id="breed"
                        disabled={breeds.length === 0}
                        placeholder="Breed"
                        name="breed">
                        <option />
                        
                        {breeds.map((breed) => (
                             <option key={breed} value={breed}>{breed} </option>
                        ) )}

                    </select>
                </label>

                <button> Submit </button>
            </form>

            {/* { //results list
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            } */}


            <Results pets={pets} />
        </div>
    )
}

export default SearchParams
