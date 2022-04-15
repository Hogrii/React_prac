import React from 'react';

interface SquareProps {
  value: number;
}

export class Square extends React.Component<SquareProps, {}> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.props.value}
      </button>
    );
  }
}
