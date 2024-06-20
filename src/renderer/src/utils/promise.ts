export const waitAmount = (amount: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, amount)
  })
}
