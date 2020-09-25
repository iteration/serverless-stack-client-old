import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/">Scratch</Link></Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/signup">Home</Nav.Link>
          <Nav.Link href="/login">Link</Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
