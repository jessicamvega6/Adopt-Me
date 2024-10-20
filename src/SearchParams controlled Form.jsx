import { useState, useEffect  } from "react"
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


let SearchParams = () => {
    /* controlled form: using the location/breed/etc to track the data instead of getting it from the Form tag */
    let [location, setLocation] = useState('');
    let [animal, setAnimal] = useState('');
    let [breed, setBreed] = useState('')
    let breeds = ['poodle'];
    const [pets, setPets] = useState([]);
    
    
    useEffect(() => { 
        requestsApiPets(); 
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    /* empty [] in the useEffect func tells to only run on page load and then never again */


    async function requestsApiPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
          );

          const jsonResult = await res.json();

          setPets(jsonResult.pets);
    }


    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestsApiPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input
                    onChange={e => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                    onChange={ (e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                        }} 
                        id="animal"
                        value={animal}
                        placeholder="Animal">
                        <option />
                        
                        {ANIMALS.map((animal) => (
                             <option key={animal} value={animal}>{animal} </option>
                        ) )}

                    </select>
                </label>


                <label htmlFor="animal">
                    Breed
                    <select
                    onChange={e => setBreed(e.target.value)}
                        id="breed"
                        disabled={breeds.length === 0}
                        value={breed}
                        placeholder="Breed">
                        <option />
                        
                        {breeds.map((breed) => (
                             <option key={breed} value={breed}>{breed} </option>
                        ) )}

                    </select>
                </label>

                <button> Submit </button>
            </form>

            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }

        </div>
    )
}

export default SearchParams
