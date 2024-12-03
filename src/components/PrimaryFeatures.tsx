
'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-50%] translate-y-[-50%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Real Estate Analysis Simplified
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            DSPN collects data on real estate types from single-family to commercial.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              height: 0,
              paddingTop: '62.5%', // Updated aspect ratio
              overflow: 'hidden',
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              borderRadius: '8px',
              marginTop: '1.6em',
              marginBottom: '0.9em',
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              src="https://www.canva.com/design/DAGJq3wlCm0/xKMePCDn0dJ_RYf2S2BsuA/view?embed"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-4 text-center text-blue-100">
          <a
            href="https://www.canva.com/design/DAGJq3wlCm0/xKMePCDn0dJ_RYf2S2BsuA/view?utm_content=DAGJq3wlCm0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            DSPN FEATURES
          </a>
        </p>
      </Container>
    </section>
  )
}
