// app/components/BlueprintServer.tsx
import React from 'react';
import { getData } from '@/lib/getData';
import BlueprintClient from '../Blueprint';

export default async function BlueprintServer() {
  const response = await getData({
    contentType: 'blueprint_section',
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const blueprint = response?.[0];
  const cards = blueprint?.blueprint_cards?.card_data ?? [];
  const sectionTitle = blueprint?.section_title ?? "Blueprint Section";

  return <BlueprintClient cards={cards} sectionTitle={sectionTitle} />;
}
