import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import Message from "./components/Message";

const App = () => {
  return (
    <Routes>
      <Route exact path="/random" element={<Message />} />
    </Routes>
  )
}

ReactDOM.render(
       <Provider store={store}>
         <BrowserRouter>
           <NavLink to="/" role="button">
              <span>Home | </span>
           </NavLink>
           <NavLink to="/random" role="button">
              <span>Greeting message</span>
            </NavLink>
           <App />
         </BrowserRouter>
       </Provider>, document.getElementById('root'))