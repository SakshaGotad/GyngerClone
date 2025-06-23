// app/components/SolutionsServer.tsx
import React from 'react';
import { getData } from '@/lib/getData';
import SolutionsClient from '../Solutions';

export default async function SolutionsServer() {
  const response = await getData({
    contentType: 'solution_section',
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });
 
  // console.dir(response,{depth:null});
  const cards = response?.[0]?.card_data?.data ?? [];

  return <SolutionsClient cards={cards} />;
}
