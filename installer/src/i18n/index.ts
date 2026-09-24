import { zh } from "./zh";
import type { Locale, Messages } from "./types";
import { invoke } from "@tauri-apps/api/core";

export const LOCALE_STORAGE_KEY = "sb-locale";
export const LOCALE_CHANGE_EVENT = "sb-locale-change";

const catalogs: Record<Locale, Messages> = { zh };

let currentLocale: Locale = "zh";

function syncLocaleToRust(locale: Locale): void {
  void invoke("set_locale", { locale }).catch(() => {
    /* not running inside Tauri during dev in browser */
  });
}

function readStoredLocale(): Locale {
  return "zh";
}

export function initI18n(): Locale {
  currentLocale = readStoredLocale();
  document.documentElement.lang = "zh-CN";
  syncLocaleToRust(currentLocale);
  return currentLocale;
}

export function getLocale(): Locale {
  return currentLocale;
}

type Path = keyof Messages | `${keyof Messages}.${string}`;

function resolve(path: string, messages: Messages): string | undefined {
  const parts = path.split(".");
  let node: unknown = messages;
  for (const part of parts) {
    if (node == null || typeof node !== "object") return undefined;
    node = (node as Record<string, unknown>)[part];
  }
  return typeof node === "string" ? node : undefined;
}

/** Translate a dotted key. Optional `{name}` placeholders in the string. */
export function t(path: Path, params?: Record<string, string>): string {
  const raw = resolve(path, catalogs.zh) ?? path;
  if (!params) return raw;
  return raw.replace(/\{(\w+)\}/g, (_, key: string) => params[key] ?? `{${key}}`);
}
