import { useState } from 'react'
import { NextPage } from 'next'
import {
    Flex, Stack, Box, Text, Accordion, AccordionItem,
    AccordionButton, AccordionPanel, AccordionIcon, Table,
    Thead, Tbody, Tr, Th, Td, Select,
    Input, Switch, IconButton, Icon, Button, ButtonGroup
} from '@chakra-ui/react'
import { RiCloseCircleFill } from 'react-icons/ri';
import { MobileTopBar } from '../../components/DashboardPage/MobileTopBar'
import { Sidebar } from '../../components/DashboardPage/Sidebar'

const Dashboard: NextPage = () => {
    const [schedules, setSchedule] = useState([
        {
            date: 'Monday, Auguest 16, 2021',
            lists: [
                { time: '8:30AM', title: 'Thanksgiving (Pasalamat ng Buong Bayan)', links: [{ socialMedia: '', url: '', active: false }] },
                { time: '8:30AM', title: 'Thanksgiving (Pasalamat ng Buong Bayan)', links: [{ socialMedia: '', url: '', active: false }] },
            ],
        },
        {
            date: 'Tuesday, August 17, 2021',
            lists: [
                { time: '6:00AM', title: 'Thanksgiving (Pasalamat ng Buong Bayan)', links: [{ socialMedia: '', url: '', active: false }] },
            ],
        },
    ])

    const AddNewRow = (i: number, j: number) => {
        const values = schedules.map((schedule, indexI) => {
            if (indexI === i) {
                return schedule.lists.map((list, indexJ) => {
                    if (indexJ === j) {
                        // console.log(list.links)
                        // return [...list.links]
                        list.links.push({ socialMedia: '', url: '', active: false })
                    }
                })
            }
        })

        // console.log(values)

        // values.push({ socialMedia: '', url: '', active: false });
        // setLinks(values);
    };

    return (
        <Flex h="100vh" flexDirection="column">
            <MobileTopBar />
            <Flex flex="1" overflow="hidden">
                <Sidebar display={{ base: 'none', md: 'flex' }} />
                <Flex
                    display={{ base: 'none', lg: 'block' }}
                    width="full"
                    direction="column"
                    overflowY="auto"
                    borderRightWidth="1px"
                    p="6"
                >
                    {schedules.map((schedule, i) => {
                        return (
                            <Stack key={i}>
                                <Box bgColor="gray.200" py={3} pl={5}>
                                    <Text>{schedule.date}</Text>
                                </Box>
                                <Accordion allowMultiple>
                                    {schedule.lists.map((list, j) => {
                                        return (
                                            <AccordionItem id='1' key={j}>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box flex="1" textAlign="left">
                                                            <Text as="span" mr={36}>{list.time}</Text>
                                                            <Text as="span">{list.title}</Text>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Table variant="simple">
                                                        <Thead>
                                                            <Tr>
                                                                <Th>Medium</Th>
                                                                <Th>Link</Th>
                                                                <Th>Active</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            {list.links.map((link, k) => {
                                                                return (
                                                                    <Tr key={k}>
                                                                        <Td w="30%">
                                                                            {/* value={link.socialMedia} */}
                                                                            <Select >
                                                                                <option value="facebook">
                                                                                    Facebook
                                                                                </option>
                                                                                <option value="youtube">
                                                                                    Youtube
                                                                                </option>
                                                                                <option value="zoom">Zoom</option>
                                                                            </Select>
                                                                        </Td>
                                                                        <Td w="50%">
                                                                            {/* value={link.url} */}
                                                                            <Input type="url" />
                                                                        </Td>
                                                                        <Td w="20%">
                                                                            {/* isChecked={link.active} */}
                                                                            <Switch size="lg" mr={5} />
                                                                            <IconButton
                                                                                colorScheme="Black"
                                                                                aria-label="Call Segun"
                                                                                size="md"
                                                                                icon={
                                                                                    <Icon
                                                                                        color="gray.700"
                                                                                        w={6}
                                                                                        h={6}
                                                                                        as={RiCloseCircleFill}
                                                                                    />
                                                                                }
                                                                            />
                                                                        </Td>
                                                                    </Tr>
                                                                )
                                                            })}
                                                            <Tr>
                                                                <Td colSpan={3}>
                                                                    <ButtonGroup spacing="6">
                                                                        <Button colorScheme="blue" onClick={() => AddNewRow(i, j)}>Add</Button>
                                                                    </ButtonGroup>
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td colSpan={3}>
                                                                    <Flex justifyContent="space-between">
                                                                        <ButtonGroup spacing="6">
                                                                            <Button colorScheme="blue">Save</Button>
                                                                            <Button>Cancel</Button>
                                                                        </ButtonGroup>
                                                                        <ButtonGroup variant="outline" spacing="6">
                                                                            <Button colorScheme="red">Delete</Button>
                                                                        </ButtonGroup>
                                                                    </Flex>
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        )
                                    })}
                                </Accordion>
                            </Stack>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Dashboard