import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void,
}

class Button extends React.Component<ButtonProps> {

  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>
  }
}

export default Button;
