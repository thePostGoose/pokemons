import React, { Component } from "react";
import Layout from "../components/PokemonPageLayout/PokemonPageLayout";
import Button from "../components/UI/Button/Button";
import Info from "../components/Info/Info";
import { connect } from "react-redux";
import { getPokemonAbout } from "../store/actions/pokemonPage";
class PokemonPage extends Component {
  name = this.props.match.params.name;

  componentDidMount() {
    this.props.getPokemonAbout(this.name);
  }

  render() {
    return (
      <Layout name={this.name}>
        <Info
          name={this.name}
          types={this.props.types}
          stats={this.props.stats}
          abilities={this.props.abilities}
          loading={this.props.loading}
        />
        <Button onClick={() => this.props.history.push("/")}>На главную</Button>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  stats: state.pokemonPage.stats,
  types: state.pokemonPage.types,
  abilities: state.pokemonPage.abilities,
  loading: state.pokemonPage.loading,
});

const mapDispatchToProps = {
  getPokemonAbout,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
