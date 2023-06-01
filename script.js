let images = [
    "/SoMeGrafikker/1.png",
    "/SoMeGrafikker/2.png",
    "/SoMeGrafikker/3.png",
    "/SoMeGrafikker/4.png"
  ];
  let texts = [
    {
      title: "Branding",
      paragraph: "Kampagnerne er nået ud til i alt 187.594 personer, som i gennemsnit har set kampagnen 2,15 gange. Der er klikket på annoncerne 237 gange, hvilket er OK, da det ikke er formålet med kampagnen. Kampagnen har givet 296 sideinteraktioner, hvilket er antallet af gange en bruger har klikket, liket, kommenteret osv. med Facebooksiden. Kampagnerne er blevet vist 187.594 gange. Det er positivt, da det øger kendskabsgraden i målgruppen, jo flere gange de ser annoncerne. Kampagnerne fortsætter indtil oktober. Vi arbejder fortsat på at øge frekvensen, så chancen for at målgruppen husker Masker i Marsken er større. "
    },
    {
      title: "Tilmeldinger til nyhedsbrev",
      paragraph: "Kampagnen har kørt siden 26. april. Kampagnen er nået ud til i alt 8979 personer, som i gennemsnit har set kampagnen 2,08 gange. Der er klikket på annoncen 417 gange, hvilket er rigtig positivt, da det viser at folk er interesseret i at tilmelde sig nyhedsbrevet. Kampagnen har givet 555 sideinteraktioner, hvilket er antallet af gange en bruger har klikket, liket, kommenteret osv. med Facebooksiden. Det er rigtig flot! Der er i kampagneperioden 179 personer der har fuldført registrering til nyhedsbrevet. Kampagnen kører til og med september."
    },
    {
      title: "Mors dag",
      paragraph: "Kampagnen har kørt siden 26. april. Kampagnen er nået ud til i alt 29.035 personer, som i gennemsnit har set kampagnen 2,06 gange. Kampagnen er blevet vist 59.678 gange. Der er klikket på annoncen 1049 gange, hvilket er rigtig flot og 6,58% af dem der har set annoncen. De i alt 745 visninger af landingsiden har resulteret i 114 købte partoutbilletter, hvilket er højere end vores målsætning. Det koster i gennemsnit 19,55 kroner at få en personer til at blive kunde og købe en partoutbillet. Kampagnen har givet 1285 sideinteraktioner, hvilket er antallet af gange en bruger har klikket, liket, kommenteret osv. med Facebooksiden. Kampagnen fortsætter til og med 14. maj."
    },
    {
        title: "Fokus på program 2023",
        paragraph: "Kampagnen har kørt siden 26. april. Kampagnerne er nået ud til i alt 19.280 personer, som har set annoncen 31.344 gange. Det giver en frekvens på 1,63 gange per person. Den må gerne blive højere – vi sætter løbende fokus på forskellige workshops/foredrag/arrangementer fra programmet, så målgruppen bliver eksponeret for forskelligt indhold. Der er klikket på annoncen 1161 gange, hvilket er rigtig godt og det er 7,8% af de personer der ser annoncen, der klikker på den. Det har resulteret i 726 visninger af landingsiden, hvilket alle er personer, der gerne vil læse mere om programmet. Kampagnen har givet 1316 sideinteraktioner, hvilket er antallet af gange en bruger har klikket, liket, kommenteret osv. med Facebooksiden. Kampagnen kører indtil august."
      }
  ];
  let currentIndex = 0;
  let carouselImages = document.getElementsByClassName("carousel-image");
  let carouselTitles = document.getElementsByClassName("carousel-title");
  let carouselParagraphs = document.getElementsByClassName("carousel-paragraph");
  
  function changeSlide() {
    carouselImages[0].src = images[currentIndex];
    carouselTitles[0].textContent = texts[currentIndex].title;
    carouselParagraphs[0].textContent = texts[currentIndex].paragraph;
  }
  
  // Kald changeSlide() for at vise det første slide ved indlæsning af siden
  changeSlide();

document.querySelector('.left').addEventListener('click', () =>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide();
    
})

document.querySelector('.right').addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide();
    
})


