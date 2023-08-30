import { NavLink } from "react-router-dom";

import {
  Flex,
  Spacer,
  Text,
  Center,
  Button,
  ButtonGroup,
  Image,
  useToast,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BiHomeAlt2, BiPlanet, BiTrip, BiMenu } from "react-icons/bi";

export default function Nav(props) {
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
    <Center
      w="calc(100vw - (100vw-100%))"
      h="4.5rem"
      alignItems="center"
      p="0 1.5rem"
      position="static"
      pos="relative"
    >
      <Flex alignItems="center" w="80rem" gap="1rem">
        <NavLink to="/">
          <Image
            src={props.logo}
            alt={props.logoAltText}
            h={{
              base: "1.5rem",
              sm: "2rem",
            }}
            style={{
              transitionTimingFunction: "ease-in",
              transitionDuration: "0.1s",
            }}
            _hover={{
              transform: "translateY(-2px)",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
          />
        </NavLink>
        <Spacer />

        <Menu autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Menu Button"
            icon={<BiMenu />}
            display={{
              base: "flex",
              md: "none",
            }}
            fontSize="4xl"
            bg="none"
            variant="unstyled"
            isActive="false"
          />
          <MenuList>
            <NavLink to="/">
              <MenuItem icon={<BiHomeAlt2 />}>Home</MenuItem>
            </NavLink>
            <NavLink to="/visit">
              <MenuItem icon={<BiTrip />}>Visit</MenuItem>
            </NavLink>
            <NavLink to="/ride">
              <MenuItem icon={<BiPlanet />}>Ride</MenuItem>
            </NavLink>
            <MenuDivider />

            <MenuItem pl="2.5rem" onClick={showToast}>
              Log In
            </MenuItem>
            <MenuItem pl="2.5rem" onClick={showToast}>
              Register
            </MenuItem>
          </MenuList>
        </Menu>

        <Flex
          h="2.5rem"
          gap="0.5rem"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <ButtonGroup spacing="0.5rem">
            <NavLink to="/visit">
              <Button variant="primary" leftIcon={<BiTrip />}>
                Visit
              </Button>
            </NavLink>
            <NavLink to="/ride">
              <Button variant="primary" leftIcon={<BiPlanet />}>
                Ride
              </Button>
            </NavLink>
          </ButtonGroup>
          <ButtonGroup
            spacing="0.5rem"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <Divider
              opacity="1"
              orientation="vertical"
              color="mediumGray"
              border="1px solid"
              m="0 0.5rem"
            />
            <Button variant="secondary" onClick={showToast}>
              Log in
            </Button>
            <Button variant="tertiary" onClick={showToast}>
              Sign up
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Center>
  );
}
