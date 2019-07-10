import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero';
import Agent from '../components/Agent/Agent';
import '../components/Agent/agents.css';
import Banner from '../components/Banner';
import { connect } from 'react-redux';
import store from '../store/store';
import { getAgents } from '../actions/Agents';

class Agents extends Component {
    static propTypes = {
        agents: PropTypes.object.isRequired,
    }
    componentDidMount () {
        store.dispatch( getAgents() );
    }
    render () {
        const { agents, count, next, prev } = this.props.agents;
        
        return (
            <Fragment>
                <Hero>
                    <Banner title="Great agents find great property." subtitle="" >
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FontAwesomeIcon icon = {["fas","search"]}/></div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="enter keyword" />
                            </div>
                        </form>
                    </Banner>
                </Hero>
                <div className="row directors">
                    { agents.map(
                        agent => (
                                <div className="col-md-3">
                                    <Agent details = {agent} Match = {this.props.match}/>
                                </div>
                        )
                    ) }
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    agents: state.agents
} )

// const mapDispatchToProps = state => {

// }
export default connect( mapStateToProps, { getAgents } )( Agents );