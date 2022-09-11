import React from 'react';


export interface ModalProps {
    transition: Object;
    PrimaryAction: () => void;
    SecondaryAction: () => void;
}


export default class Modal extends React.Component<ModalProps> {
  componentDidMount(): void {

  }

  /* eslint-disable */
  componentDidUpdate(prevProps: Readonly<ModalProps>, prevState: Readonly<{}>, snapshot?: any): void {

  }

  componentWillUnmount(): void {

  }

  render(): React.ReactNode {
    // return <div>hello world</div>;

    return null;
  }
}
