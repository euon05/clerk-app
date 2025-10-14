import { NextResponse } from 'next/server'
import { MdDescription } from 'react-icons/md'

export async function GET() {
  const data = {
    message: 'Hello next.js',
    MdDescription: 'Next is API 예제',
  }
  return NextResponse.json(data)
}
