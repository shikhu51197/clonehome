import { Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { PiNumberCircleEightBold } from "react-icons/pi";
import {BiFilter} from "react-icons/bi"

const MyButton = () => {
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BiFilter />}>
    Filter
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    // <Button>
    //   <Flex alignItems="center" gap="5px">
    //   <Icon as={BiFilter} mr={2} /> 
    //   Filter 
    //     <Icon as={PiNumberCircleEightBold} mr={2} /> 
        
     
    //   </Flex>
    // </Button>
  );
};

export default MyButton;
