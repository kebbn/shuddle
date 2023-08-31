import {
  Text,
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";

export default function WayfinderCard(props) {
  return (
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
          display={props.imgSrc ? "visible" : "none"}
          h="100%"
          w="100%"
          objectFit="cover"
          objectPosition="center"
          borderRadius="0.5rem"
          src={props.imgSrc}
          alt={props.imgAltText}
        />
        <CardBody p={props.cardBodyP}>
          <Stack spacing="1rem" alignItems="flex-start">
            <Tag
              display={props.tagContent ? "visible" : "none"}
              variant={props.tagVariant}
            >
              {props.tagContent}
            </Tag>
            <Heading
              fontSize={
                props.cardBodyTitleSize || { base: "xl", sm: "2xl", md: "3xl" }
              }
              display={props.cardBodyTitle ? "visible" : "none"}
            >
              {props.cardBodyTitle}
            </Heading>
            <Text
              fontSize={props.cardBodyContentSize || { base: "md", sm: "lg" }}
              display={props.cardBodyContent ? "visible" : "none"}
            >
              {props.cardBodyContent}
            </Text>
            <Button
              display={props.buttonContent ? "visible" : "none"}
              variant={props.buttonVariant}
              onClick={props.buttonOnClick}
            >
              {props.buttonContent}
            </Button>
          </Stack>
        </CardBody>
      </SimpleGrid>
    </Card>
  );
}
