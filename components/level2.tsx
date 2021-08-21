import { ChangeEvent, FunctionComponent } from 'react'
import { useLevel1, useLevel2 } from '../store'

export const Level2Component: FunctionComponent = () => {
  const { level1 } = useLevel1()
  const { level2, setLevel2 } = useLevel2()

  const level2s = level1?.children ?? []

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(e.target.value)
    setLevel2(level2s[index])
  }

  return (
    <div className='mb-3'>
      <label htmlFor='level2' className='form-label'>Level 2</label>
      <select id='level2' className='form-select' value={level2 !== null ? level2s.indexOf(level2) : -1} onChange={onChange}>
        <option />
        {
          level2s.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}
