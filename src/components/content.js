import React from 'react';
import { Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import "../styles/styles.css";

const Content = (props) => {
    return (
        <Box className="contentSection">
            <Text pt="20%" fontSize="40px" fontWeight="700" textAlign="center">
                { props.title }
            </Text>
            <Text pr="10%" pl="10%" fontSize="30px" m={0} textAlign="center">
                { props.shortDesc }
            </Text>
        </Box>
    )
}

export default Content