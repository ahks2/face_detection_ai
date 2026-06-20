import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { GridScan } from './components/GridScan/GridScan';



class App extends React.Component {
  constructor() {
    super();
    this.state ={
      input:"",    
    };
  }


  onButtonSubmit = () =>{
    onInputChange=(event)=>{
        var formData = new FormData();
formData.append('image', $('#YOUR_IMAGE_FILE')[0].files[0]);
$.ajax({
    method: 'POST',
    url: 'https://api.api-ninjas.com/v1/facedetect',
    headers: { 'X-Api-Key': 'jyCxqho91QqwpYO4anlASUlXsvI9kR30Otnu8pNe'},
    data: formData,
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false, 
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
    }
});
        
  }
  }

  render(){
    return (
      <div className="App">
        <div className="background-grid">
        <GridScan
          sensitivity={0.5}
          lineThickness={1}
          // Updated to match your logo and button
          linesColor="#9D58EE" 
          gridScale={0.15}
          // Updated to match the same palette
          scanColor="#9D58EE" 
          scanOpacity={0.1}
          bloomIntensity={0.9}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          lineJitter={0.1}
          scanGlow={0.1}
          scanSoftness={4}
          enableWebcam={false}
          showPreview={false}
          scanDirection={"forward"}
          scanDuration={6}
          scanDelay={1.5}
        />
        </div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
