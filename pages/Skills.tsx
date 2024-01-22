import PageTransition from '@/src/components/PageTransition'
import Image from 'next/image'
import Decoration from '../public/images/decoration.svg'
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Skills(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <div className="h-full mt-8 sm:mt-16 md:mt-24 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <PageTransition ref={ref}>
        <div className="flex items-center justify-start w-full gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl ">
            <span className="text-primary">#</span>Habilidades{' '}
          </h1>
          <div className="w-full sm:w-5/6 h-px bg-primary" />
        </div>
        <div className="flex max-md:flex-col-reverse  max-md:items-center md:justify-between md:items-start pt-4 sm:pt-16">
          <Image src={Decoration} alt="Decoracao de quadrados" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:pl-6 max-md:py-8  gap-2">
            <div className="border-secondary border-2 ">
              <h2 className="p-2 w-56 font-semibold">Linguagem</h2>
              <div className="w-full h-0.5 bg-secondary" />
              <p className="text-secondary p-2">
                TypeScript JavasScript <br />
                Java
              </p>
            </div>
            <div className="border-secondary border-2 ">
              <h2 className="p-2 w-56 font-semibold">Banco de Dados</h2>
              <div className="w-full h-0.5 bg-secondary" />
              <p className="text-secondary p-2">
                SQL PostgreSQL <br />
                MongoDB NodeJS
              </p>
            </div>
            <div className="border-secondary border-2 ">
              <h2 className="p-2 w-56 font-semibold">Ferramentas</h2>
              <div className="w-full h-0.5 bg-secondary" />
              <p className="text-secondary p-2">
                VSCode Linux Figma
                <br />
                Font-Awesome Git <br /> React-Icons
              </p>
            </div>
            <div className="max-lg:order-6 "></div>
            <div className="border-secondary border-2 ">
              <h2 className="p-2 w-56 font-semibold">Outros</h2>
              <div className="w-full h-0.5 bg-secondary" />
              <p className="text-secondary p-2">
                HTML CSS Sass REST
                <br /> BootStrap Tailwild <br /> Styled-Components
              </p>
            </div>
            <div className="border-secondary border-2 ">
              <h2 className="p-2 w-56 font-semibold">Frameworks</h2>
              <div className="w-full h-0.5 bg-secondary" />
              <p className="text-secondary p-2">
                React NextJS
                <br /> ExpressJS
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
