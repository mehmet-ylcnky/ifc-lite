/**
 * Initialize the @ifc-lite/wasm module for Node.js environments.
 * Resolves the .wasm binary via require.resolve and loads it from disk.
 * Safe to call multiple times (subsequent calls are no-ops).
 */
export declare function initNode(): Promise<void>;
