import {Box, List, ListItem, useBreakpointValue} from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import routes from "../../../utils/routes.js";
import {useLocation} from "react-router-dom";

const Navigation = ({ collapse }) => {

    const isMobile = useBreakpointValue({base: 1, md:2, lg: 3});
    let listRoutes = routes
    const location = useLocation()

    if (isMobile === 1 || isMobile === 2)
        listRoutes = routes.filter((item) => item.type !== 'header')


    return (
        <>
            <Box as={List} w="full" display={isMobile === 1 || isMobile === 2 ? 'flex' : 'initial'}  flexDir={isMobile !== 1 && 'column'} gap={isMobile === 1 || isMobile === 2 ? 2 : 0}>
                {listRoutes.map((item, index) => {

                    return (
                            <ListItem key={index} >
                                <NavItem item={item} isActive={location.pathname === item.path} collapse={collapse} />
                            </ListItem>
                    )
                })}
            </Box>
        </>


    );
}

export default Navigation;