import {Box, IconButton, useBreakpointValue} from "@chakra-ui/react";
import {MdMenu} from "react-icons/md";
import Navigation from "./navigation/index.jsx";
import {AvatarBox} from "./AvatarBox.jsx";

const SidebarMobile = () => {

    const isMobile = useBreakpointValue({base: true,  md: false});

     return (
            <Box w="full" h="full"  display="flex" flexDirection={!isMobile && 'column'} justifyContent={'space-between'}>
                <Box display="flex" alignItems="center" justifyContent="center" flexDir={'row'}>
                        <IconButton
                            aria-label="Menu Colapse"
                            icon={<MdMenu/>}
                            onClick={() => {
                                console.log('click')
                            }}
                        />
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center">
                    <Navigation collapse={true} />
                </Box>
                <AvatarBox collapse={true} />
            </Box>
        )
 }

export default SidebarMobile