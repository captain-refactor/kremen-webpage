import { useEffect } from 'react'

function isLocal(h: string): boolean {
  return ['localhost', '127.0.0.1'].includes(h)
}

export function useHttps() {
  const httpsProtocol = 'https:'

  useEffect(() => {
      if (!isLocal(location.hostname)) {
        const isHttp = location.protocol !== httpsProtocol
        if (isHttp) {
          location.protocol = httpsProtocol
        }
      }
    },
    [])
}
