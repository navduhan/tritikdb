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
                        <br />
                        The default values have been set for alignment filtering options (e-value, identity and coverage) for both host and pathogen proteins, but the tool also accepts user-entered values for these parameters.

                    </p>
                    <img src="images/interactome.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Host-pathogen interactions Result
                    </p>
                    <p className="infoh">
                        When a job is submitted, it will be assigned to a unique identifier that user can access to check the status of the job (queried, running or done). After the job is completed, it will display the results in an enriched table with the option to sort the content by column or to be filtered by keyword. The result table can be downloaded in excel or pdf format, or copied as clipboard.
                        To see the respective host or pathogen protein interactor from the selected databases on the previous page, the user can click on the protein ID in 'Host Interactor' and 'Pathogen Interactor' columns, which will take the user to the respective external links. This provides the user with additional information of the specific protein. From these interactions, the user can select a specific protein of interest and search it on other features available on the database to obtain functional annotation of the particular protein.
                        <br />
                        Further, the user can click on 'Network Visualization' to visualize the network of the predicted interactions.

                    </p>
                    <img src="images/result.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Host-pathogen interactions Network
                    </p>
                    <p className="infoh">
                    WeCoNET provides an efficient network visualization platform, implemented using Cytoscape. This plugin was specially chosen given its performance at displaying large networks. From the host-pathogen network visualization, a user can visualize a set of traits for each node (species, description, degree), and also can easily identify hub nodes (nodes with a higher number of edges). This is useful as hub nodes have been found crucial in infectious disease pathways. A user is not limited to the network analysis that is provided through our database, the resulted network can be further examined in any network analyzer that could handle JSON or tabular network files.
In the network, the color of the edges correspond to the respective databases chosen. The edges from each database are represented with different colors as shown on the top right corner of the page. The blue nodes represent host proteins while the red nodes are pathogen proteins.
The user can click on any node (one at a time) in the network to see the respective description of the protein, which is shown on the top left corner of the page.
To analyze the network within the database, the user can select a particular node and move it around. The layout of the network can also be reset using 'Force Atlas' button. 

                    </p>
                    <img src="images/network.png" className="imk" alt="" />
                </div>
                <div className="row  flex-lg-row justify-content-center g-2">
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