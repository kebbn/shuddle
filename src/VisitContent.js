import { motion } from "framer-motion";

import {
  Flex,
  Spacer,
  Text,
  Center,
  SimpleGrid,
  Stack,
  useToast,
} from "@chakra-ui/react";

import WayfinderCard from "./components/WayfinderCard";
import TravelSearch from "./components/TravelSearch";
import { TravelCard } from "./components/TravelCard";
import stargate from "./img/stargate.jpg";
import visit from "./img/shuddle.logoVisit.svg";
import mars from "./img/mars.png";
import proxima from "./img/proxima.png";
import kepler from "./img/kepler.png";
import HeroCard from "./components/HeroCard";

export default function VisitContent() {
  const toast = useToast();
  const showToast = () => {
    toast({
      position: "bottom",
      duration: 1500,
      render: () => (
        <Center
          p="1rem 0.5rem"
          borderRadius="0.5rem"
          shadow="2xl"
          bg="white"
          borderColor="mediumGray"
          fontFamily="mono"
          fontSize="sm"
          fontWeight="light"
        >
          *the button does nothing* 🤔
        </Center>
      ),
    });
  };
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, -0.05, 0.01, 0.99] }}
    >
      <Center w="calc(100vw - (100vw-100%))" p="0 1.5rem" m="1.5rem 0">
        <Stack w="80rem" gap="1.5rem">
          <HeroCard
            bgImage={stargate}
            bgSize="cover"
            bgPosition={{
              base: "top",
            }}
            bgRepeat="no-repeat"
            w="100%"
            h="24rem"
            contentWidth="28rem"
            tag="Interstellar Travel"
            logoSrc={visit}
            logoH={{ base: "5rem", sm: "6.5rem" }}
            description="Venture beyond the boundaries of Earth’s Solar System and
            explore our Milky Way galaxy"
          />

          <TravelSearch
            hasSystemSearch={false}
            defaultDeparture="Earth USCA003 - Vandenberg Space Force Base"
            defaultArrival="Proxima Centauri b - Alpha Station"
            defaultDepartureWindow="Jan 01 2123"
            onClick={showToast}
          />

          <Flex alignItems="center" w="100%" flexWrap="wrap" gap="1rem">
            <Text fontSize={{ base: "md", sm: "lg" }} fontFamily="mono">
              Earth USCA003 Vandenberg to Proxima Centauri b Alpha Station
            </Text>
            <Spacer display={{ base: "none", md: "flex" }} />
            <Text fontSize={{ base: "md", sm: "lg" }} fontFamily="mono">
              Showing 5 results
            </Text>
          </Flex>

          <Stack spacing="1.5rem">
            <TravelCard
              travelColor="white"
              travelBg="midnight"
              travelBorderRadius="0.5rem"
              buttonOnClick={showToast}
              divider2={false}
              divider3={false}
              duration="2d3h21m"
              stops="Nonstop"
              departLocation="Earth USCA003"
              arriveLocation="Proxima B Alpha"
              departTime="Jan 01 2123 16:15"
              arriveTime="32.58 107AD"
              tagVariant="warning"
              tagContent="In 1 Day"
              showGraphControls={false}
              infoPriceRange="$15k - $22k"
              infoMissionNumber="Pb0382"
              infoBoardingStart="Dec 13 2123"
              infoDepartureDate="Jan 01 2123"
              infoOperatedBy="Shuddle"
              infoBoardingShip="USSF X-71"
              infoInterstellarShip="Kestrel"
              infoDisembarkingShip="USSF C-33Pb"
            />
            <TravelCard
              travelColor="white"
              travelBg="midnight"
              travelBorderRadius="0.5rem"
              buttonOnClick={showToast}
              divider2={false}
              divider3={false}
              duration="2d3h21m"
              stops="Nonstop"
              departLocation="Earth USCA003"
              arriveLocation="Proxima B Alpha"
              departTime="Jan 31 2123 16:15"
              arriveTime="32.63 107AD"
              tagVariant="neutral"
              tagContent="In 32 Days"
              showGraphControls={false}
              infoPriceRange="$15k - $22k"
              infoMissionNumber="Pb0382"
              infoBoardingStart="Jan 15 2123"
              infoDepartureDate="Jan 31 2123"
              infoOperatedBy="Shuddle"
              infoBoardingShip="USSF X-71"
              infoInterstellarShip="Kestrel"
              infoDisembarkingShip="USSF C-33Pb"
            />
            <TravelCard
              travelColor="white"
              travelBg="midnight"
              travelBorderRadius="0.5rem"
              buttonOnClick={showToast}
              divider2={false}
              divider3={false}
              duration="2d8h00m"
              stops="Nonstop"
              departLocation="Earth USCA003"
              arriveLocation="Proxima B Alpha"
              departTime="Jan 15 2123 16:15"
              arriveTime="32.60 107AD"
              tagVariant="neutral"
              tagContent="In 16 Days"
              showGraphControls={false}
              infoPriceRange="$18k - $28k"
              infoMissionNumber="GX181"
              infoBoardingStart="Jan 01 2123"
              infoDepartureDate="Jan 15 2123"
              infoOperatedBy="Galaxy"
              infoBoardingShip=""
              infoInterstellarShip="Federation 3"
              infoDisembarkingShip=""
            />
            <TravelCard
              travelColor="white"
              travelBg="midnight"
              travelBorderRadius="0.5rem"
              buttonOnClick={showToast}
              divider2={true}
              divider3={false}
              duration="3d0h15m + 3d2h"
              stops="1 Stop"
              departLocation="Earth USCA003"
              arriveLocation="Proxima B Alpha"
              departTime="Jan 05 2123 06:20"
              arriveTime="32.60 107AD"
              tagVariant="neutral"
              tagContent="In 6 Days"
              showGraphControls={false}
              infoPriceRange="$12k - $20k"
              infoMissionNumber="US105"
              infoBoardingStart="Dec 05 2123"
              infoDepartureDate="Jan 05 2123"
              infoOperatedBy="USSF"
              infoBoardingShip="USSF J-3"
              infoInterstellarShip="U1 Frigate"
              infoDisembarkingShip="USSF J-3"
            />
            <TravelCard
              travelColor="white"
              travelBg="midnight"
              travelBorderRadius="0.5rem"
              buttonOnClick={showToast}
              divider2={true}
              divider3={true}
              duration="3d0h15m + 5d2h"
              stops="2 Stops"
              departLocation="Earth USCA003"
              arriveLocation="Proxima B Alpha"
              departTime="Jan 03 2123 21:00"
              arriveTime="32.61 107AD"
              tagVariant="neutral"
              tagContent="In 4 Days"
              showGraphControls={false}
              infoPriceRange="$12k - $20k"
              infoMissionNumber="GX089"
              infoBoardingStart="Dec 15 2123"
              infoDepartureDate="Jan 03 2123"
              infoOperatedBy="Galaxy"
              infoBoardingShip=""
              infoInterstellarShip="Federation 2"
              infoDisembarkingShip=""
            />
          </Stack>

          <SimpleGrid w="100%" minChildWidth="16rem" spacing="1.5rem">
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgSrc={mars}
              imgAltText="Mars"
              tagContent="Trending Planet"
              cardBodyTitle="Mars"
              cardBodyContent="Discover our closest neighbor and the home of interplanetary exploration."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgSrc={proxima}
              imgAltText="Proxima Centauri b"
              tagContent="Spacegate Destination"
              cardBodyTitle="Proxima Centauri b"
              cardBodyContent="Our closest exoplanet located in Alpha Centauri."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="column"
              minH={{ base: "15rem", sm: "20rem", md: "30rem" }}
              w="100%"
              imgSrc={kepler}
              imgAltText="Kepler-186f"
              tagContent="Frontier Exploration"
              cardBodyTitle="Kepler-186f"
              cardBodyContent="Growing interest and funding for this promising exoplanet."
              onClick={showToast}
            />
          </SimpleGrid>
        </Stack>
      </Center>
    </motion.main>
  );
}
