import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator_mx");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_ids: ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1rFg8qsmb3xSOXw_9Iwxk8RgSmyjqiao9"],
  assets_folder_ids: ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "1tr76W9OusHHkjJ4DNR84x-B26VgGCSFy"],
};

config.android = {
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.web.favicon_asset = "images/logos/bird_on_light.svg";

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-mx-content.git",
  content_tag_latest: "1.1.34",
};

config.api.db_name = "plh_facilitator_mx"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "mx_es";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Formando Conciencia+";
config.app_config.APP_HEADER_DEFAULTS.title = "Formando Conciencia+";
config.app_config.NOTIFICATION_DEFAULTS.title = "Nuevo mensaje de Formando Conciencia+";
config.app_config.NOTIFICATION_DEFAULTS.text = "Tienes un mensaje nuevo de Formando Conciencia+";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.error_logging = { dsn: "https://5adf6bcd892f43cd91d6eaa22cc45e40@app.glitchtip.com/5665"};

export default config;
