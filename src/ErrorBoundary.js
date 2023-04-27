import React from "react";

import Error from "./components/Error";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err) {
    console.error({ err });
  }

  render() {
    if (this.state.hasError === true) {
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
