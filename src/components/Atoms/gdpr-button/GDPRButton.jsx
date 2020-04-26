import React, {Component} from 'react';
import {ToggleButton} from 'primereact/togglebutton';

class GDPRButton extends Component {
    constructor() {
        super();
        this.state = {
            checked1: false,
        };
    }

    render() {
        return (
          <div>
            <ToggleButton
              style={{width:'150px'}}
              onLabel="I confirm"
              offLabel="I reject"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              checked={this.state.checked1}
              onChange={(e) => this.setState({checked1: e.value})}
            />
          </div>
        );
    }
}

export default GDPRButton;
