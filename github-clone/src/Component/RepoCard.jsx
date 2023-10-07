import React from 'react';
import { Box, Text, Text, Button, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import {  Flex,  Image, useColorModeValue , chakra} from '@chakra-ui/react';

// Import any additional icons you're using
import { AiOutlineTwitter, AiOutlineLink } from 'react-icons/ai';
const RepoCard = () => {


  const repoData = [
    {
      title: '7 Strategies for end-to-end CI/CD governance',
      description: 'Best Practice for developing and maintaining a successful model.',
    },
    // Add more repo data objects as needed
  ];

  const changesData = [
    { date: 'Yesterday', change: 'GitHub Actions: NODE_OPTIONS is now restricted from GITHUB_ENV' },
    { date: 'Yesterday', change: 'Repository Rules – insight enhancements' },
    { date: 'Yesterday', change: 'MaxMind is now a GitHub secret scanning partner' },
    { date: '2 days ago', change: 'Pinterest is now a GitHub secret scanning partner' },
  ];

  const repositoriesData = [
    { name: 'free-programming-books', description: 'Freely available programming books', stars: '300k' },
    { name: 'cpython', description: 'The Python programming language', stars: '56k', language: 'Python' },
    { name: 'supabase', description: 'The open source Firebase alternative. Follow to stay updated about our public Beta.', stars: '57.5k', language: 'TypeScript' },
  ];

  return (
    <Box

      borderWidth="1px"
      borderRadius="lg"
      p={4}
      transition="transform 0.2s"
      pos="fixed"
      top="0"
      right="0"
      h="full"
      w="25%"
      borderRight="1px"
      overflowY="auto"
      boxShadow="md"
      margin="auto"
      marginTop="75px"
      _hover={{ transform: 'scale(1.05)' }}
    >

<Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        Courses and MOOCs
      </chakra.span>
      <chakra.span
        color="brand.800"
        _dark={{
          color: "brand.900",
        }}
        px={3}
        py={1}
        rounded="full"
        textTransform="uppercase"
        fontSize="xs"
      >
        psychology
      </chakra.span>
    </Flex>

    <Box>
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        AP® Psychology - Course 5: Health and Behavior
      </chakra.h1>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi
        similique exercitationem optio libero vitae accusamus cupiditate laborum
        eos.
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <span>Visit on:</span>
        <Link
          mx={2}
          cursor="pointer"
          textDecor="underline"
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          edx.org
        </Link>
        <span>or</span>
        <Link
          mx={2}
          cursor="pointer"
          textDecor="underline"
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
          wordBreak="break-word"
        >
          classcentral.com
        </Link>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          <AiOutlineTwitter />
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          <AiOutlineLink />
        </Link>
      </Flex>
    </Box>
  </Box>
</Flex>;
        <Box className="third-cont" padding="15px">
          <Box className="boxes" border="1px solid #e1e4e8" borderRadius="5px" marginTop="20px" textAlign="left">
            <Text as="h6">7 Strategies for end-to-end CI/CD governance</Text>
            <Text>
              Best Practice for developing and maintaining a successful model.
            </Text>
            <Button width="100%">Watch on Demand</Button>
          </Box>

          {/* Latest Changes */}
          <Box className="boxes" marginTop="20px" textAlign="left">
            <Text as="h3">Latest Changes</Text>
            <hr />
            <Text>
              <Text as="span">16 Hours ago</Text>
              <br />
              Githb Actions :Node_Option is Now restricted
            </Text>
            {/* Repeat similar list items for each latest change */}
          </Box>
        </Box>

        {repoData.map((repo, index) => (
        <Box key={index} className="boxes" border="1px solid #e1e4e8" borderRadius="5px" marginTop="20px" textAlign="left">
          <Text as="h6">{repo.title}</Text>
          <Text>{repo.description}</Text>
          <Button width="100%">Watch on Demand</Button>
        </Box>
      ))}


      <Box>
      <Box className="latest-changes" marginBottom="20px">
        <Text as="h2">Latest Changes</Text>
        {changesData.map((change, index) => (
          <Text key={index} fontWeight="bold">
            {change.date}: {change.change}
          </Text>
        ))}
        <Button href="#">View changelog →</Button>
      </Box>

      <Box className="explore-repositories">
        <Text as="h2">Explore Repositories</Text>
        <UnorderedList listStyleType="none" padding="0">
          {repositoriesData.map((repo, index) => (
            <ListItem key={index} marginBottom="10px">
              <Text as="h3" fontSize="xl">
                {repo.name}
              </Text>
              <Text>{repo.description}</Text>
              <Text>{repo.stars} stars</Text>
              {repo.language && <Text>{repo.language}</Text>}
            </ListItem>
          ))}
        </UnorderedList>
        <Button href="#">Explore more →</Button>
      </Box>
    </Box>
 </Box> 
  );
};

export default RepoCard;
