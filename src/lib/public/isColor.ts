export default (
    color: string
): { color: boolean, colorSystem: string | null } => {
    const colorRegex: any = {
        hex: /^#[a-f0-9]{6}$/i,
        rgb: /^rgb\( ?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]), ?([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5]) ?\)$/i,
        hsl: /^hsl\( ?([0-2]?[0-9]{1,2}|3[0-5][0-9]|360), ?([0-9]|[1-9][0-9]|100)%?, ?([0-9]|[1-9][0-9]|100)%? ?\)$/i,
        hsv: /^hsv\( ?([0-2]?[0-9]{1,2}|3[0-5][0-9]|360), ?([0-9]|[1-9][0-9]|100)%?, ?([0-9]|[1-9][0-9]|100)%? ?\)$/i,
        cmyk: /^cmyk\( ?([0-9]|[1-9][0-9]|100)%?, ?([0-9]|[1-9][0-9]|100)%?, ?([0-9]|[1-9][0-9]|100)%?, ?([0-9]|[1-9][0-9]|100)%? ?\)$/i
    }

    type result = {
        color: boolean,
        colorSystem: string | null
    }

    let result: result = {
        color: false,
        colorSystem: null
    }

    if (!color || typeof color !== "string") {
        throw new TypeError(`Received type ${typeof color} expected string`)
    }

    for (let prop in colorRegex) {
        if (colorRegex[prop].test(color)) {
            result.color = true
            result.colorSystem = prop

            break;
        }
    }

    return result;
}