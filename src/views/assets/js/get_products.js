;(async () => {
  const result = await fetch('/products')
  const response = await result.json()
  for (let prod of response.products) console.log(prod)
})()
