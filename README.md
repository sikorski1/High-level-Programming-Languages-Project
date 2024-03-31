# Część teoretyczna
  Prezentcja do całego laboratorium znajduje się [tutaj](https://github.com/sikorski1/High-level-Programming-Languages-Project/raw/main/React_Native_od_zera_JPWP.odp)

# Część praktyczna
### Zadanie 1
- a) Stwórz plik o nazwie `Container.js`
- b) Zaimportuj `View`, `StyleSheet`
- c) Stwórz funkcję, która będzie zwracać kontener, skorzystaj z `View`
- d) Dodaj podkreślenia na górze i na dole kontenera, tak aby wyodrębić jego treść
- e) Oscyluj kontener oraz podreślenia
- f) Skorzystaj z właściwości, aby umożliwić umieszczenie komponentu w kontenerze <br><br>
- g) Zaimportuj do pliku głównego `App.js` - `Container`, `SafeAreaView`, `ScrollView`, `StatusBar`, `Text` <br><br>
- h) Struktura  `App.js`: `SafeAreaView` (oscyluj liniowo, dodając `marginTop: StatusBar.currentHeight`) > `ScrollView` > `Container` > (dla testu umieść w kontenerze <Text>123</Text>) <br><br><br>
>![Struktura](img/img1.png) <br><br><br>
-  Przykładowy wygląd <br><br><br>
>![Kontener](img/container.png) <br><br><br>

Zadanie 2
> a) Stwórz plik o nazwie FirstComponent.js <br><br>
> b) Zaimportuj View, Text, TextInput, StyleSheet <br><br>
> c) Zaimportuj useState <br><br>
> d) Stwórz komponent, który będzie wypełniać <Text>, tekstem wpisanym do <TextInput> <br><br>
> e) Wykorzystaj useState oraz właściwości TextInput <br><br>
> f) Oscyluj komponent <br><br>
> g) Zaimprotuj komponent do pliku App.js <br><br>
> h) Umieść zaimportowany komponent w kontenerze <br><br>
> Przykładowy wygląd <br><br><br>
> ![TextInput](img/img4.png)
> ![TextInput](img/img2.png)
> ![TextInput](img/img3.png) <br><br><br>

Zadanie 3
> a) Stwórz plik o nazwie SecondComponent.js <br><br>
> b) Stwórz plik data.js, który wypełnisz danymi potrzebnymi do wypełnienia kart (id, text, img), zdjęcia pobierz z plików (icon1, icon2, ...) <br><br><br>
> ![Struktura](img/img6.png) <br><br><br>
> c) Zaimportuj View, Text, FlatList, Image, data do SecondComponent <br><br>
> d) Stwórz View(flex:1) > FlatListę, do której przekażesz dane, usuniesz scrolla oraz ustawisz widok horyzontalny <br><br>
> e) Za pomoca właściwości renderItem wygeneruj 5 kart korzystając z danych <br><br>
> f) Struktura <br><br><br>
> ![Struktura](img/img5.png) <br><br><br>
> g) Oscyluj karty, dodaj marginLeft dla każdej karty z wyłączeniem ostatniej. Dla ostatniej dodaj marginRight (skorzystaj z index oraz id, użyj stylowania liniowego) <br><br>
> h) Zaimprotuj komponent do pliku App.js <br><br>
> i) Umieść zaimportowany komponent w kontenerze <br><br>
> Przykładowy wygląd <br><br><br>
> ![Items](img/img7.png)
> ![Items](img/img8.png)



