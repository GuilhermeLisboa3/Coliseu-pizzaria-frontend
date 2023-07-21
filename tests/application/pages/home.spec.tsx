import { Home } from '@/application/pages'
import { AccountContext } from '@/application/contexts'

import { render, screen } from '@testing-library/react'
import { ToastContainer } from 'react-toastify'
import React from 'react'

describe('Home', () => {
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn() }}>
        <ToastContainer/>
        <Home />
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', async () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query,
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    }))

    makeSut()

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Descubra a unidade mais próxima de você e venha nos visitar!')).toBeInTheDocument()
    expect(screen.getByText('Ingredientes sempre lavado e higienizado antes da preparação.')).toBeInTheDocument()
    expect(screen.getByText('Faça o download agora e tenha benifícios no seu primeiro pedido.')).toBeInTheDocument()
  })
})
