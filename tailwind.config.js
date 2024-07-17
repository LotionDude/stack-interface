import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        air: ["AirTravelers"],
        inter: ["Inter", "sans-serif"],
      },
      transitionProperty: {
        text: "color",
        bg: "background-color",
        divide: "border-color",
        border: "border-color",
      },
      colors: {
        bermuda: {
          50: "#f2f8fb",
          100: "#e8f1f7",
          200: "#d5e5f0",
          300: "#bbd4e6",
          400: "#9fbdda",
          500: "#8ca9cf",
          600: "#6e8abd",
          700: "#5d76a5",
          800: "#4d6086",
          900: "#43526c",
          950: "#272f3f",
        },

        studio: {
          50: "#f6f5fd",
          100: "#eeecfb",
          200: "#e0dbf9",
          300: "#c8bff3",
          400: "#ac9aeb",
          500: "#8f71e1",
          600: "#7d52d5",
          700: "#754ac4",
          800: "#5c35a2",
          900: "#4d2d85",
          950: "#2f1c59",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/typography"),

    plugin(function ({ addVariant }) {
      addVariant("not-first", "&:not(:first-child)");
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".truncate-none": {
          overflow: "visible",
          textOverflow: "clip",
          whiteSpace: "normal",
        },
      });
    }),
  ],
};
