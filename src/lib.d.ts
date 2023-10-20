import {
	FormatEnum,
	OutputOptions,
	JpegOptions,
	PngOptions,
	WebpOptions,
	AvifOptions,
	HeifOptions,
	JxlOptions,
	GifOptions,
	Jp2Options,
	TiffOptions
} from 'sharp';

interface InputOutput {
	input: string;
	output?: string;
}

interface Size {
	width?: number;
	height?: number;
}

interface ResizeOptions extends InputOutput {
	size: Size;
	// multi?: string[];
}

interface FormatOptions extends InputOutput {
	format: keyof FormatEnum;
	options?:
		| OutputOptions
		| JpegOptions
		| PngOptions
		| WebpOptions
		| AvifOptions
		| HeifOptions
		| JxlOptions
		| GifOptions
		| Jp2Options
		| TiffOptions;
}
