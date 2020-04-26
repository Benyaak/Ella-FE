import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';

;

class NextPageBar extends Component {
    constructor() {
        super();

        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    render() {
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '613px', display: 'inline-block' }}>
              <FileUpload
                name="demo[]"
                url="./upload.php"
                onUpload={this.onUpload}
                multiple
                accept="image/*"
                maxFileSize={1000000}
              />
              <Growl ref={(el) => { this.growl = el; }} />
            </div>
          </div>
        );
    }
}

export default NextPageBar;
