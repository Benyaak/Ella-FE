import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Paginator} from 'primereact/paginator';
import { Document, Page, pdfjs } from "react-pdf";
import {Panel} from 'primereact/panel';

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
      rotate: 0,
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
      <div style={{ textAlign: 'center' }}>
          <div style={{ width: '613px', display: 'inline-block' }}>
          <Panel header="Godfather I" toggleable={true}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Panel>
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
        <Paginator
                first={this.state.first}
                rows={this.state.rows}
                totalRecords={120}
                rowsPerPageOptions={[10,20,30]}
                onPageChange={this.onPageChange}
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              />
          <Document
            file={this.props.path}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          
        </div>
        </div>
      </div>
    );
  }
}

export default PDFViewer;