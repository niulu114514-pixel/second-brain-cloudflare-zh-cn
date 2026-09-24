//! Native UI strings (menu, tray, dialogs, user-facing command errors).
//! Kept in Rust so they work in every window, including the remote dashboard
//! wrapper which has no bundled webview i18n.

use std::path::{Path, PathBuf};
use std::sync::Mutex;

const LOCALE_FILE: &str = "locale";

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Locale {
    Zh,
}

impl Locale {
    pub fn parse(s: &str) -> Option<Self> {
        match s.trim().to_lowercase().as_str() {
            "zh" | "zh-cn" | "zh-hans" => Some(Self::Zh),
            _ => None,
        }
    }

    pub fn as_str(self) -> &'static str {
        "zh"
    }

    /// 单语言版本始终使用简体中文。
    pub fn from_system() -> Self {
        Self::Zh
    }
}

/// Keys for native strings. User-facing command errors use the `Error*` variants.
#[derive(Debug, Clone, Copy)]
pub enum Key {
    // Menu / tray
    MenuOpenDashboard,
    MenuConnections,
    MenuSyncNotion,
    MenuCheckUpdates,
    MenuLogout,
    SubmenuConnections,
    MenuFile,
    MenuEdit,
    MenuView,
    MenuWindow,
    MenuHelp,
    MenuSettings,
    WindowSettings,
    SettingsButtonLabel,
    SettingsButtonTooltip,
    ErrorBrainNeedsUpdateForSettings,
    TrayOpen,
    TrayQuit,
    CreditsCreatedBy,
    CreditsMaintainersLabel,
    OAuthSuccessTitle,
    OAuthSuccessBody,
    OAuthDeniedTitle,
    OAuthDeniedBody,
    // Dialogs
    LogoutTitle,
    LogoutMessage,
    LogoutConfirm,
    Cancel,
    NotionSyncTitle,
    AppUpdateUpToDateTitle,
    AppUpdateUpToDateMessage,
    AppUpdateCheckFailedTitle,
    AppUpdateCheckFailedMessage,
    AppUpdateAvailableTitle,
    AppUpdateAvailableMessage,
    AppUpdateWhatsNew,
    AppUpdateNow,
    AppUpdateLater,
    AppUpdateFailedTitle,
    AppUpdateFailedMessage,
    WorkerUpdateTitle,
    WorkerUpdateMessage,
    OpenDashboardFailed,
    OpenDashboardNotSetup,
    // Window / injected UI
    WindowSecondBrain,
    WindowConnections,
    ConnectionsButtonLabel,
    ConnectionsButtonTooltip,
    // Command errors
    ErrorBadUrl,
    ErrorEmptyPassword,
    ErrorWrongPassword,
    ErrorNotABrain,
    ErrorCantReach,
    ErrorSetupNotFinished,
    ErrorPasswordTooShort,
    ErrorFriendlyRetry,
    ErrorSecureStoreSetup,
    ErrorSecureStoreConnect,
    ErrorUnknownTool,
    ErrorNoHomeFolder,
    ErrorMcpConfigFailed,
    ErrorCliConfigFailed,
    ErrorInstallInterrupted,
    ErrorClipboardFailed,
    ErrorOpenWindowFailed,
    ErrorCfNoAccount,
    ErrorCfSignInFirst,
    ErrorCfSignInExpired,
    ErrorNotionSynced,
    ErrorNotionUpToDate,
    ErrorCfAccountListFailed,
    ErrorBrainNeedsUpdateForMigration,
    ErrorUnknownEmbeddingModel,
    ErrorMigrationHalfSwitched,
    ErrorCannotDeleteLiveIndex,
    ErrorNoOldIndexToFree,
    ErrorCfNoSubdomain,
    ErrorCfDiscoverFailed,
    ErrorChoosePasswordFirst,
    ErrorLinkNotAllowed,
    ErrorOpenBrowserFailed,
    ErrorReachBrain,
    ErrorComputerNotSetup,
    ErrorCustomDomain,
    ErrorWrongCfAccount,
    ErrorBrainRefusedPassword,
    ErrorProvisioningDetail,
    ErrorBrainHttpStatus,
    ErrorBrainUnexpected,
    ErrorNotionSyncFailed,
    // Changing the password (#235). Each of these is a {detail} inside a screen
    // the webview owns, never a screen of its own — every failure state in that
    // flow has to carry the new password, which a bare error string cannot do.
    ErrorRotateBlocked,
    ErrorRotateNeedsHttps,
    ErrorRotateNotConfirmed,
    ErrorRotateSecureStore,
    ErrorNeedsHttps,
    GuardExistingBrain,
    GuardNameConflict,
    ErrorInvalidLocale,
    ResourceKindMemoryStorage,
    ResourceKindSmartSearch,
    ResourceKindWebApp,
}

pub fn t(_locale: Locale, key: Key) -> &'static str {
    crate::i18n_zh::t(key)
}

/// Replace `{name}` placeholders in a translated string.
pub fn t_fmt(locale: Locale, key: Key, params: &[(&str, &str)]) -> String {
    let mut s = t(locale, key).to_string();
    for (name, value) in params {
        s = s.replace(&format!("{{{name}}}"), value);
    }
    s
}

// ── Locale persistence & app state ───────────────────────────────────────────

/// Current UI locale, shared across commands and native UI.
pub struct AppLocale(pub Mutex<Locale>);

impl AppLocale {
    pub fn new(locale: Locale) -> Self {
        Self(Mutex::new(locale))
    }

    pub fn get(&self) -> Locale {
        *self.0.lock().unwrap()
    }

    pub fn set(&self, locale: Locale) {
        *self.0.lock().unwrap() = locale;
    }
}

pub fn locale_file_path(config_dir: &Path) -> PathBuf {
    config_dir.join(LOCALE_FILE)
}

pub fn read_stored_locale(config_dir: &Path) -> Option<Locale> {
    let content = std::fs::read_to_string(locale_file_path(config_dir)).ok()?;
    Locale::parse(content.trim())
}

pub fn write_stored_locale(config_dir: &Path, locale: Locale) -> std::io::Result<()> {
    std::fs::create_dir_all(config_dir)?;
    std::fs::write(locale_file_path(config_dir), locale.as_str())
}

pub fn resolve_initial_locale(config_dir: Option<&Path>) -> Locale {
    if let Some(dir) = config_dir {
        if let Some(locale) = read_stored_locale(dir) {
            return locale;
        }
    }
    Locale::from_system()
}

#[cfg(test)]
mod tests {
    use super::*;

    fn all_keys() -> &'static [Key] {
        use Key::*;
        &[
            MenuOpenDashboard,
            MenuConnections,
            MenuSyncNotion,
            MenuCheckUpdates,
            MenuLogout,
            SubmenuConnections,
            MenuFile,
            MenuEdit,
            MenuView,
            MenuWindow,
            MenuHelp,
            MenuSettings,
            WindowSettings,
            SettingsButtonLabel,
            SettingsButtonTooltip,
            ErrorBrainNeedsUpdateForSettings,
            TrayOpen,
            TrayQuit,
            CreditsCreatedBy,
            CreditsMaintainersLabel,
            OAuthSuccessTitle,
            OAuthSuccessBody,
            OAuthDeniedTitle,
            OAuthDeniedBody,
            LogoutTitle,
            LogoutMessage,
            LogoutConfirm,
            Cancel,
            NotionSyncTitle,
            AppUpdateUpToDateTitle,
            AppUpdateUpToDateMessage,
            AppUpdateCheckFailedTitle,
            AppUpdateCheckFailedMessage,
            AppUpdateAvailableTitle,
            AppUpdateAvailableMessage,
            AppUpdateWhatsNew,
            AppUpdateNow,
            AppUpdateLater,
            AppUpdateFailedTitle,
            AppUpdateFailedMessage,
            WorkerUpdateTitle,
            WorkerUpdateMessage,
            OpenDashboardFailed,
            OpenDashboardNotSetup,
            WindowSecondBrain,
            WindowConnections,
            ConnectionsButtonLabel,
            ConnectionsButtonTooltip,
            ErrorBadUrl,
            ErrorEmptyPassword,
            ErrorWrongPassword,
            ErrorNotABrain,
            ErrorCantReach,
            ErrorSetupNotFinished,
            ErrorPasswordTooShort,
            ErrorFriendlyRetry,
            ErrorSecureStoreSetup,
            ErrorSecureStoreConnect,
            ErrorUnknownTool,
            ErrorNoHomeFolder,
            ErrorMcpConfigFailed,
            ErrorCliConfigFailed,
            ErrorInstallInterrupted,
            ErrorClipboardFailed,
            ErrorOpenWindowFailed,
            ErrorCfNoAccount,
            ErrorCfSignInFirst,
            ErrorCfSignInExpired,
            ErrorBrainNeedsUpdateForMigration,
            ErrorUnknownEmbeddingModel,
            ErrorMigrationHalfSwitched,
            ErrorCannotDeleteLiveIndex,
            ErrorNoOldIndexToFree,
            ErrorCfNoSubdomain,
            ErrorCfDiscoverFailed,
            ErrorNotionSynced,
            ErrorNotionUpToDate,
            ErrorCfAccountListFailed,
            ErrorChoosePasswordFirst,
            ErrorLinkNotAllowed,
            ErrorOpenBrowserFailed,
            ErrorReachBrain,
            ErrorComputerNotSetup,
            ErrorCustomDomain,
            ErrorWrongCfAccount,
            ErrorBrainRefusedPassword,
            ErrorProvisioningDetail,
            ErrorBrainHttpStatus,
            ErrorBrainUnexpected,
            ErrorNotionSyncFailed,
            ErrorRotateBlocked,
            ErrorRotateNeedsHttps,
            ErrorRotateNotConfirmed,
            ErrorRotateSecureStore,
            ErrorNeedsHttps,
            GuardExistingBrain,
            GuardNameConflict,
            ErrorInvalidLocale,
            ResourceKindMemoryStorage,
            ResourceKindSmartSearch,
            ResourceKindWebApp,
        ]
    }

    #[test]
    fn parse_locale() {
        assert_eq!(Locale::parse("en"), None);
        assert_eq!(Locale::parse("IT"), None);
        assert_eq!(Locale::parse("zh-CN"), Some(Locale::Zh));
        assert_eq!(Locale::parse("fr"), None);
    }

    #[test]
    fn chinese_menu_strings() {
        assert_eq!(t(Locale::Zh, Key::MenuOpenDashboard), "打开仪表盘");
        assert_eq!(t(Locale::Zh, Key::SubmenuConnections), "连接");
    }

    #[test]
    fn t_fmt_replaces_placeholders() {
        let s = t_fmt(Locale::Zh, Key::ErrorPasswordTooShort, &[("min", "12")]);
        assert!(s.contains("12"));
        let s = t_fmt(Locale::Zh, Key::WorkerUpdateMessage, &[("version", "1.2.3")]);
        assert!(s.contains("1.2.3"));
    }

    #[test]
    fn locale_file_roundtrip() {
        let dir = std::env::temp_dir().join(format!("sb-locale-test-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        write_stored_locale(&dir, Locale::Zh).unwrap();
        assert_eq!(read_stored_locale(&dir), Some(Locale::Zh));
        let _ = std::fs::remove_dir_all(&dir);
    }

    #[test]
    fn resolve_initial_locale_prefers_stored_over_system() {
        let dir = std::env::temp_dir().join(format!("sb-locale-resolve-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        write_stored_locale(&dir, Locale::Zh).unwrap();
        assert_eq!(resolve_initial_locale(Some(&dir)), Locale::Zh);
        let _ = std::fs::remove_dir_all(&dir);
    }

    #[test]
    fn resolve_initial_locale_falls_back_without_stored_file() {
        let dir = std::env::temp_dir().join(format!("sb-locale-missing-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        // No locale file → same result as from_system().
        assert_eq!(resolve_initial_locale(Some(&dir)), Locale::from_system());
        assert_eq!(resolve_initial_locale(None), Locale::from_system());
    }

    #[test]
    fn every_key_has_non_empty_chinese_string() {
        for &key in all_keys() {
            let zh = t(Locale::Zh, key);
            assert!(!zh.is_empty(), "empty ZH string for {key:?}");
        }
    }
}
