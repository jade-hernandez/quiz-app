import { Component } from "react";
import type { ReactNode } from "react";

type ErrorBoundaryProps = {
  readonly resetKey: string;
  readonly fallback: () => ReactNode;
  readonly children: ReactNode;
};

type ErrorBoundaryState = {
  readonly failed: boolean;
  readonly resetKey: string;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { failed: false, resetKey: this.props.resetKey };

  static getDerivedStateFromProps(
    props: ErrorBoundaryProps,
    state: ErrorBoundaryState,
  ): ErrorBoundaryState | null {
    return props.resetKey === state.resetKey
      ? null
      : { failed: false, resetKey: props.resetKey };
  }

  static getDerivedStateFromError(): Pick<ErrorBoundaryState, "failed"> {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback() : this.props.children;
  }
}
