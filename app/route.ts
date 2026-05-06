import { NextResponse } from 'next/server';
const U = 'https://wswbehlcuxqxyinousql.supabase.co';
const K = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzd2JlaGxjdXhxeHlwbm91c3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDU2OTIsImV4cCI6MjA5MTgyMTY5Mn0.pskPJ1U-i0Vjg_suxMfXNqHOtKJpWchf0-CzLUQIzRo';
export async function GET() {
  const r = await fetch(
    `${U}/rest/v1/_deploy_assets?key=in.(html_chunk_00,html_chunk_01,html_chunk_02,html_chunk_03,html_chunk_04,html_chunk_05,html_chunk_06,html_chunk_07,html_chunk_08,html_chunk_09,html_chunk_10,html_chunk_11,html_chunk_12,html_chunk_13,html_chunk_14,html_chunk_15,html_chunk_16,html_chunk_17,html_chunk_18,html_chunk_19,html_chunk_20,html_chunk_21,html_chunk_22,html_chunk_23,html_chunk_24,html_chunk_25,html_chunk_26,html_chunk_27,html_chunk_28,html_chunk_29,html_chunk_30)&select=key,value&order=key`,
    { headers: { apikey: K, Authorization: `Bearer ${K}` } }
  );
  const rows: {key:string;value:string}[] = await r.json();
  rows.sort((a,b)=>a.key.localeCompare(b.key));
  const b64 = rows.map(x=>x.value).join('');
  const bytes = Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  const raw = new TextDecoder('utf-8').decode(bytes);
  const GA = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-N5CMQL9C4M"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-N5CMQL9C4M");</script>';
  const i = raw.indexOf('<!DOCTYPE html>');
  const html = (i>=0 ? raw.slice(i) : raw).replace('</head>',GA+'</head>');
  return new NextResponse(html,{
    headers:{
      'Content-Type':'text/html; charset=utf-8',
      'Cache-Control':'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
export const runtime = 'edge';
