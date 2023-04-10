import * as S from "./styles";
import Link from "next/link";
import { GrFacebook } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import Image from "next/image";
import AccessibleName from "../../components/acessibleLinkName";
import AccessibleButtonName from "../../components/acessibleButtonName";
import { useRouter } from "next/router";
const Footer = () => {
   
     const { asPath: pathname } = useRouter();
     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Footer>
                         <div className="list">
                         <S.ItemComposto>
                              <div>
                                   <p className="title">Baixe o nosso App</p>
                                   <Link href="telefonia">
                                        <Image src="/assets/play/google.webp" alt="Google play" width={100} height={45} />
                                        <AccessibleName name="google play" />
                                   </Link>
                                   <Link href="telefonia">
                                        <Image src="/assets/play/iphone.webp" alt="Apple store" width={85} height={30} />
                                        <AccessibleName name="apple store" />
                                   </Link>
                              </div>
                              <div className="redesSociais">
                                   <p className="title">Redes Sociais</p>
                                   <div className="icons">
                                        <Link href="/telefonia">
                                             <GrFacebook />
                                             <AccessibleButtonName name="vá para o facebook" />
                                        </Link>
                                        <Link href="/telefonia">
                                             <AiFillTwitterSquare />
                                             <AccessibleButtonName name="vá para o facebook" />
                                        </Link>
                                        <Link href="/telefonia">
                                             <FaYoutubeSquare />
                                             <AccessibleButtonName name="vá para o facebook" />
                                        </Link>
                                   </div>
                              </div>
                         </S.ItemComposto>
                         <S.ItemComposto>
                              <div>
                                   <p className="title">Atendimenhref</p>

                                   <p>loja online: 0000 0000</p>

                                   <p>loja Física: 0800 000 000</p>

                                   <p>Rio de Janeiro e região: 0800 000 0000</p>

                                   <Link href="/telefonia">
                                        <p>Fale pelo Whatsapp</p>
                                   </Link>
                              </div>
                              <div>
                                   <p className="title">Central de Vendas</p>
                                   <Link href="/telefonia">
                                        <p>Compre pelo WhatsApp</p>
                                   </Link>
                              </div>
                         </S.ItemComposto>
                         <S.Item>
                              <p className="title">Ajuda</p>
                              <Link href="/telefonia">
                                   <p>Mapa do Site</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Prazos e locais de entrega</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Política de Troca e Devolução</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Portal de Privacidade</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Nota Fiscal paulista</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Termos e Condições de Uso</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Quantidade de itens por pedido</p>
                              </Link>
                         </S.Item>
                         <S.Item>
                              <p className="title">Amerifan</p>
                              <Link href="/telefonia">
                                   <p> Serviços</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Blog Amerifan.com.br</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Trabalhe conosco</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Lista de Presentes</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Black Friday</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Venda seus produhrefs no Amerifan.com.br</p>
                              </Link>
                              <Link href="/telefonia">
                                   <p>Segurança Digital</p>
                              </Link>
                         </S.Item>
                         <S.Item>
                              <p className="title">Cartão Amerifan</p>
                         </S.Item>
                         </div>
                    </S.Footer>
               )}
          </>
     );
};

export default Footer;
