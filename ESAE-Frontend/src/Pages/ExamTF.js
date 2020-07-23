import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Exam.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

class ExamTF extends Component {

    render() {
        var ExamTF = window.ExamTF;

        var TFHead = "";
        var TF = "";
        if (ExamTF.length != 0) {
            TFHead = <div><Form.Label  ><b>True or False:</b></Form.Label> <br /></div>;
            TF = ExamTF.map((Question, index) => {
                return (
                    <div>
                        <Form.Label  >Question {index + 1}: {ExamTF[index]}  </Form.Label>
                              
                        <Form.Label style={{float:"right", paddingRight:"6px"}}><input type="radio" name={index} value="False" disabled/>F </Form.Label> 
                        <Form.Label style={{ float: "right" ,paddingRight:"6px"  }}><input type="radio" name={index} value="True" disabled />T </Form.Label>

=======
//import { Link } from 'react-router-dom';
import './Exam.css';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup'
//import Exam from './Exam.js';

class ExamTF extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', QuestionList:[], CorrectAnswerList:[], ILOList:[], GradeList:[]};
        //alert(window.IDToken1)
        this.GetTF()
          
    }
        
    GetTF()
    {
        var examname=this.props.passedname
        var id=this.props.passedid
        //alert(id)
        fetch('/GetTF/'+examname+'/'+id)
          .then(response => response.json())
          .then(data => this.setState({QuestionList : data.QuestionList, CorrectAnswerList : data.CorrectAnswerList, 
            ILOList:data.ILOList, GradeList:data.GradeList}));
    }
    render() {
        //var ExamTF = window.ExamTF;
        var ExamTF = this.state.QuestionList;
        const params = new URLSearchParams(window.location.hash.split("?")[1]);
        //const name = params.get('name');
        var TFHead = "";
        var TF = "";
        if (ExamTF.length != 0) {
            TFHead = <div><Form.Label style={{ color: 'green' }} ><b>True or False:</b></Form.Label> <br /></div>;
            TF = ExamTF.map((Question, index) => {
                return (
                    <div>
                       <Form.Label  > {index + 1})&nbsp;{ExamTF[index]}  </Form.Label>
                        <br></br>
                        <Form.Label style={{ paddingRight:"6px" ,margin:"10px 10px 10px 10px" }}><input type="radio" name={index} disabled  value="True"  />True </Form.Label>   
                        <Form.Label style={{paddingRight:"6px",margin:"10px 10px 10px 10px"}}><input type="radio" name={index} disabled value="False" />False </Form.Label> 
                        
>>>>>>> Yousry_Evaluate
                    </div>
                )
            }
            );
        }

        return (
            <div>
                {TFHead}
                {TF}
            </div>
        )
    }
}

export default ExamTF;