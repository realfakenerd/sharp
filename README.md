# Sharpen
### Sharpen your vision

Sharpen is a command-line tool for sharpening and manipulating images. It is easy to use, fast, and supports multiple output formats.

**Benefits of using Sharpen**:

- Sharpen is easy to use. Simply run the sharpen command followed by the desired options.
- Sharpen is fast. It uses the sharp node package to process images quickly and efficiently.
- Sharpen supports multiple output formats, including JPEG, PNG, WebP, and AVIF.
- Sharpen can output to multiple sizes at once. This can be useful for creating thumbnail images or different sizes of images for different devices.
- Sharpen can be used to automate image processing tasks. For example, you can write a script to sharpen all of the images in a directory.

## Installation

Getting started with Sharpen is a breeze. Whether you prefer npm, yarn, or pnpm, you can install it globally with ease:

```shell
# Using npm
npm install -g sharpen

# Using yarn
yarn global add sharpen

# Using pnpm
pnpm add -g sharpen
```

## Usage:

```shel
sharpen sharpen ./input.jpg ./output.jpg
```

## Resize image:
```shell
sharpen resize -h 800 ./input.jpg ./output.jpg
```

## Convert image to different format:
```shell
sharpen format -f webp ./input.jpg ./output.webp
```

## Output to multiple sizes at once:
```shell
sharpen resize -m200,400,600 ./input.jpg
```
Examples:

Sharpen an image and save the output as output.jpg:
sharpen sharpen ./input.jpg ./output.jpg
Resize an image to 800 pixels high and save the output as output.jpg:
sharpen resize -h 800 ./input.jpg ./output.jpg
Convert an image to WebP format and save the output as output.webp:
sharpen format -f webp ./input.jpg ./output.webp
Output an image to multiple sizes at once:
shahis will create three images: output_200.jpg, output_400.jpg, and output_600.jpg, each with a different size.

Troubleshooting:

If you are having trouble using Sharpen, please check the following:

Make sure that you have installed the Sharpen CLI tool correctly.
Make sure that you are running the sharpen command from the correct directory.
Make sure that you are using the correct syntax for the Sharpen command.
Make sure that the input image file exists.
If you are still having trouble, please feel free to open an issue on the Sharpen GitHub repository.

Additional notes:

Sharpen can also be used to crop images, adjust brightness and contrast, and apply other image processing effects.
Sharpen can be used to read and write images from and to streams. This can be useful for processing images from websites or other sources.
Sharpen is a free and open source project. You can contribute to Sharpen by filing bug reports, submitting pull requests, or donating to the project.
I hope this information is helpful.
