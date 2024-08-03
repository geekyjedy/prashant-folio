import Link from 'next/link'
import React from 'react'

const WhiteBlock = ({elements,css,link}) => {
  return (<>
   
    {!link?  <div className={`mx-auto w-fit rounded-3xl bg-opacity-30 ${css} ${!css.includes('bg')?'bg-white':''}`}>
        {elements}
    </div>
    :<Link passHref href={link} className={`mx-auto w-fit rounded-3xl bg-opacity-30 ${css} ${!css.includes('bg')?'bg-white':''}`} target="_blank" rel="noopener noreferrer">{elements}</Link>}
  </>
  )
}

export default WhiteBlock