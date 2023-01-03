import { ReactNode, useState } from 'react'
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

const Layout = ({children} : {children: ReactNode}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      {/* Content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header setMobileMenuOpen={setMobileMenuOpen}/>
        {/* Main content */}
        <div className="flex flex-1 items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout;