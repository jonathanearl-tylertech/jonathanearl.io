import React from 'react';
import { PROFILE } from '../data/PROFILE';

export const Profile = () => {
  return (
    <section className="flex flex-col mb-8">
      <div className="flex w-full mb-8">
        <img className="h-full w-full" src={PROFILE.img} alt="user profile" />
      </div>
      <div className="px-4">
        <div className="mb-4 text-gray-700 text-2xl capitalize font-bold">{PROFILE.firstName} {PROFILE.lastName}</div>
        <div className="mb-2 text-gray-700 text-sm font-semibold">{PROFILE.title}</div>
        <div className="mb-2 text-gray-500">{PROFILE.summary}</div>
      </div>
    </section>
  )
}