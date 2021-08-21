import { ChangeEvent, FunctionComponent } from 'react'
import { useLevel2, useLevel3 } from '../store'

export const Level3Component: FunctionComponent = () => {
  const { level2 } = useLevel2()
  const { level3, setLevel3 } = useLevel3()

  const level3s = level2?.children ?? []

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(e.target.value)
    setLevel3(level3s[index])
  }

  return (
    <div className='mb-3'>
      <label htmlFor='level3' className='form-label'>Level 3</label>
      <select id='level3' className='form-select' value={level3 !== null ? level3s.indexOf(level3) : -1} onChange={onChange}>
        <option />
        {
          level3s.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}
