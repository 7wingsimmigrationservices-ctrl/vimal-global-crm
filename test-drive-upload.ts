import { uploadFileToDrive } from './src/lib/drive.server';
import fs from 'fs';

async function main() {
  const bytes = new Uint8Array(fs.readFileSync('/tmp/test-upload.txt'));
  try {
    const result = await uploadFileToDrive({ name: 'test-upload.txt', mimeType: 'text/plain', bytes });
    console.log('UPLOAD SUCCESS:', JSON.stringify(result, null, 2));
  } catch (err: any) {
    console.error('UPLOAD FAILED:', err.message);
  }
}
main();
