import React from 'react';
import { Form, Container } from 'react-bootstrap';

const Main = () => (
  <Container xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="main-info-container">

    <h5>
      Az Egyesült Királyságban dolgozol magyar munkavállóként? Ha igen, akkor érdemes a Brexit folyamat alapjait megérteni, és tisztában lenni azzal, hogy mi várható, illetve mit tehetsz, hogy ne érjenek nagy meglepetések a következő hetekben/hónapokban. Mi összegyűjtöttük a legfontosabb tudnivalókat ezen az oldalon.
    </h5>

    <h3>Mi történik?</h3>
    <hr />
    <p>
      A 2016 júniusi Brexit népszavazás óta eltelt több mint három évben az Egyesült Királyság politikai életét az EU-ból való kilépés és annak feltételei, megvalósítása határozták meg. Több kormányváltást, egy előre hozott választást, és a hivatalos kilépési határidő többszöri meghosszabbítását is láttuk, és még koránt sincs vége.
    </p>

    <h3>Miért ilyen hosszadalmas ez a folyamat? </h3>
    <hr />
    <p>
      Elsősorban kettő tényező miatt. Egyrészt, a brit kormánynak ténylegesen bonyolult kérdésekről kell megegyezni az Unióval. Az EU tagjaként az áruk, szolgáltatások és munkaerő szabadon és vámmentesen áramlott az Egyesült Királyság és az Unió között, illetve a közös jogszabályi háttér is biztosított volt. A kilépéssel azonban meg kell egyezni az új kereskedelmi feltételekről, a szabályozói környezetről, illetve az Észak-Írország (Egyesült Királyság része) és Írország (független ország, EU tagja) határát érintő kérdésekről. A szigetország számára ez utóbbi különösen súlyos kérdés, hiszen nem sokkal több mint 20 évvel ezelőtt, még ember életeket követelő konfliktus zajlott Észak-Írország státuszát illetően.
    </p>
    <p>
      A másik nagy akadály a gyors kilépés előtt az, hogy a kormánynak, ha meg is állapodik az EU-val, a hazai politikában is meg kell szereznie a támogatást a megegyezés feltételei mellett. Theresa May, korábbi miniszterelnök például meg tudott egyezni a kilépés fő kérdéseiről az Unióval, de a parlament többször is elutasította a megállapodást. Sokat elmond a helyzet komplexitásáról, hogy 2019 tavaszán a parlament úgynevezett indikatív szavazást tartott 8 különböző kilépési elképzelésről (vámunióban maradás, megegyezés nélküli kilépés, stb.), és a képviselők egyenként leszavazták az összes indítványt. Számos parlamenti csoportosulás alakult ki a Brexit kérdései körül és a különböző csoportok eltérő okokra hivatkozva utasítottak el minden konkrét javaslatot. A jelenlegi parlamenti arányok mellett nehéz bármilyen komplett elképzelésnek többségi támogatást szerezni, így érthető, hogy a kilépési folyamat miért húzódik el egyre jobban.
    </p>

    <h3>De mégis, miért nem tud az ország csak egyszerűen kilépni megegyezés nélkül?</h3>
    <hr />
    <p>
      A megegyezés nélküli kilépés várhatóan nagyon komoly károkat okozna a szigetország gazdaságában, hiszen a brit cégek erősen integráltak az EU gazdasági vérkeringésében, ezért azt a jelenlegi parlament (és a brit közvélemény) nem támogatja. Külön törvényt alkottak, ami kimondja, hogy amennyiben nem sikerül a kilépési határidő előtt megállapodni, vagy a parlement nem fogadja el a megállapodást, akkor a kormánynak újabb halasztást kell kérnie az EU-tól. A gazdasági károkról még annyit, hogy az elmúlt évek bizonytalansága már eddig is lenyomta a növekedést, elsősorban  a céges beruházások visszatartása és a kereskedelem csökkenése miatt. Ennek mértékéről eltérő elemzések vannak, viszont az például egyértelműen látható hogy a font sokat veszített értékéből.
    </p>

    <h3>Akkor mi várható?</h3>
    <hr />
    <p>
      Boris Johnson miniszterelnök kormánya és az EU megállapodott egy új egyezményben az elmúlt hetekben, amit a brit parlament ugyan nagy vonalakban elfogadott, de több időt kértek, hogy azt részleteiben is meg tudják vitatni. Így a parlament által erre kötelezett brit kormány az október 31.-i határidő meghosszabbítását kérte az EU-tól. Elemzők szerint az Unió ezt támogatni fogja, kérdés azonban, hogy a Boris Johnson által kért január 31. lesz az új határidő, vagy pedig egy jelentősen rövidebb hosszabbítás következik.
    </p>
    <p>
      A kormány közben már egy decemberi előrehozott választás lehetőségét is meglebegtette, ugyanis ha a parlamenti helyek elosztásán akár csak egy kicsit is változtatni lehetne a kormány javára, akkor könnyebben és gyorsabban el lehetne fogadni a jelenlegi megállapodást és megvalósulna a Brexit. Előrehozott választások megtartásához azonban kétharmados többség kell parlamentben, ezért ez ellenzék támogatására is szükség van.
    </p>

    <h3>Checklist</h3>
    <hr />
    <p>
      Tehát sok a bizonytalanság, azonban tehetsz néhány dolgot, hogy felkészülj. Az alábbi kérdések megválaszolásával felmérheted, hogy mennyire állsz készen az ország EU-ból való bármilyen formájú kilépésére.
    </p>

      <ul>
        {[
          'Van érvényes útleveled?',
          'Brit állampolgár vagy? Ha nem, jelentkeztél már pre-settled vagy settled statusra?',
          'Van "National Insurance Number"-ed?',
          'Utánanéztél változik-e az Erasmus ösztöndíjad?',
          'Be vagy jelentve a munkahelyeden?',
          'Utánanéztél változnak-e a mobilszolgáltatód roamin díjai?',
          'Ha vannak, honosítottad a szakmai okleveleidet?',
          'Utánanéztél, hogy lehte angol kocsival az EU-ba utazni Brexit után?'
        ].map(label => (<li id="checklist">{label}</li>))}
      </ul>

    <h3>Uniós polgárok letelepedési rendszere</h3>
    <h4>(„Settled Status” és „pre-settled status”)</h4>
    <hr />
    <p>
      Az Egyesült Királyságban élő uniós állampolgároknak , így a magyaroknak is jelentkeznük kell „settled” vagy „pre-settled status”-ért. Ezt akkor is meg kell szerezned ha UK megegyezés nélkül lép ki az EU-ból (no-deal Brexit). Az Egyesült Királyságban való tartózkodást rendező státuszt elvileg minden itt élő uniós polgár meg fogja kapni függetlenül attól, hogy miért, milyen jogcímen van az országban. (Az országban való tartózkodást vizsgálják, nem azt, hogy valaki tanult, dolgozott, vagy pl. munkanélküli segélyen élt.) A jelentkezés ingyenes és okostelefonora letölthető alkalmazással lehet elintézni 2021. június 30-ig vagy (no-deal Brexit esetén) 2020. december 31-ig.
    </p>
    <p>
      Ha több mint 5 éve élsz az Egyesült Királyságban „settled” státuszt kapsz, ha kevesebb mint 5 éve vagy az országban először „pre-settled” státuszt fogsz kapni. Az online jelentkezés során a brit minisztériumok adatbázisaiban (HMRC és DWP) elvileg automatikusan kiderül mióta vagy az orszában, de a gyakorlati tapasztalat az, hogy a rendszer nem működik tökéletesen. Emiatt érdemes eltenni az Egyesült Királyságban való tartózkodásodat igazoló dokumentumaidat, mert a jelentkezés során ezekkel tudod majd igazolni, hogy itt éltél.
    </p>
    <p>
      <a target="_blank" href="https://www.gov.uk/guidance/settled-status-for-eu-citizens-and-their-families-translations.hu">Magyar nyelvű tájékoztatóért kattints ide!</a>
    </p>

  </Container>
)

export default Main;
