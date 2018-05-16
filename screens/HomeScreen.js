import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import {WebBrowser} from 'expo';
import {MonoText} from '../components/StyledText';
import {List, ListItem, ListView, SearchBar, Avatar} from 'react-native-elements'

const punchlines = [
  { id: 1, punchline: "OSS117! Pour vous servir!", name: "Lucien Bramard / OSS117", photo: "../assets/images/jean_dujardin.jpg", sound: "oss117pourvousservir"
  }, { id: 2, punchline: "Fais moi l'amour... Pas envie!", name: "Princesse Al Tarouk", photo: "./images/aure_atika.jpg", sound: "faismoilamourpasenvie"
  }, { id: 3, punchline: "Viens crotale! Quelques heures!", name: "Princesse Al Tarouk", photo: "./images/aure_atika.jpg", sound: "vienscrotalequelquesheures"
  }, { id: 4, punchline: "Comment est votre blanquette?", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "commentblanquettebonne"
  }, { id: 5, punchline: "Hareng pomme à l'huile", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "harengramequin"
  }, { id: 6, punchline: "C'est cocasse!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "cocasse"
  }, { id: 7, punchline: "J'aime les panoramas", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "jaimelespanoramas"
  }, { id: 8, punchline: "Des millions?!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "desmillions"
  }, { id: 9, punchline: "Qui êtes-vous?!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "quietesvous"
  }, { id: 10, punchline: "C'est Monsieur René Coty", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "renecoty"
  }, { id: 11, punchline: "J'aime me beurrer la biscotte", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "beurrerbiscotte"
  }, { id: 12, punchline: "Bienvenue au Caire...", name: "Gerhard Moeller", photo: "./images/richard_sammel.jpg", sound: "bienvenueaucaire"
  }, { id: 13, punchline: "J'ai réservé au nom de Bramard!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "Bramard"
  }, { id: 14, punchline: "J'aime le bruit blanc de l'eau", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "bruitblanc"
  }, { id: 15, punchline: "Ca me sert à rien...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "Camesertarien"
  }, { id: 16, punchline: "C'est drôle...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "cestdrole"
  }, { id: 17, punchline: "C'est toi arrêtez!!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "cesttoiarretez"
  }, { id: 18, punchline: "C'est une astuce!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "cestuneastuce"
  }, { id: 19, punchline: "Combien as-tu d'enfants Slimane?", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "combienenfants2"
  }, { id: 20, punchline: "Comment est quoi?!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "commentestquoi"
  }, { id: 21, punchline: "On ne devrait jamais faire confiance à une femme", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "confiancefemme"
  }, { id: 22, punchline: "Je vous mettrai un petit coup de poliche", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "coupdepoliche"
  }, { id: 23, punchline: "Mais il va la fermer sa gueule?!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "fermersagueule"
  }, { id: 24, punchline: "Et non pas le gratin de pommes de terres...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "gratin"
  }, { id: 25, punchline: "L'imam...", name: "Larmina El Akmar Betouche", photo: "./images/berenice_bejo.jpg", sound: "imam"
  }, { id: 26, punchline: "Inch'Allah!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "inchallah"
  }, { id: 27, punchline: "Jack! Jack...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "jack"
  }, { id: 28, punchline: "J'aime quand on m'enduit d'huile", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "jaimehuile"
  }, { id: 29, punchline: "J'aime me battre", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "jaimemebattre"
  }, { id: 30, punchline: "Jouer au malin", name: "Raymond Pelletier", photo: "./images/francois_damiens.jpg", sound: "joueraumalin"
  }, { id: 31, punchline: "Tu n'es pas seulement un lâche...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "lachetraitre"
  }, { id: 32, punchline: "Moi qui pensais vous laisser faire l'amour avec moi", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "laisserfairelamour"
  }, { id: 33, punchline: "Et si j'étais naine, et myope?", name: "Larmina El Akmar Betouch", photo: "./images/berenice_bejo.jpg", sound: "nainemyope"
  }, { id: 34, punchline: "On va boir un verre ou...", name: "Raymond Pelletier", photo: "./images/francois_damiens.jpg", sound: "onvaboireunverre"
  }, { id: 35, punchline: "On va dire que c'est moi!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "onvadirequecestmoi"
  }, { id: 36, punchline: "C'est la piquette Jack!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "piquettejack"
  }, { id: 37, punchline: "On dirait une poissonnière de Ménilmontant!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "poissonniere"
  }, { id: 38, punchline: "Moi je suis dans le poulet!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "pouletbordel"
  }, { id: 39, punchline: "Tu me prends pour un crétin?!", name: "Raymond Pelletier", photo: "./images/francois_damiens.jpg", sound: "prendspouruncretin"
  }, { id: 40, punchline: "Ta pudeur t'honore Slimane", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "pudeurhonore"
  }, { id: 41, punchline: "S'agirait de grandir...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "sagiraitdegrandir"
  }, { id: 42, punchline: "Mettre mon smocking en alpaga!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "smockingenalpaga"
  }, { id: 43, punchline: "Le Soviet éponge!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "sovieteponge"
  }, { id: 44, punchline: "T'es mauvais!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "tesmauvais"
  }, { id: 45, punchline: "C'était donc ça tout ce tintouin!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "tintouin"
  }, { id: 46, punchline: "Très français", name: "Larmina El Akmar Betouch", photo: "./images/berenice_bejo.jpg", sound: "tresfrancaismerci"
  }, { id: 47, punchline: "Triste Sir!", name: "Raymond Pelletier", photo: "./images/francois_damiens.jpg", sound: "tristesir"
  }, { id: 48, punchline: "Une Suze!", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "unesuze"
  }, { id: 49, punchline: "Vous voulez mourir Bramard?!", name: "Raymond Pelletier", photo: "./images/francois_damiens.jpg", sound: "voulezmourirbramar"
  }, { id: 50, punchline: "Elle est bonne...", name: "Lucien Bramard / OSS117", photo: "./images/jean_dujardin.jpg", sound: "elleestbonne"
  }
]



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

  }


  static navigationOptions = {
    header: null
  };



  async playSound() {
      try {
        const {tintouin, status} = await Expo.Audio.Sound.create(require('../assets/sounds/tintouin.mp3'), {shouldPlay: true});
      } catch (error) {
        console.log(error);
      }
    }

  render() {
    return (
      <View style={{flex:1, paddingTop:20}}>

      <SearchBar lightTheme containerStyle={{backgroundColor: 'orange'}} inputStyle={{backgroundColor: 'white'}} placeholder='Cherchez une réplique...'/>

      <ScrollView style={{flex:1}}>

        <View>
          {
            punchlines.map((l, i) => (
              <ListItem
                hideChevron
                roundAvatar
                avatar='https://pbs.twimg.com/profile_images/1133992753/OSS117_400x400.png'
                key={i}
                title={l.punchline}
                subtitle={l.name}
                onPress={() => this.playSound()}
                style={{backgroundColor:'white'}}
              />
            ))

          }
        </View>

      </ScrollView>
</View>
)}
}
