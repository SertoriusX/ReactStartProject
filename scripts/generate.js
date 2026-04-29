import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = process.argv[2];
const name = process.argv[3];

if (!name || !['c', 'r', 'u', 'p'].includes(mode)) {
  console.error('Usage:');
  console.error('  npm run g p <Name>   → pages');
  console.error('  npm run g c <Name>   → components');
  console.error('  npm run g r <Name>   → reducer context');
  console.error('  npm run g u <Name>   → user context');
  process.exit(1);
}

const PascalName = name.charAt(0).toUpperCase() + name.slice(1);

if (mode === 'c') {
  const dir = path.join(__dirname, '..', 'src', 'components', PascalName);

  if (fs.existsSync(dir)) {
    console.error(`Error: ${PascalName} component already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const jsxContent = `import React from 'react'
import './${PascalName}.css'
import { ${PascalName}Hook } from './${PascalName}Hook'

export default function ${PascalName}() {

    return (
        <div>
            <h1>${PascalName}</h1>
        </div>
    )
}
`;

  const hookContent = `import { useState } from 'react'
import axios from 'axios'

export const ${PascalName}Hook = () => {

}
`;

  const cssContent = '';

  fs.writeFileSync(path.join(dir, `${PascalName}.jsx`), jsxContent);
  fs.writeFileSync(path.join(dir, `${PascalName}Hook.jsx`), hookContent);
  fs.writeFileSync(path.join(dir, `${PascalName}.css`), cssContent);

  console.log(`Created ${PascalName} component in src/components/${PascalName}/:`);
  console.log(`  - ${PascalName}.jsx`);
  console.log(`  - ${PascalName}Hook.jsx`);
  console.log(`  - ${PascalName}.css`);
  process.exit(0);
}

if (mode === 'p') {
  const dir = path.join(__dirname, '..', 'src', 'pages', PascalName);

  if (fs.existsSync(dir)) {
    console.error(`Error: ${PascalName} page already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const jsxContent = `import React from 'react'
import './${PascalName}.css'
import { ${PascalName}Hook } from './${PascalName}Hook'

export default function ${PascalName}() {

    return (
        <div>
            <h1>${PascalName}</h1>
        </div>
    )
}
`;

  const hookContent = `import { useState } from 'react'
import axios from 'axios'

export const ${PascalName}Hook = () => {

}
`;

  const cssContent = '';

  fs.writeFileSync(path.join(dir, `${PascalName}.jsx`), jsxContent);
  fs.writeFileSync(path.join(dir, `${PascalName}Hook.jsx`), hookContent);
  fs.writeFileSync(path.join(dir, `${PascalName}.css`), cssContent);

  console.log(`Created ${PascalName} page in src/pages/${PascalName}/:`);
  console.log(`  - ${PascalName}.jsx`);
  console.log(`  - ${PascalName}Hook.jsx`);
  console.log(`  - ${PascalName}.css`);
  process.exit(0);
}

if (mode === 'r') {
  const dir = path.join(__dirname, '..', 'src', 'context', PascalName);

  if (fs.existsSync(dir)) {
    console.error(`Error: ${PascalName} reducer context already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const contextContent = `import React from "react";

export const ${PascalName}Context = React.createContext()
`;

  const lower = PascalName.toLowerCase();
  const providerContent = `import React, { useReducer } from 'react'
import { ${PascalName}Context } from './${PascalName}Context.js'

export default function ${PascalName}ContextProvider({ children }) {
  const initialState = {
    // state here
  }

  function ${lower}State(state, action) {
    switch (action.type) {
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(${lower}State, initialState)

  return (
    <${PascalName}Context.Provider value={{state, dispatch}}>
      {children}
    </${PascalName}Context.Provider>
  )
}
`;

  fs.writeFileSync(path.join(dir, `${PascalName}Context.js`), contextContent);
  fs.writeFileSync(path.join(dir, `${PascalName}ContextProvider.jsx`), providerContent);

  console.log(`Created ${PascalName} reducer context in src/context/${PascalName}/:`);
  console.log(`  - ${PascalName}Context.js`);
  console.log(`  - ${PascalName}ContextProvider.jsx`);
  process.exit(0);
}

if (mode === 'u') {
  const dir = path.join(__dirname, '..', 'src', 'context', PascalName);

  if (fs.existsSync(dir)) {
    console.error(`Error: ${PascalName} user context already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const contextContent = `import React from "react";

export const ${PascalName}Context = React.createContext()
`;

  const providerContent = `import React, { useState } from 'react'
import { ${PascalName}Context } from './${PascalName}Context.js'

export default function ${PascalName}ContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)

  const saveToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <${PascalName}Context.Provider value={{token, saveToken, removeToken}}>
      {children}
    </${PascalName}Context.Provider>
  )
}
`;

  fs.writeFileSync(path.join(dir, `${PascalName}Context.js`), contextContent);
  fs.writeFileSync(path.join(dir, `${PascalName}ContextProvider.jsx`), providerContent);

  console.log(`Created ${PascalName} user context in src/context/${PascalName}/:`);
  console.log(`  - ${PascalName}Context.js`);
  console.log(`  - ${PascalName}ContextProvider.jsx`);
  process.exit(0);
}
