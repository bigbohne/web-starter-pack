import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button, Statistic } from 'semantic-ui-react'
import socketIOClient from 'socket.io-client'

class App extends Component {
  state = {"counter" : "N/A"}


  componentDidMount() {
    this.socket = socketIOClient();
    this.socket.on('message', this.update);
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  update = (state) => {
    this.setState(state);
  }

  up = () => {
    this.callApi('/api/up')
  }

  down = () => {
    this.callApi('/api/down')
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
	        <Statistic.Label>Z&auml;hler</Statistic.Label>
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
