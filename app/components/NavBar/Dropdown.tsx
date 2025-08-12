import type { ReactNode } from "react"
import { useDebouncedState } from "~/utils/hooks"

interface DropdownProps {
  title: ReactNode
  children: ReactNode
}

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [open, setOpen] = useDebouncedState(false, 500)

  return (
    <li>
      <details open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <summary>{title}</summary>
        <ul className="bg-base-100 rounded-t-none p-2">
          {children}
        </ul>
      </details>
    </li>
  )
}

interface DropdownItemProps {
  children: ReactNode
}

export const DropdownItem = ({ children }: DropdownItemProps) => {
  return <li><a>{children}</a></li>
}
