# React Start Project

Vite + React starter template with a code generator and environment config.

## Getting Started

```bash
npm install
npm run env
npm run dev
```

## Environment Variables

Run `npm run env` to create an empty `.env` file. 
Add your variables:

```
VITE_BASE_URL=http://localhost:5000
```

Use it in your code:

```js
import { BaseUrl } from './api/config'
import axios from 'axios'
axios.get(`${BaseUrl}/api/endpoint`)
```

## Code Generator

Generate boilerplate code with one command:

### Pages
```bash
npm run g p <Name>
```
Creates `src/pages/<Name>/` with:
- `<Name>.jsx` — component
- `<Name>Hook.jsx` — custom hook (useState + axios)
- `<Name>.css` — styles

### Components
```bash
npm run g c <Name>
```
Creates `src/components/<Name>/` with the same 3 files.

### Reducer Context
```bash
npm run g r <Name>
```
Creates `src/context/<Name>/` with:
- `<Name>Context.js` — React.createContext()
- `<Name>ContextProvider.jsx` — useReducer provider with initialState and dispatch

### User Context (token + localStorage)
```bash
npm run g u <Name>
```
Creates `src/context/<Name>/` with:
- `<Name>Context.js` — React.createContext()
- `<Name>ContextProvider.jsx` — useState provider with token, saveToken, removeToken (localStorage)

## Examples

```bash
npm run g p Login       → page with Login.jsx, LoginHook.jsx, Login.css
npm run g c Navbar      → component with Navbar.jsx, NavbarHook.jsx, Navbar.css
npm run g r Movie       → reducer context with MovieContext.js, MovieContextProvider.jsx
npm run g u User        → user context with UserContext.js, UserContextProvider.jsx
```
