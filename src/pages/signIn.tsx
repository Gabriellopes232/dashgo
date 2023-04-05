//@ts-nocheck

import { Input } from '@/components/Form/Input';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
    email: string;
    password: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email(),
    password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
    const { register, handleSubmit, formState, errors } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
    }

    return (
        <Flex
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
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
                    <Input name="email" type="email" error={errors.email} label="E-mail" ref={register} />
                    <Input name="password" type="password" label="Senha" error={errors.password} ref={register} />
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