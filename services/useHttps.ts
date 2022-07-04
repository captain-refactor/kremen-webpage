import { useEffect } from 'react'

function isLocal(h: string): boolean {
  return ['localhost', '127.0.0.1'].includes(h)
}

export function useHttps() {
  useEffect(() => {
      if (!isLocal(location.hostname)) {
        const isHttp = location.protocol !== 'https'
        if (isHttp) {
          location.protocol = 'https'
          console.log('redirected to https')
        }
      }
    },
    [])
}
