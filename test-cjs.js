const test = require('tape');
const desm = require('./dist/cjs/index.js');
const { fileURLToPath } = require('url');
const { dirname, join, resolve } = require('path');

// Construct the current file's path
const file_url = new URL(`file://${resolve(__filename)}`).href;
const file_path = fileURLToPath(file_url);
const file_dir = dirname(file_path);

const urlDirname = desm.default; // Accessing the default export
const { filename, join: urlJoin } = desm; // Destructuring named exports

test('carbon copy', async ({ is }) => {
    is(urlDirname(file_url), file_dir);
    is(filename(file_url), file_path);
});

test('join stuff', async ({ is }) => {
    is(urlJoin(file_url, 'routes'), join(file_dir, 'routes'));
});

test('join stuff (concat)', async ({ is }) => {
    is(urlJoin(file_url, '..', 'routes'), join(file_dir, '..', 'routes'));
});
