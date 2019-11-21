import React from 'react';
import axios from 'axios'
import ButtonSubmitAdoption from '../ButtonSubmitAdoption';
import ButtonRemove from '../ButtonRemove';

class Checkout extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.eventCheckout = this.eventCheckout.bind(this);
        this.eventRemove = this.eventRemove.bind(this);
    }

    eventCheckout(jsonDogs){

        const objDogs = JSON.parse(jsonDogs);
        let obj = {"dogs": objDogs};
        var headers =  {
            'API_KEY': 'v1Vld/Dr34m5',
            'Content-Type': 'application/json',
        }
        axios.post('http://localhost:3333/api/dogs/adopt', obj, {"headers" : headers})

            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
            console.log(error);
            })
        }

    eventRemove(dog){
        console.log('Remove' + dog);
    }

    render() {
        const currentAdopted = this.props.currentAdopted;
        let button;
        if (currentAdopted.length>0) {
        button = <ButtonSubmitAdoption eventCheckout={this.eventCheckout} jsonDog={JSON.stringify(currentAdopted)} />;
        } 
        return ( 
        <div className="CheckoutMain">
            <h1>Your new friends</h1>
            <div className = "CheckoutList" > 
            {currentAdopted.map((dog) =>
                <div className="DogCheckoutCard text-left" key={dog.id}>
                <img src={dog.imgUrl} alt="" />
                <div className="infoCard">
                    <h3>{dog.breed}</h3>
                    <p>{dog.age}</p><span></span><p>{dog.size}</p>
                </div>
                <ButtonRemove eventRemove={this.eventRemove} removeDog={JSON.stringify(currentAdopted)}/>
            </div>
            )}
        {button}
        </div>        
        </div>
        );
    }
};

export default Checkout;