import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/UI/Button/Button";
import AboutAbility from "../components/AboutAbility/AboutAbility";
import Layout from "../components/AboutAbilityLayout/AboutAbilityLayout";
import { getAbility } from "../store/actions/aboutAbility";
class AbilityInfoContainer extends Component {
  abilityName = this.props.match.params.ability;

  componentDidMount() {
    this.props.getAbility(this.abilityName);
  }
  render() {
    return (
      <Layout>
        <AboutAbility
          abilityName={this.abilityName}
          effect={this.props.abilityInfo.effect}
          pokemonsList={this.props.abilityInfo.pokemonsList}
          loading={this.props.loading}
        />
        <Button onClick={this.props.history.goBack}>Назад</Button>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
  abilityInfo: state.aboutAbility.ability,
  loading: state.aboutAbility.loading,
});

const mapDispatchToProps = { getAbility };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityInfoContainer);
