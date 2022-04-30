import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, resetUserAuthState } from '../../features';

import {
    createStyles,
    Anchor,
    Container,
    Title,
    Text,
    TextInput,
    PasswordInput,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Box,
    Modal,
    ScrollArea,
    // TextInputError,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { At, ShieldCheck, Lock, EyeOff, Eye } from 'tabler-icons-react';

import { BackButton, Tooltip, Section, GoogleButton, FacebookButton } from '../../components';

import { validationRules } from '../../utilities';

const useStyles = createStyles((theme) => ({
    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },
    control: {
        [theme.fn.smallerThan('xs')]: {
            maxWidth: '100%',
            width: '100%',
        },
    },
}));

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

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
        dispatch(resetUserAuthState());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const [showModal, setShowModal] = useState(false);

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
        validationRules: {
            ...validationRules,
            firstName: validationRules.name,
            lastName: validationRules.name,
            confirmPassword: (value) => value.length > 0 && value === form.values.password,
        },
    });

    form.HandleErrors = {
        firstName: () => {
            if (form.values.firstName.length === 0) {
                return 'Please enter your first name.';
            }
            if (!validationRules.name(form.values.firstName)) {
                return 'Please enter a valid name.';
            }
        },
        lastName: () => {
            if (form.values.lastName.length === 0) {
                return 'Please enter your last name.';
            }
            if (!validationRules.name(form.values.lastName)) {
                return 'Please enter a valid name.';
            }
        },
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
        confirmPassword: () => {
            if (form.values.confirmPassword.length === 0) {
                return 'Please confirm your password.';
            }
            if (form.values.confirmPassword !== form.values.password) {
                return 'Passwords do not match.';
            }
        },
        terms: () => {
            if (!form.values.terms) {
                return 'You must agree to the terms and conditions.';
            }
        },
    };

    const submitForm = () => {
        dispatch(createUser(form.values));
    };

    return (
        <>
            <Modal
                opened={showModal}
                onClose={() => setShowModal(false)}
                title='Terms and Conditions'
                overflow='inside'
                centered
                size='xl'
            >
                <ScrollArea type='hover' offsetScrollbars scrollbarSize={10} scrollHideDelay={1500}>
                    <div>
                        <Text color='teal' size='lg'>
                            We dont really have a 'Terms and Conditions' page yet, but we do have this fancy
                            pop message...
                        </Text>
                        <br />
                        <br />
                        <Text>
                            By clicking the "Register" button, you agree to the{' '}
                            <Link to='/terms'>Terms and Conditions</Link> and{' '}
                            <Link to='/privacy'>Privacy Policy</Link>. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Voluptas reiciendis quibusdam hic consectetur enim velit
                            voluptate adipisci labore, repudiandae numquam, veniam, sint sequi perspiciatis
                            ratione cumque porro voluptatem eaque excepturi? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Molestiae fugit recusandae distinctio maxime
                            repudiandae nesciunt quis ut consequuntur ea deleniti porro unde nisi placeat,
                            quam a, illum vel non consequatur tempora omnis? Ipsam est fugiat, qui animi
                            mollitia quas beatae aliquam hic sapiente eligendi molestiae ducimus asperiores
                            repellendus voluptas! Possimus rerum consectetur, nobis labore pariatur dicta odit
                            eum! Eveniet vel nulla quos impedit?
                        </Text>
                        <br />
                        <Text>
                            By clicking the "Register" button, you agree to the{' '}
                            <Link to='/terms'>Terms and Conditions</Link> and{' '}
                            <Link to='/privacy'>Privacy Policy</Link>. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Voluptas reiciendis quibusdam hic consectetur enim velit
                            voluptate adipisci labore, repudiandae numquam, veniam, sint sequi perspiciatis
                            ratione cumque porro voluptatem eaque excepturi? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Molestiae fugit recusandae distinctio maxime
                            repudiandae nesciunt quis ut consequuntur ea deleniti porro unde nisi placeat,
                            quam a, illum vel non consequatur tempora omnis? Ipsam est fugiat, qui animi
                            mollitia quas beatae aliquam hic sapiente eligendi molestiae ducimus asperiores
                            repellendus voluptas! Possimus rerum consectetur, nobis labore pariatur dicta odit
                            eum! Eveniet vel nulla quos impedit?
                        </Text>
                        <br />
                        <Text>
                            By clicking the "Register" button, you agree to the{' '}
                            <Link to='/terms'>Terms and Conditions</Link> and{' '}
                            <Link to='/privacy'>Privacy Policy</Link>. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Voluptas reiciendis quibusdam hic consectetur enim velit
                            voluptate adipisci labore, repudiandae numquam, veniam, sint sequi perspiciatis
                            ratione cumque porro voluptatem eaque excepturi? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Molestiae fugit recusandae distinctio maxime
                            repudiandae nesciunt quis ut consequuntur ea deleniti porro unde nisi placeat,
                            quam a, illum vel non consequatur tempora omnis? Ipsam est fugiat, qui animi
                            mollitia quas beatae aliquam hic sapiente eligendi molestiae ducimus asperiores
                            repellendus voluptas! Possimus rerum consectetur, nobis labore pariatur dicta odit
                            eum! Eveniet vel nulla quos impedit?
                        </Text>
                        <br />
                        <Button
                            onClick={() => {
                                setShowModal(false);
                                form.setFieldValue('terms', true);
                            }}
                        >
                            Accept
                        </Button>
                    </div>
                </ScrollArea>
            </Modal>

            <Container sx={{ position: 'absolute', top: '1rem', left: '0' }}>
                <BackButton to='/login' />
            </Container>
            <Section>
                <Title align='center'>Register</Title>
                <Text color='dimmed' size='sm' align='center'>
                    Already have an account?{' '}
                    <Anchor component={Link} to='/login'>
                        Login now
                    </Anchor>
                </Text>
            </Section>
            <Section>
                <Paper radius='md' p='xl'>
                    <Group grow mb='md' mt='md'>
                        <GoogleButton radius='xl'>Google</GoogleButton>
                        <FacebookButton radius='xl'>Facebook</FacebookButton>
                    </Group>
                    <Divider label='Or register with your email' labelPosition='center' my='2rem' />
                    <form onSubmit={form.onSubmit(submitForm)}>
                        <Group direction='column' grow spacing='sm'>
                            <Group
                                direction='row'
                                grow
                                spacing='sm'
                                style={{ alignItems: 'flex-start' }}
                                className={classes.controls}
                            >
                                <TextInput
                                    className={classes.control}
                                    size='md'
                                    label='First name'
                                    placeholder='Your first name'
                                    value={form.values.firstName}
                                    onChange={(e) => form.setFieldValue('firstName', e.currentTarget.value)}
                                    error={form.errors.firstName && form.HandleErrors.firstName()}
                                />
                                <TextInput
                                    className={classes.control}
                                    size='md'
                                    label='Last name'
                                    placeholder='Your last name'
                                    value={form.values.lastName}
                                    onChange={(e) => form.setFieldValue('lastName', e.currentTarget.value)}
                                    error={form.errors.lastName && form.HandleErrors.lastName()}
                                />
                            </Group>
                            <TextInput
                                icon={<At size='0.9em' />}
                                size='md'
                                label='Email'
                                placeholder='Your email'
                                value={form.values.email}
                                onChange={(e) => form.setFieldValue('email', e.currentTarget.value)}
                                error={form.errors.email && form.HandleErrors.email()}
                            />
                            <PasswordInput
                                icon={<Lock size='0.9em' />}
                                size='md'
                                label='Password'
                                placeholder='Password'
                                description='Password must include at least 6 characters, 1 lowercase letter, 1 uppercase letter and 1 number.'
                                value={form.values.password}
                                onChange={(e) => form.setFieldValue('password', e.currentTarget.value)}
                                error={form.errors.password && form.HandleErrors.password()}
                                toggleTabIndex={0}
                                visibilityToggleIcon={({ reveal, size }) => (
                                    <Tooltip
                                        label={`${reveal ? 'Hide' : 'Show'} password`}
                                        position='left'
                                        placement='center'
                                        style={{ opacity: 0.4 }}
                                    >
                                        {reveal ? <EyeOff size={size} /> : <Eye size={size} />}
                                    </Tooltip>
                                )}
                            />
                            <PasswordInput
                                icon={<ShieldCheck size='0.9em' />}
                                size='md'
                                placeholder='Confirm password'
                                value={form.values.confirmPassword}
                                onChange={(e) => form.setFieldValue('confirmPassword', e.currentTarget.value)}
                                error={form.errors.confirmPassword && form.HandleErrors.confirmPassword()}
                                toggleTabIndex={0}
                                visibilityToggleIcon={({ reveal, size }) => (
                                    <Tooltip
                                        label={`${reveal ? 'Hide' : 'Show'} password`}
                                        position='left'
                                        placement='center'
                                        style={{ opacity: 0.4 }}
                                    >
                                        {reveal ? <EyeOff size={size} /> : <Eye size={size} />}
                                    </Tooltip>
                                )}
                            />
                            <Group direction='column' spacing='2xs'>
                                <Checkbox
                                    mt='xl'
                                    label={
                                        <Box>
                                            I agree to the{' '}
                                            <Anchor
                                                onClick={(e) => {
                                                    setShowModal(true);
                                                }}
                                            >
                                                Terms and Conditions
                                            </Anchor>
                                        </Box>
                                    }
                                    aria-label='terms'
                                    checked={form.values.terms}
                                    onChange={() => form.setFieldValue('terms', !form.values.terms)}
                                    error={form.errors.terms && form.HandleErrors.terms()}
                                />
                                {form.errors.terms && (
                                    <Text
                                        color='red'
                                        className='mantine-TextInput-error'
                                        sx={(theme) => ({
                                            fontSize: theme.fontSizes.sm,
                                        })}
                                    >
                                        {form.HandleErrors.terms()}
                                    </Text>
                                )}
                            </Group>
                            <Button fullWidth mt='xl' type='submit'>
                                Create account
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Section>
        </>
    );
};

export default Register;
