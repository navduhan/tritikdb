import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { env } from '../../env';
import './TNavbar.scss';
import lablogo from './lab_logo_red.png';
import usulogo from './usulogo2.png';
import dblogo from './TritiKBdb.png';


class TNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    console.log(this.props.active);

    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    console.log(link)
    console.log(this.props.active)
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

    render() {console.log(this.props.active)
        let className = 'mx-1'
        let active = 'mx-1 current'
        console.log(env.BASE_URL)
return(
  <div className="container contain">
  <div className="row flex-lg-row align-items-center g-2 mt-2">

    <div className="col-md-2">
      <img src={lablogo} height={50} alt=''></img>
    </div>
    <div className="col-md-2">
      <img src={dblogo} height={60} alt=''></img>

    </div>
    <div className=" col-md-6 mt-2 nav-wrapper mx-auto">
        <Navbar className="justify-content-center">
          

          <Nav className="">
            <Nav.Link href= {`${env.BASE_URL}/`} className={'/' === this.props.active ? active : className}>
              Home
            </Nav.Link>
            <Nav.Link href= {`${env.BASE_URL}/interactome`} className={'interactome' === this.props.active ? active : className}>
              Interactome
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/datasets`} className={'datasets' === this.props.active ? active : className}>
              Datasets
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/help`} className={'help' === this.props.active ? active : className}>
              Help
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
      <div className="col-md-2">
      <img src={usulogo} height={50} alt=''></img>
    </div>
    </div>
    
      </div>

)

    }
}

export {TNavbar};