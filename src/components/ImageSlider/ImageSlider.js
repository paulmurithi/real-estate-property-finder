  import React, {Component} from "react";
  import Carousel from 'react-bootstrap/Carousel';
  
  export default class SimpleSlider extends Component {
    render() {
      var id;
      const images = this.props.Images;
      console.log(images);
      var belongsTo;
      var houseImages
      if (this.props.houseId){
        id = this.props.houseId;
        belongsTo =(images)=>images.house==id;
        houseImages = images.filter(belongsTo);
      }else if(this.props.landId){
        id = this.props.landId;
        belongsTo =(images)=>images.land==id;
        houseImages = images.filter(belongsTo);
      }else if(this.props.roomId){
        id = this.props.roomId;
        belongsTo =(images)=>images.Room==id;
        houseImages = images.filter(belongsTo);
      }else{

      }
      
      return(
        <Carousel>
          { houseImages.map(
                image => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image.image_url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                )
            ) }
        </Carousel>
      );
    }
  }