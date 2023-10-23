# Sharpen

## Sharpen your vision

Sharpen is a versatile command-line tool designed for image enhancement and manipulation. It offers ease of use, speed, and support for various output formats.

**Benefits of using Sharpen**:

- **Ease of Use**: Sharpen simplifies image processing. Just run the sharpen command with your desired options.
- **Speed**: It employs the sharp Node.js package for efficient and fast image processing.
- **Multiple Output Formats**: Sharpen supports various output formats, including JPEG, PNG, WebP, and AVIF.
- **Batch Resizing**: Easily create multiple image sizes at once, useful for thumbnails and different device sizes.
- **Automation**: Automate image processing tasks with scripts, like sharpening all images in a directory.

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

## Usage

### Resize image

Sharpen gives you the ability to resize images to your desired dimensions, for example:

```shell
sharpen resize -h 800 ./mushroom.jpg
```

With this command, a new image will be created with a height of 800 pixels while maintaining the original aspect ratio.

### Convert image to a different format

Sharpen empowers you to easily change the format of your images. You can specify the output format using the `-f` or `--format` option:

```shell
sharpen format -f webp ./input.jpg ./output.webp
```

The filename is automatically derived from the input file, and if no output is provided, it will have the same name as the input with the chosen extension.

```shell
sharpen format -f png ./mushroom.jpg
```

For this command, the output image will be named `mushroom.png`.

### Output to multiple sizes at once

You can also generate multiple resized images in one go:

```shell
sharpen resize -m200,400,600 ./input.jpg
```

This will create three images, `output_200.jpg`, `output_400.jpg`, and `output_600.jpg`, each with a different size.

This command will produce three images with heights of 200, 400, and 600 pixels, respectively, all from the same input image.

## Troubleshooting

If you are having trouble using Sharpen, please check the following:

- Ensure you've installed the Sharpen CLI tool correctly.
- Confirm you're running the `sharpen` command from the correct directory.
- Double-check your command syntax.
- Verify that the input image file exists.

If you are still having trouble, please feel free to open an issue on the Sharpen GitHub repository.

## Additional notes

- Sharpen can perform tasks like cropping images, adjusting brightness, contrast, and applying various image processing effects.
- It can read and write images from/to streams, useful for processing images from websites or other sources.
- Sharpen is an open-source project, and contributions through bug reports, pull requests, or donations are welcome.
