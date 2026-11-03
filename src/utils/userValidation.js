export function validateUser(user) {
  const name = String(user?.name ?? '').trim()
  const email = String(user?.email ?? '').trim()

  if (!name) return 'Informe o nome.'
  if (!email) return 'Informe o e-mail.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Informe um e-mail válido.'
  return ''
}