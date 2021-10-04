import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqvvody");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="contact-container">
            <div className="contact-paragraph">
              {" "}
              <p>
                {" "}
                Sound engineer working in the live sector as a freelancer and
                chief engineer at Bloc+, Glasgow. My aim is to move into the
                sound design sector with a view to enhancing interactive audio
                integration into theatre, dance and therapeutic applications.{" "}
              </p>
              <br />
              <p> For Rates & Inquiries Fill In The Form Below </p>{" "}
            </div>

            <Row>
              <Col md={4} className="mx-auto">
                <form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="name*"
                      name="name"
                    />
                  </Form.Group>

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />

                  <Form.Group>
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="email*"
                      name="email"
                    />
                  </Form.Group>

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <Form.Group>
                    <Form.Label htmlFor="city">City</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="city*"
                      name="city"
                    />
                  </Form.Group>

                  <ValidationError
                    prefix="City"
                    field="city"
                    errors={state.errors}
                  />

                  <Form.Group className="form-message">
                    <Form.Label htmlFor="message">Message: {""}</Form.Label>
                    <Form.Control
                      as="textarea"
                      className="form"
                      id="message"
                      rows="10"
                      placeholder="message*"
                      name="message"
                    />
                  </Form.Group>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Submit
                  </Button>
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
