# NeuroSYS praktyki (summer 2022)

# Table of contents

1. [Zadanie rekrutacyjne](#zadanie-rekrutacyjne---praktyki-front-end)
2. [Uruchamianie](#uruchamianie)

---

## Zadanie rekrutacyjne - praktyki front-end

[Go to: Table of contents](#table-of-contents)

**Cel:** Stworzenie wizytówki dla dowolnej gwiazdy muzycznej :)

**Opis:** Do stworzenia strony internetowej powinny zostać użyte technologie takie jak:
- HTML5
- CSS3
- JavaScript w standardzie minimum ES6

Strona powinna zawierać informacje “O mnie” lub “O nas”, w której można wykazać się kreatywnością i estetyką, a także formularz kontaktowy do menedżera, który zawiera pola:
- Imię i nazwisko
- E-mail
- Telefon
- Treść wiadomości
- Zaimplementowany samodzielnie mechanizm, sprawdzający czy osoba nie jest botem.<br>
Przykład: Ze zbioru losowane jest pytanie i trzy odpowiedzi, całość o tematyce
muzycznej, a kliknięcie w poprawną odpowiedź pozwala na poprawną wysyłkę
formularza, z kolei wybór odpowiedzi niepoprawnej skutkuje wylosowaniem kolejnego
pytania.

Cały formularz powinien być ukryty po załadowaniu strony i wysuwany po kliknięciu w przycisk kontakt. Formularz powinien zostać wysunięty z prawej strony i zakryć 100% wysokości oraz 50% prawej części strony. Do formularza powinna zostać zaimplementowana walidacja, która sprawdza, czy wszystkie pola zostały wypełnione oraz czy adres e-mail i telefon mają odpowiednią formę. Po symulacji wysłania formularz powinien się schować oraz powinien pojawić się komunikat o pomyślnym wykonaniu akcji.

Na stronie mile widziane będą zdjęcia oraz osadzony film z serwisu Youtube lub Vimeo.

W zadaniu oprócz estetyki i animacji, będzie oceniane również wykorzystanie możliwości jakie dają JS i CSS oraz czystość kodu. Wykorzystanie technologii React będzie dodatkowym atutem.

Podczas tworzenia strony należy wykorzystać system kontroli wersji GIT i publiczne repozytorium w serwisie github lub gitlab.

## Uruchamianie

[Go to: Table of contents](#table-of-contents)

### Pierwsze Uruchomienie

```bash
cd showcase-music-star
npm install # installs neccessary packages into ./node_modules/
npm start # opens http://localhost:3000/ in the browser
# Ctrl-C stops the running localhost
```

### Ponowne Uruchomienie

```bash
cd showcase-music-star
npm start # opens http://localhost:3000/ in the browser
# Ctrl-C stops the running localhost
```