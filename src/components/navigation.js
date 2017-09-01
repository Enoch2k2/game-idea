import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      units: false
    }

    this.toggleUnits = this.toggleUnits.bind(this);
  }

  toggleUnits(e){
    e.preventDefault();
    this.setState({units: !this.state.units});
  }

  render(){
    return(
      <div id="navigation">
        <p><a href="#content" className="accessaid">Skip navigation</a></p>
          <ul>
            <li><Link to="/">Concept</Link></li>
            <li><Link to="/races">Races</Link></li>
            <li><a href="">Game Play</a></li>
            <li><a href="">World History</a></li>
            <li><a href="">Multiplayer</a></li>
            <li><a href="" onClick={this.toggleUnits}>Units</a></li>
          </ul>
            {this.state.units ? <ul className="dropdown"><li><a href="">Human</a></li>
              <li><a href="">Dwarf</a></li>
              <li><a href="">Elf</a></li>
              <li><a href="">Aerial Race (placeholder)</a></li>
              <li><a href="">Demon</a></li>
              <li><a href="">Ork</a></li>
              <li><a href="">Undead</a></li>
              <li><a href="">Insectoid (placeholder)</a></li></ul> : null}
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>
    )
  }
}
