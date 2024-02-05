export type PromoProps = {
  description?: any
  title?: string
  cTA1?: LinkYext
  cTA2?: LinkYext
  image?: Image
  areasServed?: string[]
}

export interface LinkYext {
  label: string
  link: string
  linkType: string
}
