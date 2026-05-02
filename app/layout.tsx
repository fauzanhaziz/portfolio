import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Fauzan Haziz — Software Developer',
  description: 'Portfolio of Fauzan Haziz, Software Developer specializing in Backend and Machine Learning.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}