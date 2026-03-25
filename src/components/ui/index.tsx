import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

// ─── Button ───────────────────────────────────────────────────────────────────
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  loading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed',
        {
          'bg-brand-gold text-white hover:bg-brand-gold-dark hover:shadow-lg': variant === 'primary',
          'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white': variant === 'outline',
          'text-brand-gold hover:text-brand-gold-dark underline underline-offset-2': variant === 'ghost',
        },
        {
          'text-xs px-4 py-2': size === 'sm',
          'text-sm px-6 py-3': size === 'md',
          'text-base px-8 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Please wait…
        </>
      ) : (
        children
      )}
    </button>
  )
}

// ─── Badge ────────────────────────────────────────────────────────────────────
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-block bg-brand-gold/10 text-brand-gold border border-brand-gold/30 text-xs font-body font-semibold px-3 py-1 rounded-full tracking-wide uppercase',
        className
      )}
    >
      {children}
    </span>
  )
}

// ─── SectionHeader ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ badge, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-12', align === 'center' ? 'text-center' : 'text-left')}>
      {badge && <Badge className="mb-3">{badge}</Badge>}
      <h2 className="section-heading">{title}</h2>
      <div className={clsx('gold-divider', align === 'left' && 'mx-0')} />
      {subtitle && (
        <p className={clsx('section-subheading', align === 'left' && 'mx-0 text-left')}>{subtitle}</p>
      )}
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('bg-white rounded-sm border border-gray-100 shadow-sm card-hover', className)}>
      {children}
    </div>
  )
}
