import React from 'react'
import Link from 'next/link'

const Index = () => {
return (
<div>
<h1>Olá Projeto Palpite Box</h1>
<div>
<Link href='/sobre'>
<a>Sobre</a>
</Link>
<div>
  <Link href='/contato'>
    <a>Contato</a>
  </Link>
  <div>
    <Link href='/pesquisa'>
      <a>Pesquisa</a>
    </Link>
  </div>
</div>
</div>
</div>

)
}

export default Index