'use client';
import Work from '@/components/Work';
import React, { forwardRef } from 'react';

const Page = forwardRef((props,ref) => {
  return (
    <Work ref={ref}/>
  );
});

export default Page;
