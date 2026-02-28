import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[ErrorBoundary] Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal-900 flex items-center justify-center px-6">
          <div className="max-w-lg w-full text-center">
            <div className="bg-white border-2 border-charcoal-800 shadow-offset p-10">
              <h1 className="font-display font-bold uppercase text-3xl text-charcoal-900 mb-4">
                Something Went <span className="text-yellow-500">Wrong</span>
              </h1>
              <p className="text-stone-500 mb-8 leading-relaxed">
                An unexpected error occurred. Please try refreshing the page or return to the home page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-charcoal-900 text-white font-semibold uppercase text-sm border-2 border-charcoal-900 hover:bg-charcoal-800 transition-colors"
                >
                  Refresh Page
                </button>
                <a
                  href="/"
                  className="px-6 py-3 bg-yellow-400 text-charcoal-900 font-semibold uppercase text-sm border-2 border-charcoal-900 hover:bg-yellow-500 transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
