# Predefined tabs generator for Windows Terminal

## Requirements

- node
- pnpm

## Setup

Copy .env.dist in .env and edit variables

Then execute

```bash
pnpm install
```

## Usage

Create a config file in 'configs' folder in json with this kind of format

```json
[
  {
    "profile": "DebianCustomTab",
    "title": "Root",
    "directory": "~/projects/magellan/front"
  },
  {
    "profile": "DebianCustomTab",
    "title": "Assets",
    "directory": "~/projects/magellan/front/shared/assets",
    "color": "#01b765"
  },
  ...
]
```

Then launch the generation command with the name of your config
```
pnpm run generate example
```

## Tips

If the tab auto renamed with the path you can disable this feature inside profile configuration.

Settings > your profile > Advanced > Suppress title changes > **Off** to **On**
