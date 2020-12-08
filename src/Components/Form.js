import React , {Component}from 'react'
import{Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


 
class RegForm extends Component { 


    constructor(props)
       
    {   super(props);

        this.state={
            FirstName:"" ,
            LastName:"",
            Email:"",
             Password:"",
    }
    }

    handlefirstname=(event)=>
    {this.setState({FirstName:event.target.value})
}
    handlelastname=(event)=>
    {this.setState({LastName:event.target.value})
    }
    handleemail=(event)=>
    {this.setState({Email:event.target.value})
    }
    
    handleAge=(event)=>
    {this.setState({Age:event.target.value})
    }
    handlepassword=(event)=>
    {this.setState({Password:event.target.value})
    }

handlesubmit=(event)=>{

if (this.state.FirstName==="")
 alert(`Sorry,You have not entered your first name`);
 
else if
     (this.state.LastName==="")
 alert(`Sorry,You have not entered your last name`);
 
  else if (this.state.Email==="")
alert(`Sorry,You have not entered your email Id`);

 else if (this.state.Password==="")
alert(`Sorry,You have not entered the password`);
    

else 
   alert (`HELLO ${this.state.FirstName}! You have successfully registered!!!`);
   event.preventDefault(); 
}


    render()
{
    console.log(this.state)
    return(
        <div><Card className="input">
            <Form onSubmit={this.handlesubmit} className="input">   
           <Row><Col>
                <Form.Label > FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName"value={this.state.FirstName}
                onChange={this.handlefirstname}/> </Col>
                <Col><Form.Label>LastName</Form.Label>
                <Form.Control type="text"placeholder="Enter LastName" value={this.state.LastName}
                onChange={this.handlelastname}/> 
                </Col> </Row> 
                <Row><Col>
                <Form.Label>Email Id </Form.Label>
                <Form.Control type="email" placeholder="Enter Email Id"value={this.state.Email}
                onChange={this.handleemail}/> </Col>
                <Col><Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"value={this.state.Password}
                onChange={this.handlepassword}/> 
                </Col></Row><br/>
                <Form.Control type="submit" value="SUBMIT" className="button"/> 
                
               </Form></Card>
                
           
            
        </div>
    )   

    }
}


export default RegForm;
