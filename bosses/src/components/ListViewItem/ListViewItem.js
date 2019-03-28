import React from 'react';
// import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListViewItem = ({boss}) => {
     return (
        <div className="list-view-item">
            <div className="card-header">
                <h3><Link to={`/bosses/${ boss.id }`}>{ boss.name }</Link></h3>
            </div>
            <div className="card-body">
                <div className="card-image">
                    <img src={boss.img} width="250" height="250" />
                </div>
                <div className="card-text">
                    <p>{boss.description}</p>
                </div>
            </div>
        </div>
     );
};

export default ListViewItem;