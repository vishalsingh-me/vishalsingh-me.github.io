export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://vishal-singh.dev/sitemap.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
