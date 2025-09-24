import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function HomePage() {
  const { isAuthenticated } = await auth()

  if (isAuthenticated) {
    return <div>Sign in to view this page </div>
  }

  const user = await currentUser()

  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>hello world</p>
      <p>반갑습니다, {user?.firstName} </p>
      <p>등록시간 : {user?.createdAt}</p>
    </div>
  )
}
