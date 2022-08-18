# Creation & Configuration of project

```
1. yarn create vite --template typescript
enter project name: xyz
enter template: react --> react-ts
```
```
2. tsconfig.json
  a. Paths - A series of entries which re-map imports to lookup locations relative to the baseUrl 
  Add to compiler options:
    {...,
      "baseUrl": "./src",
    "paths": {
      "@components/*": ["./components/*"],
      "@assets/*": ["./assets/*"]
    },
  },
  Add after compiler options:
  "include": ["src", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.node.json" }]
```
```
3. Other Packages
  yarn add styled-components
  yarn add @types/styled-components
  # the following are needed for styled-components to work correctly.
  yarn add @babel/plugin-transform-typescript -D
  yarn add babel-plugin-styled-components -D
  yarn add @babel/preset-typescript -D
```
```
4. vite.config.ts
  a. import path from 'path'; - requires yarn add @types/node
  b. Configuration
plugins: [
    react({
      babel: {
        presets: ['@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-typescript',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  server: { 
    port: 3001,
    open: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
```