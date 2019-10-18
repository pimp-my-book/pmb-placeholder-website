import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
import sectionImage from "../images/bgSectionTwo.png";
import "../styles/styles.css";

const SectionTwo = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url("+ sectionImage + ")" } bgRepeat="no-repeat" width="100%" height="700px" color="white" overflow="hidden">
            <Content
                title="GoGoa"
                shortDesc="Our bursary division -_-"
            />
        </Box>
    )
}

export default SectionTwo