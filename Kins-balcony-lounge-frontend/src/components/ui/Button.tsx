import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const BASE = 'inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-200 cursor-pointer'

const VARIANTS = {
  primary: 'bg-gold text-primary hover:bg-gold-light active:scale-[0.98]',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-primary active:scale-[0.98]',
  ghost: 'text-gold hover:text-gold-light active:scale-[0.98]',
}

const SIZES = {
  sm: 'text-[10px] px-4 py-2',
  md: 'text-[11px] px-6 py-3',
  lg: 'text-[11px] px-8 py-4',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
