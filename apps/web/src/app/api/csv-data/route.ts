// app/api/csv-data/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function GET() {
  try {
    const dataDirectory = path.join(process.cwd(), 'data');
    const fileNames = fs.readdirSync(dataDirectory);
    
    let allData: any[] = [];

    for (const fileName of fileNames) {
      if (path.extname(fileName) === '.csv') {
        const filePath = path.join(dataDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        const results = await new Promise((resolve, reject) => {
          Papa.parse(fileContent, {
            header: true,
            complete: resolve,
            error: reject,
          });
        });
        
        allData = allData.concat(results.data);
      }
    }

    return NextResponse.json(allData);
  } catch (error) {
    return NextResponse.json({ error: 'Error reading CSV files' }, { status: 500 });
  }
}
