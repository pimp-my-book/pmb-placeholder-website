import React from 'react';
import { Box } from "@chakra-ui/core";
import Content from "../components/content";
import "../styles/styles.css";

const SectionTwo = () => {
    return(
        <Box className="sectionContainer" bgImage={ "url(https://res.cloudinary.com/wemakeart/image/upload/v1571656529/pmb-placeholder/gogoa-final_mi1ry5.png)" } bgRepeat="no-repeat" width="100%" height="700px" color="white" overflow="hidden">
            <Content
                title="GoGoa"
                shortDesc="Our bursary division -_-"
            />
        </Box>
    )
}

export default SectionTwo