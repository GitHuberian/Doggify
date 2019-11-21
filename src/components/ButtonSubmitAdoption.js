import React from 'react';

class ButtonSubmitAdoption extends React.Component {
    constructor(props) {
        super(props);
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
          const dogs=this.props.jsonDog;
          this.props.eventCheckout(dogs);
          console.log("ADOPTADOs"+dogs);
          }
      }
    render(){
        return(
            <button className="BlueBtn left" onClick={() => this.onClick()} disabled={this.state.disabled}>
    {this.state.disabled ? 'SUBMITED' : 'SUBMIT ADOPTION'}</button>
        );
    }
}

export default ButtonSubmitAdoption;