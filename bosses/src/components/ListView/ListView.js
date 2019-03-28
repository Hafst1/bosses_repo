import React from 'react';
import ListViewItem from '../ListViewItem/ListViewItem';
import { connect } from 'react-redux';

const ListView = ({bosses}) => {
    return (
        <div>{bosses.map((boss, i) => <ListViewItem key={i} boss={ boss } />)}</div>
     );
};

const mapStateToProps = ({ bosses }) => {
    return {
        bosses
    };
};

export default connect(mapStateToProps)(ListView);