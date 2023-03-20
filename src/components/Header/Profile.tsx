import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gabriel Lopes</Text>
                    <Text color="gray.300" fontSize="small">gabriel.lopes.nascimento.dev@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Gabriel Lopes" src="https://github.com/gabriellopes232.png" />
        </Flex>
    )
}