import React from 'react';

export default class RaceContent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showGood: true,
      showBad: true
    }

    this.toggleGood = this.toggleGood.bind(this);
    this.toggleBad = this.toggleBad.bind(this);
  }

  toggleGood(e){
    e.preventDefault();
    this.setState({showGood: !this.state.showGood})
  }

  toggleBad(e){
    e.preventDefault();
    this.setState({showBad: !this.state.showBad})
  }

  render(){
    return (
      <div id="content">
        <h2>Playable Races</h2>
        <p>The game world will consist of 8 different races. Each race will have it's own look and abilities.</p>
        <h3>Good Races</h3>
        {this.state.showGood ? <a href="" onClick={this.toggleGood}>hide</a> : null}
        {this.state.showGood ?
          <ol>
            <li>Human</li>
            <ul>
              <li>They are religious and believe in one god, the god of light</li>
              <li>They have a lord that runs the castle</li>
            </ul>
            <li>Dwarf</li>
            <ul>
              <li>They love wealth</li>
              <li>They have a mountain king that runs their mountainous castle</li>
            </ul>
            <li>Elf</li>
            <ul>
              <li>They have a bond with nature</li>
              <li>They have an elven king who has a mastery over nature</li>
            </ul>
            <li>Aerial Race(placeholder)</li>
            <ul>
              <li>They rule over the skies</li>
              <li>They have an eagle like (king) who has is galliant</li>
            </ul>
          </ol> : null}
          {!this.state.showGood ? <a href="" onClick={this.toggleGood}>show</a> : null}
          <h3>Bad Races</h3>
          {this.state.showBad ? <a href="" onClick={this.toggleBad}>hide</a> : null}
          {this.state.showBad ?
            <ol>
              <li>Demon</li>
              <ul>
                <li>They are religious and believe in one god, the devil of the dark</li>
                <li>They have a demon lord that runs the fortress</li>
              </ul>
              <li>Ork</li>
              <ul>
                <li>They are a barbaric race and are feirce in battle</li>
                <li>They have an overlord that is the fiercest amongst their warriors</li>
              </ul>
              <li>Undead</li>
              <ul>
                <li>They have faced death and rose from the ashes</li>
                <li>They are led by a vampire lord who has necromantic powers</li>
              </ul>
              <li>Insectoids(placeholder)</li>
              <ul>
                <li>They are an ancient race of insectoids that's lived in the depths for a long time</li>
                <li>They are led by a insect overmind that controls it's swarm with strong mental prowess</li>
              </ul>
            </ol> : null}
            {!this.state.showBad ? <a href="" onClick={this.toggleBad}>show</a> : null}
      </div>
    )
  }
}
