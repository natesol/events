import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from '@mantine/hooks';
import { showNotification, cleanNotifications } from '@mantine/notifications';
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
} from '@mantine/core';
import { ArrowLeft, At } from 'tabler-icons-react';

import { BackButton, Section } from '../../components';

import { validationRules } from '../../utilities';

const useStyles = createStyles((theme) => ({
    group: {
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    groupItems: {
        [theme.fn.smallerThan('sm')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

export const ResetPassword = () => {
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
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: '',
        },
        validationRules,
    });

    form.HandleErrors = {
        email: () => {
            if (form.values.email.length === 0) {
                return 'Please enter your email.';
            }
            if (!validationRules.email(form.values.email)) {
                return 'Please enter a valid email address.';
            }
        },
    };

    const submitForm = () => {
        showNotification({
            title: 'Submit form notification',
            message: JSON.stringify(form.values),
            color: 'red',
        });
    };

    return (
        <>
            <Container sx={{ position: 'absolute', top: '1rem', left: '0' }}>
                <BackButton />
            </Container>
            <Section>
                <Title align='center'>Forgot your password?</Title>
                <Text color='dimmed' size='sm' align='center'>
                    Enter your email to get a reset link
                </Text>
            </Section>
            <Section>
                <Paper radius='md' p='xl'>
                    <form onSubmit={form.onSubmit(submitForm)}>
                        <TextInput
                            label='Your email'
                            icon={<At />}
                            size='md'
                            placeholder='me@events.com'
                            value={form.values.email}
                            onChange={(e) => form.setFieldValue('email', e.currentTarget.value)}
                            error={form.errors.email && form.HandleErrors.email()}
                        />
                        <Group position='apart' mt='lg' className={classes.group}>
                            <Anchor
                                component={Link}
                                to='/login'
                                className={classes.groupItems}
                                onClick={() => cleanNotifications()}
                            >
                                <Center inline>
                                    <ArrowLeft size={'1.1em'} />
                                    <Box ml={5}>Back to login page</Box>
                                </Center>
                            </Anchor>
                            <Button type='submit' className={classes.groupItems}>
                                Reset password
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Section>
        </>
    );
};

export default ResetPassword;
