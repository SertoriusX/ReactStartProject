import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');

if (fs.existsSync(envPath)) {
  console.log('.env file already exists');
} else {
  fs.writeFileSync(envPath, '');
  console.log('.env file created');
}
