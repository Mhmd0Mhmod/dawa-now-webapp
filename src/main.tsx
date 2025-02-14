import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error.tsx";
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => {
        window.location.reload();
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
