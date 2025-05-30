'use client'
import { useRouter } from 'next/navigation'
 
export default function ListName() {
  const router = useRouter()
 
  return (
    <h1>dynamic route</h1>
  )
}