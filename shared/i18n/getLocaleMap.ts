import fs from "fs";
import path from "path";
import util from "util";

import * as types from "./types";

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const root = process.cwd();
const locales = path.join(root, "locales");

export async function getLocaleMap() {
  const fileNames = await readdir(locales);

  const localeMap: types.LocaleMap = {};

  await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(locales, fileName);
      const file = await readFile(filePath, "utf8");
      const locale = JSON.parse(file);

      localeMap[fileName.replace(".json", "")] = locale;
    })
  );

  return {
    localeMap,
  };
}
