import React from "react";
import "./Interpro.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import { Divider } from "antd";
import { env } from "../../env";
const urlParams = new URLSearchParams(window.location.search);

const species = urlParams.get("id");

export default class GO extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = {
      List: [],
      offset: 0,
      perPage: 25,
      currentPage: 0,
      pageCount: 20,
      total: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;

    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.fetchResults();
      }
    );
  };

  fetchResults() {
    axios
      .get(
        `${env.BACKEND}/api/interpro/?species=${species}&page=${this.state.currentPage}&size=${this.state.perPage}`
      )
      .then((res) => {
        const List = res.data.data;

        const dl = Math.ceil(res.data.total / this.state.perPage);

        this.setState({
          List: List,
          pageCount: dl,
          total: parseInt(res.data.total),
        });
      });
  }

  componentDidMount() {
    this.fetchResults();
  }
  render() {
    return (
      <div className="container">
        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <h5>Gene Ontology </h5>
          <Divider />
        </div>
        <div className="row flex-lg-row align-items-center g-2 my-2">
          <h5>
            {" "}
            Showing {this.state.offset + 1} to {this.state.offset + 25} of{" "}
            {this.state.total} Gene Ontology Terms
          </h5>
        </div>
        <Table responsive className="go-table table-borderless">
          <thead className="go-thead">
            <tr>
              <th>Protein</th>
              <th>Protein Length</th>
              <th>Interpro ID</th>
              <th>Source Database</th>
              <th>Domian ID</th>
              <th>Description</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((result, index) => (
              <tr key={index + 1}>
                {(() => {
                  if (species === "tindica") {
                    return (
                      <td>
                        <a
                          href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${result["gene"]}%09`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result["gene"]}
                        </a>
                      </td>
                    );
                  } else {
                    return (
                      <td>
                        <a
                          href={`https://plants.ensembl.org/Multi/Search/Results?species=all;idx=;q=${result["gene"]};site=ensemblunit`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result["gene"]}
                        </a>
                      </td>
                    );
                  }
                })()}

                <td>{result["length"]}</td>
                <td>
                  <a href={`https://www.ebi.ac.uk/interpro/entry/InterPro/${result['interpro_id']}/`} target="_blank"
                          rel="noreferrer">
                  {result["interpro_id"]}
                  </a>
                </td>
                <td>{result["sourcedb"]}</td>
                <td>{result["domain"]}</td>
                <td className="desc">{result["domain_description"]}</td>

                <td>{result["score"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ReactPaginate
          forcePage={this.state.currentPage}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          ellipsisItem={null}
        />

        <div className="row flex-lg-row justify-content-center g-2 ">
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
    );
  }
}
