import {Flex, HStack, IconButton, useBreakpointValue, useColorMode} from "@chakra-ui/react";
import RoutesComponent from "./RoutesComponent.jsx";
import {useState} from "react";
import {MdMenu} from "react-icons/md";
import {Sidebar} from "./Sidebar.jsx";
import SidebarMobile from "./SidebarMobile.jsx";

const MainNavigation = () => {

    const [collapse, setCollapse] = useState(false);
    const {colorMode} = useColorMode();

    const sidebarWidth = useBreakpointValue({base: '90%', md: '100px', lg: !collapse ? "350px" : "100px"});
    const sidebarHeight = useBreakpointValue({base: "80px", md: '80%', lg: "full"});
    const mainWidth = useBreakpointValue({base: '90%', md: "calc(100% - 100px)", lg: 'full'});
    const mainHeight = useBreakpointValue({base: "calc(100% - 130px)", md: "80%", lg: 'full'});
    const padding = useBreakpointValue({base: "0", md: '5', lg: "10"});
    const asidePadding = useBreakpointValue({base: "5", md: '5', lg: "4"});
    const align = useBreakpointValue({base: "center", md: "flex-start"});
    const position = useBreakpointValue({base: "fixed", md: "relative"});
    const bottom = useBreakpointValue({base: "6", md: "none"});
    const mainBottom = useBreakpointValue({base: "120", md: "none"});
    const isMobile = useBreakpointValue({base: true,  lg: false});


    return (
        <HStack
            w="full"
            h="100vh"
            p={padding}
            justifyContent={align}
            spacing={4}
        >
            <Flex
                as="aside"
                h={sidebarHeight}
                w={sidebarWidth}
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                alignItems="start"
                padding={useBreakpointValue({base: "0", lg: "6"})}
                flexDirection={isMobile ? "row" : "column"}
                p={asidePadding}
                justifyContent="space-between"
                transition="ease-in-out .2s"
                borderRadius="3xl"
                position={position}
                bottom={bottom}
            >
                {
                    isMobile ? <SidebarMobile/> : <Sidebar collapse={collapse} isMobile={isMobile}/>
                }

            </Flex>

            <Flex
                as="main"
                h={mainHeight}
                w={mainWidth}
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
                alignItems="center"
                padding={useBreakpointValue({base: "0", lg: "6"})}
                flexDirection="column"
                p={4}
                justifyContent="space-between"
                transition="ease-in-out .2s"
                borderRadius="3xl"
                position={position}
                bottom={mainBottom}
            >

                {
                    !isMobile && (
                        <IconButton
                            aria-label="Menu Colapse"
                            icon={<MdMenu/>}
                            position="absolute"
                            top={6}
                            left={6}
                            onClick={() => setCollapse(!collapse)}
                        />
                    )

                }

                <RoutesComponent/>
            </Flex>


            {/* Otros elementos del HStack */}
        </HStack>
    );
}


export default MainNavigation