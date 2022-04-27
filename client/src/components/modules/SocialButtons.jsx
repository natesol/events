import React from 'react';

import { Button } from '@mantine/core';

export function GoogleButton(props) {
    const icon = (
        <svg
            aria-hidden='true'
            focusable='false'
            className='svg-inline-google'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 256 262'
            width={'1em'}
            height={'1em'}
        >
            <path
                fill='#4285F4'
                d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
            />
            <path
                fill='#34A853'
                d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
            />
            <path
                fill='#FBBC05'
                d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
            />
            <path
                fill='#EB4335'
                d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
            />
        </svg>
    );

    return <Button leftIcon={icon} variant='default' color='gray' {...props} />;
}

export function FacebookButton(props) {
    const icon = (
        <svg
            aria-hidden='true'
            focusable='false'
            className='svg-inline-facebook'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            width={'1em'}
            height={'1em'}
            {...props}
        >
            <path
                fill='#1778F2'
                d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z'
            />
        </svg>
    );
    return <Button leftIcon={icon} variant='default' color='gray' {...props} />;
}

export function TwitterButton(props) {
    const icon = (
        <svg
            aria-hidden='true'
            focusable='false'
            className='svg-inline-twitter'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 209'
            width={'1em'}
            height={'1em'}
            {...props}
        >
            <path
                fill='#00ACEE'
                fillRule='nonzero'
                d='M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45'
            />
        </svg>
    );
    return <Button leftIcon={icon} variant='default' color='gray' {...props} />;
}
