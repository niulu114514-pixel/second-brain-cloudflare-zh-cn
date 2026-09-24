/** Shared vm bootstrap so UI tests load dashboard i18n before utils.js. */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const ROOT = resolve(import.meta.dirname, "../..");

export function installI18n(ctx: any, _locale: "en" | "it" | "zh" = "zh") {
  if (!ctx.localStorage) {
    const m = new Map<string, string>();
    ctx.localStorage = {
      getItem: (k: string) => m.get(k) ?? null,
      setItem: (k: string, v: string) => m.set(k, v),
    };
  }
  if (!ctx.navigator) ctx.navigator = { language: "zh-CN" };
  if (!ctx.document) ctx.document = {};
  if (!ctx.document.documentElement) ctx.document.documentElement = { lang: "zh-CN" };
  if (!ctx.document.querySelectorAll) ctx.document.querySelectorAll = () => [];
  vm.runInContext(readFileSync(resolve(ROOT, "public/js/i18n.js"), "utf8"), ctx);
  ctx.initI18n();
}
