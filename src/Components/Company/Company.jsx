import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

const Company = ({company}) => {
const [showForm, setShowForm] = useState(false);
const { Name, Sector, Relationship, Phone, Fax, URL, id } = company;
console.log(company, Name);
  
// name
// sector
// relationship
// phone
// fax
// URL
// id 
  return (
    <div className='company-form'>
      Company Information: 
      {/* <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCompanyName">
            
            {showForm ? 
                <Form.Control type={Name} id="companyName" defaultValue={Name} /> :
                <Form.Label>{Name}</Form.Label>
                }
            </Form.Group>
        </Row>
      </Form> */}

    </div>
  )
}

export default Company
