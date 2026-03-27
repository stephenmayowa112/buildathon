import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the VOLTPAY team and help build the future of energy in Africa. See open positions in engineering, operations, and sales.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
