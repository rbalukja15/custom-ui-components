import * as React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  error: null | string
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error) {
    // Display fallback UI
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>{this.state.error.toString()}</p>
    }
    return React.Children.only(this.props.children)
  }
}
