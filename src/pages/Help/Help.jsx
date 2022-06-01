import React from "react";
import { Divider } from "antd";
import './Help.scss'
import { LinkOutlined } from "@ant-design/icons";
export default class Help extends React.Component {

    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h5><b>TritiKBdb Tutorial</b></h5>
                    <Divider />
                    <p className="infot">
                        Introduction
                    </p>
                    <p className="infoh">
                        Wheat, the most widely cultivated crop in the world, ranks third and accounts for around 35% of the total grains produced around the globe.
                        Among some critical fungal diseases, the occurrence of Karnal Bunt (<b><i>Tilletia indica</i></b>, also known as partial bunt) in two of the most widely
                        cultivated species of Wheat (<b><i>Triticum aestivum</i></b>, <b><i>Triticum turgidum</i></b>) has affected the grain yield and quality of the crop to a great extent,
                        thus being a major threat to the agriculture industry worldwide. Karnal bunt is recognized to have a severe economic impact due to the loss
                        of grain weight (about 0.25%), followed by the imposition of various international regulatory/quarantine restrictions on the crop grown in
                        Karnal bunt infected regions. Most countries have a zero tolerance for Karnal bunt in import shipments.
                    </p>
                    <img src="images/home.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Datasets implemented in the study
                    </p>
                    <p className="infoh">
                        The respective host and pathogen species proteomes used in the analysis can be found on <a href="datasets" >Datasets <sup> <i> <LinkOutlined /></i></sup></a> page. If required, the users can directly download the protein sequence files from these sources.
                    </p>
                    <img src="images/datasets.png" className="imk" alt="" />

                    <Divider />
                    <p className="infot">
                        Host-pathogen interactomics module
                    </p>
                    <p className="infoh">
                        The <a href="interactome" >Interactomics <sup> <i> <LinkOutlined /></i></sup></a> tool allows the user to find the interactions between host 
                        (Triticum aestivum) and pathogen (T. caries & T. laevis) proteins. In this module, the user has the option to select the specific 
                        protein-protein interaction database(s) that will be used as a template in the prediction process, or to define BLASTp alignment 
                        filters to determine homolog proteins. By default, three databases (HPIDB, MINT & DIP) have been selected. All the seven databases
                        can be selected at once using the option 'ALL'.
                        <br/>
                        The default values have been set for alignment filtering options (e-value, identity and coverage) for both host and pathogen proteins, but the tool also accepts user-entered values for these parameters.

                    </p>
                    <img src="images/interactome.png" className="imk" alt="" />
                </div>
            </div>
        )
    }
}