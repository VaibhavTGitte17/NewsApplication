import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Components/Navbar';
import News from './Components/News';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=9
  const apiKey = process.env.REACT_APP_NEWS_API;
  /*"e5e573107e4f4cfa8cc00bf6bcd0b60e"*/
  /* dbe57b028aeb41e285a226a94865ff7a7*/
const [progress,setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
          <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
          <Route exact path="/business"  element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/> 
          <Route exact path="/general"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/> 
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> 
          </Routes>
        </Router>
      </div>
    );
  }
 export default App
