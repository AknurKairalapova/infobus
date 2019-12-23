import React, { Component } from 'react';
import classNames from 'classnames';

class RoutesListItem extends Component {
  constructor(props) {
    super(props);

    this.setState({
      isSelected: false
    });

    this.handleRouteClick = this.handleRouteClick.bind(this);
  }

  componentDidMount() {
    
  }

  handleRouteClick(item){
    this.props.handleRouteClick(item);
  }

  render() {
    const { index, item, selectedRoutes } = this.props;
    const name = item.number + ' - "' + item.name + '"';
    const itemClassName = classNames({
      'selected': selectedRoutes.filter((r) => {return r.id === item.id}).length > 0
    });

    return (
      <li key={index} className={itemClassName} onClick={() => this.handleRouteClick(item)}>
        {name}
      </li>
    );
  }
}

export default RoutesListItem;