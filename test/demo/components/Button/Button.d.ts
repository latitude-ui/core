import React from 'react';
export interface ButtonProps {
    label: string;
    onClick: () => void;
}
declare class Button extends React.Component<ButtonProps> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default Button;
