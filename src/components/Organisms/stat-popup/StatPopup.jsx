import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from "primereact/button";
import {Chart} from 'chart.js/dist/Chart.js';

class StartPopup extends Component {
    constructor() {
        super();
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayBlockScroll: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
          <div>
            <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} />
            <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary" />
          </div>
        );
    }


    render() {

      const data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '613px', display: 'inline-block' }}>
              <Button label="Right" icon="pi pi-arrow-left" onClick={() => this.onClick('displayPosition', 'right')} className="p-button-warning" />
              <Dialog
                header="Godfather I"
                visible={this.state.displayPosition}
                style={{width: '50vw'}}
                onHide={() => this.onHide('displayPosition')}
                position={this.state.position}
                blockScroll
                footer={this.renderFooter('displayPosition')}
              >
                <Chart type="radar" data={data} />
              </Dialog>
              
            </div>
          </div>
        );
    }
}

export default StartPopup;
