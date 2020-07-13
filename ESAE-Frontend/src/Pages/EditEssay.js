import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreateExam.css';
import './Popup.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class EditEssay extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', Question:null, CorrectAnswer:null, ILO:null,  Grade:null, IsUpdated:null,
        OldQuestion:null};
        //this.GetEssayInfo()
        this.Autofill()
        
          
    }

    //this is for one question
    async GetEssayInfo()
    {
        const params = new URLSearchParams(window.location.hash.split("?")[1]);
        const exam = params.get('exam');
        //params = new URLSearchParams(window.location.hash.split("?")[2]);
        const question = params.get('question');
        const id = params.get('id');
        const response = await fetch('/GetAEssQues/'+exam+'/'+id+'/'+question).then(response => response.json());
        this.setState({Question:response.Question, CorrectAnswer:response.CorrectAnswer, ILO:response.ILO,  Grade:response.Grade});

    }

    UpdateEssay(NewQuestion, NewCorrectAns, NewILO, NewGrade)
    {
        const params = new URLSearchParams(window.location.hash.split("?")[1]);
        const exam = params.get('exam');
        //params = new URLSearchParams(window.location.hash.split("?")[2]);
        const question = params.get('question');
        const id = params.get('id');
        fetch('/UpdateEssay/'+question+'/'+NewQuestion+'/'+NewCorrectAns+'/'+exam+'/'
        +NewILO+'/'+NewGrade+'/'+id)
            .then(response => response.json())
            .then(data => this.setState({IsUpdated:data.Updated}));
        //this.handleSave();
    }

    async Autofill()
    {
        await this.GetEssayInfo()
        document.getElementById('EssayILO').value=this.state.ILO;
        document.getElementById('EssayGrade').value=this.state.Grade;
        document.getElementById('TextEssay').value=this.state.Question;
        document.getElementById('AnswerEssay').value=this.state.CorrectAnswer;
    }

    handleSave()
    {
     if (this.state.IsUpdated == "Successfully updated")
     {
       alert("Saved Successfully");
     }
     else
     {
       alert("Unseuccessful try");
       window.location.reload(false);
     } 
    }

    render() {
        return (
        <div>
<Container style={{width:'660px',height:'590px',backgroundColor:'white', overflow:'scroll'}}>
        <br />
<Form.Group  id="formExamEssay" controlId="formExamEssay">
    <Form.Label>Essay Question</Form.Label>
    <Row>
    <Form.Control  size="sm"id="EssayILO" type="text" style={{width:'50%',margin: '15px 15px 15px 15px'}}
    placeholder="Enter Question ILO"></Form.Control>
   <Form.Control size="sm" id="EssayGrade"style={{width:'40%',margin: '15px 15px 15px 15px'}} type="number"
    placeholder="Enter Your Grade" />
   
   </Row>
    <Form.Control size="sm" id="TextEssay" type="text" placeholder="Enter Your Essay Question" />
   <br />
    <Form.Control size="sm" as="textarea"id="AnswerEssay" placeholder="Enter Your Model Answer" />
    <Button size="sm" style={{ float:'right'}} variant="success"
     onClick={()=>{this.UpdateEssay(document.getElementById('TextEssay').value, 
     document.getElementById('AnswerEssay').value, document.getElementById('EssayILO').value, 
     document.getElementById('EssayGrade').value)
     }}
      >Save Changes</Button>
    </Form.Group>
    </Container>
        </div>
        )
    }
}
export default EditEssay;