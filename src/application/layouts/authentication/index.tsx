import React from 'react'

import { Container } from './style'

type Props = { children: JSX.Element }

export const AuthenticationLayout: React.FC<Props> = ({ children }) => <Container>{children}</Container>
