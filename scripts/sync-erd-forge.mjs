// scripts/sync-erd-forge.mjs
import { execSync } from 'child_process';
import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const REPO = process.env.ERD_FORGE_REPO || 'https://github.com/fobiddenai/erd-forge.git';
const BRANCH = process.env.ERD_FORGE_BRANCH || 'dist-deploy';
const DEST = join(process.cwd(), 'public/tools/erd-forge/app');
const TMP = join(process.cwd(), '.tmp-erd-forge-dist');
const LOCAL_FALLBACK = join(process.cwd(), '../erd-forge/apps/web/dist');

console.log('🔄 Syncing ERD Forge dist...');
rmSync(TMP, { recursive: true, force: true });

let cloned = false;
try {
  console.log(`Cloning ${BRANCH} branch from ${REPO}...`);
  execSync(
    `git clone --depth 1 --branch ${BRANCH} --single-branch ${REPO} "${TMP}"`,
    { stdio: 'inherit' }
  );
  cloned = true;
} catch (err) {
  console.warn(`⚠️ Could not clone ${BRANCH} from ${REPO}:`, err.message);
  if (existsSync(LOCAL_FALLBACK)) {
    console.log(`📁 Falling back to local dist at ${LOCAL_FALLBACK}`);
    rmSync(DEST, { recursive: true, force: true });
    mkdirSync(DEST, { recursive: true });
    cpSync(LOCAL_FALLBACK, DEST, {
      recursive: true,
      filter: (src) => !src.includes('/.git') && !src.includes('\\.git'),
    });
    console.log('✅ Synced local dist → public/tools/erd-forge/app/');
  } else if (existsSync(join(DEST, 'index.html'))) {
    console.log('ℹ️ Existing public/tools/erd-forge/app/index.html found, keeping existing build.');
  } else {
    console.error('❌ Failed to sync ERD Forge dist and no local fallback found.');
    if (process.env.VERCEL) {
      throw err;
    }
  }
}

if (cloned) {
  rmSync(DEST, { recursive: true, force: true });
  mkdirSync(DEST, { recursive: true });
  cpSync(TMP, DEST, {
    recursive: true,
    filter: (src) => !src.includes('/.git') && !src.includes('\\.git'),
  });
  rmSync(TMP, { recursive: true, force: true });
  console.log('✅ Synced → public/tools/erd-forge/app/');
}
