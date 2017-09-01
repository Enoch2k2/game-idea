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
            {this.state.units ? <ul className="dropdown"><li><Link to="/units/human">Human</Link></li>
              <li><Link to="/units/dwarf">Dwarf</Link></li>
              <li><Link to="/units/elf">Elf</Link></li>
              <li><Link to="/units/aerial">Aerial Race (placeholder)</Link></li>
              <li><Link to="/units/demon">Demon</Link></li>
              <li><Link to="/units/ork">Ork</Link></li>
              <li><Link to="/units/undead">Undead</Link></li>
              <li><Link to="/units/insectoid">Insectoid (placeholder)</Link></li></ul> : null}
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>
    )
  }
}
