import { useState, useEffect } from 'react'
import { IconSun, IconMoon } from '@tabler/icons-react'
import BaseSwitch from './ui/switch'

function getInitialDark() {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return matchMedia('(prefers-color-scheme:dark)').matches
}

export default function ThemeSwitch() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <BaseSwitch checked={dark} onCheckedChange={setDark}>
      {dark ? (
        <IconMoon size={12} className="text-background" />
      ) : (
        <IconSun size={12} className="text-background" />
      )}
    </BaseSwitch>
  )
}
