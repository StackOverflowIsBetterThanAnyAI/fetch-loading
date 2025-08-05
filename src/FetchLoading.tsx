import { FC } from 'react'
import './index.css'

type FetchLoadingProps = {
    ariaLabel?: string
    theme?: string
}
type DotProps = {
    delay: number
}

const isValidHex = (color: string): boolean =>
    /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color)

const isValidRGB = (color: string): boolean => {
    return (
        /^rgb\((\s*(2((5[0-5])|([0-4][0-9]))|(1[0-9]{2})|([0-9]?[0-9])),){2}\s*(2((5[0-5])|([0-4][0-9]))|(1[0-9]{2})|([0-9]?[0-9]))\s*\)$/i.test(
            color
        ) ||
        /^rgba\((\s*(2((5[0-5])|([0-4][0-9]))|(1[0-9]{2})|([0-9]?[0-9])),){2}\s*(2((5[0-5])|([0-4][0-9]))|(1[0-9]{2})|([0-9]?[0-9])),\s*(1.0)|(0.[0-9]{1,2})\s*\)$/i.test(
            color
        )
    )
}

const Dot: FC<DotProps & FetchLoadingProps> = ({ delay, theme }) => {
    const background =
        theme && (isValidHex(theme) || isValidRGB(theme)) ? theme : '#52525c'
    return (
        <div
            style={{
                animation: 'fetch-loading 2s ease-in-out infinite',
                animationDelay: `${delay}s`,
                height: '12px',
                width: '12px',
                backgroundColor: background,
            }}
        ></div>
    )
}

export const FetchLoading: FC<FetchLoadingProps> = ({ ariaLabel, theme }) => {
    return (
        <div
            role={ariaLabel ? 'status' : undefined}
            aria-label={ariaLabel}
            aria-live={ariaLabel ? 'polite' : undefined}
            style={{ display: 'flex', gap: '8px', padding: '6px 2px' }}
        >
            <Dot delay={0} theme={theme} />
            <Dot delay={-1.33} theme={theme} />
            <Dot delay={-0.67} theme={theme} />
        </div>
    )
}
