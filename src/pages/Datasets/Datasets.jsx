import React from "react";
import { Divider } from "antd";
import './Datasets.scss'
import { LinkOutlined} from "@ant-design/icons";
export default class Datasets extends React.Component{



    render(){
        return(
            <div className="container">
                <Divider/>
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                <h5><b>Genomic Information of the Datasets</b></h5>
                <Divider/>
                <div className="col-md-10">
                    <p className="info">
                    Here, you will find a brief description of all the protein datasets used in TritiKBdb. From this page, users can go directly to the original source of the proteome and download the protein sequences.
                    </p>
                    <Divider/>
                    <p className="info">
                    <b><i>Triticum </i> species(susceptible to Karnal Bunt)</b>
<br/>
<b><i>Triticum aestivum</i></b> and <b><i>Triticum turgidum</i></b> the most widely cultivated species of wheat in the world. They are considered as a most important staple food due to its richness in various nutrients such as carbohydrates, proteins, and minerals.
 <br/>
 Link to <i>Triticum aestivum</i> dataset:     <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_aestivum/pep/" rel="noreferrer"  target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined/></i></sup></a>
 <br/>
 Link to <i>Triticum turgidum</i> dataset:   
                    </p>
                </div>
                    <Divider/>
                </div>
            </div>
        )
    }
}