import React from 'react';
import axios from 'axios';

class Adoptions extends React.Component{
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            adoptionsDogs: [],
        };
    }
    componentDidMount() {
        this._isMounted = true;
        axios({
                method: 'get',
                url: '/adoptions',
                baseURL: 'http://localhost:3333/api/dogs/',
                headers: {
                    'API_KEY': 'v1Vld/Dr34m5'
                },
            })
            .then(result => {
                if(this._isMounted){
                    const dogs = result.data.adoptions;
                    this.setState({
                        dogs
                    });
                    console.log("DOGS adoptions"+JSON.stringify(dogs));
                }
            }).catch(error => {
                console.log(error);
            });
    }
componentWillUnmount() {
    this._isMounted = false;
}
     render(){
        return(
        <div className="List">
        {this.state.adoptionsDogs.map((dog) =>
                <div className="dogCard text-left" key={dog.id}>
                <img src={dog.imgUrl} alt="" />
                <div className="footerCard">
                    <h3>{dog.breed}</h3>
                    <p>{dog.age}</p><span></span><p>{dog.size}</p>
                </div>
            </div>
            )}
        </div>
        );
     }
};

export default Adoptions;