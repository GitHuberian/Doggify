import React from 'react';
import axios from 'axios';
import ButtonAdopt from '../ButtonAdopt';

class Dogs extends React.Component {

    _isMounted = false;

    constructor() {
            super();
            this.state = {
                dogs: [],
            };
            this.handleCurrentAdopted = this.handleCurrentAdopted.bind(this);
        }
        
    componentDidMount() {
        this._isMounted = true;
            axios({
                    method: 'get',
                    url: '/dogs',
                    baseURL: 'http://localhost:3333/api/',
                    headers: {
                        'API_KEY': 'v1Vld/Dr34m5'
                    },
                })
                .then(result => {
                    if (this._isMounted) {
                        const dogs = result.data.dogs;
                        this.setState({
                            dogs
                        });
                        console.log("DOGS");
                    }
                }).catch(error => {
                    console.log(error);
                });
        }

componentWillUnmount() {
    this._isMounted = false;
  }

  handleCurrentAdopted(dog) {
      this.props.currentAdopted(dog);
  }

    render(){ 
        return(
        <div className="List">
        {this.state.dogs.map((dog) =>
                <div className="dogCard text-left" key={dog.id}>
                <img src={dog.imgUrl} alt="" />
                <div className="footerCard">
                    <h3>{dog.breed}</h3>
                    <p>{dog.age}</p><span></span><p>{dog.size}</p>
                    <hr size="1"/>
                    <ButtonAdopt eventAdopt = {this.handleCurrentAdopted} addedDog={dog}/>
                </div>
            </div>
            )}
        </div>
        );
}
}

export default Dogs;