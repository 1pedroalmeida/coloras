import prompts from "prompts"
import { Color, isColor } from "../../lib/index";

export default (copy?: boolean) => {
    
    prompts({
        type: "text",
        name: "color",
        message: "Insert the color code you would like to get an image url from",
        validate: (value: any) => {
            return (value.length === 0 ? "[i] color code cannot be empty!" : !(isColor(value).color) ? "[✖] input is not a valid color code" : true)
        }
    }).then((response: any) => {
        const color = new Color(response.color)

        if (!response.color.length) process.exit();

        console.log(
            "\x1b[32m%s\x1b[0m",
            `\n\n[√] image url for ${response.color}: ${color.imageUrl}`
        );

        if (copy) {
            require("child_process").spawn("clip").stdin.end(color.imageUrl);
            console.log("\x1b[36m%s\x1b[0m", "[i] copied to clipboard");
        }
    });

    process.on("uncaughtException", () => {
        process.exit();
    });
}