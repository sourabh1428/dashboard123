import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import imgSrc from '../assets/logo.png'
import { useNavigate } from 'react-router'



const NavLink = ({ href, children, mobile }) => (
  <motion.a
    href={href}
    className={`text-muted-foreground hover:text-foreground ${mobile ? 'text-lg py-2' : ''}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const Navbar = () => {
    const navigate=useNavigate();
    


  return (
    <motion.nav 
      className="container mx-auto py-4 px-6 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 h-8 bg-primary rounded-lg" />
        <span className="text-xl font-bold">
      

        </span>
      </motion.div>
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#analytics">Analytics</NavLink>
        <NavLink href="#process">Process</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </div>
    
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <NavLink href="#features" mobile>Features</NavLink>
              <NavLink href="#analytics" mobile>Analytics</NavLink>
              <NavLink href="#process" mobile>Process</NavLink>
              <NavLink href="#pricing" mobile>Pricing</NavLink>
              <Button className="w-full mt-4" onClick={()=>navigate('/lead')}>Sign Up</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export default Navbar

