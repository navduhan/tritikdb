import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './NodeMenu.scss';

export class NodeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (Object.keys(this.props.nodeData).length === 0) {
      return (<div>No node selected</div>);
    }

    let type = 'Host Gene';
    let ncbiLink = `https://plants.ensembl.org/Multi/Search/Results?species=all;idx=;q=${this.props.nodeData.name.toLowerCase()};site=ensemblunit`;
    let uniLink;

    if (this.props.nodeData.nodeType === 'Pathogen Protein') {
      type = 'Pathogen Protein';

      uniLink = `https://www.ncbi.nlm.nih.gov/search/all/?term=${this.props.nodeData.name.toLowerCase()}`;
      
    }

    return (
      <div>
        <div className="node-menu-container text-left px-3 pt-2 pb-4">
          <h6 className="node-type">{type}</h6>
          <h3 className="node-name"><b>{this.props.nodeData.name}</b></h3>
          <h5 className="no-name"> Degree:{this.props.nodeData.degree}</h5>
          <Row>
            <Col>
              <a href={uniLink} className="link mr-2" target="_blank" rel="noopener noreferrer">
                NCBI
              </a>
              &nbsp;|&nbsp;
              <a href={ncbiLink} className="link ml-2" target="_blank" rel="noopener noreferrer">
                ENSEMBL
              </a>
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            
          </Col>
        </Row>
      </div>
    );
  }
}
