import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { Chart } from 'primereact/chart';
import { ScrollPanel } from 'primereact/scrollpanel';

class StartPopup extends Component {
  constructor() {
    super();
    this.state = {
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
        <Button label="Done" icon="pi pi-check" onClick={() => this.onHide(name)} />
      </div>
    );
  }


  render() {

    const dataRadar = {
      labels: ['Clicks per minute', 'Highlights', 'Left Feedback', 'Next page', 'Alt-TABs', 'Minutes per page', 'Interactions with ELLA'],
      datasets: [
        {
          label: 'Average User',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'Current User',
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

    const dataDoughnut = {
      labels: ['5 stars','1 star','3 stars'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

    const dataInterpolated = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Interactions with ELLA",
        "Average minutes per page",
        "Next page",
        "Left Feedback",
        "Clicks per minute"
      ]
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '613px', display: 'inline-block' }}>
          <Button label="User Statistics" icon="pi pi-arrow-left" onClick={() => this.onClick('displayPosition', 'right')} className="p-button-warning" />
          <Dialog
            header="User Metrics from Google Analytics"
            visible={this.state.displayPosition}
            style={{ width: '50vw' }}
            onHide={() => this.onHide('displayPosition')}
            position={this.state.position}
            blockScroll
            footer={this.renderFooter('displayPosition')}
          >

            <div className="p-col-12 p-md-4">
              <ScrollPanel style={{ width: '100%', height: '600px' }} className="custombar1">
                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                  <div><b>Current User statistics</b><br /><Chart type="polarArea" data={dataInterpolated} /></div>
                  <br /><br />
                  <div><b>Current User vs Average User</b><br /><Chart type="radar" data={dataRadar} /></div>
                  <br /><br />
                  <div><b>Feedback rating distribution</b><br /><Chart type="doughnut" data={dataDoughnut} /></div>
                </div>
              </ScrollPanel>
            </div>
          </Dialog>

        </div>
      </div>
    );
  }
}

export default StartPopup;
