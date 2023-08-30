import {
  Text,
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  forwardRef,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";

const WayfinderCard = forwardRef((props, ref) => (
  <Card
    variant={props.variant}
    direction={props.direction}
    minH={props.minH}
    maxH={props.maxH}
    w={props.w}
    h={props.h}
    onClick={props.onClick}
  >
    <SimpleGrid columns={props.columns} w="100%" alignItems="flex-end">
      <Image
        display={props.imgsrc ? "visible" : "none"}
        h="100%"
        w="100%"
        objectFit="cover"
        objectPosition="center"
        borderRadius="0.5rem"
        src={props.imgsrc}
        alt={props.imgalt}
      />
      <CardBody p={props.cardbodypadding}>
        <Stack spacing="1rem" alignItems="flex-start">
          <Tag
            display={props.tagcontent ? "visible" : "none"}
            variant={props.tagvariant}
          >
            {props.tagcontent}
          </Tag>
          <Heading
            fontSize={
              props.cardbodytitlesize || { base: "xl", sm: "2xl", md: "3xl" }
            }
            display={props.cardbodytitle ? "visible" : "none"}
          >
            {props.cardbodytitle}
          </Heading>
          <Text
            fontSize={props.cardbodycontentsize || { base: "md", sm: "lg" }}
            display={props.cardbodycontent ? "visible" : "none"}
          >
            {props.cardbodycontent}
          </Text>
          <Button
            display={props.buttoncontent ? "visible" : "none"}
            variant={props.buttonvariant}
            onClick={props.buttononClick}
          >
            {props.buttoncontent}
          </Button>
        </Stack>
      </CardBody>
    </SimpleGrid>
  </Card>
));

export default WayfinderCard;
