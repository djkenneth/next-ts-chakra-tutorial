import {
    Box,
    Flex,
    FlexProps,
    Spacer,
    Stack,
    Heading,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import {
    FaRegChartBar,
} from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

import { NavLink } from "./NavLink";
import { UserProfile } from "./UserProfile";

export const Sidebar = (props: FlexProps) => {
    return (
        <Flex
            bg={mode("gray.50", "gray.800")}
            direction="column"
            borderRightWidth="1px"
            width="80"
            {...props}
        >
            <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
                <Box mb="6">
                    <Heading as="h2" size="x1" color={mode("gray.600", "gray.400")}>MCGI AMSLITE</Heading>
                </Box>

                <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
                    <Stack spacing="1">
                        <NavLink label="Home" icon={AiFillHome} isActive />
                        <NavLink label="Members" icon={BsFillPeopleFill} />
                        <NavLink label="Scheduled Viewing" icon={BsCalendar} />
                        <NavLink label="Reports" icon={FaRegChartBar} />
                        <NavLink label="Setting" icon={AiFillSetting} />
                    </Stack>
                </Stack>
                <Spacer />
            </Flex>

            <UserProfile
                name="FirstName"
                image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                email="cindy@example.com"
            />
        </Flex>
    );
};