import React from 'react'

import { Container } from './style'

type Props = { children: JSX.Element }

export const Authentication: React.FC<Props> = ({ children }) => <Container>{children}</Container>
