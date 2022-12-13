import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";

import EventGrid from "../components/EventGrid";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TropTix</title>
        <meta name="description" content="TropTix ticketing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="h-80 bg-blue-600 ">
          <NavBar />
          <Center p="50px 0px 0px 0px">
            <Heading>Find your next Event ?</Heading>
          </Center>

          <Center>
            <Box py="10px" w="80%">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input size="lg" placeholder="Search for Events" />
              </InputGroup>
            </Box>
          </Center>
        </div>

        {/* <SplashSection/> */}
        <main className="">
          <EventGrid />
          {/* <SimpleGrid columns={2} spacing={10}>
          
        </SimpleGrid> */}
        </main>
      </body>
    </>
  );
};

export default Home;
