import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export default function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Gabriel Lopes</Text>
                <Text color="gray.300" fontSize="small">gabriel.lopes.nascimento.dev@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Gabriel Lopes" src="https://github.com/gabriellopes232.png" />
        </Flex>
    )
}