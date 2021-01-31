import React from "react";
import axios from "axios";

import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ monsters: response.data });
  };

  onInputChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          onInputChange={this.onInputChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
