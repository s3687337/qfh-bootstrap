import logo from './logo.svg';
import React, { useState } from 'react';
import { DropdownButton, Row, Col, Dropdown, Accordion, InputGroup, FormControl, Form, Alert, Modal, Button } from 'react-bootstrap';
import './App.css';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

function App() {

  // ----- Form Validation stuff -----

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // ----- Dropdown with search filter stuff -----

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().includes(value),
            )}
          </ul>
        </div>
      );
    },
  );

  // ---------------------------------------------------

  return (
    <>

    <br/><br/>
      <div className="container m-auto">
        <h1>Heading</h1>
        <p class="lead">Leading paragraph.</p>
        <p>Paragraph with a bit more text. Texty texty text.</p>
        
        <hr/> 
        <h2>Buttons/Colors</h2>
        <Button variant="primarylight">Primary (light)</Button>
        <Button variant="primary">Primary</Button>        
        <Button variant="primarydark">Primary (dark)</Button>
        <br/>
        <Button variant="secondarylight">Secondary (light)</Button>
        <Button variant="secondary">Secondary</Button>        
        <Button variant="secondarydark">Secondary (dark)</Button>
        <br/>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <br/>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        
        <hr/>
        <h2>Backgrounds</h2>
        <div class="bg-light d-flex align-items-center justify-content-center" style={{height:100}}>Background: Light (bg-light)</div>
        <div class="bg-dark d-flex align-items-center justify-content-center text-white" style={{height:100}}>Background: Dark (bg-dark)</div>
        <div class="bg-primarylight d-flex align-items-center justify-content-center" style={{height:100}}>Background: Primary (Light) (bg-primarylight)</div>
        <div class="bg-primarydark d-flex align-items-center justify-content-center text-white" style={{height:100}}>Background: Primary (Dark) (bg-primarydark)</div>
        <div class="bg-secondarylight d-flex align-items-center justify-content-center" style={{height:100}}>Background: Secondary (Light) (bg-secondarylight)</div>
        <div class="bg-secondarydark d-flex align-items-center justify-content-center text-white" style={{height:100}}>Background: Secondary (Dark) (bg-secondarydark)</div>

        <hr/>
        <h2>Form</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="button">
            Submit
          </Button>
        </Form>
       
        <hr/> 

        <h2>Form with Validation</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        
        <hr/> 

        <h2>Terms and Conditions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <hr/>

        <h2>Dropdown with Search/Filter (kinda broken)</h2>
        <div className="dropdown">
          <InputGroup className="mb-3">
            <Dropdown>
              <Dropdown.Toggle            
                variant="outline-primary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >Country
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Australia</Dropdown.Item>
                <Dropdown.Item eventKey="2">Canada</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>British Columbia</Dropdown.Item>
                <Dropdown.Item eventKey="1">Belgium</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl disabled placeholder="Please select a Country" />
          </InputGroup>
        </div>
                      
      </div>
      <br/><br/><br/><br/>
    </>
  );
}

export default App;