import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
import "../styles/styles.css";

const SectionOne = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url(https://res.cloudinary.com/wemakeart/image/upload/v1571660861/pmb-placeholder/pmb_plus-final_ivii0x.png)" } bgRepeat="no-repeat" width="100%" height="700px" color="#ed0677" overflow="hidden">
            <Content 
                title="PMB Plus"
                shortDesc="The future of Pimp My Book. A, currently in development, modern solution
                to the Second-Hand Book industry. A fresh approach to get you cheaper textbooks."
            />
        </Box>
    )
}

export default SectionOne