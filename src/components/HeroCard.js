import { Card, CardBody, Stack, Tag, Image, Text } from "@chakra-ui/react";

export default function HeroCard(props) {
  return (
    <Card
      bgImage={props.bgImage}
      bgSize={props.bgSize}
      bgPosition={props.bgPosition}
      bgRepeat={props.bgRepeat}
      w={props.w}
      h={props.h}
      variant="solid"
      direction="row"
      alignItems="flex-end"
    >
      <CardBody>
        <Stack
          maxW={props.contentWidth}
          p={{ base: "0", sm: "1.5rem" }}
          alignItems="flex-start"
        >
          <Tag
            color="white"
            borderColor="white"
            variant="outline"
            display={props.tag ? "flex" : "none"}
            alignItems="flex-start"
          >
            {props.tag}
          </Tag>
          <Image
            src={props.logoSrc}
            h={props.logoH}
            p="1rem 0"
            display={props.logoSrc ? "flex" : "none"}
          />
          <Text
            color="white"
            fontSize={props.descriptionFontSize || { base: "xl", sm: "2xl" }}
            display={props.description ? "flex" : "none"}
          >
            {props.description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
