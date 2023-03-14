import { Button, Flex, Input, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function SignIn() {
    return (
        <Flex
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center">

            <Flex
                as="form"
                width="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column">
                <Stack spacing="4">
                    <FormControl>
                        <FormLabel htmlFor='email'>E-mail</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            focusBorderColor="pink.500"
                            bgColor="gray.900"
                            variant="filled"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            size="lg" />
                    </FormControl>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <FormControl>
                        <Input
                            name="password"
                            type="password"
                            focusBorderColor="pink.500"
                            bgColor="gray.900"
                            variant="filled"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            size="lg" />
                    </FormControl>
                </Stack>
                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    size="lg">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}