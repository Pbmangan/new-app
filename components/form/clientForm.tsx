'use client'


export const ClientForm = (action: any) => {

  return (
    <>
    <form
      action={action}
    >
      <button>
          Run Server Action with redirect
      </button>
    </form>
  </>
  )
}