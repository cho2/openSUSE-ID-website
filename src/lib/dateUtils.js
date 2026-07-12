const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

// Format an ISO date string ("2026-06-08") to Indonesian display ("8 Juni 2026").
// Parses manually to avoid timezone shifts from `new Date()`.
export const formatIndonesianDate = (iso) => {
  if (!iso) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso));
  if (!m) return String(iso);
  const [, year, month, day] = m;
  return `${parseInt(day, 10)} ${MONTHS[parseInt(month, 10) - 1]} ${year}`;
};
