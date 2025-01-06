// src/components/ui/card.tsx

import React, { ReactNode } from 'react';

interface CardProp {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProp) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }: CardProp) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
  