import { createMMKV } from "react-native-mmkv";

const storage = createMMKV();

export const getStoredToken = () => {
  try {
    return storage.getString("accessToken");
  } catch (error) {
    console.error("Failed to get stored token:", error);
    return null;
  }
};

export const setStoreToken = (token) => {
  try {
    return storage.set("accessToken", token);
  } catch (error) {
    console.error("Failed to store token:", error);
  }
};

export const clearStoreToken = () => {
  try {
    storage.delete("accessToken");
  } catch (error) {
    console.error("Failed to clear tokens:", error);
  }
};
