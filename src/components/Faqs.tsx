import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What type of coverage does PropNews have',
      answer:
        'We cover every type of transaction in 10 major US counties.',
    },
    {
      question: 'When will PropNews integrate securities information',
      answer: 'We plan to integrate securities info like REITs May 20XX ',
    },
  ],
  [
    {
      question: 'When will PropNews cover property laws?',
      answer:
        'We plan to cover property legislation May 20XX',
    },
    {
      question:
        'How does PropNews get its information? ',
      answer:
        'We leverage key data providers such as NASDAQ, REDFIN, etc',
    },
  ],
  [
    {
      question: 'How can I learn more about PropNews',
      answer:
        'Feel free to connect w/ our support team',
    },
    {
      question: 'Can I join the PropNews team?',
      answer: 'We are accepting new hires Dec 2024',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQs
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            For support contact info@dspn.net 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
