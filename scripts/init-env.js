import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');
const url = process.argv[2] || '';

if (fs.existsSync(envPath)) {
  console.log('.env file already exists');
} else {
  fs.writeFileSync(envPath, `VITE_BASE_URL='${url}'\n`);
  console.log(`.env file created: VITE_BASE_URL='${url}'`);
}
