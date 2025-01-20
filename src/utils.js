const getBrightness = (hexColor) => {
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    console.log(0.2126 * r + 0.7152 * g + 0.0722 * b)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export { getBrightness }