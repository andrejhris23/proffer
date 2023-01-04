import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import SidebarItem from './SidebarItem';
import {
  HomeIcon,
  XMarkIcon,
  Cog6ToothIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react';

const agentRoutes = [
  { name: 'Home', href: '/home', Icon: HomeIcon },
  { name: 'My Offers', href: '/offers', Icon: BriefcaseIcon },
  { name: 'Settings', href: '/settings', Icon: Cog6ToothIcon }
]

const talentRoutes = [
  { name: 'Home', href: '/home', Icon: HomeIcon },

];

type Props = {
  mobileMenuOpen: boolean,
  setMobileMenuOpen: (status: boolean) => void
}

// TODO: this sidebar should accept navItems as props and loop over them creating a SidebarItem reusable component
const Sidebar = ({mobileMenuOpen, setMobileMenuOpen}: Props) => {
  const { data: session } = useSession();
  let routes: typeof agentRoutes = [];
  if(session?.user?.role === 'AGENT') {
    routes = agentRoutes;
  } 
  if(session?.user?.role === 'TALENT') {
    routes = talentRoutes;
  }

  return (
    <>
      {/* Narrow sidebar */}
      <div className="hidden w-28 overflow-y-auto bg-gray-800 md:block">
        <div className="flex w-full flex-col items-center py-6">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </div>
          <div className="mt-6 w-full flex-1 space-y-1 px-2">
            {routes.map((item) => (
              <SidebarItem item={item} mobile={false} key={item.name}/>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                  <nav className="flex h-full flex-col">
                    <div className="space-y-1">
                      {routes.map((item) => (
                        <SidebarItem item={item} mobile={true} key={item.name}/>
                      ))}
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Sidebar;