import React from 'react';
import Search from './components/Search';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      SearchString: ""
    }
  }

  onChange = (event) => {
    console.log('Wrote shit');
    console.log(event.target.value);
    this.setState({SearchString: event.target.value});
  }
 
  render()
  {
    return (
      <>
      <input type="text" onChange={ this.onChange } value={this.state.SearchString }/>
      <Search items={this.state.items.filter((item) => item.name.includes(this.state.SearchString))} />
      </>
    )
  }
}

export default App;