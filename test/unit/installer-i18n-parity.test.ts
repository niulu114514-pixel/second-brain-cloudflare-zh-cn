/** 桌面安装器的单一简体中文语言包完整性检查。 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { zh } from "../../installer/src/i18n/zh";

type Catalog = Record<string, unknown>;

function flatten(node: unknown, prefix = ""): Map<string, unknown> {
  const out = new Map<string, unknown>();
  if (node === null || typeof node !== "object" || Array.isArray(node)) {
    out.set(prefix, node);
    return out;
  }
  for (const [key, value] of Object.entries(node as Catalog)) {
    const path = prefix ? `${prefix}.${key}` : key;
    for (const [nestedPath, nestedValue] of flatten(value, path)) {
      out.set(nestedPath, nestedValue);
    }
  }
  return out;
}

const zhFlat = flatten(zh);
const ROOT = resolve(import.meta.dirname, "../..");

describe("桌面安装器中文语言包", () => {
  it("只保留中文语言包", () => {
    expect(existsSync(resolve(ROOT, "installer/src/i18n/en.ts"))).toBe(false);
    expect(existsSync(resolve(ROOT, "installer/src/i18n/it.ts"))).toBe(false);
    expect(existsSync(resolve(ROOT, "installer/src/i18n/zh.ts"))).toBe(true);
  });

  it("包含完整且非空的文案", () => {
    expect(zhFlat.size).toBeGreaterThan(400);
    for (const [path, value] of zhFlat) {
      expect(typeof value, `${path} 不是字符串`).toBe("string");
      expect(String(value).trim().length, `${path} 为空`).toBeGreaterThan(0);
    }
  });

  it("关键安装与团队流程均有中文文案", () => {
    for (const key of [
      "details.teamCardBodyAdmin",
      "details.teamCardBodyMember",
      "connectExisting.passwordPlaceholder",
      "details.updateDescOther",
      "details.updateDescLegacy",
    ]) {
      expect(String(zhFlat.get(key)).trim().length, `${key} 缺失`).toBeGreaterThan(0);
    }
  });
});
