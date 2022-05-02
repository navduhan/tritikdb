import React from "react";
import "bootstrap";
import { Divider, Radio, Checkbox, Button } from "antd";
import "antd/dist/antd.min.css";
import "./Interactome.scss";

const CheckboxGroup = Checkbox.Group;

const interologOptions = [
  "HPIDB",
  "DIP",
  "MINT",
  "STRING",
  "BioGRID",
  "IntAct",
  "PHI-base",
];

const domainOptions = [
    '3DID',
    'IDDI',
    'DOMINE',
]

const interologCheckedList = ["HPIDB", "STRING"]
const domainCheckedList = ["3DID", "IDDI"];

export default class Interactome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchType:'interactome',
            ostype:'unique',
            checkedList: interologCheckedList,
            dcheckedList: domainCheckedList,
            indeterminate: true,
            checkAll:false,
            dcheckAll:false,
            dindeterminate:true,
            status:'interolog',
            species:'tsestivum',
            identity:0,
            coverage:0,
            evalue:0,
        };
        this.radioHandler = this
        .radioHandler
        .bind(this);
        this.speciesHandler = this
        .speciesHandler
        .bind(this);
        this.onChange =this
        .onChange
        .bind(this);
        this.onCheckAllChange =this
        .onCheckAllChange
        .bind(this);
        this.onChange2 =this
        .onChange2
        .bind(this);
        this.onCheckAllChange2 =this
        .onCheckAllChange2
        .bind(this);
        this.identityHandler = this
        .identityHandler
        .bind(this)
        this.coverageHandler = this
        .coverageHandler
        .bind(this)
        this.evalueHandler = this
        .evalueHandler
        .bind(this)
        this.interactomeHandler = this
        .interactomeHandler
        .bind(this)
        this.intHandler = this
        .intHandler
        .bind(this)


    }

  radioHandler(e) {
      this.setState({
          status:e.target.value
      })
      
  }

  speciesHandler =(e) =>{
      this.setState({species:e.target.value})
  }

  identityHandler (e){
    this.setState({identity:e.target.value})
  }
  coverageHandler (e){
    this.setState({coverage:e.target.value})
  }
  evalueHandler (e){
    this.setState({evalue:e.target.value})
  }

  onChange(list){
   this.setState({
       checkedList: list,
       indeterminate:(!!list.length && list.length < interologOptions.length),
       checkAll:list.length === interologOptions.length
   })
  };

  onChange2(list){
    this.setState({
        dcheckedList: list,
        dindeterminate:(!!list.length && list.length < domainOptions.length),
        dcheckAll:list.length === domainOptions.length
    })
   };

  onCheckAllChange (e){
      this.setState({
          checkedList:e.target.checked ? interologOptions : [],
          indeterminate: false,
          checkAll: e.target.checked
      })
  };
  onCheckAllChange2 (e){
    this.setState({
        dcheckedList:e.target.checked ? domainOptions : [],
        dindeterminate: false,
        dcheckAll: e.target.checked
    })
};

interactomeHandler(e){
this.setState({searchType:e.target.value})
}

intHandler(e){
  this.setState({ostype:e.target.value})
  }

  render(){

    console.log(this.state.status)
    
  return (
    <div className="container">
      <Divider />
      <div className="row flex-lg-row align-items-center g-2 my-2">
      
          <h5>Select Search Type</h5>
          <Radio.Group name="radiogroup" defaultValue={'interactome'}>
            <Radio value='interactome' onChange={this.interactomeHandler}  >
              One host against one Pathogen
            </Radio>
            <Radio value='cinteractome' onChange={this.interactomeHandler} >
              Compare two host against one Pathogen
            </Radio>
          </Radio.Group>
       
      </div>
      <Divider />
{this.state.searchType !== 'cinteractome' && (
      <div className="row flex-lg-row align-items-center g-2 my-2">

        <div className="col-md-6">
          <h5>Select a Wheat Species</h5>
          <Radio.Group name="radiogroup" defaultValue={'taestivum'}>
            <Radio value='taestivum' onChange={this.speciesHandler}  >
              <i>Triticum aestivum </i>
            </Radio>
            <Radio value='tturgidum' onChange={this.speciesHandler} >
              <i>Triticum turgidum </i>
            </Radio>
          </Radio.Group>
        </div>

        <div className="col-md-6">
          <Radio.Group name="radiogroup" defaultValue={'interolog'}>
            <h5>Select Interaction Category</h5>
            <Radio value='interolog'  onClick={this.radioHandler}>Interolog</Radio>
            <Radio value='domain'  onClick={this.radioHandler}>Domain</Radio>
            <Radio value='consensus'  onClick={this.radioHandler}>Consensus</Radio>
          </Radio.Group>
        </div>
        <Divider />
      </div>
)}
{this.state.searchType !== 'interactome' && (
      <div className="row flex-lg-row align-items-center g-2 my-2">

        <div className="col-md-6">
          <h5>Select Interaction Type</h5>
          <Radio.Group name="radiogroup" defaultValue={'unique'}>
            <Radio value='unique' onChange={this.intHandler}  >
              Unique interactions
            </Radio>
            <Radio value='common' onChange={this.intHandler} >
              Common interactions
            </Radio>
          </Radio.Group>
        </div>

        <div className="col-md-6">
          <Radio.Group name="radiogroup" defaultValue={'interolog'}>
            <h5>Select Interaction Category</h5>
            <Radio value='interolog'  onClick={this.radioHandler}>Interolog</Radio>
            <Radio value='domain'  onClick={this.radioHandler}>Domain</Radio>
            <Radio value='consensus'  onClick={this.radioHandler}>Consensus</Radio>
          </Radio.Group>
        </div>
        <Divider />
      </div>
)}
{this.state.status !=='domain' && this.state.status !=='consensus' && (
      <div className="row flex-lg-row justify-content-center g-2 my-3">
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
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <Divider/>
        <div className="row flex-lg-row justify-content-center g-2 my-3">
          <h5>Alignment Filtering Options</h5>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Identity (%)</label>
              <select value="30" className="form-select" onChange={this.identityHandler}>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Coverage (%)</label>
              <select value="40" className="form-select"onChange={this.coverageHandler}>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Evalue</label>
              <select value="1e-4" className="form-select" onChange={this.evalueHandler}>
                <option value='1e-4' >1e-4</option>
                <option value="1e-5">1e-5</option>
                <option value="1e-10">1e-10</option>
                <option value="1e-20">1e-20</option>
                <option value="1e-25">1e-25</option>
                <option value="1e-30">1e-30</option>
                <option value="1e-30">1e-50</option>
              </select>
            </div>
          </div>
        </div>
        <Divider/>
      </div>

     
)}

{this.state.status !=='interolog' && this.state.status !=='consensus' && (
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
            indeterminate={this.state.dindeterminate}
            onChange={this.onCheckAllChange2}
            checked={this.dcheckAll}
          >
            Check all
          </Checkbox>
        </div>
        
    <Divider />
    </div>
</div>
)}

{this.state.status !=='interolog' && this.state.status !=='domain' && (
    <div>
<div className="row flex-lg-row justify-content-center g-2 my-3">
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
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <Divider />
        </div>
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
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange2}
            checked={this.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <Divider/>
    
    </div>
    <div className="row flex-lg-row justify-content-center g-2 my-3">
          <h5>Alignment Filtering Options</h5>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Identity (%)</label>
              <select value="30" className="form-select" onChange={this.identityHandler}>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Coverage (%)</label>
              <select value="40" className="form-select"onChange={this.coverageHandler}>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="80">80</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2 cold">
            <div className="form-inline">
              <label className="label-text">Select Evalue</label>
              <select value="1e-4" className="form-select" onChange={this.evalueHandler}>
                <option value='1e-4' >1e-4</option>
                <option value="1e-5">1e-5</option>
                <option value="1e-10">1e-10</option>
                <option value="1e-20">1e-20</option>
                <option value="1e-25">1e-25</option>
                <option value="1e-30">1e-30</option>
                <option value="1e-30">1e-50</option>
              </select>
            </div>
          </div>
        </div>
        <Divider />
      </div>
       

)}
    <div className="row flex-lg-row justify-content-center g-2 my-3">
        <div className="col-md-2">
           <Button type="primary" shape="round" size='large'>Show Interactions </Button>
        </div>
        </div>
    </div>

  )
}

}
