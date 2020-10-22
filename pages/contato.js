import  React from 'react'
import Link from 'next/link'

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <div>
          <Link href='/sobre'>
            <a>Sobre</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Contato