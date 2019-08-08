import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/store';
import './images.css';
import axios from 'axios';

class PropertyImages extends Component {
    static propTypes = {
        messages: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
             hightlight: false,
             images:[]
             };
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind( this );
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFileSelect(e){
        e.preventDefault();
        const selectedimages =  e.target.files;
        const images = this.fileListToArray(selectedimages);
        this.setState({
        ...this.state,
            images:images
        })
        console.log(this.state);
        // for(var i = 0; i < files.length; i++){
        //     this.setState({
        //                 ...this.state,
        //                     images:[...file.item(i)]
        //                 })
        //     console.log( files[i].name );
        // }
        // Array.from(files).forEach((file,i) => {
        //     this.setState({
        //         ...this.state,
        //             images:[...file.item(i)]
        //         })
        // });
        // console.log( this.state );

    }
    onDragOver(evt) {
        evt.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave() {
    this.setState({ hightlight: false });
    }
    
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
          array.push(list.item(i));
        }
        return array;
    }

    onFilesAdded(evt) {
        evt.preventDefault();
        if (this.props.disabled) return;
        const files = evt.target.files;
        // const length = files.length;
        // const fd = new FormData();
        // for (var i=0; i<length;i++){
        //     fd.append("images[]", evt.target.files[i], evt.target.files[i].name);
        //     fd.append("room", this.props.messages.data.id);
        // }
        // console.log("form data", fd);
        const array = this.fileListToArray(files);
        for (var value of array) {
            this.setState({ 
                images:[...this.state.images, value], 
            });
            console.log("state", this.state);
            console.log("name", value.name);
        }
        // const fd = new FormData();
        // for (var value of this.state.images) {
        //     fd.append("images[]", value);
        //     fd.append("images[]", value);
        //     console.log("form data", fd);
        // }
    }
    
    onDrop(event) {
        event.preventDefault();
        if (this.props.disabled) return;

        const files = event.dataTransfer.files
        const array = this.fileListToArray(files);
        for (var value of array) {
            this.setState({ 
                images:[...this.state.images, value], 
            });
        }
        // const fd = new FormData();
        // for (var value of array) {
        //     this.setState({ 
        //         images:[...this.state.images, value], 
        //     });
        //     console.log("name", value.name);
        //     fd.append("images[]", value);
        // }
        // const fd = new FormData();
        // for (var value of this.state.images) {
        //     fd.append("images[]", value);
        //     console.log("form data", fd);
        // }
    }
    openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
    }

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }
    handleSubmit(e){
        const {addRoom, addHouse, addLand, data} = this.props.messages;
        // console.log("data", data)
        
            // const fd = new FormData();
            // fd.append("Room", data.id);
            // fd.append("image_url", this.state.images[0], this.state.images[0].name);
            
            
        if(addRoom){
            for (var i in this.state.images) {
                const extension = (this.state.images[i].name).split('.').pop();
                const fd = new FormData();
                fd.append("Room", data.id);
                fd.append("image_url", this.state.images[i], `${data.lodge}-${data.room_no}-${data.id}.${extension}`);
                console.log(fd.values());
                axios.post("http://127.0.0.1:8000/api/room_images/", fd)
                .then(res=>{
                    console.log(res.data);
                })
            }
        }else if(addHouse){
            for (var i in this.state.images) {
                const extension = (this.state.images[i].name).split('.').pop();
                const fd = new FormData();
                fd.append("house", data.id);
                fd.append("image_url", this.state.images[i], `${data.house_no}-${data.id}.${extension}`);
                console.log(fd.values());
                axios.post("http://127.0.0.1:8000/api/house_images/", fd)
                .then(res=>{
                    console.log(res.data);
                })
            }
        }else if(addLand){
            for (var i in this.state.images) {
                const extension = (this.state.images[i].name).split('.').pop();
                const fd = new FormData();
                fd.append("land", data.id);
                fd.append("image_url", this.state.images[i], `${data.plot_no}-${data.id}.${extension}`);
                console.log(fd.values());
                axios.post("http://127.0.0.1:8000/api/land_images/", fd)
                .then(res=>{
                    console.log(res.data);
                })
            }
        }else{
            
        }
    }
    render () {
        return (
            <Fragment>
                <div className="image_container">
                    <div className="Card mb2" >
                        <div 
                         onClick={this.openFileDialog}
                         className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
                        //  onFilesAdded={console.log}
                         onDragOver={this.onDragOver}
                         onDragLeave={this.onDragLeave}
                         onDrop={this.onDrop}
                         style={{ cursor: this.props.disabled ? "default" : "pointer" }}
                         >
                            <img
                            alt="upload"
                            className="Icon"
                            src="double-down.png"
                            />
                            <input
                            ref={this.fileInputRef}
                            className="FileInput"
                            type="file"
                            multiple
                            onChange={this.onFilesAdded}
                            />
                            <span>Drop images here</span>
                        </div>
                    </div>
                    <div style={{ margin: "0 auto" }}>
                    <button className="btn btn-primary mr-2" onClick={ this.back }>Previous</button>
                        <button className="btn btn-primary ml-2" type="submit" onClick = {this.handleSubmit}>Submit</button>
                        </div>
                </div>
                {/* <h1>Select images.</h1> */}
                {/* <form action="" method="post" encType="multipart/form-data" role="form" onSubmit={ this.props.onsubmit }>
                    <div class="form-group">
                        <label htmlFor="images">Images:</label>
                        <input type="file" className="images" id="images" name="images" onChange={ this.props.onChange } multiple aria-describedby="imagesHelpBlock" />
                        <small id="imagesHelpBlock" className="form-text text-muted" >
                            Select one or more images.
                        </small>
                    </div>
                    <button className="btn btn-primary" onClick={ this.back }>Previous</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form> */}
                {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}

            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    messages:state.messages
} )
export default connect( mapStateToProps, null )( PropertyImages );