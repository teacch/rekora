import { FooterColumn } from "./FooterColumn"

export default function FooterNavigation() {
  const navigationData = [
    {
      title: "PROGRAMS",
      links: [
        { label: "Science Workshops", href: "/" },
        { label: "Robotics & Coding", href: "/" },
        { label: "Summer Camps", href: "/talent-pool", badge: "coming soon" },
        { label: "School Clubs", href: "/talent-pool", badge: "coming soon" },

      ],
    },
    {
      title: "COMMUNITY",
      links: [
        { label: "Our Impact", href: "/become-mentor" },
        { label: "Success Stories", href: "/inner-circle" },
         { label: "Blog", href: "/become-mentor", badge: "coming soon" },
        { label: "Partnerships", href: "/become-mentor" },
        { label: "Volunteer", href: "/inner-circle" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Contact Us", href: "/events" },
        { label: "FAQs", href: "/volunteering", badge: "coming soon"  },
                { label: "Privacy Policy", href: "/volunteering" },
        { label: "Terms of Service", href: "/volunteering" },

      ],
    },

    {
      title: "COMPANY",
      links: [
        { label: "About Rekora", href: "/about" },
        { label: "Our Team", href: "/contact" },
         { label: "Careers", href: "/about", badge: "coming soon"  },
        { label: "Press", href: "/contact" },
         { label: "Donate", href: "/about" },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {navigationData.map((column) => (
        <FooterColumn key={column.title} title={column.title} links={column.links} />
      ))}
    </div>
  )
}
