import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "./config/design/muiTheme";
import Layout from "./pages/Layout/Layout";

const Cards = () => {
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <ThemeProvider theme={getTheme(isLightMode)}>
      <Layout />
    </ThemeProvider>
  );
};

export default Cards;
