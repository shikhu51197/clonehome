import React from "react";
import { Flex, Box, Text, Link, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      className="footer"
      backgroundColor="black"
      color="white"
      padding="20px 0"
      textAlign="center"
      
    >
      <Box className="footer-content" maxW="1200px" margin="0 auto">
        {/* Column 1 */}
        <Flex alignItems="center" mb="10px" left='0px'>
          <Image
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            boxSize="40px"
          />
          <Text marginLeft="10px">© 2023 GitHub, Inc.</Text>
        </Flex>

        {/* Column 2 */}
        <Flex flexDirection="column" alignItems="left" ml="20px" >
          <Text fontWeight="bold" mb="10px">Column 1</Text>
          <Link href="#">Blog</Link>
          <Link href="#">About</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Contact GitHub</Link>
          <Link href="#">Pricing</Link>
        </Flex>

        {/* Column 3 */}
        <Flex flexDirection="column" alignItems="center" ml="20px">
          <Text fontWeight="bold" mb="10px">Column 2</Text>
          <Link href="#">API</Link>
          <Link href="#">Training</Link>
          <Link href="#">Status</Link>
          <Link href="#">Security</Link>
        </Flex>

       
        <Flex flexDirection="column" alignItems="right
        " ml="20px">
          <Text fontWeight="bold" mb="10px">Column 3</Text>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Docs</Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
