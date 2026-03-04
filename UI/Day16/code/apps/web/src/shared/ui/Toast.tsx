import React, { useEffect, useState } from "react";

let push: ((msg: string) => void) | null = null;

export function toast(msg: string) {
  push?.(msg);
}

export function ToastHost() {
  const [msgs, setMsgs] = useState<string[]>([]);

  useEffect(() => {
    push = (msg) => setMsgs((m) => [msg, ...m].slice(0, 3));
    return () => {
      push = null;
    };
  }, []);

  if (msgs.length === 0) return null;

  return (
    <div style={{ position: "fixed", right: 12, bottom: 12, display: "grid", gap: 8 }}>
      {msgs.map((m, i) => (
        <div key={i} style={{ background: "#111", color: "#fff", padding: 10, borderRadius: 8, maxWidth: 360 }}>
          {m}
        </div>
      ))}
    </div>
  );
}
