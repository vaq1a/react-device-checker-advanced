import {makeVar, ReactiveVar} from '@apollo/client'

import styles from 'styles/vars/_breakpoints.scss'

const BREAKPOINTS = (
    styles.gridBreakpoints
        .replace(/(px|rem)/igm, '')
        .split(',')
        .map((value: string) => (
            value
                .trim()
                .split(' ')
        ))
        .reverse()
)

const currentBreakpointIndex: ReactiveVar<any> = makeVar(null)

export { BREAKPOINTS, currentBreakpointIndex }
