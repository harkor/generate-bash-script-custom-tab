import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const run = async () => {
  const tabsConfig = await fs.promises.readFile(
    `./configs/${process.argv[2]}.json`,
    "utf8"
  );
  const tabsConfigParsed = JSON.parse(tabsConfig);

  let shortcut = "";
  shortcut += process.env.WT_LOCATION;

  tabsConfigParsed.forEach((item, i) => {
    if (i !== 0) {
      shortcut += " ; new-tab";
    }

    shortcut += ` -p "${item.profile}" -d "${item.directory}" ${
      item.title ? `--title "${item.title}"` : ""
    } ${item.color ? `--tabColor "${item.color}"` : ""}`;
  });

  const filePath = `./scripts/${process.argv[2]}.cmd`;
  fs.writeFileSync(filePath, shortcut);

  console.log(`File generated in ${filePath}`);
};

run();
