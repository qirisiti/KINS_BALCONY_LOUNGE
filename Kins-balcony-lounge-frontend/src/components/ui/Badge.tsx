interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'forest' | 'surface'
  className?: string
}

const VARIANTS = {
  gold: 'bg-gold/15 text-gold border border-gold/30',
  forest: 'bg-forest/20 text-forest-light border border-forest/30',
  surface: 'bg-surface text-muted border border-white/10',
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  return (
    <span className={`inline-block text-[9px] font-sans font-medium uppercase tracking-[0.25em] px-2.5 py-1 ${VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  )
}
