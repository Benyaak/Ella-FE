import React, { Component } from 'react';
import { Panel } from 'primereact/panel';

class IntroductionPanel extends Component {
    render() {
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '613px', display: 'inline-block' }}>
              <Panel header="How to use tutorial" toggleable>
    Please start by 
                {' '}
                <b>uploading a document</b>
, which will be interactable onto our platform. While scrutinizing the material,
    make sure to 
                {' '}
                <b>raise any uncertainties with ELLA</b>
, using the separate chat window. Questions raised will also be stored for future reference using IBM Watson,
    thus ensuring the 
                {' '}
                <b>scalability, reliablity and quality</b>
                {' '}
of the system. 
          <br /> Alternatively, please check out the <b>user statistics</b> below:
              </Panel>
            </div>
          </div>
        );
    }
}

export default IntroductionPanel;
