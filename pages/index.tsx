import PageTransition from '@/src/components/PageTransition'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Foto1 from '../public/images/Profile.svg'
import TypeIt from 'typeit-react'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Home(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
      <Head>
        <title>Kleberson A.</title>
        <meta
          name="description"
          content="Portfolio created by kleberson Andrade - Developer Full-Stack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-8 sm:mt-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <PageTransition ref={ref}>
          <div
            id="home"
            className="flex justify-between   max-xl:flex-col max-xl:items-center"
          >
            <div className="flex flex-col justify-center items-start ">
              <h1 className="font-semibold text-4xl ">
                Kleberson é um{' '}
                <span className="text-primary">Web Designer</span> e{' '}
              </h1>
              <h1 className="font-semibold text-4xl text-primary mb-8">
                Desenvolvedor <br className="sm:hidden" />
                <TypeIt
                  options={{ loop: true }}
                  getBeforeInit={instance => {
                    instance
                      .type('Front-End!')
                      .pause(1200)
                      .delete(10)
                      .pause(500)
                      .type('Back-End!')
                      .pause(1200)
                      .delete(9)
                      .pause(500)
                      .type('Full-Stack!')
                      .pause(1200)

                    // Remember to return it!
                    return instance
                  }}
                ></TypeIt>
              </h1>
              <p className="text-secondary mb-6">
                Ele cria sites responsivos onde as tecnologias se <br />
                encontram com a criatividade
              </p>
              <button className="border-2 border-primary px-4 py-2 hover:bg-primary">
                Entre em Contato!
              </button>
            </div>
            <div className="flex flex-col items-center max-sm:mx-8 max-xl:mt-8">
              <Image src={Foto1} alt="Foto de perfil" />
              <div className="border-2 border-secondary w-fit max-sm:w-full  flex items-center relative right-0.5">
                <div className="bg-primary m-2 w-4 h-4"></div>
                <p className="mr-2  sm:pr-5">
                  <span className="text-secondary">
                    Atualmente trabalhando no
                  </span>{' '}
                  portfólio
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 max-xl:my-8">
            <div className=" w-fit">
              <fieldset className="border-2 border-secondary p-3">
                <legend className="ml-4 px-3 ">
                  <cite className="text-2xl">- Dr. Who</cite>
                </legend>
                <q className="text-center text-xl">
                  Com grande potência vem uma grande conta de eletricidade
                </q>
              </fieldset>
            </div>
          </div>
        </PageTransition>
      </main>
    </>
  )
}
