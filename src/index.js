import React from 'react';

export default function fastMount(WrappedComponent, container) {
  return class FastMount extends React.Component {
    state = { renderComponent: false };
    timerId = null;

    componentDidMount() {
      this.timerId = window.setTimeout(() => {
        this.setState({ renderComponent: true });
        this.timerId = null;
      }, 16);
    }

    componentWillUnmount() {
      if (this.timerId !== null) window.clearTimeout(this.timerId);
    }

    render() {
      if (container !== undefined && React.isValidElement(container)) {
        return React.cloneElement(
          container,
          {},
          this.state.renderComponent === true
            ? <WrappedComponent {...this.props} />
            : null,
        );
      }
      return this.state.renderComponent === true
        ? <WrappedComponent {...this.props} />
        : null;
    }
  };
}
