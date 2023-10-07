import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa"; // Import other icons as needed

// const AdditionalSection = () => {
//   return (
//     <Box
//       className="additional-section"
//       padding="15px"
//       lineHeight={10}
//       borderRight="1px solid grey"
//     >
//       {/* Add content for the additional section here */}
//       <Heading as="h2">Additional Section</Heading>
//       <Text>This is additional content for your homepage.</Text>
//       <Link href="#">Explore more</Link>
//     </Box>
//   );
// };

const HomePage = () => {
  return (
    <>
      <Flex className="container" width="50%" color="white" margin="auto">
     
        <Box
          className="second-cont"
          padding="15px"
          lineHeight={10}
          
          borderRight="1px solid grey"
        >
          <Flex className="second-cont-header" >
            <Flex
              className="home"
              justifyContent="space-between"
              alignItems="center"
              w="100%" margin="auto"
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
            <Box className="repository" paddingLeft="10px" border="2px solid gray" mb="20px">
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
    </>
  );
};

export default HomePage;
