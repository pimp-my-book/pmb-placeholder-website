import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
//import sectionImage from "../images/bgSectionOne.png";
import "../styles/styles.css";

const SectionOne = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url("+ sectionImage + ")" } bgRepeat="no-repeat" width="100%" height="700px" color="white" overflow="hidden">
            <Content 
                title="PMB Plus"
                shortDesc="The future of Pimp My Book. A, currently in development, modern solution
                to the Second-Hand Book industry. A fresh approach to get you cheaper textbooks."
            />
        </Box>
    )
}

export default SectionOne