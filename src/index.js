import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoContainer from "./components/TodoContainer";

//stylesheet
import './index.css';
import './App.css';


//component file
ReactDOM.render(<React.StrictMode>
                  <TodoContainer />
                </React.StrictMode>, document.getElementById("root"));