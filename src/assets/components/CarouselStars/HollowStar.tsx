import React from 'react'

  function FilledStar({ text }: { text: string }): JSX.Element {
  return (
    <div className='startups-hollowstar'>
            <p>{text}</p>
    </div>
  )
}

export default FilledStar