'use server'

import { redirect } from 'next/navigation'

export default async function submit() {
  


  console.log('redirecting to /path')
  // redirect('/path')

  try {
    redirect('/path')
  } catch (error) {
    console.log(error)
  }
}