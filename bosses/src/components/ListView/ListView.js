import React from 'react';
import { connect } from 'react-redux';
import ListViewItem from '../ListViewItem/ListViewItem';

const ListView = ({bosses}) => {
    return (
        <div>
            {bosses.map((boss, i) => <ListViewItem key={i} boss={ boss } />)}
        </div>
     );
};

const mapStateToProps = ({ bosses }) => {
    return {
        bosses
    };
};

export default connect(mapStateToProps)(ListView);