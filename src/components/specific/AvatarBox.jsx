import {
    Avatar,
    Flex,
    IconButton,
    SkeletonCircle,
    SkeletonText,
    Text, useBreakpointValue, useColorMode,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { FaPowerOff } from 'react-icons/fa';

export const AvatarBox = ({ collapse }) => {

    const isMobile = useBreakpointValue({base: 1,  md: 2, lg:3});

    const isLoading = true;
    const {colorMode} = useColorMode()

    let borderColor = 'gray.200'
    let width = 'initial'
    let flexDirection = 'row'

    if (isMobile === 3){
        width = 'full'
        flexDirection = 'column-reverse'
    }

    if (colorMode === 'dark')
        borderColor = 'gray.700'


    return (
        <Flex
            borderWidth={!collapse ? 1 : 0}
            borderColor={borderColor}
            borderRadius="full"
            w={width}
            p={'5px'}
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            flexDirection={!collapse ? "row" : flexDirection}
        >
            {
                isLoading ? (
                    <>
                        <Avatar name={'Margy Giraldo'} bg="teal.300" />
                        {!collapse && (
                            <Flex
                                w="full"
                                flexDirection="column"
                                gap={4}
                                justifyContent="center"
                                alignItems="flex-start"
                            >
                                <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
                                    Margy Giraldo
                                </Text>
                                <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
                                    @margy
                                </Text>
                            </Flex>
                        )}

                        {
                            isMobile === 3 ? (
                                <IconButton
                                    as={Link}
                                    to={'/logout'}
                                    aria-label="Settings"
                                    icon={<FaPowerOff />}
                                    borderRadius="full"
                                    color="gray.400"
                                    variant="ghost"
                                    fontSize={20}
                                />
                            ) : null
                        }
                    </>
                ): <>
                    {
                        !collapse
                            ? <SkeletonText mt="4" noOfLines={2} spacing="3" w={'60%'} m={2} ml={14}/>
                            : <SkeletonCircle size="12" />
                    }

                </>
            }


        </Flex>
    );
}