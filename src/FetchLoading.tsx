import { CSSProperties, FC, HTMLAttributes } from 'react'

export type FetchLoadingProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    'children'
> & {
    ariaLabel?: string
    center?: boolean
    size?: number | string
    theme?: string
}

// :where() keeps the specificity at zero, so any className or style passed
// by the consumer always wins over the defaults below.
const styles = `
:where(.fetch-loading) {
    --fl-size: var(--fetch-loading-size, 12px);
    display: flex;
    gap: calc(var(--fl-size) * 2 / 3);
    padding: calc(var(--fl-size) / 2) calc(var(--fl-size) / 6);
}
:where(.fetch-loading--center) {
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    justify-content: center;
    width: 100%;
}
:where(.fetch-loading__dot) {
    animation: fetch-loading 2s ease-in-out infinite;
    background-color: var(--fetch-loading-color, #52525c);
    flex-shrink: 0;
    height: var(--fl-size);
    width: var(--fl-size);
}
:where(.fetch-loading__dot:nth-of-type(2)) {
    animation-delay: -1.33s;
}
:where(.fetch-loading__dot:nth-of-type(3)) {
    animation-delay: -0.67s;
}
@keyframes fetch-loading {
    0% {
        opacity: 0;
        scale: 0.5;
        border-radius: 0%;
        transform: translate(0px);
    }
    33% {
        opacity: 1;
        scale: 1;
        border-radius: 80%;
        transform: translate(0px, calc(var(--fl-size) / -2));
    }
    60% {
        opacity: 1;
        scale: 1;
        border-radius: 80% 80% 60% 60%;
        transform: translate(0px, calc(var(--fl-size) / 3));
    }
    100% {
        opacity: 0;
        scale: 0.5;
        border-radius: 0%;
        transform: translate(0px, calc(var(--fl-size) / -6));
    }
}
@keyframes fetch-loading-reduced {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; border-radius: 80%; }
}
@media (prefers-reduced-motion: reduce) {
    :where(.fetch-loading__dot) {
        animation-name: fetch-loading-reduced;
    }
}
`

const toCSSLength = (value: number | string): string =>
    typeof value === 'number' ? `${value}px` : value

export const FetchLoading: FC<FetchLoadingProps> = ({
    ariaLabel,
    center,
    className,
    size,
    style,
    theme,
    ...rest
}) => {
    const customProperties: Record<string, string> = {}
    if (theme) customProperties['--fetch-loading-color'] = theme
    if (size !== undefined)
        customProperties['--fetch-loading-size'] = toCSSLength(size)

    const classNames = ['fetch-loading', center && 'fetch-loading--center', className]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            role={ariaLabel ? 'status' : undefined}
            aria-label={ariaLabel}
            aria-live={ariaLabel ? 'polite' : undefined}
            {...rest}
            className={classNames}
            style={{ ...(customProperties as CSSProperties), ...style }}
        >
            <style>{styles}</style>
            <div className="fetch-loading__dot" />
            <div className="fetch-loading__dot" />
            <div className="fetch-loading__dot" />
        </div>
    )
}
