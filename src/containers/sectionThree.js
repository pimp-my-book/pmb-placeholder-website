import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
import "../styles/styles.css";

const SectionThree = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url(https://res.cloudinary.com/wemakeart/image/upload/v1571656526/pmb-placeholder/newsroom-final_oaegif.png)" } bgRepeat="no-repeat" width="100%" height="700px" color="#ed0677"  overflow="hidden">
            <Content
                title="The Newsroom"
                shortDesc="Stay up-to-date with everything PMB"
            />
        </Box>
    )
}

export default SectionThree