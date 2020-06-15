import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import { BrowserRouter } from 'react-router-dom';
import Account from "./pages/Account/Account";

const App = () => {
        return (
            <BrowserRouter>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/account" exact component={Account} />
            </BrowserRouter>
        );
    };
export default App;
