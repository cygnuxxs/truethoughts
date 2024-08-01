import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <div className='w-screen pt-[5rem] h-screen max-sm:h-svh flex max-md:px-12 max-sm:px-4 items-center justify-center'>
        <div className='w-[35%] h-[90%] max-md:w-[75%] p-4 max-sm:w-full bg-background rounded-lg'>
        <form action="" method="post" className='grid gap-6'>
          <p className='text-2xl font-semibold'>Login</p>
          <div className='w-full grid items-center gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email' placeholder='Enter your Email' />
          </div>
          <div className='w-full grid items-center gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input type='password' id='password' name='password' placeholder='Enter your Password' />
          </div>
        <Link href={'/forgot-password'} className='text-xs text-primary w-fit'>Forgot Password ?</Link>
          <Button type='submit'>Login</Button>
        </form>
        <Separator className='my-6' />
        </div>
    </div>
  ) 
}

export default page