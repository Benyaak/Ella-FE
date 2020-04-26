import React, {Component} from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import GDPRButton from '../../Atoms/gdpr-button/GDPRButton';

class HeaderBar extends Component {

    constructor() {
        super();

        this.state = {
            items:[
                {
                   label:'Electronic Learning Assistant',
                   icon:'pi pi-fw pi-file',
                },
                {
                   label:<a href='newUpload'>New Uploads</a>,
                   icon:'pi pi-fw pi-pencil',
                   href:"newUpload",
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
             ]
        };
    }

    render() {
        return (
          <div>
            <div className="content-section implementation">
              <Menubar model={this.state.items}>
                <InputText placeholder="Search" type="text" />
                <Button className="p-button-success p-button-raised" label="Login" icon="pi pi-sign-in" iconPos="right" style={{marginLeft:4}} />
                <Button className="p-button-secondary p-button-raised" label="Register" icon="pi pi-user-edit" iconPos="right" style={{marginLeft:4}} />
                <Button className="p-button-raised" label="Logout" icon="pi pi-power-off" style={{marginLeft:4}} />
              </Menubar>
              <div style={{ display: 'inline' }}>
                <img
                  alt=""
                  src="/logofinal FULL HD.png"
                  width="210"
                  height="100"
                  className="d-inline-block align-top"
                />
                <div style={{ float: 'right', marginTop: '25px', display: 'float'}}>
                  <GDPRButton />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HeaderBar;
