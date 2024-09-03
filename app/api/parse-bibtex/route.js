import { parseBibFile } from 'biblatex-csl-converter';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const file = await request.text(); // Assuming the file content is sent as text
  
  const parsedData = parseBibFile(file);
  
  return NextResponse.json({ data: parsedData });
}
