import React from "react";

import { Divider, Button} from "antd";
import "./Home.scss";
import CookieConsent from "react-cookie-consent";
import { Modal } from "react-bootstrap";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });
  render() {
    return (
      <div className="container">
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <div className="col-md-8">
            <Divider />
            <div className="row flex-lg-row justify-content-center g-2 my-2">
              <div className="col-md-4">
                <div className="card cardd">
                  <h5 className="heading">Host Species </h5>
                  <p className="heading2">
                    <i>Triticum aestivum</i>
                    <hr className="line"></hr>
                  </p>
                  <p className="heading3"> Proteins: 104,701 </p>
                  <p className="heading3"> Gene Ontology: 4904 </p>
                  <p className="heading3"> KEGG Pathway: 402 </p>
                  <p className="heading3"> Transcription Factors: 5,833 </p>

                  <hr></hr>
                  <p className="heading2">
                    <i>Triticum turgidum</i>
                    <hr className="line"></hr>
                  </p>
                  <p className="heading3"> Proteins: 65,409 </p>
                  <p className="heading3"> Gene Ontology: 3639 </p>
                  <p className="heading3"> KEGG Pathway: 401 </p>
                  <p className="heading3"> Transcription Factors: 3,461 </p>
                </div>
                <div className="card cardd mt-4">
                  <h5 className="heading">Pathogen Species </h5>
                  <p className="heading2">
                    <i>Tilletia indica</i>
                    <hr className="line"></hr>
                  </p>
                  <p className="heading3"> Proteins: 9,533 </p>
                  <p className="heading3"> Gene Ontology: 816 </p>
                  <p className="heading3"> KEGG Pathway: 375 </p>
                  <p className="heading3"> Effector Proteins: 2651 </p>
                  <p className="heading3"> Seceretory Proteins: 705 </p>
                  <p className="heading3"> Effector and Secretory: 230 </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-7">
                <h5>
                  TritiKBdb: Host-Pathogen Interaction Database of Karnal Bunt
                  disease
                </h5>
                <Divider />
                {/* <Input
                  placeholder="input search text"
                  allowClear
                 
                  size="large"
                /> */}
                <p className="info">
                  Wheat ({" "}
                  <i>
                    <b>Triticum aestivum</b>
                  </i>{" "}
                  ), the most widely cultivated crop in the world, ranks third
                  and counts to around 35% of the total grains produced around
                  the globe. The occurence of karnal bunt in wheat has affected
                  the grain yield and quality of the crop to a great extent,
                  thus being a major threat to the agriculture industry,
                  worldwide. The disease is caused by smut fungus{" "}
                  <i>
                    <b>Tilletia indica</b>
                  </i>{" "}
                  a basidiomycete, invades the kernels and obtains nutrients
                  from the endosperm, leaving behind waste products with a
                  disagreeable odor that makes bunted kernels too unpalatable
                  for use in flour or pasta.. This also affects{" "}
                  <i>
                    <b>Triticum turgidum</b>
                  </i>{" "}
                  (durum wheat) another most widely cultivated wheat. Karnal
                  bunt is named after Karnal, India, where the disease was first
                  discovered on a wheat crop in 1931. Since then, the disease
                  has been reported in all major wheat-growing states of India,
                  Pakistan, Afghanistan, Mexico, and certain areas of the
                  Southwestern United States such as New Mexico, Arizona, and
                  parts of Texas{" "}
                  <Button type="link" shape="circle" onClick={this.openModel}>
                    (Ref1)
                  </Button>
                  . Karnal bunt pathogenesis is heavily dependent on weather
                  conditions. Relative humidity over 70% favors teliospore
                  development. Furthermore, daytime temperatures in the range of
                  18–24 °C, and soil temperatures in the range of 17–21 °C also
                  increase the severity of Karnal bunt{" "}
                  <Button type="link" shape="circle" onClick={this.openModel}>
                    (Ref2)
                  </Button>
                  .
                </p>
                <Modal
                  size="xl"
                  style={{ bottom: 0 }}
                  show={this.state.isOpen}
                  onHide={this.closeModel}
                >
                  <Modal.Header closeButton></Modal.Header>

                  <Modal.Body>
                    <p>
                      1. R. L. Forster and B. J. 1996. Goates.{" "}
                      <a href="http://www.uiweb.uidaho.edu/ag/plantdisease/kbwheat.htm">
                        http://www.uiweb.uidaho.edu/ag/plantdisease/kbwheat.htm
                      </a>
                      <br />
                      2. U.S. Department of Agriculture 2007{" "}
                      <a href="http://www.aphis.usda.gov/import_export/plants/manuals/domestic/downloads/kb.pdf">
                        http://www.aphis.usda.gov/import_export/plants/manuals/domestic/downloads/kb.pdf
                      </a>
                    </p>
                    {/* <Button type='danger' shape='round' onClick={this.closeModel}>Close</Button> */}
                  </Modal.Body>
                </Modal>

                <a href="interactome">
                  <Button type="primary" shape="round">
                    Search Interactome
                  </Button>
                </a>
                <Button className="mx-4" type="primary" shape="round">
                  Advance Search Module
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 mt-3">
            <div className="card cardd">
              <h5 className="heading">Functional Annotations </h5>
              <p className="heading2">
                <i>Triticum aestivum</i>
                <hr className="line"></hr>
              </p>
              <ul className="list list-inline ">
                <li>
                  <a className="linked" href="kegg/?id=aestivum">
                    KEGG Pathways
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="linked" href="go/?id=aestivum">
                    Gene Ontology
                  </a>
                </li>

                <li>
                  <a className="linked" href="interpro/?id=aestivum">
                    Functional Domains{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href="local/?id=aestivum">
                    Subcellular Localization{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href="tf/?id=aestivum">
                    Transcription Factors{" "}
                  </a>
                </li>
              </ul>
              <hr></hr>
              <p className="heading2">
                <i>Triticum turgidum</i>
                <hr className="line"></hr>
              </p>
              <ul className="list list-inline ">
                <li>
                  <a className="linked" href="kegg/?id=turgidum">
                    KEGG Pathways
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="linked" href="go/?id=turgidum">
                    Gene Ontology
                  </a>
                </li>

                <li>
                  <a className="linked" href="interpro/?id=turgidum">
                    Functional Domains{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href="local/?id=turgidum">
                    Subcellular Localization{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href="tf/?id=turgidum">
                    Transcription Factors{" "}
                  </a>
                </li>
              </ul>
              <hr></hr>
              <p className="heading2">
                <i>Tilletia indica</i>
                <hr className="line"></hr>
              </p>
              <ul className="list list-inline ">
                <li>
                  <a className="linked" href="kegg/?id=tindica">
                    KEGG Pathways
                  </a>
                </li>
                <li>
                  <a className="linked" href="go/?id=tindica">
                    Gene Ontology
                  </a>
                </li>

                <li>
                  <a className="linked" href="interpro/?id=tindica">
                    Functional Domains
                  </a>
                </li>
                <li>
                  <a className="linked" href="local/?id=tindica">
                    Subcellular Localization
                  </a>
                </li>
                <li>
                  <a className="linked" href="virulence/?id=effector">
                    Effector Proteins
                  </a>
                </li>
                <li>
                  <a className="linked" href="virulence/?id=secretory">
                    Secretory Proteins
                  </a>
                </li>
                <li>
                  <a className="linked" href="virulence/?id=effector_and_secretory">
                    Effector and Secretory Proteins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <h4>Data Sources</h4>
        </div>

        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <a
            href="https://hpidb.igbb.msstate.edu/"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/hpidb.png" alt="" />
            <figcaption>HPIDB</figcaption>
          </a>

          <a
            href="http://www.ebi.ac.uk/intact/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/intact.png" alt="" />
            <figcaption>IntAct</figcaption>
          </a>

          <a
            href="http://mint.bio.uniroma2.it"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/mint.png" alt="" />
            <figcaption>MINT</figcaption>
          </a>

          <a
            href="https://thebiogrid.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/biogrid.png" alt="" />
            <figcaption>BioGRID</figcaption>
          </a>
          <a
            href="https://string-db.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/string.png" alt="" />
            <figcaption>BioGRID</figcaption>
          </a>
          <a
            href="http://dip.doe-mbi.ucla.edu/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/dip.png" alt="dip" />
            <figcaption>DIP</figcaption>
          </a>
          <a
            href="https://manticore.niehs.nih.gov/cgi-bin/Domine"
            className="col-md-1 db2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/domine.png" alt="dip" />
            <figcaption>DOMINE</figcaption>
          </a>
          <a
            href="https://3did.irbbarcelona.org/"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/3did.png" alt="" />
            <figcaption>3did</figcaption>
          </a>
          <a
            href="http://www.uniprot.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/uniprot.png" alt="" />
            <figcaption>UniProt</figcaption>
          </a>
          <a
            href="https://ensembl.org"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/ensembl.png" alt="" />
            <figcaption>HPIDB</figcaption>
          </a>
        </div>
        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <p>
            &copy; 2022 |&nbsp;{" "}
            <a
              href="http://bioinfo.usu.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaundal Artificial Intelligence and Advanced Bioinformatics Lab
            </a>
            &nbsp; |&nbsp;{" "}
            <a href="https://usu.edu" target="_blank" rel="noopener noreferrer">
              Utah State University
            </a>
          </p>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Accept!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          {/* <span style={{ fontSize: "10px" }}>This bit of text is small</span> */}
        </CookieConsent>
      </div>
    );
  }
}
