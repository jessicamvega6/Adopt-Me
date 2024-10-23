import { Component } from "react";


class Carousel extends Component {
    state = {
        active : 0
    }


    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    }

    handleIndexclick = (event) => {
        this.setState({
            active: +event.target.dataset.index //+ will coerce the string into what ever type it needs to be
        });
    }
    

    render () {
        let {active} = this.state  //is mutable
        let {images} = this.props //is not mutable
        // throw new Error("test error"); //testing error handling

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal here" />
                <div className="carousel-smaller">
                    {images.map( (photo, index) => (
                        // eslint-disable-next-line
                          <img 
                          onClick={this.handleIndexclick}
                          key={photo} 
                          src={photo} 
                          className={index === active ? "active" : ""} 
                          alt=""
                          data-index={index} />
                    ))}

                </div>
            </div>
        )
    }
}

export default Carousel