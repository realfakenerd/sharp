
<div align="center">
  <h1>Sharpen</h1>
  <h3>Sharp CLI Tool to sharpen your vision</h3>
</div>

Sharpen is a CLI tool for the sharp node package.
It makes processing images directly on your terminal simple.

Wanna resize your image file? Do it in seconds with 
sharpen, or even better, you can output multiple sizes at once.
It uses the same api as sharp, but with a little more.

## Installing

```shell
# of course it works with plain old npm and yarn
pnpm add -g sharpen
```

## Usage 

### format 

You can force the output to the given format.
```shell
# sharp works as alias too
sharpen format -f webp ./mushroom.avif ./mushroom.webp
```

Filename it's extracted from the input, so if no
output is given, it will be the same as input
with the chosen extension.
```shell

sharpen format -f png ./mushroom.jpg
```
The output will be `./mushroom.png` for the command above.
Can be used with `--format` too instead of `-f`.

### resize

You can resize the input to a new size
```shell

sharpen resize -h 800 ./mushroom.jpg
```
With this command it creates a new image with 800 pixels
high, if only one size is given, it maintains aspect ratio.

Also, you can output to multiple sizes at once.
```shell
sharpen resize -m200,400,600 ./mushroom.jpg
```
This command will output 3 images with 200, 400 and 600 pixels high.
