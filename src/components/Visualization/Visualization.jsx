import React from 'react';
import cytoscape from 'cytoscape';
import CyComp from 'react-cytoscapejs';
import fcose from 'cytoscape-fcose';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { FaImage } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { env } from '../../env';
import FileSaver from 'file-saver';

import { useState, useEffect } from 'react';



import './Visualization.scss';




cytoscape.use(fcose);

let cyRef;
const tdata = JSON.parse(localStorage.getItem("resultid"));
// const tdata = 'kbunt1652398829201results'
export const Visualization = React.memo(props => {

  
  let [data, setData] = useState([]);
  let [graphData, setGraphData] = useState([]);
  let [searchTerm, setSearchTerm] = useState(props.searchTerm);

  let layout = {
    name: 'random'
  }

  useEffect(() => {
    setSearchTerm(searchTerm);
    const fetchData = async () => {
      const results = await axios
      .get(
        `${env.BACKEND}/api/network/?results=${tdata}`
      );
      setData(results);
      
      setGraphData(results.data.results);
    }

    fetchData();
  }, [searchTerm]);

  let elements = [];

  let uniqueHost_Proteins;
  let uniquePatProteins;

  let hpidbs = [];
  let mints = [];
  let intacts = [];
  let dips = [];
  let biogrids =[];
  let strings = [];
  let arabihpis = [];

  const idDict = {
    hpidb : hpidbs,
    mint: mints,
    intact: intacts,
    string:strings,
    dip:dips,
    arabihpi:arabihpis,
    biogrid:biogrids
  }

  if (graphData.length && data.data) {

    let useData = graphData;


    elements = useData.map(item => {
      // console.log(item);

      let id = ''
      
        id = `${item.intdb_x}-${item.Host_Protein}-${item.Pathogen_Protein}`;
        // console.log(id)
        idDict[item.intdb_x].push(`#${id}`);

        return {data: { source: item.Host_Protein, target: item.Pathogen_Protein, id: id, Pathogen_Protein: item.Pathogen_Protein, Host_Protein: item.Host_Protein} };
      
    });

    uniqueHost_Proteins = Array.from(new Set(useData.map(item => {return item.Host_Protein})));

    uniquePatProteins = Array.from(new Set(useData.map(item => {
      return item.Pathogen_Protein
    })));


    for (let item of uniqueHost_Proteins) {
      elements.push({ data: {id: item, label: item, className: 'host'}});
    }

    for (let item of uniquePatProteins) {
      elements.push({ data: {id: item, label: item, className: 'pat'}});
    }
const opts = {
  
  nodeRepulsion: node => 450000,
  // Ideal edge (non nested) length
  idealEdgeLength: edge => 45,
  // Divisor to compute edge forces
  edgeElasticity: edge => 0.45,
  nodeSeparation: 50000,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
  numIter: 2500,
  fit: true,
}
    // This is a dumb hack that forces the graph to rerender. Don't ask.
    layout = {name: 'fcose',opts, avoidOverlap: true };
  }
 
  return (
    <div>
      <div className="cy">
        <CyComp elements={elements}             stylesheet={[
    {
      selector: 'node',
      style: {
        width: function(elements){ return Math.max(1, Math.ceil(elements.degree()/10))*5 ; },
        height: function(elements){ return Math.max(1, Math.ceil(elements.degree()/10)) *5; },
   
      }
    },
    {
      selector: 'edge',
      style: {

        width: 1
      }
    }
  ]}
            cy={(cy) => {
              cyRef = cy;
              
              cyRef.on('click', 'node', function(e) {
                // console.log(this.id());
                props.nodeHandler(e);
                // props.nodeHandler(e.target.degree())
                console.log(e.target.degree())
              });

              cyRef.on('click', 'edge', function(e) {
                console.log(e.target.data());
                props.edgeHandler(e.target.data());
              });

              if (uniqueHost_Proteins) {
                const Host_ProteinIds = uniqueHost_Proteins.map(item => {return `#${item}`});
                for (let id of Host_ProteinIds) {
                  cyRef.$(id).style({'background-color': '#266bbf'});
                  
                  
                }
              }
              
              if (uniquePatProteins) {
                const patIds = uniquePatProteins.map(item => {return `#${item}`});
                for (let id of patIds) {
                  cyRef.$(id).style({'background-color': '#e08351'});
                }
              }

              for (let id of hpidbs) {
                cyRef.$(id).style({'line-color': '#ff5733'});
              }

              for (let id of mints) {
                cyRef.$(id).style({'line-color': '#2b86ab'});
              }

              for (let id of intacts) {
                cyRef.$(id).style({'line-color': '#7856c7'});
              }
              for (let id of strings) {
                cyRef.$(id).style({'line-color': '#f07eba'});
              }

              for (let id of dips) {
                cyRef.$(id).style({'line-color': '#7e7ef0'});
              }

              for (let id of biogrids) {
                cyRef.$(id).style({'line-color': '#6ca6bc'});
              }
              for (let id of arabihpis) {
                cyRef.$(id).style({'line-color': '#d6d978'});
              }
            }}
            style={ { width: 'auto', height: '700px' } }
            layout={layout} className="cy-container"/>

      </div>

      <Row className="mt-3 text-left">
        <Col sm={4}>
          <h5>Nodes</h5>
        </Col>
        <Col sm={4}>
          <h5>Edges</h5>
        </Col>

        <Col sm={4} className="text-right pr-4">
          <Button className="kbl-btn-1 px-3 mx-4" title="Download JSON" onClick={() => {
              const cyJson = cyRef.json();
              const str = JSON.stringify(cyJson);
              const bytes = new TextEncoder().encode(str);
              const blob = new Blob([bytes], {
                  type: "application/json;charset=utf-8"
              });
              console.log(blob);
              FileSaver.saveAs(blob, 'chart.json');
            }}>
            <b>JSON</b>
          </Button>

          <IconContext.Provider value={{ className: "dl-icon" }}>
            <FaImage title="Download PNG" onClick={() => {
                const file = cyRef.png();
                FileSaver.saveAs(file, 'chart.png');
              }} />
          </IconContext.Provider>
        </Col>
      </Row>

      <Row className="species">
        <Col sm={4} >
          <Row >
            <Col>
              <IconContext.Provider value={{ className: "legend-icon host", color: '#266bbf' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">Host</span>
            </Col>
          </Row>

          <Row className="mt-2 ">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon pat", color: '#e08351' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">Pathogen</span>
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <Col>
              <IconContext.Provider value={{ className: "legend-icon int", color: '#ff5733' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">HPIDB</span>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon dom", color: '#2b86ab' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">MINT</span>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon con", color: '#7856c7' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">INTACT</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon con", color: '#6ca6bc' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">BioGrid</span>
            </Col>
          </Row>
          
          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon con", color: '#7e7ef0' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">DIP</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon con", color: '#f07eba' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">STRING</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <IconContext.Provider value={{ className: "legend-icon con", color: '#d6d978' }}>
                <FaCircle />
              </IconContext.Provider>

              <span className="legend-text">ArabiHPI</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
});
