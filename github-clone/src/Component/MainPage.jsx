import React, { useState } from "react";
import {
  Box,
  Link,
  Flex,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";

import { FiHome, FiCode, FiBook, FiBell } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { GoRepoTemplate } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
const MainPage = () => {
  //sidebar
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const iconColor = useColorModeValue("gray.600", "gray.300");
  const [showMore, setShowMore] = useState(false);

  const teams = [
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
  ];

  //repo
  const repoData = [
    {
      title: "7 Strategies for end-to-end CI/CD governance",
      description:
        "Best Practice for developing and maintaining a successful model.",
    },
  ];

  const changesData = [
    {
      date: "Yesterday",
      change: "GitHub Actions: NODE_OPTIONS is now restricted from GITHUB_ENV",
    },
    { date: "Yesterday", change: "Repository Rules – insight enhancements" },
    {
      date: "Yesterday",
      change: "MaxMind is now a GitHub secret scanning partner",
    },
    {
      date: "2 days ago",
      change: "Pinterest is now a GitHub secret scanning partner",
    },
  ];

  const repositoriesData = [
    {
      name: "free-programming-books",
      description: "Freely available programming books",
      stars: "300k",
    },
    {
      name: "cpython",
      description: "The Python programming language",
      stars: "56k",
      language: "Python",
    },
    {
      name: "supabase",
      description:
        "The open source Firebase alternative. Follow to stay updated about our public Beta.",
      stars: "57.5k",
      language: "TypeScript",
    },
  ];

  return (
    <div>
      {/* {/* <Sidebar /> */}
      <Box
        pos="fixed"
        top="0"
        left="0"
        h="full"
        w="22%"
        borderRight="1px"
        borderColor={borderColor}
        bg={bgColor}
        boxShadow="md"
        overscrollBehavior="none"
        margin="auto"
        marginTop="75px"
      >
        <VStack spacing="4" py="4" px="4">
          <VStack align="flex-start" w="full">
            <Menu>
              <Box display="flex">
                <MenuButton
                  textDecoration="none"
                  color="white"
                  border="2px solid gray"
                  borderRadius={10}
                  bg="blue.800"
                >
                  👧Username🔽
                </MenuButton>{" "}
              </Box>
              <MenuList w="fix-content">
                <MenuItem>Repositories🔯🔯🔯🔯</MenuItem>
                🌟shikhu51197/Chanda_kaudi_game🎲
                {teams.map((team) => (
                  <MenuItem key={team.name}>
                    <Link href={team.link} textDecoration="none" color="white">
                      {team.name}
                    </Link>
                  </MenuItem>
                ))}
                {teams.length > 3 && (
                  <MenuItem onClick={() => setShowMore(!showMore)}>
                    <Link href="#" textDecoration="none" color="white">
                      {showMore ? "Show Less" : "Show More"}
                    </Link>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>

            <Flex
              w="80%"
              className="heading"
              justifyContent="space-between"
              alignItems="center"
              margin="auto"
            >
              <Text as="h6">Top Repositories</Text>
              <Button className="button" backgroundColor="blue" padding="5px">
                <GoRepoTemplate /> New
              </Button>
            </Flex>
            <Input
              type="text"
              placeholder="Find a repository ..."
              width="90%"
              padding="10px"
              border="1px solid #ccc"
              borderRadius="4px"
              marginTop="5px"
              boxSizing="border-box"
            />

            <Box display="flex" mt="5px">
              <IconButton
                icon={<HiUserCircle />}
                aria-label="Home"
                variant="ghost"
                color={iconColor}
              />
              <Text>shikhu51197/Avis-Rentals</Text>
            </Box>

            <Box display="flex" mt="-5px">
              <IconButton
                icon={<HiUserCircle />}
                aria-label="Explore"
                variant="ghost"
                color={iconColor}
              />
              <Text>shikhu51197/FirstCry-Clone</Text>
            </Box>

            <Box display="flex" mt="-5px">
              {" "}
              <IconButton
                icon={<HiUserCircle />}
                aria-label="Repositories"
                variant="ghost"
                color={iconColor}
              />{" "}
              <Text>shikhu51197/Chanda_kaudi_game</Text>
            </Box>

            <Box display="flex" mt="-5px">
              {" "}
              <IconButton
                icon={<HiUserCircle />}
                aria-label="Notifications"
                variant="ghost"
                color={iconColor}
              />
              <Text>shikhu51197/Courseapp</Text>
            </Box>

            <Text className="morebutton" color="blue.200" ml="10px">
              Show more
            </Text>

            <Text>Recent activity</Text>
            <Box
              className="activity"
              border="1px dashed white"
              borderRadius="5px"
              padding="10px"
              marginBottom="10px"
            >
              <Text>
                When you take actions across GitHub, we'll provide links to that
                activity here.
              </Text>
            </Box>
            <Text>Your teams</Text>
            <Input placeholder="Find a team" />
            <Box display="flex">
              {" "}
              <IconButton
                icon={<FiBook />}
                aria-label="Notifications"
                variant="ghost"
                color={iconColor}
              />
              <Text>masai-course/cohort-38</Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
      {/* <HomePage/> */}
      <Flex className="container" width="50%" color="white" margin="auto" overflowY="auto">
        <Box
          className="second-cont"
          padding="15px"
          lineHeight={10}
          borderRight="1px solid grey"
   
        >
          <Flex className="second-cont-header">
            <Flex
              className="home"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              margin="auto"
            >
              <Text as="h1">Home</Text>
              <Flex className="feed" gap="20px">
                <Text color="blue.300">Send Feedback</Text>
                <Text>Filter</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box className="updates-section" border="2px solid gray" mb="20px">
            <Text>Updates to your homepage feed</Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there’s one place to discover content on GitHub. There’s
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design. ✨
            </Text>
            <Link className="learn-more" href="#">
              Learn more <FaArrowRight />
            </Link>
          </Box>
          {/* Trending section */}
          <Flex
            className="trending-section"
            direction="column"
            textAlign="left"
          >
            <Flex className="trending" justifyContent="space-between">
              <Text>Trending repositories</Text>
              <Text className="see" color="blue">
                See more
              </Text>
            </Flex>
            {/* Sample Trending Repository Item */}
            <Box
              className="repository"
              paddingLeft="10px"
              border="2px solid gray"
              mb="20px"
            >
              <Text as="h6">shikhu51197</Text>
              <Text>Build an e-commerce Website</Text>
              <Text>React Projects</Text>
            </Box>
            {/* Repeat similar list items for each trending repository */}
          </Flex>

          {/* Bottom sections */}
          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>
          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>
          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>

          <Box
            className="bottom"
            border="1px solid gray"
            borderRadius="5px"
            marginBottom="10px"
            paddingLeft="20px"
            textAlign="left"
            mb="20px"
          >
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color="aquamarine"
                marginRight="7px"
              >
                Shikha
              </Text>
              created a repository <br />
              15 hours ago
            </Text>
            <Text>
              We've combined the power of the Following feed with the For you
              feed so there's one place to discover content on GitHub. There's
              improved filtering so you can customize your feed exactly how you
              like it, and a shiny new visual design.
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* <RepoCard/> */}
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
        _hover={{ transform: "scale(1.05)" }}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                eligendi similique exercitationem optio libero vitae accusamus
                cupiditate laborum eos.
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
        </Flex>
        ;
        <Box className="third-cont" padding="15px">
          <Box
            className="boxes"
            border="1px solid #e1e4e8"
            borderRadius="5px"
            marginTop="20px"
            textAlign="left"
          >
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
        
          </Box>
        </Box>
        {repoData.map((repo, index) => (
          <Box
            key={index}
            className="boxes"
            border="1px solid #e1e4e8"
            borderRadius="5px"
            marginTop="20px"
            textAlign="left"
          >
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
    </div>
  );
};

export default MainPage;
