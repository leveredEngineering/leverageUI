import StaticMap from '../common/StaticMap'
import { PromoProps } from '../entities'
import { LexicalRichText } from '@yext/pages-components'
import { LazyLoadWrapper } from '../common/LazyLoadWrapper'
import { Coordinate, Link } from '@yext/pages-components'
import { MaybeLink } from '../common/MaybeLink'
import PaymentOptions from '../common/PaymentOptions'
import React from 'react'

type MapPromoProps = {
  coordinate: Coordinate
  promo: PromoProps
  mapLink?: string
  paymentOptions?: string[]
  areasServed?: string[]
  ownerName?: string
  yearEstablished?: string
  API_KEY?: string
}
const Promo = ({ coordinate, promo, mapLink, paymentOptions, ownerName, yearEstablished, API_KEY }: MapPromoProps) => {
  return (
    <section className='Promo py-8 bg-brand-primary text-white' id='about'>
      <div className='container flex flex-col'>
        <div className='Promo-top flex flex-cnpm ol md:flex-row mb-8'>
          <div className='w-full md:w-1/2 flex flex-col gap-8 mt-8 md:mr-16 '>
            <h2 className='Heading Heading--head font-medium'>{promo.title}</h2>
            {promo.description && (
              <div className='text-base font-light'>
                <LexicalRichText serializedAST={JSON.stringify(promo.description.json)} />
              </div>
            )}
            <div className='Promo-ctas flex'>
              {promo.cTA1 && (
                <div className='flex mb-4 mr-4'>
                  <Link
                    className='Link Button Button--primaryInvert inline-flex'
                    href={promo.cTA1.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {promo.cTA1.label}
                  </Link>
                </div>
              )}
              {promo.cTA2 && (
                <div className='flex mb-4'>
                  <Link
                    className='Link Button Button--primaryInvert inline-flex'
                    href={promo.cTA2.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {promo.cTA2.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <LazyLoadWrapper>
              <MaybeLink href={mapLink}>
                <StaticMap
                  latitude={coordinate?.latitude}
                  longitude={coordinate?.longitude}
                  zoomLevel={12}
                  width={528}
                  height={352}
                  apiKey={API_KEY ?? ''}
                />
              </MaybeLink>
            </LazyLoadWrapper>
          </div>
        </div>
        <div className='Promo-bottom flex flex-col md:flex-row'>
          <div className='w-full md:w-1/4 mb-8 md:mb-0'>
            {ownerName && (
              <>
                <h4 className='Heading--sub text-white'>Owner</h4>
                <div className='Promo-ownerName'>{ownerName}</div>
              </>
            )}
            {yearEstablished && (
              <>
                <h4 className='Heading--sub text-white mt-8 md:mt-16'>Established</h4>
                <div className='Promo-yearEst'>{yearEstablished}</div>
              </>
            )}
          </div>
          <div className='w-full md:w-1/4 mb-8 md:mb-0'>
            <h4 className='Heading--sub text-white mb-2'>Accepted Payments</h4>
            <div className='flex'>
              {paymentOptions && <PaymentOptions name='Accepted Payments' list={paymentOptions} />}
            </div>
          </div>
          {promo.areasServed && (
            <div className='w-full md:pl-8 md:w-1/2'>
              <h4 className='Heading--sub text-white mb-2'>Areas Served</h4>
              {promo.areasServed && (
                <div className=''>
                  <ul className='grid grid-cols-1 md:grid-cols-2 list-disc pl-6 gap-1'>
                    {promo.areasServed.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Promo
