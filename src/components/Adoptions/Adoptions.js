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
                    const adoptionsDogs = result.data.adoptions;
                    this.setState({
                        adoptionsDogs
                    });
                    console.log("DOGS adoptions"+this.state.adoptionsDogs);
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
        <div>
        <h1> Your Companions </h1>
        <div className="List">
        {this.state.adoptionsDogs.map((adopt) =>
                <div className="dogCard text-left" key={adopt.id}>
                <img src={adopt.imgUrl} alt="" />
                <div className="footerCard">
                    <h3>{adopt.breed}</h3>
                    <p>{adopt.age}</p><span></span><p>{adopt.size}</p>
                </div>
            </div>
            )}
        </div>
        </div>
        
        );
     }
};

export default Adoptions;