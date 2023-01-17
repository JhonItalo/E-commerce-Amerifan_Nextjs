import ImageSelect from "../imageSelect";
import ProductsInfo from "../productInfo";
import * as S from "./styles";

type props = {
     pokemon: any;
};

const InfoProducts = ({ pokemon }: props) => {
     console.log(pokemon);
     return (
          <>
               {pokemon && (
                    <>
                         <S.Conteiner>
                              <ImageSelect pokemon={pokemon} />
                              <ProductsInfo pokemon={pokemon} />
                         </S.Conteiner>

                         <S.Describe>
                              <h3>Describe:</h3>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a malesuada mi. In hendrerit vel
                                   dolor eget porta. Cras velit sapien, tempus vel iaculis eget, accumsan ac augue. Duis vulputate
                                   quis neque in vehicula. Integer maximus nulla nisl, vel maximus nisi ultricies eu. Nulla
                                   dapibus molestie velit, sit amet efficitur neque rutrum ultricies. Nam et elit metus. In vitae
                                   ultricies neque. Nam a semper elit, sed iaculis nunc. Phasellus at facilisis magna, aliquam
                                   viverra augue. Aenean leo elit, pulvinar et nunc ac, sodales pretium sapien. Nulla
                                   pellentesque, ante ut aliquam fermentum, est tortor pellentesque lectus, et fermentum urna mi
                                   non nunc. Suspendisse vel mollis metus. Mauris sodales facilisis lacus vel egestas. Sed
                                   dignissim tristique justo, ut auctor nulla congue ut. Cras scelerisque id libero sed pulvinar.
                                   Phasellus sollicitudin, arcu vel vestibulum porttitor, ex massa tempor urna, sit amet commodo
                                   neque est sit amet diam. In efficitur in elit eu blandit. Curabitur rhoncus pretium urna, nec
                                   facilisis ex auctor ac. Praesent et rhoncus dolor. Morbi nec imperdiet lacus. In bibendum
                                   tristique purus, ac blandit justo. Etiam sollicitudin mauris non nisl posuere, ac feugiat sem
                                   convallis. Vestibulum venenatis consequat augue at feugiat. Cras interdum, turpis et blandit
                                   egestas, risus enim semper odio, vitae suscipit nisl nibh quis dolor. Phasellus laoreet auctor
                                   consectetur. Praesent neque lorem, volutpat vitae lectus id, gravida ornare nisl.
                              </p>
                         </S.Describe>

                         <S.TechnicalInformation>
                              <h3>Technical information:</h3>

                              <table className="demo">
                                   <caption>Technical Info</caption>
                                   <thead>
                                        <tr>
                                             <th>epsum</th>
                                             <th>em lorem lor</th>
                                             <th>eu lorem spspum loem</th>
                                             <th>espp</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr>
                                             <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                             <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                             <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                             <td>Lorem ipsum dolor sit amet, consectetur adipiscing elitS</td>
                                        </tr>
                                        <tr>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                        </tr>
                                        <tr>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                        </tr>
                                        <tr>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                             <td>Epsum</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </S.TechnicalInformation>
                    </>
               )}
          </>
     );
};

export default InfoProducts;
