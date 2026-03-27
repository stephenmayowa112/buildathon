import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for a Role',
  description: 'Submit an application to join the VOLTPAY team. Help us power Africa\'s businesses with affordable solar energy.',
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
