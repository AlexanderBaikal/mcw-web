import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean
  big?: boolean
  fontBig?: boolean
  children: React.ReactNode
}

export function Button({
  primary = false,
  big = false,
  fontBig = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'self-center whitespace-nowrap rounded border border-primary font-sans outline-none transition-all duration-300 ease-out',
        primary
          ? 'bg-black text-white shadow-lg hover:border-white hover:bg-white hover:text-primary hover:shadow-xl hover:scale-105'
          : 'bg-white text-primary shadow-md hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:scale-105',
        big ? 'px-16 py-4' : 'px-5 py-2.5',
        fontBig ? 'text-xl' : 'text-base',
        'no-underline active:scale-95',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
