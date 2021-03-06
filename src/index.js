import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import './functionBased/App.css';
import 'rsuite/dist/rsuite.min.css';


//component file
ReactDOM.render(<React.StrictMode>
                  <BrowserRouter>
                    <TodoContainer />
                  </BrowserRouter>
                </React.StrictMode>, document.getElementById("root"));