import React, {Component} from 'react';
import {Paginator} from 'primereact/paginator';

class NextPageBar extends Component {

    constructor() {
        super();
        this.state = {
            first: 0,
            rows: 10,
        };

        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    }

    render() {
        return (
          <div>
            <div className="content-section introduction">
              <Paginator
                first={this.state.first}
                rows={this.state.rows}
                totalRecords={120}
                rowsPerPageOptions={[10,20,30]}
                onPageChange={this.onPageChange}
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              />
            </div>
          </div>
        );
    }
}

export default NextPageBar;
