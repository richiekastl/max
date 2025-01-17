import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBemo from '@/images/clients/bemo/logo-light.svg'
import logoDevineChemicals from '@/images/clients/devine-chemicals/logo-light.svg'
import logoDeltaHub from '@/images/clients/deltahub/logo-light.svg'
import logoBambooSoftware from '@/images/clients/bamboo-software/logo-light.svg'
import logoAfcona from '@/images/clients/afcona/logo-light.svg'
import logoPressureComponents from '@/images/clients/pressure-components/logo-light.svg'
import logoBinaryDefense from '@/images/clients/binary-defense/logo-light.svg'
import logoKentState from '@/images/clients/kent-state/logo-light.svg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Binary Defense', logoBinaryDefense],
  ['Devine Chemicals', logoDevineChemicals],
  ['Kent State University', logoKentState],
  ['Afcona Additives', logoAfcona],
  ['Bamboo Software', logoBambooSoftware],
  ['DeltHub', logoDeltaHub],
  ['BEMO', logoBemo],
  ['Pressure Components Inc', logoPressureComponents],
]

function Clients() {
  return (
    <div className="rounded-4xl mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I've worked with numerous brands over 8+ years.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Things I’ve made trying to put my dent in the universe."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Over the years, I have enjoyed working with some fantastic companies, alongside passionate teams, and on some exciting yet unique products. With various requirements, goals, and challenges, no single project has been the same.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Max A Gauntner is a usability advocate and product designer.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            I'm Max, a usability advocate and product designer.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            When I’m not designing or spearheading UI or UX projects, you’ll find me with a camera in my hand, knee-deep in a remodel (ok, waist-deep), or building something new, either with my hands or with my mind.
          </p>
          <div className="mt-6 flex">
          <Button href="/work">
            View Projects
          </Button>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
