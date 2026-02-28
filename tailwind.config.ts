import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        charcoal: {
          DEFAULT: "hsl(30, 6%, 10%)",
          50: "hsl(30, 6%, 95%)",
          100: "hsl(30, 6%, 90%)",
          200: "hsl(30, 6%, 80%)",
          300: "hsl(30, 6%, 60%)",
          400: "hsl(30, 6%, 40%)",
          500: "hsl(30, 6%, 25%)",
          600: "hsl(30, 6%, 18%)",
          700: "hsl(30, 6%, 14%)",
          800: "hsl(30, 6%, 12%)",
          900: "hsl(30, 6%, 10%)",
        },
        yellow: {
          DEFAULT: "hsl(48, 96%, 53%)",
          50: "hsl(48, 96%, 96%)",
          100: "hsl(48, 96%, 89%)",
          200: "hsl(48, 96%, 77%)",
          300: "hsl(48, 96%, 65%)",
          400: "hsl(48, 96%, 53%)",
          500: "hsl(45, 93%, 47%)",
          600: "hsl(42, 90%, 40%)",
          700: "hsl(40, 85%, 33%)",
          800: "hsl(38, 80%, 27%)",
          900: "hsl(35, 75%, 22%)",
        },
        stone: {
          50: "hsl(30, 20%, 98%)",
          100: "hsl(30, 15%, 96%)",
          200: "hsl(30, 10%, 90%)",
          300: "hsl(30, 8%, 82%)",
          400: "hsl(30, 6%, 65%)",
          500: "hsl(30, 5%, 45%)",
          600: "hsl(30, 5%, 35%)",
          700: "hsl(30, 6%, 25%)",
          800: "hsl(30, 6%, 18%)",
          900: "hsl(30, 6%, 12%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'offset': '4px 4px 0px 0px hsl(30, 6%, 10%)',
        'offset-sm': '2px 2px 0px 0px hsl(30, 6%, 10%)',
        'offset-lg': '6px 6px 0px 0px hsl(30, 6%, 10%)',
        'offset-yellow': '4px 4px 0px 0px hsl(48, 96%, 53%)',
        'offset-white': '4px 4px 0px 0px white',
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
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
