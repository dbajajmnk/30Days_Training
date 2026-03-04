import React from "react";

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err: any) {
    console.error("UI crash:", err);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 16 }}>Something went wrong in UI. (ErrorBoundary)</div>;
    }
    return this.props.children;
  }
}
