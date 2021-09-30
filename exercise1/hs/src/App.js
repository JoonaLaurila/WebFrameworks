import React from 'react';
import './App.css';
import Header from './components/Header';
import MainNews from './components/MainNews';
import MostRead from './components/MostRead';
import Notifications from './components/Notifications';

function App() {
  return (
    <div>
      
      
      
      <Header /> 
      <Notifications topic= 'PÄIVÄN TIMANTTI' body= 'Tutkija kertoo: Näin sota näkyy meissä edelleen'/>
      <Notifications topic= 'PÄIVÄN TIMANTTI' body= 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa' />
      <Notifications topic= 'MAINOS' body= '| Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin kaksi viikkoa maksutta'/>

      <MainNews/>
      <MostRead nro='1' topic='Rikosepäilyt' body='| EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa' />
      <MostRead nro='2' topic='HS Vantaa' body='| Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa' />
      <MostRead nro='3' topic='Päivittyvä seuranta' body='STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden' />
      <MostRead nro='4' topic='Nyt.fi' body='Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman' />
    
    
      
    </div>
  );
}

export default App;
