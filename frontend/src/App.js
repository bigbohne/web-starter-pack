import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Progress, Statistic } from 'semantic-ui-react'

class App extends Component {
  state = {}

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  render() { return (
    <div className="App">
	<Grid columns={2} divided>
	  <Grid.Row verticalAlign="middle">
  	    <Grid.Column width="13">
  	      <Progress percent="75" indicating />
	    </Grid.Column>
	    <Grid.Column width="3">
	      <Statistic>
	        <Statistic.Value>1337</Statistic.Value>
	        <Statistic.Label>Geilo</Statistic.Label>	 
	      </Statistic>
	    </Grid.Column>
	  </Grid.Row>
	</Grid>
    </div>
  );
  }
}

export default App;
