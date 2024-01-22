import PageTransition from '@/src/components/PageTransition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Foto1 from '../public/images/Profile.svg'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Contact(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <div className="h-full mt-8 sm:mt-16 md:mt-24 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <PageTransition ref={ref}>
        <div className="flex items-center justify-start w-full gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl ">
            <span className="text-primary font-semibold">#</span>Contatos{' '}
          </h1>
          <div className="w-full h-px bg-primary" />
        </div>
        <div className="flex max-lg:flex-col max-lg:text-center justify-between items-center pt-16">
          <div className="md:w-2/5">
            <p>
              Estou interessado em oportunidades como freelancer. No entanto, se
              tiver outra solicitação ou pergunta, não hesite em entrar em
              contato comigo.
            </p>

            <br />
            <div className="border-2 border-secondary p-4 ">
              <p>Me chame por aqui!</p>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="mailto:kleberson55@hotmail.com"
                  target="_blank"
                  className="text-secondary hover:text-white flex"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="pr-2"
                  />
                  kleberson55@hotmail.com
                </a>

                <a
                  href="https://wa.me/5534991336956"
                  target="_blank"
                  className="text-secondary hover:text-white flex"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="xl"
                    className="pr-2"
                  />
                  (34)99133-6956
                </a>

                <p className="text-secondary hover:text-white flex">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size="xl"
                    className="pr-2"
                  />
                  kleberson#3293
                </p>
                <a
                  href="https://www.instagram.com/kleberson.14/"
                  target="_blank"
                  className="text-secondary hover:text-white flex"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="pr-2"
                  />
                  @kleberson.14
                </a>
              </div>
            </div>
          </div>
          <div className="max-lg:pt-6">
            <Image src={Foto1} alt="Foto de perfil" />
            <div className="w-full h-px bg-primary" />
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
