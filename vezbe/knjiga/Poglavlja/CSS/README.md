[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

<style>
.domaci-zadatak {
    border: 5px solid gold;
    padding: 10px;
}

.domaci-zadatak .naslov {
    font-weight: bold;
    text-align: center;
    display: block;
}

.domaci-zadatak .tekst {
    border-top: 2px dashed black;
    border-bottom: 2px dashed black;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

# 2. Stilizovanje Veb dokumenata kroz CSS

*Cascading Style Sheets* (skr. *CSS*) predstavlja jezik koji služi za stilizovanje HTML elemenata. Za razliku od jezika HTML, koji opisuje logičku strukturu veb dokumenta, jezikom CSS se služimo da bismo opisali na koji način se elementi te logičke strukture prikazuju. Na primer, korišćenjem jezika CSS možemo podesiti poziciju elemenata, boju teksta, okvire, pozadinu i dr.

## 2.1 Osnovni elementi jezika CSS

CSS jezik se sastoji od niza *pravila* (engl. *rule*). Svako pravilo je oblika:

```css
selektor {
    svojstvo-1: vrednost-1; /∗ deklaracija 1 ∗/
    ...
    svojstvo-N: vrednost-N; /∗ deklaracija N ∗/
}
```

Objasnimo sada svaku od predstavljenih stavki:

- *Selektor* (engl. *selector*) predstavlja način za definisanje nad kojim HTML elementima će dato pravilo biti primenjeno. Postoji veliki broj selektora, a neki od njih su predstavljeni u tabeli ispod, zajedno sa primerima upotrebe.

- *Deklaracija* (engl. *declaration*) opisuje način na koji se vrši stilizovanje elemenata koji su selektovani datim selektorom. Jednom deklaracijom se definiše tačno jedna stavka u stilu, na primer, boja teksta, boja pozadine, širina elementa, udaljenost od gornje ivice roditeljskog elementa, itd. Deklaracije se međusobno razdvajaju karakterom `;` (tačka-zapeta).

- Svaka deklaracija sadrži par *svojstvo* (engl. *property*) i *vrednost* (engl. *value*) koji definišu jednu stavku stila u datom pravilu. Svaki element ima definisan skup svojstava koja je moguće primeniti nad tim elementom. Takođe, svako svojstvo ima definisan domen vrednosti koje može uzimati. Na primer, svojstvo koje određuje boju teksta može uzimati za vrednost boje u različitim formatima (`blue`, `yellow`, `rgb(125, 68, 41)`, itd.), dok širina elementa može uzimati za vrednost neku od dužina (`2em`, `300px`, `12cm`), procenat (`50%`), itd. U nastavku poglavlja ćemo se upoznati za raznim svojstvima i odgovarajućim vrednostima.

| Selektor | Primer | Objašnjenje |
| -------- | ------ | ----------- |
| Ime elementa | `p` | Primeniće stil nad svim paragrafima. |
| Identifikator | `#moj-id` | Primeniće stil nad svim elementima koji imaju postavljen generiški atribut `id` na vrednost `"moj-id"`. |
| Klasa | `.moja-klasa` | Primeniće stil nad svim elementima koji imaju postavljen generiški atribut `class` na vrednost `"moja-klasa"`. |
| Ugnežđavanje | `h1 p` | Primeniće stil nad svim paragrafima koji se nalaze kao potomci svih naslova `h1`. |
| Kompozicija | `div h1.naslov span` | Primeniće stil nad svim linijskim tekstovima koji se nalaze kao potomci svih naslova `h1` sa atributom `class="naslov"` koji se nalaze kao potomci svih elemenata `div`. |
| Grupisanje | `div, p` | Primeniće stil nad svim elementima `div` kao i na svim paragrafima. |

Komentari se u jeziku CSS navode između /∗ i ∗/. Slično kao i u jeziku HTML i većini programskih jezika, komentari služe za pojašnjenje koda ili njegovu dokumentaciju i neće biti procesirani od strane veb pregledača prilikom parsiranja CSS koda.

Možemo testirati da li naš CSS dokument predstavlja validno napisan dokument pomoću CSS validatora. Jedan primer validatora je moguće pronaći na adresi [http://jigsaw.w3.org/css-validator/](http://jigsaw.w3.org/css-validator/).

## 2.2 Načini za zadavanje pravila za stilizovanje

Postoje tri načina na koja možemo specifikovati pravila za stilizovanje:

1. Spoljni kaskadni listovi

2. Element `style`

3. Atribut `style`

### 2.2.1 Spoljni kaskadni listovi

Verovatno najkorišćeniji i najpraktičniji metod jeste izdvajanje CSS pravila u posebnu datoteku sa ekstenzijom `css`. Da bismo pravila iz ovakvih datoteka, čiji je MIME tip `text/css`, primenili na neki HTML dokument, potrebno je da se u okviru zaglavlja tog HTML dokumenta (tj. u okviru `head` elementa) navede samozatvarajući element `link` koji ima tri atributa koja treba navesti:

1. Atribut `rel` opisuje kakav je odnos datoteke koja se navodi sa tekućim HTML dokumentom u kojem se uključuje. Za spoljne kaskadne listove, odnos koji se navodi je `stylesheet`.

2. Atribut `type` opisuje MIME tip datoteke koja se navodi. Kao što smo već rekli, MIME tip za spoljne kaskadne listove je `text/css`.

3. Atribut `href` opisuje lokaciju datoteke koja se navodi. Lokacija može biti navedena kao:
   - Relativna lokacija u odnosu na lokaciju HTML dokumenta.
   - Apsolutna lokacija od korenog direktorijuma servera na kojem se nalazi HTML dokument.
   - URL.

Jedan primer navođenja elementa `link` može biti sledeći:

```html
<link rel="stylesheet" type="text/css" href="dokument.css">
```

Prednost korišćenja ovog načina je u tome što možemo istu datoteku koristiti za više dokumenata, umesto da uvišestručujemo pravila za svaku HTML datoteku. Ovim pristupom se postiže modularnost i smanjenje redundantnosti.

### 2.2.2 Element `style`

Drugi način za zadavanje stilova jeste putem HTML elementa `style`. Ovaj element se takođe navodi isključivo u sadržaju elementa `head`. Elementu `style` se dodaje atribut `type="text/css"` kako bi se specifikovalo da su pravila tipa CSS. Sama pravila se zadaju kao sadržaj ovog elementa. Navedeni stilovi se primenjuju za ceo dokument u čijem zaglavlju se element `style` nalazi, ali ta pravila nisu vidljiva drugim HTML dokumentima.

### 2.2.3 Atribut `style`

Poslednji način za zadavanje stilova jeste korišćenjem atributa `style` nad pojedinačnim elementima. Stilovi definisani na ovakav način su vidljivi i važe isključivo nad pojedinačnim elementom nad kojim su definisani. Svi ostali elementi ne potpadaju pod uticaj stilova koji su definisani u okviru atributa `style`.

### 2.2.4 Preklapanje stilova

Postojanje više načina za primenjivanje stilova brzo nas dovodi do narednog pitanja:

> Ukoliko su za isti selektor definisana dva pravila sa različitim stilovima, pri čemu se ta dva pravila specifikovana na dva različita načina, koji od ta dva pravila će biti primenjen na elemente sa tim selektorom?

Instanca ovog problema je, na primer, ako se u spoljnom kaskadnom listu definiše da je boja teksta paragrafa plava, dok se u elementu style definiše da je boja teksta paragrafa crvena. U tu svrhu, definisana su pravila kojim se određuje koje svojstvo dolazi do izražaja u slučaju *preklapanja usled primenjivanja istog pravila iz različitih izvora*.

Najveću težinu imaju stilovi definisani korišćenjem atributa `style`, zatim atributi definisani u zaglavlju HTML dokumenta (korišćenjem elementa `style` i ugnežđavanjem eksternih CSS dokumenata), i na kraju, najmanju težinu imaju podrazumevane vrednosti veb pregledača.

Naredni kod prikazuje HTML datoteku `index.html` i CSS datoteku `index.css` koja definišu pravila za tri paragrafa koja se prikazuju u HTML datoteci. Na narednoj slici dat je prikaz koda u veb pregledaču. Primetimo da je pravilo koje boji treći paragraf u plavo korišćenjem atributa `style` "pobedilo" pravila koja su definisana za isti paragraf i u elementu `style` (u kojem je navedeno da se taj paragraf boji zelenom bojom) i u spoljnim kaskadnim listovima `index.css` (u kojima je navedeno da se taj paragraf boji narandžastom bojom).

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 1</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <style>
        p#id2,
        p#id3 {
            color: green;
            /* Postavlja boju teksta na zelenu */
        }
    </style>
</head>

<body>
    <p id="id1">
        Ovo je 1. paragraf.
    </p>
    <p id="id2">
        Ovo je 2. paragraf.
    </p>
    <p id="id3" style="color: blue; /* Postavlja boju teksta na plavu */">
        Ovo je 3. paragraf.
    </p>
</body>

</html>
```

```css
p#id1, 
p#id2, 
p#id3 {
    /* Postavlja boju teksta na narandzastu. */
    color: orange;
}
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/preklapanje1.png" alt="Primer preklapanja stilova usled primenjivanja istog pravila iz različitih izvora.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/1/index.html"
   target="_blank">Pogledaj primer uživo</a>

Međutim, da bi ovo pravilo bilo ispunjeno, potrebno je obratiti pažnju na redosled elemenata `style` i `link` u zaglavlju HTML dokumenta. Na primer, pretpostavimo da eksterna CSS datoteka `plavi_naslov.css` definiše da naslov `h1` treba biti obojen u plavu boju. Takođe, neka je dat element `style` u zaglavlju sa pravilom koji definiše da naslov `h1` treba biti obojen u narandžastu boju. Na narednoj slici dati su rezultati kada se element `style` navede nakon elementa `link` (slika A) i kada se element `link` navede nakon elementa `style` (slika B).

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/style.png" alt="Primer drugačijeg stilizovanja elementa h1 usled različitog rasporeda elemenata link i style u zaglavlju HTML dokumenta.">
</div>

(A) Primer kada je prethodno definisan element `style` naveden nakon elementa `link`. Pravilo iz elementa `style` je "pobedilo".

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/link.png" alt="Primer drugačijeg stilizovanja elementa h1 usled različitog rasporeda elemenata link i style u zaglavlju HTML dokumenta.">
</div>

(B) Primer kada je prethodno definisan element `link` naveden nakon elementa `style`. Pravilo iz elementa `link` (tj. iz spoljnih kaskadnih listova) je "pobedilo".

Da bismo razumeli kako ovo pravilo funkcioniše, moramo da precizno razumemo kako veb pregledač upravlja CSS pravilima iz različitih izvora. Prilikom navođenja CSS pravila, ta pravila se "kaskadno slažu jedna na druge". U slučaju da prvo navedemo element `style`, a zatim element `link`, prvo će biti "složena" pravila iz elementa, a zatim će "preko njih biti složena" pravila iz spoljnog kaskadnog lista. Ukoliko postoji pravilo iz spoljnog kaskadnog lista koje je isto kao ono iz elementa `style`, samo sa različitom vrednošću, onda će to drugo pravilo "pregaziti" pravilo iz elementa `style`. Slično važi u slučaju da se navodi prvo element `link`, a zatim element `style` - u ovom slučaju, pravila iz elementa `style` imaju veću prednost. Takođe, isti princip važi i za pravila koja se uvode atributom `style` u odnosu na pravila iz elementa `style` i spoljnih kaskadnih listova. Dakle, veću težinu ima ono pravilo koje je poslednje pronađeno, tj. ono koje je kaskadno poslednje složeno.

Slično pitanje se može postaviti posmatranjem nešto drugačijeg problema. Pre nego što opišemo problem, uvedimo nekoliko novih termina. Kažemo da je selektor `A` *širi* od selektora `B` ukoliko on obuhvata sve elemente koje obuhvata i selektor `B`, ali obuhvata i neke dodatne elemente uz hijerarhiju DOM stabla. U ovoj situaciji, takođe kažemo da je selektor `B` *specifičniji* od selektora `A`. Sada možemo uvesti naredni problem:

> Neka postoje dva pravila sa selektorima `A` i `B` koja definišu istu deklaraciju, ali sa različitom vrednošću. Takođe, neka je selektor `A` širi od selektora `B` (`B` je specifičniji selektor od selektora `A`). Pitanje koje se može postaviti jeste koji će od data dva stila biti primenjen nad elementima koji su selektovani selektorom `B`?

Instanca ovog problema bi bila ako se, na primer, nad celim telom dokumenta definiše da svi paragrafi budu obojeni crvenom bojom, a zatim se posebno definiše za jedan paragraf da je obojen plavom bojom. Da li će taj paragraf biti obojen crvenom ili plavom bojom?

Opisana situacija se može rešiti pravilima koja važe u slučaju *preklapanja usled primenjivanja istog pravila na različitim nivoima hijerarhije DOM stabla*. Što je selektor iz pravila specifičniji, to pravilo ima veću prednost. U prethodnom primeru, paragraf će biti obojen plavom bojom, jer je ono bilo definisano specifičnije u odnosu na pravilo koje ceo tekst boji u crvenu boju. Naredni kod prikazuje ovu situaciju, a na narednoj slici dat je prikaz koda u veb pregledaču. S obzirom da je prvo pravilo specifičnije od drugog, ono će biti primenjeno na treći element, iako se nalazi pre drugog pravila u kaskadnom slaganju.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 2</title>
    <style>
        /* Prvo pravilo je specificnije u DOM stablu od drugog, 
        te se zato ono primenjuje na treci paragraf,
        bez obzira na to sto drugo pravilo obuhvata isti element. */

        /* Prvo pravilo */
        p#paragraf {
            color: blue;
        }

        /* Drugo pravilo */
        body p {
            color: red;
        }
    </style>
</head>

<body>
    <p>
        Ovo je 1. paragraf.
    </p>
    <p>
        Ovo je 2. paragraf.
    </p>
    <p id="paragraf">
        Ovo je 3. paragraf.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/preklapanje2.png" alt="Primer preklapanja stilova usled primenjivanja istog pravila na različitim nivoima hijerarhije DOM stabla.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/2/index.html"
   target="_blank">Pogledaj primer uživo</a>

Ipak, postoji način da se forsira određeni stil bez obzira na ova pravila, a to je navođenjem ključne reči `!important` u okviru CSS deklaracije, pre karaktera za kraj deklaracije (`;`). Korišćenjem ove ključne reči, navedena deklaracija će uvek imati prednost nad svim ostalima. Naredni kod predstavlja izmenjeni prethodni primer, u kojem je drugom pravilu dodeljena ključna reč `!important`, čime se prethodni efekat poništava i treći paragraf ipak biva obojen crvenom bojom, kao što je vidljivo na narednoj slici.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 3</title>
    <style>
        /* Prvo pravilo */
        p#paragraf {
            color: blue;
        }

        /* Drugo pravilo */
        body p {
            color: red !important;
        }
    </style>
</head>

<body>
    <p>
        Ovo je 1. paragraf.
    </p>
    <p>
        Ovo je 2. paragraf.
    </p>
    <p id="paragraf">
        Ovo je 3. paragraf.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/preklapanje3.png" alt="Primer korišćenja ključne reči !important.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/3/index.html"
   target="_blank">Pogledaj primer uživo</a>

## 2.3 Rad sa bojama

U CSS jeziku, za dodeljivanje boje elementu možemo koristiti sledeća dva svojstva:

- Svojstvo `color` zadaje boju teksta koji se nalazi u sadržaju elementa.

- Svojstvo `background-color` zadaje boju pozadine elementa.

Vrednosti za boje se mogu specifikovati na više načina, a mi navodimo sledeće:

- Pomoću imena boje, na primer, `Red`, `Orange`, `DodgerBlue`, `Violet`, `MediumSeaGreen`, itd.

- Pomoću RGB i RGBA modela. Ovim modelima je potrebno zadati vrednosti iz opsega [0, 255] za crvenu (R), zelenu (G) i plavu (B) boju čijim se "mešanjem" dobija oko 16,7 miliona boja. Varijanta RGBA dodatno omogućava da se podesi prozirnost boje (alfa kanal, A) u opsegu [0.0, 1.0]. Na primer, `rgb(125, 50, 10)` ili `rgba(255, 0, 0, 0.75)`.

- Pomoću HEX modela. Ovim modelom se za svaku od crvene, zelene i plave, redom, navodi dvocifreni heksadekadni broj iz intervala [00, FF]. Na primer, `#123456`.

Naredni kod ilustruje upotrebu različitih modela boja, a na narednoj slici prikazan je odgovarajući dokument u veb pregledaču.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 4</title>
    <style>
        p#p1 {
            /* Zadavanje boje preko imena */
            color: slateblue;
            /* Zadavanje boje preko HEX modela */
            background-color: #c2ceda;
        }

        p#p2 {
            /* Zadavanje boje preko RGB modela */
            color: rgb(205, 165, 90);
            /* Zadavanje boje preko RGBA modela */
            background-color: rgba(16, 124, 92, 0.3);
        }
    </style>
</head>

<body>
    <p id="p1">
        Ovo je 1. paragraf.
    </p>
    <p id="p2">
        Ovo je 2. paragraf.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/boje.png" alt="Primer korišćenja različitih modela boja.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/4/index.html"
   target="_blank">Pogledaj primer uživo</a>

### Više informacija

Za više informacijama o temama koje su obrađene u ovoj sekciji, možete posetiti naredne korisne veb prezentacije:

- Spisak imena boja: 
[https://www.w3schools.com/colors/colors_names.asp](https://www.w3schools.com/colors/colors_names.asp).

- Uopšteno o modelima boja: 
[https://www.w3schools.com/cssref/css_colors_legal.asp](https://www.w3schools.com/cssref/css_colors_legal.asp).

- Biranje boja u editoru VS Code:
[https://mspoweruser.com/visual-studio-code-now-really-useful-color-picker-built/](https://mspoweruser.com/visual-studio-code-now-really-useful-color-picker-built/)

## 2.4 Stilizovanje teksta

Pre nego što se upoznamo sa CSS svojstvima kojima se stilizuje tekstualni sadržaj, potrebno je da razumemo koncept merenja dužine u jeziku CSS. Dužina se može meriti na različite načine u jeziku CSS i razna svojstva mogu uzimati ove mere za svoje vrednosti, kao što su širina elementa, veličina pojasa, veličina slova, itd. *Dužina* (engl. *length*) predstavlja vrednost broja praćena odgovarajućom jedinicom mere. Vrste dužina u jeziku CSS su:

- *Apsolutne dužine* su mere koje zauzimaju istu dužinu u veb pregledaču, bez obzira na veličinu ekrana, veličinu drugih elemenata itd. Neke od mera koje predstavljaju apsolutne dužine su:
   - Centimetri `cm`
   - Milimetri `mm`
   - Inči `in` (važi 1in = 96px = 2.54cm)
   - Pikseli uređaja na kojem se dokument prikazuje `px` (važi 1px = 1/96in)
   - Tačke `pt` (važi 1pt = 1/72in)

- Relativne dužine su mere koje zauzimaju dužinu relativnu u odnosu na druge mere. Relativne dužine bolje skaliraju od apsolutnih dužina između različitih uređaja na kojima se dokument prikazuje. Neke od mera koje predstavljaju relativne dužine su:
   - Jedinica `em` je relativna u odnosu na veličinu fonta elementa. Na primer, mera `2em` predstavlja dvostruko veću dužinu u odnosu na trenutnu dužinu fonta elementa nad kojim se primenjuje.
   - Procenti `%` su relativni u odnosu na veličinu roditeljskog elementa. Na primer, ako za neki element podesimo da je njegova visina jednaka `50%`, to znači da će taj element zauzimati polovinu visine roditeljskog elementa u DOM stablu.

Sada ćemo se upoznati sa nekim svojstvima kojima je moguće uticati na prikaz teksta:

- Svojstvo `font-size` podešava veličinu slova. Vrednosti ovog svojstva su dužine.

- Svojstvo `font-style` kontroliše iskošenost slova. Vrednosti su: `normal` (uspravna slova), `italic` (iskošena slova) i `oblique` (nakošena slova, slično kao `italic`, ali manje pdržano od veb pregledača).

- Svojstvo `font-weight` kontroliše podebljavanje slova. Vrednosti su: `normal` (podrazumevana debljina), `bold` (podebljano), `bolder` (više podebljano), `lighter` (tanja slova) ili brojevi u rasponu od `100` do `900` (sa korakom 100), pri čemu broj `400` odgovara vrednosti `normal`, a `700` odgovara vrednosti `bold`.

- Svojstvo `text-align` kontroliše horizontalno poravnanje teksta. Vrednosti su: `left` (levo poravnato), `right` (desno poravnato), `center` (centrirano) i `justify` (poravnato sa obe strane).

- Svojstvo `letter-spacing` podešava rastojanje između slova. Vrednosti su: `normal` (podrazumevano rastojanje) ili dužine.

- Svojstvo `word-spacing` podešava rastojanje između reči. Vrednosti su: `normal` (podrazumevano rastojanje) ili dužine.

- Svojstvo `text-indent` kontroliše nazubljivanje prve linije teksta. Vrednosti su dužine. 

- Svojstvo `text-shadow` dodaje senku tekstu elementa kome postavljamo svojstvo. Možemo mu zadati dve ili četiri vrednosti. Prva vrednost predstavlja pomeraj senke po horizontalnoj, a druga vrednost predstavlja pomeraj po vertikalnoj osi u odnosu na tekst. Treća vrednost omogućava zamućenje senke i može se izostaviti. Četvrta vrednost predstavlja boju senke i ona se takođe može izostaviti.

Naredni kod demonstrira upotrebu opisanih svojstava i dužina. Na narednoj slici je dat prikaz koda u veb pregledaču.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 5</title>
    <style>
        p#p2 {
            font-size: 2em;
        }

        p#p3 {
            font-style: italic;
        }

        p#p4 {
            font-weight: bold;
        }

        p#p5 {
            text-align: center;
        }

        p#p6 {
            letter-spacing: 5mm;
        }

        p#p7 {
            word-spacing: 1cm;
        }

        p#p8 {
            text-indent: 20%;
        }

        p#p9 {
            text-shadow: 10px 20px 2px salmon;
        }
    </style>
</head>

<body>
    <p id="p1">
        Ovo je velicina fonta veb pregledaca.
    </p>
    <hr>
    <p id="p2">
        Ovo je duplo veca velicina fonta veb pregledaca 
        (font-size: 2em).
    </p>
    <hr>
    <p id="p3">
        Ova slova su iskosena (font-style: italic).
    </p>
    <hr>
    <p id="p4">
        Ova slova su podebljana (font-weight: bold).
    </p>
    <hr>
    <p id="p5">
        Ovaj tekst je poravnat po sredini (text-align: center).
    </p>
    <hr>
    <p id="p6">
        Ovaj tekst ima veci razmak izmedju slova (letter-spacing: 5mm).
    </p>
    <hr>
    <p id="p7">
        Ovaj tekst ima veci razmak izmedju reci (word-spacing: 1cm).
    </p>
    <hr>
    <p id="p8">
        Ovaj tekst ima uvucenu prvu liniju, ali ostatak teksta ce biti
        normalno uvucen kada bude doslo do preloma u narednu liniju.
        Efekat moze izgledati kao novi paragraf u knjigama.
        (text-indent: 20%).
    </p>
    <hr>
    <p id="p9">
        Ovaj tekst ima postavljenu senku koja je malo zamucena 
        (text-shadow: 10px 20px 2px salmon).
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/tekst_stilovi.png" alt="Primer korišćenja različitih svojstava za stilizovanje teksta i dužina.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/5/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.4.1 Rad sa fontovima

Pored stilizovanja izgleda teksta raznim svojstvima koje smo prethodno demonstrirali, moguće je postavljanje familije fonta teksta. *Familija fontova* (engl. *font family*) definiše generalni izgled svakog karaktera. Ugrubo, sve familije fontova se mogu podeliti u narednih pet grupa:

- *Kukičave familije fontova* (engl. *serif*) karakteriše postojanje *kukica* (engl. *serif*) koji na neki način ukrašavaju ivice karaktera. Primeri kukičavih familija fontova su: Times New Roman, Georgia, itd.

- *Beskukičave familije fontova* (engl. *sans-serif*) karakteriše odsustvo kukica, odnosno, karakteri u ovim fontovima imaju čist izgled. Na računarskim ekranima se preporučuje korišćenje bezkukičavih familija fontova za lakše čitanje. Primeri beskukičavih familija fontova su: Arial, Helvetica, itd.

- *Familije fontova karaktera jednakih širina* (engl. *monospace*) karakterišu, kao što im i samo ime kaže, karakteri koji svi zauzimaju jednaku širinu. Obično se ove familije fontova smatraju najboljim za prikazivanje izvornog koda programa. Primeri beskukičavih familija fontova su: Courier New, Lucida Console, itd.

- *Pisane familije fontova* (engl. *cursive*) karakterišu karakteri koji deluju kao da su pisani rukom. Primeri pisanih familija fontova su: Comic Sans, Snell Roundhand, itd.

- *Dekorativne familije fontova* (engl. *fantasy*) karakterišu nestandardni karakteri koji se obično koriste za naslove ili za posebno isticanje nekih karaktera. Primeri dekorativnih familija fontova su: Impact, Luminary, itd.

S obzirom da su prve dve grupe familija fontova najviše korišćene, na narednoj slici dat je prikaz razlike između jedne beskukičave i jedne kukičave familije fontova.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/fontovi.png" alt="Razlika između kukičavih i beskukičavih familija fontova. Levo je prikazan karakter slova F u beskukičavoj familiji fontova, u sredini je prikazan karakter slova F u kukičavoj familiji fontova, a desno su crvenom bojom prikazane kukice koje predstavljaju razlike između ove dve familije fontova.">
</div>

#### Korišćenje postojećih fontova

Ukoliko želimo da specifikujemo familiju fontova za neki tekstualni sadržaj, na raspolaganju nam je CSS svojstvo `font-family`. Familija fonta se može zadati po imenu, na primer, `Arial` ili `'DejaVu Serif'`. Ukoliko naziv familije fontova ima znak razmaka, oko naziva je potrebno staviti navodnike. Alternativno, možemo zadati naziv generičke familije fontova, na primer, `serif` ili `sans-serif`, čime se prepušta veb pregledaču da odabere konkretnu familiju fontova iz te grupe koja mu je dostupna.

Takođe, moguće je staviti više fontova odvojenih karakterom `,` da bi veb pregledač, u slučaju da mu nije dostupan neki font, prikazao odgovarajuću zamenu. Štaviše, preporučuje se zadavanje više familija fontova na ovaj način. Tipično se prvo navode željeni fontovi, a na kraju se zadaje generička familija fontova.

Naredni kod ilustruje upotrebu različitih familija fontova i njegov prikaz u veb pregledaču je dat na narednoj slici.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 6</title>
    <style>
        p#p1 {
            font-size: 1.5em;

            /* Nije preporuceno */
            font-family: 'Gill Sans';
        }

        p#p2 {
            /* Preporuceno */
            font-family: 'Gill Sans', Helvetica, sans-serif;
        }
    </style>
</head>

<body>
    <p id="p1">
        Ovaj tekst bi trebalo da bude prikazan u 
        beskukicavoj familiji fontova Gill Sans.
    </p>
    <hr>
    <p id="p2">
        Ovaj tekst bi trebalo da bude prikazan u 
        beskukicavoj familiji fontova Gill Sans.
        <br><br>
        Ako ona nije dostupna veb pregledacu, <br>
        onda ce biti koriscena beskukicava familija Helvetica.
        Ako ni ona nije dostupna veb pregledacu, <br>
        onda ce on odabrati neku od beskukicavih familija fontova <br>
        koje su mu na raspolaganju.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/font_family.png" alt="Primer navođenja familija fontova za tekstualni sadržaj.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/6/index.html"
   target="_blank">Pogledaj primer uživo</a>

#### Dodavanje korisničkih fontova

Nekada želimo da tekst bude prikazan u familiji fontova koja nije dostupna veb pregledaču. Jedan način jeste da instaliramo željenu familiju fontova na operativnim sistemima svih uređaja na kojima će dokument biti prikazan. Očigledno, ovaj proces je zamoran i gotovo uvek nemoguć.

Umesto toga, dovoljno je unapred pripremiti datoteku koja sadrži informacije o željenom fontu (koji se često naziva *korisnički font* (engl. *user font*)), kao što su datoteke sa ekstenzijom `otf` (OpenType Font) ili `ttf` (TrueType Font). Zatim je potrebno među CSS pravilima upotrebiti naredbu `@font-face` kojom se definiše nova familija fontova koja će biti dostupna veb pregledaču. Sintaksa ove naredbe je:

```
@font-face {
    font-family: 'Naziv fonta';
    src: url('./lokacija/do/mog/fonta/Naziv Fonta.ttf');
}
```

Objasnimo kako funkcioniše ova naredba. Svojstvom `font-family` dodeljujemo naziv korisničkom fontu. Svojstvom `src` zadajemo putanju ka datoteci koja sadrži informacije o fontu. Ona se može nalaziti u lokalnom računaru ili na nekoj veb lokaciji, ali se u oba slučaja navodi korišćenjem vrednosti CSS funkcije `url` čiji je argument niska koja sadrži putanju do datoteke.

Nakon navođenja ovog pravila, novouvedenu familiju fontova možemo koristiti kao i svaku drugu, navođenjem njenog dodeljenog imena kao vrednost svojstva `font-family`. Naredni kod ilustruje upotrebu ovog pravila, a rezultat prikaza koda u veb pregledaču je dat na narednoj slici.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Primer 7</title>
    <style>
        @font-face {
            font-family: 'Ants Valley';
            /* Pretpostavka je da je ova datoteka dostupna */
            src: url('Ants Valley.otf');
        }

        div {
            font-family: 'Ants Valley', fantasy;
            font-size: 3em;
        }
    </style>
</head>

<body>
    <div>
        Korisnicka familija fontova
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/font_face.png" alt="Primer uvođenja i korišćenja korisnički-definisane familije fontova.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/7/index.html"
   target="_blank">Pogledaj primer uživo</a>

### Više informacija

Za više informacijama o temama koje su obrađene u ovoj sekciji, možete posetiti naredne korisne veb prezentacije:

- Uopšteno o CSS dužinama: 
[https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp).

- Uopšteno o CSS svojstvima za stilizovanje teksta: 
[https://www.w3schools.com/css/css_text.asp](https://www.w3schools.com/css/css_text.asp).

- Uopšteno o CSS svojstvu `font-family`: 
[https://www.w3schools.com/css/css_font.asp](https://www.w3schools.com/css/css_font.asp).

- Uopšteno o CSS pravilu `@font-face`: 
[https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp).

- Više o familijama fontova sa primerima: 
[https://www.w3.org/Style/Examples/007/fonts.en.html](https://www.w3.org/Style/Examples/007/fonts.en.html).

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 1</span> 
    <p class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Familiju fontova koja se koristi u zadatku moguće je pronaći na <a href="./Domaci/Resursi/zadatak1_font.ttf">ovoj lokaciji</a>. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom.
    </p>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak1.png" alt="">
</div>

## 2.5 Model kutije

U prethodnom poglavlju smo diskutovali o tome kako je HTML elemente moguće razmatrati kao pravougaonike koji se slažu jedni ispod drugih, odnosno, jedni do drugih, u zavisnosti od različitih faktora, kao što je, na primer, činjenica da je neki element blokovski ili linijski. Ovaj koncept ćemo sada detaljnije analizirati kroz pojam modela kutije.

*Model kutije* (engl. *box model*) podrazumeva da se svaki HTML element prostire odgovarajućom dvodimenzionalnom površinom na veb prezentaciji. Veličina ove površine zavisi od četiri veličine, koje ujedno čine i model kutije:

- *Sadržaj* (engl. *content*) predstavlja površinu u kojoj se prikazuje tekst, slika ili drugi sadržaj HTML elementa.

- *Punjenje* (engl. *padding*) predstavlja površinu oko sadržaja, ali koji se još uvek smatra "unutrašnošću" elementa. Punjenje je podrazumevano prozirno.

- *Ivica* (engl. *border*) predstavlja površinu koja deli unutrašnjost elementa od spoljašnjosti, odnosno, od drugih elemenata. Ivica podrazumevano nije postavljena.

- *Pojas* (engl. *margin*) predstavlja površinu oko ivice elementa, koji pre svega služi da stvori bezbedni pojas oko elementa i odvoji ga od okolnih elemenata (otuda i njegov prevod). Pojas je uvek proziran.

Kao što je prikazano na narednoj slici, svaki od kasnije navedenih površina obuhvata sve prethodne površine. Sada ćemo se upoznati detaljnije sa svakom od navedenih koncepata i videti na koje načine možemo upravljati njima.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/box_model.png" alt="Ilustracija modela kutije.">
</div>

### 2.5.1 Sadržaj elementa

Veličina površine koja predstavlja sadržaj elementa zavisi od dve stvari:

1. Da li je u pitanju blokovski ili linijski element?
2. Koje su vrednosti CSS svojstava `width` i `height`?

Blokovski elementi se podrazumevano prostiru celom širinom roditeljskog elementa u čijem se sadržaju nalaze, dok njihovu visinu izračunava veb pregledač na osnovu sadržaja u tim elementima. Ovaj, pdorazumevani efekat, potiče od činjenice da su svakom elementu podrazumevano postavljena svojstva `width` i `height` na vrednost `auto`. Međutim, za blokovske elemente, moguće je podešavati ova svojstva tako da veličina sadržaja bude drugačija. Vrednosti koje ova dva svojstva uzimaju su dužine.

Naredni kod ilustruje upotrebu ovih svojstava u promeni veličine sadržaja za blokovski element `div`. Naredna slika ilustruje prikaz ovog koda u veb pregledaču.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 8</title>
    <meta charset="UTF-8">

    <style type="text/css">
        div {
            height: 200px;
            width: 50%;
            background-color: powderblue;
        }
    </style>
</head>

<body>
    <div>
        Ovaj div element ima visinu od 200px i sirinu od 50%.
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/block_sirina_visina.png" alt="Blokovskim elementima je moguće promeniti širinu i visinu sadržaja.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/8/index.html"
   target="_blank">Pogledaj primer uživo</a>

Kada su linijski elementi u pitanju, površina njihovog sadržaja zavisi isključivo od površine samog sadržaja koji se prikazuje u okviru njih. Na linijske elemente nije moguće uticati svojstvima `width` i `height`. Naredni kod ilustruje ovo ponašanje, a na narednoj slici je dat njegov prikaz u veb pregledaču.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Primer 9</title>
    <meta charset="UTF-8">
    
    <style type="text/css">
        #s1 {
            /* Svojstva height i width nemaju nikakvog efekta */
            height: 100px;
            width: 1000px;
            background-color: rgb(193, 22, 193);
        }
    </style>
</head>
<body>
    <span id="s1">TEST SADRZAJ</span>
    <span id="s2">TEST SADRZAJ</span>
</body>
</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/box_model_inline.png" alt="CSS svojstva width i height ne utiču na veličinu sadržaja linijskih elemenata.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/9/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.5.2 Punjenje elementa

Punjenje elementa možemo zadati u jeziku CSS pomoću svojstva `padding` koje istovremeno podešava gornje, desno, donje i levo punjenje, tim redosledom. Međutim, ukoliko želimo da specifikujemo zasebnu veličinu punjenja na nekoj strani, možemo iskoristiti neko od svojstava `padding-top`, `padding-right`, `padding-bottom` ili `padding-left`. Vrednosti za sva opisana svojstva su dužine. Podrazumevana vrednost je `0`.

Naredni HTML kod i prateća slika ilustruju postavljanje punjenja za svaku stranu ponaosob. Primetimo da elementu `div` nije promenjena veličina sadržaja, tj. sadržaj će zauzimati onoliko mesta koliko mu je potrebno. Međutim, zbog postojanja punjenja, sadržaj neće zauzimati celu širinu veb pregledača. Takođe, ono što je interesantno primetiti jeste da će svojstvo `background-color` takođe obojiti površinu punjenja zajedno sa površinom sadržaja.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Primer 10</title>
    <meta charset="UTF-8">
    
    <style type="text/css">
        div {
            background-color: lightblue;
            padding-top: 50px;
            padding-right: 30px;
            padding-bottom: 100px;
            padding-left: 280px;
        }
    </style>
</head>
<body>
    <div>
        Ovaj div element ima gornje punjenje od 50px, desno punjenje od 30px, donje punjenje od 100px i levo punjenje od 280px.
    </div>
</body>
</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/block_padding.png" alt="Ukupna veličina elementa div se povećala zbog postojanja punjenja. Sam sadržaj zauzima podrazumevanu veličinu za blokovske elemente.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/10/index.html"
   target="_blank">Pogledaj primer uživo</a>

Punjenje proizvodi isti efekat i za linijske i za blokovske elemente.

### 2.5.3 Ivica elementa

U CSS jeziku, svojstvom `border` je moguće postaviti stil, širinu i boju površine koja odvaja unutrašnjost elementa od njegovog pojasa (odnosno, od okoline ukoliko pojas ne postoji). Ova površina, kao što smo rekli, naziva se ivica elementa. 

Međutim, pre nego što razumemo kako ovo svojstvo funkcioniše, prvo ćemo se upoznati sa svojstvima koja služe da postavljaju navedena tri elementa ivice odvojeno.

#### Stil ivice

Stilom ivice upravljamo koristeći svojstvo `border-style`. Moguće vrednosti za ovo svojstvo su: `dotted` (tačkasti stil), `dashed` (isprekidani stil), `solid` (stil pune linije), `double` (stil duple pune linije), `groove` (duplo tisnuti stil), `ridge` (reljefni stil), `inset` (utisnuti stil), `outset` (otisnuti stil), `none` (bez ivice) ili `hidden` (ivica je sakrivena). Naredna slika ilustruje svaki od ovih stilova.

Takođe, ukoliko želimo da definišemo različite stilove za svaku ivicu ponaosob, umesto navođenja jedne vrednosti (čime podešavamo isti stil za sve četiri ivice), možemo navesti četiri vrednosti koje će postaviti stilove za gornju, desnu, donju i levu ivicu, tim redosledom.

Naredni HTML kod i prateća slika ilustruju podešavanje stila ivica. Podešena je i širina ivice na `10px` kako bi stilovi bili bolje prikazani.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 11</title>
    <meta charset="UTF-8">

    <style type="text/css">
        p {
            border-width: 10px;
        }

        p.dotted {
            border-style: dotted;
        }

        p.dashed {
            border-style: dashed;
        }

        p.solid {
            border-style: solid;
        }

        p.double {
            border-style: double;
        }

        p.groove {
            border-style: groove;
        }

        p.ridge {
            border-style: ridge;
        }

        p.inset {
            border-style: inset;
        }

        p.outset {
            border-style: outset;
        }

        p.none {
            border-style: none;
        }

        p.hidden {
            border-style: hidden;
        }

        p.mix {
            border-style: dotted dashed solid double;
        }
    </style>
</head>

<body>
    <p class="dotted">A dotted border.</p>
    <p class="dashed">A dashed border.</p>
    <p class="solid">A solid border.</p>
    <p class="double">A double border.</p>
    <p class="groove">A groove border.</p>
    <p class="ridge">A ridge border.</p>
    <p class="inset">An inset border.</p>
    <p class="outset">An outset border.</p>
    <p class="none">No border.</p>
    <p class="hidden">A hidden border.</p>

    <p class="mix">A mixed border.</p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/ivica_stilovi.png" alt="Različiti stilovi ivice postignuti korišćenjem svojstva border-style.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/11/index.html"
   target="_blank">Pogledaj primer uživo</a>

Ono što je veoma važno napomenuti jeste da nijedna od preostalih svojstava koja se tiču ivice - širina i boja - neće proizvesti efekat ukoliko svojstvo za stil nije takođe postavljeno.

#### Širina ivice 

Širinu ivice definišemo pomoću svojstva `border-width`. Moguće vrednosti za ovo svojstvo su: dužine, `thin` (tanka ivica), `medium` (ivica srenje širine) ili `thick` (deblja ivica). Poput svojstva za stil ivice, i ovo svojstvo može imati jednu ili četiri vrednosti. Semantika ovih varijanti je identična kao za prethodno svojstvo. Podrazumevana vrednost za širinu ivice je `1px`.

#### Boja ivice 

Boju ivice definišemo pomoću svojstva `border-color`. Moguće vrednosti za ovo svojstvo su: boja zadata u nekom modelu boja ili `transparent` (providna ivica). Kao i prethodna dva svojstva, i ovo svojstvo može imati jednu ili četiri vrednosti, uz identičnu semantiku. Podrazumevana vrednost za boju ivice je `black`.

#### Navođenje konkretne ivice 

Svako od prethodna tri svojstva ima i varijantu kojom se navodi na kojoj strani ivice to svojstvo treba da se primeni. Tako, na primer, pored svojstva `border-style`, postoje i svojstva `border-top-style`, `border-right-style`, `border-down-style` i `border-left-style`. Čitaocu bi trebalo da bude jasan način upotrebe ovih svojstava na osnovu njihovih naziva. Analogno važi i za svojstva `border-width` i `border-color`.

#### Svojstvo `border`

Dakle, ukoliko želimo za ivicu da detaljno specifikujemo izgled, moramo da navedemo tri deklaracije, po jednu za stil (`border-style`), širinu (`border-width`) i boju (`border-color`). Ipak, navedene tri deklaracije se mogu skratiti u jednu tako što se koristi svojstvo `border`. Vrednost ovog svojstva čine tri vrednosti, odvojene karakterom razmaka: 

1. Vrednost za stil ivice (ovo je obavezno navesti)
2. Vrednost za širinu ivice 
3. Vrednost za boju ivice

Ukoliko se ne navede neka od (2) ili (3), koristiće se njihove podrazumevane vrednosti. Takođe, moguće je podesiti stil za samo jednu stranu ivice korišćenjem odgovarajućeg svojstva `border-top`, `border-right`, `border-bottom`, `border-left`, koji uzimaju iste vrednosti kao i svojstvo `border`.

Naredni HTML kod i prateća slika ilustruju podešavanje ivica svojstvom `border`.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 12</title>
    <meta charset="UTF-8">

    <style type="text/css">
        p.full-border {
            border: 5px solid red;
        }

        p.left-border-only {
            border-left: solid 20px;
        }
    </style>
</head>

<body>
    <p class="full-border">Some text.</p>
    <p class="left-border-only">Some text.</p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/border.png" alt="Sve detalje ivice elementa je moguće podesiti svojstvom border za sve ivice, odnosno nekim od border-top, border-right, border-bottom ili border-left za samo jednu ivicu.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/12/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.5.4 Svojstvo `border-radius`

Još jedno korisno svojstvo za upravljanje površinom unutrašnjosti elementa jeste svojstvo `border-radius`. Ovo svojstvo služi za kontrolu zakrivljenosti ćoškova pravougaonika kojim je element predstavljen. Moguće vrednosti su neke od dužina. 

Ukoliko navedemo jednu vrednost, svi ćoškovi će biti zakrivljeni tom vrednošću. Alternativno, možemo navesti četiri vrednosti koje će zakriviti gornji-levi, gornji-desni, donji-desni i donji-levi ćošak, tim redosledom. 

Naredni kod i prateća slika ilustruju upotrebu ovog svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 13</title>
    <meta charset="UTF-8">

    <style type="text/css">
        #example1 {
            border: 2px solid red;
            padding: 10px;
            border-radius: 25px;
        }

        #example2 {
            border: 2px solid red;
            padding: 10px;
            border-radius: 50px 20px 50px 50px;
        }
    </style>
</head>

<body>
    <h2>border-radius: 25px:</h2>

    <div id="example1">
        <p>Svojstvo border-radius definise zakrivljenje coskova elementa.</p>
    </div>

    <h2>border-radius: 50px 20px 50px 50px:</h2>

    <div id="example2">
        <p>
            Mozemo staviti jednu vrednost za sve coskove, 
            ili cetiri vrednosti, za svaki cosak 
            od gornjeg-levog do donjeg-levog po jednu.</p>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/border_radius.png" alt="Ćoškove unutrašnjosti elementa je moguće zakriviti svojstvom border-radius.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/13/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.5.5 Pojas elementa

Do sada opisani elementi čine unutrašnjost HTML elemenata. CSS svojstvo `margin` se koristi za podešavanje površine prostora oko elementa, tj. oko njegove ivice. Pojas elementa se obično koristi ukoliko želimo da osiguramo da HTML elementi budu odvojeni jedni od drugih. 

Slično kao i za punjenje elementa, ovo svojstvo može uzimati jednu ili četiri vrednosti, u zavisnosti od toga da li želimo da postavimo jednu vrednost za sva četiri pojasa ili svaku vrednost pojedinačno (u drugom slučaju navodimo vrednosti za gornji, desni, donji i levi pojas, redom). Takođe, moguće je podesiti vrednosti za četiri pojasa pojedinačno korišćenjem svojstava `margin-top`, `margin-right`, `margin-bottom` i `margin-left`. Vrednosti ovih svojstava mogu biti ili `auto`, čime se prepušta pregledaču da izračuna margine, ili neka od dužina.

Naredni primer ilustruje upotrebu margina nad paragrafom koji je smešten kao sadržaj elementa `div`. Naredna slika daje prikaz koda u veb pregledaču.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 14</title>
    <meta charset="UTF-8">

    <style>
        div {
            border: black solid 1px;
        }

        p {
            border: 1px solid black;
            margin-top: 100px;
            margin-bottom: 100px;
            margin-right: 20%;
            margin-left: 20%;
            background-color: lightblue;
        }
    </style>
</head>

<body>

    <div>
        <p>
            Ovaj element ima gornju marginu od 100px,
            desnu marginu od 20%, donju marginu od 100px
            i levu marginu od 20%.
        </p>
    </div>

</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/block_margin.png" alt="Svojsvom margin podešavamo površinu pojasa oko elementa.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/14/index.html"
   target="_blank">Pogledaj primer uživo</a>

#### Horizontalno poravnanje elemenata pomoću svojstva `margin`

Jedan zanimljiv efekat koji se može postići pomoću svojstva `margin` jeste da se element horizontalno poravna, u odnosu na širinu roditeljskog elementa koji ga sadrži. Postavljanjem deklaracije `margin: auto;`, element će prvo zauzeti odgovarajući prostor svojom širinom, a zatim će se preostali horizontalni prostor podeliti na dva jednaka dela i te dve površine će biti postavljene za levi i desni pojas elementa.

Naredni primer i prateća slika ilustruju opisano ponašanje.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 15</title>
    <meta charset="UTF-8">

    <style>
        body {
            border: 1px solid black;
        }

        div {
            width: 300px;
            border: 1px solid red;

            /* Horizontalno poravnanje */
            margin: auto;
        }
    </style>
</head>

<body>
    <h2>Koriscenje margin:auto</h2>
    <div>
        Ovaj element div ce biti horizontalno poravnat
        jer ima postavljenu deklaraciju margin: auto;
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/margin_auto.png" alt="Elemente možemo horizontalno poravnati postavljanjem svojstva margin na vrednost auto.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/15/index.html"
   target="_blank">Pogledaj primer uživo</a>

#### Linijski elementi i svojstvo `margin` 

Za razliku od blokovskih elemenata, linijski elementi imaju specifično ponašanje kada se na njih primeni svojstvo `margin`. Naime, na njih nemaju uticaja vrednosti koje su postavljene za gornji i donji pojas, ali vrednosti postavljene za levi i desni pojas se očekivano primenjuju.

Naredni primer i prateća slika ilustruju opisano ponašanje.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 16</title>
    <meta charset="UTF-8">

    <style>
        body {
            border: 1px solid black;
        }

        span {
            margin: 100px 50px 100px 50px;
            border: 1px solid red;
        }
    </style>
</head>

<body>
    <h2>Linijski elementi i svojstvo margin</h2>

    <span>
        Linijski element
    </span>
    <span>
        Linijski element
    </span>

    <br>

    <span>
        Linijski element
    </span><span>
        Linijski element
    </span>

    <br>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/inline_margin.png" alt="Linijski elementi nemaju gornji i donji pojas, ali imaju levi i desni pojas.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/16/index.html"
   target="_blank">Pogledaj primer uživo</a>

### Više informacija

Za više informacijama o temama koje su obrađene u ovoj sekciji, možete posetiti naredne korisne veb prezentacije:

- Uopšteno o CSS modelu kutije:
[https://internetingishard.com/html-and-css/css-box-model/](https://internetingishard.com/html-and-css/css-box-model/)

- Detaljniji opis svih modela kutija (u HTML i u CSS jezicima):
[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 2</span> 
    <p class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Familiju fontova koja se koristi u zadatku moguće je pronaći na <a href="./Domaci/Resursi/zadatak2_font.ttf">ovoj lokaciji</a>. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom.
    </p>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak2.png" alt="">
</div>

## 2.6 Koordinatni sistemi veb pregledača

Naredna tema o kojoj želimo da diskutujemo jeste pozicioniranje elemenata. Međutim, da bismo razumeli način na koji se koriste mere pri raspoređivanju elemenata na veb prezentaciji, moramo da razumemo kako funkcioniše koordinatni sistem veb pregledača.

Veb pregledači raspolažu dvama koordinatnim sistemima koji se razlikuju po njihovom centru, dok su im ostale karakteristike identične. Oni su:

1. Koordinatni sistem relativan u odnosu na pogled veb pregledača (nadalje ga zovemo koordinatni sistem veb pregledača). U ovom koordinatnom sistemu, za centar se smatra gornji levi ugao pogleda veb pregledača. *Pogled* (engl. *viewport*) predstavlja prozor veb pregledača u kojem se prikazuje veb prezentacija. Koordinate elementa u ovom sistemu ćemo obeležavati `clientX` i `clientY`.

2. Koordinatni sistem relativan u odnosu na veb stranicu (nadalje ga zovemo koordinatni sistem veb stranice). U ovom koordinatnom sistemu, za centar se smatra gornji levi ugao veb stranice. Koordinate elementa u ovom sistemu ćemo obeležavati `pageX` i `pageY`.

Naredna slika ilustruje razliku između pozicija elementa u jednom i drugom koordinatnom sistemu. Kao što vidimo, prilikom skrolovanja stranice na sam početak, oba koordinatna sistema imaju isti centar, te su i koordinate elementa jednake. Međutim, prilikom skrolovanja stranice naniže, koordinate koje su relativne u odnosu na pogled veb pregledača se menjaju jer se i elementi pomeraju u odnosu na njega. Za razliku od toga, koordinate koje su relativne u odnosu na stranicu ostaju iste, jer je sada i sam centar koordinatnog sistema veb stranice pomeren zajedno sa stranicom (ovaj centar je pomeren izvan pogleda veb pregledača, što je prikazano delimičnom prozirnošću na slici).

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/koordinatni_sistemi.png" alt="Razlika između koordinatnih sistema u veb pregledaču.">
</div>

Pojam pozicioniranja nije jedinstveno određen, već su definisana različita ponašanja za različite tipove pozicioniranja, sa kojima ćemo se upoznati u narednoj sekciji. Neki od njih pozicioniraju elemente u odnosu na koordinatni sistem veb pregledača, a neki od njih pozicioniraju elemente u odnosu na koordinatni sistem dokumenta.

Ipak, ova dva koordinatna sistema imaju i dosta zajedničkih karakteristika. Neke od njih su:

- Vrednosti na *x*-osi rastu sleva na desno, a opadaju zdesna na levo. 
- Vrednosti na *y*-osi rastu odozgo na dole, a opadaju odozdo na gore.
- Vrednosti na obema osama mogu biti pozitivne i negativne. 
- Vrednosti na obema osama mogu biti bilo koja od dužina. Od jedinice mere za dužinu zavisi koliko će element biti pomeren.

Iako je ekran veb pregledača dvodimenzionalan i svi elementi koji se prikazuju su dvodimenzionalni, postoji mogućnost da se više elemenata preklapaju jedni sa drugima. Zbog toga, uvedena je i treća koordinatna osa, *z*-osa, koja definiše dubinu na kojoj se dvodimenzionalni elementi smeštaju. Više o ovome biće reći u narednoj sekciji, ali radi kompletnosti ove sekcije, napomenimo da vrednosti na *z*-osi rastu u smeru od veb pregledača ka korisniku, dok te vrednosti opadaju u smeru od korisnika ka veb pregledaču. Naredna slika daje prikaz punog koordinatnog sistema, u odnosu na prozor veb pregledača.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/pun_koordinatni_sistem.png" alt="Pun koordinatni sistem u veb pregledaču.">
</div>

## 2.7 Pozicioniranje elemenata

Jednostavno "slaganje" elemenata u HTML kodu može nam poslužiti tek toliko. Za konstrukciju kompleksnijih veb prezentacija, neophodno je da razumemo kako je moguće iskoristiti CSS za precizno pozicioniranje elemenata na veb stranici. Pozicioniranje elemenata može biti veoma naporna stvar pri dizajnu veb prezentacije ukoliko se u potpunosti ne razumeju svi detalji i bočni efekti koji nastaju prilikom pozicioniranja elemenata.

Da bismo uspešno pozicionirali HTML element na željenu poziciju na veb prezentaciji, potrebno je da uradimo naredna dve koraka:

1. Odrediti tip pozicioniranja.
2. Iskoristiti neka od svojstava za pozicioniranje elementa, imajući u vidu karakteristike odabranog tipa pozicioniranja.

Za određivanje tipa pozicioniranja koristi se svojstvo `position`. Moguće vrednosti ovog svojstva su: `static`, `relative`, `absolute` i `fixed`. U nastavku teksta ćemo detaljno diskutovati o svakoj od navedenih vrednosti.

Sa druge strane, za definisanje precizne pozicije elementa koriste se neki od svojstava `top`, `right`, `bottom` i `left`. Njihovo opšte značenje jeste da udaljava element na koji se primenjuju za datu dužinu od gornje, desne, donje i leve ivice nekog elementa, redom. Od ivice kojeg elementa se dati element udaljava zavisi od odabranog tipa pozicioniranja. Podrazumevana vrednost za svako svojstvo jeste `0`.

Udaljavanje elementa se vrši u skladu sa pravilima koje definiše koordinatni sistem. Na primer, ako je vrednost svojstva `top` pozitivna dužina, element će biti pomeren "na dole" (u pravcu rasta *y*-ose koordinatnog sistema), a ako je vrednost tog svojstva negativna dužina, element će biti pomeren "na gore" (u pravcu opadanja *y*-ose koordinatnog sistema).

Ukoliko se u nekom pravilu iskoristi neko od ovih svojstava, a u tom pravilu nije iskorišćeno svojstvo `position` (tj. nije određen tip pozicioniranja), onda ta svojstva neće imati nikakav uticaj na poziciju elementa.

### 2.7.1 Statičko pozicioniranje

Ovo je podrazumevan način pozicioniranja elemenata. Postavljanje vrednosti za neko od svojstava `top`, `right`, `bottom` ili `left` nema uticaja na poziciju elementa sa statičkim pozicioniranjem.

Elementi se ređaju na stranici jedan nakon drugog, u skladu sa njihovim dimenzijama i drugim karakteristikama. Na primer, linijski elementi ređaju se jedan pored drugog dok se blokovski elementi ređaju jedan ispod drugog. Ovaj tok ređanja elemenata se naziva *normalni tok* (engl. *normal flow*). 

Naredni kod i prateća slika ilustruju upotrebu statičkog pozicioniranja. Veb prezentacija se sastoji od tri `div` elementa, pri čemu je drugom elementu postavljeno pozicioniranje na statičko[^1] i podešeno je da bude pozicioniran `30px` od gornje ivice i `80px` od leve ivice. Kao što je prikazano na slici, elementi se ređaju jedan ispod drugog, što je i očekivano.

[^1]: Zapravo, i preostalim `div` elementima je postavljeno pozicioniranje na statičko, zbog toga što je to podrazumevano ponašanje, iako ga nismo eksplicitno napisali u CSS delu koda.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 17</title>
    <meta charset="UTF-8">

    <style>
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: static;
            top: 30px;
            left: 80px;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="prvi"></div>
    <div id="drugi"></div>
    <div id="treci"></div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/static.png" alt="Primer statičkog pozicioniranja.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/17/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.7.2 Relativno pozicioniranje

Pomenuli smo ranije da svaki tip pozicioniranja definiše šta za taj tip znači "ivica" u odnosu na koju se element pomera. Pri relativnom pozicioniranju "ivica" od koje se element pomera je ivica tog elementa pri statičkom pozicioniranju. Jednostavnije rečeno, postavljanje vrednosti za svojstva `top`, `right`, `bottom` i `left` pomeriće element u odnosu na njegovu statičku poziciju. 

Važno je zapamtiti da izmene u poziciji elementa koji je relativno pozicioniran nemaju uticaja na preostali sadržaj stranice - svi ostali elementi ostaju na svojim pozicijama. Posledica ovog efekta jeste pojavljivanje "prazne" površine na mestu gde se relativno-pozicionirani pomereni element nalazio pre pomeranja.

Naredni kod predstavlja izmenu prethodnog koda u kojem je promenjen samo tip pozicioniranja drugog `div` elementa sa statičkog na relativno. Kao što se vidi na pratećoj slici, drugi `div` element je pomeren za `30px` "na dole" i `80px` "na desno" u odnosu na njegovu poziciju koja mu je bila dodeljena pri statičkom pozicioniranju. Preostala dva `div` elementa su ostala na svojim pozicijama, što dovodi do efekta "prazne" površine između njih - na mestu gde je drugi `div` element bio pozicioniran pri statičkom pozicioniranju.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 18</title>
    <meta charset="UTF-8">

    <style>
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: relative;
            top: 30px;
            left: 80px;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="prvi"></div>
    <div id="drugi"></div>
    <div id="treci"></div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/relative.png" alt="Primer relativnog pozicioniranja.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/18/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.7.3 Apsolutno pozicioniranje

Apsolutno pozicioniranje je najzahtevnije za razumevanje od svih tipova pozicioniranja. Pri apsolutnom pozicioniranju "ivica" od koje se element pomera je ivica prvog pretka tog elementa u DOM stablu koji nije statički pozicioniran. Ukoliko ne postoji predak koji zadovoljava taj uslov, onda se za "ivicu" smatra ivica elementa `body`.

U skladu sa ovom složenom definicijom postoje dva slučaja koja možemo razmatrati. Prvi slučaj je kada su svi preci elementa koji je apsolutno pozicioniran statički pozicionirani. U tom slučaju, element se pomera od ivice elementa `body`. Takav slučaj je predstavljen narednim kodom i pratećom slikom. Jedini predak (do elementa `body`) drugog `div` elementa je element `div` koji ima postavljen identifikator na vrednost `omotac` (nazovimo ovaj element "omotač"). Bez obzira što se drugi `div` element nalazi kao potomak omotača, s obzirom da je omotač statički pozicioniran, onda će drugi `div` element biti pozicioniran u odnosu na ivicu `body` elementa.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 19</title>
    <meta charset="UTF-8">

    <style>
        #omotac {
            margin-top: 100px;
            height: 400px;
            width: 400px;
            background-color: rgba(218, 165, 32, 0.5);
        }
    
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: absolute;
            top: 30px;
            left: 80px;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="omotac">
        <div id="prvi"></div>
        <div id="drugi"></div>
        <div id="treci"></div>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/absolute_body.png" alt="Primer relativnog pozicioniranja elementa čiji su svi preci statički pozicionirani.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/19/index.html"
   target="_blank">Pogledaj primer uživo</a>

Međutim, šta ukoliko bi omotač bio nestatički pozicioniran? Ukoliko postavimo da omotač bude, na primer, relativno pozicioniran kao u narednom kodu, onda ćemo dobiti situaciju kao na narednoj slici. Sada drugi `div` element nije više pozicioniran u odnosu na ivicu `body` elementa zato što postoji makar jedan predak koji nije statički pozicioniran (a to je omotač), te se drugi `div` element pozicionira u odnosu na njegovu ivicu.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 20</title>
    <meta charset="UTF-8">

    <style>
        #omotac {
            position: relative;
            margin-top: 100px;
            height: 400px;
            width: 400px;
            background-color: rgba(218, 165, 32, 0.5);
        }
    
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: absolute;
            top: 30px;
            left: 80px;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="omotac">
        <div id="prvi"></div>
        <div id="drugi"></div>
        <div id="treci"></div>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/absolute_wrapper.png" alt="Primer relativnog pozicioniranja elementa u odnosu na prvog nestatički-pozicioniranog pretka.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/20/index.html"
   target="_blank">Pogledaj primer uživo</a>

Primetimo još jednu veoma važnu stvar - u oba slučaja treći `div` element se pomerio na mesto gde bi drugi `div` element bio pozicioniran pri statičkom pozicioniranju! "Prazan" prostor koji je bio prisutan pri relativnom pozicioniranju je nestao. Razlog za ovo ponašanje jeste da se apsolutno-pozicionirani elementi izbacuju iz normalnog toka raspoređivanja elemenata. Drugim rečima, ostali elementi se raspoređuju u skladu sa normalnim tokom kao da apsolutno-pozicionirani elementi ne postoje.

### 2.7.4 Fiksno pozicioniranje

Pri fiksnom pozicioniranju "ivica" od koje se element pomera je ivica pogleda veb pregledača. Međutim, za fiksno pozicioniranje važi još jedno pravilo po čemu se on razlikuje od ostalih pozicioniranja. Element sa fiksnim pozicioniranjem se nalaze na istoj poziciji na ekranu, čak i kada se stranica skroluje. 

Slično kao u slučaju apsolutnog pozicioniranja, elementi sa fiksnim pozicioniranjem se izbacuju iz normalnog toka, tj. ne ostaju "prazne" površine tamo gde bi se element našao pri statičkom pozicioniranju.

Naredni kod pozicionira drugi `div` element `30px` od gornje ivice pogleda veb pregledača i `0` od desne ivice veb pregledača. Na narednoj slici su predstavljene situacije prilikom skrolovanja visoke veb prezentacije. U prvoj situaciji je prikazan početak veb prezentacije na kojoj su svi elementi vidljivi (slika A). Međutim, prilikom skrolovanja stranice, elementi koji nisu fiksno pozicionirani izlaze iz pogleda veb pregledača, dok fiksno pozicionirani element ostaje na svojoj poziciji (slika B).

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 21</title>
    <meta charset="UTF-8">

    <style>
        body {
            height: 3000px;
        }

        #omotac {
            position: relative;
            margin-top: 100px;
            height: 400px;
            width: 400px;
            background-color: rgba(218, 165, 32, 0.5);
        }
    
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: fixed;
            top: 30px;
            right: 0;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="omotac">
        <div id="prvi"></div>
        <div id="drugi"></div>
        <div id="treci"></div>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/fixed1.png" alt="">
</div>

(A) Primer fiksnog pozicioniranja. Veb stranica je tek učitana. Svi elementi su vidljivi.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/fixed2.png" alt="">
</div>

(B) Primer fiksnog pozicioniranja. Veb stranica je skrolovana. Jedino je drugi `div` element na svojoj poziciji, dok je većina ostalih elemenata, koji nisu fiksno pozicionirani, izašla iz pogleda veb pregledača.

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/21/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.7.5 Z-pozicioniranje elemenata

Prilikom pozicioniranja elemenata, može se desiti da se neki od njih preklope. Postavlja se pitanje na koji način će ti elementi biti prikazani, tj. koji element će biti ispred kog elementa. 

U skladu sa koordinatnim sistemom, elementu može biti dodeljena pozitivna ili negativna vrednost za *z-dubinu* (engl. *z-depth*). Element koji ima veću vrednost z-dubine biće pozicioniran ispred elemenata sa manjom vrednošću za z-dubinu. Ukoliko se dva elementa sa jednakim vrednostima za z-dubinu preklope, onda onaj element koji je poslednji pozicioniran biti ispred ostalih elemenata sa kojima se preklapa.

Podrazumevano svi elementi imaju z-dubinu jednaku 0. U primeru sa relativnim pozicioniranjem, drugi i treći `div` elementi se preklapaju, pri čemu se drugi `div` element nalazi ispred trećeg. Međutim, validno je postaviti pitanje zašto je drugi `div` element poslednji pozicioniran, a ne treći kad se on u HTML kodu nalazi nakon drugog elementa. Da bismo razumeli ovo ponašanje, moramo da razumemo kako veb pregledač formira veb prezentaciju.

Bez ulaženja u detalje, veb pregledač prvo dohvata HTML kod i na osnovu njega vrši pozicioniranje elemenata. Tek kada su ti elementi raspoređeni, onda se vrši stilizovanje dokumenta na osnovu CSS koda. U primeru sa relativnim pozicioniranjem, veb pregledač nije pronašao nikakav kod za pozicioniranje prvog i trećeg `div` elementa, te nije menjao njihove pozicije. Međutim, pronašao je kod za pozicioniranje drugog `div` elementa, pa je onda izvršio njegovo pozicioniranje ponovo. Samim tim, dolazimo do zaključka da je drugi `div` element poslednji pozicioniran, te on ima najveću prednost prilikom prikazivanja.

Svojstvo `z-index` određuje kako se elementi slažu jedan preko drugog, tj. određuje vrednost z-dubine. Naredni kod predstavlja modifikaciju primera sa relativnim pozicioniranjem u kojem je z-dubina drugog `div` elementa postavljena na vrednost `-5`, što predstavlja manju vrednost od podrazumevane vrednosti za treći `div` element (a to je `0`). Sa ovom izmenom, drugi `div` element će biti prikazan iza trećeg `div` elementa, bez obzira što je poslednji pozicioniran, kao što je prikazano na narednoj slici.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 22</title>
    <meta charset="UTF-8">

    <style>
        #prvi {
            height: 100px;
            width: 300px;
            background-color: rgb(231, 43, 103);
        }

        #drugi {
            height: 100px;
            width: 300px;
            background-color: rgb(24, 243, 232);
            position: relative;
            top: 30px;
            left: 80px;
            z-index: -5;
        }

        #treci {
            height: 100px;
            width: 300px;
            background-color: rgb(180, 55, 252);
        }
    </style>
</head>

<body>
    <div id="prvi"></div>
    <div id="drugi"></div>
    <div id="treci"></div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/z-index.png" alt="Primer korišćenja svojstva z-index.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/22/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.7.6 Svojstva `display` i `visibility`

Do sada smo videli na koje sve načine je moguće raspoređivati elemente na veb prezentaciji zajedno sa svim bočnim efektima koje se javljaju. Sada ćemo opisati još dva svojstva koja, iako se ne koriste direktno za pozicioniranje elemenata već za način njihovog prikazivanja, mogu na neki način uticati na raspored elemenata na stranici.

Pomoću svojstva `display` određujemo na koji način će element biti prikazan. Štaviše, možemo upravljati time da li će element uopšte biti prikazan na stranici! Svaki HTML element ima podrazumevanu vrednost za ovo svojstvo u zavisnosti od tipa elementa. Za većinu elemenata podrazumevana vrednost je definisana HTML5 standarom. Pogledajmo još neke vrednosti ovog svojstva i njihova značenja:

- Vrednost `initial` postavlja prikazivanje elementa na podrazumevano.

- Vrednost `block` definiše da se element prikazuje kao blokovski element. Element će dobiti sve karakteristike za prikazivanje blokovskih elemenata, bez obzira na njegovu originalnu kategoriju.

- Vrednost `inline` definiše da se element prikazuje kao linijski element. Element će dobiti sve karakteristike za prikazivanje linijskih elemenata, bez obzira na njegovu originalnu kategoriju.

- Vrednost `inline-block` definiše da se element prikazuje kao linijski element, sa time da je moguće menjati dimenzije sadržaja pomoću svojstva `width` i `height`[^2].

- Vrednost `none` jeste da se dati element i njegov sadržaj u potpunosti uklanjaju iz prikaza.

[^2]: Prisetimo se da linijskim elementima nije moguće promeniti dimenzije sadržaja korišćenjem svojstava `width` i `height`.

Važno je napomenuti da promena svojstva `display` ne povlači promenu kategorije elementa. Tako, na primer, linijski element koji ima postavljeno `display` svojstvo na vrednost `block` i dalje ne sme da sadrži blokovske elemente u svom sadržaju!

Naredni HTML kod ilustruje korišćenje svojstva `display` za "pozicioniranje" elemenata tako da budu prikazano kao na pratećoj slici. Crveni i žuti `div` elementi su automatski raspoređeni jedan pored drugog, iako su oba elementa predstavnici blokovskih elemenata, zbog činjenice da je njihov prikaz promenjen na `inline-block`.

```html
<html>

<head>
    <title>Primer 23</title>
    <meta charset="UTF-8">

    <style type="text/css">
        #omotac {
            border: 1px solid black;
            margin-left: auto;
            margin-right: auto;
            width: 400px;
            position: relative;
        }

        #zeleni {
            width: 400px;
            height: 50px;
            background-color: rgb(83, 255, 103);
        }

        #crveni {
            width: 100px;
            height: 200px;
            background-color: rgb(255, 53, 57);
            display: inline-block;
        }

        #zuti {
            width: 300px;
            height: 200px;
            background-color: rgb(255, 255, 65);
            display: inline-block;
        }

        #plavi {
            width: 400px;
            height: 50px;
            background-color: rgb(39, 230, 233);
        }
    </style>

</head>

<body>
    <div id="omotac">
        <div id="zeleni"></div>
        <div id="crveni"></div><div id="zuti"></div>
        <div id="plavi"></div>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/inline-block.png" alt="Korišćenje svojstva display za promene tipa prikaza elemenata.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/23/index.html"
   target="_blank">Pogledaj primer uživo</a>

Obratimo pažnju na jedan skriveni "hack" koji smo uradili u prethodnom kodu. Prikažimo ponovo HTML sadržaj tela dokumenta:

```html
<div id="omotac">
    <div id="zeleni"></div>
    <div id="crveni"></div><div id="zuti"></div>
    <div id="plavi"></div>
</div>
```

Ovaj deo koda je namerno formatiran na ovaj način. Ovo se pre svega odnosi na narednu liniju koda:

```html
<div id="crveni"></div><div id="zuti"></div>
```

Zašto nismo prelomili ova dva `div` elementa u zasebni red? Na narednoj slici je dat prikaz modifikacije prethodnog koda sa narednom izmenom u sadržaju tela HTML dokumenta:

```html
<div id="omotac">
    <div id="zeleni"></div>
    <div id="crveni"></div>
    <div id="zuti"></div>
    <div id="plavi"></div>
</div>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/inline-block-with-a-problem.png" alt="Skriveni problem sa inline-block elementima.">
</div>

Zašto je ova promena dovela do neispravnog prikaza? Jedina stvar koju smo uradili jeste razvojili crveni i žuti `div` element u zasebne linije u HTML kodu. Prethodno smo rekli da beline u HTML kodu ne utiču na prikaz elemenata. Zašto je onda žuti `div` element "prešao" u novu liniju u prikazu veb pregledača?

Da bismo razumeli ovu posledicu, moramo da razumemo šta je sve uticalo na prikaz ovih elemenata:

- Omotač zauzima `400px` širine.
- Zbir širina crvenog i žutog `div` elementa je tačno `400px`.
- Elementi sa `inline-block` prikazom se ređaju jedni pored drugih (poput linijskih elemenata) sve dok u istoj liniji ima mesta za sve njih. **Ukoliko za neki element sa `inline-block` prikazom nema mesta u liniji, on će preći u novi red**.

Ako uzmemo u obzir ove činjenice, jedino što može da dovede do toga da žuti `div` element pređe u novi red jeste rečenica koja je podebljana u tekstu - za žuti `div` element nije bilo mesta, te je on morao da pređe u novi red! Međutim, zbog čega nije bilo mesta kada je zbir širina crvenog i žutog `div` elementa jednak širini omotača? Odgovor je u tome da, zbog novog formata HTML koda, postoji jedan karakter razmaka između crvenog i žutog elementa. S obzirom da je širina karaktera razmaka uvek strogo pozitivna vrednost, zbir širina crvenog i žutog `div` elementa, kao i širine karaktera razmaka, premašuje širinu omotača, zbog čega za žuti `div` element nema više mesta u istoj liniji i on prelazi u novi red u prikazu.

Ostalo je još samo da razjasnimo odakle se pojavio karakter razmaka koji je napravio ovaj problem. U novom formatu HTML koda stoji

```html
<div id="omotac">
    <div id="zeleni"></div>
    <div id="crveni"></div>
    <div id="zuti"></div>
    <div id="plavi"></div>
</div>
```

Između fragmenata koda `<div id="crveni"></div>` i `<div id="zuti"></div>` postoji jedan karakter za novi red i potencijalno 4 karaktera razmaka (ili jedan karakter tabulatora). Veb pregledač, prilikom parsiranja ovog koda, pronalazi nabrojane beline i u prikazu ih zamenjuje jednim karakterom razmaka, kao što to i inače radi. Zbog toga smo u inicijalnoj verziji koda sprečili ovo tako što nismo ostavili nijedan karakter beline između datih fragmenata koda:

```html
<div id="omotac">
    <div id="zeleni"></div>
    <div id="crveni"></div><div id="zuti"></div>
    <div id="plavi"></div>
</div>
```

Postoji još jedan način kako je ovo moguće rešiti ako želimo da crveni i žuti `div` elementi budu u zasebnim linijama. S obzirom da je dovoljno sprečiti veb pregledač da naiđe na beline između ovih fragmenata koda, možemo postaviti HTML komentar, koji će biti odbačen u celosti prilikom parsiranja HTML koda, kao u narednom delu koda:

```html
<div id="omotac">
    <div id="zeleni"></div>
    <div id="crveni"></div><!--
 --><div id="zuti"></div>
    <div id="plavi"></div>
</div>
```

Iako je ova situacija nešto što se ređe pronalazi u praksi, primer predstavlja dobru ilustraciju činjenice da je neophodno da u potpunosti razumemo funkcionisanje HTML5 i CSS3 jezika pre nego što se upustimo u iole naprednije dizajniranje veb prezentacija.

Preostala je još jedna vrednost svojstva `display` koju je potrebno objasniti, a to je vrednost `none`. Pomenuli smo da se postavljanjem ovog svojstva na ovu vrednost, HTML element uklanja iz prikaza veb pregledača, zajedno sa svojim sadržajem. Takođe, svi ostali elementi se raspoređuju kao da se taj element nikada nije ni nalazio u veb prezentaciji.

Blisko ponašanje se može postići postavljanjem svojstva `visibility`, čija je podrazumevana vrednost `visible`, na vrednost `hidden`. Element će i u ovom slučaju biti sakriven iz prikaza. Međutim, razlika u odnosu na postavljanje svojstva `display` na vrednost `none` je u tome što će element i dalje zauzimati isti prostor kao i ranije, samo što će biti sakriven iz prikaza.

Naredni kod i prateća slika ilustruju razliku između ovih svojstava. U prvom omotaču, crvenom `div` elementu je postavljeno svojstvo `display` na vrednost `none`, te se on u potpunosti uklanja iz prikaza. Žuti i narandžasti `div` elementi se pozicioniraju kao da crveni element nije ni postojao. U drugom omotaču, plavom `div` elementu je postavljeno svojstvo `visibility` na vrednost `hidden`, te se on jednostavno sakriva iz prikaza. Zeleni i ljubičasti `div` elementi zadržavaju svoje pozicije, kao da plavi element nije ni bio sakriven.

```html
<html>

<head>
    <title>Primer 24</title>
    <meta charset="UTF-8">

    <style type="text/css">
        #omotac1, #omotac2 {
            border: 1px solid black;
            width: 400px;
        }

        #omotac2 {
            position: relative;
            top: 50px;
        }

        #zuti {
            width: 400px;
            height: 50px;
            background-color: rgb(252, 249, 111);
        }

        #crveni {
            width: 400px;
            height: 50px;
            background-color: rgb(255, 117, 83);
            display: none;
        }

        #narandzasti {
            width: 400px;
            height: 50px;
            background-color: rgb(255, 186, 83);
        }

        #zeleni {
            width: 400px;
            height: 50px;
            background-color: rgb(81, 224, 140);
        }

        #plavi {
            width: 400px;
            height: 50px;
            background-color: rgb(83, 109, 255);
            visibility: hidden;
        }

        #ljubicasti {
            width: 400px;
            height: 50px;
            background-color: rgb(192, 83, 255);
        }
    </style>

</head>

<body>
    <div id="omotac1">
        <div id="zuti"></div>
        <div id="crveni"></div>
        <div id="narandzasti"></div>
    </div>
    <div id="omotac2">
        <div id="zeleni"></div>
        <div id="plavi"></div>
        <div id="ljubicasti"></div>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/display_visibility.png" alt="Razlika u prikazivanju između elementa koji ima podešeno svojstvo display na vrednost none i elementa koji ima podešeno svojstvo visibility na vrednost hidden.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/24/index.html"
   target="_blank">Pogledaj primer uživo</a>

### Više informacija

Za više informacijama o temama koje su obrađene u ovoj sekciji, možete posetiti naredne korisne veb prezentacije:

- Uopšteno o pozicioniranju elemenata:
[https://www.w3schools.com/css/css_positioning.asp](https://www.w3schools.com/css/css_positioning.asp)

- O svojstvima `display` i `visibility` i njihovim razlikama: 
[https://www.w3schools.com/cssref/pr_class_display.asp](https://www.w3schools.com/cssref/pr_class_display.asp)
[https://www.w3schools.com/cssref/pr_class_visibility.asp](https://www.w3schools.com/cssref/pr_class_visibility.asp)
[https://www.w3schools.com/css/css_display_visibility.asp](https://www.w3schools.com/css/css_display_visibility.asp).

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 3</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Nije dozvoljeno korišćenje svojstva `display`. Nije dozvoljeno menjanje podrazumevanih vrednosti modela kutije za elemente, osim za omotač koji ima crnu ivicu. Omotač horizontalno poravnati u odnosu na telo veb pregledača. Zadatak uraditi korišćenjem:
        <ol>
            <li>Relativnog pozicioniranja</li>
            <li>Apsolutnog pozicioniranja</li>
            <li>Fiksnog pozicioniranja</li>
        </ol>
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak3.png" alt="">
</div>

## 2.8 Slike

Veličina slike se može podesiti atributima `width` i `height`, čije su vrednosti celi brojevi koji predstavljaju veličine u pikselima. Naravno, dimenzija elementa `img` se može podesiti i u jeziku CSS, zadavanjem svojstava `width` i `height`, čije veličine mogu biti bilo koja od dužina.

S obzirom da veličinu slike možemo navesti pomoću atributa elementa `img`, ali i pomoću CSS svojstava, prirodno se postavlja pitanje - šta je bolje za korišćenje? Jedan praktičan savet jeste da se koriste obe načina - sada ćemo opisati zašto. 

Prilikom dohvatanja HTML dokumenta, svaki savremeni veb pregledač izgrađuje DOM stablo prilikom parsiranja dokumenta i već započinje proces prikazivanja veb stranice dok se dohvataju drugi resursi, kao što su spoljni kaskadni stilovi, slike i dr. Ukoliko veb pregledač nema informaciju o veličini slike, on će zauzeti minimalan prostor za njeno prikazivanje. U trenutku kada slika pristigne preko mreže, ukoliko je ona velikih dimenzija, nakon što je veb pregledač prikaže, ona će sada zauzeti veću površinu i ostali elementi na stranici će biti ispremeštani kako bi slika zauzela potrebnu veličinu. Ukoliko ima mnogo slika na veb stranici koje se ovako ponašaju, korisniku će ovo premeštanje okolnih elemenata izgledati haotično. Sa druge strane, ukoliko je veb pregledač već iz HTML koda dobio informaciju o veličini slike (korišćenjem atributa `width` i `height` elementa `img`), on će moći da "rezerviše" potreban prostor za sliku dok ona ne bude preuzeta i prikazana. Time se postiže mnogo lepši utisak u korisničkom iskustvu.

Međutim, kao što smo rekli, atributima `width` i `height` elementa `img` se dodeljuju celi brojevi koji uvek predstavljaju piksele na ekranu. Nekada nam je neophodno da koristimo druge mere za postavljanje dimenzije slika. Takođe, uključivanjem nekog spoljnog kaskadnog lista može se desiti da se uključi pravilo koje postavlja veličinu svih slika na neku dimenziju koja nama ne odgovara, a koja će "pregaziti" vrednosti iz HTML koda. Zbog toga se takođe preporučuje korišćenje CSS svojstava `width` i `height` za dodeljivanje dimenzija slike.

Naredni kodovi iz datoteka `index.html` i `img_override.css`, redom, i prateća slika ilustruju ovo ponašanje.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 25</title>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="img_override.css">
</head>

<body>
    <h1>Podešavanje veličine sličica</h1>

    <p>
        Slika ispod ima vrednost atributa width postavljenu na 128 piksela, 
        ali je ta vrednost "pregažena" od strane spoljnih kaskadnih listova, 
        koji postavljaju CSS svojstvo width svih slika na 100%.
    </p>
    <img src="october31.jpeg" alt="Noc Vestica - 31. oktobar" 
         width="128" height="128">

    <p>
        Slika ispod koristi atribut style, 
        u kojem je CSS svojstvo width postavljeno na 128 piksela. 
        S obzirom da ovakva upotreba ima najveći prioritet, 
        vrednost CSS svojstva width od 100% iz spoljnih kaskadnih listova je "pregažena".
    </p>
    <img src="october31.jpeg" alt="Noc Vestica - 31. oktobar" 
         width="128" height="128"
         style="width:128px; height:128px;">
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/img_override.png" alt="Primer kada su spoljni kaskadni listovi narušili veličinu slike koja je postavljena u HTML kodu.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/25/index.html"
   target="_blank">Pogledaj primer uživo</a>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 4</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Slike koje se koriste u zadatku moguće je pronaći na narednim lokacijama: <a href="./Domaci/Resursi/galerija1.jpg">slika 1</a>, <a href="./Domaci/Resursi/galerija2.jpg">slika 2</a>, <a href="./Domaci/Resursi/galerija3.jpg">slika 3</a> i <a href="./Domaci/Resursi/galerija4.jpg">slika 4</a>. Širinu slika postaviti na `300px`, a visinu na `200px`. Sve slike anotirati. Za sve anotacije omogućiti veb pregledaču da odabere beskukičavu familiju fontova. Zadatak uraditi korišćenjem:
        <ol>
            <li>Relativnog pozicioniranja</li>
            <li>Apsolutnog pozicioniranja</li>
            <li>Fiksnog pozicioniranja</li>
        </ol>
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak4.png" alt="">
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 5</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Sliku koja se koristi u zadatku moguće je pronaći na <a href="./Domaci/Resursi/jesen.jpg">ovoj lokaciji</a>. Širinu slike postaviti na `500px`, a visinu na `375px` i anotirati je. Za anotaciju slike omogućiti veb pregledaču da odabere kukičavu familiju fontova. Obuhvatajućem elementu anotirane slike postaviti crvenu ivicu širine `1px` i stila pune linije. Obuhvatajući element horizontalno poravnati u odnosu na telo veb pregledača.
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak5.png" alt="">
</div>

## 2.9 Pozadina elemenata

Korišćenjem jezika CSS možemo podesiti pozadinu elemenata na dva načina:

1. Postavljanjem slike za pozadinu

2. Postavljanjem gradijentne pozadine

### 2.9.1 Slike kao pozadine

Ukoliko nam je na raspolaganju neka slika, možemo je postaviti kao pozadinu za proizvoljni element korišćenjem svojstva `background−image`. Za vrednost ovog svojstva se postavlja lokacija slike koju navodimo kao pozadinu, korišćenjem CSS funkcije `url`.

Naredni kod i prateća slika demonstriraju najjednostavniju upotrebu ovog svojstva, kada veličina pozadinske slike odgovara veličini elementa.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 26</title>
    <meta charset="UTF-8">

    <style type='text/css'>
        #test_div {
            height: 600px;
            width: 900px;

            background-image: url('halloween.jpeg');
        }

        #test_div p {
            color: white;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 50px;
            margin: 0px;
            padding-top: 1cm;
        }
    </style>
</head>

<body>
    <div id='test_div'>
        <p>Ready for Halloween?</p>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/background_image.png" alt="Primer korišćenja svojstva background-image.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/26/index.html"
   target="_blank">Pogledaj primer uživo</a>

Podrazumevano, pozadina se ponavlja horizontalno (tj. po *x*-osi) i vertikalno (tj. po *y*-osi), što je najjednostavnije videti ukoliko su dimenzije unutrašnjosti elementa veće od dimenzije slike koja se koristi kao pozadina. CSS svojstvo `background−repeat` se koristi za kontrolisanje ponavljanja. Ovo svojstvo može uzimati jednu od narednih vrednosti:

- Vrednost `repeat` predstavlja već opisano podrazumevano ponašanje u kojem se pozadina ponavlja po obema osama.

- Vrednost `repeat-x` predstavlja da se pozadina ponavlja samo po horizontalnoj osi.

- Vrednost `repeat-y` predstavlja da se pozadina ponavlja samo vertikalnoj osi.

- Vrednost `no-repeat` predstavlja da se pozadina ne ponavlja ni po jednoj osi.

Ovim CSS svojstvom možemo izbeći neka neobična ponašanja, kao na primer, kada slika nije namenjena da se ponavlja po nekoj od osa, kao što je ilustrovano narednim kodom i pratećom slikom.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 27</title>
    <meta charset="UTF-8">

    <style>
        #bg-1,
        #bg-2 {
            display: inline-block;
            width: 40%;
            height: 450px;
            border: 1px solid black;
            background-image: url("gradient_bg.png");
        }

        #bg-1 {
            /* Podrazumevano ponašanje */
            background-repeat: repeat;
        }

        #bg-2 {
            /* Ponavljanje samo po x-osi */
            background-repeat: repeat-x;
        }
    </style>
</head>

<body>
    <div id="bg-1">background-repeat: repeat;</div>
    <div id="bg-2">background-repeat: repeat-x;</div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/background_repeat.png" alt="Podešavanje ponavljanja pozadine elementa">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/27/index.html"
   target="_blank">Pogledaj primer uživo</a>

Podrazumevano, pozicija slike koja čini pozadinu je postavljena uz gornji levi ugao elementa. Ipak, ovo podešavanje se može izmeniti korišćenjem svojstva `background−position`. On uzima dve vrednosti, jednu za horizontalnu, a drugu za vertikalnu poziciju, redom. Ove vrednosti se mogu zadati na različite načine:

- Korišćenjem ključnih reči možemo definisati poziciju pozadine u odnosu na ključne "ćoškove" elementa. Za prvu vrednost možemo navesti `left`, `right` ili `center`, dok za drugu vrednost možemo navesti `top`, `center` ili `bottom`. Dakle, na ovaj način možemo zadati ukupno 9 vrednosti.

- Drugi način je da navodimo dužine. Gornji levi ugao je zadat koordinatama `0 0`. Kako vrednosti rastu, to se pozadina pomera udesno po *x*-osi i nadole po *y*-osi. Specijalno, u slučaju procenata gornji levi ugao je definisan koordinatama `0% 0%`, dok je donji desni ugao definisan koordinatama `100% 100%`.

Naredni kod i prateća slika ilustruju jedan primer pozicioniranja pozadinske slike za telo veb dokumenta korišćenjem opisanog svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 28</title>
    <meta charset="UTF-8">

    <style>
        body {
            background-image: url("halloween_card.jpg");
            background-repeat: repeat-y;

            background-position: right top;
        }

        #monospaced {
            font-family: monospace;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <h1>Happy halloween!</h1>
    <p id="monospaced">
        From: ____________________ <br>
        To: ______________________
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/background_position.png" alt="Primer postavljanja pozadine elementa">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/28/index.html"
   target="_blank">Pogledaj primer uživo</a>

Podrazumevano, veličina pozadine će biti postavljena na dimenzije slike koja se koristi za pozadinu. Ovo može predstavljati problem ukoliko se veličina slike razlikuje od veličine unutrašnjosti elementa. Ukoliko su dimenzije slike manje od dimenzija elementa, onda će slika biti ponavljana (osim ukoliko ne podesimo drugačije korišćenjem već opisanog svojstva `background-repeat`). Sa druge strane, ukoliko su dimenzije slike veće od dimenzija elementa, onda će slika biti odsečena. Ukoliko želimo da preciznije kontrolišemo veličinu pozadine, možemo koristiti svojstvo `background-size`. Ovo svojstvo može uzimati naredne vrednosti:

- Vrednost `auto` definiše podrazumevano ponašanje u kojem je veličina slike u veb dokumentu ekvivalentna veličini slike na disku.

- Vrednošću `cover` vršimo automatsko skaliranje slike tako da cela unutrašnjost elementa bude prekrivena pozadinskom slikom. U ovom slučaju može doći do "razvlačenja" ili odsecanja slike po nekoj ivici, u zavisnosti od veličine slike.

- Vrednošću `contain` vršimo automatsko skaliranje slike tako da slika bude vidljiva u celosti u okviru unutrašnjosti elementa. Suprotno od vrednosti `cover`, postavljanjem ove vrednosti unutrašnjost elementa ne mora biti u potpunosti prekrivena, ali neće dolaziti do odsecanja slike. 

- Veličinu slike možemo podesiti korišćenjem dužina. U tom slučaju navodimo dve vrednosti: prva vrednost definiše širinu pozadine, a druga definiše visinu pozadine. Specijalno, u slučaju procenata, navedene vrednosti se posmatraju u odnosu na unutrašnost elementa. Na primer, vrednosti `50% 25%` definišu da će slika zauzeti 50% širine i 25% visine unutrašnjosti elementa.

Naredni kod i prateća slika ilustruju korišćenje opisanog svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 29</title>
    <meta charset="UTF-8">

    <style>
        div {
            background-image: url("halloween_cartoon.jpeg");
            background-repeat: no-repeat;
            width: 40%;
            height: 200px;
            border: 1px solid black;
            position: absolute;
        }

        #halloween1 {
            top: 0px;
            left: 0%;
            background-size: auto;
        }

        #halloween2 {
            top: 0px;
            left: 50%;
            background-size: 350px 150px;
        }

        #halloween3 {
            top: 225px;
            left: 0%;
            background-size: 90% 90%;
        }

        #halloween4 {
            top: 225px;
            left: 50%;
            background-size: cover;
        }

        #halloween5 {
            top: 450px;
            left: 0%;
            background-size: contain;
        }
    </style>
</head>

<body>
    <div id="halloween1"></div>
    <div id="halloween2"></div>
    <div id="halloween3"></div>
    <div id="halloween4"></div>
    <div id="halloween5"></div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/background_size.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/29/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.9.2 Gradijentna pozadina

CSS gradijenti omogućavaju prikazivanje ravnomerne tranzicije između dve boje ili više boja. U jeziku CSS, definisane su dve vrste gradijenata: linearni i elipsoidni gradijent. Kao što im i sama imena govore, linearni gradijent vrši tranziciju između boja po nekoj linearnoj pravoj dok elipsoidni gradijent iscrtava niz koncentričnih elipsoida po kojima se vrši tranzicija boja.

Kao i u slučaju postavljanja slike za pozadinu gradijenti se postavljaju korišćenjem svojstva `background−image`. U zavisnosti od toga koja se CSS funkcija koristi kao vrednost ovog svojstva, biće postavljen linearni ili elipsoidni gradijent.

Funkcija koja se koristi za definisanje linearnog gradijenta je oblika:
```css
linear−gradient(direction, start−color, ..., last−color)
```

Da bismo kreirali linearni gradijent, potrebno je da specifikujemo naredne elemente kao argumente funkcije `linear-gradient`:

- Nagib prave u čijem pravcu se gradijent prostire (argument `direction`). Ovaj nagib možemo specifikovati korišćenjem: 
   - Ključnih reči oblika `to right`, `to bottom right`, i sl. 
   - Navođenjem ugla nagiba prave, na primer, `60deg`

- Boje na osnovu kojih će se gradijent napraviti. Možemo navesti proizvoljan
broj boja odvojenih karakterom `,` u bilo kom modelu boja (argumenti `start−color`, ..., `last−color`).

Ukoliko želimo da preciznije definišemo prelaske iz jedne boje u drugu, možemo nakon zadavanja boje u nekom modelu, a pre navođenja karaktera `,`, zadati procenat kojim se određuje do koje tačke na pravoj treba da se pronađe ta boja u gradijentu. Na primer, ukoliko stavimo svojstvo

```css
background−image: linear−gradient(to right, black 75%, white);
```

rezultat će biti takav da će u prvih 75% gradijenta vladati crna boja, a zatim će se od 75% do kraja gradijenta vršiti prelaz do bele boje. Ovim se mogu postići neki zanimljivi efekti, na primer, pojavljivanje "štrafti".

Naredni kod i prateća slika ilustruju linearni gradijent, sa i bez specifikovanja prelazaka boja.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 30</title>
    <meta charset="UTF-8">

    <style type="text/css">
        #obican-gradijent {
            height: 200px;
            width: 100%;
            background-image: linear-gradient(to bottom, #4FB2B2, #FFA3E7, #8AFFFF);
        }

        #strafte {
            height: 200px;
            width: 100%;
            background-image: linear-gradient(to right, #4FB2B2 0%, #4FB2B2 25%, #FFA3E7 25%, #FFA3E7 50%, #8AFFFF 50%, #8AFFFF 100%);
            position: relative;
            top: 50px;
        }
    </style>
</head>

<body>
    <div id="obican-gradijent">
    </div>

    <div id="strafte">
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/linear-gradient.png" alt="Primeri linearnih gradijenata">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/30/index.html"
   target="_blank">Pogledaj primer uživo</a>

Elipsoidni gradijent je nešto složenije definisan od linearnog. Naime, elipsoidni gradijent je definisan pomoću četiri vrednosti: (1) pozicije centra, (2) krajnjeg oblika, (3) dve boje ili više boja i (4) veličine krajnjeg oblika. Na narednoj slici dat je prikaz nekih od ovih elemenata.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/radial_gradient_definition.png" alt="">
</div>

Elipsoidni gradijent se kreira korišćenjem CSS funkcije oblika:

```css
radial−gradient(shape size at position, start−color, ..., last−color); 
```

Da bismo kreirali kružni gradijent, potrebno je da specifikujemo naredne elemente kao argumente funkcije `radial-gradient`:

- Krajnji oblika gradijenta (argument `shape`) može uzimati naredne vrednosti: 

   - Vrednošću `ellipse` će se gradijent širiti po osama srazmerno širini i visini elementa. Ovo ponašanje je podrazumevano. Drugim rečima, sam gradijent je oblika elipse (poluose elipse su različitih dimenzija).

   - Vrednošću `circle` se možemo osigurati da bez obzira na širinu i visinu elementa, gradijent će se prostirati u koncentričnim krugovima. Drugim rečima, sam gradijent je oblika kruga (poluose elipse su jednakih dimenzija).

- Veličina krajnjeg oblika (argument `size`) može uzimati naredne vrednosti:
   
   - Navođenjem vrednosti `closest−side` krajnji oblik gradijenta dodiruje ivicu elementa koja je najbliža njegovom centru (ako je gradijent kružni) ili dodiruje horizontalnu i vertikalnu ivicu elementa koje su najbliže njegovom centru (ako je gradijent elipsoidni).
   
   - Navođenjem vrednosti `closest−corner` veličina krajnjeg oblika gradijenta je takva da on tačno dodiruje "ćošak" elementa koji je najbliži njegovom centru.
   
   - Navođenjem vrednosti `farthest−side` krajnji oblik gradijenta dodiruje ivicu elementa koja je najudaljenija od njegovog centra (ako je gradijent kružni) ili dodiruje horizontalnu i vertikalnu ivicu elementa koje su najudaljenije od njegovog centra (ako je gradijent elipsoidni).

   - Navođenjem vrednosti `farthest−corner` veličina krajnjeg oblika gradijenta je takva da on tačno dodiruje "ćošak" elementa koji je najudaljeniji od njegovog centra. Ovo je podrazumevano ponašanje.

- Pozicija centra gradijenta (argument `position`) može uzimati iste vrednosti kao svojstvo `background-position`.

- Boje na osnovu kojih će se gradijent napraviti. Tačke do kojih se boje prostiru se pozicioniraju na zamišljenom virtualnom zraku koji se prostire po horizontalnoj osi od centra gradijenta. Možemo navesti proizvoljan broj boja, odvojenih karakterom `,` u bilo kom modelu boja (argumenti `start−color`, ..., `last−color`).

Naredni kod i prateća slika ilustruju korišćenje nekih od opisanih vrednosti za kreiranje jednostavnih elipsoidnih gradijenata.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 31</title>
    <meta charset="UTF-8">

    <style type="text/css">
        div {
            position: absolute;
            height: 200px;
            width: 40%;
        }

        div#radijalni-ravnomerni {
            top: 0px;
            left: 0%;
            background-image: radial-gradient(rgb(168, 13, 199),
                    rgb(41, 139, 250));
        }

        div#radijalni-neravnomerni {
            top: 0px;
            left: 50%;
            background-image: radial-gradient(rgb(168, 13, 199) 50%,
                    rgb(41, 139, 250));
        }

        div#radijalni-krug {
            top: 250px;
            left: 0%;
            background-image: radial-gradient(circle at 30% 50%,
                    rgb(168, 13, 199), rgb(41, 139, 250));
        }

        div#radijalni-size1 {
            top: 250px;
            left: 50%;
            background-image: radial-gradient(closest-side,
                    rgb(168, 13, 199) 0%, rgb(168, 13, 199) 50%,
                    rgb(41, 139, 250) 50%, rgb(41, 139, 250) 100%);
        }

        div#radijalni-size2 {
            top: 500px;
            left: 0%;
            background-image: radial-gradient(farthest-corner,
                    rgb(168, 13, 199) 0%, rgb(168, 13, 199) 50%,
                    rgb(41, 139, 250) 50%, rgb(41, 139, 250) 100%);
        }
    </style>
</head>

<body>
    <div id="radijalni-ravnomerni"></div>
    <div id="radijalni-neravnomerni"></div>

    <div id="radijalni-krug"></div>
    <div id="radijalni-size1"></div>

    <div id="radijalni-size2">
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/radial_gradient_1.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/31/index.html"
   target="_blank">Pogledaj primer uživo</a>

Naredni kod i prateća slika ilustruju uticaj pozicioniranja centra elipsoidnog gradijenta na njegov krajnji oblik.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 32</title>
    <meta charset="UTF-8">

    <style>
        .grad {
            height: 250px;
            width: 250px;
            display: inline-block;
        }

        #grad1 {
            background-image: radial-gradient(closest-side, red, yellow, black);
        }

        #grad1-pos {
            background-image: radial-gradient(closest-side at 30% 50%, red, yellow, black);
        }

        #grad2 {
            background-image: radial-gradient(farthest-side, red, yellow, black);
        }

        #grad2-pos {
            background-image: radial-gradient(farthest-side at 30% 50%, red, yellow, black);
        }

        #grad3 {
            background-image: radial-gradient(closest-corner, red, yellow, black);
        }

        #grad3-pos {
            background-image: radial-gradient(closest-corner at 30% 50%, red, yellow, black);
        }

        #grad4 {
            background-image: radial-gradient(farthest-corner, red, yellow, black);
        }

        #grad4-pos {
            background-image: radial-gradient(farthest-corner at 30% 50%, red, yellow, black);
        }
    </style>
</head>

<body>
    <h1>Radial Gradients - Different size keywords and positions</h1>

    <h2>closest-side:</h2>
    <div id="grad1" class="grad"></div>
    <div id="grad1-pos" class="grad"></div>

    <h2>farthest-side:</h2>
    <div id="grad2" class="grad"></div>
    <div id="grad2-pos" class="grad"></div>

    <h2>closest-corner:</h2>
    <div id="grad3" class="grad"></div>
    <div id="grad3-pos" class="grad"></div>

    <h2>farthest-corner (default):</h2>
    <div id="grad4" class="grad"></div>
    <div id="grad4-pos" class="grad"></div>

    <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/radial_gradient_2a.png" alt="">
<img style="max-width: 100%;" src="./Slike/radial_gradient_2b.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/32/index.html"
   target="_blank">Pogledaj primer uživo</a>

### Više informacija

Za više informacijama o temama koje su obrađene u ovoj sekciji, možete posetiti naredne korisne veb prezentacije:

- Uopšteno o pozadinama: 
[https://www.w3schools.com/css/css_background.asp](https://www.w3schools.com/css/css_background.asp).

- Postavljanje više od jedne pozadine:
[https://www.w3schools.com/css/css3_backgrounds.asp](https://www.w3schools.com/css/css3_backgrounds.asp)

- Uopšteno o gradijentima:
[https://www.w3schools.com/css/css3_gradients.asp](https://www.w3schools.com/css/css3_gradients.asp)

- Detaljnije o elipsoidnim gradijentima:
[https://www.webdirections.org/blog/css3-radial-gradients/](https://www.webdirections.org/blog/css3-radial-gradients/)
[https://medium.com/@masakudamatsu/the-best-tutorial-on-css-radial-gradient-e44fec35ec2b](https://medium.com/@masakudamatsu/the-best-tutorial-on-css-radial-gradient-e44fec35ec2b)
[https://www.impressivewebs.com/css3-radial-gradient-syntax/](https://www.impressivewebs.com/css3-radial-gradient-syntax/)

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 6</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Za pozadinu stranice korišcena je boja skyblue. Stranica se sastoji iz tri dela - naslovnog, glavnog i podnožja. Za naslovni deo korišcen je gradijent od boje orange do boje yellow. Za pozadinu glavnog dela korišcena je <a href="./Domaci/Resursi/ptice.png">ova slika</a>. Za pozadinu podnožja korišcen je gradijent od boje greenyellow do boje skyblue, kao i <a href="./Domaci/Resursi/trava.png">ova slika</a>.
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak6.png" alt="">
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 7</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Za pozadinu su korišćene boje rgb(5, 48, 84) i white zajedno sa slikama <a href="./Domaci/Resursi/pahulje.png">pahulja</a> i <a href="./Domaci/Resursi/snesko.png">sneška</a>.
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak7.png" alt="">
</div>

## 2.10 Stilizovanje listi

CSS svojstvima koja se tiču stilizovanja numerisanih i nenumerisanih listi možemo upravljati narednim elementima prikaza listi:

- Postavljanje oznake stavke liste (svojstvo `list-style-type`)
- Postavljanje slike za oznaku stavke liste (svojstvo `list-style-image`)
- Postavljanje pozicije oznake stavke liste (svojstvo `list-style-position`)

Podrazumevano, svaka stavka numerisane liste ima odgovarajući redni broj u decimalnom zapisu koji joj je pridružen. Drugim rečima, podrazumevano je za numerisanu listu postavljeno svojstvo `list-style-type` na vrednost `decimal`. Postoje razne druge vrednosti ovog svojstva koja možemo iskoristiti, a neke od njih su prikazane u narednoj tabeli.

| Vrednost svojstva `list-style-type` | Numeracija      |
| ----------------------------------- | --------------- |
| `decimal`                           | 1, 2, 3, ...    |
| `decimal-leading-zero`              | 01, 02, 03, ... |
| `lower-alpha`                       | a, b, c, ...    |
| `upper-alpha`                       | A, B, C, ...    |
| `lower-roman`                       | i, ii, iii, ... |
| `upper-roman`                       | I, II, III, ... |
| `lower-greek`                       | α, β, γ, ...    |
| `upper-greek`                       | Α, Β, Γ, ...    |

Kada je nenumerisana lista u pitanju, podrazumevano je oznaka svake stavke popunjen krug, odnosno, vrednost svojstva `list-style-type` je `disc`. Postoje razne druge vrednosti ovog svojstva koja možemo iskoristiti i one su prikazane u narednoj tabeli.

| Vrednost svojstva `list-style-type` | Označavanje                    |
| ----------------------------------- | ------------------------------ |
| `disc`                              | &#9679;, &#9679;, &#9679; ...  |
| `circle`                            | &#9900;, &#9900;, &#9900;, ... |
| `square`                            | &#9726;, &#9726;, &#9726;, ... |

Ukoliko želimo da uklonimo prikazivanje stavke, potrebno je za svojstvo `list-style-type` postaviti vrednost `none`. Dodatno, svaka stavka liste ima nenula vrednosti postavljene za punjenje i pojas, tako da je nekad pogodno postaviti vrednosti za ove dve površine na `0`, kao u narednom segmentu CSS koda:

```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
```

Pored ovih vrednosti, moguće je postaviti i sliku kao oznaku stavke, korišćenjem svojstva `list-style-image`. Vrednost ovog svojstva je poziv CSS funkcije `url` kojom se specifikuje lokacije slike koja će biti korišćena kao oznaka stavke. Dodatno, pored ovog svojstva, za dobru praksu smatra se navođenje i `list-style-type` svojstva, u slučaju da slika nije dostupna iz bilo kog razloga.

Konačno, objasnimo i svojstvo `list-style-position` kojim se podešava pozicija stavke. Ukoliko se za vrednost ovog svojstva postavi `inside`, tada će se i sama oznaka stavke smatrati kao sadržaj stavke. U suprotnom, postavljanjem vrednosti `outside` oznaka stavke se smatra zasebnim elementom stavke i sav sadržaj se vertikalno poravnava isključivo sa samim sobom.

Naredni primer i prateća slika ilustruju opisana svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 33</title>
    <meta charset="UTF-8">

    <style>
        ul, ol {
            display: inline-block;
            width: 300px;
        }

        ul.ivica-oko-stavki li {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <h1>Stilizovanje listi</h1>

    <div>
        <ol style="list-style-type: decimal;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ol>
        <ol style="list-style-type: upper-alpha;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ol>
        <ol style="list-style-type: lower-greek;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ol>
    </div>

    <div>
        <ul style="list-style-type: disc;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
        <ul style="list-style-type: circle;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
        <ul style="list-style-type: square;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
    </div>

    <div>
        <ul style="list-style-image: url('./arrow.png'); list-style-type: circle;">
            <li>Prva stavka</li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
        <ul style="list-style-position: outside;" class="ivica-oko-stavki">
            <li>
                Ova stavka namerno sadrži relativno dugačak tekst koji ima za cilj
                da ilustruje svojstvo list-style-position kada se njegova vrednost
                postavi na outside, što je podrazumevano.
            </li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
        <ul style="list-style-position: inside;" class="ivica-oko-stavki">
            <li>
                Ova stavka namerno sadrži relativno dugačak tekst koji ima za cilj
                da ilustruje svojstvo list-style-position kada se njegova vrednost
                postavi na inside.
            </li>
            <li>Druga stavka</li>
            <li>Treća stavka</li>
        </ul>
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/liste.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/33/index.html"
   target="_blank">Pogledaj primer uživo</a>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 8</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Boje slova su #f12ff8, #69fd7c i #000000. U trećoj listi korišćena je slika <a href="./Domaci/Resursi/tortica.png">tortice</a>. Link iz poslednje stavke vodi na stranicu čiji je URL https://www.bbcgoodfood.com/recipes/1840634/apple-and-pear-crumble.
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak8.png" alt="">
</div>

## 2.11 Stilizovanje tabela

U prethodnom poglavlju smo diskutovali o načinima za korišćenje tabela u HTML jeziku. U ovoj sekciji ćemo govoriti o različitim načinima na koje je moguće stilizovati tabele pomoću CSS jezika, jednom kada je njihova struktura definisana u HTML jeziku.

Jedan od važnih stilskih elemenata jeste postavljanje ivice tabele. Kao i u modelu kutije, za postavljanje ovog stila možemo koristiti CSS svojstvo `border` i njemu slične. Napomenimo da je moguće postaviti ivicu na nivou cele tabele stilizovanjem elementa `table`, ali i na nivou pojedinačnih redova, odnosno, ćelija, stilizovanjem elemenata `tr` i `td`, redom.

Međutim, da bi postavljanje ivice bilo vidljivo za redove, potrebno je na nivou tabele postaviti još jedno CSS svojstvo, a to je `border-collapse`. Kao što smo videli, podrazumevano ponašanje tabele jeste da se svaka ćelija prikazuje zasebno, što je vidljivo u prvoj tabeli u narednom primeru. Ovo ponašanje se ostvaruje zbog toga što je svojstvo `border-collapse` podrazumevano postavljeno na vrednost `separate`. Međutim, postavljanjem ovog svojstva na vrednost `collapse`, tabela se transformiše tako da se ivice svih susednih ćelija "stapaju" u jednu. Ovim se omogućava da u svakom redu ivica bude jedinstvena, zbog čega se ivica prikazuje, što je vidljivo u drugoj tabeli u narednom primeru.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 34</title>
    <meta charset="UTF-8">

    <style>
        table,
        p {
            font-size: 20px;
        }

        table#t1,
        table#t1 tr,
        table#t1 tr td {
            border: 2px solid black;
        }

        table#t2 {
            border: 5px solid slateblue;
            border-collapse: collapse;
        }

        table#t2 tr#naslovni-red {
            border-bottom: 5px solid steelblue;
        }

        table#t2 tr.ostali-redovi td {
            border: 5px dashed darksalmon;
        }
    </style>
</head>

<body>
    <h1>Stilizovanje ivice tabela</h1>

    <p>Stilizovanje sa razdvojenim ivicama</p>

    <table id="t1">
        <tr>
            <td>Proizvod</td>
            <td>Cena</td>
        </tr>
        <tr>
            <td>Kafa</td>
            <td>150</td>
        </tr>
        <tr>
            <td>Plazma</td>
            <td>100</td>
        </tr>
    </table>

    <p>Stilizovanje sa spojenim ivicama</p>

    <table id="t2">
        <tr id="naslovni-red">
            <td>Proizvod</td>
            <td>Cena</td>
        </tr>
        <tr class="ostali-redovi">
            <td>Kafa</td>
            <td>150</td>
        </tr>
        <tr class="ostali-redovi">
            <td>Plazma</td>
            <td>100</td>
        </tr>
    </table>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/tabela1.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/34/index.html"
   target="_blank">Pogledaj primer uživo</a>

Pozicija anotacije tabele se podešava CSS svojstvom `caption-side`. Ukoliko je njegova vrednost postavljena na `top`, onda će se anotacija prikazati iznad tabele, a ukoliko je njegova vrednost `bottom`, onda će se anotacija prikazivati ispod tabele. Podrazumevano se anotacija prikazuje iznad tabele. Naredni HTML kod i prateća slika ilustruju upotrebu ovog svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 35</title>
    <meta charset="UTF-8">

    <style>
        table, 
        tr {
            border-collapse: collapse;
            border: 2px solid slategray;
        }

        table#t1 {
            caption-side: top;
        }

        table#t2 {
            caption-side: bottom;
        }
    </style>
</head>

<body>
    <h1>Podešavanje anotacije tabela</h1>

    <p>Anotacija iznad tabele (caption-side: top)</p>

    <table id="t1">
        <caption>Tabela 1. Kursevi na MATF</caption>
        <tr>
            <td>Naziv kursa</td>
            <td>Smer</td>
            <td>Godina</td>
        </tr>
        <tr>
            <td>Uvod u Veb i Internet Tehnologije</td>
            <td>Informatika, Računarstvo i informatika</td>
            <td>2, 4</td>
        </tr>
        <tr>
            <td>Programiranje za Veb</td>
            <td>Informatika, Računarstvo i informatika</td>
            <td>4, 5</td>
        </tr>
        <tr>
            <td>Veb Programiranje</td>
            <td>Profesor matematike i računarstva</td>
            <td>4</td>
        </tr>
    </table>

    <p>Anotacija iznad tabele (caption-side: bottom)</p>

    <table id="t2">
        <caption>Tabela 2. Kursevi na MATF</caption>
        <tr>
            <td>Naziv kursa</td>
            <td>Smer</td>
            <td>Godina</td>
        </tr>
        <tr>
            <td>Uvod u Veb i Internet Tehnologije</td>
            <td>Informatika, Računarstvo i informatika</td>
            <td>2, 4</td>
        </tr>
        <tr>
            <td>Programiranje za Veb</td>
            <td>Informatika, Računarstvo i informatika</td>
            <td>4, 5</td>
        </tr>
        <tr>
            <td>Veb Programiranje</td>
            <td>Profesor matematike i računarstva</td>
            <td>4</td>
        </tr>
    </table>

</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/tabela2.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/35/index.html"
   target="_blank">Pogledaj primer uživo</a>

Podrazumevano, svaka ćelija zauzima onoliku površinu koliko sadržaj ćelije zauzima. Slično, svaki red zauzima onoliku površinu koliko sve ćelije zauzimaju. Kao i za ostale elemente, i elementima ćelija tabele je moguće menjati elemente modela kutije. Stoga, moguće je koristiti svojstva `width` i `height` za podešavanje širine i visine ćelije, redom. Međutim, s obzirom na specifičnu organizaciju elemenata u tabeli važe određena dodatna pravila. Naime, ukoliko različite ćelije u istom redu imaju različitu visinu, onda će visina tog reda biti jednaka najvećoj od svih visina ćelija. Slično važi i za kolone - ukoliko različite ćelije u istoj koloni imaju različitu širinu, onda će širina te kolone biti jednaka najvećoj od svih širina ćelija.

U narednom primeru i pratećoj slici ilustrovano je opisano ponašanje. Inicijalno je svim redovima dodeljena visina od `50px` i svim ćelijama je podešena širina od `150px`. Međutim, s obzirom da za ćeliju sa identifikatorom `velika-celija` važi da je njena širina jednaka `300px` i njena visina jednaka `100px`, onda se red i kolona u kojem se ta ćelija nalazi prilagođavanju visini, odnosno širini te ćelije, redom. Naravno, i sve ostale ćelije u tom redu i toj koloni moraju da se prilagode većoj dimenziji.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 36</title>
    <meta charset="UTF-8">

    <style>
        tr {
            height: 50px;
        }

        td {
            width: 150px;
        }

        #velika-celija {
            height: 100px;
            width: 300px;
        }

        table,
        td {
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
        }
    </style>
</head>

<body>
    <h1>Podešavanje veličine ćelija/redova tabele.</h1>

    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td id="velika-celija"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/tabela3.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/36/index.html"
   target="_blank">Pogledaj primer uživo</a>

Svaka tabela ima podrazumevano definisan razmak između ćelija, bilo da li su ivice ćelija spojene (u ovom slučaju je razmak jednak nuli) ili razdvojene. Ukoliko želimo da definišemo razmak između ćelija, možemo nad elementom `table` podesiti CSS svojstvo `border-spacing` čija je vrednost neka od dužina. Takođe, ukoliko tabela sadrži ćelije koje nemaju sadržaj, možemo izbeći njihovo prikazivanje podešavanjem CSS svojstva `empty−cells`. Njegove vrednosti su `hide` za sakrivanje praznih ćelija ili `show` za njihovo prikazivanje. Naredni primer i prateća slika ilustruju upotrebu ova dva svojstva.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 37</title>
    <meta charset="UTF-8">

    <style>
        td {
            height: 50px;
            width: 50px;
            text-align: center;
        }

        table,
        td {
            border: 1px solid black;
        }

        table {
            empty-cells: hide;
            border-spacing: 20px;
        }
    </style>
</head>

<body>
    <h1>
        Razmak između ćelija. <br>
        Prikaz praznih ćelija.
    </h1>

    <table>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td></td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
    </table>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/tabela4.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/37/index.html"
   target="_blank">Pogledaj primer uživo</a>

## 2.12 Stilizovanje stanja i posebnih delova elemenata

Do sada smo za sve HTML elemente razmatrali samo njihovo inicijalno i podrazumevano stanje u kojem se nalaze prilikom njihovog kreiranja. Na primer, kada definišemo naredno pravilo u CSS-u

```css
div {
    width: 300px;
    height: 100px;
    background-color: salmon;
}
```

prilikom konstruisanja svakom `div` elementa, dodeljujemo mu odgovarajuće stilove koji su definisani datim svojstvima. Ova svojstva se primenjuju na podrazumevano stanje u kojem se element nalazi nakon konstrukcije. Međutim, ono što nismo do sada pomenuli jeste da pored podrazumevanog stanja, HTML elementi imaju i druga stanja, kao što su: stanje kada se kursorom miša pređe preko elementa, stanje elementa kada dobije fokus, stanje elementa `a` kada je veza na koju taj element vodi ranije posećena, i dr.

Slično tome, elementi imaju i posebne delove na koje je moguće uticati kao što su: sadržaj ispred ili nakon sadržaja, prvi karakter u sadržaju, i dr. U ovoj sekciji diskutujemo o ovim posebnim stanjima i delovima elemenata.

### 2.12.1 Pseudoklase

Pseudoklase predstavljaju mehanizam pomoću kojih je moguće upravljati stilovima stanja u kojem se HTML element nalazi. Svako stanje ima odgovarajući naziv koji se poklapa sa nazivom pseudoklase koja se koristi u CSS kodu. Sintaksa korišćenja pseudoklasa je sledeća:

```css
selektor:pseudoklasa {
    svojstvo-1: vrednost-1;
    /* ... */
    svojstvo-N: vrednost-N;
}
```

Ovom sintaksom se svojstva `svojstvo-1`, ..., `svojstvo-N` sa vrednostima `vrednost-1`, ..., `vrednost-N` primenjuju na sve elemente obuhvaćene selektorom `selektor` i koji se nalaze u stanju `:pseudoklasa`.

Prikažimo sada neke pseudoklase koje su nam na raspolaganju u CSS jeziku. Tradicionalno se pseudoklase demonstriraju nad elementom `a` i njegovim stanjima `link`, `visited`, `hover` i `active`, tako da će takav slučaj biti i u ovoj knjizi:

- Pseudoklasa `:link` se koristi za stilizovanje stanja u kojoj se veza nalazi kada putanja do koje ona vodi nije posećena. 
- Pseudoklasa `:visited` se koristi za stilizovanje stanja u kojoj se veza nalazi kada putanja jeste posećena. 
- Pseudoklasa `:hover` se koristi za stilizovanje stanja u kojoj se veza nalazi kada se kursorom miša pređe preko veze.
- Pseudoklasa `:active` se koristi za stilizovanje stanja u kojoj se veza nalazi sve dok je kliktaj miša "aktivan" nad vezom.

Ono što treba posebno napomenuti jeste da ove pseudoklase moraju biti navedene u ispravnom redosledu da bi odgovarajući stilovi bili prikazani. Konkretno, pravilo definisano pseudoklasom `:hover` mora da se nađe nakon pravila definisanih pseudoklasama `:link` i `:visited`. Takođe, pravilo definisano pseudoklasom `:active` mora da se nađe nakon pravila definisanog pseudoklasom `:hover`.

Naredni primer ilustruje definisanje različitih stilova za svaki od opisanih stanja u kojima se element `a` može naći. Na pratećoj slici su prikazana data stanja u kojima se svaka od veza nalazi.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 38</title>
    <meta charset="UTF-8">

    <style>
        a {
            display: inline-block;
            width: 100px;
            height: 50px;
            text-align: center;
            font-size: 25px;
            line-height: 50px;
            font-family: sans-serif;
            text-decoration: none;
            color: lavenderblush;
        }

        a:link {
            background-color: slategray;
        }

        a:visited {
            background-color: seagreen;
        }

        a:hover {
            background-color: slateblue;
        }

        a:active {
            background-color: salmon;
        }
    </style>
</head>

<body>
    <h1>Stilizovanje različitih stanja veza</h1>

    <figure>
        <a href="https://matfuvit.github.io/UVIT/vezbe/knjiga2">VEZA</a>
        <figcaption>
            Veza je u stanju kada putanja nije posećena.
        </figcaption>
    </figure>

    <figure>
        <a href="https://matfuvit.github.io/UVIT/vezbe/knjiga">VEZA</a>
        <figcaption>
            Veza je u stanju kada putanja jeste posećena.
        </figcaption>
    </figure>

    <figure>
        <a href="https://matfuvit.github.io/UVIT/vezbe/knjiga">VEZA</a>
        <figcaption>
            Veza je u stanju kada se kursorom miša prelazi preko nje.
        </figcaption>
    </figure>

    <figure>
        <a href="https://matfuvit.github.io/UVIT/vezbe/knjiga">VEZA</a>
        <figcaption>
            Veza je u stanju kada je nad njom aktivan kliktaj miša.
        </figcaption>
    </figure>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/veze-pseudoklase.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/38/index.html"
   target="_blank">Pogledaj primer uživo</a>

Opisane pseudoklase spadaju u kategoriju *dinamičkih pseudoklasa* (engl. *dynamic pseudo-class*). Pseudoklase iz ove kategorije klasifikuju elemente na osnovu karakteristika koje se ne mogu zaključiti iz strukture DOM stabla. Na primer, nije moguće zaključiti da li je neka putanja u vezi posećena ili ne samo na osnovu informacija koje su nam date HTML kodom za tu vezu. Zbog toga je na veb pregledaču da odredi kada se element nalazi u nekim od ovih stanja. Napomenimo još i da, iako se pseudoklase `:link` i `:visited` mogu primeniti samo nad elementima `a`, `area` i `link`, druge opisane pseudoklase `:hover` i `:active` se mogu primeniti i nad drugim elementima, kao što su `p`, `div` i dr.

U prethodnom poglavlju smo diskutovali o unutrašnjim vezama i njihovoj strukturi. Prisetimo se da unutrašnja veza podrazumeva postavljanje atributa `id` nad određenim elementom ka kojem želimo da ostvarimo vezu. Pseudoklasa `:target` se može iskoristiti za stilizovanje elemenata ka kojima postoji aktivna unutrašnja veza u dokumentu. 

Naredni primer ilustruje korišćenje ove pseudoklase u dokumentu koji ima tri podnaslova ka kojima su omogućene unutrašnje veze klikom na veze ispod naslova dokumenta. Primetimo da je na pratećoj slici istaknut deo putanje, koja se nalazi u adresnoj liniji veb pregledača, koji ukazuje da je korisnik kliknuo na vezu koja vodi ka drugom podnaslovu, te zbog toga taj podnaslov ima poseban stil u odnosu na druge podnaslove.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 39</title>
    <meta charset="UTF-8">

    <style>
        h2:target {
            background-color: gainsboro;
            width: 300px;
        }
    </style>
</head>

<body>
    <h1>Stilizovanje aktivnih unutrašnjih veza</h1>

    <a href="#HTML">HTML</a>
    <a href="#CSS">CSS</a>
    <a href="#Bootstrap">Bootstrap</a>

    <h2 id="HTML">HTML</h2>
    <p>Ovo je tekst o HTML jeziku.</p>
    
    <h2 id="CSS">CSS</h2>
    <p>Ovo je tekst o CSS jeziku.</p>

    <h2 id="Bootstrap">Bootstrap</h2>
    <p>Ovo je tekst o Bootstrap biblioteci.</p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/target.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/39/index.html"
   target="_blank">Pogledaj primer uživo</a>

*Strukturalne pseudoklase* (engl. *structural pseudo-classes*) predstavljaju one pseudoklase koje mogu da obuhvate elemente na osnovu informacija iz strukture DOM stabla koju jednostavniji selektori ne mogu. U nastavku navodimo primere strukturalnih pseudoklasa i dajemo njihove opise:

- Pseudoklasa `:first-child` obuhvata tačno prvog potomka od svih koji su obuhvaćeni datim selektorom u roditeljskom elementu. Na primer, `p:first-child` obuhvata svaki paragraf koji je prvi potomak u roditeljskom elementu.
- Pseudoklasa `:last-child` obuhvata tačno poslednjeg potomka od svih koji su obuhvaćeni datim selektorom u roditeljskom elementu. Na primer, `li:last-child` obuhvata svaku poslednju stavku u roditeljskom elementu.
- Pseudoklasa `:nth-child(an+b)` obuhvata svaki element u roditeljskom elementu koji ima tačno $a\cdot n + b - 1$ rođaka ispred njega u DOM stablu, za svako $n \in N_0$. Alternativno, umesto izraza `an+b` možemo koristiti vrednosti `even` ili `odd`, koji selektuju svaki element na parnoj, odnosno, neparnoj poziciji, redom. Zbog svoje složenije notacije, dajemo naredne primere radi ilustracije ove pseudoklase:
   - Selektor `a:nth-child(even)` obuhvata svaku vezu na parnoj poziciji
   - Selektor `a:nth-child(odd)` obuhvata svaku vezu na neparnoj poziciji
   - Selektor `tr:nth-child(10n+5)` obuhvata 15-ti, 25-ti, 35-ti, ... red u tabeli
   - Selektor `tr:nth-child(10n)` obuhvata 10-ti, 20-ti, 30-ti, ... red u tabeli
   - Selektor `tr:nth-child(5)` obuhvata 5. red u tabeli

Napomenimo da indeksiranje u opisanim pseudoklasama počinje od 1. Naredni primer i prateća slika ilustruju opisane strukturalne pseudoklase.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 40</title>
    <meta charset="UTF-8">

    <style>
        p:first-child {
            font-weight: bold;
            color: gold;
        }

        li:last-child {
            font-weight: bold;
            color: pink;
        }

        table {
            border-collapse: collapse;
            border: 1px solid black;
        }

        tr:nth-child(even) td:nth-child(2n) {
            background-color: cadetblue;
        }

        tr:nth-child(odd) td:nth-child(2n+1) {
            background-color: cadetblue;
        }

        tr:nth-child(1) th {
            background-color: blanchedalmond;
            font-weight: bold;
            text-align: center;
            height: 50px;
            width: 100px;
        }
    </style>
</head>

<body>
    <h1>Stilizovanje korišćenjem strukturalnih pseudoklasa</h1>

    <a href="#p">Paragrafi</a>
    <a href="#l">Liste</a>
    <a href="#t">Tabela</a>

    <h2 id="p">Paragrafi</h2>

    <!-- 
        Ovde smo morali da stavimo element div,
        da bi prvi paragraf bio ujedno i prvi potomak.
        Bez njega, taj paragraf bi bio potomak elementa body,
        ali ne bi bio njegov prvi potomak,
        pa ga zato selektor p:first-child ne bi obuhvatio.
    -->
    <div>
        <p>Ovo je tekst o HTML jeziku.</p>
        <p>Ovo je tekst o CSS jeziku.</p>
        <p>Ovo je tekst o Bootstrap biblioteci.</p>
    </div>

    <h2 id="l">Liste</h2>

    <ul>
        <li>Prva stavka</li>
        <li>Druga stavka</li>
        <li>...</li>
        <li>Poslednja stavka</li>
    </ul>

    <ol>
        <li>Prva stavka</li>
        <li>Druga stavka</li>
        <li>...</li>
        <li>Poslednja stavka</li>
    </ol>

    <h2 id="t">Tabela</h2>

    <table>
        <tr>
            <th>Zaglavlje 1</th>
            <th>Zaglavlje 2</th>
            <th>Zaglavlje 3</th>
        </tr>
        <tr>
            <td>A11</td>
            <td>A12</td>
            <td>A13</td>
        </tr>
        <tr>
            <td>A21</td>
            <td>A22</td>
            <td>A23</td>
        </tr>
        <tr>
            <td>A31</td>
            <td>A32</td>
            <td>A33</td>
        </tr>
        <tr>
            <td>A41</td>
            <td>A42</td>
            <td>A43</td>
        </tr>
        <tr>
            <td>A51</td>
            <td>A52</td>
            <td>A53</td>
        </tr>
    </table>

</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/strukturalne-pseudoklase.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/40/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 2.12.2 Pseudoelementi

Pseudoelementi se koriste za stilizovanje posebnih delova HTML elemenata koji predstavljaju apstrakcije dobijene na osnovu informacija iz strukture DOM stabla, ali koji nemaju odgovarajuću reprezentaciju u HTML jeziku. Na primer, HTML jezikom ne možemo pristupiti prvom karakteru teksta koji čini sadržaj nekog HTML elementa. 

Sintaksa pseudoelemenata je slična pseudoklasama, sa razlikom da se koriste dve dvotačke umesto jedne:

```css
selektor::pseudoelement {
    svojstvo-1: vrednost-1;
    /* ... */
    svojstvo-N: vrednost-N;
}
```

U nastavku navodimo primere pseudoelemenata i dajemo njihove opise:

- Pseudoelement `::first-line` opisuje sadržaj koji se nalazi u prvoj liniji elementa. Na primer, selektorom `p::first-line` primeniće se stil na sadržaj u prvoj liniji svih paragrafa.
- Pseudoelement `::first-letter` opisuje sadržaj koji se nalazi kao prvi karakter sadržaja elementa. Na primer, selektorom `h1::first-letter` primeniće se stil na prvi karakter svih naslova.
- Pseudoelementi `::before` i `::after` mogu se koristiti za umetanje generisanog sadržaja ispred, odnosno, nakon samog sadržaja elementa, redom. Za umetanje sadržaja ispred ili nakon sadržaja elementa koristi se svojstvo `content`, koji može imati neku od narednih vrednosti:
   - Niska, koja označava tekstualni sadržaj.
   - Poziv CSS funkcije `url` koja će umetnuti sadržaj do kojeg vodi putanja. Na primer, prosleđivanjem putanje koja vodi na sliku, ta slika će biti umetnuta ispred ili nakon elementa.

Naredni primer i prateća slika ilustruju korišćenje opisanih pseudoelemenata.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 41</title>
    <meta charset="UTF-8">

    <style>
        h1 {
            font-family: sans-serif;
            font-weight: normal;
        }

        h1::first-letter {
            font-size: 60px;
            font-family: serif;
            font-style: italic;
            font-weight: bolder;
            color: palevioletred;
        }

        p {
            width: 500px;
        }

        p::first-line {
            text-decoration: underline;
            font-style: italic;
        }

        div.teorema {
            text-align: center;
            width: 30%;
            font-size: 18px;
        }

        div.teorema::before,
        div.teorema::after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            background-color: aquamarine;
        }

        div.dokaz {
            width: 30%;
            font-size: 14px;
        }

        div.dokaz::before {
            content: "Dokaz:";
            font-style: italic;
            font-weight: bold;
        }

        div.dokaz::after {
            content: url('kraj-dokaza.jpg');
        }
    </style>
</head>

<body>
    <h1>Pseudoelementi ::first-letter i ::first-line</h1>

    <p>
        Korišćenjem pseudoelementa ::first-letter, omogućili smo na nivou
        ovog dokumenta da se prvi karakter svih naslova prikazuje posebno,
        što je vidljivo iz naslova iznad i ispod. Dodatno, korišćenjem
        pseudoelementa ::first-line, omogućili smo na nivou ovog dokumenta
        da se prva linija svih paragrafa prikazuje iskošeno i podvučeno,
        što je vidljivo u primeru ovog paragrafa.
    </p>

    <h1>Pseudoelementi ::before i ::after</h1>

    <div class="teorema">
        Svaki Ojlerov graf je balansiran. Svaki povezan graf i balansiran graf je Ojlerov.
    </div>

    <div class="dokaz">
        Neka nam je dat povezan balansiran graf. Da bismo pokazali da graf sadrži Ojlerov ciklus, postavićemo mrava na
        bilo koji od čvorova tog grafa. Zašto baš mrav? Poznato je da mravi nikada ne idu istim putem dva puta pa smo
        sigurni da će naš mrav proći svaku granu tačno jednom.
        <br><br>
        Puštamo mrava da slučajno odabira grane kojima će se kretati. Ako je veoma pametan, obići će svaku granu jednom
        i vratiće se u početni čvor. Medutim, velike su šanse da nije veoma pametan i da će se u nekom čvoru zaglaviti,
        odnosno, neće imati granu koju već nije obišao.
        <br><br>
        Da li mrav može da se zaglavi u bilo kom čvoru? Ispostavlja se da može da se zaglavi samo u početnom čvoru (jer
        je graf balansiran). U trenutku kada se zaglavio on je napravio ciklus. Samo, taj ciklus nije Ojlerov jer još
        uvek nije obišao sve grane. Ideja je da odabere drugačiji početni čvor iz kog će krenuti obilazak. Koji čvor će
        izabrati? Treba da izabere čvor iz ciklusa koji ima izlaznih grana koje još uvek nije obišao.
        <br><br>
        Sada, mrav pokušava ispočetka iz novog čvora. Prvo obilazi ciklus koji je već pronašao u prethodnom pokušaju, a
        zatim nastavlja obilazak preko neposećenih grana. Na taj način, ciklus se uvećava dok se ne dode do Ojlerovog.
        Ukoliko se ponovo zaglavi, ponovo bira novi početni čvor, obilazi pronadeni ciklus (koji i dalje nije Ojlerov) i
        tako sve dok ne uspe da obide sve grane.
    </div>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/pseudoelementi.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/41/index.html"
   target="_blank">Pogledaj primer uživo</a>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 9</span> 
    <div class="tekst">
        Napisati HTML i CSS kod koji odgovara stranici na narednoj slici. Pomoću validatora osigurati se da je kod napisan u skladu sa HTML5 i CSS3 standardom. Veličina fonta na nivou cele stranice je 20px, a korišćen je font Calibri (ukoliko nije dostupan, prepustiti pregledaču da odabere neki od fontova iz familije bez kukica). Tabela zauzima polovinu širine stranice i centrirana je. Za boje redova tabele korišćene su  rgb(63, 107, 226) i  rgb(92, 236, 255) sa prozirnošću 40%. Prvo slovo naslova tabele je crvene boje i iskošeno, a veličina je za 30% veća od ostatka teksta. Reči u prvoj koloni su linkovi do stranica: <a href="https://harrypotter.fandom.com/wiki/Hogwarts_Houses">Kuće</a>, <a href="https://harrypotter.fandom.com/wiki/Gryffindor">Grifindor</a>, <a href="https://harrypotter.fandom.com/wiki/Hufflepuff">Haflpaf</a>. Neposećeni linkovi su crvene boje i nisu podvučeni. Posećeni linkovi u zaglavlju tabele su bele boje, a ostali su crvene boje. Pozicioniranjem kursora iznad teksta linka izgled kursora se menja u pomoćni kursor (`help`), a tekst je podvučen. Klikom na link veličina teksta se smanjuje za 10%.
    </div>
    <img style="max-width: 100%;" src="./Domaci/Slike/zadatak9.png" alt="">
</div>

-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/X/index.html"
   target="_blank">Pogledaj primer uživo</a>
-->
