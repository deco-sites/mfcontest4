import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        centuryGothic: "Century Gothic",
      },
    },
    colors: {
      custom: {
        "primary": "#1D1D1D",
        "primary-inverted": "#fff",
        "secondary": "#e8e8e8",
      },
    },
  },
};
