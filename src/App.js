import React, {useState} from 'react'
import './App.css';
import ImageSearchForm from './Component/ImageSearchForm/ImageSearchForm'
import FaceDetect from './Component/FaceDetect/FaceDetect'
import Clarifai from "clarifai";
import Header from './Component/Header'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Conexion from './Component/Conexion'
const app = new Clarifai.App({
  apiKey: "fa9d30a055834ca798551559202f30b6",
});


function App() {


  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [box, setBox] = useState({})

 const handleChange = (e) => {
    setInput(e.target.value)
  };



 const handleSubmit = () => {
    // set imageUrl state
  setImageUrl(input)
app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
.then((response) =>
    
  displayFaceBox(calculateFaceLocation(response)))
  
// if error exist console.log error
.catch((err) => console.log(err));
};

const calculateFaceLocation = (data) => {
  const clarifaiFace =
    data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById("inputimage");
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height,
  };
};

const displayFaceBox = (box) => {
  setBox(box)
};


  return (
    <div className="App">

<Router>
     <Header/>
    <Switch>

   
    <Route path='/conexion'>
   <Conexion/>
    </Route>
    <Route path='/'>
    <ImageSearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
     <FaceDetect imageUrl={imageUrl} box={box} />
    </Route>
    
  
    </Switch>
    </Router>

    
     
    </div>
  );
}

export default App;
