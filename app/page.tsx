import LinkButton from '@/components/ui/LinkButton';

export default function RootPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>React Server Components and React 19 in the Next.js App Router</h1>
      <LinkButton theme="secondary" href="/client-server">
        Client and server
      </LinkButton>
    </div>
  );
}
