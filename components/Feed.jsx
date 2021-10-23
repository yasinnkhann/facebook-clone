import React from 'react';
import Stories from './Stories.jsx';
import InputBox from './InputBox.jsx';
import Posts from './Posts.jsx';

export default function Feed({ posts }) {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
        <Posts posts={posts} />
        <br />
      </div>
    </div>
  );
}
