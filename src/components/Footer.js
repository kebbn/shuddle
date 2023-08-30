import {
  Flex,
  Spacer,
  Text,
  Center,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <Center
      w="calc(100vw - (100vw-100%))"
      alignItems="top"
      p="0 1.5rem"
      bg="black"
      minH="28rem"
    >
      <Stack gap="1.5rem" w="80rem" mt="3.5rem">
        <Flex alignItems="top" w="100%" flexWrap="wrap" gap="2rem">
          <Image src={props.logo} alt={props.logoAltText} h="2rem"></Image>
          <Spacer flex="1 2" />
          <Flex gap="1.5rem" flexWrap="wrap" minW="50%">
            <Stack
              color="white"
              direction="column"
              gap="0.5rem"
              flex="2 1"
              minW="10rem"
            >
              <Text fontWeight={700}>About</Text>
              <Text>Foundation</Text>
              <Text>Governance</Text>
              <Text>Leadership</Text>
              <Text>Investors</Text>
              <Text>Ethics & Compliance</Text>
              <Text>Events</Text>
              <Text>Contact Us</Text>
            </Stack>
            <Stack
              color="white"
              direction="column"
              gap="0.5rem"
              flex="2 1"
              minW="10rem"
            >
              <Text fontWeight={700}>Account</Text>
              <Text>Registration</Text>
              <Text>Manage Shuddle ID</Text>
              <Spacer minH="1.5rem" />
              <Text fontWeight={700}>System Status</Text>
              <Text>Gate Status</Text>
              <Text>System Map</Text>
              <Text>Spacecraft</Text>
            </Stack>
            <Stack
              color="white"
              direction="column"
              gap="0.5rem"
              flex="2 1"
              minW="10rem"
            >
              <Text fontWeight={700}>Help & Support</Text>
              <Text>Help Center</Text>
              <Text>Frequently Asked Questions</Text>
              <Text>Accessibility</Text>
            </Stack>
          </Flex>
        </Flex>
        <Divider borderBottomWidth="2px" opacity="1" m="1rem 0" w="100%" />
        <Flex
          mb="1.5rem"
          color="white"
          w="100%"
          gap="2rem"
          alignItems="center"
          flexWrap="wrap"
        >
          <Flex gap="1rem" flexWrap="wrap">
            <Text>Privacy Policy</Text>
            <Text>Site Map</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
          <Spacer
            display={{
              base: "none",
              sm: "flex",
            }}
          />
          <Flex>
            <Link to={props.signatureHref} target="_blank">
              <Image
                src={props.signature}
                alt={props.signatureAltText}
                h="1.5rem"
              ></Image>
            </Link>
          </Flex>
        </Flex>
      </Stack>
    </Center>
  );
}
