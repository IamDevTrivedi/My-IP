import js from "@eslint/js";

export default [
    {
        ignores: ["node_modules", "dist", "build", ".husky", "pnpm-lock.yaml"],
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                process: "readonly",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                },
            ],
            "no-console": "off",
            indent: ["error", 4],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
];
