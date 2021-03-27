import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import ContactForm from "./ContactForm";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Components/Home";
import About from "./Components/About";

class App extends Component {
  // Initialize state
  //   state = { passwords: [] };

  //   // Fetch passwords after first mount
  //   componentDidMount() {
  //     this.getPasswords();
  //   }

  //   getPasswords = () => {
  //     // Get the passwords and store them in state
  //     fetch("/api/passwords")
  //       .then((res) => res.json())
  //       .then((passwords) => this.setState({ passwords }));
  //   };

  render() {
    // const { passwords } = this.state;

    return (
      <div className="App">
        <Nav />
        <div className="mainBody">
          <h1>Forget Harry. I want Jerry!</h1>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactForm} />
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;

// {passwords.length ? (
//     <div>
//       <h1>5 Passwords.</h1>
//       <ul className="passwords">
//         {/*
//           Generally it's bad to use "index" as a key.
//           It's ok for this example because there will always
//           be the same number of passwords, and they never
//           change positions in the array.
//         */}
//         {passwords.map((password, index) => (
//           <li key={index}>{password}</li>
//         ))}
//       </ul>
//       <button className="more" onClick={this.getPasswords}>
//         Get More
//       </button>
//     </div>
//   ) : (
//     // Render a helpful message otherwise
//     <div>
//       <h1>No passwords :(</h1>
//       <button className="more" onClick={this.getPasswords}>
//         Try Again?
//       </button>
//     </div>
//   )}
