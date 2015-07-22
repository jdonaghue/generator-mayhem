# Yeoman Mayhem Generator

`generator-mayhem` creates a base template to start a new [Mayhem](https://github.com/SitePen/mayhem) project.

*Note this source was originally taken from [this commit](https://github.com/SitePen/mayhem/commit/569f2c0be77126f5acbfc72d3f1daac361afb369)*

## Install

For now this is not registered as an npm module, so you will have to do it yourself locally

```bash
npm link
```

## Usage

```
$ yo mayhem
```

*Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files.*

### Options

Here's a list of our supported options:

- `stylus` (Boolean, default true)

### Sub generators

If you don't need all the features provided by the main generator, you can still use a limited set of features by composing with our sub generators directly.

Remember you can see the options of each sub generators by running `yo mayhem:<sub> --help`.

- `mayhem:model`
