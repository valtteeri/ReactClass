import React from 'react';
import './News.css';
import News1 from './News1.png';
function News() {
  return (
    <div class="flexbox">
        <div class = "MainNews"> 
          <div>
            <div class="maintitle">Koronavirus</div>
            <img src={News1} />
            <p><span class="bluetitle">Koronavirus</span> | Espoolainen Riitta Tiainen sai koronarokotteet Ruotsissa, mutta ei EU:n yhteistä rokotustodistusta:"Olen virallisesti rokottamaton"</p>
            <p class="timeline">Kotimaa 18:03</p>
          </div>
          <div class="NewsDivider">
            <img src={News1} class="News1" width="150px" height="109px" />
            <p><span class="bluetitle">Koronatestaus</span> | Ohjeistus sairastuneen lapsen palaamisesta päiväkotiin ja kouluun keveni - Ylilääkäri toivoo, ettei pandemiaa edeltänyt käytäntö silti palaisi</p>
            <p class="timeline">Kotimaa 14:14</p>
          </div>
          <div class="NewsDivider">
            <img src={News1} class="News1" width="150px" height="109px" />
            <p><span class="bluetitle">Matkustaminen</span> | Matkustaminen on jo niin helppoa, että tuntuu kuin pandemiaa ei olisi ollutkaan - HS:n lukijat kertovat, miten koronatodistus toimii reissatessa</p>
            <p class="timeline">Kotimaa 11:52</p>
          </div>
          <div class="NewsDivider">
            <img src={News1} class="News1" width="150px" height="109px" />
            <p><span class="bluetitle">Koronavirus</span> | HS:n koronakatsaus: Portugalissa täysin rokotettuja liki 85 prosenttia, Suomessa vasta 61 prosenttia koko väestöstä</p>
            <p class="timeline">Kotimaa 12:43</p>
          </div>
        </div>
        <div class="mostread">
          <div class="mostreadtitle">Luetuimmat</div>
            <div class="newnews">
              <div class="listnumber">1</div>
              <div class="newsstory"><b>Rikosepäilyt</b> | EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</div>
            </div>
            <div class="newnews">
              <div class="listnumber">2</div>
              <div class="newsstory"><b>HS Vantaa</b> | Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</div>
            </div>
            <div class="newnews">
              <div class="listnumber">3</div>
              <div class="newsstory"><b>Päivittyvä seuranta</b> | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</div>
            </div>
            <div class="newnews">
              <div class="listnumber">4</div>
              <div class="newsstory"><b>Nyt.fi</b> | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</div>
            </div>
            <div class="newnews">
              <div class="listnumber">5</div>
              <div class="newsstory"><b>Rikosepäilyt</b> | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</div>
            </div>
            <div class="newnews">
              <div class="listnumber">6</div>
              <div class="newsstory"><b>Helsinki</b> | Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille</div>
            </div>
            <div class="newnews">
              <div class="listnumber">7</div>
              <div class="newsstory"><b>Tulipalot</b> | Rivitalo palaa Helsingin Tapulikaupungissa, HS:n toimittaja paikalla: Asukkaat havahtuivat kovaan pamahdukseen</div>
            </div>
            <div>
              <div class="mostreadtitle new">Uusimmat</div>
                <div class="newnews">
                  <div class="timestamp">23:18</div>
                  <div class="newsstory"><b> Seksuaalirikokset |</b> Oikeus totesi laulaja R. Kellyn syylliseksi yhdeksään syytekohtaan</div>
                </div>
                <div class="newnews">
                  <div class="timestamp">22:49</div>
                  <div class="newsstory"><b> Kiina |</b> Kiina haluaa vähentää "ei-lääketieteellisessä tarkoituksessa" tehtyjen aborttien määrää</div>
                </div>
                <div class="newnews">
                  <div class="timestamp">21:44</div>
                  <div class="newsstory"><b>Espanja |</b> Tulivuori alkoi taas syöstä tuhkaa Kanariansaariin kuuluvalla La Palmalla</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News