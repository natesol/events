import { LoadingOverlay, Loader as Spinner } from '@mantine/core';

export const Loader = ({ fullPage, visible, ...props }) => {
    return (
        <>
            {fullPage ? (
                <div className='loader' {...props}>
                    <LoadingOverlay
                        transitionDuration={120}
                        visible={visible}
                        loaderProps={{ height: '6rem', width: '6rem' }}
                    />
                </div>
            ) : (
                <div className='loader' {...props}>
                    <Spinner transitionDuration={100} visible={visible} height='6rem' width='6rem' />
                </div>
            )}
        </>
    );
};

export default Spinner;
