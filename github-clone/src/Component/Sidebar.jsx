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
import { FiHome, FiCode, FiBook, FiBell } from "react-icons/fi";

import { HiUserCircle } from "react-icons/hi";
import { GoRepoTemplate } from "react-icons/go";
const Sidebar = () => {
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

  const visibleTeams = showMore ? teams : teams.slice(0, 3);
  return (
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
        <VStack  align="flex-start" w="full">
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
              <MenuItem>Repositories🔯</MenuItem>
              🌟shikhu51197/Chanda_kaudi_game🎲
              {visibleTeams.map((team) => (
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

          <Flex  w="80%"
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

          <Box display="flex" mt='5px'>
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

          <Text className="morebutton" color='blue.200' ml="10px">Show more</Text>

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
              icon={<FiBook/>}
              aria-label="Notifications"
              variant="ghost"
              color={iconColor}
            />
            <Text>masai-course/cohort-38</Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
