import { PropsWithChildren } from 'react'
import { BREAKPOINTS, currentBreakpointIndex } from "constants/breakpointsInfo"
import { useMediaBreakpoint } from "hooks"

export interface MediaBreakpointProps {
    direction?: 'up' | 'down'
    name?: string
}

const breakpointHandler = () => {
    const newBreakpointIndex = (
        BREAKPOINTS
            .findIndex(([, width]: number[]) => window.innerWidth >= width)
    )

    if (newBreakpointIndex !== currentBreakpointIndex()) {
        currentBreakpointIndex(newBreakpointIndex)
    }
}

breakpointHandler()

const MediaBreakpoint = (
    {
        children,
        direction = 'down',
        name,
    }: PropsWithChildren<MediaBreakpointProps>,
) => {
    const { isBreakpointDown, isBreakpointUp } = useMediaBreakpoint()

    if (!children) {
        return null
    }

    const childrenArgs = { isBreakpointDown, isBreakpointUp }

    if (typeof children === 'function') {
        // @ts-ignore
        return children(childrenArgs)
    }

    if (direction === 'up') {
        return isBreakpointUp(name) ? children : null
    }

    return isBreakpointDown(name) ? children : null
}

export default MediaBreakpoint
