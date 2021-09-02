#!/usr/bin/env node
"use strict";

process.title = "coloras";

import convert from "./functions/convert";
import generate from "./functions/generate";
import help from "./functions/help";
import image from "./functions/image";
import version from "./functions/version";

const eggs = process.argv.slice(2); // args

if (eggs.length) {

    switch (eggs[0].toLowerCase()) {
        case "conv":
        case "convert":

            process.title = "coloras convert"

            if (eggs[1]) {
                if (eggs[1].toLowerCase() == "-copy" || eggs[1].toLowerCase() == "-c") {
                    convert(true);
                }
            } else {
                convert()
            }

            break;
        case "gen":
        case "generate":

            process.title = "coloras generate"

            if (eggs[1]) {
                if (eggs[1].toLowerCase() == "-copy" || eggs[1].toLowerCase() == "-c") {
                    generate(true);
                }
            } else {
                generate()
            }

            break;
        case "img":
        case "image":

            process.title = "coloras image"

            if (eggs[1]) {
                if (eggs[1].toLowerCase() == "-copy" || eggs[1].toLowerCase() == "-c") {
                    image(true);
                }
            } else {
                image()
            }

            break;
        case "help":
            help();
            break;
        case "-v":
        case "-version":
            version();
            break;
    }
} else {
    help()
}