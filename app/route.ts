import { NextResponse } from 'next/server';
const U = 'https://wswbehlcuxqxyinousql.supabase.co';
const K = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzd2JlaGxjdXhxeHlpbm91c3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDU2OTIsImV4cCI6MjA5MTgyMTY5Mn0.pskPJ1U-i0VjgQ_suxMfXNqHOtKJpWchf0-CzLUQIzRo';

async function decompress(bytes: Uint8Array): Promise<string> {
  const ds = new DecompressionStream('gzip');
  const writer = ds.writable.getWriter();
  writer.write(bytes);
  writer.close();
  return new Response(ds.readable).text();
}

export async function GET() {
  const r = await fetch(
    `${U}/rest/v1/_deploy_assets?key=in.(html_chunk_00,html_chunk_01,html_chunk_02,html_chunk_03,html_chunk_04,html_chunk_05,html_chunk_06,html_chunk_07,html_chunk_08,html_chunk_09,html_chunk_10,html_chunk_11,html_chunk_12,html_chunk_13,html_chunk_14,html_chunk_15,html_chunk_16,html_chunk_17,html_chunk_18,html_chunk_19,html_chunk_20,html_chunk_21,html_chunk_22,html_chunk_23,html_chunk_24,html_chunk_25,html_chunk_26,html_chunk_27,html_chunk_28,html_chunk_29,html_chunk_30)&select=key,value&order=key`,
    { headers: { apikey: K, Authorization: `Bearer ${K}` } }
  );
  const rows: { key: string; value: string }[] = await r.json();
  rows.sort((a, b) => a.key.localeCompare(b.key));

  // Smart decode: detect gzip per chunk by magic bytes
  let html = '';
  for (const row of rows) {
    const bytes = Uint8Array.from(atob(row.value), c => c.charCodeAt(0));
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
      html += await decompress(bytes);
    } else {
      html += new TextDecoder('utf-8').decode(bytes);
    }
  }

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
export const runtime = 'edge';
