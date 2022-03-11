import { useEffect, useReducer, useRef } from 'react'

function useFetch(url, options) {
  const cache = useRef({})

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false)

  const initialState = {
    error: undefined,
    data: undefined
  }

  // keep state logic seperated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return
    const fetchData = async () => {
      dispatch({ type: 'loading' })

      // if a cache exist for this url, return it
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        cache.current[url] = data
        if (cancelRequest.current) return
        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        if (cancelRequest.current) return
        dispatch({ type: 'error', payload: error })
      }
    }

    fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
}
export default useFetch
