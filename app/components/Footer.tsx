import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sections = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Solutions', href: '#', badge: 'New' },
      { label: 'Tutorials', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Releases', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Media kit', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Help centre', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'AngelList', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 md:px-12 xl:px-32 py-12">

      {/* Sección de enlaces */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

        {/* Map de las secciones */}
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col space-y-3">
            <h4 className="font-semibold text-gray-900">{section.title}</h4>
            {section.links.map((link) => (
              <div key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="text-primary font-semibold"
                >
                  {link.label}
                </a>
                {link.badge && (
                  <span className="text-xs text-primary border-2 border-primary px-2 py-0.5 rounded-full font-medium">
                    {link.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Get the app */}
        <div className="flex flex-col space-y-4 items-center">
          <h4 className="font-semibold text-gray-900">Get the app</h4>
          <div className="flex flex-col items-center space-y-2 pt-2">
            <Image src="/app-store.svg" alt="App Store" width={140} height={40} />
            <Image src="/google-play.svg" alt="Google Play" width={140} height={40} />
          </div>
        </div>

      </div>

      {/* Separador */}
      <div className="w-full border-t border-gray-200 my-10"></div>

      {/* Parte inferior: logo + derechos */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={144} height={30} />
          </Link>
        </div>
        <p className="text-gray-500 text-sm">© 2077 Untitled UI. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
