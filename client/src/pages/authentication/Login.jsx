import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, authReset } from '../../features';

import { useForm } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import {
    useMantineTheme,
    Title,
    Text,
    TextInput,
    PasswordInput,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
} from '@mantine/core';
import { IconAt, IconLock, IconEyeOff, IconEye } from '@tabler/icons';

import { Tooltip, Section, GoogleButton, FacebookButton } from '../../components';

import { validationRules } from './_utilities';

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

    const theme = useMantineTheme();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            remember: true,
        },
        // validationRules,
    });

    form.HandleErrors = {
        email: () => {
            if (form.values.email.length === 0) {
                return 'Please enter an email.';
            }
            if (!validationRules.email(form.values.email)) {
                return 'Please enter a valid email address.';
            }
        },
        password: () => {
            if (form.values.password.length === 0) {
                return 'Please enter a password.';
            }
            if (form.values.password.length < 6) {
                return 'Password must be at least 6 characters.';
            }
            if (!/[0-9]/.test(form.values.password)) {
                return 'Password must contain at least 1 number.';
            }
            if (!/[a-z]/.test(form.values.password)) {
                return 'Password must contain at least 1 lowercase letter.';
            }
            if (!/[A-Z]/.test(form.values.password)) {
                return 'Password must contain at least 1 uppercase letter.';
            }
        },
    };

    const submitForm = () => {
        dispatch(login(form.values));
    };

    useEffect(() => {
        if (isError) {
            showNotification({
                title: 'Something went wrong',
                message,
                color: 'red',
            });
        } else if (isSuccess || user) {
            navigate('/');
        }
        dispatch(authReset());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    return (
        <>
            <Section>
                <Title align='center' styles={{ boxShadow: theme.other.glows.sm }}>
                    Login
                </Title>
                <Text color='dimmed' size='sm' align='center'>
                    Do not have an account yet?{' '}
                    <Anchor component={Link} to='/register' size='sm'>
                        Create new account
                    </Anchor>
                </Text>
            </Section>
            <Section>
                <Paper radius='md' p='xl'>
                    <form onSubmit={form.onSubmit(submitForm)}>
                        <Group direction='column' grow spacing='xs'>
                            <TextInput
                                icon={<IconAt size='0.9em' />}
                                size='md'
                                placeholder='Email'
                                value={form.values.email}
                                onChange={(e) => form.setFieldValue('email', e.currentTarget.value)}
                                error={form.errors.email && form.HandleErrors.email()}
                            />
                            <PasswordInput
                                icon={<IconLock size='0.9em' />}
                                size='md'
                                placeholder='Password'
                                value={form.values.password}
                                onChange={(e) => form.setFieldValue('password', e.currentTarget.value)}
                                error={form.errors.password && form.HandleErrors.password()}
                                toggleTabIndex={0}
                                visibilityToggleIcon={({ reveal, size }) => (
                                    <Tooltip
                                        label={`${reveal ? 'Hide' : 'Show'} password`}
                                        position='left'
                                        placement='center'
                                        sx={{ opacity: 0.4 }}
                                    >
                                        {reveal ? <IconEyeOff size={size} /> : <IconEye size={size} />}
                                    </Tooltip>
                                )}
                            />
                            <Group position='apart' mt='md'>
                                <Checkbox
                                    label='Remember me'
                                    aria-label='Remember me'
                                    checked={form.values.remember}
                                    onChange={() => form.setFieldValue('remember', !form.values.remember)}
                                />
                                <Anchor
                                    component={Link}
                                    to='/reset-password'
                                    sx={{ fontSize: theme.fontSizes.sm }}
                                >
                                    Forgot password?
                                </Anchor>
                            </Group>
                            <Button fullWidth mt='xl' type='submit'>
                                Log in
                            </Button>
                        </Group>
                    </form>

                    <Divider label='Or continue with ' labelPosition='center' my='2rem' />

                    <Group grow mb='md' mt='md'>
                        <GoogleButton radius='xl'>Google</GoogleButton>
                        <FacebookButton radius='xl'>Facebook</FacebookButton>
                    </Group>
                </Paper>
            </Section>
        </>
    );
}

export default Login;
