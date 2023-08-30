import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Nav from "./components/Nav";
import InfoContent from "./InfoContent";
import VisitContent from "./VisitContent";
import RideContent from "./RideContent";
import Footer from "./components/Footer";
import Wayfinder from "./components/WayfinderTheme";

import logo from "./img/shuddle.logo.midnight.svg";
import wordmark from "./img/shuddle.logoWordmark.svg";
import kl from "./img/kl.svg";

function App() {
  return (
    <ChakraProvider theme={Wayfinder}>
      <Flex direction="column" minH="100vh">
        <Nav logo={logo} logoAltText="Shuddle Logo" />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<InfoContent />} />
            <Route path="/visit" element={<VisitContent />} />
            <Route path="/ride" element={<RideContent />} />
          </Routes>
        </AnimatePresence>

        <Footer
          logo={wordmark}
          logoAltText="Shuddle Wordmark"
          signature={kl}
          signatureAltText="KL"
          signatureHref="https://kevliu.me"
        />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
