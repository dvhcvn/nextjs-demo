import React, { FunctionComponent } from 'react'

import { useLevel3 } from '../store'
import { Level1Component } from './level1'
import { Level2Component } from './level2'
import { Level3Component } from './level3'

export const FormComponent: FunctionComponent = () => {
  const { level3 } = useLevel3()

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (level3 != null) {
      alert(level3.toString())
    }
  }

  return (
    <form>
      <Level1Component />
      <Level2Component />
      <Level3Component />

      <button type='submit' className='btn btn-primary' onClick={onClick} disabled={level3 === null}>
        Done
      </button>
    </form>
  )
}
