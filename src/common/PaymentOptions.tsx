import * as React from 'react'

export interface PaymentOptionsProps {
  name?: string
  list?: Array<string>
}

const PaymentOptions = ({ list }: PaymentOptionsProps) => {
  return (
    <>
      <div className=''>
        {/* <h2 className="">Payment Options</h2> */}
        {list && (
          <ul className='list-disc pl-6 space-y-1 flex flex-col'>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default PaymentOptions
