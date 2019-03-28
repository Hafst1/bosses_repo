import React from 'react';
// import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListViewItem = ({boss}) => {
     return (
        <div>
            <p>{boss.name}</p>
            <p>{boss.description}</p>
            <img src={boss.img} />
        </div>
     );
};

export default ListViewItem;