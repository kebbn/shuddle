import { Flex, Text, Stack, Card, Tag, Divider } from "@chakra-ui/react";

export default function AlertCard(props) {
  return (
    <Card
      shadow="none"
      p={{ base: "0rem", sm: "1rem" }}
      borderColor={{ base: "transparent", sm: "mediumGray" }}
    >
      <Flex
        gap="1rem"
        columns={2}
        flexWrap="wrap"
        direction={{ base: "column", sm: "row" }}
      >
        <Flex w={{ base: "100%", sm: "6rem" }}>
          <Text fontFamily="mono" fontSize="xl" w="100%">
            {props.title}
          </Text>
        </Flex>
        <Flex gap="1rem">
          <Divider
            orientation="vertical"
            opacity="1"
            borderColor="mediumGray"
            display={{ base: "none", sm: "flex" }}
          />
          <Stack>
            <Flex
              gap="0.5rem"
              display={props.entry1 ? "flex" : "none"}
              flexWrap="wrap"
            >
              <Text fontFamily="mono" fontWeight="bold" color="amethyst">
                {props.entry1}
              </Text>
              <Tag variant={props.entry1tagvariant}>{props.entry1tag}</Tag>
            </Flex>
            <Flex
              gap="0.5rem"
              display={props.entry2 ? "flex" : "none"}
              flexWrap="wrap"
            >
              <Text fontFamily="mono" fontWeight="bold" color="amethyst">
                {props.entry2}
              </Text>
              <Tag variant={props.entry2tagvariant}>{props.entry2tag}</Tag>
            </Flex>
            <Flex
              gap="0.5rem"
              display={props.entry3 ? "flex" : "none"}
              flexWrap="wrap"
            >
              <Text fontFamily="mono" fontWeight="bold" color="amethyst">
                {props.entry3}
              </Text>
              <Tag variant={props.entry3tagvariant}>{props.entry3tag}</Tag>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Card>
  );
}
