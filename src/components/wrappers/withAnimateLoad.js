import React, { Component } from 'react'

const withAnimateLoad = (WrappedComponent, preAnimate, posAnimate, toggleFlex) => {
    return class extends Component {
      state = { didMount: false };
      componentDidMount() {
        setTimeout(() => {
          this.setState({ didMount: true });
        }, 0);
      }
      render() {
        const { didMount } = this.state;
        return (
          <div
            className={`${toggleFlex && "homeStyle"} ${preAnimate} ${didMount &&
              posAnimate}`}
          >
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    };
  };

  export default withAnimateLoad;