import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions';

const Counter = ({ counter, dec, inc, rnd }) => {
    return (
        <div>
            <h2 id="counter">{counter}</h2>
            <button onClick={dec} id="dec" className="btn btn-primary btn-lg">DEC</button>
            <button onClick={inc} id="inc" className="btn btn-primary btn-lg">INC</button>
            <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {

    const {inc, dec, rnd } = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random()*10);
            dispatch(rnd(randomValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
