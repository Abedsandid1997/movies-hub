// import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// const customConfig = defineConfig({
//   theme: {
//     tokens: {
//       colors: {
//         gray: {
//           50: { value: "#ffe2ec" },
//           100: { value: "#ffb3c5" },
//           200: { value: "#fc839f" },
//           300: { value: "#f95278" },
//           400: { value: "#f62252" },
//           500: { value: "#dd0939" },
//           600: { value: "#ad032c" },
//           700: { value: "#7c001e" },
//           800: { value: "#4d0012" },
//           950: { value: "#200005" },
//         },
//       },
//     },
//   },
// });

// export const system = createSystem(defaultConfig, customConfig);

// theme.ts;
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#ffe2ec" },
          100: { value: "#ffb3c5" },
          200: { value: "#fc839f" },
          300: { value: "#f95278" },
          400: { value: "#f62252" },
          500: { value: "#dd0939" },
          600: { value: "#ad032c" },
          700: { value: "#7c001e" },
          800: { value: "#4d0012" },
          950: { value: "#200005" },
        },
      },
    },

    semanticTokens: {
      colors: {
        // 🌈 Link your background colors to your gray palette
        bg: {
          canvas: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          surface: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" },
          },
        },
        fg: {
          default: {
            value: { _light: "{colors.gray.950}", _dark: "{colors.gray.50}" },
          },
        },
        brand: {
          solid: {
            value: { _light: "{colors.gray.500}", _dark: "{colors.gray.400}" },
          },
          contrast: {
            value: { _light: "white", _dark: "black" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
