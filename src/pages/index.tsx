import { currentUser } from '../firebase/auth/currentuser'
import Router from 'next/router'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    currentUser((res):any => {
      if (res) {
        Router.push('/admin/default')
      } else {
        Router.push('/auth/sign-in')
      }
    })
  }, [])

  return <></>
}
