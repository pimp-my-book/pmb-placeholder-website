import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
import sectionImage from "../images/bgSectionThree.png";
import "../styles/styles.css";

const SectionThree = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url("+ sectionImage + ")" } bgRepeat="no-repeat" width="100%" height="700px" color="white"  overflow="hidden">
            <Content
                title="The Newsroom"
                shortDesc="Stay up-to-date with everything PMB"
            />
        </Box>
    )
}

export default SectionThree