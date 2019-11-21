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
        let obj = '{"dogs":' + jsonDogs + '}';
        console.log("DOGS adoptions json " + JSON.stringify(obj));
        obj = JSON.stringify(obj);
        obj = JSON.parse(obj);
        
        console.log("elobjeto "+obj);
        axios({
                method: 'post',
                url: '/adopt',
                baseURL: 'http://localhost:3333/api/dogs/',
                headers: {
                    'API_KEY': 'v1Vld/Dr34m5',
                    'Content-Type': 'application/json'
                },
                data:{
                    obj
                }
            })
            .then(result => {
                console.log(result);
            }).catch(error => {
                alert('ERROR' + error);
                console.log(error);
            });
    }

    eventRemove(dog){
        console.log('Remove' + dog);
    }

    render() {
        const currentAdopted = this.props.currentAdopted;
        
        return ( 
        <div className="CheckoutMain">
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
        <ButtonSubmitAdoption eventCheckout={this.eventCheckout} jsonDog={JSON.stringify(currentAdopted)} />
        </div>        
        </div>
        );
    }
};

export default Checkout;