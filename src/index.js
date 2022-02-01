import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import './functionBased/App.css';


//component file
ReactDOM.render(<React.StrictMode>
                  <TodoContainer />
                </React.StrictMode>, document.getElementById("root"));