import React from "react";
import { Divider } from "antd";
import './Datasets.scss'
import { LinkOutlined } from "@ant-design/icons";
export default class Datasets extends React.Component {



    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h5><b>Genomic Information of the Datasets</b></h5>
                    <Divider />
                    <div className="col-md-10">
                        <p className="infod">
                            Here, you will find a brief description of all the protein datasets used in TritiKBdb. From this page, users can go directly to the original source of the proteome and download the protein sequences.
                        </p>
                        <Divider />
                        <p className="infod">
                            <b><i>Triticum </i> species(susceptible to Karnal Bunt)</b>
                            <br/>
                            <b><i>Triticum aestivum</i></b> and <b><i>Triticum turgidum</i></b> the most widely cultivated species of wheat in the world. They are considered as a most important staple food due to its richness in various nutrients such as carbohydrates, proteins, and minerals.
                            <br/>
                            Link to <i>Triticum aestivum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_aestivum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                        </p>
                        <Divider/>
                        <p className="infod">
                        <b> <i>Tilletia </i>species (Infecting <i>Triticum</i>)</b>
<br/>
<b><i>Tilletia indica</i></b> fungal species that cause karnal bunt in wheat.  Karnal bunt is recognized to have a severe economic impact due to the loss of grain weight (about 0.25%), followed by the imposition of various international regulatory/quarantine restrictions on the crop grown in Karnal bunt infected regions. 
<br/>
Link to <i>Tilletia indica</i>: <a href="https://www.ncbi.nlm.nih.gov/data-hub/genome/GCA_001689995.1/" rel="noreferrer" target="_blank" >NCBI<sup> <i> <LinkOutlined /></i></sup></a>
                        </p>
                    </div>
                    <Divider />
                </div>
                <div className="row footer flex-lg-row justify-content-center g-2">
          <Divider />
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
            </div>
        )
    }
}