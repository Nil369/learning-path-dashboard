import ExcelJS from 'exceljs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const file = await request.blob(); // Assuming the file is sent in the request body
  
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(await file.arrayBuffer());
  
  let parsedData = [];
  workbook.eachSheet((worksheet) => {
    worksheet.eachRow((row) => {
      parsedData.push(row.values);
    });
  });
  
  return NextResponse.json({ data: parsedData });
}
