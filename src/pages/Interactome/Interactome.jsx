import React from "react";
import "bootstrap";
import { Divider, Radio, Checkbox, Button } from "antd";
import "antd/dist/antd.min.css";
import "./Interactome.scss";
import { InfoCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { env } from "../../env";

import { Modal, Form} from "react-bootstrap";
import FileInput  from '../../components/FileInput/FileInput';


const CheckboxGroup = Checkbox.Group;
const interologOptions = [
  "HPIDB",
  "DIP",
  "MINT",
  "STRING",
  "BioGRID",
  "IntAct",
  "Arabihpi",
];

const domainOptions = ["3DID", "IDDI", "DOMINE"];

const interologCheckedList = ["HPIDB", "MINT"];
const domainCheckedList = ["3DID", "IDDI"];

export default class Interactome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactomeType: "interactome",
      searchType: "proteome",
      idType:'host',
      ostype: "unique",
      checkedList: interologCheckedList,
      dcheckedList: domainCheckedList,
      checkAll: false,
      dcheckAll: false,
      status: "interolog",
      species: "aestivums",
      identity: 80,
      coverage: 80,
      evalue: 1e-20,
      pidentity: 80,
      pcoverage: 80,
      pevalue: 1e-20,
      resultid: "",
      isOpen: false,
      ppiOpen: false,
      genes: '',
      geneHintOn:false,
    };
    this.radioHandler = this.radioHandler.bind(this);
    this.speciesHandler = this.speciesHandler.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckAllChange = this.onCheckAllChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onCheckAllChange2 = this.onCheckAllChange2.bind(this);
    this.identityHandler = this.identityHandler.bind(this);
    this.coverageHandler = this.coverageHandler.bind(this);
    this.evalueHandler = this.evalueHandler.bind(this);
    this.interactomeHandler = this.interactomeHandler.bind(this);
    this.intHandler = this.intHandler.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
    this.handleGeneChange=this.handleGeneChange.bind(this);
    this.getInteractions = this.getInteractions.bind(this);
    this.setGeneHint = this.setGeneHint.bind(this);
    this.idHandler = this.idHandler.bind(this);
    this.accessionHandler = this.accessionHandler.bind(this);
  }

  radioHandler(e) {
    this.setState({
      status: e.target.value,
    });
  }

  speciesHandler = (e) => {
    this.setState({ species: e.target.value });
  };

  idHandler = (e) =>{
    this.setState({searchType: e.target.value})
  }

  accessionHandler = (e) =>{
    this.setState({idType:e.target.value})
  }

  identityHandler(e) {
    this.setState({ identity: e.target.value });
  }
  coverageHandler(e) {
    this.setState({ coverage: e.target.value });
  }
  evalueHandler(e) {
    this.setState({ evalue: e.target.value });
  }

  pidentityHandler(e) {
    this.setState({ pidentity: e.target.value });
  }
  pcoverageHandler(e) {
    this.setState({ pcoverage: e.target.value });
  }
  pevalueHandler(e) {
    this.setState({ pevalue: e.target.value });
  }

  onChange(list) {
    this.setState({
      checkedList: list,

      checkAll: list.length === interologOptions.length,
    });
  }

  onChange2(list) {
    this.setState({
      dcheckedList: list,

      dcheckAll: list.length === domainOptions.length,
    });
  }

  onCheckAllChange(e) {
    this.setState({
      checkedList: e.target.checked ? interologOptions : [],

      checkAll: e.target.checked,
    });
  }
  onCheckAllChange2(e) {
    this.setState({
      dcheckedList: e.target.checked ? domainOptions : [],

      dcheckAll: e.target.checked,
    });
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });

  ppiModalopen = () => this.setState({ ppiOpen: true });
  ppiModalclose = () => this.setState({ ppiOpen: false });

  interactomeHandler(e) {
    this.setState({ interactomeType: e.target.value });
  }

  intHandler(e) {
    this.setState({ ostype: e.target.value });
  }

  fileSelected(fileText) {
    const protein = fileText.split("\n");
    this.setState({genes: protein});
   
  }
  handleGeneChange(e) {
    this.setState({ genes: e.target.value });
  }

  setGeneHint(hint) {
    this.setState({geneHintOn: hint});
  }
  getInteractions() {
    this.openModel();

    const intdb = this.state.checkedList.map((element) => {
      return element.toLowerCase();
    });

    const domdb =this.state.dcheckedList.map((element) => {
      return element.toLowerCase();
    });

    

    let postBody;
    let pspecies;
    let hspecies;
    if (this.state.status === "interolog") {
      pspecies = "interolog_tindicas"
      hspecies = "interolog_"+this.state.species
      postBody = {
        category: "interolog",
        hspecies: hspecies,
        pspecies: pspecies,
        ids: this.state.idType,
        genes:this.state.genes,
        stype:this.state.searchType,
        hi: this.state.identity,
        hc: this.state.coverage,
        he: this.state.evalue,
        pi: this.state.pidentity,
        pc: this.state.pcoverage,
        pe: this.state.pevalue,
        intdb: intdb,
      };
    }
    if (this.state.status === "domain") {
      pspecies = "domain_tindicas"
      hspecies = "domain_"+this.state.species
      postBody = {
        category: "domain",
        hspecies: hspecies,
        pspecies: pspecies,
        ids: this.state.idType,
        genes:this.state.genes,
        stype:this.state.searchType,
        hi: this.state.identity,
        hc: this.state.coverage,
        he: this.state.evalue,
        pi: this.state.pidentity,
        pc: this.state.pcoverage,
        pe: this.state.pevalue,
        intdb: domdb.toString(),
      };
    }
    
    console.log(postBody);
    
    axios
      .post(
        // `${env.BACKEND}/api/ppi/?species=${this.state.species}&identity=${this.state.identity}&coverage=${this.state.coverage}&evalue=${this.state.evalue}&intdb=${intdb}`
        `${env.BACKEND}/api/ppi/`,
        postBody
      )
      .then((res) => {
        const rid = res.data;
        console.log(rid);
        this.setState({ resultid: rid });

        this.closeModel();
        window.location.replace("results");
      })
      .catch((err) => console.log(err));
  }

  render() {
    localStorage.setItem(
      "param",
      JSON.stringify({
        he: this.state.evalue,
        hi: this.state.identity,
        hc: this.state.coverage,
        pe: this.state.pevalue,
        pi: this.state.pidentity,
        pc: this.state.pcoverage,
        resultid: this.state.resultid,
        category: this.state.status,
      })
    );
    let genePlaceholder = 'Example ENSEMBL-IDs: TraesCS6A02G059000, TraesCS5A02G216600, TraesCS2A02G417800';
    let geneSample = 'TraesCS6A02G059000, TraesCS5A02G216600, TraesCS2A02G417800, TraesCS7A02G408100, TraesCS7A02G434500, TraesCS2A02G203000, TraesCS7A02G178900, TraesCS4B02G350800';

    if (this.state.idType === 'pathogen') {
      genePlaceholder = 'Example NCBI-IDs: OAJ02622, OAI99867, OAJ05030';
      geneSample = 'OAJ02622, OAI99867, OAJ05030, OAI99147';
    }
      console.log(this.state.idType)
    return (
      <div className="container">
        {/* {localStorage.setItem("resultid", JSON.stringify(this.state.resultid))} */}
        <Divider />
        {console.log(this.state.genes)}
        <div className="row flex-lg-row align-items-center g-2 my-2">
          <h5>Select Interactome Type</h5>
          <Radio.Group name="radiogroup" defaultValue={"interactome"}>
            <Radio value="interactome" onChange={this.interactomeHandler}>
              One host against one Pathogen
            </Radio>
            <Radio value="cinteractome" onChange={this.interactomeHandler}>
              Compare two host against one Pathogen
            </Radio>
          </Radio.Group>
        </div>

        <Modal show={this.state.ppiOpen} onHide={this.ppiModalclose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title>
            <h5 className="my-2 text-center">About PPI Databases</h5>
          </Modal.Title>
          <Modal.Body>
            <p className="info">
              The International Molecular Exchange Consortium{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.imexconsortium.org"
              >
                (IMEX)
              </a>{" "}
              had the initiative to cluster the largest public interaction data
              providers. From those we have selected five (HPIDB, MINT, DIP,
              BioGRID and IntAct), as we think these are most comprehensive for
              the studying the interactions, althought these databases can be
              used for general purposes (any dataset can be used in this
              service). Additionally, we also implemented PHI-base, and the
              plant experimental interactions from STRING database.{" "}
            </p>
            <hr></hr>
            <p className="info">
              HPIDB is the default database, because it is the only one solely
              made by host-pathogen interactions. Others include any kind of
              protein-protein interactions.
            </p>
            <hr></hr>
            <p className="info">
              Summary of the databases version running on this service:
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="http://hpidb.igbb.msstate.edu/"
              >
                HPIDB
              </a>{" "}
              have 69,787 sequences with 389,910 interactions.
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mint.bio.uniroma2.it/"
              >
                MINT
              </a>{" "}
              have 26,344 sequences with 131,695 interactions.
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="http://dip.mbi.ucla.edu/dip/"
              >
                DIP
              </a>{" "}
              have 28,404 sequences with 81,923 interactions.
            </p>
            <p className="info">
              <a target="_blank" rel="noreferrer" href="https://string-db.org/">
                STRING
              </a>{" "}
              have 97,483 sequences with 4,944,287 interactions.
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://thebiogrid.org/"
              >
                BioGRID
              </a>{" "}
              have 82,751 sequences with 1,565,084 interactions.
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ebi.ac.uk/intact/"
              >
                IntAct
              </a>{" "}
              have 121,387 sequences with 1,156,385 interactions.
            </p>
            <p className="info">
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.phi-base.org/"
              >
                PHI-base
              </a>{" "}
              have 6,776 sequences with 15,849 interactions.
            </p>
            <hr></hr>
            <p className="info" style={{ color: "tomato" }}>
              Note: There can be overlapping data between databases.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button type="danger" shape="round" onClick={this.ppiModalclose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Divider />

        <div className="row flex-lg-row align-items-center">
          {this.state.interactomeType !== "cinteractome" && (
            <div className="col-md-4">
              <h5>Select a Wheat Species</h5>
              <Radio.Group name="radiogroup" defaultValue={"aestivums"}>
                <Radio value="aestivums" onChange={this.speciesHandler}>
                  <i>Triticum aestivum </i>
                </Radio>
                <Radio value="turgidums" onChange={this.speciesHandler}>
                  <i>Triticum turgidum </i>
                </Radio>
              </Radio.Group>
            </div>
          )}

          {this.state.interactomeType !== "interactome" && (
            <div className="col-md-4">
              <h5>Select Interaction Type</h5>
              <Radio.Group name="radiogroup" defaultValue={"unique"}>
                <Radio value="unique" onChange={this.intHandler}>
                  Unique interactions
                </Radio>
                <Radio value="common" onChange={this.intHandler}>
                  Common interactions
                </Radio>
              </Radio.Group>
            </div>
          )}
          <div className="col-md-4">
            <Radio.Group name="radiogroup" defaultValue={"interolog"}>
              <h5>Select Interaction Method</h5>
              <Radio value="interolog" onClick={this.radioHandler}>
                Interolog
              </Radio>
              <Radio value="domain" onClick={this.radioHandler}>
                Domain
              </Radio>
              <Radio value="consensus" onClick={this.radioHandler}>
                Consensus
              </Radio>
            </Radio.Group>
          </div>
          <div className="col-md-4">
            <Radio.Group name="radiogroup" defaultValue={"proteome"}>
              <h5>Select Search Type</h5>
              <Radio value="proteome" onClick={this.idHandler}>
                Whole Proteome
              </Radio>
              <Radio value="accession" onClick={this.idHandler}>
                Provide Accessions
              </Radio>
            </Radio.Group>
          </div>
          <Divider />
        </div>
{this.state.searchType==='accession' && (
        <div className="row flex-lg-row align-items-center">
          
          <div className="col-md-3">
            <h5>Select IDs Type</h5>
            <Radio.Group name="radiogroup" defaultValue={"host"}>
              <Radio value="host" onChange={this.accessionHandler}>
                Host
              </Radio>
              <Radio value="pathogen" onChange={this.accessionHandler}>
                Pathogen
              </Radio>
              
            </Radio.Group>
          </div>

          <div className="col-md-5">
            <h5>Enter protein or protein IDs here.</h5>
                    <Form.Control className="kbl-form mb-4" as="textarea" rows={4} placeholder={genePlaceholder} onChange={ this.handleGeneChange }
                      value={this.state.genes} onMouseEnter={() => this.setGeneHint(true)} onMouseLeave={() => this.setGeneHint(false)} spellCheck={false}/>
                    <Button className="kbl-btn-1 mx-3" onClick={e => {
                        this.setState({genes: geneSample});
                      }}>Sample Data</Button>
                    <Button className="kbl-btn-2" onClick={e => {
                        this.setState({genes: ""})
                      }}>Clear Data</Button>
         </div>
         <div className="col-md-1"><b>OR</b></div>
          <div className="col-md-3 mb-5">
<h5 className="mt-5 pl-2"> Upload Protein IDs List</h5>

<FileInput handler={this.fileSelected} />
</div>
          <Divider />
        </div>
     
     )}
        {this.state.status === "interolog" &&
          this.state.status !== "domain" &&
          this.state.status !== "consensus" && (
            <div>
              <div className="row flex-lg-row justify-content-center ">
                <h5>
                  Select Interaction Databases{" "}
                  <InfoCircleOutlined onClick={this.ppiModalopen} />
                </h5>
                <div className="col-md-6">
                  <CheckboxGroup
                    options={interologOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-2">
                  <Checkbox
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                  >
                    Check all
                  </Checkbox>
                </div>
                <Divider />
              </div>
              <div className="row flex-lg-row justify-content-center">
                <div className="col-md-6">
                <div className="row flex-lg-row justify-content-center">
                <h5>Host Alignment Filtering Options</h5>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Identity %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.identity}
                      onChange={this.identityHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Coverage %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.coverage}
                      onChange={this.coverageHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Evalue</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.evalue}
                      onChange={this.evalueHandler}
                    ></input>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row flex-lg-row justify-content-center">
                <h5>Pathogen Alignment Filtering Options</h5>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Identity %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pidentity}
                      onChange={this.pidentityHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Coverage %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pcoverage}
                      onChange={this.pcoverageHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Evalue</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pevalue}
                      onChange={this.pevalueHandler}
                    ></input>
                  </div>
                </div>
                  </div>
                </div>
                <Divider />
              </div>
              
            </div>
          )}

        {this.state.status !== "interolog" &&
          this.state.status !== "consensus" && (
            <div>
              <div className="row flex-lg-row justify-content-center g-2 my-3">
                <h5>Select Domain Databases</h5>
                <div className="col-md-6">
                  <CheckboxGroup
                    options={domainOptions}
                    value={this.state.dcheckedList}
                    onChange={this.onChange2}
                  />
                </div>
                <div className="col-md-2">
                  <Checkbox
                    onChange={this.onCheckAllChange2}
                    checked={this.state.dcheckAll}
                  >
                    Check all
                  </Checkbox>
                </div>

                <Divider />
              </div>
            </div>
          )}

        {this.state.status !== "interolog" && this.state.status !== "domain" && (
          <div>
            <div className="row flex-lg-row justify-content-center">
              <h5>Select Interaction Databases</h5>
              <div className="col-md-6">
                <CheckboxGroup
                  options={interologOptions}
                  value={this.state.checkedList}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-md-2">
                <Checkbox
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  Check all
                </Checkbox>
              </div>
              <Divider />
            </div>
            <div className="row flex-lg-row justify-content-center">
              <h5>Select Domain Databases</h5>
              <div className="col-md-6">
                <CheckboxGroup
                  options={domainOptions}
                  value={this.state.dcheckedList}
                  onChange={this.onChange2}
                />
              </div>
              <div className="col-md-2">
                <Checkbox
                  onChange={this.onCheckAllChange2}
                  checked={this.state.dcheckAll}
                >
                  Check all
                </Checkbox>
              </div>
              <Divider />
            </div>
            <div className="row flex-lg-row justify-content-center">
                <div className="col-md-6">
                <div className="row flex-lg-row justify-content-center">
                <h5>Host Alignment Filtering Options</h5>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Identity %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.identity}
                      onChange={this.identityHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Coverage %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.coverage}
                      onChange={this.coverageHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Evalue</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.evalue}
                      onChange={this.evalueHandler}
                    ></input>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row flex-lg-row justify-content-center">
                <h5>Pathogen Alignment Filtering Options</h5>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Identity %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pidentity}
                      onChange={this.pidentityHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Coverage %</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pcoverage}
                      onChange={this.pcoverageHandler}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-inline">
                    <label className="label-text">Evalue</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.pevalue}
                      onChange={this.pevalueHandler}
                    ></input>
                  </div>
                </div>
                  </div>
                </div>
                <Divider />
              </div>
          </div>
        )}

        <div className="row flex-lg-row justify-content-center g-2 my-3">
          {this.state.isOpen && (
            <div className="col-md-8">
              <img
                src="./images/test.gif"
                className="loading"
                height="50px"
                alt=""
              ></img>
            </div>
          )}
          {this.state.isOpen === false && (
            <div className="col-md-2">
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={this.getInteractions}
              >
                Show Interactions{" "}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
