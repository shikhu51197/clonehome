import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    
    <Button
      onClick={() => toggleColorMode()}
      colorScheme="gost" border="1px solid"
    >
      {colorMode === "dark" ? (
        <SunIcon color="green"/>
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
};

export default ToggleColorMode;
