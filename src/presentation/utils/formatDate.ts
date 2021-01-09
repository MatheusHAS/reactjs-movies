import { Locale } from '@/domain/models'

const getYearFromDate = (date: string) => new Date(date).getFullYear()

const getFormattedDate = (date: string, locale: Locale = 'pt-BR') => {
  const dateObject = new Date(date)
  return dateObject.toLocaleDateString(locale)
}

export { getFormattedDate, getYearFromDate }
