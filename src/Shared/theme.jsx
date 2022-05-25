
const colors = {
    primary: "#0AAF42",
    green10: "#DEFBE6",
    green20: "#A7F0BA",
    green30: "#6FDC8C",
    green40: "#42BE65",
    green50: "#24A148",
    green60: "#198038",
    green70: "#0E6027",
    green80: "#044317",
    green90: "#022D0D",
    green100: "#071908",
    gray5: "#F7F8FA",
    gray10: "#F4F4F4",
    gray20: "#E0E0E0",
    gray30: "#C6C6C6",
    gray40: "#A8A8A8",
    gray50: "#8D8D8D",
    gray60: "#6F6F6F",
    gray70: "#525252",
    gray80: "#393939",
    gray90: "#262626",
    gray100: "#161616",
    white: "#FFFFFF",
    black: "#000000",
    like: "#FA4D56",
};

const deviceSizes = {
    desktop: "1440px",
    laptop: "1439px",
    tablet: "1023px",
};

const device = {
    desktop: `screen and (min-width: ${deviceSizes.desktop})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
    colors,
    device,
};

export default theme;
