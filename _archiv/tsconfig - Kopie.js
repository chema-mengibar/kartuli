module.exports = ({
  "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "jsx": "react"
  },
  "include": [
      "./src/**/**"
  ],
  "exclude": [
    "node_modules"
  ]
})


const a = ` 
module.exports = ({
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "sourceMap": true
  },
  "exclude": [
    "node_modules",
    "_archiv",
    "dist",
    "plop-templates/**/*.tsx",
    "**/*.spec.ts",
    "**/*.test.ts"
  ],
  "include": ["src/**/*"],
  "files": ["src/**/*"]
})
`