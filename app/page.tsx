import Image from 'next/image'
import { ClientForm } from '@/components/form/clientForm'
import action from '@/components/actions/serverAction'
import Link from 'next/link'
import Page from './action/page';

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        SAMPLE APP
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Link href="/action">
        Go to Server Action Page
      </Link>
      </div>
    </main>
  )
}
