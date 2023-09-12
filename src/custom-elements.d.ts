// custom-elements.d.ts
import * as React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> {
    config_id?: string
    onlogin?: () => void
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'fb:login-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  }
}
