import {
  Text,
  Button,
  Card,
  Stack,
  Tag,
  SimpleGrid,
  Flex,
  Divider,
  Spacer,
  Box,
} from "@chakra-ui/react";

function TravelCard(props) {
  return (
    <Card
      variant="outline"
      bg="transparent"
      direction={{ base: "column", lg: "row" }}
      _hover={{ shadow: "lg" }}
    >
      <TravelGraph flex="0 1" {...props} />
      <TravelBookingInfo {...props} />
    </Card>
  );
}

function TravelGraph(props) {
  return (
    <Flex
      direction="column"
      borderBottom="1px solid"
      borderColor={props.travelBorderColor || "mediumGray"}
      borderRadius={props.travelBorderRadius}
      bg={props.travelBg || "white"}
      alignItems="center"
      justifyContent="center"
      p="1.5rem"
      gap="1.5rem"
      w={props.w}
      minW={props.minW}
      flex=" 1 1"
    >
      <Stack w="100%">
        <Flex flexWrap="wrap" gap="0.5rem">
          <Text fontFamily="mono" color={props.travelColor} fontWeight="bold">
            {props.duration}
          </Text>
          <Spacer />
          <Text
            fontFamily="mono"
            color={props.travelColor}
            display={props.stops ? "flex" : "none"}
          >
            {props.stops}
          </Text>
        </Flex>

        <Flex>
          <Divider
            w="100%"
            borderColor={props.travelColor}
            opacity="1"
            _before={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "0",
              top: "-2px",
            }}
            _after={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "100%",
              top: "-8px",
            }}
          />
          <Divider
            display={props.divider2 || "none"}
            w="100%"
            borderColor={props.travelColor}
            opacity="1"
            _before={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "0",
              top: "-2px",
            }}
            _after={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "100%",
              top: "-8px",
            }}
          />
          <Divider
            display={props.divider3 || "none"}
            w="100%"
            borderColor={props.travelColor}
            opacity="1"
            _before={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "0",
              top: "-2px",
            }}
            _after={{
              w: "2px",
              h: "2px",
              content: "''",
              display: "block",
              position: "relative",
              border: "2px solid",
              borderColor: props.travelColor,
              bgColor: props.travelColor,
              borderRadius: "50%",
              left: "100%",
              top: "-8px",
            }}
          />
        </Flex>

        <Flex flexWrap="wrap" gap="0.5rem">
          <Text
            fontFamily="mono"
            textTransform="uppercase"
            fontSize="sm"
            color={props.travelColor}
            fontWeight="bold"
          >
            {props.departLocation}
          </Text>
          <Spacer />
          <Text
            fontFamily="mono"
            textTransform="uppercase"
            fontSize="sm"
            color={props.travelColor}
            fontWeight="bold"
          >
            {props.arriveLocation}
          </Text>
        </Flex>
        <Flex flexWrap="wrap" gap="0.5rem">
          <Text fontFamily="mono" color={props.travelColor}>
            {props.departTime}
          </Text>
          <Spacer />
          <Text fontFamily="mono" color={props.travelColor}>
            {props.arriveTime}
          </Text>
        </Flex>
      </Stack>
      <Flex
        direction="row"
        w="100%"
        alignItems="center"
        flexWrap="wrap"
        gap="1.5rem"
        display={props.showGraphControls ? "flex" : "none"}
      >
        <Tag
          variant={props.tagvariant}
          display={props.tagcontent ? "flex" : "none"}
        >
          {props.tagcontent}
        </Tag>
        <Spacer />
        <Flex gap="1rem" flexWrap="wrap">
          <Button
            variant="flushed"
            color="amethyst"
            onClick={props.buttononClick}
          >
            View Details
          </Button>
          <Spacer />
          <Button bgColor="apricot" onClick={props.buttononClick}>
            Select Trip
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

function TravelBookingInfo(props) {
  return (
    <Flex
      color="darkGray"
      flex="2 1"
      flexWrap="wrap"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex p="1.5rem" flex="2 1">
        <SimpleGrid columns={{ base: 2, sm: 4 }} spacing="0 1rem">
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Price Range
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoPriceRange || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mission Number
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoMissionNumber || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Boarding Start
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoBoardingStart || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Departure Date
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoDepartureDate || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Operated By
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoOperatedBy || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Boarding Ship
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoBoardingShip || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Interstellar Ship
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoInterstellarShip || "-"}
            </Text>
          </Box>
          <Box p="0.75rem 0">
            <Text
              fontFamily="mono"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Disembarking Ship
            </Text>
            <Text fontFamily="mono" p="0.5rem 0">
              {props.infoDisembarkingShip || "-"}
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex
        direction={{ base: "row", lg: "column" }}
        flex="0 1"
        alignItems="center"
        justifyContent="center"
        bg="marina"
        borderRadius="0.5rem"
        gap="1.5rem"
        p="1.5rem"
        flexWrap="wrap"
      >
        <Tag
          variant={props.tagvariant}
          display={props.tagcontent ? "flex" : "none"}
        >
          {props.tagcontent}
        </Tag>
        <Spacer
          display={{
            base: "none",
            sm: "inline",
          }}
        />
        <Flex gap="1rem" flexWrap="wrap" justifyContent="center">
          <Button
            variant="flushed"
            color="amethyst"
            onClick={props.buttononClick}
          >
            View Details
          </Button>
          <Button bgColor="apricot" onClick={props.buttononClick}>
            Select Trip
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { TravelCard, TravelGraph };
