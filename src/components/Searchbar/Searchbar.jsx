import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  clearInput() {
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={e => {
            this.props.onFormSubmit(e, this.state.inputValue.trim());
            this.clearInput();
          }}
        >
          <button className="SearchForm-button" type="submit">
            <span>
              <FaSearch />
            </span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
