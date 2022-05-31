import React from "react";
import { env } from '../../env';
import { Divider, Button } from "antd";
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
          <div className="col-md-9">
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
                  <p className="heading3"> Secretory Proteins: 705 </p>
                  <p className="heading3"> Effector and Secretory: 230 </p>
                </div>
              </div>
              
              <div className="col-md-7 infodiv">
                <h5>
                  TritiKBdb: Host-Pathogen Interaction Database of Karnal Bunt
                  disease
                </h5>
                <Divider />

                <p className="info">

                  Wheat, the most widely cultivated crop in the world, ranks third and accounts for around 35% of the total grains produced around the globe. 
                  Among some critical fungal diseases, the occurrence of Karnal Bunt (<b><i>Tilletia indica</i></b>, also known as partial bunt) in two of the most widely 
                  cultivated species of Wheat (<b><i>Triticum aestivum</i></b>, <b><i>Triticum turgidum</i></b>) has affected the grain yield and quality of the crop to a great extent, 
                  thus being a major threat to the agriculture industry worldwide. Karnal bunt is recognized to have a severe economic impact due to the loss 
                  of grain weight (about 0.25%), followed by the imposition of various international regulatory/quarantine restrictions on the crop grown in 
                  Karnal bunt infected regions. Most countries have a zero tolerance for Karnal bunt in import shipments.

                  The morphological and physiological variability in <b><i>T. indica</i></b> isolates enhance their ability to infect a wide range of hosts; thus, they are considered genetically variable for developing resistant crop varieties. The study of molecular interactions, especially protein-protein interactions, is crucial for understanding the disease infection mechanism in plants. These interactions play an important role in disease infection and host immune responses against the pathogen attack. Here, we report the development of a comprehensive database and webserver, TritiKBdb, that implements various tools to study the protein-protein interactions in the Triticum species-Tilletia indica pathosystem. The novel interactomics tool allows the user to visualize / compare the networks of the predicted interactions in an enriched manner. TritiKBdb is a user-friendly database that provides functional annotations such as subcellular localization, available domains, KEGG pathways, and GO terms of the host and pathogen proteins. Additionally, the information about the host and pathogen proteins that serve as transcription factors and effectors, respectively, is also made available. We believe that TritiKBdb will serve as a beneficial resource to the research community, particularly to the plant breeders and plant pathologists to better understand the Karnal bunt disease mechanisms and interactions with Wheat, and help in developing more efficient and durable disease resistant cultivars.
                </p>

                

                <a href={`${env.BASE_URL}/interactome`} target="_blank"
                  rel="noopener noreferrer">
                  <Button type="primary" shape="round">
                    Search Interactome
                  </Button>
                </a>
                <a href={`${env.BASE_URL}/search`} target="_blank"
                  rel="noopener noreferrer"><Button className="mx-4" type="primary" shape="round">
                    Advance Search Module
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
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
            <img src="./images/hpidb.png" alt="" />
            <figcaption>HPIDB</figcaption>
          </a>

          <a
            href="http://www.ebi.ac.uk/intact/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/intact.png" alt="" />
            <figcaption>IntAct</figcaption>
          </a>

          <a
            href="http://mint.bio.uniroma2.it"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/mint.png" alt="" />
            <figcaption>MINT</figcaption>
          </a>

          <a
            href="https://thebiogrid.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/biogrid.png" alt="" />
            <figcaption>BioGRID</figcaption>
          </a>
          <a
            href="https://string-db.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/string.png" alt="" />
            <figcaption>STRING</figcaption>
          </a>
          <a
            href="http://dip.doe-mbi.ucla.edu/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/dip.png" alt="dip" />
            <figcaption>DIP</figcaption>
          </a>
          <a
            href="https://manticore.niehs.nih.gov/cgi-bin/Domine"
            className="col-md-1 db2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/domine.png" alt="dip" />
            <figcaption>DOMINE</figcaption>
          </a>
          <a
            href="https://3did.irbbarcelona.org/"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/3did.png" alt="" />
            <figcaption>3did</figcaption>
          </a>
          <a
            href="http://www.uniprot.org/"
            className="col-md-1 db"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/uniprot.png" alt="" />
            <figcaption>UniProt</figcaption>
          </a>
          <a
            href="https://ensembl.org"
            className="col-md-1 hpidb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/ensembl.png" alt="" />
            <figcaption>ENSEMBL</figcaption>
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
