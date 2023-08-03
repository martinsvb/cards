import ReactDOM from "react-dom/client";
import Cards from "./Cards";
import reportWebVitals from "./reportWebVitals";
import { store } from "./rtk/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Cards />
  </Provider>
);

reportWebVitals();
