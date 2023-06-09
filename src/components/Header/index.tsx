import { useSidebarDrawer } from "@/contexts/SideBarDrawerContext";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {
                !isWideVersion && (
                    <IconButton
                        aria-label="Open navigation"
                        fontSize="24"
                        onClick={onOpen}
                        mr="2"
                        variant="unstyled"
                        icon={<Icon as={RiMenuLine}
                        />}
                    >

                    </IconButton>
                )
            }
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}