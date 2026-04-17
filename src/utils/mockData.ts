import { RestaurantsDataProps } from '../types'

import SushiDeSalmão from '../assets/images/cardapio/SushiDeSalmão.png'
import SushiDeAtum from '../assets/images/cardapio/SushiDeAtum.png'
import SushiDeCamarão from '../assets/images/cardapio/SushiDeCamarão.png'
import SushiDePepino from '../assets/images/cardapio/SushiDePepino.png'
import SushiDeAbacate from '../assets/images/cardapio/SushiDeAbacate.png'
import SushiDeOvas from '../assets/images/cardapio/SushiDeOvas.png'

import Carbonara from '../assets/images/cardapio/Carbonara.png'
import Pizza from '../assets/images/cardapio/Pizza.png'
import Risoto from '../assets/images/cardapio/RisotoComCogumelos.avif'
import Lasagna from '../assets/images/cardapio/Lasanha.jpg'
import Tiramisu from '../assets/images/cardapio/Tiramisu.jpg'
import Bruschetta from '../assets/images/cardapio/Brusqueta.jpg'

import Fettuccine from '../assets/images/cardapio/Fettuccine.jpg'
import Pizza01 from '../assets/images/cardapio/Pizza02.jpg'
import RisottoDeFrutosDoMar from '../assets/images/cardapio/RisottoDeFrutosDoMar.jpg'
import LasagnaDeEspinafre from '../assets/images/cardapio/LasagnaDeEspinafre.jpg'
import PannaCotta from '../assets/images/cardapio/PannaCotta.jpg'
import GarlicBread from '../assets/images/cardapio/GarlicBread.jpg'

import Kibe from '../assets/images/cardapio/KibeFrito.jpg'
import Esfiha from '../assets/images/cardapio/EsfihaDeCarne.jpg'
import Tabule from '../assets/images/cardapio/Tabule.jpg'
import Homus from '../assets/images/cardapio/Homus.jpg'
import Flafel from '../assets/images/cardapio/Falafel.jpg'
import Baklava from '../assets/images/cardapio/Baklava.jpg'

import CarneDeSol from '../assets/images/cardapio/CarneDeSolComMacaxeira.jpg'
import Baiao from '../assets/images/cardapio/BaiãoDeDois.jpg'
import Moqueca from '../assets/images/cardapio/MoquecaDePeixe.jpg'
import Acaraje from '../assets/images/cardapio/Acarajé.jpg'
import Cuscuz from '../assets/images/cardapio/CuscuzNordestino.jpg'

export const mockRestaurants: RestaurantsDataProps[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: '4.9',
    destacado: true,
    tipo: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: SushiDeSalmão,
    cardapio: [
      {
        id: 1,
        nome: 'Sushi de Salmão', //mudar nome//
        descricao:
          'O sushi de salmão fresco é uma opção deliciosa e sofisticada para os amantes da culinária japonesa, combinando sabor, leveza e qualidade em cada detalhe. Preparado com fatias de salmão selecionado, conhecido por sua textura macia e sabor suave, ele é servido sobre uma base de arroz temperado com vinagre especial, garantindo equilíbrio perfeito entre os ingredientes. Cada peça é cuidadosamente montada para proporcionar uma experiência única ao paladar, destacando o frescor do peixe e a delicadeza da preparação. Ideal para qualquer ocasião, o sushi de salmão agrada tanto quem já aprecia a culinária japonesa quanto quem deseja experimentar novos sabores. Uma escolha leve, nutritiva e extremamente saborosa.', //mudar descricao//
        foto: SushiDeSalmão,
        porcao: '8 peças', //mudar porcao//
        preco: 25.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Sushi de Atum', //mudar nome//
        descricao:
          'O sushi de atum fresco e saboroso é uma escolha irresistível para quem aprecia a culinária japonesa em sua forma mais autêntica. Preparado com cortes selecionados de atum de alta qualidade, conhecido por sua textura firme e sabor marcante, ele é combinado com arroz temperado de forma equilibrada, proporcionando uma experiência única a cada mordida. A harmonia entre o frescor do peixe e a leveza do arroz destaca o cuidado no preparo e a tradição dessa iguaria. Cada peça é montada com atenção aos detalhes, garantindo apresentação impecável e muito sabor. Ideal para quem busca uma refeição leve, nutritiva e cheia de personalidade, o sushi de atum é perfeito para qualquer ocasião.', //mudar descricao//
        foto: SushiDeAtum,
        porcao: '8 peças', //mudar porcao//
        preco: 30.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Sushi de Camarão', //mudar nome//
        descricao:
          'O sushi de camarão cozido e suculento é uma opção deliciosa e equilibrada para quem busca sabores marcantes da culinária japonesa com um toque especial. Preparado com camarões selecionados, cozidos no ponto certo para garantir maciez e suculência, ele é combinado com arroz temperado cuidadosamente, criando uma harmonia perfeita entre textura e sabor. O leve adocicado natural do camarão se destaca a cada mordida, proporcionando uma experiência agradável e sofisticada. Cada peça é montada com atenção aos detalhes, valorizando tanto a apresentação quanto a qualidade dos ingredientes. Ideal para quem prefere frutos do mar cozidos, é uma escolha leve, nutritiva e muito saborosa para qualquer ocasião.', //mudar descricao//
        foto: SushiDeCamarão,
        porcao: '8 peças', //mudar porcao//
        preco: 28.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Sushi de Pepino', //mudar nome//
        descricao:
          'O sushi vegetariano de pepino fresco é uma opção leve, refrescante e cheia de sabor para quem busca uma alternativa sem ingredientes de origem animal. Preparado com pepinos selecionados, crocantes e suculentos, ele é combinado com arroz temperado de forma equilibrada, criando uma harmonia perfeita entre textura e frescor. O sabor suave do pepino, aliado ao toque levemente ácido do arroz, proporciona uma experiência delicada e muito agradável ao paladar. Cada peça é montada com cuidado, valorizando a simplicidade e a qualidade dos ingredientes. Ideal para quem prefere refeições leves ou segue uma alimentação vegetariana, esse sushi é uma escolha saudável, nutritiva e perfeita para qualquer ocasião.', //mudar descricao//
        foto: SushiDePepino,
        porcao: '8 peças', //mudar porcao//
        preco: 20.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Sushi de Abacate', //mudar nome//
        descricao:
          'O sushi vegetariano de abacate cremoso é uma opção deliciosa e equilibrada para quem busca uma experiência leve e cheia de sabor. Preparado com fatias de abacate selecionado, conhecido por sua textura macia e cremosa, ele é combinado com arroz temperado de forma harmoniosa, criando um contraste perfeito entre suavidade e frescor. O sabor delicado do abacate se destaca a cada mordida, proporcionando uma sensação agradável e sofisticada ao paladar. Cada peça é montada com cuidado, valorizando a qualidade dos ingredientes e a apresentação impecável. Ideal para quem prefere uma alimentação vegetariana ou deseja experimentar algo diferente, esse sushi é nutritivo, leve e perfeito para qualquer ocasião.', //mudar descricao//
        foto: SushiDeAbacate,
        porcao: '8 peças', //mudar porcao//
        preco: 22.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Sushi de Ovas', //mudar nome//
        descricao:
          'O sushi de ovas de peixe é uma opção sofisticada e cheia de personalidade, ideal para quem busca uma experiência gastronômica marcante. Preparado com ovas selecionadas, conhecidas por sua textura delicada e pelo leve estalo ao serem degustadas, esse sushi oferece um sabor único e levemente salgado, que remete ao frescor do mar. Servido sobre uma base de arroz temperado com precisão, cria uma combinação equilibrada entre suavidade e intensidade. Cada peça é cuidadosamente montada, valorizando tanto a apresentação quanto a qualidade dos ingredientes. Perfeito para apreciadores da culinária japonesa que desejam explorar novos sabores, é uma escolha refinada, elegante e inesquecível.', //mudar descricao//
        foto: SushiDeOvas,
        porcao: '8 peças', //mudar porcao//
        preco: 35.0 //mudar preco//
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: '4.6',
    destacado: false,
    tipo: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis. O conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inigualável! Peça já!',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Spaghetti Carbonara', //mudar nome//
        descricao:
          'O clássico spaghetti com molho carbonara cremoso é uma verdadeira celebração da culinária italiana, combinando simplicidade e sabor em uma experiência irresistível. Preparado com massa al dente, o prato é envolvido por um molho rico e aveludado à base de ovos, queijo parmesão de qualidade e pancetta dourada, garantindo uma textura cremosa e um sabor marcante. O equilíbrio entre o salgado da pancetta e a suavidade do creme resulta em uma combinação perfeita, que conquista a cada garfada. Finalizado com um toque de pimenta-do-reino, realça ainda mais os aromas e sabores. Ideal para quem aprecia pratos tradicionais e reconfortantes, o spaghetti carbonara é uma escolha sofisticada e deliciosa.', //mudar descricao//
        foto: Carbonara,
        porcao: '1 porção', //mudar porcao//
        preco: 35.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Pizza Margherita', //mudar nome//
        descricao:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.', //mudar descricao//
        foto: Pizza,
        porcao: '1 pizza média', //mudar porcao//
        preco: 40.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Risotto de Cogumelos', //mudar nome//
        descricao:
          'O risoto cremoso com cogumelos frescos e parmesão é uma opção sofisticada e reconfortante, perfeita para quem aprecia sabores intensos e equilibrados. Preparado com arroz arbório cozido lentamente, ele absorve um caldo aromático que realça o sabor dos cogumelos selecionados, trazendo notas terrosas e delicadas. A finalização com queijo parmesão de alta qualidade garante uma textura cremosa e envolvente, enquanto um toque de manteiga adiciona brilho e profundidade ao prato. Cada garfada oferece uma combinação harmoniosa entre maciez e intensidade, resultando em uma experiência gastronômica única. Ideal para ocasiões especiais ou para quem deseja uma refeição elegante e cheia de sabor.', //mudar descricao//
        foto: Risoto,
        porcao: '1 porção', //mudar porcao//
        preco: 38.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Lasagna Bolonhesa', //mudar nome//
        descricao:
          'A lasagna tradicional com molho bolonhesa e queijo gratinado é um clássico irresistível da culinária italiana, perfeita para quem busca uma refeição rica e reconfortante. Preparada com camadas de massa delicada intercaladas com um molho bolonhesa encorpado, feito com carne selecionada e temperos especiais, ela oferece um sabor intenso e marcante a cada garfada. O toque final fica por conta do queijo gratinado, que forma uma crosta dourada e levemente crocante por cima, contrastando com a cremosidade do recheio. Cada porção é cuidadosamente montada, garantindo equilíbrio entre textura e sabor. Ideal para momentos especiais ou para compartilhar uma refeição deliciosa e tradicional.', //mudar descricao//
        foto: Lasagna,
        porcao: '1 porção', //mudar porcao//
        preco: 42.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Tiramisu', //mudar nome//
        descricao:
          'A sobremesa clássica italiana com camadas de biscoito, café e creme mascarpone é uma verdadeira experiência de sabor e sofisticação. Inspirada no tradicional tiramisù, essa delícia combina biscoitos levemente umedecidos em café aromático com um creme suave e aveludado à base de queijo mascarpone, criando um equilíbrio perfeito entre doçura e intensidade. A cada colherada, a textura macia se mistura ao sabor marcante do café, proporcionando uma sensação única e envolvente. Finalizada com um toque de cacau em pó, que realça ainda mais os aromas, essa sobremesa é ideal para quem aprecia doces refinados e cheios de personalidade.', //mudar descricao//
        foto: Tiramisu,
        porcao: '1 porção', //mudar porcao//
        preco: 18.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Bruschetta', //mudar nome//
        descricao:
          'O pão crocante com tomate fresco, manjericão e azeite de oliva é uma entrada leve e cheia de sabor, inspirada na tradicional culinária italiana. Preparado com fatias de pão levemente tostadas, ele ganha uma textura crocante por fora e macia por dentro, servindo como base perfeita para a combinação de ingredientes frescos. Os tomates maduros trazem um toque suculento e levemente adocicado, enquanto o manjericão adiciona aroma e frescor ao prato. Finalizado com um fio de azeite de oliva de qualidade, que realça todos os sabores, essa opção é simples, elegante e extremamente saborosa. Ideal para abrir a refeição com leveza ou acompanhar bons momentos.', //mudar descricao//
        foto: Bruschetta,
        porcao: '4 unidades', //mudar porcao//
        preco: 15.0 //mudar preco//
      }
    ]
  },
  {
    id: 3,
    titulo: 'Bella Tavola Italiana',
    avaliacao: '4.7',
    destacado: true,
    tipo: 'Italiana',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes terras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Fettuccine Alfredo', //mudar nome//
        descricao:
          'O fettuccine com molho Alfredo cremoso e queijo parmesão é um prato clássico e reconfortante da culinária italiana, conhecido por sua textura suave e sabor marcante. Preparado com massa fettuccine cozida no ponto ideal, ele é envolvido por um molho rico e aveludado à base de manteiga, creme de leite e queijo parmesão de alta qualidade, garantindo cremosidade em cada garfada. O equilíbrio entre os ingredientes resulta em um sabor delicado, porém intenso, que agrada aos mais diversos paladares. Finalizado com um toque extra de parmesão ralado, o prato ganha ainda mais personalidade. Ideal para quem busca uma refeição saborosa, elegante e cheia de tradição.', //mudar descricao//
        foto: Fettuccine,
        porcao: '1 porção', //mudar porcao//
        preco: 36.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Pizza Pepperoni', //mudar nome//
        descricao:
          'A pizza com molho de tomate, mussarela e pepperoni crocante é uma opção clássica e irresistível, perfeita para quem aprecia sabores intensos e marcantes. Preparada com uma base de massa leve e bem assada, ela recebe um molho de tomate encorpado e levemente ácido, que equilibra perfeitamente com a cremosidade da mussarela derretida. O destaque fica por conta das fatias de pepperoni, que ao serem assadas ganham uma textura levemente crocante e liberam um sabor defumado delicioso. Cada pedaço oferece uma combinação harmoniosa entre crocância, suculência e intensidade. Ideal para compartilhar com amigos ou aproveitar em momentos especiais.', //mudar descricao//
        foto: Pizza01,
        porcao: '1 pizza média', //mudar porcao//
        preco: 42.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Risotto de Frutos do Mar', //mudar nome//
        descricao:
          'O risoto cremoso com camarões, lulas e mexilhões frescos é uma opção sofisticada e cheia de sabor, perfeita para quem aprecia frutos do mar. Preparado com arroz arbório cozido lentamente, ele absorve um caldo aromático que realça o frescor dos ingredientes, criando uma base rica e envolvente. Os camarões suculentos, as lulas macias e os mexilhões delicados se combinam de forma harmoniosa, trazendo diferentes texturas e sabores a cada garfada. A finalização com manteiga e um toque de parmesão garante cremosidade e equilíbrio ao prato, resultando em uma experiência gastronômica elegante e marcante.', //mudar descricao//
        foto: RisottoDeFrutosDoMar,
        porcao: '1 porção', //mudar porcao//
        preco: 40.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Lasagna de Espinafre', //mudar nome//
        descricao:
          'A lasagna vegetariana com espinafre, ricota e molho de tomate é uma opção leve e saborosa, perfeita para quem busca uma refeição equilibrada e cheia de frescor. Preparada com camadas de massa delicada, ela é recheada com um creme suave de ricota e espinafre refogado, que traz uma combinação nutritiva e muito agradável ao paladar. O molho de tomate, levemente temperado, adiciona um toque de acidez que equilibra a cremosidade do recheio. Finalizada com queijo gratinado, a lasanha ganha uma cobertura dourada e irresistível. Cada porção oferece uma experiência harmoniosa entre textura e sabor, sendo ideal para qualquer ocasião.', //mudar descricao//
        foto: LasagnaDeEspinafre,
        porcao: '1 porção', //mudar porcao//
        preco: 38.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Panna Cotta', //mudar nome//
        descricao:
          'A sobremesa panna cotta italiana cremosa feita com creme de leite e baunilha é uma opção elegante e delicada, perfeita para encerrar a refeição com leveza e sofisticação. De origem italiana, essa sobremesa é conhecida por sua textura suave e aveludada, que derrete na boca a cada colherada. Preparada com creme de leite de alta qualidade e um toque aromático de baunilha, ela apresenta um sabor equilibrado, levemente adocicado e extremamente agradável. Pode ser acompanhada por caldas de frutas, caramelo ou frutas vermelhas, que adicionam contraste e realçam ainda mais o sabor. Uma escolha clássica e refinada para qualquer ocasião.', //mudar descricao//
        foto: PannaCotta,
        porcao: '1 porção', //mudar porcao//
        preco: 20.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Garlic Bread', //mudar nome//
        descricao:
          'O pão crocante com manteiga de alho e ervas é uma opção irresistível para quem busca uma entrada simples, porém cheia de sabor. Preparado com fatias de pão levemente tostadas, ele apresenta uma textura crocante por fora e macia por dentro, perfeita para receber a manteiga aromatizada. A combinação do alho com ervas frescas, como salsinha e orégano, cria um sabor marcante e envolvente, que agrada logo na primeira mordida. O leve toque dourado da manteiga derretida realça ainda mais os aromas, tornando cada pedaço ainda mais apetitoso. Ideal para acompanhar refeições ou compartilhar em bons momentos, é uma escolha prática e deliciosa..', //mudar descricao//
        foto: GarlicBread,
        porcao: '4 unidades', //mudar porcao//
        preco: 12.0 //mudar preco//
      }
    ]
  },
  {
    id: 4,
    titulo: 'Casa das Delícias Árabes',
    avaliacao: '4.8',
    destacado: false,
    tipo: 'Árabe',
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera aconchegante e confortável.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Kibe Frito', //mudar nome//
        descricao:
          'O kibe frito crocante por fora e suculento por dentro é uma opção deliciosa e tradicional, perfeita para quem aprecia sabores marcantes da culinária árabe. Preparado com uma combinação equilibrada de carne moída de qualidade, trigo para kibe e temperos especiais, ele é moldado com cuidado e frito até atingir uma textura dourada e irresistível. Por fora, apresenta uma crocância leve, enquanto o interior permanece macio e cheio de sabor. O toque de hortelã e especiarias realça ainda mais a experiência, tornando cada mordida única e envolvente. Ideal como entrada ou acompanhamento, o kibe é uma escolha clássica que agrada a todos.', //mudar descricao//
        foto: Kibe,
        porcao: '6 unidades', //mudar porcao//
        preco: 20.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Esfiha de Carne', //mudar nome//
        descricao:
          'A esfiha assada com recheio de carne temperada é uma opção clássica e saborosa da culinária árabe, perfeita para qualquer momento do dia. Preparada com uma massa leve e macia, ela envolve um recheio suculento de carne moída cuidadosamente temperada com especiarias que realçam o sabor de forma equilibrada. Assada até atingir um ponto dourado e levemente crocante por fora, mantém o interior macio e cheio de sabor. Cada unidade é feita com atenção aos detalhes, garantindo uma experiência deliciosa a cada mordida. Ideal como lanche, entrada ou refeição rápida, a esfiha é prática, nutritiva e muito apreciada.', //mudar descricao//
        foto: Esfiha,
        porcao: '4 unidades', //mudar porcao//
        preco: 18.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Tabule', //mudar nome//
        descricao:
          'A salada fresca de trigo para quibe, tomate, pepino e hortelã é uma opção leve, nutritiva e cheia de frescor, perfeita para quem busca uma refeição equilibrada. Preparada com trigo hidratado no ponto ideal, ela é combinada com tomates suculentos, pepinos crocantes e folhas de hortelã aromáticas, criando uma mistura refrescante e muito saborosa. O tempero à base de limão e azeite de oliva realça os ingredientes, trazendo um toque cítrico e agradável ao paladar. Cada garfada oferece uma combinação harmoniosa entre textura e leveza, tornando essa salada uma excelente escolha para dias quentes ou como acompanhamento saudável.', //mudar descricao//
        foto: Tabule,
        porcao: '1 porção', //mudar porcao//
        preco: 15.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Homus', //mudar nome//
        descricao:
          'A pasta de grão-de-bico com tahine, alho e limão é uma opção clássica e muito saborosa da culinária do Oriente Médio, conhecida por sua textura cremosa e sabor equilibrado. Preparada com grão-de-bico cozido e amassado, ela é combinada com tahine, pasta de gergelim que adiciona um toque suave e levemente amendoado. O alho traz intensidade ao sabor, enquanto o limão adiciona frescor e leve acidez, criando uma combinação harmoniosa e envolvente. Finalizada com um fio de azeite de oliva, essa pasta é perfeita para acompanhar pães, torradas ou como complemento de diversas refeições. Uma escolha nutritiva, leve e cheia de tradição.', //mudar descricao//
        foto: Homus,
        porcao: '1 porção', //mudar porcao//
        preco: 12.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Falafel', //mudar nome//
        descricao:
          'O falafel é um bolinho frito de grão-de-bico e ervas, conhecido por sua crocância por fora e maciez por dentro, sendo uma opção deliciosa e muito apreciada na culinária do Oriente Médio. Preparado com grão-de-bico moído e uma combinação de ervas frescas e especiarias, ele possui um sabor marcante e aromático que conquista a cada mordida. Frito até atingir um tom dourado e textura crocante, mantém seu interior leve e cheio de sabor. É uma excelente alternativa vegetariana, nutritiva e rica em proteínas, ideal para acompanhar pães, saladas ou molhos especiais. Perfeito para quem busca uma refeição prática, saudável e cheia de personalidade.', //mudar descricao//
        foto: Flafel,
        porcao: '6 unidades', //mudar porcao//
        preco: 22.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Baklava', //mudar nome//
        descricao:
          'A sobremesa doce feita com camadas de massa folhada, nozes e mel é uma verdadeira iguaria da culinária do Oriente Médio, conhecida por sua textura crocante e sabor marcante. Inspirada no tradicional baklava, ela combina finas camadas de massa folhada intercaladas com nozes trituradas e um generoso toque de mel, criando um equilíbrio perfeito entre doçura e intensidade. Assada até atingir um dourado irresistível, cada pedaço oferece uma experiência única, com camadas leves e crocantes que se desmancham na boca. O aroma envolvente e o sabor rico fazem dessa sobremesa uma escolha sofisticada e inesquecível para qualquer ocasião.', //mudar descricao//
        foto: Baklava,
        porcao: '1 porção', //mudar porcao//
        preco: 18.0 //mudar preco//
      }
    ]
  },
  {
    id: 5,
    titulo: 'Nordestei',
    avaliacao: '4.8',
    destacado: false,
    tipo: 'Nordestinha',
    descricao:
      'O Nordestei é um restaurante vibrante e cheio de personalidade. Com um ambiente colorido e acolhedor, de em cada detalhe. No cardápio, os clientes encontram pratos típicos preparados com muito sabor, como carne de sol com macaxeira, baião de dois e moquecas bem temperadas. O Nordestei é um convite para mergulhar na essência da gastronomia nordestina.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Carne de Sol com Macaxeira', //mudar nome//
        descricao:
          'A carne de sol suculenta acompanhada de macaxeira cozida é um prato típico e cheio de sabor da culinária nordestina, perfeito para quem aprecia refeições marcantes e tradicionais. Preparada com carne de sol cuidadosamente curada e grelhada no ponto certo, ela apresenta uma textura macia por dentro e levemente dourada por fora, preservando todo o seu sabor característico. A macaxeira cozida, macia e levemente adocicada, complementa perfeitamente o prato, criando um equilíbrio delicioso entre os ingredientes. Finalizado com manteiga de garrafa ou acompanhamentos regionais, é uma opção irresistível, nutritiva e ideal para quem busca uma experiência autêntica.', //mudar descricao//
        foto: CarneDeSol,
        porcao: '1 porção', //mudar porcao//
        preco: 30.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Baião de Dois', //mudar nome//
        descricao:
          'O arroz, feijão, carne seca e queijo coalho formam uma combinação perfeita, típica da culinária brasileira, que une sabor, tradição e conforto em um único prato. Preparado com arroz soltinho e feijão bem temperado, o prato ganha ainda mais destaque com a carne seca desfiada, macia e cheia de sabor. O queijo coalho, levemente grelhado, adiciona uma textura firme e um toque salgado irresistível, equilibrando todos os elementos. Cada garfada oferece uma mistura harmoniosa entre simplicidade e intensidade, resultando em uma refeição completa e muito satisfatória. Ideal para o dia a dia ou momentos especiais, é uma escolha que agrada a todos.', //mudar descricao//
        foto: Baiao,
        porcao: '1 porção', //mudar porcao//
        preco: 28.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Moqueca de Peixe', //mudar nome//
        descricao:
          'A moqueca de peixe com leite de coco, dendê e coentro é um prato tradicional da culinária brasileira, conhecido por seu sabor marcante e aroma irresistível. Preparada com pedaços de peixe fresco cozidos lentamente, ela é envolvida por um caldo rico e cremoso feito com leite de coco e azeite de dendê, que conferem cor e sabor únicos. O toque de coentro fresco adiciona leveza e frescor, equilibrando perfeitamente os ingredientes. Servida bem quente, geralmente acompanhada de arroz branco e farofa, proporciona uma experiência gastronômica completa e reconfortante. Ideal para quem aprecia pratos intensos e cheios de personalidade.', //mudar descricao//
        foto: Moqueca,
        porcao: '1 porção', //mudar porcao//
        preco: 35.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Acarajé', //mudar nome//
        descricao:
          'O bolinho frito de feijão-fradinho recheado com vatapá e camarão é uma iguaria tradicional da culinária baiana, conhecido por seu sabor intenso e marcante. Preparado com uma massa leve de feijão-fradinho moído e temperado, ele é frito até ficar dourado e crocante por fora, mantendo o interior macio e cheio de sabor. O recheio de vatapá cremoso, feito com pão, leite de coco e temperos especiais, combinado com camarões suculentos, traz uma explosão de sabores a cada mordida. Rico em tradição e personalidade, é uma opção perfeita para quem deseja experimentar a essência da cozinha brasileira.', //mudar descricao//
        foto: Acaraje,
        porcao: '2 unidades', //mudar porcao//
        preco: 25.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Cuscuz Nordestino', //mudar nome//
        descricao:
          'O cuscuz feito com farinha de milho, acompanhado de carne seca e queijo coalho, é um prato típico e muito apreciado da culinária nordestina, perfeito para quem busca uma refeição saborosa e nutritiva. Preparado com cuscuz macio e levemente úmido, ele serve como base ideal para a carne seca desfiada, bem temperada e cheia de sabor. O queijo coalho, levemente grelhado, adiciona uma textura firme e um toque salgado irresistível, criando um equilíbrio perfeito entre os ingredientes. Cada garfada traz uma combinação harmoniosa de sabores e tradições, tornando esse prato uma escolha reconfortante e deliciosa para qualquer ocasião.', //mudar descricao//
        foto: Cuscuz,
        porcao: '1 porção', //mudar porcao//
        preco: 22.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Cartola', //mudar nome//
        descricao:
          'A sobremesa feita com banana frita, queijo e canela é uma combinação simples e irresistível da culinária brasileira, perfeita para quem aprecia sabores doces com um toque especial. Preparada com bananas maduras fritas até ficarem douradas e levemente caramelizadas, ela ganha uma textura macia por dentro e delicadamente crocante por fora. O queijo derretido adiciona um contraste salgado que equilibra a doçura da fruta, enquanto a canela polvilhada por cima traz aroma e um sabor marcante. Cada porção oferece uma experiência aconchegante e cheia de personalidade, sendo ideal para encerrar a refeição com muito sabor.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 18.0 //mudar preco//
      }
    ]
  },
  {
    id: 6,
    titulo: 'Cntinho Mineiro',
    avaliacao: '4.8',
    destacado: false,
    tipo: 'Mineira',
    descricao:
      'O Cantinho Mineiro é um restaurante acolhedor e cheio de tradição. O espaço conquista os clientes com sua decoração rústica que remetem ao interior, criando uma atmosfera calorosa e familiar. No cardápio, destacam-se pratos caseiros, como feijão tropeiro, frango com quiabo e o clássico pão de queijo. Ideal para quem busca uma refeição saborosa e reconfortante.',
    capa: 'https://placehold.co/472x217',
    cardapio: [
      {
        id: 1,
        nome: 'Feijão Tropeiro', //mudar nome//
        descricao:
          'O feijão tropeiro com carne de porco, farinha e couve é um prato tradicional da culinária mineira, conhecido por seu sabor marcante e combinação rica de ingredientes. Preparado com feijão cozido no ponto certo, ele é misturado com carne de porco bem temperada e levemente dourada, trazendo intensidade e suculência ao prato. A farinha de mandioca adiciona textura e consistência, enquanto a couve refogada proporciona frescor e equilíbrio. Cada garfada oferece uma mistura harmoniosa entre crocância, maciez e sabor, resultando em uma refeição completa e muito satisfatória. Ideal para quem aprecia comida caseira e cheia de tradição.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 28.0 //mudar preco//
      },
      {
        id: 2,
        nome: 'Frango com Quiabo', //mudar nome//
        descricao:
          'O frango cozido com quiabo e temperos tradicionais é um prato típico da culinária brasileira, conhecido por seu sabor caseiro e reconfortante. Preparado com pedaços de frango cozidos lentamente, ele absorve os temperos naturais, como alho, cebola e ervas, resultando em um caldo rico e muito saboroso. O quiabo, macio e bem incorporado ao preparo, complementa perfeitamente o prato, trazendo uma textura única e característica. Cada porção oferece uma combinação equilibrada entre simplicidade e sabor, remetendo à comida feita com carinho. Ideal para quem busca uma refeição tradicional, nutritiva e cheia de personalidade.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 30.0 //mudar preco//
      },
      {
        id: 3,
        nome: 'Pão de Queijo', //mudar nome//
        descricao:
          'O pão de queijo mineiro, macio por dentro e crocante por fora, é uma das delícias mais tradicionais da culinária brasileira, especialmente de Minas Gerais. Preparado com polvilho e queijo de qualidade, ele possui uma textura única, com casquinha levemente dourada e interior macio e elástico. Seu sabor marcante e levemente salgado conquista a cada mordida, tornando-se perfeito para qualquer momento do dia. Seja no café da manhã, lanche da tarde ou como acompanhamento, é uma opção prática, saborosa e muito querida. Simples, mas irresistível, o pão de queijo é sinônimo de aconchego e tradição.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '6 unidades', //mudar porcao//
        preco: 20.0 //mudar preco//
      },
      {
        id: 4,
        nome: 'Tutu de Feijão', //mudar nome//
        descricao:
          'O tutu de feijão com farinha de mandioca e temperos é um prato tradicional da culinária brasileira, especialmente de Minas Gerais, conhecido por sua textura cremosa e sabor marcante. Preparado com feijão bem cozido e temperado com alho, cebola e especiarias, ele é engrossado com farinha de mandioca até atingir uma consistência suave e encorpada. O resultado é uma combinação rica e reconfortante, perfeita para acompanhar carnes, arroz e couve refogada. Cada porção traz o sabor da comida caseira, feita com simplicidade e muito carinho. Ideal para quem aprecia pratos típicos e cheios de tradição.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 25.0 //mudar preco//
      },
      {
        id: 5,
        nome: 'Vaca Atolada', //mudar nome//
        descricao:
          'A vaca atolada com costela bovina, mandioca e temperos é um prato típico da culinária brasileira, conhecido por seu sabor intenso e textura extremamente macia. Preparada com costela bovina cozida lentamente, a carne se desmancha com facilidade, absorvendo todos os temperos e formando um caldo encorpado e cheio de sabor. A mandioca, cozida junto com a carne, fica macia e ajuda a dar consistência ao prato, criando uma combinação perfeita e reconfortante. Cada garfada traz uma mistura rica e suculenta, ideal para quem aprecia comida caseira e bem temperada. Uma escolha tradicional, nutritiva e irresistível.', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 35.0 //mudar preco//
      },
      {
        id: 6,
        nome: 'Doce de Leite', //mudar nome//
        descricao:
          'O doce de leite cremoso, típico sobremesa mineira, é uma verdadeira delícia da culinária brasileira, conhecido por sua textura suave e sabor marcante. Preparado com leite e açúcar cozidos lentamente, ele desenvolve uma consistência aveludada e um sabor caramelizado irresistível, que agrada a todos os paladares. Cada colherada oferece uma experiência doce e reconfortante, perfeita para quem aprecia sobremesas tradicionais e cheias de afeto. Pode ser servido puro ou acompanhado de queijos, criando um contraste delicioso entre doce e salgado. Uma escolha clássica, simples e extremamente saborosa.    ', //mudar descricao//
        foto: 'https://placehold.co/300x300',
        porcao: '1 porção', //mudar porcao//
        preco: 18.0 //mudar preco//
      }
    ]
  }
]
