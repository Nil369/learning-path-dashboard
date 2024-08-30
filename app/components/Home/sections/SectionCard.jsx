import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SectionCard = ({props}) => {
  return (
    <div>
      <Link
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-500/10 hover:shadow-cyan-600"
            href="#"
          >
            <CircleCheckBig className='h-8 text-blue-400'/>

            <h2 className="mt-4 text-xl font-bold ">{props}</h2>

            <p className="mt-1 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </Link>
    </div>
  )
}

export default SectionCard
