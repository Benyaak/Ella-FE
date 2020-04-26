import React, {Component} from 'react';
import {Rating} from 'primereact/rating';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";

class RatingButtons extends Component {
    constructor() {
        super();
        this.state = {
            val1: null,
            val2: null,
            text1 : '<div>Hello dear user!</div><div>Hope you enjoyed the experience of <b>ELLA</b> Electronic Learning Assistant :) coae ce somn mi e</div><div><br></div>',
        };
    }

    renderHeader() {
        return (
          <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold" />
            <button className="ql-italic" aria-label="Italic" />
            <button className="ql-underline" aria-label="Underline" />
          </span>
        );
    }

    render() {
        const header = this.renderHeader();
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '613px', display: 'inline-block' }}>
              <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />
              <h5 className="first">
Please rate your experience. Feedback will be taken into account.
                <br />
                {this.state.val1}  
                {' '}
                {this.state.val1 && ' stars. Thank you!'}
                <hr/>
                {this.state.val1 && <Editor style={{height:'320px'}} value={this.state.text1} onTextChange={(e)=>this.setState({text1:e.htmlValue})} />}
                <Button label="Clear & send" icon="pi pi-times" onClick={()=> this.setState({text1:''})}/>
              </h5>
            </div>
          </div>
        );
    }
}

export default RatingButtons;
