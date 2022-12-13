import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text
} from "@chakra-ui/react";

interface Event{
  nameOfEvent: string,
  description: string,
  date: string,
  image: string,
  price: number
}



export default function EventCard({nameOfEvent, description, date, image,price} : Event) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nameOfEvent}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
          <Text>{date}</Text>
          <Text>Location</Text>
        </Stack>
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
}
