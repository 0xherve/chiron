import { createFileRoute } from '@tanstack/react-router'
import ThemeSwitch from '../components/theme-switch'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-primary overflow-hidden">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-8 font-body">
        <span className="text-sm tracking-widest uppercase">Chiron</span>
        <span className="text-sm tracking-wide">Get Started →</span>
      </nav>

      {/* Hero content — pinned bottom-left */}
      <div className="absolute bottom-16 left-10 max-w-2xl">
        <h1 className="font-body text-7xl leading-[0.95] tracking-tight">
          Your writing,<br />
          <em>sharpened.</em>
        </h1>
        <p className="mt-6 font-body text-lg leading-relaxed opacity-60 max-w-md">
          Upload your work. Get structured, rubric-based feedback from AI — then ask it anything.
        </p>
      </div>

      {/* Theme toggle — bottom right */}
      <div className="absolute bottom-16 right-10">
        <ThemeSwitch />
      </div>

      {/* Eraser logo — floating right */}
      <div className="absolute right-20 top-1/2 -translate-y-1/3">
        <img
          src="/favicon.svg"
          alt=""
          className="w-[500px] h-[500px] opacity-10"
        />
      </div>
    </div>
  )
}
