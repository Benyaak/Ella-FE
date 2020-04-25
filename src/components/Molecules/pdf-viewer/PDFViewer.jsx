import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Document, Page, pdfjs } from "react-pdf";

 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import '../assets/react-pdf/dist/Page/AnnotationLayer.css';
// doc https://www.npmjs.com/package/react-pdf
// import '../assets/css/PDFViewer.css';

class PDFViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      width: 800,
      zoom: 1,
      rotate: 0
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
  goToFirstPage = () =>
    this.setState(state => ({ pageNumber: 1 }));
  goToLastPage = () =>
    this.setState(state => ({ pageNumber: this.state.numPages })); 

  render() {
    const { pageNumber, numPages } = this.state;
    const options = {
      cMapUrl: 'cmaps/',
      cMapPacked: true,
    };
    return (
      <div>
        <b>{this.props.path}</b>
        <div>
        <p>
Page {' '}
            {pageNumber}
            {' '}
of
{' '}
            {numPages}
          </p>
        <Button variant="outline-secondary" onClick={this.goToFirstPage}>First Page</Button>
        <Button variant="outline-success" onClick={this.goToNextPage}>Next Page</Button>
        <Button variant="outline-danger" onClick={this.goToPrevPage}>Previous Page</Button>
        <Button variant="outline-warning" onClick={this.goToLastPage}>Last Page</Button>

          <Document
            file={this.props.path}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          
        </div>
      </div>
    );
  }
}

export default PDFViewer;