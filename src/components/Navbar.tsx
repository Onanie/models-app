import React, { ChangeEvent, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { setModel, setSearchID } from "../redux/actions";
import service from "../service";

const Navibar = () => {
  const [searchId, setSearchId] = useState("");
  const dispatch = useDispatch();

  const searchWithTitle = () => {
    service
      .getById(searchId)
      .then((response: any) => {
        dispatch(setModel(response.data));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
        alert(JSON.stringify(e));
      });
  };

  const queryModel = (option: string) => {
    service
      .queryModel(option)
      .then((response: any) => {
        dispatch(setModel(response.data));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchId(searchTitle);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/savedModel">Saved Models</Nav.Link>
            <Nav.Link href="/savedModel">Specials</Nav.Link>
            <Nav.Link href="savedModel">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Query Model By ID"
              className="me-4"
              aria-label="Search"
              value={searchId}
              onChange={onChangeSearchTitle}
            />
            <Button onClick={searchWithTitle} variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    model: state.selectedModel,
    search: state.searchId,
  };
};

export default connect(mapStateToProps, setModel, setSearchID)(Navibar);
