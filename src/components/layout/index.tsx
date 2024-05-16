import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(Props: LayoutProps) {
  const { children } = Props;
  return (
    <Grid className="grid" templateColumns="1fr" templateRows="65px auto 115px">
      <GridItem className="header" colSpan={1} rowSpan={1}>
        <Header />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        {children}
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Layout;
