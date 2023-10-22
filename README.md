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

## Resize image:
Sharpen gives you the ability to resize images to your desired dimensions:
```shell
sharpen resize -h 800 ./mushroom.jpg
```
With this command, a new image will be created with a height of 800 pixels while maintaining the original aspect ratio.

## Convert image to different format:

Sharpen empowers you to easily change the format of your images. You can specify the output format using the `-f` or `--format` option:

```shell
sharpen format -f webp ./input.jpg ./output.webp
```

The filename is automatically derived from the input file, and if no output is provided, it will have the same name as the input with the chosen extension.

```shell
sharpen format -f png ./mushroom.jpg
```
For this command, the output image will be named mushroom.png.

## Output to multiple sizes at once:
You can also generate multiple resized images in one go:
```shell
sharpen resize -m200,400,600 ./input.jpg
```
This will create three images, `output_200.jpg`, `output_400.jpg`, and `output_600.jpg`, each with a different size.

This command will produce three images with heights of 200, 400, and 600 pixels, respectively, all from the same input image.

## Troubleshooting:

If you are having trouble using Sharpen, please check the following:

- Make sure that you have installed the Sharpen CLI tool correctly.
- Make sure that you are running the sharpen command from the correct directory.
- Make sure that you are using the correct syntax for the Sharpen command.
- Make sure that the input image file exists.

If you are still having trouble, please feel free to open an issue on the Sharpen GitHub repository.

## Additional notes:

- Sharpen can also be used to crop images, adjust brightness and contrast, and apply other image processing effects.
- Sharpen can be used to read and write images from and to streams. This can be useful for processing images from websites or other sources.
- Sharpen is a free and open source project. You can contribute to Sharpen by filing bug reports, submitting pull requests, or donating to the project.
  
I hope this information is helpful.
