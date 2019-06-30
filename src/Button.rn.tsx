import React from 'react'
import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native'

export interface ButtonProps
  extends Pick<RNButtonProps, Exclude<keyof RNButtonProps, 'title'>> {
  children: string
}

export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, ...rest } = this.props

    return <RNButton title={children} {...rest} />
  }
}
