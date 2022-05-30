import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './EdgeMenu.scss';

export class EdgeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (Object.keys(this.props.edgeData).length === 0) {
      return (<div>No edge selected</div>);
    }

    let geneLink = `https://www.ncbi.nlm.nih.gov/search/all/?term=${this.props.edgeData.Pathogen_Protein}`;
    let proteinLink = `https://plants.ensembl.org/Multi/Search/Results?species=all;idx=;q=${this.props.edgeData.Host_Protein};site=ensemblunit`;

    let intType = this.props.edgeData.id.split(':')[0];
    // intType = intType.charAt(0).toUpperCase() + intType.slice(1);

    return (
      <div>
        <div className="edge-menu-container text-left px-3 pt-2 pb-4">
          <h6 className="edge-type">Interaction</h6>
          <h3 className="edge-name"><b>{this.props.edgeData.id}</b></h3>
          <h5 className="int-type">
            <span className="edge-int">Interaction source:</span> <span className="edge-int-type">{intType}</span>
          </h5>
          <Row>
            <Col>
              <a href={proteinLink} className="link mr-2" target="_blank" rel="noopener noreferrer">
                Host Protein
              </a>
              &nbsp;|&nbsp;
              <a href={geneLink} className="link ml-2" target="_blank" rel="noopener noreferrer">
                Pathogen Protein
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
