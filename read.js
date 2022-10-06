import { readFile } from "fs/promises";
import fs from "fs";

let jsonProducts = JSON.parse(
  await readFile(new URL("./mock-data.json", import.meta.url))
);

jsonProducts.map((product) => {
  product.createdBy = "62ce8754ced62d8fee305e4e";
});

fs.writeFile("file.json", JSON.stringify(jsonProducts), (error) => {
  if (error) throw error;
});
