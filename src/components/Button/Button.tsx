import React from 'react';
// import { css } from '@emotion/react';

/*
  we need to support all buttons design ( Carbon, Material )
*/

export interface ButtonProps {
  label: string;
  onClick: () => void;
};


class Button extends React.Component<ButtonProps> {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <button style={{
      backgroundColor: 'hsl(210deg 10% 10%)',
      color: '#fff',
      padding: '20px',
      fontSize: '16px',
      fontWeight: '500',
    }}
    onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

export default Button;
