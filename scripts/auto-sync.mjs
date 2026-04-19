#!/usr/bin/env node
/**
 * Auto-sync: watches for file changes and auto-commits + pushes to GitHub.
 * Run once with: npm run sync
 */

import { watch } from 'fs';
import { execSync } from 'child_process';
import { resolve, relative } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const DEBOUNCE_MS = 2000; // wait 2s after last change before pushing

const IGNORE = [
  '.git',
  'node_modules',
  '.next',
  '.vercel',
  'out',
];

let timer = null;
let pendingFiles = new Set();

function shouldIgnore(path) {
  return IGNORE.some(dir => path.includes(`/${dir}/`) || path.includes(`\\${dir}\\`) || path.endsWith(`/${dir}`) || path.endsWith(`\\${dir}`));
}

function sync() {
  const files = [...pendingFiles].map(f => relative(ROOT, f)).join(', ');
  pendingFiles.clear();

  try {
    const status = execSync('git status --porcelain', { cwd: ROOT }).toString().trim();
    if (!status) {
      console.log('[auto-sync] No changes to commit.');
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    console.log(`[auto-sync] Changes detected at ${timestamp} — committing...`);

    execSync('git add .', { cwd: ROOT });
    execSync(`git commit -m "auto-sync: ${timestamp}"`, { cwd: ROOT });
    execSync('git push', { cwd: ROOT });

    console.log('[auto-sync] Pushed to GitHub. Vercel will deploy shortly.');
  } catch (err) {
    console.error('[auto-sync] Error:', err.message);
  }
}

function onChange(eventType, filename) {
  if (!filename) return;
  const full = resolve(ROOT, filename);
  if (shouldIgnore(full)) return;

  pendingFiles.add(full);

  clearTimeout(timer);
  timer = setTimeout(sync, DEBOUNCE_MS);
}

console.log('[auto-sync] Watching for changes... (Ctrl+C to stop)');
console.log(`[auto-sync] Root: ${ROOT}`);

watch(ROOT, { recursive: true }, onChange);
