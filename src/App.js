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
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  onButtonSubmit = (file) => {
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    this.setState({ imageUrl });

    fetch("http://localhost:3001/image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
      .then((response) => response.json())
      .then((count) => {
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            entries: Number(count.entries)
          }
        }));
      })
      .catch((err) => console.log("Error updating entries:", err));
  };

  onRouteChange = (route) => {
    if (route === "signin") {
      this.setState({ isSignedIn: false, route: "signin" });
    } else if (route === "home") {
      this.setState({ isSignedIn: true, route: "home" });
    } else {
      this.setState({ route });
    }
  };

  renderContent() {
    if (this.state.route === "signin") {
      return (
        <Signin
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange}
        />
      );
    } else if (this.state.route === "register") {
      return (
        <Register
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange}
        />
      );
    } else {
      return (
        <div>
          <Logo />
          <Rank
            name={this.state.user.name}
            entries={this.state.user.entries}
          />
          <ImageLinkForm onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="background-grid">
          <GridScan
            sensitivity={0}
            lineThickness={1}
            linesColor="#9D58EE"
            gridScale={0.15}
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
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
