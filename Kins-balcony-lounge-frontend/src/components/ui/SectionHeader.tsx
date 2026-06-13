interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className="text-gold text-[10px] uppercase tracking-[0.35em] font-sans font-medium mb-4">
          {label}
        </p>
      )}
      <h2
        className={`font-display font-light leading-none ${light ? 'text-primary' : 'text-cream'}`}
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-sans font-light text-base md:text-lg max-w-xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary/60' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-12 bg-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
