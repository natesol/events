import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { Heart } from 'tabler-icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles,
    useMantineTheme,
    Avatar,
    AvatarsGroup,
    Spoiler,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
}));

export const EventCard = ({ event, image, title, description, country, badges }) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Card withBorder radius='md' p='md' className={classes.card}>
            <Card.Section>
                <Image src={image} alt={event.name} height={60} width={220} />
            </Card.Section>

            <Card.Section className={classes.section} mt='md'>
                <Group position='apart'>
                    <Text size='md' weight={500}>
                        {event.name}
                    </Text>
                    <Badge>{event.location}</Badge>
                </Group>
                <Spoiler
                    maxHeight={24}
                    mt='xs'
                    showLabel='Show more'
                    hideLabel='Hide'
                    styles={(theme) => ({
                        control: { fontSize: theme.fontSizes.xs },
                    })}
                >
                    <Text size='sm'>{event.description}</Text>
                </Spoiler>
                <AvatarsGroup limit={2} mt='md' total={event.users.length}>
                    <Avatar src='avatar.png' component='a' href='https://github.com/rtivital' />
                    <Avatar src='avatar.png' />
                </AvatarsGroup>
            </Card.Section>

            <Button mt='md' radius='md'>
                Show details
            </Button>
        </Card>
    );
};

export default EventCard;
