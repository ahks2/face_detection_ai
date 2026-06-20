import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { GridScan } from './components/GridScan/GridScan';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      faces: [],
      route:"signin",
      isSignedIn: false,
    };
  }

  onInputChange=(event)=>{
    console.log(event.target.value)     
  }

  onButtonSubmit = async (file) => {
    try {
      // Create local URL for display
      const imageUrl = URL.createObjectURL(file);

      this.setState({ imageUrl });

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://api.api-ninjas.com/v1/facedetect",
        {
          method: "POST",
          headers: {
            "X-Api-Key": "YOUR_API_KEY"
          },
          body: formData
        }
      );


      const data = await response.json();

      console.log(data);

      this.setState({
        faces: data
      });

    } catch (error) {
      console.error(error);
    }
  };

  onRouteChange=(route)=>{
    if (route === "signin"){
      this.setState({isSignedIn:false,route:route});
    }
    else{
      this.setState({route:route});
    }
  }

  isSignedIn=()=>{
    this.setState({isSignedIn:true})
  }

  renderContent(){
    if (this.state.route==="signin"){
      return <Signin onRouteChange={this.onRouteChange} isSignedIn={this.isSignedIn}/>
    }
    else if (this.state.route==="register"){
      return <Register onRouteChange={this.onRouteChange}/>
    }
    else {
      return (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition
            imageUrl={this.state.imageUrl}
            faces={this.state.faces}
          />
      </div>
      )
    }
  }

  render(){
    return (
      <div className="App">
        <div className="background-grid">
        <GridScan
          sensitivity={0}
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
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
