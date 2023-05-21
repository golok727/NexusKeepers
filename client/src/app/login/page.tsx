import React from 'react'
import Image from 'next/image'
import NexusKeepers from '../../assets/images/app.jpg'
import Link from 'next/link'
import { HomeIcon } from '@radix-ui/react-icons'

const page = () => {
  return (
    <div className="group min-h-screen mx-auto max-w-6xl grid place-items-center">
      <div className="grid lg:grid-cols-2 group-hover:border-b-[1px] group-focus-within:border-b-[1px] border-PrimaryButton overflow-hidden rounded-md relative">
        <div className="">
          <Image
            src={NexusKeepers}
            alt="nexusKeepers"
            className="w-full-h-full"
          />
        </div>
        <div className="bg-Secondary flex flex-col justify-center px-10">
          <h3 className="font-bold text-2xl mb-3">Welcome Back</h3>
          <form className="grid gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="login__input-styles"
                placeholder="Eg: someone@email.com"
                type="email"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className="login__input-styles"
                placeholder="Password"
                type="password"
                id="password"
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="w-fit bg-PrimaryButton py-2 px-4 rounded text-bold cursor-pointer"
            />
          </form>

          <div className="my-4 text-sm">
            <p>
              <span className="mt-3 text-gray-300">Don't have an account?</span>
              <Link
                href="/signup"
                className="text-PrimaryButton font-bold hover:scale-105 px-3"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>

        <Link href={'/'} aria-label="Go home" className="home-button-styles">
          <HomeIcon />
        </Link>
      </div>
    </div>
  )
}

export default page
