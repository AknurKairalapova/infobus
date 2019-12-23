import React from 'react';
import { routes } from '../data';

const Sidebar = props => {
  const handleRouteClick = (item) => {
    props.handleRouteSelect(item);
  };

  const routesListItems = routes.map((item, index) => {
    const name = item.number + ' - "' + item.name + '"';
    return (
      <li key={index} onClick={() => handleRouteClick(item)}>
        {name}
      </li>
    );
  });

  return (
    <div className="sidebar">
      <ul>{routesListItems}</ul>
    </div>
  );
};

export default Sidebar;
