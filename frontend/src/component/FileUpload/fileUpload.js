import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class FilesUploadComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        {/* <h3>React File Upload</h3> */}
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <Button className="btn btn-primary" type="submit">Upload</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}