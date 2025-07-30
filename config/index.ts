import Constants from "expo-constants";

const isDevelopment = __DEV__;
const isProduction = Constants.expoConfig?.extra?.NODE_ENV === "production";

export const config = {
  // API URL
  apiUrl: isDevelopment
    ? process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000" // 개발: 환경변수
    : Constants.expoConfig?.extra?.apiUrl, // 프로덕션: EAS Secret

  enableDebugMode: isDevelopment,
  enableAnalytics: isProduction,
};
