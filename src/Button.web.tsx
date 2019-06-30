import React from 'react'
import clsx from 'clsx'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => (
  <button className={clsx('btn', className)} {...rest} />
)
