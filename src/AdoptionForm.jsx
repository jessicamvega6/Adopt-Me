import { useLocation } from "react-router-dom";



let AdoptionForm = () => {

    const { state } = useLocation();
    const pet = state?.pet;

    return (
        <div className="adoption">
            <form>
                <div>
                    <h2>Adoption Application</h2>
                    <p>Adoption Fee: $25</p>

                    <div>
                        
                        <div>
                            You are Adopting {pet.name}!
                        </div>
                        <div>
                             from {pet.city}, {pet.state}
                        </div>
                        <img src={pet.images[0]} alt="Animal You are Adopting"/>
                    </div>
                </div>
                <div>

                    <div>
                        <h3>Home Address</h3>
                        <label htmlFor="street">Street Address:
                            <input 
                                type="text"
                                id="street"
                                name="street"
                                placeholder="123 Main St"
                                required
                            />
            
                            <div>
                                <label htmlFor="city">City:</label>
                                <input 
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    required
                                />
                            </div>              
                        </label>
                    </div>

                    <div>
                        <label htmlFor="state">State:</label>
                        <input 
                            type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="zipcode">Zip Code:</label>
                        <input 
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="12345"
                            required
                        />
                    </div>

                    <div>
                        <h3>Veterinary Reference</h3>
                        <div>
                            <label htmlFor="vetName">Veterinarian Name:</label>
                                <input 
                                    type="text"
                                    id="vetName"
                                    name="vetName"
                                    placeholder="Dr. Smith"
                                    required
                                />
                        </div>

                        <div>
                            <label htmlFor="vetPhone">Veterinarian Phone:</label>
                                <input 
                                    type="tel"
                                    id="vetPhone"
                                    name="vetPhone"
                                    placeholder="(123) 456-7890"
                                    required
                                />
                        </div>

                        <div>
                            <label htmlFor="vetClinic">Clinic Name:</label>
                                <input 
                                    type="text"
                                    id="vetClinic"
                                    name="vetClinic"
                                    placeholder="Happy Pets Clinic"
                                    required
                                />
                        </div>
                    </div>                  

                </div>
                <button className="adoption-form-sumbit" type="submit">Submit Application</button>
            </form>
        </div>

        
    )
}
export default AdoptionForm;