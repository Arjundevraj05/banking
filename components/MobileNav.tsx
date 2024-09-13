'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        {/* Set the background color to a very light contrasting color */}
        <SheetContent side="left" className="border-none bg-[#F4F6FC] shadow-xl">
          <Link href="/" className="cursor-pointer flex items-center gap-2 px-4 py-4">
            <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="BankEase logo"
            />
            <h1 className="text-[26px] font-ibm-plex-serif font-bold text-[#3A3D97]">
              BankEase
            </h1>
          </Link>
          <div className="mobilenav-sheet mt-8">
            <SheetClose asChild>
              <nav className="flex flex-col gap-6 pt-6">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link href={item.route} key={item.label}
                        className={cn(
                          'mobilenav-sheet_close w-full px-4 py-3 rounded-md transition-all duration-300', 
                          { 
                            'bg-[#3A3D97] text-white': isActive, // Active state
                            'hover:bg-[#6A6EB0] hover:text-white': !isActive // Hover effect with text turning white
                          }
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Image 
                            src={item.imgURL}
                            alt={item.label}
                            width={24}
                            height={24}
                            className={cn('transition-all duration-300', {
                              'invert-0': isActive,
                              'opacity-60': !isActive,
                            })}
                          />
                          {/* Text color set to white on hover */}
                          <p className={cn(
                              "text-[16px] font-semibold transition-all duration-300", 
                              { 
                                "text-white": isActive || 'hover:text-white', // White text when active or hovering
                                "text-[#3A3D97]": !isActive
                              }
                            )}
                          >
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    </SheetClose>
                  )
                })}

                <div className="mt-4 px-4 text-sm text-[#6A6EB0] font-semibold">
                  USER
                </div>
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" className="mt-8" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
