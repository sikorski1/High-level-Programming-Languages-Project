# Część teoretyczna
  Prezentcja do całego laboratorium znajduje się [tutaj](https://github.com/sikorski1/High-level-Programming-Languages-Project/raw/main/React_Native_od_zera_JPWP.odp)

# Część praktyczna

### Zadanie 1

- Stwórz plik o nazwie `Container.js`
  - Zaimportuj `View`, `StyleSheet`
  - Stwórz funkcję, która będzie zwracać kontener, skorzystaj z `View`
  - Dodaj podkreślenia na górze i na dole kontenera, tak aby wyodrębić jego treść
  - Oscyluj kontener oraz podreślenia
  - Skorzystaj z właściwości, aby umożliwić umieszczenie komponentu w kontenerze

- Zaimportuj do pliku głównego `App.js`: `Container`, `SafeAreaView`, `ScrollView`, `StatusBar`, `Text`
  - Struktura  `App.js`: `SafeAreaView` (oscyluj liniowo, dodając `marginTop: StatusBar.currentHeight`) > `ScrollView` > `Container` > (dla testu umieść w kontenerze `<Text>123</Text>`):

<img align="center" width="600" height="136" src="img/img1.png">


-  Przykładowy wygląd:

<img src="img/container.png" width="600" height="200">


### Zadanie 2

- Stwórz plik o nazwie `FirstComponent.js`
  - Zaimportuj `View`, `Text`, `TextInput`, `StyleSheet`
  - Zaimportuj `useState`
- Stwórz komponent, który będzie wypełniać <Text>, tekstem wpisanym do <TextInput> 
  - Wykorzystaj `useState` oraz właściwości `TextInput`
  - Oscyluj komponent 
- Zaimprotuj komponent do pliku `App.js` 
  - Umieść zaimportowany komponent w kontenerze 
- Przykładowy wygląd

<img src="img/img4.png" width="300" height="150"> <img src="img/img2.png" width="300" height="150"> <img src="img/img3.png" width="300" height="150">


### Zadanie 3

- Stwórz plik o nazwie `SecondComponent.js `
- Stwórz plik `data.js`, który wypełnisz danymi potrzebnymi do wypełnienia kart:
  - `id`, `text`, `img`, zdjęcia pobierz z plików: `icon1`, `icon2`, ...

![Struktura](img/img6.png)

- Zaimportuj `View`, `Text`, `FlatList`, `Image`, `data` do `SecondComponent.js`
  - Stwórz `View` (flex:1) > `FlatListę`, do której przekażesz dane, usuniesz scrolla oraz ustawisz widok horyzontalny 
  - Za pomoca właściwości renderItem wygeneruj 5 kart korzystając z danych 
Struktura:
 
![Struktura](img/img5.png)

- Oscyluj karty, dodaj marginLeft dla każdej karty z wyłączeniem ostatniej. Dla ostatniej dodaj marginRight (skorzystaj z index oraz id, użyj stylowania liniowego) 
Zaimprotuj komponent do pliku App.js 
Umieść zaimportowany komponent w kontenerze 
Przykładowy wygląd

![Items](img/img7.png)

![Items](img/img8.png)



