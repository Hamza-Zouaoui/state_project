import './App.css';
import { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  state = { 
    fullName: 'Hamza Zouaoui',
    bio: 'I,m am a full stack web developer in Gomycode', 
    imgSrc:'http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg', 
    profession:'Web Developer',
    show: false  
  }

  handleShow=()=>{
    this.setState(
      {show: !this.state.show}
    )
    
  }

  render() { 
    return ( 
    <div className="App">
      {this.state.show ? ( 
      <div className='prof'>
        <h1>{this.state.fullName}</h1>
        <h5>{this.state.bio}</h5>
        <h3>{this.state.profession}</h3>
        <img src={this.state.imgSrc} alt='webDeveloper' width='30%' />
        <br />
      </div> 
      ):(
        <h1>Show the profile</h1>
      )}
      <button onClick={this.handleShow}>{this.state.show? 'Hide' : 'Show'}</button>
      <div>
        <h2>Show the counter</h2>
        <Counter />
      </div>
    </div>
    )}
}
 
export default App;
