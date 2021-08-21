import { level1s } from 'dvhcvn'
import { ChangeEvent, FunctionComponent } from 'react'
import { useLevel1 } from '../store'

export const Level1Component: FunctionComponent = () => {
  const { level1, setLevel1 } = useLevel1()

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(e.target.value)
    setLevel1(level1s[index])
  }

  return (
    <div className='mb-3'>
      <label htmlFor='level1' className='form-label'>Level 1</label>
      <select id='level1' className='form-select' value={level1 !== null ? level1s.indexOf(level1) : -1} onChange={onChange}>
        <option />
        {
          level1s.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))
        }
      </select>
    </div>

  )
}
