import { motion } from "framer-motion";

import {
  Flex,
  Spacer,
  Text,
  Center,
  Button,
  SimpleGrid,
  Stack,
  Card,
  CardBody,
  Heading,
  useToast,
} from "@chakra-ui/react";
import WayfinderCard from "./components/WayfinderCard";
import heroplanet from "./img/heroplanet.jpg";
import aliensky from "./img/aliensky.jpg";
import mars from "./img/mars.png";
import proxima from "./img/proxima.png";
import kepler from "./img/kepler.png";
import spaceship from "./img/spaceship.jpg";
import HeroCard from "./components/HeroCard";

export default function InfoContent() {
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
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Center w="calc(100vw - (100vw-100%))" p="0 1.5rem" m="1.5rem 0">
        <Stack w="80rem" gap="1.5rem">
          <HeroCard
            bgImage={heroplanet}
            bgSize="cover"
            bgPosition={{
              base: "center",
              sm: "center",
              lg: "center -20rem",
            }}
            bgRepeat="no-repeat"
            w="100%"
            h={{ base: "24rem", sm: "40rem" }}
            contentWidth="36rem"
            tag="Welcome to Shuddle"
            descriptionFontSize={{ base: "4xl", sm: "6xl" }}
            description="Explore the Beyond of tomorrow today."
          />

          <WayfinderCard
            direction="row"
            columns={{ base: "1", md: "2" }}
            w="100%"
            imgSrc={aliensky}
            imgAltText="Alien Planet Vista"
            cardBodyPadding={{ base: "1.5rem", md: "3rem" }}
            cardBodyTitle="Interplanetary Travel"
            cardBodyContent="With our advancements in Stargate and wormhole traversal technology,
          Shuddle has since become the premier provider of spacecraft travel
          and space mission execution planning."
            buttonContent="About Shuddle"
            buttonOnClick={showToast}
          />

          <Flex alignItems="center" flexWrap="wrap" gap="1.5rem">
            <Heading
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontFamily="mono"
              fontWeight="bold"
            >
              Premier Destinations
            </Heading>
            <Spacer display={{ base: "none", sm: "flex" }} />
            <Button variant="primary" onClick={showToast}>
              See All Destinations
            </Button>
          </Flex>

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
              imgAlt="Proxima Centauri b"
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
              imgAlt="Kepler-186f"
              tagContent="Frontier Exploration"
              cardBodyTitle="Kepler-186f"
              cardBodyContent="Growing interest and funding for this promising exoplanet."
              onClick={showToast}
            />
          </SimpleGrid>

          <WayfinderCard
            direction="row"
            columns={{ base: "1", md: "2" }}
            w="100%"
            imgSrc={spaceship}
            imgAlt="Alien Planet Vista"
            cardBodyPadding={{ base: "1.5rem", md: "3rem" }}
            cardBodyTitle="Technology & Innovation"
            cardBodyContent="Discover the groundbreaking technologies that Shuddle uses to make interplanetary travel possible, such as Ion Propulsion, Autonomous Spacecraft, and the Stargate system."
            buttonContent="Shuddle Technologies"
            buttonOnClick={showToast}
          />

          <SimpleGrid
            w="100%"
            spacing="1.5rem"
            columns={{ base: 1, sm: 2, lg: 4 }}
          >
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardBodyTitleSize="2xl"
              cardBodyTitle="Glossary"
              cardBodyContent="Understand key terms and concepts related to interplanetary travel."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardBodyTitleSize="2xl"
              cardBodyTitle="Timeline"
              cardBodyContent="Explore a timeline of major milestones in interplanetary exploration."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardBodyTitleSize="2xl"
              cardBodyTitle="Media Gallery"
              cardBodyContent="View stunning image and video content captured throughout the galaxy."
              onClick={showToast}
            />
            <WayfinderCard
              variant="button"
              direction="row"
              minH={{ base: "10rem", sm: "12.5rem", md: "15rem" }}
              cardBodyTitleSize="2xl"
              cardBodyTitle="Browse All Topics"
              cardBodyContent="Access a curated list of articles, websites, and books for deeper exploration."
              onClick={showToast}
            />
          </SimpleGrid>

          <Card bgColor="naplesYellow" w="100%" minH="18rem" variant="solid">
            <Center>
              <CardBody
                maxW="60rem"
                alignItems="center"
                p={{ base: "0", sm: "1.5rem" }}
              >
                <Stack
                  p="1.5rem"
                  spacing="1rem"
                  alignItems="center"
                  textAlign="center"
                >
                  <Heading
                    color="midnight"
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    fontFamily="mono"
                  >
                    Journey Beyond The Stars
                  </Heading>
                  <Text color="midnight" fontSize={{ base: "md", sm: "lg" }}>
                    Whether you're an aspiring explorer, trader, defense
                    specialist, or scientist, Shuddle is your go-to destination
                    for accurate and up-to-date information about interplanetary
                    space travel. Register with us to receive news, apply for
                    travel permissions, and prepare successfully to embark on an
                    incredible journey to the stars within our cosmos.
                  </Text>
                  <Button variant="tertiary" onClick={showToast}>
                    Register With Shuddle
                  </Button>
                </Stack>
              </CardBody>
            </Center>
          </Card>
        </Stack>
      </Center>
    </motion.main>
  );
}
