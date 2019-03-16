import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div class="sidenav">
              <a href="#about"><img src={require('./logosite.png')} width='100px' height='100px' padding='100px'/></a>
              <a href="#about"><img src={require('./Person.png')} width='40px' height='40px' padding='100px'/>   &raquo; About</a>
              <a href="#services"><img src={require('./services-png-1.png')} width='40px' height='40px' padding='100px'/>   &raquo; Services</a>
              <a href="#clients"><img src={require('./clients-png.png')} width='40px' height='30px' padding='100px'/>   &raquo; Clients</a>
              <a href="#contact"><img src={require('./e7ccd59e8b.png')} width='40px' height='30px' padding='100px'/>   &raquo; Contact</a>
              <a href="#contact"><img src={require('./Donate.png')} width='40px' height='30px' padding='100px'/>   &raquo; Contact</a>
              <p>&copy; Under the copyright of the Chatterjee company</p>
          </div>
          <div class="main">
              <h2>Sidebar</h2>
              <p>This sidebar is of full height (100%) and always shown.</p>
              <p>Scroll down the page to see the result.</p>
              <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          </div>
      </div>
    );
  }
}

export default App;
