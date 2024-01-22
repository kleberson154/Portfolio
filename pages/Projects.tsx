import PageTransition from '@/src/components/PageTransition'
import { Work } from '../src/data/WorkData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Glider from 'react-glider'
import 'glider-js/glider.min.css'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Projects(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <div className="h-full mt-8 sm:mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageTransition ref={ref}>
        <div>
          <div className="flex items-center justify-start w-full gap-4">
            <h1 className="text-3xl">
              <span className="text-primary font-semibold">#</span>Projects{' '}
            </h1>
            <div className="w-4/6 sm:w-5/6 h-px bg-primary" />
          </div>
          <div className="mt-16 h-100">
            <Glider
              draggable
              hasArrows
              hasDots
              slidesToShow={'auto'}
              slidesToScroll={1}
              itemWidth={350}
            >
              {Work.reverse().map(works => (
                <div
                  key={works.id}
                  className=" h-96 w-80 flex flex-col max-md:justify-between items-center border-2 border-white mx-8 p-6 rounded-xl gap-4"
                >
                  <Image
                    src={works.image}
                    alt={works.name}
                    width={500}
                    height={500}
                    className="h-40"
                  />
                  <h1 className="text-2xl">{works.name}</h1>
                  <div className="flex flex-wrap justify-start gap-2">
                    {works.tags.map(tag => (
                      <div className="flex  px-2 text-sm bg-primary text-white  rounded-lg hover:bg-white hover:text-black transition">
                        <span className="text-background">#</span>
                        <p className="">{tag}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full justify-between gap-2">
                    <button className="w-1/2 py-2  bg-white text-black rounded-lg hover:bg-primary hover:text-white transition">
                      <a href={works.demo} target="_blank">
                        <FontAwesomeIcon icon={faHouse} />
                        Demo
                      </a>
                    </button>
                    <button className="w-1/2 py-2  bg-white text-black rounded-lg hover:bg-primary hover:text-white transition">
                      <a href={works.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </Glider>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
