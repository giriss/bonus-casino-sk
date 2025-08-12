import { useEffect, useState } from "react"

export const useDebouncedState = <T>(initialValue: T, delayMs: number) => {
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
    setDebouncedValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => { setDebouncedValue(value) }, delayMs)
    return () => { clearTimeout(timeout) }
  }, [value, delayMs])

  return [debouncedValue, setValue] as const
}
