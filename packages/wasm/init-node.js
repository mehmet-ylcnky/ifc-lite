/**
 * Node.js WASM initialization helper for @ifc-lite/wasm.
 *
 * In Node.js, the default fetch()-based WASM loading fails for file:// URLs.
 * This helper resolves and reads the .wasm binary from disk, passing it to
 * the wasm-bindgen init function via the module_or_path object form.
 *
 * Usage:
 *   import { initNode } from '@ifc-lite/wasm/init-node';
 *   await initNode();
 *   // meshOutline2d, version(), and other WASM exports are now ready.
 *
 * Safe to call multiple times; subsequent calls are no-ops (the WASM module
 * is a singleton that only initializes once).
 */

import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import init from './pkg/ifc-lite.js';

/**
 * Initialize the @ifc-lite/wasm module for Node.js environments.
 * Resolves the .wasm binary via require.resolve and loads it from disk.
 */
export async function initNode() {
  const require = createRequire(import.meta.url);
  const wasmPath = require.resolve('@ifc-lite/wasm/ifc-lite_bg.wasm');
  const bytes = await readFile(wasmPath);
  await init({ module_or_path: bytes });
}
