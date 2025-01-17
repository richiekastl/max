import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { Button } from '@/components/Button'

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Me" title="Hey there, I'm Max - an User Experience Architect currently creating a cybersecurity platform focused on complex data.">
        <div className="mt-10 max-w-2xl space-y-6">
        <p>
        My full name is actually Max Andrey Gauntner. I'm based in Northeast Ohio where
        the weather is a year-round April Fool's joke. It's really not a joke - it could be
        sunny and 70° one day, and the next, it could be snowing. Ah, fun times. Growing up,
        I've always had a desire to create. When I was young, I loved to draw and was surrounded
        by art. During college, I went to school for business. It wasn't until after college that
        I found a medium I truly fell in love with; design and photography.
        </p>
        <p>
        What I love the most about photography isn't that it's a chance to make art, but that it's 
        a chance to create a memory that will live on for decades. My photography style focuses on 
        bringing out natural earth tones, drawing inspiration from landscapes and urban architecture. 
        Storytelling is a key element in my photos and videos - the moments in between are what matters 
        the most. My design style is modern and clean, just two simple things I like to keep in mind for 
        a realistic and polished user interface. Over the years one thing I learned through my trade as 
        a creative, it's that true purpose fuels passion. I believe whatever you do, you do it to the 
        best of your ability. 
        </p>
        <p>
        In my free time, I spend most of my time with my wife and German Shepherd. Hiking, cooking,
        and traveling are just a few of our favorite things. Currently, I am residing at <a href="https://www.binarydefense.com/" class="text-blue-600">Binary Defense </a>as their UX Architect, focused on building a brand new product with a quick go-to market strategy. 
        Before this role, I was their Senior UI/UX Designer. Want to see some of my design work? <a href="/work" class="text-blue-600">Check out a few case studies</a> I've put together to get a feel of how I work, and my design aesthetic.  
        </p>
        </div>
                  <div className="mt-6 flex">
                  <Button href="/work">
                    View Projects
                  </Button>
                  </div>
      </PageIntro>

      <Container className="sm:mt-40 mt-20">
        <StatList>
          <StatListItem value="8+" label="Years of Design Experience" />
          <StatListItem value="50+" label="Projects Launched" />
          <StatListItem value="110%" label="Commitment to All Projects" />
          <StatListItem value="100%" label="Client Satisfaction" />
        </StatList>
      </Container>

      <ContactSection />
    </>
  )
}
