#!/usr/bin/env node
"use strict";
const fs = require('fs');
const path = require('path');

const STORE_PATH = path.join(__dirname, 'guidebook-store.json');

function loadStore() {
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { roadmap: [], principles: [], guidelines: [] };
  }
}

function saveStore(store) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf8');
}

function generateId(prefix = '') {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function list(section) {
  const store = loadStore();
  return (store[section] || []).slice();
}

function add(section, item) {
  const store = loadStore();
  store[section] = store[section] || [];
  const entry = Object.assign({ id: generateId(section + '_') }, item);
  store[section].push(entry);
  saveStore(store);
  return entry;
}

function remove(section, id) {
  const store = loadStore();
  store[section] = store[section] || [];
  const idx = store[section].findIndex(i => i.id === id);
  if (idx === -1) return false;
  store[section].splice(idx, 1);
  saveStore(store);
  return true;
}

function update(section, id, patch) {
  const store = loadStore();
  store[section] = store[section] || [];
  const idx = store[section].findIndex(i => i.id === id);
  if (idx === -1) return null;
  store[section][idx] = Object.assign({}, store[section][idx], patch);
  saveStore(store);
  return store[section][idx];
}

function exportJSON() {
  return JSON.stringify(loadStore(), null, 2);
}

function importJSON(json) {
  const parsed = typeof json === 'string' ? JSON.parse(json) : json;
  const store = loadStore();
  store.roadmap = parsed.roadmap || store.roadmap;
  store.principles = parsed.principles || store.principles;
  store.guidelines = parsed.guidelines || store.guidelines;
  saveStore(store);
}

function replaceSectionInFile(filePath, startMarker, endMarker, content) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const re = new RegExp(`(${escapeRegExp(startMarker)})[\\s\\S]*?(${escapeRegExp(endMarker)})`, 'm');
  if (!re.test(raw)) throw new Error('Markers not found in file: ' + startMarker + ' / ' + endMarker);
  const replaced = raw.replace(re, `$1\n${content}\n$2`);
  fs.writeFileSync(filePath, replaced, 'utf8');
}

function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function buildPrinciplesText(items) {
  const header = '## Development principles (living; each item supports tags)';
  const lines = items.map(it => {
    const tags = (it.tags || []).join(', ');
    const body = it.body ? ` ${it.body}` : '';
    return `- ${it.title}${body} — tags: ${tags}`;
  });
  return [header, '', ...lines].join('\n');
}

function buildGuidelinesText(items) {
  const header = '## General guidelines (living; each item supports tags)';
  const lines = items.map(it => {
    const tags = (it.tags || []).join(', ');
    const body = it.body ? ` ${it.body}` : '';
    return `- ${it.title}${body} — tags: ${tags}`;
  });
  return [header, '', ...lines].join('\n');
}

function syncReadme(readmePath) {
  const store = loadStore();
  const principlesText = buildPrinciplesText(store.principles || []);
  const guidelinesText = buildGuidelinesText(store.guidelines || []);

  replaceSectionInFile(readmePath, '<!-- PRINCIPLES:START -->', '<!-- PRINCIPLES:END -->', principlesText);
  replaceSectionInFile(readmePath, '<!-- GUIDELINES:START -->', '<!-- GUIDELINES:END -->', guidelinesText);
}

function help() {
  console.log('Usage: node scripts/guidebook-manager.js <command> [args]\n');
  console.log('Commands:');
  console.log('  list <section>               -- list items in section (principles|guidelines|roadmap)');
  console.log('  add <section> <json>         -- add item to section (json string)');
  console.log('  remove <section> <id>        -- remove item by id');
  console.log('  update <section> <id> <json> -- update item by id with patch object');
  console.log('  export                       -- print whole store JSON');
  console.log('  import <json>                -- import JSON (replace arrays present)');
  console.log('  sync-readme <README_PATH>    -- write principles/guidelines into README markers');
}

// CLI entry
async function main() {
  const argv = process.argv.slice(2);
  if (!argv.length) return help();
  const cmd = argv[0];
  try {
    if (cmd === 'list') {
      const section = argv[1];
      console.log(JSON.stringify(list(section), null, 2));
    } else if (cmd === 'add') {
      const section = argv[1];
      const obj = JSON.parse(argv[2]);
      console.log(JSON.stringify(add(section, obj), null, 2));
    } else if (cmd === 'remove') {
      const section = argv[1];
      const id = argv[2];
      console.log(remove(section, id));
    } else if (cmd === 'update') {
      const section = argv[1];
      const id = argv[2];
      const patch = JSON.parse(argv[3]);
      console.log(JSON.stringify(update(section, id, patch), null, 2));
    } else if (cmd === 'export') {
      console.log(exportJSON());
    } else if (cmd === 'import') {
      const json = argv[1];
      importJSON(json);
      console.log('imported');
    } else if (cmd === 'sync-readme') {
      const readme = argv[1];
      if (!readme) throw new Error('README path required');
      syncReadme(readme);
      console.log('README synced');
    } else {
      help();
    }
  } catch (e) {
    console.error('Error:', e && e.message ? e.message : e);
    process.exitCode = 2;
  }
}

if (require.main === module) main();
