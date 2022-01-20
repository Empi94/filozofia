class Quote {
  constructor(text) {
    this.text = text;
    this.guessed = [];
  }

  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char == " " || this.guessed.includes(char)) {
        content += char;
      } else {
        content += "_";
      }
    }

    return content;
  }

  guess(letter) {
    if (!this.text.includes(letter)) {
      return false;
    }

    this.guessed.push(letter);
    return true;
  }
}


class Game {
  currentStep = 0;
  earlierStep=0;
  lastStep = 8;

  quotes = [
    {
      text: "sokrates",
      category:"Nie mogę nikogo niczego nauczyć. Mogę tylko sprawić że zaczną myśleć",
      biography: "Urodził się w Atenach. Jeden z największych myślicieli starożytnych . Przeszedł do historii jako wzór niezłomności moralnej i prawości. Wyrocznia delficka, kiedy ją zapytano, czy jest ktoś mądrzejszy niż Sokrates, miała odpowiedzieć ,,nikt”. Znany był z tego, iż zagadywał w Atenach losowo wybranych przechodniów, aby uprawiać z nimi filozofię. Dobrowolnie poddał się karze śmierci poprzez wypicie cykuty. Nie posiadamy żadnych jego pism. ",
    },
    {
      text: "platon",
      category:"Założył Akademię. Stworzył alegorię jaskini.",
      biography: "Urodził się w Atenach. Prawdopodobnie już za dziecka wykazywał cechy potrzebne w polityce. Był uczniem samego Sokratesa. Założył szkołę filozoficzną w gaju Akademosa. Nazywa się ją również Akademią. Pozostawił po sobie kilka dzieł. ",
    },
    {
      text: "arystoteles",
      category:"Twórca etyki złotego środka",
      biography: "Urodził się w Stagirze. Wstąpił do Akademii Platońskiej. Wiele podróżował po Grecji. Był również nauczycielem samego Aleksandra Macedońskiego. Zajmował się nie tylko filozofią, ale również meteorologią, botaniką, zoologią czy poetyką. Zachowała się większość jego dzieł. ",
    },
    {
      text: "pitagoras z samos",
      category:"Prawdopodobnie dzięki temu filozofowi stosujemy termin filozofia jako ,,umiłowanie mądrości",
      biography: "Twórca słynnego twierdzenia matematycznego. Zasługuje na miano naukowca, ponieważ świadomie formułował problemy czy hipotezy badawcze. ",
    },
    {
      text: "heraklit z efezu",
      category:"Trudna jest walka z pożądaniem, gdyż to, czego ono chce, kupuje kosztem duszy",
      biography: "Zasłynął jako tzw. filozof ,,ciemny”, czyli piszący w skomplikowany, niezrozumiały i hermetyczny sposób. Według źródeł Heraklit był wyniosły, stronił od ludzi i unikał angażowania się w życie publiczne. Buntował się przeciwko niesprawiedliwości i niegodziwości w państwie. ",
    },
    {
      text: "kartezjusz",
      category:"Cogito ergo sum",
      biography: "Francuski filozof, opierający się na filozofii starożytnych sceptyków. Zauważył iż, ogromne znaczenie ma rzetelność posiadanych informacji o świecie. ",
    },
    {
      text: "sigmund freud",
      category:"Twórca psychoanalizy, podzielił psychikę ludzką na 3 struktury: id, ego, superego",
      biography: "Austriacki psychiatra. Twórca psychoanalizy. Według niego człowiek funkcjonuje na styku biologicznej sfery popędowej oraz społecznej warstwy norm i zasad. Sytuacja tłumienia niechcianych lub szkodliwych popędów poprzez społeczne normy może prowadzić do frustracji i nerwic oraz do wytwarzania mechanizmów obronnych, takich jak sublimacja czy projekcja. ",
    },
    {
      text: "protagoras",
      category:"Człowiek jest miarą wszystkich rzeczy",
      biography: "Przedstawiciel sofistyki. Uznawał iż cnoty politycznej można się nauczyć. Sofiści jako pierwsi uzasadniali koncepcję państwa i prawa jako wyniku umowy społecznej. Celem powstania państwa stała się więc korzyść. ",
    },
    {
      text: "blaise pascal",
      category:"Drwić sobie z filozofii znaczy naprawdę filozofować",
      biography: "Opierał się często na naukach św. Augustyna. Był przekonany że nasza potrzeba poznania zmierza do poznania istoty Boga, której jednak nigdy nie możemy jasno i wyraźnie pojąć. ",
    },
    {
      text: "ks jozef tischner",
      category:"Głosy filozofów są jak termometr w ludzkim organizmie. Zazwyczaj przez filozofię najlepiej wyraża się gorączka tego świata",
      biography: "Jest polskim przedstawicielem filozofii dialogu, inaczej filozofii spotkania. Jest to nowy twór, ponieważ pochodzi z XX wieku, w którym istotną rolę odgrywały filozofia i religia. ",
    },
    {
      text:"sufizm",
      category:"mistyczny nurt islamu",
      biography:"",
    },
    {
      text:"plutarch z cheronei",
      category:"Wybitny historyk i pisarz starożytnej Grecji. Napisał m.in. ,,Żywoty równoległe",
      biography:"",
    },
    {
      text:"teologia",
      category:"dyscyplina zajmująca się wyjaśnieniem pojęcia natury Boga oraz stosunku rzeczywistości do istoty najwyższej.",
      biography:"",
    },
    {
      text:"wariabilizm",
      category:"Przekonanie, że stawanie się polega na przechodzeniu jednych przeciwieństw w inne.",
      biography:"",
    },
    {
      text:"daimonion",
      category:",,Wewnętrzny głos” Sokratesa",
      biography:"",
    },
    {
      text:"paideia",
      category:"Inaczej wychowanie, miała obejmować naukę gimnastyki, muzyki, matematyki",
      biography:"",
    },
    {
      text:"hedonizm",
      category:"Stanowisko uznające przyjemność za cel ludzkiego dążenia.",
      biography:"",
    },
    {
      text:"iluminacja",
      category:"Oświecenie nadprzyrodzonym światłem.",
      biography:"",
    },
    {
      text:"determinizm",
      category:"Wszystkie ludzkie działania i decyzje są uwarunkowane przyczynowo, a więc ludzie nie posiadają wolnej woli.",
      biography:"",
    },
    {
      text:"arche",
      category:"Pierwsza przyczyna i zasada wsystkiego, co istnieje.",
      biography:"",
    },
    {
      text:"egalitaryzm",
      category:"Przekonanie o przyrodzonej równości ludzi.",
      biography:"",
    },
    {
      text:"nihilizm",
      category:"Utajone przeświadczenie, że przyszło nam żyć w świecie, w którym wszystko jest względne i zarazem nie nadaje się do naprawy.",
      biography:"",
    },
    {
      text:"sofista",
      category:"Ktoś, kto potrafi ubrać fałsz w pozór prawdy.",
      biography:"",
    },
    {
      text:"niccolo machiavelli",
      category:",,Cel uświęca środki”",
      biography:"",
    },
    {
      text:"funkcje duszy",
      category:"Rozum, odwaga i pożądanie to: ",
      biography:"",
    },
    {
      text:"dialektyka",
      category:"sztuka dyskutowania",
      biography:"",
    },

    {
      text:"george dickie",
      category:",,Każde dzieło sztuki jest artefaktem, czyli wynikiem pracy istot ludzkich”",
      biography:"",
    },


  ];

  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper,biographyWrapper,textInfo }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;
    this.biographyWrapper=biographyWrapper;
    this.textInfo=textInfo;

    const { text, category,biography } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.biographyWrapper.innerHTML=biography;
    this.textInfo=text;
    this.quote = new Quote(text);
  }

  guess(letter, event) {
    event.target.disabled = true;     
    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      this.earlierStep=this.currentStep-1;
      document.getElementsByClassName("step")[this.earlierStep].style.display = "none";
      document.getElementsByClassName("step")[this.currentStep].style.display = "block";
      if (this.currentStep == this.lastStep-1) {
        this.loosing();
      }
    }
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", (event) => this.guess(label, event));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
    if (!content.includes('_')) {
        this.winning();
    }
  }

  start() {
    document.getElementsByClassName("step")[this.currentStep].style.display ="block";
    this.drawLetters();
    this.drawQuote();
  }

  winning() {
    this.categoryWrapper;
    document.getElementById("category").style.display="none";
    document.getElementById("word").style.marginTop=0+"px";
    document.getElementsByClassName("step")[this.currentStep].style.display="none";
    document.querySelector(".win").style.display="block";
    document.querySelector(".win img").style.borderRadius=10+"%";
    this.wordWrapper;
    document.querySelector(".losuj").style.display="block";
    this.biographyWrapper;
    document.getElementById("biography").style.display="block";
    document.getElementById("letters").style.fontSize=28+"px";
    document.getElementById("letters").style.fontWeight=700;
    document.getElementById("letters").style.backgroundColor="yellowGreen";
    document.getElementById("letters").style.border=2+"px";
    document.getElementById("letters").style.borderStyle="solid";
    document.getElementById("letters").style.borderColor="black";
    document.getElementById("letters").style.textTransform="upperCase";
    this.lettersWrapper.innerHTML = "Gratulacje odgadłeś hasło !!";
  }

  loosing() {
    this.wordWrapper;
    this.categoryWrapper;
    document.getElementById("category").innerHTML="";
    document.getElementById("word").innerHTML="Niestety przegrales<br>Prawidlowa odpowiedz to "+this.textInfo+"<br>,,Jedynym dobrem jest wiedza, a jedynym złem jest ignorancja”";
    document.getElementById("word").style.fontSize=28+"px";
    document.getElementById("word").style.fontWeight=700;
    document.getElementById("word").style.lineHeight=60+"px";
    document.getElementById("word").style.backgroundColor="red";
    document.getElementById("word").style.border=2+"px";
    document.getElementById("word").style.borderStyle="solid";
    document.getElementById("word").style.borderColor="black";
    document.getElementById("word").style.textTransform="upperCase";
    document.getElementById("word").style.letterSpacing=0+"px";
    document.querySelector(".losuj").style.display="block";
    this.biographyWrapper;
    document.getElementById("biography").innerHTML="";
    this.lettersWrapper.innerHTML = "";
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
  biographyWrapper: document.getElementById("biography"), 
});

game.start();
