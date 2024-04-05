import { extendDeploymentConfig } from "scripts";
const config = extendDeploymentConfig({ name: "plh_facilitator_mx", parent: "plh_facilitator" });

config.google_drive.sheets_folder_ids =  ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1rFg8qsmb3xSOXw_9Iwxk8RgSmyjqiao9"];
config.google_drive.assets_folder_ids = ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "1tr76W9OusHHkjJ4DNR84x-B26VgGCSFy"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-mx-content.git",
  content_tag_latest: "1.2.0",
};

config.android = {
  app_id:'international.idems.plh_facilitator_mx',
  app_name:'Formando Conciencia+',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios = {
  app_id: 'international.idems.plh-facilitator-mx',
  app_name: 'Formando Conciencia+',
}

config.web.favicon_asset = "images/logos/bird_on_light.svg";
config.api.db_name = "plh_facilitator_mx"

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// Hacky fix to point extended deployment to content within its own repo
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "mx_es";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Formando Conciencia+";
config.app_config.APP_HEADER_DEFAULTS.title = "Formando Conciencia+";
config.app_config.NOTIFICATION_DEFAULTS.title = "Nuevo mensaje de Formando Conciencia+";
config.app_config.NOTIFICATION_DEFAULTS.text = "Tienes un mensaje nuevo de Formando Conciencia+";
config.app_config.APP_THEMES.available = ["plh_facilitator_mx"];
config.app_config.APP_THEMES.defaultThemeName = "plh_facilitator_mx";

config.error_logging = { dsn: "https://5adf6bcd892f43cd91d6eaa22cc45e40@app.glitchtip.com/5665"};

export default config;
