import {Box, Flex, Icon, Text, useBreakpointValue} from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";

const Logo = ({ collapse }) => {

    const flexDir = useBreakpointValue({ base: "row", md: "column", lg: !collapse ? "row" : "column" });

    return (
        <Flex
            alignItems="center"
            justifyContent={"space-between"}
            flexDirection={flexDir}
            mb={2}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <Icon as={FcGraduationCap} fontSize={30} />
                {!collapse && (
                    <Text fontWeight="bold" fontSize={16}>
                        Virtual Fun English
                    </Text>
                )}
            </Box>
        </Flex>
    )
};

export default Logo