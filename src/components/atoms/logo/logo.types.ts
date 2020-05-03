export enum LogoSizes {
  small = 100,
  medium = 200,
  big = 300,
}

export interface LogoProps {
  color?: string
  size?: LogoSizes
  negative?: boolean
}