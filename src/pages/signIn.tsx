//@ts-nocheck

import { Input } from '@/components/Form/Input';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
    email: string;
    password: string;
}

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm();

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
    }

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
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}>
                <Stack spacing="4">
                    <Input name="email" type="email" label="E-mail" ref={register} />
                    <Input name="password" type="password" label="Senha" ref={register} />
                </Stack>
                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    size="lg"
                    isLoading={formState.isSubmitting}>
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}