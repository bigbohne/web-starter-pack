import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button, Statistic } from 'semantic-ui-react'

class App extends Component {
  state = {"counter" : "N/A"}


  componentDidMount() {
    this.update();
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  update = () => {
    this.callApi('/api/value')
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }

  up = () => {
    this.callApi('/api/up')
      .then(this.update());
  }

  down = () => {
    this.callApi('/api/down')
      .then(this.update());
  }

  render() { return (
    <div className="App">
	<Grid divided>
	  <Grid.Row verticalAlign="middle">
  	    <Grid.Column width="3">
  	      <Button onClick={this.up}>Up!</Button>
	    </Grid.Column>
	    <Grid.Column width="10">
	      <Statistic>
	        <Statistic.Value>{this.state.counter}</Statistic.Value>
	        <Statistic.Label>Geilo</Statistic.Label>	 
	      </Statistic>
	    </Grid.Column>
  	    <Grid.Column width="3">
  	      <Button onClick={this.down}>Down!</Button>
	    </Grid.Column>
	  </Grid.Row>
	</Grid>
    </div>
  );
  }
}

export default App;
