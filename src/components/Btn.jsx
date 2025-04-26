import React from 'react'

export default function 
Btn({name,JoinFunction,count}) {
  return (
	<>
		 <a
                href="#"
                className="bg-primary px-3 py-2 me-2 rounded font-semibold text-white"
              onClick={JoinFunction}>
                {name} {count}
              </a>
	</>
  )
}
