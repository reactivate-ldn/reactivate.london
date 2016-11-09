import rem from './rem'
import { black } from './colors'

const baseShallowShadow = `0 0 ${rem(24)} ${black.opacity(.22)}`
const baseDiffuseShadow = `0 ${rem(24)} ${rem(24)} ${black.opacity(.3)}`

export const diffuseShadow = `${baseShallowShadow}, ${baseDiffuseShadow}`;
export const shallowShadow = `0 ${rem(2)} ${rem(4)} ${black.opacity(.4)}`;

