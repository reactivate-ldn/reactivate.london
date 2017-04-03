import rem from './rem'
import { black } from './colors'

const baseShallowShadow = `0 0 ${rem(24)} ${black.opacity(.22)}`
const baseDiffuseShadow = `0 ${rem(24)} ${rem(24)} ${black.opacity(.3)}`

export const diffuseShadow = `${baseShallowShadow}, ${baseDiffuseShadow}`;
export const shallowShadow = `0 ${rem(3)} ${rem(8)} ${black.opacity(.4).toString()}`;
export const insetShadow = `inset 0 ${rem(17)} ${rem(35)} ${black.opacity(.23).toString()}`;

