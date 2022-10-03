import { hasManisfest } from "./hasManisfest";
import fs from "fs/promises"
import { Dirent } from "fs";

const listWithManifest = [
  '.editorconfig',
  'manifest.json',
  'node_modules',
  'package.json',
  'README.md',
  'src',
  'tsconfig.json',
  'yarn.lock' ] as unknown as Dirent[]

const listWithoutManifest = [
  '.editorconfig',
  'node_modules',
  'package.json',
  'README.md',
  'src',
] as unknown as Dirent[]

const mockFS = jest.spyOn(fs, "readdir")

describe("unit - hasManisfest", () => { 

  it("should return true if has a manifest", async () => {
    mockFS.mockResolvedValue(listWithManifest);
    const result = await hasManisfest("./");

    expect(result).toBeTruthy();
    expect(result).toContain("./manifest.json");
  });

  it("should return false if has not a manifest", async () => {
    mockFS.mockResolvedValue(listWithoutManifest);
    const result = await hasManisfest("./");

    expect(result).toEqual([]);
    expect(result).not.toContain("./manifest.json");
  });
  
});