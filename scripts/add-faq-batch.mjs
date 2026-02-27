import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsDir = path.join(__dirname, '..', 'app', 'tools');

// Get all tool directories (exclude components, category, page.tsx etc)
const skipDirs = new Set(['components', 'category']);
const dirs = fs.readdirSync(toolsDir).filter(d => {
  if (skipDirs.has(d)) return false;
  const full = path.join(toolsDir, d);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'page.tsx'));
});

// Already has FAQ schema
const alreadyHasFAQ = [];
const needsFAQ = [];

for (const dir of dirs) {
  const content = fs.readFileSync(path.join(toolsDir, dir, 'page.tsx'), 'utf-8');
  if (content.includes('FAQSchema')) {
    alreadyHasFAQ.push(dir);
  } else {
    needsFAQ.push(dir);
  }
}

console.log(`Already has FAQ: ${alreadyHasFAQ.length}`);
console.log(`Needs FAQ: ${needsFAQ.length}`);
console.log(JSON.stringify(needsFAQ));
