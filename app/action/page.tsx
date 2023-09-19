import { redirect } from 'next/navigation'

export default function Page() {
  async function create(formData: FormData) {
    'use server'

    console.log('formData', formData)

    try {
    redirect('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function nonTryCatch(formData: FormData) {
    'use server'

    console.log('formData', formData)
    redirect('/')
  }
 
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <form action={create}>
      <button>
        This is with redirect in try catch block
      </button>
    </form>
    <form
      action={nonTryCatch}
      className='py-10'
    >
      <button>
        This is without redirect in try catch block
      </button>
    </form>
    </div>
  )
}