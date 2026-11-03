import { describe, expect, it } from 'vitest'
import { validateUser } from './userValidation'

describe('validateUser', () => {
  it('rejeita nome vazio', () => {
    expect(validateUser({ name: ' ', email: 'ana@email.com' })).toBe('Informe o nome.')
  })

  it('rejeita e-mail inválido', () => {
    expect(validateUser({ name: 'Ana', email: 'email-invalido' })).toBe('Informe um e-mail válido.')
  })

  it('aceita usuário válido', () => {
    expect(validateUser({ name: 'Ana', email: 'ana@email.com' })).toBe('')
  })
})