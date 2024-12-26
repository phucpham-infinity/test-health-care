export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 80) + 1
}

export const getRandomDate = (): string => {
  const year = 2024
  const month = Math.floor(Math.random() * 12) + 1
  const day = Math.floor(Math.random() * 28) + 1

  const formattedMonth = month.toString().padStart(2, '0')
  const formattedDay = day.toString().padStart(2, '0')

  return `${year}.${formattedMonth}.${formattedDay}`
}

export const getRandomTime = (): string => {
  const hours = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 60)

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}`
}
