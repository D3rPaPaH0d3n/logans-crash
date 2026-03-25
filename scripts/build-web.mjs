import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve('.');
const distDir = resolve(root, 'dist');
await mkdir(distDir, { recursive: true });
await copyFile(resolve(root, 'index.html'), resolve(distDir, 'index.html'));
console.log('Web-Build fertig: dist/index.html');
