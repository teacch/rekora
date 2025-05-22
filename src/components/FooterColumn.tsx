import { Link } from "react-router-dom"

interface FooterLink {
  label: string
  href: string
  badge?: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-medium text-rekora-light-blue mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.href} className="text-white hover:text-rekora-light-blue transition-colors">
              {link.label} {link.badge && <span className="text-rekora-light-blue text-sm">({link.badge})</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
