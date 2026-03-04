export function v4() {
  // Tiny pseudo-uuid for training (good enough for request IDs).
  // In real projects, use a proper uuid library.
  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const uuid = v4;
