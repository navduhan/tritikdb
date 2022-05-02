import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { env } from './env';
import { TNavbar } from './components/TNavbar/TNavbar';
import Home from './pages/Home/Home';
import Interactome from './pages/Interactome/Interactome';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export class TRITIKDB extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseUrlLen: env.BASE_URL.split('/').length
        }
    }
    render(){
        return(
            <Router>
                 <Container fluid className='App px-4'>
                 <TNavbar active={document.location.pathname.split('/')[this.state.baseUrlLen]}/>
                <Routes>
                    <Route path={`${env.BASE_URL}/`} element={<Home />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/interactome`} element={<Interactome />}>
                    
                    </Route>
                
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}

