import {
  Input,
  HStack,
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
  Heading,
  Divider,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";


export default function NavBar() {
  return (
    <Box >
      <Flex>
        <Box >
          <Heading size="xl">Troptix</Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          {/* <Button size="lg">Create Event </Button> */}

          <Button size="lg">Log In</Button>

          <Button size="lg">Sign Up</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
