'use client'

export function Logo() {
  return (
    <div style={{ padding: '4px 0', display: 'flex', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo.svg"
        alt="Garcia Alves Advocacia"
        width={193}
        height={36}
        style={{ display: 'block', width: '193px', height: '36px' }}
      />
    </div>
  )
}

export default Logo
