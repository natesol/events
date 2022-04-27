import { useState, useContext } from 'react';

export function CardSlider({ items }) {
    items = Array(20)
        .fill(0)
        .map((_, i) => i);

    const [selected, setSelected] = useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
        ({ getItemById, scrollToItem }) => {
            const itemSelected = isItemSelected(id);

            setSelected((currentSelected) =>
                itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id)
            );
        };

    return (
        <div>
            <h1>CerdSlider</h1>
        </div>

        // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        //     {items.map((item, i) => (
        //         <Card
        //             key={i}
        //             itemId={i}
        //             title={item}
        //             onClick={handleClick(item)}
        //             selected={isItemSelected(item)}
        //         />
        //     ))}
        // </ScrollMenu>
    );
}

function Arrow({ children, className, disabled, onClick }) {
    return (
        <button className={`arrow ${className}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

function LeftArrow() {
    // const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <Arrow className='arrow-left' /* disabled={isFirstItemVisible} */ /* onClick={() => scrollPrev()} */>
            {/* <IoCaretBack /> */}
        </Arrow>
    );
}

function RightArrow() {
    // const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow className='arrow-right' /* onClick={() => scrollNext()} */>{/* <IoCaretForward /> */}</Arrow>
    );
}

function Card({ onClick, selected, title, itemId }) {
    // const visibility = useContext(VisibilityContext);

    return (
        <div
            // onClick={() => onClick(visibility)}
            style={{
                width: '160px',
            }}
            tabIndex={0}
        >
            <div className='card'>
                <div>{title}</div>
                {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div> */}
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
            <div
                style={{
                    height: '200px',
                }}
            />
        </div>
    );
}

export default CardSlider;
