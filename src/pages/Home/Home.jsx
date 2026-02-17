import "aos/dist/aos.css"
import "./style.css";
import AOS from "aos"
import { useEffect } from "react";
import { Card } from "../../coponents/index";
function Home() {
    useEffect(() => {
        AOS.init({
            once: true
        });

        setTimeout(() => {
            AOS.refresh;
        }, 100);
    }, []);
    return (
        <>
            <nav>
                <ul>
                    <div className="banner"><a href="/pedido"><img src="images/banner.png" alt="" /></a></div>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#cardapio">Cardapio</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div className="WhatsApp">
                <a href="https://wa.link/8drsdn" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" /></svg></a>
            </div>

            <main>
                <section id="inicio">
                    <div className="Moldura">
                        <h1>SABOR TRADICIONAL</h1>

                        <div>
                            <div className="linha"></div>
                            <div className="quadrado"></div>
                            <div className="linha"></div>
                        </div>
                    </div>

                    <div className="Container-Botao">
                        <a href="#cardapio">Ver Cardapio</a>
                        <label>Ver Cardápio</label>
                    </div>

                </section>

                <section id="sobre">
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>

                    <img className="pessoa" src="/images/pessoa.avif" />

                    <h1 data-aos="flip-up" data-aos-duration="1500" >Nossa História</h1>

                    <div className="historia-conteudo">
                        <p data-aos="fade-right" data-aos-duration="1500">
                            Tudo começou em uma cozinha pequena, uma chapa emprestada e uma obsessão:
                            <strong> criar o hambúrguer perfeito.</strong>
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1500">
                            A <strong>Los Burguer</strong> nasceu da vontade de resgatar o sabor real da carne
                            grelhada no fogo, longe dos processos industriais. O que era apenas um encontro
                            de amigos no final de semana transformou-se em nossa missão de vida.
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1500">
                            Selecionamos cada ingrediente a dedo — do pão brioche sempre fresco à nossa
                            maionese secreta — para garantir que cada mordida conte uma história.
                            Na Los Burguer, não servimos apenas comida; entregamos a nossa paixão em formato de blend.
                        </p>
                    </div>

                    <div className="Continuacao-Historia">
                        <p data-aos="fade-left" data-aos-duration="1500">
                            Não é apenas sobre empilhar ingredientes; é sobre a harmonia entre eles.
                            Nossa cozinha funciona como uma orquestra, onde o chiado da carne na chapa
                            é a música principal.
                        </p>

                        <div>
                            <p data-aos="fade-left" data-aos-duration="1500">
                                Trabalhamos exclusivamente com <strong>produtores locais</strong>, garantindo
                                que o tomate seja colhido no dia e que o nosso blend de carne nunca tenha
                                visto o interior de um congelador.
                            </p>
                        </div>

                        <p data-aos="fade-left" data-aos-duration="1500">
                            Queremos que a <strong>Los Burguer</strong> seja a extensão da sua casa.
                            Um lugar onde o balcão é o palco de boas conversas e cada lanche servido
                            é um convite para voltar amanhã.
                        </p>
                    </div>
                </section>

                <section id="cardapio">
                    <div className="Container-Card">
                        <Card style="card-1" image="/images-card/burger.avif"></Card>
                        <Card style="card-2" image="/images-card/drink.avif"></Card>
                        <Card style="card-3" image="/images-card/milkshake.avif"></Card>
                        <Card style="card-4" image="/images-card/cupcakes.avif"></Card>
                    </div>
                </section>

                <section id="contato">
                    <div className="hamburguer">
                        <img src="/images/hamburguer.webp" />
                        <img src="/images/olho-1.png" alt="" />
                        <img src="/images/olho-2.png" alt="" />
                    </div>
                </section>

            </main>
            <footer>feito por mim</footer>
        </>
    );
}

export default Home;