import React, { FC } from 'react'
import './index.css'

type FetchLoadingProps = {
    theme?: string
}
type DotProps = {
    delay?: number
}

const isValidHex = (color: string): boolean =>
    /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color)

const Dot: FC<DotProps & FetchLoadingProps> = ({ delay = 0, theme }) => {
    const background = theme && isValidHex(theme) ? theme : '#52525c'
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

export const FetchLoading: FC<FetchLoadingProps> = ({ theme }) => {
    return (
        <>
            <div style={{ display: 'flex', gap: '8px', padding: '6px 2px' }}>
                <Dot delay={0} theme={theme} />
                <Dot delay={-1.33} theme={theme} />
                <Dot delay={-0.67} theme={theme} />
            </div>
        </>
    )
}
