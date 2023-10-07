import { Box, Button, Flex,  Heading, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineUp } from "react-icons/ai";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  };
  return (
    <>
    <Box
      bgImage="https://github.com/mdjawedh022/FinmeeTech/blob/main/ntwist/src/assets/home-image-bg-v6.png?raw=true"
      bgSize="cover"
      minHeight="100vh"
    >
      <Navbar />

      <Box display={["column","column","column","flex"]} zIndex="100px">
        <Box w={["100%","100%","100%","40%"]} pt={["100px","100px","200px","200px"]} pl={["20px","100px","200px","100px"]}  pr={["none","100px","200px","100px"]}  align={"left"}>
          <Heading color="white" textAlign="left">
            Data-powered solutions for industrial Excellence
          </Heading>
          <br />
          <Button colorScheme="blue">Read Me</Button>
        </Box>

        <Box w={["100%","80%","80%","60%"]} m="auto" p="50px">
          <Box w="100%">
            <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" />
          </Box>
        </Box>
      </Box>
    </Box>
    <Flex direction={["column-reverse", "column-reverse", "column-reverse", "row"]} gap="6" w="80%" margin="auto" mt="50px">
  <Box w={["100%", "100%", "100%", "50%"]} textAlign="left" p="10px">
    <Heading color="orange">Mine-To-Mill-To-Mine Optimization</Heading>
    <br />
    <Text>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</Text>
    <br />
    <Button colorScheme='orange'>Read More</Button>
  </Box>
  <Box w={["100%", "100%", "100%", "50%"]}>
    <img src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg" alt="img" />
  </Box>
</Flex>

    
    <Box display={["column","column","column","flex"]}  gap="6" w="80%" margin="auto" mt="50px">
       
        <Box w={["100%","100%","100%","50%"]}>
           <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg" alt="img"/>
        </Box>

        <Box w={["100%","100%","100%","50%"]} textAlign="left" p="10px">
           
           <Heading color="orange" >Sustainability</Heading>
           <br/>
           <Text>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.</Text>
           <br/>
           <Text>
           With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
           </Text>
           <br/>
           <Button colorScheme='orange'>Read More</Button>
       </Box>
       
    </Box>
    <Flex justifyContent={"center"} textAlign="left"  alignItems="center" direction={["column-reverse", "column-reverse", "column-reverse", "row"]} gap="6" w="80%" margin="auto" mt="50px">
  <Box w={["100%", "100%", "100%", "50%"]}  p="10px">
    <Heading color="orange">Mineral Processing</Heading>
    <br />
    <Text>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</Text>
    <br />
    <Button colorScheme='orange'>Read More</Button>
  </Box>
  <Box w={["100%", "100%", "100%", "50%"]}>
    <img src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg" alt="img" />
  </Box>
</Flex>
<Box justifyContent={"center"} textAlign="left"  alignItems="center" display={["column","column","column","flex"]}  gap="6" w="80%" margin="auto" mt="50px">
       
       <Box w={["100%","100%","100%","50%"]}>
          <img src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png" alt="img"/>
       </Box>

       <Box w={["100%","100%","100%","50%"]} textAlign="left" p="10px">
          
          <Heading color="orange" >Oil & Gas</Heading>
          <br/>
          <Text>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. .</Text>
          <br/>
          <Text>
          NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
          </Text>
          <br/>
          <Button colorScheme='orange'>Read More</Button>
      </Box>

      
   </Box>


   <Box mt="50px" bg="rgb(8,20,41)" w="100%" h="auto" pt="50px">
   <Box w={["40%","30%","20%","10%"]} margin="auto" >
     <img  src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" />
   </Box>
   <Box display={["column","column","column","flex"]} lineHeight="40px" justifyContent="space-between" w="40%" margin="auto" mt="15px" >
   <Text color="white"   >Home</Text>
  <Text color="white"  >About Us</Text>
  <Text color="white"  >Contact Us</Text>
  <Text color="white"  >Privacy Policy </Text>
  <Text color="white" >Sitemap</Text>
   </Box>
   <br/>
   <Text color="gray">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
   <Box w={["40%","30%","20%","10%"]} display="flex" margin="auto" mt="20px" justifyContent={"space-between"}>
   <FaTwitter size={24} color="white" />
   <FaLinkedin size={24} color="white" />
   </Box>
   <br/>
   <Text color="gray">© 2022. Ntwist Inc.</Text>
   </Box>
   <Box
      display={["none","none","block","block"]}
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
      onClick={scrollToTop} 
    >
      <Button colorScheme="blue" size="lg" w="60px" h="60px" borderRadius="100%">
      <AiOutlineUp size={100} color="white" />
      </Button>
    </Box>
    <Box
      display={["none","none","block","block"]}
      position="fixed"
      bottom="20px"
      left="20px"
      zIndex="1000"
    >
      <Box  w="110px" h="40px" bg="white" border="1px solid white" cursor="pointer" >
      <Box display={"flex"} w="50%" h="40px" p="2px" gap="5px" >
        <img src="https://ntwist.com/wp-content/plugins/gtranslate/flags/svg/en.svg" w="100%"   />
        <Text as='b' fontSize="20px" >EN</Text>
        <Box mt="7px">
            <AiOutlineUp  color="black"/>
        </Box>
      
      </Box>
     

      </Box>
    </Box>
    </>
    

  );
};

export default Home;
