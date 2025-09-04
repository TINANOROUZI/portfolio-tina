import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props){ super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error){ return { error }; }
  componentDidCatch(error, info){ console.error("🟥 Caught error:", error, info); }

  render(){
    if (this.state.error) {
      return (
        <div style={{
          minHeight:"100vh",
          background:"#0b0f17",
          color:"#e66",
          padding:"2rem",
          fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        }}>
          <h1>Something crashed 💥</h1>
          <pre style={{whiteSpace:"pre-wrap"}}>{String(this.state.error.message || this.state.error)}</pre>
          <p>Open the browser console for the full stack trace.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
