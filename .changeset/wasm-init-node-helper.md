---
"@ifc-lite/wasm": minor
---

Add `initNode()` helper for Node.js WASM initialization. Consumers importing WASM functions directly (e.g. `meshOutline2d`) can now initialize in one line: `import { initNode } from '@ifc-lite/wasm/init-node'; await initNode();`
