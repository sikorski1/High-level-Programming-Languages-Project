# Projekt JPWP - Nauka React Native od zera
  Nasze [repozytorium](https://github.com/sikorski1/XComCloneProject), w którym ostworzyliśmy UI aplikacji mobilnej x-kom

  Poniżej laboratorium, które przygotowaliśmy. Mamy nadzieję, że będzie to dobry wstęp do Reacta Native
  
# Część teoretyczna
  Prezentcja do całego laboratorium znajduje się [tutaj](https://github.com/sikorski1/High-level-Programming-Languages-Project/raw/main/React_Native_od_zera_JPWP.odp)
Pomocne strony:
- React:
  - Wprowadzenie do Reacta - [Quick Start](https://react.dev/learn)
  - Dokumentacja - [React Reference Overview](https://react.dev/reference/react)
  - useState:
    - [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
    - [useState](https://react.dev/reference/react/useState)
- React Native:
  - Wprowadzenie do Reacta Native - [Introduction](https://reactnative.dev/docs/getting-started)
  - Hierarchia komponentów - [Thinking in React](https://react.dev/learn/thinking-in-react)
  - Różnice w komponentach - [RN Components](https://reactnative.dev/docs/intro-react-native-components)
  - Najważniejsze kompnenty - [Core Components](https://reactnative.dev/docs/components-and-apis)
  - RN API - [API](https://reactnative.dev/docs/accessibilityinfo)


# Część praktyczna

Przed rozpoczęciem pierwszego zadania poprawnie skonfiguruj środowisko, w tym celu zainstaluj [Node.js](https://nodejs.org/en) oraz [Expo](https://docs.expo.dev/get-started/installation/)
Komendy które będziesz często używał w Expo:
  -  `npx expo start` - uruchamia projekt
  -  `npx expo --tunnel` - jeśli nie można połączyć się ze swom telefonem (należy zatrzymać projekt i uruchomić go z tą komendą)
  -  kiedy wyskakują błędy w Expo [link](https://sebhastian.com/npm-err-enoent/)

## Zadanie 0

- Stworzenie projektu z pomocą Expo:
  - Otwórz za pomocą np. VSC folder w którym chcesz stworzyć projekt
  - w terminalu wpisz komendę `npx expo init *nazwa*`, aby stowrzyć nowy projekt (może to chwilę zająć)
- Przejrzyj pliki, które się tam znajdują. Które pliki interesują nas najbaridzej?
- Stwórz folder `src` w głównym folderze projektu, w którym będziemy trzymać cały kod, który będziemy edytować
  - w folderze `src` stwórz foldery: `data`, `components`, `constans`, `styles`, `pages`
  - przenieś plik `App.js` do folderu `src`
- Teraz możesz uruchomić aplikację
  - Wyskoczył błąd, teraz musisz go naprawić
  - Wskazówka, co robiliśmy z plikiem `App.js`?

## Zadanie 1

- Stwórz plik o nazwie `Container.js` w folderze `components`
  - Zaimportuj [`View`](https://reactnative.dev/docs/view), [`StyleSheet`](https://reactnative.dev/docs/stylesheet) z `'react-native'`
  - Stwórz funkcję, która będzie zwracać kontener, skorzystaj z `View`
  - Dodaj podkreślenia na górze i na dole kontenera, tak aby wyodrębić jego treść
  - Dodaj style do kontenera i podkreślenia
  - Skorzystaj z właściwości, aby umożliwić umieszczenie komponentu w kontenerze
- W folderze `pages` stwórz plik `MainPage.js`, będziemy w nim korzystać z naszych komonentów
  - Zaimportuj do `MainPage.js`: `Container`, [`SafeAreaView`](https://reactnative.dev/docs/safeareaview), [`ScrollView`](https://reactnative.dev/docs/scrollview), [`StatusBar`](https://reactnative.dev/docs/statusbar), [`Text`](https://reactnative.dev/docs/text)
  - Struktura  `MainPage.js`: `SafeAreaView` (odpowiednio ustaw komponent tzn. aby teść nie nachodziła na statusbar, dodając `marginTop: StatusBar.currentHeight`) > `ScrollView` > `Container` > (żeby sprawdzić czy nasze modyfikacje są poprawne umieść w kontenerze `<Text>123</Text>`)
- Zapimotruj do pliku `App.js` komponent `MainPage.js` oraz użyj go

> <img align="center" width="600" height="136" src="img/img1.png">

-  Przykładowy wygląd:

> <img align="center" width="600" height="102" src="img/container.png">

## Zadanie 2

- Stwórz plik o nazwie `FirstComponent.js` w folderze `components`
  - Zaimportuj `View`, `Text`, [`TextInput`](https://reactnative.dev/docs/textinput), `StyleSheet` z 
  - Zaimportuj [`useState`](https://react.dev/reference/react/useState)
- Stwórz komponent, który będzie wypełniać komponent `Text`, tekstem wpisanym do `TextInput`
  - Wykorzystaj `useState` oraz właściwości `TextInput`
  - Dodaj style do komponentu
  - po wpisaniu tekstu, powinien on być zapisywany oraz wyświetlać się obok napisu "Witaj"
- Zaimprotuj komponent do pliku `MainPage.js`
  - Umieść zaimportowany komponent w kontenerze
  - Przykładowy wygląd

> <img src="img/img4.png" width="300" height="150">


## Zadanie 3

- Stwórz plik o nazwie `SecondComponent.js `
- Pobierz plik `data.js`, który jest wypełniony danymi potrzebnymi do wypełnienia kart:
  - `id`, `text`, `img`
  - struktura danych:

> <img src="img/img6.png" width="300" height="156">

- Stwórz folder `assets` w głównym folderze projektu
  - Pobierz folder `icons` z repozytorium i dodaj je do folderu `assets`
  - dodaj ścieżki do *ikonek* z folderu `icons` do odpowiednich pól `require`, które są puste w `data.js`
- Zaimportuj `View`, `Text`, [`FlatList`](https://reactnative.dev/docs/flatlist), [`Image`](https://reactnative.dev/docs/image), `data.js` do `SecondComponent.js`
  - Stwórz `View` (flex:1) > `FlatList`, do której przekażesz dane, usuniesz scrolla oraz ustawisz widok horyzontalny 
  - Za pomoca właściwości renderItem wygeneruj 5 kart korzystając z danych

> <img src="img/img5.png" width="300" height="153">

Struktura:
  - Dodaj style do kart, dodaj `marginLeft` dla każdej karty z wyłączeniem ostatniej. Dla ostatniej dodaj `marginRight` (skorzystaj z `index` oraz `id`, użyj stylowania liniowego) 
- Zaimprotuj komponent do pliku `App.js `
  - Umieść zaimportowany komponent w kontenerze 
- Przykładowy wygląd, zwróć uwagę na odstęp na końcu i na początku nowego komponentu:

> <img src="img/img7.png" width="300" height="284"> <img src="img/img8.png" width="300" height="284">

## Zadanie 4

- Teraz zrobimy przejście do nowego widoku
  - pobierz plik `dummyData.js`, w którym znajdują się informacje na temat przedmiotów, które bedą pojawiały się po kliknięcu w ikonkę kategorii
  - WIP



