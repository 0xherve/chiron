import { Switch } from '@base-ui-components/react/switch'

export default function BaseSwitch({
  children,
  ...props
}: React.ComponentProps<typeof Switch.Root> & { children?: React.ReactNode }) {
  return (
    <Switch.Root
      {...props}
      className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-primary/20 bg-primary/10"
    >
      <Switch.Thumb className="pointer-events-none flex items-center justify-center h-5 w-5 translate-x-0.5 rounded-full bg-primary shadow-sm transition-transform data-[checked]:translate-x-[22px]">
        {children}
      </Switch.Thumb>
    </Switch.Root>
  )
}
