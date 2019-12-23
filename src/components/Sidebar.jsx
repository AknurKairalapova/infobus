import React from 'react';
import { routes } from '../data';
import RoutesListItem from './RoutesListItem';

const Sidebar = props => {
  const handleRouteClick = (item) => {
    props.handleRouteSelect(item);
  };

  const routesListItems = routes.map((item, index) => {
    return (
      <RoutesListItem 
        key={index}
        index={index}
        item={item}
        selectedRoutes={props.selectedRoutes}
        handleRouteClick={handleRouteClick}
      />
    );
  });

  return (
    <div className="sidebar">
      <ul>{routesListItems}</ul>
    </div>
  );
};

export default Sidebar;
