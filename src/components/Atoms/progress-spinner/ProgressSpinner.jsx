import React, {Component} from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';


class RatingButtons extends Component {

    render() {
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '613px', display: 'inline-block' }}>
              <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s" />
            </div>
          </div>
        );
    }
}

export default RatingButtons;
