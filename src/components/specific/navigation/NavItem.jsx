import {
    ListIcon,
    Link as LinkChakra,
    Heading,
    Box,
    Badge,
    Text, useBreakpointValue, useColorMode,
} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

export const NavItem = ({ item, isActive, collapse}) => {

    const {colorMode} = useColorMode();
    const isMobile = useBreakpointValue({base: 1, md:2, lg: 3});

    const {label} = item;

    let itemColor = isActive ? "gray.300" : "gray.600";
    let marginY = 6
    let hoverColor = "gray.300"

    if (isMobile === 1) {
        marginY = 0
    } else if (isMobile === 2) {
        marginY = 2
    }
    if (colorMode === 'light') {
        itemColor = isActive ? "gray.800" : "gray.400";
        hoverColor = "gray.800"
    }


    if (item.type === "link") {
        const { icon, notifications, messages, path } = item;
        return (
            <Box display="flex" h={'full'} alignItems="center" my={marginY} justifyContent="center" flexDir={'row'}>
                <LinkChakra
                    as={Link}
                    to={path}
                    gap={1}
                    display="flex"
                    alignItems="center"
                    _hover={{ textDecoration: "none", color: hoverColor }}
                    fontWeight="medium"
                    color={itemColor}
                    w="full"
                    justifyContent={collapse ? "center" : ""}
                    flexDir={'row'}
                >
                    <ListIcon as={icon} fontSize={22} m="0" />
                    {!collapse && <Text>{label}</Text>}
                </LinkChakra>
                {!collapse && (
                    <React.Fragment>
                        {notifications && (
                            <Badge
                                borderRadius="full"
                                colorScheme="yellow"
                                w={6}
                                textAlign="center"
                            >
                                {notifications}
                            </Badge>
                        )}
                        {messages && (
                            <Badge
                                borderRadius="full"
                                colorScheme="green"
                                w={6}
                                textAlign="center"
                            >
                                {messages}
                            </Badge>
                        )}
                    </React.Fragment>
                )}
            </Box>
        );
    }

    return (
        <Heading
            color="gray.400"
            fontWeight="medium"
            textTransform="uppercase"
            fontSize="sm"
            borderTopWidth={1}
            borderColor="gray.100"
            flexDir={'row'}
            pt={!collapse ? 8 : 0}
            my={6}
        >
            <Text display={!collapse ? "flex" : "none"}>{label}</Text>
        </Heading>
    );
};