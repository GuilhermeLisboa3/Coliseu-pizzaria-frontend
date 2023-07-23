import { Button } from '@/application/components'
import { Default } from '@/application/layouts'
import { Cover, Background, Cards, Mobile, Feedback } from './style'
import { Carousel } from './components'
import pizzaHome from '@/application/assets/home/pizza-home.png'
import caminhao from '@/application/assets/home/caminhao-de-entrega.png'
import prato from '@/application/assets/home/prato.png'
import celular from '@/application/assets/home/celular.png'
import mobile from '@/application/assets/home/mobile.png'
import appMobileFrente from '@/application/assets/home/app-mobile-frente.png'

import { FaGooglePlay } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import React from 'react'

export const Home: React.FC = (): JSX.Element => {
  return (
    <Default>
      <>
        <Background>
          <Cover>
            <div>
              <h1><span>A melhor Pizzaria</span> <br/>de São Paulo</h1>
              <p>Descubra a unidade mais próxima de você e venha nos visitar!</p>
              <Button>Nossas lojas</Button>
            </div>
            <img src={pizzaHome.src} alt='pizza home' />
          </Cover>
        </Background>
        <Cards>
          <h1>Entenda mais sobre nosso <br/> sistema de delivery</h1>
          <hr/>
          <section>
            <div>
              <img src={celular.src} alt="" />
              <h5>Aplicativo</h5>
              <p>Peça comida para você sem sair de casa. Baixe nosso app!</p>
            </div>

            <div>
              <img src={prato.src} alt="" />
              <h5>Comida saudável</h5>
              <p>Ingredientes sempre lavado e higienizado antes da preparação.</p>
            </div>

            <div>
              <img src={caminhao.src} alt="" />
              <h5>Delivery</h5>
              <p>Entregamos para todos os locais de São Paulo.</p>
            </div>
          </section>
        </Cards>
        <Mobile>
          <img src={mobile.src} alt="" />
          <div>
            <h3>Aplicativo</h3>
            <p>Faça o download agora e tenha <br/> benifícios no seu primeiro pedido.</p>
            <img src={appMobileFrente.src} alt="" />
            <div>
              <div>
                <FaGooglePlay/>
                <p>Disponivel no <br/> <span>Google Play</span></p>
              </div>
              <div>
                <BsApple/>
                <p>Baixe na <br/> <span>App Store</span></p>
              </div>
            </div>
          </div>
        </Mobile>
        <Feedback>
          <h2>Avaliação</h2>
          <Carousel/>
        </Feedback>
      </>
    </Default>
  )
}
