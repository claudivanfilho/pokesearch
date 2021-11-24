import { useState } from 'react';

export default function useLocale() {
  const [locale, setLocale] = useState('es');

  return { locale, setLocale };
}
