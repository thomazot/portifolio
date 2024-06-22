'use client'

import { createContext, useContext, useState } from 'react'

type MainContextType = {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MainContext = createContext<MainContextType>({
  openMenu: false,
  setOpenMenu: () => false
})

type MainProviderProps = {
  children: React.ReactNode
}

export const MainProvider = ({ children }: MainProviderProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <MainContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MainContext.Provider>
  )
}

export const useMain = () => {
  const context = useContext(MainContext)
  if (!context) throw new Error('usMain must be used within a MainProvider')
  return context
}
