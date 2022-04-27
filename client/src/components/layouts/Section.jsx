/* ------------------------------------------------------------------------------------------------ */
/* ---- React Component - Section (Basic Layout Module) ------------------------------------------- */

export function Section({ children, className = '', style }) {
    return (
        <section className={`section` + (className ? ` ${className}` : '')} style={style}>
            {children}
        </section>
    );
}

export default Section;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
