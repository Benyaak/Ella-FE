import React, {Component} from 'react';
import {ToggleButton} from 'primereact/togglebutton';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';

class GDPRButton extends Component {
    constructor() {
        super();
        this.state = {
            checked1: false,
            visibleTop: false,
            visibleMessage: true,
        };
    }

    hideGDPR(e){
        this.setState({visibleMessage: false, visibleTop: false });
    }

    render() {
        return (
          <div>
            <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={(e) => this.setState({visibleTop: false})}>
              <h2 style={{fontWeight:'normal'}}>GDPR Notice</h2>
              <div>The General Data Protection Regulation (EU) 2016/679 (GDPR) is a regulation in EU law on data protection and privacy in the European Union (EU) and the European Economic Area (EEA). The GDPR aims primarily to give control to individuals over their personal data and to simplify the regulatory environment for international business by unifying the regulation within the EU.</div>
              <Button type="button" onClick={(e) => this.hideGDPR()} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
              <ToggleButton
              style={{width:'150px'}}
              onLabel="I confirm"
              offLabel="I reject"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              checked={this.state.checked1}
              onChange={(e) => this.setState({checked1: e.value})}
            />
            </Sidebar>
            <Button icon="pi pi-arrow-down" onClick={(e) => this.setState({visibleTop:true})} style={{marginRight:'.25em'}} />
            {this.state.visibleMessage &&
            <b>&nbsp;&nbsp;I consent to GDPR and allow the use of my words to improve ELLA's responses&nbsp;&nbsp;</b>}
          </div>
        );
    }
}

export default GDPRButton;
