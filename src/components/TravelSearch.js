import { useState } from "react";
import {
  Button,
  Card,
  Box,
  Select,
  FormLabel,
  Flex,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const Props = () => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
};

export default function TravelSearch(props) {
  return (
    <>
      <Card>
        <Box
          p="1.5rem"
          bg="apricot"
          display={props.hasSystemSearch ? "visible" : "none"}
        >
          <FormLabel mb="0" htmlFor="solarsystem">
            Solar System
          </FormLabel>
          <Select
            fontSize={{ base: "xl", sm: "3xl" }}
            maxW="28rem"
            h="3rem"
            id="solarsystem"
            defaultValue="option1"
          >
            <option value="" hidden>
              Select Solar System
            </option>
            <option value="option1" style={{ fontSize: "1rem" }}>
              Earth Solar System
            </option>
            <option value="option2" style={{ fontSize: "1rem" }}>
              Proxima Centauri System
            </option>
            <option value="option2" style={{ fontSize: "1rem" }}>
              Kepler-186 System
            </option>
          </Select>
        </Box>
        <Box p="1.5rem">
          <Flex gap="1rem" alignItems="flex-end" flexWrap="wrap">
            <Box maxW="10rem">
              <FormLabel mb="0" htmlFor="referenceframe">
                Reference Frame
              </FormLabel>
              <Select id="referenceframe" defaultValue="option1">
                <option value="" hidden>
                  Choose Frame
                </option>
                <option value="option1">Earth Time</option>
                <option value="option2">Destination</option>
              </Select>
            </Box>
            <Box maxW="15rem">
              <FormLabel mb="0" htmlFor="departure">
                Departing From
              </FormLabel>
              <Input
                id="departure"
                placeholder="Choose location"
                type="text"
                defaultValue={props.defaultDeparture}
                value={Props.value}
                onChange={Props.handleChange}
              />
            </Box>
            <Box maxW="15rem">
              <FormLabel mb="0" htmlFor="arrival">
                Arriving To
              </FormLabel>
              <Input
                id="arrival"
                placeholder="Choose location"
                type="text"
                defaultValue={props.defaultArrival}
                value={Props.value}
                onChange={Props.handleChange}
              />
            </Box>
            <Box maxW="10rem">
              <FormLabel mb="0" htmlFor="departurewindow">
                Departure Window
              </FormLabel>
              <Input
                id="departurewindow"
                placeholder="Choose date"
                type="text"
                defaultValue={props.defaultDepartureWindow}
                value={Props.value}
                onChange={Props.handleChange}
              />
            </Box>
            <Box maxW="12.5rem">
              <FormLabel mb="0" htmlFor="persons">
                Persons
              </FormLabel>
              <Select defaultValue="option1" id="persons">
                <option value="" hidden>
                  Choose Persons
                </option>
                <option value="option1">1 Adult / No Cargo</option>
                <option value="option2">1 Adult / Cargo Req.</option>

                <option value="option3">2 Adults / No Cargo</option>
                <option value="option4">2 Adults / Cargo Req.</option>
              </Select>
            </Box>
            <Spacer display={{ base: "none", sm: "flex" }} />
            <Button variant="tertiary" onClick={props.onClick}>
              Search Trips
            </Button>
          </Flex>
        </Box>
      </Card>
      <Flex flexWrap="wrap" gap="1rem">
        <Flex spacing="1rem" flexWrap="wrap" gap="1rem">
          <Button
            variant="secondary"
            rightIcon={<BiChevronDown />}
            onClick={props.onClick}
          >
            Stops
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BiChevronDown />}
            onClick={props.onClick}
          >
            Operations
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BiChevronDown />}
            onClick={props.onClick}
          >
            Spacecraft
          </Button>
          <Button
            variant="secondary"
            rightIcon={<BiChevronDown />}
            onClick={props.onClick}
          >
            More Options
          </Button>
        </Flex>
        <Spacer display={{ base: "none", md: "flex" }} />
        <Button
          variant="secondary"
          rightIcon={<BiChevronDown />}
          onClick={props.onClick}
        >
          Sort: Recommended
        </Button>
      </Flex>
    </>
  );
}
