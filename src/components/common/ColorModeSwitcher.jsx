import { Flex, IconButton, useBreakpointValue, useColorMode} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

const ColorModeSwitcher = ({collapse, isMobile}) => {
    const {colorMode, setColorMode} = useColorMode();
    const flexDir = useBreakpointValue({ base: "row", md: "column", lg: !collapse ? "row" : "column" });

    const toggleColorMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
    };

    if (collapse || isMobile) {
        return (
            <Flex
                // w="full"
                alignItems="center"
                justifyContent={'center'}
                flexDirection={flexDir}
            >
                <IconButton
                    variant="ghost"
                    aria-label={'Light'}
                    icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                    color="gray.400"
                    borderRadius="50%"
                    fontSize={26}
                    onClick={toggleColorMode}
                />
            </Flex>
        );
    }
    return (
        <Flex
            w="full"
            borderWidth={1}
            borderColor="gray.500"
            borderRadius={14}
            my={6}
        >
            <IconButton
                w="full"
                borderRadius={14}
                id="light"
                onClick={toggleColorMode}
                size="sm"
                py={5}
                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                aria-label={'Light'}
            />
        </Flex>
    );

};


export default ColorModeSwitcher;
