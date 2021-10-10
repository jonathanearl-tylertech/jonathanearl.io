import React from 'react';
import { PROFILE } from '../data/PROFILE';

export const ProfileCard = () => {
  return (
    <section className="flex flex-col mb-16 max-w-screen-lg mx-auto sm:flex-row sm:px-4 sm:content-center sm:justify-center md:px-16">
      <div className="flex w-full h-full mb-8 sm:mb-0">
        <img className="h-full w-full max-w-36" src={PROFILE.img} alt="user profile" />
      </div>
      <div className="px-4 sm:flex sm:flex-col sm:flex-grow sm:justify-center md:px-16">
        <div className="mb-4 text-gray-700 text-2xl capitalize font-bold">{PROFILE.firstName} {PROFILE.lastName}</div>
        <div className="mb-2 text-gray-700 text-sm font-semibold">{PROFILE.title}</div>
        <div className="mb-2 text-gray-500">{PROFILE.summary}</div>
      </div>
    </section>
  )
}