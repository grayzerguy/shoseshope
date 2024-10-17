// src/utils/stringUtils.ts

export function cleanImageString(image: string): string {
    return image.replace('"', "").replace("[", "").replace("]", "").replace(";", "");
}