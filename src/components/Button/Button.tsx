import React from 'react';

/*
  we need to support all buttons design (Carbon, Material) 
*/

export interface ButtonProps {
  label: string;
  onClick: () => void;
};

class Button extends React.Component<ButtonProps> {

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>
  }
}

export default Button;
