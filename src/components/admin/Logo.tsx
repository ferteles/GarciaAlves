'use client'

export function Logo() {
  return (
    <div style={{ padding: '4px 0', display: 'flex', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo.svg"
        alt="Garcia Alves Advocacia"
        style={{ height: '36px', width: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Logo
