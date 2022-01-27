
/**
 * Milliseconds helpers
 */
export const YEAR_MS = 1000 * 60 * 60 * 24 * 365

/**
 * Format time into European date
 */
export const timeToDate = (time:number) => {
  const date = new Date(time)
  const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  
  return `${date.getDay()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}