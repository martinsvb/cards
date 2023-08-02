import ReactDOM from "react-dom/client";
import Discounter from "./Discounter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Discounter />);

reportWebVitals();
