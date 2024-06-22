import React, { useEffect } from 'react'

export function useOutsideClick(callback: () => void) {
  const refElement = React.useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        refElement.current &&
        !refElement.current.contains(event.target as Node)
      ) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [refElement, callback])

  return refElement
}
