
# Proyecto TypeScript con Mocha y Chai

Este proyecto es un ejemplo básico de cómo configurar un entorno de desarrollo en **TypeScript** y realizar pruebas unitarias con **Mocha** y **Chai**.

---

## 1. Creación del proyecto y configuración inicial

1. Crea una carpeta para tu proyecto y entra en ella:
```bash
mkdir proyecto-ts-test
cd proyecto-ts-test
```
2. Inicializa npm para crear el archivo `package.json`:
```bash
npm init -y
```

---

## 2. Instalación de librerías necesarias

Instala las dependencias de desarrollo:
```bash
npm install typescript ts-node mocha chai --save-dev
npm install @types/mocha @types/chai --save-dev
```

---

## 3. Configuración de TypeScript

Genera el archivo `tsconfig.json`:
```bash
npx tsc --init
```

Configura el archivo para que tenga:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src", "test"]
}
```

---

## 4. Estructura de carpetas y archivos

```
proyecto-ts-test/
  ├── src/
  │   └── suma.ts        # Código a probar
  ├── test/
  │   └── suma.test.ts   # Pruebas unitarias
  ├── package.json
  ├── tsconfig.json
```

---

## 5. Creación del archivo a probar (`src/suma.ts`)

```typescript
export function suma(a: number, b: number): number {
  return a + b;
}
```

---

## 6. Creación del archivo de prueba (`test/suma.test.ts`)

```typescript
import { expect } from "chai";
import { suma } from "../src/suma";

describe("Función suma", () => {
  it("debería retornar 5 cuando sumamos 2 + 3", () => {
    expect(suma(2, 3)).to.equal(5);
  });

  it("debería retornar -5 cuando sumamos -2 + -3", () => {
    expect(suma(-2, -3)).to.equal(-5);
  });
});
```

- **describe** → Agrupa pruebas relacionadas.
- **it** → Define un caso de prueba.
- **expect(...).to.equal(...)** → Compara el resultado con el valor esperado.

---

## 7. Configuración de scripts en `package.json`

En el bloque `"scripts"` agrega:
```json
 "test: mocha -r ts-node/register test/**/*.test.ts"
```

---

## 8. Ejecución de las pruebas

Ejecuta:
```bash
npm test
```

---

## 9. Resultado esperado

```
> mocha -r ts-node/register test/**/*.test.ts
   
  Función suma
    √ suma dos números positivos
    √ suma un número positivo y uno negativo
    √ suma dos ceros
    
  3 passing (8ms)
```

---
