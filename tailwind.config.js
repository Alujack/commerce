module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900_01": "#000000",
          "900_03": "#000000",
          "900_3f_01": "#0000003f",
          "900_02": "#080814",
          "900_33_01": "#00000033",
        },
        white: {
          A700: "#ffffff",
          A700_11: "#ffffff11",
          A700_01: "#ffffff",
          A700_11_01: "#ffffff11",
          A700_4c_01: "#ffffff4c",
        },
        gray: {
          50: "#f9f9f9",
          500: "#999999",
          800: "#3a3838",
          900: "#18181b",
          "100_04": "#f7f6f6",
          "900_07": "#191d23",
          "900_04": "#131313",
          "800_01": "#403f3f",
          "200_02": "#ebebeb",
          "300_06": "#dde1e3",
          "900_06": "#272525",
          "200_03": "#efefef",
          "900_08": "#1e1d1d",
          "900_03": "#272727",
          "900_02": "#191919",
          "900_05": "#232323",
          "900_09": "#242424",
          "300_12": "#e2e4eb",
          "100_09": "#f7f6f6",
          "900_17": "#272525",
          "900_11": "#18181b",
          "200_08": "#efefef",
          "300_13": "#dde1e3",
          "600_05": "#7e7e7e",
          "200_07": "#ebebeb",
          "900_19": "#1e1d1d",
          "900_14": "#272727",
          "900_13": "#191919",
          "900_16": "#232323",
          "900_20": "#242424",
          "50_02": "#f9f9f9",
          "200_09": "#eee9e9",
          "800_03": "#3a3838",
          "500_33_01": "#99999933",
          "500_01": "#999999",
          "600_06": "#6c757d",
          "200_06": "#e9e7e8",
          "900_21": "#212529",
          "800_04": "#403f3f",
          "100_05": "#f6f6f6",
          "500_54_01": "#99999954",
          "900_15": "#131313",
          "900_18": "#191d23",
          "900_12": "#222222",
          "700_03": "#666666",
          "300_09": "#e4e4e7",
          "50_03": "#f8fafc",
          "600_04": "#71717a",
          "300_07": "#e3e3ec",
          "300_10": "#dee2e6",
          "600_07": "#777777",
          "700_02": "#696969",
          "300_08": "#dcdde4",
          "300_11": "#e1e3eb",
          "400_05": "#d0c8c8",
          "200_05": "#e5e8ea",
          "100_07": "#f5f3f3",
          "100_06": "#f5f4f4",
          "100_08": "#f4f4f4",
          "50_01": "#f8fafc",
          "200_01": "#e9e7e8",
          "300_05": "#e2e4eb",
          "500_33": "#99999933",
          "900_01": "#222222",
          "100_02": "#f5f3f3",
          "100_01": "#f5f4f4",
          "900_10": "#212529",
        },
        green: {
          700: "#1aba1a",
          A700: "#1bf11b",
          "700_01": "#1aba1a",
          A700_03: "#00d500",
          A700_02: "#1bf11b",
          "700_5e_01": "#1aba1a5e",
          A700_01: "#00d500",
        },
        blue_gray: {
          50: "#ebedf3",
          100: "#cccccc",
          500: "#64748b",
          900: "#333333",
          "900_01": "#242c31",
          "100_01": "#d0d5dd",
          "900_05": "#242c31",
          "800_01": "#253d4e",
          "100_02": "#cccccc",
          "50_04": "#ebedf3",
          "900_04": "#333333",
          "100_03": "#d0d5dd",
          "500_01": "#64748b",
          "700_03": "#52525b",
          "900_07": "#1e293b",
          "300_01": "#94a3b8",
          "900_06": "#32333b",
          "50_07": "#eeeff6",
          "50_06": "#edeff6",
          "400_01": "#888888",
          "700_02": "#2f557b",
          "50_05": "#edeff5",
          "50_02": "#edeff6",
          "900_03": "#1e293b",
        },
        yellow: { A400: "#ffe400", A400_01: "#ffe400" },
        pink: { 400: "#ee307a", "400_01": "#ee307a" },
        red: {
          600: "#f1352b",
          A700_11_01: "#ff000011",
          "600_02": "#f1352b",
          "900_01": "#a42a2a",
          "600_5e_01": "#f1352b5e",
          "600_03": "#db4444",
          "600_01": "#db4444",
          A700_11: "#ff000011",
        },
        blue: { A700_02: "#2563eb", A400_01: "#0d6efd", "500_01": "#26a1fa", A700: "#2563eb" },
        indigo: { "500_01": "#4b3ec4" },
        orange: { A200_01: "#f6ab4a" },
        teal: { 800: "#047857", A200_01: "#65fdf4", "300_01": "#439abb", "800_01": "#047857" },
        light_green: { A700_01: "#27fd27", "600_01": "#65b741" },
        deep_orange: { "500_01": "#ff4b26" },
        amber: { A700_01: "#ffae00", "700_01": "#ffa500" },
        deep_purple: { "700_05": "#534898" },
        teal_400_01: "#3bb77e",
        amber_500: "#ffc107",
        light_blue_A200: "#41c2f2",
        red_A700: "#f80808",
      },
      boxShadow: {
        xs: "0px 10px  15px 0px #00000007",
        sm: "0px 0px  6px 0px #0000000c",
        md: "0px 8.26px  6px 0px #00000007",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #2aabee,#229ed9)",
        gradient1: "linear-gradient(90deg, #ee307a,#3720d1)",
        gradient2: "radial-gradient(90deg, #6efff654,#00000000,#00000000)",
        gradient3: "linear-gradient(180deg, #3d21ce,#ee307a)",
      },
      fontFamily: {
        manrope: "Manrope",
        inter: "Inter",
        plusjakartasans: "Plus Jakarta Sans",
        quicksand: "Quicksand",
        lato: "Lato",
        poppins: "Poppins",
      },
      opacity: { 0.05: 0.05 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};