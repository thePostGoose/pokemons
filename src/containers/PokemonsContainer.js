import React, { Component } from "react";
import Layout from "../components/PokemonsContainerLayout/PokemonsContainerLayout";
import Search from "../components/Search/Search";
import { connect } from "react-redux";
import { getPokemons, searchHandler } from "../store/actions/pokemons";
import PokemonsList from "../components/PokemonsList/PokemonsList";
class PokemonsContainer extends Component {
  componentDidMount() {
    this.props.getPokemons();
  }

  render() {
    return (
      <Layout>
        <Search
          value={this.props.searchValue}
          onChange={(e) => this.props.searchHandler(e.target.value)}
        />
        <PokemonsList
          pokemonsNames={this.props.pokemonsNames}
          searchValue={this.props.searchValue}
          loading={this.props.loading}
        />
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
  pokemonsNames: state.pokemons.pokemonsNames,
  limit: state.pokemons.limit,
  offset: state.pokemons.offset,
  searchValue: state.pokemons.searchValue,
  loading: state.pokemons.loading,
  error: state.pokemons.error,
});

const mapDispatchToProps = {
  getPokemons,
  searchHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
