import * as SecureStore from "expo-secure-store";

async function getToken(key: string) {
  try {
    return await SecureStore.getItem(key);
  } catch (error) {
    console.log("Error getting token:", error);
    throw error;
  }
}

async function saveToken(key: string, value: string) {
  try {
    return await SecureStore.setItem(key, value);
  } catch (error) {
    throw error;
  }
}

export const tokenCache = { getToken, saveToken };
