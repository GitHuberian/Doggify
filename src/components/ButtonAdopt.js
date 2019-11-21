import React from 'react';

class ButtonAdopt extends React.Component{
    constructor() {
        super();
        this.state = {
            disabled: false,
        };
        this.onClick = this.onClick.bind(this);
    }
      onClick = (event) => {
          if (this.state.disabled) {
              return;
          }
          else{
              this.setState({
              disabled: true,
          });
          const dog=this.props.addedDog;
          this.props.eventAdopt(dog);
          console.log("ADOPTADO"+dog);
          }
      }
    render(){
        return(
            <button className="BlueBtn left" onClick={() => this.onClick()} disabled={this.state.disabled}>
    {this.state.disabled ? 'SELECTED' : 'ADOPT'}</button>
        );
    }
}

export default ButtonAdopt;