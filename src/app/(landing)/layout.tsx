import { ViewLayout } from '@/modules/_global';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewLayout>
      {children}
    </ViewLayout>
  );
}

