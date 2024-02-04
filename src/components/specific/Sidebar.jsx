import { Box, Spacer } from "@chakra-ui/react";
import Logo from './Logo';
import ColorModeSwitcher from "../common/ColorModeSwitcher.jsx";
import Navigation from "./Navigation";
import {AvatarBox} from "./AvatarBox";

export const Sidebar = ({ collapse, isMobile }) => {
    return (
        <Box w="full" h="full"  display="flex" flexDirection={'column'}>
            <Logo collapse={collapse} isMobile={isMobile}/>
            <ColorModeSwitcher collapse={collapse} isMobile={isMobile}/>
            { collapse && <Spacer />}
            <Navigation collapse={collapse} isMobile={isMobile} />
            <Spacer />
            <AvatarBox collapse={collapse} />
        </Box>
    );
};