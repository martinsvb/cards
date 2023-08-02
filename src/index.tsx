import ReactDOM from "react-dom/client";
import Cards from "./Cards";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Cards />);

reportWebVitals();
