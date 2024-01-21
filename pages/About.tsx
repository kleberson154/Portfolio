import PageTransition from '@/src/components/PageTransition'
import Image from 'next/image'
import Foto2 from '../public/images/About.svg'
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function About(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <div className="mt-8 sm:mt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <PageTransition ref={ref}>
        <div className="flex items-center justify-start w-full gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl w-48">
            <span className="text-primary">#</span>Sobre Mim{' '}
          </h1>
          <div className="w-full sm:w-5/6 h-px bg-primary" />
        </div>

        <p className="mt-4">Quem sou eu?</p>
        <div className="flex flex-col md:flex-row justify-between items-center text-wrap">
          <p className="md:w-1/2">
            Olá, Eu sou Kleberson!
            <br />
            <br /> Sou um desenvolvedor full-stack autodidata que mora em
            Uberlândia, Minas Gerais. Posso desenvolver sites responsivos do
            zero e transformá-los em experiências modernas e fáceis de usar na
            Web com bancos de dados organizados e de alta performance.
            <br />
            <br />
            Criar sites do zero com meu conhecimento em Programação tem sido
            minha paixão há mais de um ano. Sempre me esforço para aprender
            sobre as mais novas tecnologias e estruturas da programação.
          </p>
          <Image src={Foto2} alt="Foto de perfil" />
        </div>
      </PageTransition>
    </div>
  )
}
