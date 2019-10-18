import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

const Footer = () => {
    return(
        <Box bg="black" width="100%" height="65px" pt="3%" color="white" alignItems="center" overflow="hidden">
            <Text fontSize="25px" textAlign="center" m="0">
                krampus-nuggets <span role="img" aria-label="invader">👾</span>
            </Text>
        </Box>
    )
}

export default Footer