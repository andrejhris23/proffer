import type { NextPage } from 'next'
import Github from 'next-auth/providers/github';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen">
      {/* Default navbar should be here with sign in, blog, features maybe... */}
    <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div className=''>
                    <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Devs with Employers</h1>
                    <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                      <div className='relative mt-8 rounded-full sm:mt-12'></div>
                    <div className="mt-8 sm:mt-12 flex items-center justify-center">
                    <button
                      className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {signIn('github', {callbackUrl: '/home'})}}
                   >
                      Sign in with Github
                    </button>
                    </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0">
                    <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                  </div>
                  <img className="relative w-full max-w-md mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  </div>
  );
}

export default Home
