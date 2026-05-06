import { NextResponse } from 'next/server';
const U = 'https://wswbehlcuxqxyinousql.supabase.co';
const K = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzd2JlaGxjdXhxeXlpbm91c3EsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDU2OTIsImV4cCI6MjA5MTgyMTY5Mn0.pskPJ1U-i0Vjg_suxMfXNqHOtKJpWchf0-CzLUQIzRo';
export async function GET() {
  const r = await fetch(
    `${U}/rest/v1/_deploy_assets?key=like.html_chunk_*&select=key,value&order=key`,
    { headers: { apikey: K, Authorization: `Bearer ${K}` } }
  );
  const rows: {key:string;value:string}[] = await r.json();
  rows.sort((a,b)=>a.key.localeCompare(b.key));
  const b64 = rows.map(x=>x.value).join('');
  const c = Uint8Array.from(atob(b64),x=>x.charCodeAt(0));
  const ds = new DecompressionStream('gzip');
  const w = ds.writable.getWriter();
  w.write(c); w.close();
  const html = await new Response(ds.readable).text();
  return new NextResponse(html,{
    headers:{
      'Content-Type':'text/html; charset=utf-8',
      'Cache-Control':'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
export const runtime = 'edge';
