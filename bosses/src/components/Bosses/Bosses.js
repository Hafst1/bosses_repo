import React from 'react';
import { connect } from 'react-redux';

class Bosses extends React.Component {
    render() {
        return(
            <div className="bosses-container">
                <div className="bosses-list">
                    <p>List of Bosses..</p>
                </div>
                <div className="bosses-input">
                    <p>Input</p>
                </div>
            </div>
        );
    };
};

const mapStateToProps = reduxStoreState => {
    return {

    };
};

export default connect(mapStateToProps)(Bosses);