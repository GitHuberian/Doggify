import React from 'react';

class ButtonRemove extends React.Component{
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }
      onClick = (event) => {
          const dog=this.props.removeDog;
          this.props.eventRemove(dog);
          console.log("REMOVED"+dog);
          }
 
    render(){
        return(
            <button className="PinkBtn" id="remove" onClick={() => this.onClick()}> REMOVE FROM BASKET</button>
        );
    }
}

export default ButtonRemove;