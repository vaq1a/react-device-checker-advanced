import { useReactiveVar } from '@apollo/client'
import { useMemo } from 'react'
import { BREAKPOINTS, currentBreakpointIndex } from "constants/breakpointsInfo";

const BREAKPOINTS_NAMES = BREAKPOINTS.map(([name]: string[]) => name)

export const isBreakpointDownNonReactive = (name: string) => {
    const breakpointIndex: number | string = currentBreakpointIndex()

    return BREAKPOINTS_NAMES.indexOf(name) < breakpointIndex
}

export const isBreakpointUpNonReactive = (name: string) => {
    const breakpointIndex: number | string = currentBreakpointIndex()

    return BREAKPOINTS_NAMES.indexOf(name) >= breakpointIndex
}

const useMediaBreakpoint = () => {
    const breakpointIndex: number | string = useReactiveVar(currentBreakpointIndex)

    return useMemo(() => ({
        currentBreakpoint: BREAKPOINTS?.[breakpointIndex],
        isBreakpointDown: (name: string | undefined) => BREAKPOINTS_NAMES.indexOf(name) < breakpointIndex,
        isBreakpointUp: (name: string | undefined) => BREAKPOINTS_NAMES.indexOf(name) >= breakpointIndex,
    }), [breakpointIndex])
}

export { useMediaBreakpoint }
