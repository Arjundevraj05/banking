'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar bg-[#F4F6FC] shadow-lg h-full w-[260px] py-6 px-4">
      <nav className="flex flex-col gap-6">
        {/* Logo Section */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="BankEase logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-[24px]  font-ibm-plex-serif font-bold text-black-1">BankEase</h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300', 
                {
                  'bg-[#3A3D97] text-white': isActive, // Active link
                  'hover:bg-[#EDEEF7]': !isActive // Hover background effect
                }
              )}
            >
              {/* Icon */}
              <div className="relative w-6 h-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn('transition-all duration-300', {
                    'invert-0': isActive, // Active icon brightness
                    'opacity-60': !isActive // Inactive icon opacity
                  })}
                />
              </div>
              {/* Label */}
              <p className={cn(
                "text-[16px] font-semibold transition-all duration-300", 
                {
                  "text-white": isActive, // White text when active
                  "text-[#2E2E5F]": !isActive // Darker text for inactive state
                }
              )}>
                {item.label}
              </p>
            </Link>
          )
        })}

        {/* Plaid Link */}
        <PlaidLink user={user} />
      </nav>

      {/* Footer */}
      <Footer user={user} className="mt-8" />
    </section>
  )
}

export default Sidebar;
