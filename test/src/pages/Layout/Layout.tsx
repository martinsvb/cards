import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import PhotoFetcher from "../../features/PhotoFetcher/PhotoFetcher";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <PhotoFetcher />
      </Container>
    </>
  );
};

export default Layout;
