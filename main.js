const abrir = (id) => {

    let estilo = document.getElementById(id).style.display;
    if (estilo == 'inline-block') {
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'inline-block';
    }


}

const idioma = (idioma) => {
    if (idioma == 'ing') {
        texto = `
    <h1> Sandra Cerro </h1> <span id='idioma' onclick="idioma('es')"> Me puedes poner en español </span>
    <h2> WebDev Student </h2>

    <div class='links'>
        <a href=''>Github</a>
        <a href=''>Twitter</a>
        <a href=''>Instagram</a>
        <a href=''>LinkedIn</a>
        <a href=''>Blog</a>

    </div>

    <div class="intro">
        Hi, I'm Sandra, a WebDev student in Madrid, and this is not a serious website.<br>
        Click down here to open the different sections.
    </div>
    <div class="changelog">
        <div class="title flash" onclick='abrir("changelog")'> [+] Changelog </div>
        I've made some stuff the last years, here are some of the most outstanding changes <br>
        <div id='changelog' style="display:none;" class='oculto'>
            <table>
                <tr>
                    <td>September 2018</td>
                    <td>WebDev 2nd course starts</td>
                </tr>
                <tr>
                    <td>August 2018</td>
                    <td>I started studying public service exams, again.</td>
                </tr>
                <tr>
                    <td>September 2017</td>
                    <td>I started, at last, the 1st WebDev course</td>
                </tr>
                <tr>
                    <td>April 2017</td>
                    <td>I adopted the tabby cat: Fry</td>
                </tr>
                <tr>
                    <td>January 2017</td>
                    <td>The white cat adopted me: Hodor</td>
                </tr>
                <tr>
                    <td>August 2016</td>
                    <td>CTDI Spain: new job, new coworkers, same duties</td>
                </tr>
                <tr>
                    <td>June 2016</td>
                    <td>Teacher public service exams: big fail</td>
                </tr>
                <tr>
                    <td>July 2015</td>
                    <td>BQ: first contact with the mobile phone repair sector </td>
                </tr>
                <tr>
                    <td>May 2015</td>
                    <td>Final thesis passed. Degree finished. Officially English and Early Years Fundation Stage teacher</td>
                </tr>
                <tr>
                    <td>September 2011</td>
                    <td>University, why not?</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="updates">
        <div class="title flash" onclick='abrir("updates")'>[+] Updates </div>
        Some of the most 'relevant' things I've done last weeks <br>
        <div id='updates' style="display:none;" class='oculto'>
            <ul>
                <li>Last week: Exams. We prayed all the virgins and saints</li>
                <li>I created this site</li>
                <li> November 9: Bank Holiday? Nah, only in Madrid</li>
                <li> Halloween bank holiday: Time to go back to Alicante and see the beach, the sun and nice weather.</li>
                <li> October: It's already freezing in Avila</li>
            </ul>
        </div>
    </div>

    <div class="bio">
        <div class="title flash" onclick='abrir("bio")'>[+] Bio</div>
        Where do we come from? what are we? where are we going? <br>      
        <div id='bio' style="display:none;" class='oculto'>
            <p>
                Sandra, born in Madrid. Spending her first 13 years there, destiny wanted her in Avila, so she moved.
                There, she finished high school, and despite studying the technological branch of high school,
                she decided to start a non technological degree.
            </p>
            <p>
            She found she liked english on her first trip abroad: a week long student exchange in London.
            Since then, all she wanted was going back to the UK. <br>
            She went back in 2010 thanks to a scholarship. She spent a month in Exmouth, a town located in the
            south of England, about 50 minutes far from Exeter by the 57 bus.
            </p>
            <p>
            She studied Education at the University of Salamanca, and she went back to England, this time to Sheffield.
           <br>
           On her 3rd year, she chose English as speciality. It made the whole degree experience change to better,
           thanks to teachers like Mr. Fernando Beltrán.
            <br> With the Final thesis still in progress, she decided Avila was too cold and small, and she moved again to Madrid.
            No habiendo terminado aún el TFG, decidió que Ávila se le quedaba frío y pequeño, y se fue
            </p>
            <p>
            She found a job in something she liked: mobile phone repair, and it allowed her to travel.
            She moved from Madrid to Rivas, where she's still living. <br>
            In 6 moths time, she went to Italy, Morocco, Germany, France and Poland. A year later, she went back to England,
            this time, she visited London (3rd time) and Brighton, town she fell in love with.
            </p>
            <p>
            Not everything is travelling, so in 2017 she started the WebDev course. There where two options:
            to love it or to hate it. And she seems to have chosen the first one.<br>
            Studying are not an impediment for travelling, but this time throughout Spain, visiting cities as
            Alicante, Pamplona, Girona, Coruña, Pontevedra, Lugo or Almeria, that join the long list of spanish visited cities.
            </p>
        </div>
    </div>

    <div class="end">
        <br>
        Thank you for reading this far. In exchange for your time,
         here is a joke: Why are mountains so funny? Because they're hill areas. <br>
         And a picture of my cats, who had collaborated so hard making this site, sleeping on my keyboard and playing with my mouse cord.
         Nothing would be possible without them... <br><br>
        <img src='img/gatos.jpg' alt='Sandra's cats>

    </div>
</div>`;
        document.getElementById('content').innerHTML = texto;
    } else {
        texto = `<h1> Sandra Cerro </h1> <span id='idioma' onclick="idioma('ing')"> Change to English! </span>
        <h2> Estudiante de Desarrollo Web </h2>

        <div class='links'>
            <a href=''>Github</a>
            <a href=''>Twitter</a>
            <a href=''>Instagram</a>
            <a href=''>LinkedIn</a>
            <a href=''>Blog</a>

        </div>

        <div class="intro">
            Hola, soy Sandra, una estudiante de Desarrollo Web en Madrid, y esto no es una web seria.<br>
            Haz click por aquí debajo para ir abriendo los diferentes apartados.
        </div>
        <div class="changelog">
            <div class="title flash" onclick='abrir("changelog")'> [+] Control de cambios</div>
            He hecho algunas cosillas estos últimos años, aquí están algunas de las más destacadas
            <div id='changelog' style="display:none;" class='oculto'>
                <table>
                    <tr>
                        <td>Septiembre 2018</td>
                        <td>Empiezo el 2º curso de Desarrollo Web</td>
                    </tr>
                    <tr>
                        <td>Agosto 2018</td>
                        <td>Empiezo a estudiar oposiciones, otra vez</td>
                    </tr>
                    <tr>
                        <td>Septiembre 2017</td>
                        <td>Empiezo, por fin, el 1º curso de Desarrollo Web</td>
                    </tr>
                    <tr>
                        <td>Abril 2017</td>
                        <td>Adopto al gato rubio: Fry</td>
                    </tr>
                    <tr>
                        <td>Enero 2017</td>
                        <td>Adopto al gato blanco: Hodor</td>
                    </tr>
                    <tr>
                        <td>Agosto 2016</td>
                        <td>CTDI Spain: Nueva empresa, nuevos compañeros, mismo trabajo</td>
                    </tr>
                    <tr>
                        <td>Junio 2016</td>
                        <td>Oposiciones a maestro: fracaso absoluto</td>
                    </tr>
                    <tr>
                        <td>Julio 2015</td>
                        <td>BQ: primera toma de contacto con el sector de la reparación de telefonía</td>
                    </tr>
                    <tr>
                        <td>Mayo 2015</td>
                        <td>TFG aprobado. Carrera terminada. Oficialmente Maestra de Infantil y de Inglés</td>
                    </tr>
                    <tr>
                        <td>Septiembre 2011</td>
                        <td>Universidad ¿por qué no?</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="updates">
            <div class="title flash" onclick='abrir("updates")'>[+] Actualizaciones</div>
            Algunas de las cosas más 'relevantes' que me han sucedido en las últimas semanas
            <div id='updates' style="display:none;" class='oculto'>
                <ul>
                    <li>Semana del 12-18: Exámenes. Nos encomendamos a las virgenes y santos de cada una de las
                        asignaturas</li>
                    <li>Hice esta web</li>
                    <li> 9 noviembre: Parece puente, pero solo en Madrid</li>
                    <li> Puente de los Santos: Ya tocaba volver a Alicante y ver la playa, el buen tiempo, el sol</li>
                    <li> Octubre: En Ávila ya hace mucho frío</li>
                </ul>
            </div>
        </div>

        <div class="bio">
            <div class="title flash" onclick='abrir("bio")'>[+] Biografía</div>
            ¿Quiénes somos? ¿A dónde vamos? ¿De dónde venimos?
            <div id='bio' style="display:none;" class='oculto'>
                <p>
                    Sandra, natural de Madrid. Habiendo pasado sus primeros 13 años allí, por razones del destino,
                    se
                    fue a
                    Ávila, donde terminó el instituto y, pese a haber hecho el bachillerato tecnológico, se
                    aventuró
                    con
                    una carrera de letras.
                </p>
                <p>
                    Encontró el gusto por el inglés en su primer viaje al extranjero: un intercambio de una semana
                    en
                    Londres. Desde entonces todo su afán ha sido volver al Reino Unido.<br>
                    Volvió en 2010 con una beca por un mes a Exmouth, una ciudad al sur de Inglaterra, a unos 50
                    minutos de
                    Exeter en el '57 bus'.
                </p>
                <p>
                    Estudió Magisterio Infantil por la Universidad de Salamanca, y aprovechó para volver a
                    Inglaterra,
                    esta
                    vez a Sheffield. <br>
                    En 3º eligió la especialidad de Inglés, haciendo que la experiencia en la
                    carrera
                    mejorara notablemente gracias a profesores como D. Fernando Beltrán.
                    <br> No habiendo terminado aún el TFG, decidió que Ávila se le quedaba frío y pequeño, y se fue
                    de
                    nuevo
                    a
                    Madrid.
                </p>
                <p>
                    Encontró trabajo en algo que no le disgustaba: la reparación de telefonía, y encima le permitía
                    viajar. Se mudó de Madrid capital a Rivas, donde sigue viviendo 3 años más tarde. <br>
                    En el lapso de 6 meses estuvo en Italia, Marruecos, Alemania, Francia y Polonia.
                    Más adelante volvió a Inglaterra, esta vez a Londres (por 3ª vez) y Brighton, ciudad de la que
                    ha
                    quedado enamorada.
                </p>
                <p>
                    Como no todo es viajar, en 2017 comenzó el CFGS de Desarrollo Web, quitándose la
                    espinita que tenía clavada desde hace mucho tiempo con la informática. Había dos opciones:
                    amarlo u
                    odiarlo. Y parece ser que eligió la primera. <br>
                    Los estudios no han impedido que siguiese viajando, eso si, por España, visitando ciudades como
                    Alicante, Pamplona, Girona, Coruña, Pontevedra, Lugo o Almería, que se suman a la larga lista
                    de
                    ciudades españolas ya visitadas.
                </p>
            </div>
        </div>

        <div class="end">
            <br>
            Gracias por leer hasta aquí. A cambio te dejo una foto de mis gatos, que han colaborado duramente
            conmigo
            para realizar este sitio, tumbándose en el teclado e impidiendo que pudiese ver la pantalla. Sin ellos
            nada
            sería posible. <br><br>
            <img src='img/gatos.jpg' alt='los gatos de Sandra'>

        </div>`;
        document.getElementById('content').innerHTML = texto;

    }


}