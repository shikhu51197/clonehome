import React from "react";
import {
  chakra,
  Flex,
  Box,
  Image,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,

} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";

import { GoCommentDiscussion } from "react-icons/go";

import {BsGithub} from "react-icons/bs"
import { BiGitPullRequest } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineMenu, AiFillHome, AiOutlineSearch,AiOutlinePullRequest,AiOutlineCodepenCircle ,AiOutlineIssuesClose} from "react-icons/ai";
import ToggleColorMode from "./ToggleColorMode";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
 
  const { colorMode } = useColorMode(); // Get the current color mode

  const headerBgColor = colorMode === "dark" ? "rgb(1,5,8)" : "white";
  return (
    <React.Fragment  >
      <chakra.header
       position="fixed" // Fix the position at the top
       top="0" // Stick it to the top
       left="0"
       right="0"
       zIndex={1000}
       bg={headerBgColor} // Set your desired background color
       borderBottom="1px solid gray" // Add a border if needed
       w="full"
       px={{
         base: 2,
         sm: 4,
       }}
       py={4}
       shadow="md"
       
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
              }}
            >
             
               <Button
               border="1px solid gray"
      variant="ghost"
      leftIcon={<AiOutlineMenu />}
      colorScheme="gray"
      ref={btnRef} 
      onClick={onOpen}
       // You can adjust the size as needed
    >
      
    </Button>
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <BsGithub size={35} />
          </DrawerHeader>

          <DrawerBody display="grid">
           <Button leftIcon={<AiFillHome/>}>  Home</Button>
           <Button leftIcon={<AiOutlineIssuesClose/>}>issues</Button>
           <Button leftIcon={<AiOutlinePullRequest/>}>Pull request</Button>
           <Button leftIcon={<GoCommentDiscussion/>}>Discussion</Button>
           <Button leftIcon={<AiOutlineCodepenCircle/>}>Codespaces</Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
              <Box ml="10px">
              <ToggleColorMode />
              </Box>
             
              
            </Box>
            <chakra.a href="/" title="" display="flex" alignItems="center">
              <Image
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                boxSize="40px"
              />
            </chakra.a>
            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={isOpen ? "none" : "flex"}
            alignItems="center"
          >
         <InputGroup>
  <InputLeftElement pointerEvents="none">
    <AiOutlineSearch />
  </InputLeftElement>
  <Input
    type="tel"
    placeholder="Type / to search"
    w="350px"
    h="30px"
    
    // Adjust the width as needed
  />
</InputGroup>
            <Flex align="center">
             
              <Menu>
  <MenuButton as={Button} rightIcon={<BiSolidDownArrow />}>
    +
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
              <Flex
                className="icons"
                fontSize="20px"
                border="1px solid gray"
                ml="5"
                padding="3px 6px"
                borderRadius="7px"
              >
                <Icon as={FaRegDotCircle} />
              </Flex>

              <Flex
                className="icons"
                fontSize="20px"
                border="1px solid gray"
                ml="5"
                padding="2px 6px"
                borderRadius="7px"
              >
                <Icon as={BiGitPullRequest} />
              </Flex>

              <Flex
                className="icons"
                fontSize="20px"
                border="1px solid gray"
                ml="5"
                padding="2px 6px"
                borderRadius="7px"
              >
                <Icon as={MdNotifications} />
              </Flex>
            </Flex>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://tse3.mm.bing.net/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&P=0&h=180"
            />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;