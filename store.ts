import { Level1, Level2, Level3 } from 'dvhcvn'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStore, Reducer, Store } from 'redux'

interface DemoState {
  level1: Level1 | null
  level2: Level2 | null
  level3: Level3 | null
}

type DemoAction = {
  type: 'SET1'
  level1: Level1
} | {
  type: 'SET2'
  level2: Level2
} | {
  type: 'SET3'
  level3: Level3
}

type DemoStore = Store<DemoState, DemoAction>

let store: DemoStore

const initialState: DemoState = {
  level1: null,
  level2: null,
  level3: null
}

const reducer: Reducer<DemoState, DemoAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET1':
      return {
        ...state,
        level1: action.level1,
        level2: null,
        level3: null
      }
    case 'SET2':
      if (action.level2.parent === state.level1) {
        return {
          ...state,
          level2: action.level2,
          level3: null
        }
      }
      break
    case 'SET3':
      if (action.level3.parent === state.level2) {
        return {
          ...state,
          level3: action.level3
        }
      }
      break
  }

  return state
}

function initStore (preloadedState: DemoState): DemoStore {
  return createStore<DemoState, DemoAction, {}, {}>(
    reducer,
    preloadedState
  )
}

export function useStore (): DemoStore {
  const store = useMemo(() => initStore(initialState), [initialState])
  return store
}

export function useLevel1 (): { level1: Level1 | null, setLevel1: (level1: Level1) => void } {
  const dispatch = useDispatch<typeof store.dispatch>()
  return {
    level1: useSelector<DemoState, Level1 | null>((state) => state.level1),
    setLevel1: (level1) => dispatch({ type: 'SET1', level1 })
  }
}

export function useLevel2 (): { level2: Level2 | null, setLevel2: (level2: Level2) => void } {
  const dispatch = useDispatch<typeof store.dispatch>()
  return {
    level2: useSelector<DemoState, Level2 | null>((state) => state.level2),
    setLevel2: (level2) => dispatch({ type: 'SET2', level2 })
  }
}

export function useLevel3 (): { level3: Level3 | null, setLevel3: (level3: Level3) => void } {
  const dispatch = useDispatch<typeof store.dispatch>()
  return {
    level3: useSelector<DemoState, Level3 | null>((state) => state.level3),
    setLevel3: (level3) => dispatch({ type: 'SET3', level3 })
  }
}
