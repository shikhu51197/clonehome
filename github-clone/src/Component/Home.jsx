import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
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
  Button,
  Input,
  chakra, // Add this import
  Image,
  useColorMode,
  Heading,
  Card,
  CardHeader,
  Avatar,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  useSteps,
  StepDescription,
  StepSeparator,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel, // Add this import
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { GoRepoTemplate } from "react-icons/go";
import { BiDownArrow } from "react-icons/bi";
import MyButton from "./MyButton";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const { colorMode } = useColorMode(); // Get the current color mode
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleExpansion1 = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  const headerBgColor = colorMode === "dark" ? "rgba(1, 5, 8, 0.571)" : "white";
  const headerBgColor1 = colorMode === "dark" ? "rgb(25, 26, 28)" : "white";
  const headerBgColor2 = colorMode === "dark" ? "rgb(23,26,34)" : "white";
  const teams = [
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
    { name: "cohort-38", link: "https://github.com/masai-course/cohort-38" },
  ];
  const steps = [
    {
      title: "9 hours",
      description:
        "Specifies the offset length of the shadow. This parameter accepts two, three, or four values. Third and fourth values are optional. They are interpreted as follows Specifies the offset length of the shadow.",
    },
    {
      title: "12 hours",
      description:
        "Specifies the offset length of the shadow. This parameter accepts two, three, or four values. Third and fourth values are optional. They are interpreted as follows Specifies the offset length of the shadow.",
    },
    {
      title: "18 hours",
      description:
        "Specifies the offset length of the shadow. This parameter accepts two, three, or four values. Third and fourth values are optional. They are interpreted as follows Specifies the offset length of the shadow.",
    },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <div id="container" style={{ position: "relative", marginTop: "75px" }}>
        <VStack
          pos="fixed"
          top="75px"
          left="0"
          w="22%"
          borderRight="1px"
          boxShadow="md"
          overscrollBehavior="none"
          margin="auto"
        >
          <Box
            pos="fixed"
            top="0"
            left="0"
            h="full"
            w="22%"
            borderRight="1px"
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
                        <Link
                          href={team.link}
                          textDecoration="none"
                          color="white"
                        >
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
                  <Button
                    className="button"
                    backgroundColor="blue"
                    padding="5px"
                  >
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
                  />
                  <Text>shikhu51197/Avis-Rentals</Text>
                </Box>

                <Box display="flex" mt="-5px">
                  <IconButton
                    icon={<HiUserCircle />}
                    aria-label="Explore"
                    variant="ghost"
                  />
                  <Text>shikhu51197/FirstCry-Clone</Text>
                </Box>

                <Box display="flex" mt="-5px">
                  {" "}
                  <IconButton
                    icon={<HiUserCircle />}
                    aria-label="Repositories"
                    variant="ghost"
                  />{" "}
                  <Text>shikhu51197/Chanda_kaudi_game</Text>
                </Box>

                <Box display="flex" mt="-5px">
                  {" "}
                  <IconButton
                    icon={<HiUserCircle />}
                    aria-label="Notifications"
                    variant="ghost"
                  />
                  <Text>shikhu51197/Courseapp</Text>
                </Box>

                <Accordion allowMultiple borderColor="transparent" w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton onClick={toggleExpansion}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              color="gray"
              _hover={{ color: 'blue.500', cursor: 'pointer' }}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {isExpanded && (
            <>
              <Box display="flex" mt="5px">
                <IconButton
                  icon={<HiUserCircle />}
                  aria-label="Home"
                  variant="ghost"
                />
                <Text>shikhu51197/Avis-Rentals</Text>
              </Box>

              <Box display="flex" mt="-5px">
                <IconButton
                  icon={<HiUserCircle />}
                  aria-label="Explore"
                  variant="ghost"
                />
                <Text>shikhu51197/FirstCry-Clone</Text>
              </Box>

              <Box display="flex" mt="-5px">
                <IconButton
                  icon={<HiUserCircle />}
                  aria-label="Repositories"
                  variant="ghost"
                />
                <Text>shikhu51197/Chanda_kaudi_game</Text>
              </Box>

              <Box display="flex" mt="-5px">
                <IconButton
                  icon={<HiUserCircle />}
                  aria-label="Notifications"
                  variant="ghost"
                />
                <Text>shikhu51197/Courseapp</Text>
              </Box>
            </>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>


                <Text>Recent activity</Text>
                <Box
                  className="activity"
                  border="1px dashed white"
                  borderRadius="5px"
                  padding="10px"
                  marginBottom="10px"
                >
                  <Text>
                    When you take actions across GitHub, we'll provide links to
                    that activity here.
                  </Text>
                </Box>
                <Text>Your teams</Text>
                <Input placeholder="Find a team" />
                <Box display="flex">
                  {" "}
                  <IconButton
                    icon={<FiBook />}
                    aria-label="Notifications"
                    var
                  />
                  <Text>masai-course/cohort-38</Text>
                </Box>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </div>

      <Box
        bg={headerBgColor}
        w="78%"
        mt="75px"
        p="20px"
        display="flex"
        gap="10px"
        ml="334px"
      >
        <Box w="65%" h="auto">
          <Box w="100%" display="flex" justifyContent={"space-around"}>
            <Box w="50%" textAlign="left">
              <Heading as="h4" size="md">
                Home
              </Heading>
            </Box>
            <Box>
              <Button colorScheme="gost" color="blue">
                Send feedback
              </Button>
              <MyButton />
            </Box>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>

          <Box w="100%"  p="20px">
          <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton onClick={toggleExpansion1}>
            <Box as="span" flex='1' color="skyblue" textAlign='center'>
              {isContentExpanded ? 'Less' : 'More'}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
          <Box w="100%" p="20px">
            <Card w="100%" borderRadius={"10px"}>
              <CardHeader bg={headerBgColor1} borderRadius={"10px"}>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box textAlign="left">
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text color="gray" fontSize="xs" mt="1px">
                        5 hour ago
                      </Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
                <Box
                  w="100%"
                  h="130px"
                  display="flex"
                  border="1px solid gray"
                  p="20px"
                  mt="15px"
                  borderRadius="10px"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  bg={headerBgColor2}
                >
                  <Box w="50%" textAlign="left">
                    <Text as="b" cursor="pointer">
                      aplus-framework/app
                    </Text>
                    <Text mt="5px"> 🍏 Aplus Framework App Project</Text>
                    <Flex mt="10px" gap="20px">
                      <Text color="gray"> ⚽ PHP</Text>
                      <Text color="gray"> ⭐ 589</Text>
                    </Flex>
                  </Box>
                  <Box w="50%" align="right">
                    <Button leftIcon={<FaStar />} rightIcon={<BiDownArrow />}>
                      Star
                    </Button>
                  </Box>
                </Box>
              </CardHeader>
            </Card>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
          </Box >

          <Box w="100%" display="flex" p="20px">
            <Box w="40%" align="left" display="flex" gap="5px">
              <Box mt="3px">
                <FaGithub />
              </Box>

              <Text color="gray" fontSize="xs">
                © 2023 GitHub, Inc.
              </Text>
            </Box>
            <Box w="80%" display={"flex"} justifyContent="space-evenly">
              <Box textAlign="left">
                <Text mt="2px" color="gray" fontSize="xs">
                  Blog
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  About
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  Shop
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  Contact GitHub
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  Pricing
                </Text>
              </Box>
              <Box textAlign="left">
                <Text mt="2px" color="gray" fontSize="xs">
                  Api
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  Training
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                  Status
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                Security
                </Text>
               
              </Box>
              <Box textAlign="left">
                <Text mt="2px" color="gray" fontSize="xs">
                  Terms
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                Privacy
                </Text>
                <Text mt="5px" color="gray" fontSize="xs">
                Docs
                </Text>
              
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="33%" p="18px">
          <Box bg={headerBgColor1} borderRadius={"10px"} p="18px">
            <Stepper
              index={activeStep}
              orientation="vertical"
              w="100%"
              height="auto"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box mt="30px" textAlign="left" w="100%">
                    <Text color="gray" fontSize="xs" mt="1px">
                      {step.title}
                    </Text>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>

          <Box bg={headerBgColor1} mt="20px" borderRadius={"10px"} p="18px">
            <Box>
              <Text textAlign="left">Explore repositories</Text>
            </Box>
            <Box>
              <Text textAlign="left" mt="10px">
                {" "}
                ⚽ prisma / prisma
              </Text>
              <br />
              <Text textAlign="left" color="gray" fontSize="xs" mt="1px">
                {" "}
                Next-generation ORM for Node.js & TypeScript | PostgreSQL,
                MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB
              </Text>
            </Box>
            <Box>
              <Text textAlign="left" mt="10px">
                {" "}
                ⚽ adam / goal
              </Text>
              <br />
              <Text textAlign="left" color="gray" fontSize="xs" mt="1px">
                {" "}
                Next-generation ORM for Node.js & TypeScript | PostgreSQL,
                MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB
              </Text>
            </Box>
            <Box>
              <Text textAlign="left" mt="10px">
                {" "}
                ⚽ jonier / greek
              </Text>
              <br />
              <Text textAlign="left" color="gray" fontSize="xs" mt="1px">
                {" "}
                Next-generation ORM for Node.js & TypeScript | PostgreSQL,
                MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
