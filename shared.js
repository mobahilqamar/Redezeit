function formatTime(seconds) {
  const sign = seconds < 0 ? "-" : "";
  const abs = Math.abs(Math.floor(seconds));
  const m = Math.floor(abs / 60).toString().padStart(2, "0");
  const s = Math.floor(abs % 60).toString().padStart(2, "0");
  return `${sign}${m}:${s}`;
}

function getRemainingSeconds(data) {
  if (!data) return 0;

  if (data.status === "running") {
    const now = Date.now();
    const elapsed = Math.floor((now - data.startedAt) / 1000);
    return data.duration - elapsed;
  }

  return data.remaining ?? data.duration ?? 120;
}
