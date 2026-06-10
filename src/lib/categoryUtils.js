const CATEGORY_LABELS = {
  'panduan':           'Panduan',
  'kegiatan':          'Kegiatan',
  'komunitas':         'Komunitas',
  'wajah-opensuse-id': 'Wajah openSUSE.ID',
  'uncategorized':     'Lainnya',
};

export const getCategoryLabel = (category) => {
  if (!category) return 'Lainnya';
  return CATEGORY_LABELS[category.toLowerCase()] ?? category;
};

export const CATEGORIES = [
  { value: 'semua',            label: 'Semua' },
  { value: 'panduan',          label: 'Panduan' },
  { value: 'kegiatan',         label: 'Kegiatan' },
  { value: 'komunitas',        label: 'Komunitas' },
  { value: 'wajah-opensuse-id', label: 'Wajah openSUSE.ID' },
  { value: 'uncategorized',    label: 'Lainnya' },
];