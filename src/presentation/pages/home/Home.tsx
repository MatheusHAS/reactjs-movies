import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  loadRequest: () => void
}

export const Home: React.FC<Props> = ({ loadRequest }: Props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadRequest())
  })
  return <h1>Homepage</h1>
}
