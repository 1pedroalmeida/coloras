import prompts from "prompts"
import { Color, isColor } from "../../lib/index";

export default async (copy?: boolean) => {

    const { conv_from_data } = await prompts({
        type: "select",
        name: "conv_from_data",
        message:
            "Choose the color system that you would like to convert a color code from",
        choices: [
            {
                title: "hex",
                value: "hex",
            },
            {
                title: "rgb",
                value: "rgb",
            },
            {
                title: "hsl",
                value: "hsl",
            },
            {
                title: "hsv",
                value: "hsv",
            },
            {
                title: "cmyk",
                value: "cmyk",
            },
        ],
    });

    const conv_to_data_choices: any = conv_from_data === "hex" ? [{ title: "rgb", value: "rgb", }, { title: "hsl", value: "hsl", }, { title: "hsv", value: "hsv", }, { title: "cmyk", value: "cmyk", },] : conv_from_data === "rgb" ? [{ title: "hex", value: "hex", }, { title: "hsl", value: "hsl", }, { title: "hsv", value: "hsv", }, { title: "cmyk", value: "cmyk", },] : conv_from_data === "hsl" ? [{ title: "hex", value: "hex", }, { title: "rgb", value: "rgb", }, { title: "hsv", value: "hsv", }, { title: "cmyk", value: "cmyk", },] : conv_from_data === "hsv" ? [{ title: "hex", value: "hex", }, { title: "rgb", value: "rgb", }, { title: "hsl", value: "hsl", }, { title: "cmyk", value: "cmyk", },] : conv_from_data === "cmyk" ? [{ title: "hex", value: "hex", }, { title: "rgb", value: "rgb", }, { title: "hsl", value: "hsl", }, { title: "hsv", value: "hsv", },] : null;

    prompts([
        {
            type: "select",
            name: "conv_to_data",
            message:
                "Choose the color system that you would like to convert a color code to",
            choices: conv_to_data_choices
        },
        {
            type: "text",
            name: "conv_color",
            message: "Insert the color code you would like to convert",
            validate: (value: any) => {
                return (value.length === 0 ? "[i] color code cannot be empty!" : isColor(value).colorSystem !== conv_from_data ? "[✖] input is not a valid color code" : true)
            }
        }
    ]).then((response: { conv_to_data: any, conv_color: any }) => {

        const conversionFunc: "toHex" | "toRgb" | "toHsl" | "toHsv" | "toCmyk" | null = response.conv_to_data === "hex" ? "toHex" : response.conv_to_data === "rgb" ? "toRgb" : response.conv_to_data === "hsl" ? "toHsl" : response.conv_to_data === "hsv" ? "toHsv" : response.conv_to_data === "cmyk" ? "toCmyk" : null;
        if (conversionFunc == null) return;
        
        if (!response.hasOwnProperty("conv_to_data") || !response.hasOwnProperty("conv_color")) process.exit();

        const color = new Color(response.conv_color);

        console.log(
            "\x1b[32m%s\x1b[0m",
            `\n\n[√] converted to ${color[conversionFunc]()}`
        );

        if (copy) {
            require("child_process").spawn("clip").stdin.end(color[conversionFunc]());
            console.log("\x1b[36m%s\x1b[0m", "[i] copied to clipboard");
        }
    });

    process.on("uncaughtException", () => {
        process.exit();
    });
};