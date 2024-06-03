import { getConfig } from '@edx/frontend-platform';

export const notificationChannels = () => ({
  WEB: 'web',
  ...(getConfig().SHOW_EMAIL_CHANNEL === 'true' && { EMAIL: 'email' }),
  ...(getConfig().SHOW_PUSH_CHANNEL === 'true' && { PUSH: 'push' }),
});

export const shouldHideAppPreferences = (preferences, appId) => {
  const appPreferences = preferences.filter(pref => pref.appId === appId);

  if (appPreferences.length !== 1) {
    return false;
  }

  const firstPreference = appPreferences[0];

  return firstPreference?.id === 'core' && (!firstPreference.coreNotificationTypes?.length);
};
