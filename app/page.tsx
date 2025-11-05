'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>("checking");

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/health");
        setApiStatus(res.ok ? "ok" : `error ${res.status}`);
      } catch (e) {
        setApiStatus("unreachable");
      }
    }
    check();
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h1>AIME — v0</h1>
      <p><strong>API Health:</strong> {apiStatus}</p>
    </main>
  );
}
