import React, { Component } from 'react';
import { Fieldset } from 'primereact/fieldset';

class IntroductionPanel extends Component {
    render() {
        return (
          <div>
            <Fieldset legend="The Gist">
              <p>
              Learning in the twenty-first century is a right, and efficient learning from verified and trusted sources is a must in these times when it seems that everything can be fabricated. ELLA will be a means for the non believers to believe facts and figures. ELLA will be your inalienable right to sourcefull information and a way for humanity to evolve intellectually by making all abstract sciences tangible. 
              </p>
            </Fieldset>
          </div>
        );
    }
}

export default IntroductionPanel;
