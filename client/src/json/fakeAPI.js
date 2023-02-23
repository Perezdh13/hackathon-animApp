import dog1 from './img/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco.jpg';
import dog2 from './img/hermoso-retrato-mascota-perro.jpg';
import dog3 from './img/perro-pequeno-siendo-adorable-retrato-estudio.jpg';
import cat1 from './img/adorable-gatito-pared-monocromatica-detras-ella.jpg';
import cat2 from './img/gato-blanco-encuentra-rodillas-mujer.jpg';
import cat3 from './img/mujer-jugando-gato-callejero.jpg';
import fish1 from './img/pez-payaso-color-hermoso-feefs-coral.jpg';
import fish2 from './img/hermoso-color-pez-mandarin-colorido-pez-mandarin-pez-mandarin-closeup-pez-mandarin-o-manda.jpg';
import fish3 from './img/primer-plano-pez-azul-amarillo-acuario.jpg';
import reptile1 from './img/closeup-cabeza-iguana-verde.jpg';
import reptile2 from './img/chameleon-4501712_1280.jpg';
import reptile3 from './img/turtle-3700681_1280.jpg';
import rodent1 from './img/hamster.jpg';
import rodent2 from './img/guinea-pig-ga9cc42275_1280.jpg';
import rodent3 from './img/roof-rat-g7b5b84da1_1280.jpg';


const pets = [
    {
        Id:1,
        Name:"Lucas",
        Age:"3 meses",
        Height:"15 cm",
        Description:"Soy muy bueno, achuchable y esponjoso",
        Species:"Perro",
        Image:{dog1}
    },
    {
        Id:2,
        Name:"Tokyo",
        Age:" 1 año",
        Height:"21 cm",
        Description:"Hola, me llamo Tokyo y soy muy inteligente",
        Species:"Perro",
        Image:{dog2}
    },
    {
        Id:3,
        Name:"Toby",
        Age:"5 meses",
        Height:"30 cm",
        Description:"Soy un caballero de los que ya no quedan",
        Species:"Perro",
        Image:{dog3}
    },
    {
        Id:4,
        Name:"Blue",
        Age:"6 meses",
        Height:"12 cm",
        Description:"Mi nombre al igual que mis ojos son del color de algo infinito, igual que mi amor por ti",
        Species:"Gato",
        Image:{cat1}
    },
    {
        Id:5,
        Name:"Mini",
        Age:"7 meses",
        Height:"10 cm",
        Description:"Soy el mas pequeñito pero el mas cariñoso de todos mis hermanos",
        Species:"Gato",
        Image:{cat2}
    },
    {
        Id:6,
        Name:"Cristiano",
        Age:"3 meses",
        Height:"12 cm",
        Description:"Lo reconozco tengo un problema con las pelotas, siuuuuuu",
        Species:"Gato",
        Image: {cat3}
    },
    {
        Id:7,
        Name:"Nemo",
        Age:"3 meses",
        Height:"2 cm",
        Description:"Hola busco a mi papa, quiero volver a casa",
        Species:"Pez",
        Image:{fish1}
    },
    {
        Id:8,
        Name:"MiliKi",
        Age:"1 mes",
        Height:"6 cm",
        Description:"Mi barba ya no tiene 3 pelos!!",
        Species:"Pez",
        Image:{fish2}
    },
    {
        Id:9,
        Name:"Dory",
        Age:"4 meses",
        Height:"5 cm",
        Description:"Hola eee no me acuerdo que iba a decir.... Sigo nadando, sigo nadando..",
        Species:"Pez",
        Image:{fish3}
    },
    {
        Id:10,
        Name:"Paco",
        Age:"5 años",
        Height:"60 cm",
        Description:"Dame calor y dejame tranquilo",
        Species:"Reptil",
        Image:{reptile1}
    },
    {
        Id:11,
        Name:"Mago",
        Age:"5 meses",
        Height:" 18 cm",
        Description:" Ahora me ves..... ahora no me ves",
        Species:"Reptil",
        Image:{reptile2}
    },
    {
        Id:12,
        Name:"Leonardo",
        Age:"1 meses",
        Height:"3 cm",
        Description:"A mis primos les gustan las pizzas yo soy mas sano y prefiero las fresitas",
        Species:"Reptil",
        Image:{reptile3}
    },
    {
        Id:13,
        Name:"Linda",
        Age:"3 meses",
        Height:"10 cm",
        Description:"Me gusta dormir en tus manitas",
        Species:"Roedor",
        Image:{rodent1}
    },
    {
        Id:14,
        Name:"Ratatui",
        Age:"3 meses",
        Height:"12 cm",
        Description:"Nose si sabes cocinar, pero si me dejas yo te enseño",
        Species:"Roedor",
        Image:{rodent2}
    },
    {
        Id:15,
        Name:"Grinch",
        Age:"1 mes",
        Height:"6 meses",
        Description:"Hoy no me peine, y si no odio la navidad",
        Species:"Roedor",
        Image:{rodent3}
    }
] 

export default pets;
