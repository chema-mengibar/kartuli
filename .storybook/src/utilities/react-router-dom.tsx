console.log('Alias Link')
import React  from 'react'

export interface RedirectProps {
  to: string;
  push?: boolean;
  from?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}

export const Redirect = ({to}:RedirectProps): React.ReactElement=> {
  return( <div>{to}</div>)
};



export interface LinkProps {
  to?: object | string
  children?: any
  id?: string
  className?: any
}

export const Link = ({ children, id, to, className }:LinkProps): React.ReactElement=> {
  return <a className={className} id={id} href={JSON.stringify(to)}>{children}</a>
};


export const useHistory = (): any[] => []

