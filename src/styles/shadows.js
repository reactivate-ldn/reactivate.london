import rem from './rem'
import { black } from './colors'

const shadowColor = black.opacity(0.35)

export const defaultShadow = `0 ${rem(35)} ${rem(60)} ${shadowColor}`
export const smallShadow = `0 ${rem(5)} ${rem(15)} ${shadowColor}`

