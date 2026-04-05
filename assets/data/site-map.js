window.GA_SITE = {
  "title": "Genetic Algorithms",
  "topLevel": [
    "home",
    "ga",
    "teoriya",
    "predstavyane",
    "operatori",
    "fitnes",
    "parametri",
    "razshireniya",
    "ocenyavane",
    "implementaciya",
    "prilozheniya",
    "kapani",
    "iztochnici"
  ],
  "pages": {
    "home": {
      "key": "home",
      "slug": "/",
      "nav": "Начало",
      "title": "Генетични алгоритми",
      "level": "Beginner",
      "parent": null,
      "summary": "Статичен учебен сайт за genetic algorithms, изграден по PDF структурата и подготвен за GitHub Pages без нужда от build процес.",
      "bullets": [
        "Започнете с ГА, Каноничен процес и Представяния, ако темата ви е нова.",
        "Използвайте Теория, Параметри и Оценяване, ако искате по-строг прочит.",
        "Сравнителните таблици събират основните варианти, кодирания, библиотеки и начални настройки."
      ],
      "example": "Сайтът има обзорни страници за бърза ориентация и по-дълбоки страници за теми като schema theorem, NSGA-II и COCO/BBOB.",
      "diagram": "site-navigation.svg",
      "equations": [
        "max f(x), x in X",
        "Budget ≈ population size × generations"
      ],
      "tables": [
        "variants",
        "representations",
        "libraries",
        "presets"
      ],
      "children": [
        "ga",
        "teoriya",
        "predstavyane",
        "operatori",
        "fitnes",
        "parametri",
        "razshireniya",
        "ocenyavane",
        "implementaciya",
        "prilozheniya",
        "kapani",
        "iztochnici"
      ],
      "topSection": "ga",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "fitness",
        "selection",
        "crossover",
        "mutation",
        "NSGA-II",
        "hypervolume"
      ],
      "relatedPrimary": [
        "ga",
        "teoriya",
        "predstavyane"
      ],
      "relatedSecondary": [
        "implementaciya",
        "iztochnici",
        "kapani"
      ],
      "studyTracks": [
        {
          "title": "Начална пътека",
          "description": "За студенти, които тепърва влизат в темата и искат здрава основа без излишно формално натоварване.",
          "pages": [
            "ga",
            "ga-kanonichen-proces",
            "predstavyane",
            "operatori",
            "implementaciya-psevdokod"
          ]
        },
        {
          "title": "Първо теория",
          "description": "За читатели, които искат да разберат формалния език, ограниченията и аргументите за сходимост.",
          "pages": [
            "teoriya",
            "teoriya-formalen-model",
            "teoriya-schema-theorem",
            "teoriya-sxodimost",
            "teoriya-no-free-lunch"
          ]
        },
        {
          "title": "Пътека за имплементация",
          "description": "За хора, които ще пишат код или ще правят експерименти с библиотеки и benchmark среди.",
          "pages": [
            "fitnes",
            "parametri",
            "implementaciya",
            "implementaciya-biblioteki",
            "implementaciya-reproducibility"
          ]
        },
        {
          "title": "Многоцелева пътека",
          "description": "За читатели, които се интересуват от Pareto оптимизация, фронтове и по-съвременни MOEA методи.",
          "pages": [
            "razshireniya-multiobjective",
            "razshireniya-nsga-ii",
            "razshireniya-nsga-iii",
            "ocenyavane-metriki-mnogocel",
            "ocenyavane-zdt-dtlz-wfg"
          ]
        }
      ],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Статичен учебен сайт за genetic algorithms, изграден по PDF структурата и подготвен за GitHub Pages без нужда от build процес.",
            "Този сайт не е направен само за бърза справка. Ако го четете подред, може да стигнете от първите понятия за [[GA]] до по-трудни теми като [[NSGA-II]], [[hypervolume]] и честно оценяване на резултатите.",
            "Подредбата следва PDF структурата: първо основите, после представянията и операторите, след това [[fitness]], параметри, разширени методи, оценяване, implementation и приложения."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Започнете с ГА, Каноничен процес и Представяния, ако темата ви е нова.",
            "Използвайте Теория, Параметри и Оценяване, ако искате по-строг прочит.",
            "Сравнителните таблици събират основните варианти, кодирания, библиотеки и начални настройки."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-добре е да четете с ясна цел. Ако тепърва влизате в темата, започнете от какво е [[GA]], после вижте каноничния процес и представянията. Ако вече пишете код, след това минете към [[fitness]], параметри и reproducibility.",
            "На всяка страница си задавайте три въпроса: какво означава идеята, как влияе на реалния алгоритъм и къде най-често се бърка. Така сайтът става учебен път, а не просто списък от термини."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "max f(x), x in X",
            "Budget ≈ population size × generations"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Сайтът има обзорни страници за бърза ориентация и по-дълбоки страници за теми като schema theorem, NSGA-II и COCO/BBOB."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не бъркайте [[GA]] с напълно произволно търсене. Случайността присъства, но избраните настройки създават насока към полезни решения.",
            "Не приемайте, че добрият резултат от един пример автоматично значи универсална сила на метода."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": []
    },
    "ga": {
      "key": "ga",
      "slug": "/ga/",
      "nav": "ГА",
      "title": "Какво е генетичен алгоритъм",
      "level": "Beginner",
      "parent": "home",
      "summary": "Първо въведение в genetic algorithms: какво са genotype, phenotype и fitness и защо алгоритъмът работи с популация, а не с едно решение.",
      "bullets": [
        "ГА работи с група решения, а не само с един кандидат.",
        "Selection, crossover и mutation движат търсенето напред.",
        "Успехът зависи от това как е кодирана задачата и какви оператори използвате."
      ],
      "example": "Представете си, че едно решение е бинарен низ като 101010. Целта е да получите колкото може повече единици, а fitness е просто броят на 1. В поколение 1 низовете са случайни. В поколение 5 започват да се виждат повече единици. В поколение 20 повечето добри решения вече са близо до 111111. С времето по-добрите решения се запазват и комбинират, което води до подобрение.",
      "diagram": "ga-process-flow.svg",
      "equations": [
        "F(g) = f(phi(g))"
      ],
      "tables": [],
      "children": [
        "ga-kanonichen-proces",
        "ga-koga-raboti"
      ],
      "topSection": "ga",
      "readings": [
        {
          "label": "John Holland - Adaptation in Natural and Artificial Systems",
          "href": "https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "EA",
        "genotype",
        "phenotype",
        "fitness",
        "selection",
        "crossover",
        "mutation"
      ],
      "relatedPrimary": [
        "ga-kanonichen-proces",
        "predstavyane",
        "operatori"
      ],
      "relatedSecondary": [
        "teoriya",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: GA пробва много решения едновременно и пази по-добрите, за да се подобрява с времето.",
          "paragraphs": [
            "Първо въведение в genetic algorithms: какво са genotype, phenotype и fitness и защо алгоритъмът работи с популация, а не с едно решение.",
            "Най-лесно е да мислите за [[GA]] като за начин да търсите решение не с един опит, а с цяла група от решения. Част от тях са по-добри, част са по-слаби, а алгоритъмът постепенно измества популацията към по-добри варианти.",
            "Това е полезно при задачи, в които няма удобен градиент, има много локални оптимуми или решенията са трудни за описване с проста формула."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: така виждате защо GA подобрява решенията постепенно, а не на случаен принцип.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "ГА работи с група решения, а не само с един кандидат.",
            "Selection, crossover и mutation движат търсенето напред.",
            "Успехът зависи от това как е кодирана задачата и какви оператори използвате."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Важно е да се види, че [[GA]] не е една единствена готова рецепта. Един и същ общ процес може да работи с бинарни низове, реални числа, пермутации или дървета, стига decode, операторите и [[fitness]] да са добре съгласувани.",
            "Затова, когато казвате „ползвам genetic algorithm“, всъщност трябва да уточните как е кодирано решението, как се избират родители, как се комбинират, как се променят и как се оценяват."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "F(g) = f(phi(g))"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си, че едно решение е бинарен низ като 101010. Целта е да получите колкото може повече единици, а fitness е просто броят на 1. В поколение 1 низовете са случайни. В поколение 5 започват да се виждат повече единици. В поколение 20 повечето добри решения вече са близо до 111111. С времето по-добрите решения се запазват и комбинират, което води до подобрение."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": {
            "title": "Simple Example: How a Genetic Algorithm Works",
            "intro": "Представете си, че всяко решение е кратък бинарен низ.",
            "items": [
              "Example individual: 101010",
              "Goal: maximize number of 1s",
              "Fitness function: count of 1s",
              "Generation 1 -> random strings",
              "Generation 5 -> more 1s appear",
              "Generation 20 -> near-optimal solution (almost all 1s)"
            ],
            "conclusion": "С времето по-добрите решения се запазват и комбинират, което води до подобрение."
          },
          "visualSteps": [
            {
              "label": "Generation 1",
              "sequences": [
                "101010",
                "010101",
                "111000"
              ]
            },
            {
              "label": "Generation 5",
              "sequences": [
                "111010",
                "110111",
                "111100"
              ]
            },
            {
              "label": "Generation 20",
              "sequences": [
                "111111",
                "111110",
                "111111"
              ]
            }
          ],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не свеждайте темата само до „алгоритъм, който смесва случайни решения“. Истинската сила идва от structured variation и selection signal.",
            "Не пропускайте думи като [[genotype]] и [[phenotype]], защото без тях по-късните теоретични и практични страници ще звучат откъснато."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "ga-kanonichen-proces": {
      "key": "ga-kanonichen-proces",
      "slug": "/ga/kanonichen-proces/",
      "nav": "Каноничен процес",
      "title": "Каноничен процес",
      "level": "Beginner",
      "parent": "ga",
      "summary": "Каноничният цикъл на ГА минава през инициализация, оценяване, селекция, кръстосване, мутация, замяна и условие за спиране.",
      "bullets": [
        "Generational и steady-state вариантите се държат различно във времето.",
        "Броят evaluations е най-важната мярка за използвания бюджет.",
        "Елитизмът пази най-добрите решения да не се загубят случайно."
      ],
      "example": "Представете си популация от 100 низа. Първо ги създавате, после мерите fitness, избирате по-добрите, кръстосвате ги и добавяте малки промени чрез мутация. След това оценявате новите решения и цикълът започва отново. Ако направите 500 поколения, ще имате около 50 000 оценки на fitness.",
      "diagram": "ga-process-flow.svg",
      "equations": [
        "Budget ≈ N × G"
      ],
      "tables": [],
      "children": [],
      "topSection": "ga",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        }
      ],
      "glossaryTerms": [
        "GA",
        "EA",
        "fitness",
        "genotype",
        "phenotype",
        "selection",
        "crossover",
        "mutation"
      ],
      "relatedPrimary": [
        "ga",
        "operatori",
        "implementaciya-psevdokod"
      ],
      "relatedSecondary": [
        "parametri",
        "fitnes",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: това е основният цикъл, в който алгоритъмът създава, оценява и подобрява решенията.",
          "paragraphs": [
            "Каноничният цикъл на ГА минава през инициализация, оценяване, селекция, кръстосване, мутация, замяна и условие за спиране.",
            "Каноничният процес е най-доброто място за първо подреждане на темата. Почти всички по-сложни варианти са просто промени върху този основен цикъл.",
            "Ако тук ви е ясно кога се създава популацията, кога се оценява и кога се решава кой остава, после много по-лесно ще разберете и по-сложните варианти."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: когато знаете всяка стъпка, по-лесно разбирате къде алгоритъмът печели или губи качество.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Generational и steady-state вариантите се държат различно във времето.",
            "Броят evaluations е най-важната мярка за използвания бюджет.",
            "Елитизмът пази най-добрите решения да не се загубят случайно."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Важно е не само да знаете реда на стъпките, а и какво прави всяка от тях. Evaluation показва кои решения са добри. Parent selection решава кой ще има шанс да създава потомство. Survivor selection пази част от натрупаното знание в популацията.",
            "Полезно е да различавате generational от steady-state вариант. В единия сменяте почти всичко наведнъж. В другия правите по-малки местни промени. Това се усеща върху разнообразието и скоростта на напредък."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "Budget ≈ N × G"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си популация от 100 низа. Първо ги създавате, после мерите fitness, избирате по-добрите, кръстосвате ги и добавяте малки промени чрез мутация. След това оценявате новите решения и цикълът започва отново. Ако направите 500 поколения, ще имате около 50 000 оценки на fitness."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не смесвайте parent selection и survivor selection като една и съща операция. В modern algorithms те често се оптимизират по различен начин.",
            "Не измервайте цената на процеса само в поколения. При скъпи задачи точната валута е броят на fitness evaluations."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ga"
      ]
    },
    "ga-koga-raboti": {
      "key": "ga-koga-raboti",
      "slug": "/ga/koga-raboti/",
      "nav": "Кога работи",
      "title": "Кога ГА работи и кога не",
      "level": "Mixed",
      "parent": "ga",
      "summary": "GA е силен при black-box, noisy, combinatorial или rugged задачи, но не е универсално най-добрият метод.",
      "bullets": [
        "Problem class matters повече от общи обещания.",
        "Representation и operators вкарват inductive bias.",
        "За гладки convex задачи често има по-специализирани методи."
      ],
      "example": "Ако търсите добър ред на операции в SQL заявка, GA може да е полезен, защото има много възможни комбинации и няма лесен пряк път. Ако задачата е гладка и добре описана математически, често има по-пряк оптимизационен метод. Така примерът показва, че силата на GA зависи от вида задача, а не от общо обещание, че е най-добър навсякъде.",
      "diagram": "theory-map.svg",
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "ga",
      "readings": [
        {
          "label": "Wolpert and Macready - No Free Lunch Theorems for Optimization",
          "href": "https://www.cs.ubc.ca/~hutter/earg/papers07/00585893.pdf"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "EA",
        "fitness",
        "genotype",
        "phenotype",
        "selection",
        "crossover",
        "mutation"
      ],
      "relatedPrimary": [
        "ga",
        "ga-kanonichen-proces"
      ],
      "relatedSecondary": [
        "teoriya",
        "predstavyane",
        "operatori"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "GA е силен при black-box, noisy, combinatorial или rugged задачи, но не е универсално най-добрият метод.",
            "Тук идеята е проста: [[GA]] не подобрява само едно решение, а работи с цяла група кандидати и постепенно я променя.",
            "Най-важното е студентът да свърже [[genotype]], [[phenotype]], [[fitness]], [[selection]], [[crossover]] и [[mutation]] като части от един общ процес."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Problem class matters повече от общи обещания.",
            "Representation и operators вкарват inductive bias.",
            "За гладки convex задачи често има по-специализирани методи."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-важното е студентът да свърже [[genotype]], [[phenotype]], [[fitness]], [[selection]], [[crossover]] и [[mutation]] като части от един общ процес."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако търсите добър ред на операции в SQL заявка, GA може да е полезен, защото има много възможни комбинации и няма лесен пряк път. Ако задачата е гладка и добре описана математически, често има по-пряк оптимизационен метод. Така примерът показва, че силата на GA зависи от вида задача, а не от общо обещание, че е най-добър навсякъде."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не бъркайте [[GA]] с напълно произволно търсене. Случайността присъства, но избраните настройки създават насока към полезни решения.",
            "Не приемайте, че добрият резултат от един пример автоматично значи универсална сила на метода."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ga"
      ]
    },
    "teoriya": {
      "key": "teoriya",
      "slug": "/teoriya/",
      "nav": "Теория",
      "title": "Теоретични основи",
      "level": "Mixed",
      "parent": "home",
      "summary": "Теоретичният раздел събира формалния модел, schema theorem, сходимостта и No Free Lunch.",
      "bullets": [
        "Историческата интуиция не е същото като пълна теория.",
        "Формалните модели правят твърденията за сходимост по-точни.",
        "Практиката става по-добра, когато разбирате какво теорията наистина казва."
      ],
      "example": "Schema theorem дава интуиция защо някои полезни шаблони могат да се разпространяват в популацията. Марковият модел описва по-строго как популацията се променя с времето. Така теорията не е само абстракция, а инструмент да мислите по-точно за поведението на алгоритъма.",
      "diagram": "theory-map.svg",
      "equations": [],
      "tables": [],
      "children": [
        "teoriya-formalen-model",
        "teoriya-schema-theorem",
        "teoriya-sxodimost",
        "teoriya-no-free-lunch"
      ],
      "topSection": "teoriya",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Michael Vose - The Simple Genetic Algorithm: Foundations and Theory",
          "href": "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"
        },
        {
          "label": "Wolpert and Macready - No Free Lunch Theorems for Optimization",
          "href": "https://www.cs.ubc.ca/~hutter/earg/papers07/00585893.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "schema",
        "elitism",
        "decoder"
      ],
      "relatedPrimary": [
        "teoriya-formalen-model",
        "teoriya-schema-theorem",
        "teoriya-sxodimost"
      ],
      "relatedSecondary": [
        "ga",
        "parametri",
        "ocenyavane"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: теорията обяснява защо алгоритъмът се държи така, а не само как изглежда.",
          "paragraphs": [
            "Теоретичният раздел събира формалния модел, schema theorem, сходимостта и No Free Lunch.",
            "Теоретичният раздел подрежда нещата по-строго. Той е нужен, защото интуитивните обяснения са полезни, но понякога могат да се тълкуват прекалено силно.",
            "Добрата теория не пречи на разбирането. Тя просто показва по-ясно къде една идея е добра интуиция и къде вече говорим за по-сериозно твърдение."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: теорията пази от грешни обещания и помага да избирате по-разумно.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Историческата интуиция не е същото като пълна теория.",
            "Формалните модели правят твърденията за сходимост по-точни.",
            "Практиката става по-добра, когато разбирате какво теорията наистина казва."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-полезно е да сравнявате идеите една с друга. Schema theorem дава важна историческа интуиция, Markov models дават по-точен език, а [[nfl]] напомня, че няма универсален победител за всички задачи.",
            "Гледайте този раздел като основа за по-добър избор на representation, operators и evaluation protocol, а не като отделна академична добавка."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Schema theorem дава интуиция защо някои полезни шаблони могат да се разпространяват в популацията. Марковият модел описва по-строго как популацията се променя с времето. Така теорията не е само абстракция, а инструмент да мислите по-точно за поведението на алгоритъма."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
            "Не говорете за convergence без да уточните в какъв смисъл и при какви условия."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "teoriya-formalen-model": {
      "key": "teoriya-formalen-model",
      "slug": "/teoriya/formalen-model/",
      "nav": "Формален модел",
      "title": "Формален модел и терминология",
      "level": "Mixed",
      "parent": "teoriya",
      "summary": "Формалният модел дефинира genotype space, phenotype space, decode function и fitness mapping.",
      "bullets": [
        "Разграничете parent selection от survivor selection.",
        "Decoder и repair могат да са критични части от алгоритъма.",
        "Формалният език улеснява сравненията между variants."
      ],
      "example": "При random keys decoder-ът превръща real-valued genome в валидна permutation чрез сортиране.",
      "diagram": null,
      "equations": [
        "phi: G -> X",
        "F(g) = f(phi(g))"
      ],
      "tables": [],
      "children": [],
      "topSection": "teoriya",
      "readings": [
        {
          "label": "Michael Vose - The Simple Genetic Algorithm: Foundations and Theory",
          "href": "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "fitness"
      ],
      "relatedPrimary": [
        "predstavyane",
        "ga",
        "fitnes"
      ],
      "relatedSecondary": [
        "teoriya-schema-theorem",
        "implementaciya-psevdokod",
        "prilozheniya-sql"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Формалният модел дефинира genotype space, phenotype space, decode function и fitness mapping.",
            "Тази страница дава точния език, с който по-късно се говори за представяне, decode и [[fitness]]. Без този език много по-късни теми изглеждат по-трудни, отколкото всъщност са.",
            "Не е нужно да мислите за формалния модел като за нещо страшно. Той просто подрежда какво е кодът на решението, какво е самото решение и как се минава от едното към другото."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Разграничете parent selection от survivor selection.",
            "Decoder и repair могат да са критични части от алгоритъма.",
            "Формалният език улеснява сравненията между variants."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук най-важното е да не смесвате представянето със задачата. [[genotype]] е кодът, с който работи алгоритъмът, а [[phenotype]] е реалното решение, което интересува задачата.",
            "Когато това разграничение е ясно, по-лесно се вижда защо една и съща задача може да има различни представяния и защо decode функцията понякога е толкова важна, колкото и самите оператори."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези две формули са основата на страницата. Първата казва как минавате от кодираното решение към реалното, а втората показва как quality на реалното решение става quality на генома."
          ],
          "bullets": [],
          "equations": [
            "phi: G -> X",
            "F(g) = f(phi(g))"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "При random keys decoder-ът превръща real-valued genome в валидна permutation чрез сортиране."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
            "Не говорете за convergence без да уточните в какъв смисъл и при какви условия."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "teoriya"
      ]
    },
    "teoriya-schema-theorem": {
      "key": "teoriya-schema-theorem",
      "slug": "/teoriya/schema-theorem/",
      "nav": "Schema theorem",
      "title": "Схеми и Schema Theorem",
      "level": "Advanced",
      "parent": "teoriya",
      "summary": "Schema theorem дава долен праг за очаквания брой копия на schema в следващото поколение при binary GA.",
      "bullets": [
        "Schema описва шаблон върху binary strings.",
        "Selection усилва надсредните schemas.",
        "Crossover и mutation могат да разрушават дълги и високо-редови schemas."
      ],
      "example": "Schema 1**0****1 е по-уязвима при one-point crossover, ако defining length е голяма.",
      "diagram": "theory-map.svg",
      "equations": [
        "H in {0,1,*}^L",
        "o(H) = брой фиксирани позиции в H",
        "delta(H) = разстоянието между първата и последната фиксирана позиция",
        "P(schema survives mutation) approx (1 - p_m) ^ o(H)"
      ],
      "tables": [],
      "children": [],
      "topSection": "teoriya",
      "readings": [
        {
          "label": "John Holland - Adaptation in Natural and Artificial Systems",
          "href": "https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Michael Vose - The Simple Genetic Algorithm: Foundations and Theory",
          "href": "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"
        }
      ],
      "glossaryTerms": [
        "schema",
        "GA",
        "crossover",
        "mutation"
      ],
      "relatedPrimary": [
        "teoriya",
        "predstavyane-binarno-diskretno",
        "operatori-krastosvane"
      ],
      "relatedSecondary": [
        "teoriya-sxodimost",
        "operatori-mutaciya",
        "kapani-dizayn"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Schema theorem дава долен праг за очаквания брой копия на schema в следващото поколение при binary GA.",
            "Schema theorem е една от исторически важните идеи в genetic algorithms. Тя се опитва да обясни защо някои полезни частични структури могат да се разпространяват в популацията.",
            "Полезно е да я четете като интуиция с формален вкус, а не като универсално доказателство за успеха на всеки [[GA]]."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Schema описва шаблон върху binary strings.",
            "Selection усилва надсредните schemas.",
            "Crossover и mutation могат да разрушават дълги и високо-редови schemas."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук е добре да си представите schema като шаблон, а не като едно конкретно решение. Така вместо да следите един индивид, започвате да следите как се държи цял клас от сходни индивиди.",
            "Именно тук се вижда и защо редът на schema и defining length имат значение: те показват колко лесно [[crossover]] и [[mutation]] могат да разрушат полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Формулите тук имат една задача: да покажат как се описва schema и как mutation или crossover влияят върху шанса тя да оцелее. Подходът е полезен за мислене, но не трябва да се чете като пълно описание на динамиката."
          ],
          "bullets": [],
          "equations": [
            "H in {0,1,*}^L",
            "o(H) = брой фиксирани позиции в H",
            "delta(H) = разстоянието между първата и последната фиксирана позиция",
            "P(schema survives mutation) approx (1 - p_m) ^ o(H)"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Schema 1**0****1 е по-уязвима при one-point crossover, ако defining length е голяма."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
            "Не говорете за convergence без да уточните в какъв смисъл и при какви условия."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "teoriya"
      ]
    },
    "teoriya-sxodimost": {
      "key": "teoriya-sxodimost",
      "slug": "/teoriya/sxodimost/",
      "nav": "Сходимост",
      "title": "Маркови модели и сходимост",
      "level": "Advanced",
      "parent": "teoriya",
      "summary": "GA може да се моделира като stochastic process върху популации и така да се говори по-ясно за convergence и expected hitting time.",
      "bullets": [
        "Ненулева mutation променя значението на convergence.",
        "Elitism намалява риска да загубите най-доброто решение.",
        "Практическият фокус често е probability of success до budget."
      ],
      "example": "Вместо да обещавате гарантирана победа, измервайте вероятност за достигане на target до фиксиран budget.",
      "diagram": null,
      "equations": [
        "P(S_(t+1) | S_t)",
        "P(success by budget B)"
      ],
      "tables": [],
      "children": [],
      "topSection": "teoriya",
      "readings": [
        {
          "label": "Michael Vose - The Simple Genetic Algorithm: Foundations and Theory",
          "href": "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        }
      ],
      "glossaryTerms": [
        "elitism",
        "mutation",
        "GA"
      ],
      "relatedPrimary": [
        "parametri-sxodimost-diversitet",
        "ocenyavane-metriki-ednocel",
        "teoriya"
      ],
      "relatedSecondary": [
        "ga-kanonichen-proces",
        "kapani-ocenyavane",
        "ocenyavane-slojnost"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "GA може да се моделира като stochastic process върху популации и така да се говори по-ясно за convergence и expected hitting time.",
            "Когато се говори за сходимост, лесно е да се мисли, че алгоритъмът просто „стига до отговора и спира“. При [[GA]] това често не е точната картина, защото има случайност и mutation.",
            "Затова тук сходимостта се гледа по-внимателно: като вероятност, като време до target или като поведение при определени правила за оцеляване."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Ненулева mutation променя значението на convergence.",
            "Elitism намалява риска да загубите най-доброто решение.",
            "Практическият фокус често е probability of success до budget."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Полезно е да приемете, че при ненулева [[mutation]] дори доброто решение не е завинаги защитено. Алгоритъмът може да го загуби, освен ако design-ът не пази част от най-доброто.",
            "Точно затова [[elitism]] и вероятността за успех до даден budget стават толкова важни. Те казват повече за реалното поведение на алгоритъма от твърдението „конвергира“. "
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не са само теория заради самата теория. Те помагат да формулирате как популацията се променя във времето и какво значи да стигнете до добър резултат с ограничен бюджет."
          ],
          "bullets": [],
          "equations": [
            "P(S_(t+1) | S_t)",
            "P(success by budget B)"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Вместо да обещавате гарантирана победа, измервайте вероятност за достигане на target до фиксиран budget."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
            "Не говорете за convergence без да уточните в какъв смисъл и при какви условия."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "teoriya"
      ]
    },
    "teoriya-no-free-lunch": {
      "key": "teoriya-no-free-lunch",
      "slug": "/teoriya/no-free-lunch/",
      "nav": "NFL",
      "title": "No Free Lunch",
      "level": "Mixed",
      "parent": "teoriya",
      "summary": "No Free Lunch theorem показва, че няма универсално най-добър optimizer върху всички възможни функции.",
      "bullets": [
        "Успехът идва от bias към конкретен клас задачи.",
        "Encoding, operators и fitness shaping носят този bias.",
        "Методологията за benchmarking трябва да е прозрачна."
      ],
      "example": "Истинският engineering въпрос не е кой е универсално best, а кой е най-подходящ за дадения problem class.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "teoriya",
      "readings": [
        {
          "label": "Wolpert and Macready - No Free Lunch Theorems for Optimization",
          "href": "https://www.cs.ubc.ca/~hutter/earg/papers07/00585893.pdf"
        },
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        }
      ],
      "glossaryTerms": [
        "GA",
        "schema",
        "elitism",
        "decoder"
      ],
      "relatedPrimary": [
        "teoriya",
        "teoriya-formalen-model",
        "teoriya-schema-theorem",
        "teoriya-sxodimost"
      ],
      "relatedSecondary": [
        "ga",
        "parametri",
        "ocenyavane"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "No Free Lunch theorem показва, че няма универсално най-добър optimizer върху всички възможни функции.",
            "Теорията тук не е украса. Тя помага да се види кои обяснения са добра интуиция и кои вече са по-строги твърдения.",
            "Този раздел учи студента да различава исторически идеи, формални модели и реални изводи за това как се проектира алгоритъм."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Успехът идва от bias към конкретен клас задачи.",
            "Encoding, operators и fitness shaping носят този bias.",
            "Методологията за benchmarking трябва да е прозрачна."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Този раздел учи студента да различава исторически идеи, формални модели и реални изводи за това как се проектира алгоритъм."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Истинският engineering въпрос не е кой е универсално best, а кой е най-подходящ за дадения problem class."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
            "Не говорете за convergence без да уточните в какъв смисъл и при какви условия."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "teoriya"
      ]
    },
    "predstavyane": {
      "key": "predstavyane",
      "slug": "/predstavyane/",
      "nav": "Представяния",
      "title": "Представяния и кодиране",
      "level": "Mixed",
      "parent": "home",
      "summary": "Представянето определя как е записано решението и как операторите действат върху него.",
      "bullets": [
        "Binary encoding е удобен за schema-style reasoning.",
        "Real-coded GA избягва излишна дискретизация.",
        "Permutation и tree encodings искат специални operators."
      ],
      "example": "Ако задачата е избор на характеристики, бинарното представяне е естествено: всеки бит казва дали нещо участва или не. Ако задачата е подреждане на градове или операции, трябва представяне, което пази валидната последователност. Това показва, че кодиране, което е удобно за една задача, може да е лошо за друга.",
      "diagram": "representation-overview.svg",
      "equations": [],
      "tables": [
        "representations"
      ],
      "children": [
        "predstavyane-binarno-diskretno",
        "predstavyane-realno-kodirani",
        "predstavyane-permutacionni",
        "predstavyane-random-keys",
        "predstavyane-genetic-programming"
      ],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        },
        {
          "label": "James Bean - Random Keys for Sequencing and Optimization",
          "href": "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"
        },
        {
          "label": "John Koza - Genetic Programming",
          "href": "https://mitpress.mit.edu/9780262527910/genetic-programming/"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane-binarno-diskretno",
        "predstavyane-realno-kodirani",
        "predstavyane-permutacionni",
        "predstavyane-random-keys"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: начинът, по който записвате решението, променя как алгоритъмът търси.",
          "paragraphs": [
            "Представянето определя как е записано решението и как операторите действат върху него.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: начинът на кодиране влияе пряко колко добре алгоритъмът намира добри решения.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Binary encoding е удобен за schema-style reasoning.",
            "Real-coded GA избягва излишна дискретизация.",
            "Permutation и tree encodings искат специални operators."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако задачата е избор на характеристики, бинарното представяне е естествено: всеки бит казва дали нещо участва или не. Ако задачата е подреждане на градове или операции, трябва представяне, което пази валидната последователност. Това показва, че кодиране, което е удобно за една задача, може да е лошо за друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "predstavyane-binarno-diskretno": {
      "key": "predstavyane-binarno-diskretno",
      "slug": "/predstavyane/binarno-diskretno/",
      "nav": "Бинарно/дискретно",
      "title": "Бинарно и дискретно кодиране",
      "level": "Beginner",
      "parent": "predstavyane",
      "summary": "Binary и дискретните encodings са историческият стандарт за GA и естествен дом за schema-based intuition.",
      "bullets": [
        "Bit-flip mutation е лесна за разбиране и анализ.",
        "Hamming distance е проста мярка за близост.",
        "Feature selection е класически пример за binary representation."
      ],
      "example": "При OneMax всеки низ съдържа само 0 и 1, а fitness е броят на единиците. Низът 101010 има fitness 3, а низът 111110 има fitness 5. Така лесно виждате как алгоритъмът се движи към по-добри решения чрез повече единици.",
      "diagram": null,
      "equations": [
        "OneMax: f(x) = sum_i x_i",
        "p_m ≈ 1 / L"
      ],
      "tables": [],
      "children": [],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane",
        "predstavyane-realno-kodirani",
        "predstavyane-permutacionni",
        "predstavyane-random-keys"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Binary и дискретните encodings са историческият стандарт за GA и естествен дом за schema-based intuition.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: бинарното кодиране е лесно за работа и показва ясно как търсенето се подобрява.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Bit-flip mutation е лесна за разбиране и анализ.",
            "Hamming distance е проста мярка за близост.",
            "Feature selection е класически пример за binary representation."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "OneMax: f(x) = sum_i x_i",
            "p_m ≈ 1 / L"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "При OneMax всеки низ съдържа само 0 и 1, а fitness е броят на единиците. Низът 101010 има fitness 3, а низът 111110 има fitness 5. Така лесно виждате как алгоритъмът се движи към по-добри решения чрез повече единици."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "predstavyane"
      ]
    },
    "predstavyane-realno-kodirani": {
      "key": "predstavyane-realno-kodirani",
      "slug": "/predstavyane/realno-kodirani/",
      "nav": "Реално-кодирани",
      "title": "Реално-кодирани ГА",
      "level": "Mixed",
      "parent": "predstavyane",
      "summary": "Real-coded GA работи директно с continuous parameters и често използва SBX и polynomial mutation.",
      "bullets": [
        "Избягвате груба бинаризация на continuous variables.",
        "Constraint handling става особено важен.",
        "Engineering tuning задачите естествено попадат тук."
      ],
      "example": "При настройване на PID регулатор едно решение може да е тройката Kp, Ki и Kd. Алгоритъмът сравнява различни числови комбинации и пази тези, които дават по-добро управление. Това е по-естествено от бинаризиране, защото параметрите по природа са реални числа.",
      "diagram": "representation-overview.svg",
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "Deb and Agrawal - Simulated Binary Crossover",
          "href": "https://www.complex-systems.com/abstracts/v09_i02_a02/"
        },
        {
          "label": "GA-базирана оптимизация на PI/PID регулатори",
          "href": "https://e-university.tu-sofia.bg/e-publ/files/1064_Yordanova_Georgieva_article_E_Eotchet.pdf"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane",
        "predstavyane-binarno-diskretno",
        "predstavyane-permutacionni",
        "predstavyane-random-keys"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Real-coded GA работи директно с continuous parameters и често използва SBX и polynomial mutation.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: реалното кодиране пази числовите параметри в естествения им вид.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Избягвате груба бинаризация на continuous variables.",
            "Constraint handling става особено важен.",
            "Engineering tuning задачите естествено попадат тук."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "При настройване на PID регулатор едно решение може да е тройката Kp, Ki и Kd. Алгоритъмът сравнява различни числови комбинации и пази тези, които дават по-добро управление. Това е по-естествено от бинаризиране, защото параметрите по природа са реални числа."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "predstavyane"
      ]
    },
    "predstavyane-permutacionni": {
      "key": "predstavyane-permutacionni",
      "slug": "/predstavyane/permutacionni/",
      "nav": "Пермутации",
      "title": "Пермутационни представяния",
      "level": "Mixed",
      "parent": "predstavyane",
      "summary": "Permutation problems изискват валидност: всяка стойност трябва да се появи точно веднъж.",
      "bullets": [
        "Naive one-point crossover често създава дубликати.",
        "OX и PMX пазят важни свойства на permutation.",
        "Repair може да вкара bias и допълнителен overhead."
      ],
      "example": "Ако задачата е да подредите операции или градове, всяка позиция в реда е важна и не бива да се повтаря. Добър пример е route или join ordering, където едно повторение или липсващ елемент прави решението невалидно. Затова тук операторите трябва да пазят структурата на подредбата.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        },
        {
          "label": "James Bean - Random Keys for Sequencing and Optimization",
          "href": "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane",
        "predstavyane-binarno-diskretno",
        "predstavyane-realno-kodirani",
        "predstavyane-random-keys"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Permutation problems изискват валидност: всяка стойност трябва да се появи точно веднъж.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: при подредби операторите трябва да пазят валидния ред, а не само да смесват стойности.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Naive one-point crossover често създава дубликати.",
            "OX и PMX пазят важни свойства на permutation.",
            "Repair може да вкара bias и допълнителен overhead."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако задачата е да подредите операции или градове, всяка позиция в реда е важна и не бива да се повтаря. Добър пример е route или join ordering, където едно повторение или липсващ елемент прави решението невалидно. Затова тук операторите трябва да пазят структурата на подредбата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "predstavyane"
      ]
    },
    "predstavyane-random-keys": {
      "key": "predstavyane-random-keys",
      "slug": "/predstavyane/random-keys/",
      "nav": "Random keys",
      "title": "Random keys и индиректно кодиране",
      "level": "Advanced",
      "parent": "predstavyane",
      "summary": "Random keys използва real-valued genome и decoder, който чрез sorting създава валидна permutation.",
      "bullets": [
        "Validity идва от decoder-а, не от operator-а.",
        "Можете да използвате real-coded operators.",
        "Tie-breaking rules трябва да са ясно описани."
      ],
      "example": "Ключове [0.2, 0.9, 0.1] могат да се декодират до permutation [3, 1, 2].",
      "diagram": null,
      "equations": [
        "pi = argsort(k)"
      ],
      "tables": [],
      "children": [],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "James Bean - Random Keys for Sequencing and Optimization",
          "href": "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane",
        "predstavyane-binarno-diskretno",
        "predstavyane-realno-kodirani",
        "predstavyane-permutacionni"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Random keys използва real-valued genome и decoder, който чрез sorting създава валидна permutation.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Validity идва от decoder-а, не от operator-а.",
            "Можете да използвате real-coded operators.",
            "Tie-breaking rules трябва да са ясно описани."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "pi = argsort(k)"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ключове [0.2, 0.9, 0.1] могат да се декодират до permutation [3, 1, 2]."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "predstavyane"
      ]
    },
    "predstavyane-genetic-programming": {
      "key": "predstavyane-genetic-programming",
      "slug": "/predstavyane/genetic-programming/",
      "nav": "GP",
      "title": "Дървета и Genetic Programming",
      "level": "Mixed",
      "parent": "predstavyane",
      "summary": "При GP индивидите са syntax trees и variation оперира върху поддървета вместо върху фиксирани хромозоми.",
      "bullets": [
        "Subtree crossover е централният operator.",
        "Bloat е реален риск при tree-based search.",
        "Type safety и execution cost са важни implementation теми."
      ],
      "example": "Symbolic regression търси expression tree, който минимизира prediction error.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "predstavyane",
      "readings": [
        {
          "label": "John Koza - Genetic Programming",
          "href": "https://mitpress.mit.edu/9780262527910/genetic-programming/"
        },
        {
          "label": "DEAP Documentation",
          "href": "https://deap.readthedocs.io/"
        }
      ],
      "glossaryTerms": [
        "genotype",
        "phenotype",
        "decoder",
        "Hamming distance",
        "SBX"
      ],
      "relatedPrimary": [
        "predstavyane",
        "predstavyane-binarno-diskretno",
        "predstavyane-realno-kodirani",
        "predstavyane-permutacionni"
      ],
      "relatedSecondary": [
        "operatori",
        "fitnes",
        "prilozheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "При GP индивидите са syntax trees и variation оперира върху поддървета вместо върху фиксирани хромозоми.",
            "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Subtree crossover е централният operator.",
            "Bloat е реален риск при tree-based search.",
            "Type safety и execution cost са важни implementation теми."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Symbolic regression търси expression tree, който минимизира prediction error."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
            "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "predstavyane"
      ]
    },
    "operatori": {
      "key": "operatori",
      "slug": "/operatori/",
      "nav": "Оператори",
      "title": "Оператори",
      "level": "Mixed",
      "parent": "home",
      "summary": "Selection, crossover и mutation движат търсенето, но работят добре само ако пасват на представянето на задачата.",
      "bullets": [
        "Selection задава натиск към по-добрите решения.",
        "Crossover комбинира части от вече намерена структура.",
        "Mutation пази разнообразието и помага да не забиете твърде рано."
      ],
      "example": "Представете си двама родители, които вече имат полезни части в решението си. Кръстосването може да събере тези части, а мутацията може да добави малка полезна промяна. Ако операторът не пасва на представянето, лесно се получават невалидни или безсмислени решения. Затова операторите трябва да се избират според задачата, а не по навик.",
      "diagram": "operators-overview.svg",
      "equations": [],
      "tables": [],
      "children": [
        "operatori-selekciya",
        "operatori-krastosvane",
        "operatori-mutaciya"
      ],
      "topSection": "operatori",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        }
      ],
      "glossaryTerms": [
        "selection",
        "crossover",
        "mutation",
        "SBX"
      ],
      "relatedPrimary": [
        "operatori-selekciya",
        "operatori-krastosvane",
        "operatori-mutaciya"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "parametri"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: операторите решават кои решения оцеляват, как се смесват и как се променят.",
          "paragraphs": [
            "Selection, crossover и mutation движат търсенето, но работят добре само ако пасват на представянето на задачата.",
            "Много хора първо гледат [[crossover]] и [[mutation]], защото те се виждат най-лесно. Но сами по себе си тези оператори не казват много, ако не знаете как е кодирано решението и как се смята [[fitness]].",
            "Полезно е да ги четете по роля: [[selection]] избира кой ще влияе повече, recombination смесва вече намерена полезна структура, а mutation пази шанс за нови посоки на търсене."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: операторите определят дали добрите части на решенията ще се запазят и развият.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Selection задава натиск към по-добрите решения.",
            "Crossover комбинира части от вече намерена структура.",
            "Mutation пази разнообразието и помага да не забиете твърде рано."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Когато мислите за оператор, питайте се дали той прави смислени промени за конкретната задача. Добрият оператор не чупи без нужда валидността на решенията. Той не прави и напълно случайни скокове.",
            "Точно тук се вижда разликата между учебен пример и добра практическа реализация."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си двама родители, които вече имат полезни части в решението си. Кръстосването може да събере тези части, а мутацията може да добави малка полезна промяна. Ако операторът не пасва на представянето, лесно се получават невалидни или безсмислени решения. Затова операторите трябва да се избират според задачата, а не по навик."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не настройвайте [[selection]], [[crossover]] и [[mutation]] изолирано. Те влияят като система.",
            "Не приемайте, че един оператор е good practice за всяка задача и всяко представяне."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "operatori-selekciya": {
      "key": "operatori-selekciya",
      "slug": "/operatori/selekciya/",
      "nav": "Селекция",
      "title": "Селекция",
      "level": "Mixed",
      "parent": "operatori",
      "summary": "Selection контролира кои индивиди получават шанс да влияят на следващото поколение.",
      "bullets": [
        "Roulette и SUS зависят от scaling.",
        "Rank и tournament често са по-стабилни.",
        "Selection pressure трябва да се настройва заедно с mutation."
      ],
      "example": "При tournament selection избирате няколко кандидата и оставяте най-добрия да спечели. Ако турнирът е с 2-4 участника, натискът често е достатъчен, без да убива твърде рано разнообразието. Така виждате как селекцията не просто избира, а настройва колко силно популацията следва добрите решения.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "operatori",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        }
      ],
      "glossaryTerms": [
        "selection",
        "crossover",
        "mutation",
        "SBX"
      ],
      "relatedPrimary": [
        "operatori",
        "operatori-krastosvane",
        "operatori-mutaciya"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "parametri"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Selection контролира кои индивиди получават шанс да влияят на следващото поколение.",
            "Операторите са най-видимата част на алгоритъма, но сами по себе си не са магия. Те работят добре само ако са съгласувани с представянето и с начина, по който се смята [[fitness]].",
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: селекцията дава повече шанс на добрите решения да оставят потомство.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Roulette и SUS зависят от scaling.",
            "Rank и tournament често са по-стабилни.",
            "Selection pressure трябва да се настройва заедно с mutation."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "При tournament selection избирате няколко кандидата и оставяте най-добрия да спечели. Ако турнирът е с 2-4 участника, натискът често е достатъчен, без да убива твърде рано разнообразието. Така виждате как селекцията не просто избира, а настройва колко силно популацията следва добрите решения."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не настройвайте [[selection]], [[crossover]] и [[mutation]] изолирано. Те влияят като система.",
            "Не приемайте, че един оператор е good practice за всяка задача и всяко представяне."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "operatori"
      ]
    },
    "operatori-krastosvane": {
      "key": "operatori-krastosvane",
      "slug": "/operatori/krastosvane/",
      "nav": "Кръстосване",
      "title": "Кръстосване",
      "level": "Mixed",
      "parent": "operatori",
      "summary": "Crossover комбинира information от родители, но само ако representation го позволява смислено.",
      "bullets": [
        "Binary one-point и uniform crossover са класически варианти.",
        "SBX е стандартен choice за real-coded GA.",
        "Permutations изискват order-aware operators като OX и PMX."
      ],
      "example": "При бинарно кодиране можете да разрежете два родителя в една точка и да размените опашките им. Така едно дете може да вземе началото от единия и края от другия. При реално кодиране SBX прави подобна идея, но върху числа. Кръстосването е полезно, когато наистина може да събере добри части от различни решения.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "operatori",
      "readings": [
        {
          "label": "Deb and Agrawal - Simulated Binary Crossover",
          "href": "https://www.complex-systems.com/abstracts/v09_i02_a02/"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        }
      ],
      "glossaryTerms": [
        "selection",
        "crossover",
        "mutation",
        "SBX"
      ],
      "relatedPrimary": [
        "operatori",
        "operatori-selekciya",
        "operatori-mutaciya"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "parametri"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Crossover комбинира information от родители, но само ако representation го позволява смислено.",
            "Операторите са най-видимата част на алгоритъма, но сами по себе си не са магия. Те работят добре само ако са съгласувани с представянето и с начина, по който се смята [[fitness]].",
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: кръстосването събира полезни части от различни решения.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Binary one-point и uniform crossover са класически варианти.",
            "SBX е стандартен choice за real-coded GA.",
            "Permutations изискват order-aware operators като OX и PMX."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "При бинарно кодиране можете да разрежете два родителя в една точка и да размените опашките им. Така едно дете може да вземе началото от единия и края от другия. При реално кодиране SBX прави подобна идея, но върху числа. Кръстосването е полезно, когато наистина може да събере добри части от различни решения."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не настройвайте [[selection]], [[crossover]] и [[mutation]] изолирано. Те влияят като система.",
            "Не приемайте, че един оператор е good practice за всяка задача и всяко представяне."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "operatori"
      ]
    },
    "operatori-mutaciya": {
      "key": "operatori-mutaciya",
      "slug": "/operatori/mutaciya/",
      "nav": "Мутация",
      "title": "Мутация",
      "level": "Mixed",
      "parent": "operatori",
      "summary": "Mutation е главният механизъм за diversity maintenance и за избягване на твърде ранно застиване.",
      "bullets": [
        "Твърде ниска mutation води до homogenization.",
        "Твърде висока mutation прилича на random search.",
        "Формата на mutation зависи силно от representation."
      ],
      "example": "Ако бинарният низ е с дължина 100 и p_m = 0.01, средно се променя около един бит. Това е достатъчно, за да се появи нова посока на търсене, без да се разруши цялото решение. Така мутацията действа като малка корекция, а не като пълно рестартиране.",
      "diagram": null,
      "equations": [
        "p_m ≈ 1 / L"
      ],
      "tables": [],
      "children": [],
      "topSection": "operatori",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Deb and Agrawal - Simulated Binary Crossover",
          "href": "https://www.complex-systems.com/abstracts/v09_i02_a02/"
        }
      ],
      "glossaryTerms": [
        "selection",
        "crossover",
        "mutation",
        "SBX"
      ],
      "relatedPrimary": [
        "operatori",
        "operatori-selekciya",
        "operatori-krastosvane"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "parametri"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Mutation е главният механизъм за diversity maintenance и за избягване на твърде ранно застиване.",
            "Операторите са най-видимата част на алгоритъма, но сами по себе си не са магия. Те работят добре само ако са съгласувани с представянето и с начина, по който се смята [[fitness]].",
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: мутацията помага алгоритъмът да не зацикли в слаби решения.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Твърде ниска mutation води до homogenization.",
            "Твърде висока mutation прилича на random search.",
            "Формата на mutation зависи силно от representation."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "p_m ≈ 1 / L"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако бинарният низ е с дължина 100 и p_m = 0.01, средно се променя около един бит. Това е достатъчно, за да се появи нова посока на търсене, без да се разруши цялото решение. Така мутацията действа като малка корекция, а не като пълно рестартиране."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не настройвайте [[selection]], [[crossover]] и [[mutation]] изолирано. Те влияят като система.",
            "Не приемайте, че един оператор е good practice за всяка задача и всяко представяне."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "operatori"
      ]
    },
    "fitnes": {
      "key": "fitnes",
      "slug": "/fitnes/",
      "nav": "Фитнес",
      "title": "Фитнес и целеви функции",
      "level": "Mixed",
      "parent": "home",
      "summary": "Fitness превежда реалния проблем в числена оценка, по която алгоритъмът разпознава по-добрите решения.",
      "bullets": [
        "Разпределението на fitness влияе директно на selection.",
        "Scaling и normalization често са нужни, а не допълнение по избор.",
        "Работата с ограничения е част от fitness design, а не кръпка накрая."
      ],
      "example": "Представете си две решения, които изглеждат близки по качество, но едното нарушава важно ограничение. Ако fitness не отчита това правилно, алгоритъмът може да избира грешния кандидат. Така дори добри оператори и добро кодиране няма да помогнат, ако самата оценка е подвеждаща.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "fitnes-skalirane",
        "fitnes-ogranicheniya"
      ],
      "topSection": "fitnes",
      "readings": [
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        },
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "repair",
        "Pareto front"
      ],
      "relatedPrimary": [
        "fitnes-skalirane",
        "fitnes-ogranicheniya",
        "operatori-selekciya"
      ],
      "relatedSecondary": [
        "parametri",
        "kapani",
        "ocenyavane"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: fitness казва на алгоритъма кое решение е по-добро.",
          "paragraphs": [
            "Fitness превежда реалния проблем в числена оценка, по която алгоритъмът разпознава по-добрите решения.",
            "Разделът за [[fitness]] е решаващ, защото точно тук реалният проблем се превежда на езика на алгоритъма. Ако този превод е слаб, алгоритъмът няма ясна посока.",
            "В практиката [[fitness]] рядко е просто „вземи функцията и готово“. Често има скалиране, penalties, работа с ограничения и шум."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: добрият fitness дава ясна посока на търсенето.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Разпределението на fitness влияе директно на selection.",
            "Scaling и normalization често са нужни, а не допълнение по избор.",
            "Работата с ограничения е част от fitness design, а не кръпка накрая."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-важната идея тук е, че [[selection]] не вижда самия свят, а само числата, които му давате чрез [[fitness]]. Затова скалирането и добрата обработка на стойностите променят самото поведение на търсенето.",
            "Оттук идва и връзката към benchmarking: ако [[fitness]] е построен по различен начин, трябва честно да покажете как после сравнявате алгоритмите."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си две решения, които изглеждат близки по качество, но едното нарушава важно ограничение. Ако fitness не отчита това правилно, алгоритъмът може да избира грешния кандидат. Така дори добри оператори и добро кодиране няма да помогнат, ако самата оценка е подвеждаща."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не позволявайте на penalty термина да скрие полезния signal между иначе добри решения.",
            "Не сравнявайте raw objective values без да мислите за scaling и noise."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "fitnes-skalirane": {
      "key": "fitnes-skalirane",
      "slug": "/fitnes/skalirane/",
      "nav": "Скалиране",
      "title": "Дефиниране и скалиране",
      "level": "Mixed",
      "parent": "fitnes",
      "summary": "Scaling превръща суровите objective values в стабилен signal за selection.",
      "bullets": [
        "Rank-based approaches са по-устойчиви при широки диапазони.",
        "Noisy objectives често искат averaging или repeated evaluation.",
        "Direct reciprocal transforms могат да компресират твърде силно."
      ],
      "example": "Ако cost е между 1 и 1 000 000, rank selection често е по-стабилна от crude inversion.",
      "diagram": null,
      "equations": [
        "F(x) = 1 / (1 + c(x))"
      ],
      "tables": [],
      "children": [],
      "topSection": "fitnes",
      "readings": [
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "selection"
      ],
      "relatedPrimary": [
        "fitnes",
        "operatori-selekciya",
        "kapani-dizayn"
      ],
      "relatedSecondary": [
        "fitnes-ogranicheniya",
        "ocenyavane-metriki-ednocel",
        "implementaciya-reproducibility"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Scaling превръща суровите objective values в стабилен signal за selection.",
            "Скалирането е нужно, когато суровите стойности не са удобни за selection. Ако едни решения изглеждат прекалено силни само заради мащаба на числата, търсенето може да стане нестабилно.",
            "Тук идеята не е да смените задачата, а да направите сигнала към алгоритъма по-полезен."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: скалирането прави разликата между решенията по-полезна за селекцията.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Rank-based approaches са по-устойчиви при широки диапазони.",
            "Noisy objectives често искат averaging или repeated evaluation.",
            "Direct reciprocal transforms могат да компресират твърде силно."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Когато минавате от минимизация към максимизация, това не е просто дребен технически ход. Формата на преобразуването може да усили или да отслаби разликите между решенията.",
            "Затова доброто скалиране не е само математика, а и практическо решение за това какъв натиск искате да има върху популацията."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Показаната формула е пример как стойност на цена може да се превърне в по-удобен [[fitness]] сигнал. По-важно от самата формула е да разберете как тя променя разликите между решенията."
          ],
          "bullets": [],
          "equations": [
            "F(x) = 1 / (1 + c(x))"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако cost е между 1 и 1 000 000, rank selection често е по-стабилна от crude inversion."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не позволявайте на penalty термина да скрие полезния signal между иначе добри решения.",
            "Не сравнявайте raw objective values без да мислите за scaling и noise."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "fitnes"
      ]
    },
    "fitnes-ogranicheniya": {
      "key": "fitnes-ogranicheniya",
      "slug": "/fitnes/ogranicheniya/",
      "nav": "Ограничения",
      "title": "Ограничения",
      "level": "Advanced",
      "parent": "fitnes",
      "summary": "Constraint handling включва penalties, Deb feasibility rules, repair и constrained dominance.",
      "bullets": [
        "Penalty term трябва да е калибриран внимателно.",
        "Deb-style rules избягват ръчно penalty tuning в много случаи.",
        "Repair може да е полезен, но понякога въвежда bias."
      ],
      "example": "Представете си решение, което е почти добро, но нарушава ограничение само с малко. Ако наказанието е прекалено силно, алгоритъмът ще го отхвърли твърде рано. Ако е прекалено слабо, ще допуска лоши кандидати. Примерът тук е именно балансът между полезна информация и твърде грубо наказание.",
      "diagram": null,
      "equations": [
        "F(x) = f(x) - lambda × violation(x)",
        "feasible решение се предпочита пред infeasible решение"
      ],
      "tables": [],
      "children": [],
      "topSection": "fitnes",
      "readings": [
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "repair",
        "Pareto front"
      ],
      "relatedPrimary": [
        "fitnes",
        "razshireniya-multiobjective",
        "kapani-dizayn"
      ],
      "relatedSecondary": [
        "prilozheniya-inzhenerstvo",
        "parametri",
        "implementaciya-psevdokod"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Constraint handling включва penalties, Deb feasibility rules, repair и constrained dominance.",
            "Ограниченията правят задачата по-реалистична, но и по-трудна. Не стига едно решение да е добро, то трябва и да е допустимо.",
            "Тази страница показва защо penalty подходите са удобни, но и защо понякога са трудни за настройване."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: ограниченията пазят алгоритъма да не избира добри на вид, но невалидни решения.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Penalty term трябва да е калибриран внимателно.",
            "Deb-style rules избягват ръчно penalty tuning в много случаи.",
            "Repair може да е полезен, но понякога въвежда bias."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Когато penalty term е твърде голям, всички невалидни решения изглеждат еднакво лоши и алгоритъмът губи полезна информация. Когато е твърде малък, получавате добри на вид, но недопустими решения.",
            "Точно затова Deb-style rules са толкова важни в практиката: те дават по-ясен ред за сравнение без да ви карат винаги да измисляте сложна penalty схема."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Формулата тук е типичен пример за penalty подход. Полезно е да я четете така: базовата цел се коригира със стойност, която наказва нарушението на ограниченията."
          ],
          "bullets": [],
          "equations": [
            "F(x) = f(x) - lambda × violation(x)",
            "feasible решение се предпочита пред infeasible решение"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си решение, което е почти добро, но нарушава ограничение само с малко. Ако наказанието е прекалено силно, алгоритъмът ще го отхвърли твърде рано. Ако е прекалено слабо, ще допуска лоши кандидати. Примерът тук е именно балансът между полезна информация и твърде грубо наказание."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не позволявайте на penalty термина да скрие полезния signal между иначе добри решения.",
            "Не сравнявайте raw objective values без да мислите за scaling и noise."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "fitnes"
      ]
    },
    "parametri": {
      "key": "parametri",
      "slug": "/parametri/",
      "nav": "Параметри",
      "title": "Параметри и динамика",
      "level": "Mixed",
      "parent": "home",
      "summary": "Population size, pressure, crossover, mutation и replacement работят като система, а не като отделни копчета.",
      "bullets": [
        "Наблюдавайте best, mean и diversity едновременно.",
        "Parameter control може да е по-добър от static tuning.",
        "Convergence plots без context не са достатъчни."
      ],
      "example": "Ако mutation е твърде ниска, популацията може бързо да стане прекалено еднаква. Ако е твърде висока, добрите решения трудно се запазват. По същия начин по-голяма популация пази повече разнообразие, но струва повече оценки. Примерът показва, че параметрите трябва да се настройват като система.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "parametri-tuning-control",
        "parametri-sxodimost-diversitet",
        "parametri-diversitet-mehanizmi"
      ],
      "topSection": "parametri",
      "readings": [
        {
          "label": "Eiben et al. - Parameter Control in Evolutionary Algorithms",
          "href": "https://www.cs.vu.nl/~gusz/papers/2007-eib-mich-schoen-smit-chap.pdf"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "pygmo Documentation",
          "href": "https://esa.github.io/pygmo2/"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "elitism",
        "island model"
      ],
      "relatedPrimary": [
        "parametri-tuning-control",
        "parametri-sxodimost-diversitet",
        "parametri-diversitet-mehanizmi"
      ],
      "relatedSecondary": [
        "operatori",
        "ocenyavane",
        "kapani"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: параметрите настройват колко бързо алгоритъмът търси и колко разнообразие пази.",
          "paragraphs": [
            "Population size, pressure, crossover, mutation и replacement работят като система, а не като отделни копчета.",
            "Параметрите не са независими копчета. Population size, selection pressure и mutation rate влияят едновременно върху скоростта на convergence, устойчивостта на search и вероятността да изгубите разнообразие твърде рано.",
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: настройките променят баланса между бърз напредък и запазване на разнообразие.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Наблюдавайте best, mean и diversity едновременно.",
            "Parameter control може да е по-добър от static tuning.",
            "Convergence plots без context не са достатъчни."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако mutation е твърде ниска, популацията може бързо да стане прекалено еднаква. Ако е твърде висока, добрите решения трудно се запазват. По същия начин по-голяма популация пази повече разнообразие, но струва повече оценки. Примерът показва, че параметрите трябва да се настройват като система."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не тълкувайте early stagnation автоматично като convergence към нещо добро.",
            "Не променяйте много параметри наведнъж без наблюдение на diversity и budget usage."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "parametri-tuning-control": {
      "key": "parametri-tuning-control",
      "slug": "/parametri/tuning-control/",
      "nav": "Контрол",
      "title": "Настройване и контрол на параметри",
      "level": "Advanced",
      "parent": "parametri",
      "summary": "Разделът сравнява offline tuning с deterministic, adaptive и self-adaptive parameter control.",
      "bullets": [
        "Tuning фиксира стойностите преди старта.",
        "Adaptive control реагира на наблюдавани сигнали.",
        "Self-adaptive control вгражда параметрите в representation."
      ],
      "example": "Проста adaptive схема е да следите разнообразието и да увеличите mutation, когато то падне прекалено ниско. Така не чакате алгоритъмът да зацикли напълно, а реагирате по време на търсенето. Това е добър пример за разликата между статична и адаптивна настройка.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "parametri",
      "readings": [
        {
          "label": "Eiben et al. - Parameter Control in Evolutionary Algorithms",
          "href": "https://www.cs.vu.nl/~gusz/papers/2007-eib-mich-schoen-smit-chap.pdf"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "elitism",
        "island model"
      ],
      "relatedPrimary": [
        "parametri",
        "parametri-sxodimost-diversitet",
        "parametri-diversitet-mehanizmi"
      ],
      "relatedSecondary": [
        "operatori",
        "ocenyavane",
        "kapani"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Разделът сравнява offline tuning с deterministic, adaptive и self-adaptive parameter control.",
            "Параметрите не са независими копчета. Population size, selection pressure и mutation rate влияят едновременно върху скоростта на convergence, устойчивостта на search и вероятността да изгубите разнообразие твърде рано.",
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Tuning фиксира стойностите преди старта.",
            "Adaptive control реагира на наблюдавани сигнали.",
            "Self-adaptive control вгражда параметрите в representation."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Проста adaptive схема е да следите разнообразието и да увеличите mutation, когато то падне прекалено ниско. Така не чакате алгоритъмът да зацикли напълно, а реагирате по време на търсенето. Това е добър пример за разликата между статична и адаптивна настройка."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не тълкувайте early stagnation автоматично като convergence към нещо добро.",
            "Не променяйте много параметри наведнъж без наблюдение на diversity и budget usage."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "parametri"
      ]
    },
    "parametri-sxodimost-diversitet": {
      "key": "parametri-sxodimost-diversitet",
      "slug": "/parametri/sxodimost-diversitet/",
      "nav": "Сходимост и разнообразие",
      "title": "Сходимост и преждевременна конвергенция",
      "level": "Mixed",
      "parent": "parametri",
      "summary": "Практическата convergence diagnosis изисква да следите не само progress, но и loss of diversity.",
      "bullets": [
        "Best и mean fitness трябва да се гледат заедно.",
        "Low heterozygosity е warning signal.",
        "Premature convergence не е равна на успех."
      ],
      "example": "Ако best fitness се подобрява за кратко, но после всички индивиди започнат да си приличат твърде много, това е сигнал за преждевременна конвергенция. В такъв случай проблемът често е в прекалено силен selection pressure, твърде слаба mutation или неподходящо представяне. Така примерът ви учи как да разпознаете проблема по поведението на популацията.",
      "diagram": null,
      "equations": [
        "D = (2/L) × sum_i p_i (1 - p_i)"
      ],
      "tables": [],
      "children": [],
      "topSection": "parametri",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "pygmo Documentation",
          "href": "https://esa.github.io/pygmo2/"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "elitism",
        "island model"
      ],
      "relatedPrimary": [
        "parametri",
        "parametri-tuning-control",
        "parametri-diversitet-mehanizmi"
      ],
      "relatedSecondary": [
        "operatori",
        "ocenyavane",
        "kapani"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Практическата convergence diagnosis изисква да следите не само progress, но и loss of diversity.",
            "Параметрите не са независими копчета. Population size, selection pressure и mutation rate влияят едновременно върху скоростта на convergence, устойчивостта на search и вероятността да изгубите разнообразие твърде рано.",
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Best и mean fitness трябва да се гледат заедно.",
            "Low heterozygosity е warning signal.",
            "Premature convergence не е равна на успех."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "D = (2/L) × sum_i p_i (1 - p_i)"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако best fitness се подобрява за кратко, но после всички индивиди започнат да си приличат твърде много, това е сигнал за преждевременна конвергенция. В такъв случай проблемът често е в прекалено силен selection pressure, твърде слаба mutation или неподходящо представяне. Така примерът ви учи как да разпознаете проблема по поведението на популацията."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не тълкувайте early stagnation автоматично като convergence към нещо добро.",
            "Не променяйте много параметри наведнъж без наблюдение на diversity и budget usage."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "parametri"
      ]
    },
    "parametri-diversitet-mehanizmi": {
      "key": "parametri-diversitet-mehanizmi",
      "slug": "/parametri/diversitet-mehanizmi/",
      "nav": "Механизми",
      "title": "Модели за разнообразие",
      "level": "Advanced",
      "parent": "parametri",
      "summary": "Niching, sharing, crowding и island models пазят множество promising regions вместо population takeover by one lineage.",
      "bullets": [
        "Island models подпомагат и паралелизацията.",
        "Sharing и crowding са distance-aware pressure mechanisms.",
        "Миграционните политики са design choice, а не подробност."
      ],
      "example": "Осем islands с периодична migration е класически работещ модел при скъпи задачи.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "parametri",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "pygmo Documentation",
          "href": "https://esa.github.io/pygmo2/"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "elitism",
        "island model"
      ],
      "relatedPrimary": [
        "parametri",
        "parametri-tuning-control",
        "parametri-sxodimost-diversitet"
      ],
      "relatedSecondary": [
        "operatori",
        "ocenyavane",
        "kapani"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Niching, sharing, crowding и island models пазят множество promising regions вместо population takeover by one lineage.",
            "Параметрите не са независими копчета. Population size, selection pressure и mutation rate влияят едновременно върху скоростта на convergence, устойчивостта на search и вероятността да изгубите разнообразие твърде рано.",
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Island models подпомагат и паралелизацията.",
            "Sharing и crowding са distance-aware pressure mechanisms.",
            "Миграционните политики са design choice, а не подробност."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Осем islands с периодична migration е класически работещ модел при скъпи задачи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не тълкувайте early stagnation автоматично като convergence към нещо добро.",
            "Не променяйте много параметри наведнъж без наблюдение на diversity и budget usage."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "parametri"
      ]
    },
    "razshireniya": {
      "key": "razshireniya",
      "slug": "/razshireniya/",
      "nav": "Разширения",
      "title": "Разширени методи",
      "level": "Mixed",
      "parent": "home",
      "summary": "Разширените методи надграждат каноничния GA чрез local search, Pareto logic или специални survival strategies.",
      "bullets": [
        "Hybridization усилва exploitation.",
        "MOEA работи с fronts вместо единствен optimum.",
        "Много разширения променят survival stage повече от variation stage."
      ],
      "example": "Ако базовият GA намира добри посоки, но спира преди да стигне наистина силни решения, често добавяте local search. Ако имате няколко цели, заменяте едно най-добро решение с набор от компромиси. Така примерът показва защо разширенията съществуват: не за украса, а за конкретни ограничения на базовия подход.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "razshireniya-memetichni",
        "razshireniya-multiobjective"
      ],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        },
        {
          "label": "Kalyanmoy Deb - NSGA-III materials",
          "href": "https://www.egr.msu.edu/~kdeb/papers/k2012016.pdf"
        }
      ],
      "glossaryTerms": [
        "MOEA",
        "Pareto front",
        "NSGA-II",
        "NSGA-III",
        "crowding distance"
      ],
      "relatedPrimary": [
        "razshireniya-memetichni",
        "razshireniya-multiobjective"
      ],
      "relatedSecondary": [
        "teoriya",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Разширените методи надграждат каноничния GA чрез local search, Pareto logic или специални survival strategies.",
            "Разширенията показват кога базовият [[GA]] вече не е достатъчен и какво се печели, когато добавите локално търсене, Pareto ranking или по-специални правила за оцеляване.",
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Hybridization усилва exploitation.",
            "MOEA работи с fronts вместо единствен optimum.",
            "Много разширения променят survival stage повече от variation stage."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако базовият GA намира добри посоки, но спира преди да стигне наистина силни решения, често добавяте local search. Ако имате няколко цели, заменяте едно най-добро решение с набор от компромиси. Така примерът показва защо разширенията съществуват: не за украса, а за конкретни ограничения на базовия подход."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "razshireniya-memetichni": {
      "key": "razshireniya-memetichni",
      "slug": "/razshireniya/memetichni/",
      "nav": "Меметични",
      "title": "Хибридни и меметични алгоритми",
      "level": "Advanced",
      "parent": "razshireniya",
      "summary": "Memetic methods комбинират global population search с local improvement върху избрани индивиди.",
      "bullets": [
        "Трябва да решите върху кои individuals да пускате local search.",
        "Budget split между global и local search е решаващ.",
        "Силен local search може да унищожи exploration."
      ],
      "example": "Често работещ вариант е първо GA да предложи няколко добри кандидата, а после локален метод да доизчисти само най-силните. Ако локалното търсене се пусне върху всички, цената може да стане твърде голяма. Това е добър пример за разделяне на ролите между глобално и локално търсене.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        }
      ],
      "glossaryTerms": [
        "MOEA",
        "Pareto front",
        "NSGA-II",
        "NSGA-III",
        "crowding distance"
      ],
      "relatedPrimary": [
        "razshireniya",
        "razshireniya-multiobjective"
      ],
      "relatedSecondary": [
        "teoriya",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Memetic methods комбинират global population search с local improvement върху избрани индивиди.",
            "Разширенията показват кога базовият [[GA]] вече не е достатъчен и какво се печели, когато добавите локално търсене, Pareto ranking или по-специални правила за оцеляване.",
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Трябва да решите върху кои individuals да пускате local search.",
            "Budget split между global и local search е решаващ.",
            "Силен local search може да унищожи exploration."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Често работещ вариант е първо GA да предложи няколко добри кандидата, а после локален метод да доизчисти само най-силните. Ако локалното търсене се пусне върху всички, цената може да стане твърде голяма. Това е добър пример за разделяне на ролите между глобално и локално търсене."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "razshireniya"
      ]
    },
    "razshireniya-multiobjective": {
      "key": "razshireniya-multiobjective",
      "slug": "/razshireniya/multiobjective/",
      "nav": "Многоцелеви",
      "title": "Многоцелеви ГА",
      "level": "Mixed",
      "parent": "razshireniya",
      "summary": "Multiobjective GA търси Pareto множество от компромисни решения вместо едно единствено най-добро решение.",
      "bullets": [
        "Dominance relation заменя простото подреждане по една стойност.",
        "Разнообразието по фронта е толкова важно, колкото и приближаването към него.",
        "NSGA-II и NSGA-III са сред най-важните отправни алгоритми."
      ],
      "example": "Представете си, че искате едновременно ниска цена и високо качество. Едно решение може да е по-евтино, но по-слабо, а друго по-скъпо, но по-добро. Вместо да изберете само едно число, многоцелевият GA пази няколко разумни компромиса. Така примерът показва защо популацията е естествена за многоцелеви задачи.",
      "diagram": "pareto-front-illustration.svg",
      "equations": [
        "a dominates b if all objectives are no worse and at least one is better"
      ],
      "tables": [],
      "children": [
        "razshireniya-nsga-ii",
        "razshireniya-nsga-iii",
        "razshireniya-drugi-moea"
      ],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        },
        {
          "label": "pymoo",
          "href": "https://pymoo.org/"
        }
      ],
      "glossaryTerms": [
        "MOEA",
        "Pareto front",
        "NSGA-II",
        "NSGA-III",
        "crowding distance",
        "hypervolume"
      ],
      "relatedPrimary": [
        "razshireniya-nsga-ii",
        "razshireniya-nsga-iii",
        "ocenyavane-metriki-mnogocel"
      ],
      "relatedSecondary": [
        "teoriya",
        "fitnes",
        "ocenyavane-zdt-dtlz-wfg"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: вместо едно най-добро решение, тук търсите добри компромиси между няколко цели.",
          "paragraphs": [
            "Multiobjective GA търси Pareto множество от компромисни решения вместо едно единствено най-добро решение.",
            "Многоцелевата оптимизация е естествена следваща стъпка. Вместо да търсите едно число, което събира всичко, пазите множество компромисни решения по [[Pareto front]].",
            "Това прави [[MOEA]] подходите полезни при задачи, в които качеството има повече от едно лице: например цена срещу надеждност или маса срещу якост."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: така можете да търсите добри компромиси, а не само едно число.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Dominance relation заменя простото подреждане по една стойност.",
            "Разнообразието по фронта е толкова важно, колкото и приближаването към него.",
            "NSGA-II и NSGA-III са сред най-важните отправни алгоритми."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-голямата промяна е, че подреждането вече не става по една стойност на [[fitness]], а по relation of dominance плюс механизъм за разнообразие. Това променя и оцеляването, и начина на оценяване.",
            "Когато това стане ясно, преходът към [[NSGA-II]], [[NSGA-III]] и многоцелевите метрики става много по-лесен."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "a dominates b if all objectives are no worse and at least one is better"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си, че искате едновременно ниска цена и високо качество. Едно решение може да е по-евтино, но по-слабо, а друго по-скъпо, но по-добро. Вместо да изберете само едно число, многоцелевият GA пази няколко разумни компромиса. Така примерът показва защо популацията е естествена за многоцелеви задачи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "razshireniya"
      ]
    },
    "razshireniya-nsga-ii": {
      "key": "razshireniya-nsga-ii",
      "slug": "/razshireniya/multiobjective/nsga-ii/",
      "nav": "NSGA-II",
      "title": "NSGA-II",
      "level": "Advanced",
      "parent": "razshireniya-multiobjective",
      "summary": "NSGA-II комбинира fast nondominated sorting, crowding distance и elitist survival.",
      "bullets": [
        "Ранкирането става по nondominated fronts.",
        "Crowding distance пази spread по frontier-а.",
        "Sorting cost може да е значим при големи populations."
      ],
      "example": "Когато последният фронт не се побира, алгоритъмът избира решенията с по-голяма crowding distance.",
      "diagram": null,
      "equations": [
        "O(M N^2)",
        "crowding(i) = sum_m нормализирано разстояние до съседите по цел m"
      ],
      "tables": [],
      "children": [],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        },
        {
          "label": "pymoo",
          "href": "https://pymoo.org/"
        }
      ],
      "glossaryTerms": [
        "NSGA-II",
        "Pareto front",
        "crowding distance",
        "nondominated sorting",
        "hypervolume"
      ],
      "relatedPrimary": [
        "razshireniya-multiobjective",
        "ocenyavane-metriki-mnogocel",
        "ocenyavane-slojnost"
      ],
      "relatedSecondary": [
        "razshireniya-nsga-iii",
        "fitnes-ogranicheniya",
        "ocenyavane-zdt-dtlz-wfg"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "NSGA-II комбинира fast nondominated sorting, crowding distance и elitist survival.",
            "NSGA-II е един от най-важните многоцелеви алгоритми и често е първият сериозен пример за [[MOEA]], който студентът среща.",
            "Причината е проста: той събира няколко важни идеи на едно място - nondominated sorting, [[crowding distance]] и elitist survival."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Ранкирането става по nondominated fronts.",
            "Crowding distance пази spread по frontier-а.",
            "Sorting cost може да е значим при големи populations."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук е важно да мислите не само как алгоритъмът намира добри решения, а и как пази разпределение по целия [[Pareto front]]. Ако запазите само най-силните по малък регион, губите важна част от многоцелевата картина.",
            "Именно затова crowding distance и правилото за избор от последния фронт са толкова важни за разбирането на NSGA-II."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Показаните означения подчертават две различни идеи: цената на самото сортиране и начина, по който се мери локалната гъстота около решение. И двете са важни, защото едното влияе на бързината, а другото на качеството на фронта."
          ],
          "bullets": [],
          "equations": [
            "O(M N^2)",
            "crowding(i) = sum_m нормализирано разстояние до съседите по цел m"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Когато последният фронт не се побира, алгоритъмът избира решенията с по-голяма crowding distance."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "razshireniya-multiobjective"
      ]
    },
    "razshireniya-nsga-iii": {
      "key": "razshireniya-nsga-iii",
      "slug": "/razshireniya/multiobjective/nsga-iii/",
      "nav": "NSGA-III",
      "title": "NSGA-III",
      "level": "Advanced",
      "parent": "razshireniya-multiobjective",
      "summary": "NSGA-III е ориентиран към many-objective scenarios, където crowding distance не е достатъчно дискриминативна.",
      "bullets": [
        "Reference directions са сърцето на diversity control.",
        "Many-objective settings искат различна geometrical intuition.",
        "Choice of reference points влияе на резултата."
      ],
      "example": "Когато целите станат много, решенията вече трудно се разпределят равномерно само с обикновена crowding логика. Тогава reference directions действат като ориентири, към които алгоритъмът подрежда популацията. Това е пример как NSGA-III пази структура при по-сложни многоцелеви задачи.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Kalyanmoy Deb - NSGA-III materials",
          "href": "https://www.egr.msu.edu/~kdeb/papers/k2012016.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        }
      ],
      "glossaryTerms": [
        "MOEA",
        "Pareto front",
        "NSGA-II",
        "NSGA-III",
        "crowding distance"
      ],
      "relatedPrimary": [
        "razshireniya-multiobjective",
        "razshireniya-nsga-ii",
        "razshireniya-drugi-moea"
      ],
      "relatedSecondary": [
        "teoriya",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "NSGA-III е ориентиран към many-objective scenarios, където crowding distance не е достатъчно дискриминативна.",
            "Разширенията показват кога базовият [[GA]] вече не е достатъчен и какво се печели, когато добавите локално търсене, Pareto ranking или по-специални правила за оцеляване.",
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Reference directions са сърцето на diversity control.",
            "Many-objective settings искат различна geometrical intuition.",
            "Choice of reference points влияе на резултата."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Когато целите станат много, решенията вече трудно се разпределят равномерно само с обикновена crowding логика. Тогава reference directions действат като ориентири, към които алгоритъмът подрежда популацията. Това е пример как NSGA-III пази структура при по-сложни многоцелеви задачи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "razshireniya-multiobjective"
      ]
    },
    "razshireniya-drugi-moea": {
      "key": "razshireniya-drugi-moea",
      "slug": "/razshireniya/multiobjective/drugi-moea/",
      "nav": "Други MOEA",
      "title": "MOEA/D, SPEA2, IBEA",
      "level": "Advanced",
      "parent": "razshireniya-multiobjective",
      "summary": "Други MOEA families използват decomposition, archive strength или quality indicators за selection.",
      "bullets": [
        "MOEA/D работи с scalar subproblems.",
        "SPEA2 използва archive и strength values.",
        "IBEA използва indicator-driven selection."
      ],
      "example": "Ако задачата естествено се разделя на няколко подзадачи, MOEA/D може да е по-удобен избор. Ако искате по-силен архив или indicator-driven сравнение, SPEA2 и IBEA дават друга логика на оцеляване. Така примерът показва, че NSGA-II не е единственият разумен избор при много цели.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "razshireniya",
      "readings": [
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        },
        {
          "label": "Huband et al. - WFG Toolkit",
          "href": "https://www.research-collection.ethz.ch/bitstreams/4d08c69c-9f97-424d-bbf6-7a647bcb3d13/download"
        },
        {
          "label": "Platypus Documentation",
          "href": "https://platypus.readthedocs.io/"
        }
      ],
      "glossaryTerms": [
        "MOEA",
        "Pareto front",
        "NSGA-II",
        "NSGA-III",
        "crowding distance"
      ],
      "relatedPrimary": [
        "razshireniya-multiobjective",
        "razshireniya-nsga-ii",
        "razshireniya-nsga-iii"
      ],
      "relatedSecondary": [
        "teoriya",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Други MOEA families използват decomposition, archive strength или quality indicators за selection.",
            "Разширенията показват кога базовият [[GA]] вече не е достатъчен и какво се печели, когато добавите локално търсене, Pareto ranking или по-специални правила за оцеляване.",
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "MOEA/D работи с scalar subproblems.",
            "SPEA2 използва archive и strength values.",
            "IBEA използва indicator-driven selection."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Това е мостът от учебния вариант към по-съвременните практически методи."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако задачата естествено се разделя на няколко подзадачи, MOEA/D може да е по-удобен избор. Ако искате по-силен архив или indicator-driven сравнение, SPEA2 и IBEA дават друга логика на оцеляване. Така примерът показва, че NSGA-II не е единственият разумен избор при много цели."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
            "Не оценявайте MOEA само по една метрика или по един фронт без контекст."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "razshireniya-multiobjective"
      ]
    },
    "ocenyavane": {
      "key": "ocenyavane",
      "slug": "/ocenyavane/",
      "nav": "Оценяване",
      "title": "Оценяване и бенчмаркове",
      "level": "Mixed",
      "parent": "home",
      "summary": "Оценяването показва не само най-добрия резултат, а и колко надеждно работи алгоритъмът.",
      "bullets": [
        "Fitness вътре в алгоритъма не е същото като benchmark метрика.",
        "Множеството runs са задължителни при стохастични оптимизатори.",
        "Сравненията трябва да се правят с мисъл за ограничения бюджет."
      ],
      "example": "Представете си, че един алгоритъм печели веднъж много убедително, но в повечето останали runs е слаб. Друг алгоритъм може да няма най-добрия единичен резултат, но да е стабилен почти всеки път. Така примерът показва защо честното оценяване гледа и качество, и надеждност.",
      "diagram": "metrics-map.svg",
      "equations": [],
      "tables": [],
      "children": [
        "ocenyavane-metriki",
        "ocenyavane-coco-bbob",
        "ocenyavane-zdt-dtlz-wfg",
        "ocenyavane-slojnost"
      ],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        },
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "reproducibility",
        "Pareto front",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane-metriki",
        "ocenyavane-coco-bbob",
        "ocenyavane-slojnost"
      ],
      "relatedSecondary": [
        "implementaciya-reproducibility",
        "kapani-ocenyavane",
        "razshireniya-multiobjective"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: този раздел показва как честно да проверите дали алгоритъмът наистина работи добре.",
          "paragraphs": [
            "Оценяването показва не само най-добрия резултат, а и колко надеждно работи алгоритъмът.",
            "Добрата проверка на резултатите отличава сериозния експеримент от красивата, но слаба демонстрация. При стохастични алгоритми не стига да покажете един силен run.",
            "Този раздел е важен, защото учи не само как да търсите решения, а и как честно да кажете дали една настройка на [[GA]] е по-надеждна от друга."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: без добра проверка лесно може да повярвате на случайно добър резултат.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Fitness вътре в алгоритъма не е същото като benchmark метрика.",
            "Множеството runs са задължителни при стохастични оптимизатори.",
            "Сравненията трябва да се правят с мисъл за ограничения бюджет."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Правилният въпрос често не е „кой даде най-доброто единично число“, а „кой стига до добра цел по-стабилно и с какъв budget“. Затова тук се появяват ERT, ECDF, [[hypervolume]] и benchmark suites като COCO/BBOB.",
            "Тук ясно се вижда и връзката с reproducibility: без много runs, ясни targets и описани seeds изводите ви стават много по-слаби."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си, че един алгоритъм печели веднъж много убедително, но в повечето останали runs е слаб. Друг алгоритъм може да няма най-добрия единичен резултат, но да е стабилен почти всеки път. Така примерът показва защо честното оценяване гледа и качество, и надеждност."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "ocenyavane-metriki": {
      "key": "ocenyavane-metriki",
      "slug": "/ocenyavane/metriki/",
      "nav": "Метрики",
      "title": "Метрики",
      "level": "Mixed",
      "parent": "ocenyavane",
      "summary": "Metric section разделя single-objective и multiobjective reporting и обяснява защо evaluation protocol не е формалност.",
      "bullets": [
        "Target-based metrics са по-информативни от единичен best result.",
        "Single-objective и multiobjective settings изискват различни инструменти.",
        "Reference point choices трябва да са експлицитни."
      ],
      "example": "Добра метрика е тази, която прави сравнението между runs, algorithms и benchmarks честно и разбираемо.",
      "diagram": "metrics-map.svg",
      "equations": [],
      "tables": [],
      "children": [
        "ocenyavane-metriki-ednocel",
        "ocenyavane-metriki-mnogocel"
      ],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "reproducibility",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane-metriki-ednocel",
        "ocenyavane-metriki-mnogocel"
      ],
      "relatedSecondary": [
        "implementaciya",
        "kapani",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Metric section разделя single-objective и multiobjective reporting и обяснява защо evaluation protocol не е формалност.",
            "Оценяването е отделна тема, защото стохастичните алгоритми могат да изглеждат силни в един run и много по-слаби, когато ги проверите честно.",
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Target-based metrics са по-информативни от единичен best result.",
            "Single-objective и multiobjective settings изискват различни инструменти.",
            "Reference point choices трябва да са експлицитни."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Добра метрика е тази, която прави сравнението между runs, algorithms и benchmarks честно и разбираемо."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane"
      ]
    },
    "ocenyavane-metriki-ednocel": {
      "key": "ocenyavane-metriki-ednocel",
      "slug": "/ocenyavane/metriki/ednocel/",
      "nav": "Едноцелеви",
      "title": "Едноцелеви метрики",
      "level": "Mixed",
      "parent": "ocenyavane-metriki",
      "summary": "Single-objective benchmarking използва best-so-far, success rate, runtime in evaluations, ERT и ECDF.",
      "bullets": [
        "Броят evaluations често е по-важен от секунди.",
        "ERT наказва нестабилните methods.",
        "ECDF показва обобщено поведение върху много targets и instances."
      ],
      "example": "Ако само 20 от 30 runs достигат target, ERT включва и неуспешните attempts до budget.",
      "diagram": null,
      "equations": [
        "ERT = total evaluations across runs / number of successful runs"
      ],
      "tables": [],
      "children": [],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        },
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "reproducibility",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane",
        "ocenyavane-coco-bbob",
        "implementaciya-reproducibility"
      ],
      "relatedSecondary": [
        "kapani-ocenyavane",
        "ocenyavane-slojnost",
        "parametri-sxodimost-diversitet"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Single-objective benchmarking използва best-so-far, success rate, runtime in evaluations, ERT и ECDF.",
            "При едноцелева задача често изглежда, че е достатъчно да покажете най-добрия резултат. На практика това почти никога не стига.",
            "Тази страница показва какво печелите, когато гледате много runs и когато мерите усилието в evaluations, а не само в време."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Броят evaluations често е по-важен от секунди.",
            "ERT наказва нестабилните methods.",
            "ECDF показва обобщено поведение върху много targets и instances."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "ERT е полезна, защото съчетава успехите и неуспехите в една обща картина. Така не се впечатлявате само от редките много добри runs, а виждате колко надеждно работи алгоритъмът.",
            "Това е по-честно към стохастичните методи и много по-полезно за сравнение между конфигурации."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "ERT формулата трябва да се чете много просто: колко evaluations са похарчени общо, разделено на броя runs, които наистина са стигнали целта."
          ],
          "bullets": [],
          "equations": [
            "ERT = total evaluations across runs / number of successful runs"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако само 20 от 30 runs достигат target, ERT включва и неуспешните attempts до budget."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane-metriki"
      ]
    },
    "ocenyavane-metriki-mnogocel": {
      "key": "ocenyavane-metriki-mnogocel",
      "slug": "/ocenyavane/metriki/mnogocel/",
      "nav": "Многоцелеви",
      "title": "Многоцелеви метрики",
      "level": "Advanced",
      "parent": "ocenyavane-metriki",
      "summary": "Hypervolume, IGD, epsilon indicators и spread metrics измерват различни страни на Pareto approximation quality.",
      "bullets": [
        "Hypervolume зависи от reference point.",
        "Една метрика рядко е достатъчна сама.",
        "Scaling between objectives влияе на conclusions."
      ],
      "example": "Два алгоритъма могат да имат близък hypervolume и съвсем различно покритие по frontier-а.",
      "diagram": null,
      "equations": [
        "Hypervolume(A, r) = обемът, доминиран от приближението A спрямо референтна точка r"
      ],
      "tables": [],
      "children": [],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        },
        {
          "label": "Huband et al. - WFG Toolkit",
          "href": "https://www.research-collection.ethz.ch/bitstreams/4d08c69c-9f97-424d-bbf6-7a647bcb3d13/download"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "razshireniya-multiobjective",
        "razshireniya-nsga-ii",
        "ocenyavane-zdt-dtlz-wfg"
      ],
      "relatedSecondary": [
        "kapani-ocenyavane",
        "ocenyavane-slojnost",
        "fitnes-ogranicheniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Hypervolume, IGD, epsilon indicators и spread metrics измерват различни страни на Pareto approximation quality.",
            "При многоцелевите задачи една метрика рядко стига сама. Трябва да гледате едновременно колко близо сте до фронта и колко добре покривате различните компромиси.",
            "Тази страница е важна, защото тук студентът започва да вижда, че оценяването на Pareto решения е отделна трудна тема."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Hypervolume зависи от reference point.",
            "Една метрика рядко е достатъчна сама.",
            "Scaling between objectives влияе на conclusions."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-честият капан е да се види едно добро число и да се приеме, че всичко е наред. При [[hypervolume]] например изборът на референтна точка може силно да промени изводите.",
            "Затова добрата практика е да не се разчита само на една метрика и винаги да се описва как е настроена тя."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Hypervolume формулата или концептуалното й описание има една главна цел: да покаже, че не измервате само близост до фронта, а и покритата част от пространството на целите."
          ],
          "bullets": [],
          "equations": [
            "Hypervolume(A, r) = обемът, доминиран от приближението A спрямо референтна точка r"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Два алгоритъма могат да имат близък hypervolume и съвсем различно покритие по frontier-а."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane-metriki"
      ]
    },
    "ocenyavane-coco-bbob": {
      "key": "ocenyavane-coco-bbob",
      "slug": "/ocenyavane/benchmarks/coco-bbob/",
      "nav": "COCO/BBOB",
      "title": "Бенчмаркове COCO/BBOB",
      "level": "Mixed",
      "parent": "ocenyavane",
      "summary": "COCO/BBOB е стандартизирана среда за black-box optimization benchmarking с ясни targets, budgets и post-processing.",
      "bullets": [
        "BBOB включва 24 класически noiseless functions.",
        "ERT и ECDF са основни reporting tools.",
        "Dimension и instance selection трябва да се описват ясно."
      ],
      "example": "COCO позволява да сравните две GA configurations не само по best quality, а и по reliability across test suites.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        },
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "reproducibility",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane",
        "ocenyavane-metriki",
        "ocenyavane-zdt-dtlz-wfg",
        "ocenyavane-slojnost"
      ],
      "relatedSecondary": [
        "implementaciya",
        "kapani",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "COCO/BBOB е стандартизирана среда за black-box optimization benchmarking с ясни targets, budgets и post-processing.",
            "Оценяването е отделна тема, защото стохастичните алгоритми могат да изглеждат силни в един run и много по-слаби, когато ги проверите честно.",
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "BBOB включва 24 класически noiseless functions.",
            "ERT и ECDF са основни reporting tools.",
            "Dimension и instance selection трябва да се описват ясно."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "COCO позволява да сравните две GA configurations не само по best quality, а и по reliability across test suites."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane"
      ]
    },
    "ocenyavane-zdt-dtlz-wfg": {
      "key": "ocenyavane-zdt-dtlz-wfg",
      "slug": "/ocenyavane/benchmarks/zdt-dtlz-wfg/",
      "nav": "ZDT/DTLZ/WFG",
      "title": "ZDT, DTLZ, WFG",
      "level": "Advanced",
      "parent": "ocenyavane",
      "summary": "Тези benchmark families покриват различни shapes и difficulties на multiobjective problems.",
      "bullets": [
        "ZDT е класически и лесен за стартиране.",
        "DTLZ дава scalability по цели и променливи.",
        "WFG въвежда controllable bias, multimodality и non-separability."
      ],
      "example": "Ако сравнявате MOEA сериозно, използвайте повече от един benchmark family.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "Zitzler, Deb and Thiele - ZDT Test Problems",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/zdt2000a.pdf"
        },
        {
          "label": "Deb, Thiele, Laumanns and Zitzler - DTLZ Test Problems",
          "href": "https://tik-old.ee.ethz.ch/file//3ec604450bf683daaf27f9027e69f44d/DTLZ2004a.pdf"
        },
        {
          "label": "Huband et al. - WFG Toolkit",
          "href": "https://www.research-collection.ethz.ch/bitstreams/4d08c69c-9f97-424d-bbf6-7a647bcb3d13/download"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "reproducibility",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane",
        "ocenyavane-metriki",
        "ocenyavane-coco-bbob",
        "ocenyavane-slojnost"
      ],
      "relatedSecondary": [
        "implementaciya",
        "kapani",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Тези benchmark families покриват различни shapes и difficulties на multiobjective problems.",
            "Оценяването е отделна тема, защото стохастичните алгоритми могат да изглеждат силни в един run и много по-слаби, когато ги проверите честно.",
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "ZDT е класически и лесен за стартиране.",
            "DTLZ дава scalability по цели и променливи.",
            "WFG въвежда controllable bias, multimodality и non-separability."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако сравнявате MOEA сериозно, използвайте повече от един benchmark family."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane"
      ]
    },
    "ocenyavane-slojnost": {
      "key": "ocenyavane-slojnost",
      "slug": "/ocenyavane/slojnost/",
      "nav": "Сложност",
      "title": "Сложност и бюджет на оценки",
      "level": "Mixed",
      "parent": "ocenyavane",
      "summary": "Computational cost идва от objective evaluations, variation overhead и понякога от expensive sorting или archiving.",
      "bullets": [
        "При simulation-based optimization evaluation доминира.",
        "При евтини учебни задачи implementation overhead става видим.",
        "Parallel islands са естествена стратегия при скъпи objectives."
      ],
      "example": "Когато една evaluation отнема секунди, оптимизацията на sorting логиката не е най-важният bottleneck.",
      "diagram": null,
      "equations": [
        "Cost approx O(N × C_eval) + operator overhead",
        "При NSGA-II сортирането често се описва с O(M N^2)"
      ],
      "tables": [],
      "children": [],
      "topSection": "ocenyavane",
      "readings": [
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        },
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        }
      ],
      "glossaryTerms": [
        "hypervolume",
        "Pareto front",
        "reproducibility",
        "NSGA-II"
      ],
      "relatedPrimary": [
        "ocenyavane",
        "razshireniya-nsga-ii",
        "parametri-diversitet-mehanizmi"
      ],
      "relatedSecondary": [
        "ocenyavane-coco-bbob",
        "implementaciya-reproducibility",
        "kapani-ocenyavane"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Computational cost идва от objective evaluations, variation overhead и понякога от expensive sorting или archiving.",
            "Сложността е важна не само като теоретична тема, а и като практичен ориентир. Тя ви помага да видите къде наистина отива времето.",
            "При едни задачи всичко се решава от цената на evaluation, а при други започват да се усещат и самите algorithmic overhead-и."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "При simulation-based optimization evaluation доминира.",
            "При евтини учебни задачи implementation overhead става видим.",
            "Parallel islands са естествена стратегия при скъпи objectives."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Най-полезният навик тук е да разделяте цената на две: цена за смятане на целевата функция и цена за вътрешната работа на алгоритъма. Това веднага показва какво има смисъл да оптимизирате.",
            "При скъпи симулации най-важно е да намалите evaluations или да ги пуснете паралелно. При евтини учебни задачи вече има смисъл да гледате и разхода за сортиране."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези оценки за сложност са ориентир, не магическо число. Те ви помагат да видите кога evaluation доминира и кога вътрешните процедури като сортиране вече имат голямо значение."
          ],
          "bullets": [],
          "equations": [
            "Cost approx O(N × C_eval) + operator overhead",
            "При NSGA-II сортирането често се описва с O(M N^2)"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Когато една evaluation отнема секунди, оптимизацията на sorting логиката не е най-важният bottleneck."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не правете изводи по един run или по best-of-one резултат.",
            "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "ocenyavane"
      ]
    },
    "implementaciya": {
      "key": "implementaciya",
      "slug": "/implementaciya/",
      "nav": "Имплементация",
      "title": "Имплементация и инструменти",
      "level": "Mixed",
      "parent": "home",
      "summary": "Този раздел превежда идеите от теорията и практиката в pseudocode, tooling и repeatable experiment setup.",
      "bullets": [
        "Ясният pseudocode прави hooks-овете за decode и repair видими.",
        "Изборът на библиотека следва problem type.",
        "Logging и reproducibility са част от implementation quality."
      ],
      "example": "Една добра имплементация ясно отделя къде създавате популацията, къде смятате fitness и къде избирате кои решения оцеляват. Ако тези части са смесени, алгоритъмът става труден за проверка и повторение. Така примерът показва защо структурата на кода е част от самия резултат.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "implementaciya-psevdokod",
        "implementaciya-biblioteki",
        "implementaciya-reproducibility"
      ],
      "topSection": "implementaciya",
      "readings": [
        {
          "label": "DEAP Documentation",
          "href": "https://deap.readthedocs.io/"
        },
        {
          "label": "pymoo",
          "href": "https://pymoo.org/"
        },
        {
          "label": "pygmo Documentation",
          "href": "https://esa.github.io/pygmo2/"
        }
      ],
      "glossaryTerms": [
        "GA",
        "decoder",
        "repair",
        "reproducibility"
      ],
      "relatedPrimary": [
        "implementaciya-psevdokod",
        "implementaciya-biblioteki",
        "implementaciya-reproducibility"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "iztochnici"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "Накратко: тук идеите стават на реален код и повторяем експеримент.",
          "paragraphs": [
            "Този раздел превежда идеите от теорията и практиката в pseudocode, tooling и repeatable experiment setup.",
            "Разделът за implementation превежда теорията в реални части от кода. Ако не знаете къде стои decoder-ът, кога се прави repair и как се записват runs, значи темата още не е подредена на практика.",
            "Тук [[GA]] започва да се вижда като система от отделни части: представяне, оценяване, оператори, логване и организация на експеримента."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "Защо това е важно: добрата имплементация прави резултатите разбираеми и повторяеми.",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Ясният pseudocode прави hooks-овете за decode и repair видими.",
            "Изборът на библиотека следва problem type.",
            "Logging и reproducibility са част от implementation quality."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "В добрата implementation има едно просто правило: всичко, което може да промени резултата, трябва да е ясно и повторяемо. Това важи за seeds, stopping criteria, параметри и стандартни настройки на библиотеките.",
            "Затова този раздел свързва псевдокода, библиотеките и reproducibility protocol-а в една обща картина."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Една добра имплементация ясно отделя къде създавате популацията, къде смятате fitness и къде избирате кои решения оцеляват. Ако тези части са смесени, алгоритъмът става труден за проверка и повторение. Така примерът показва защо структурата на кода е част от самия резултат."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не оставяйте seed management и logging за по-късно. Те са част от дизайна на експеримента.",
            "Не смесвайте decode, repair и fitness logic без ясни интерфейси."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "implementaciya-psevdokod": {
      "key": "implementaciya-psevdokod",
      "slug": "/implementaciya/psevdokod/",
      "nav": "Псевдокод",
      "title": "Псевдокод и шаблони",
      "level": "Beginner",
      "parent": "implementaciya",
      "summary": "Псевдокодът показва минималния algorithmic skeleton за generational GA и местата за decode, evaluate и survive.",
      "bullets": [
        "Ясно отделете init, evaluate, select, vary и replace.",
        "Repair и constraint logic трябва да са explicit.",
        "Логовете са част от алгоритъма, не следмисъл."
      ],
      "example": "Проследете едно поколение от началото до края: init създава популацията, evaluate мери fitness, select избира родители, vary създава потомство и survive решава кой остава. Ако не знаете къде влиза repair, значи някоя от тези роли е смесена. Псевдокодът е полезен точно защото прави тези роли видими.",
      "diagram": null,
      "equations": [
        "while not stop(P, F): select -> vary -> evaluate -> survive"
      ],
      "tables": [],
      "children": [],
      "topSection": "implementaciya",
      "readings": [
        {
          "label": "DEAP Documentation",
          "href": "https://deap.readthedocs.io/"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "decoder",
        "repair",
        "reproducibility"
      ],
      "relatedPrimary": [
        "implementaciya",
        "implementaciya-biblioteki",
        "implementaciya-reproducibility"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "iztochnici"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Псевдокодът показва минималния algorithmic skeleton за generational GA и местата за decode, evaluate и survive.",
            "Този раздел свързва идеите от теорията с реален код. Тук се вижда кои части трябва да са ясни в една система: decode, evaluate, select, vary, survive, log и repeat.",
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Ясно отделете init, evaluate, select, vary и replace.",
            "Repair и constraint logic трябва да са explicit.",
            "Логовете са част от алгоритъма, не следмисъл."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "while not stop(P, F): select -> vary -> evaluate -> survive"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Проследете едно поколение от началото до края: init създава популацията, evaluate мери fitness, select избира родители, vary създава потомство и survive решава кой остава. Ако не знаете къде влиза repair, значи някоя от тези роли е смесена. Псевдокодът е полезен точно защото прави тези роли видими."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не оставяйте seed management и logging за по-късно. Те са част от дизайна на експеримента.",
            "Не смесвайте decode, repair и fitness logic без ясни интерфейси."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "implementaciya"
      ]
    },
    "implementaciya-biblioteki": {
      "key": "implementaciya-biblioteki",
      "slug": "/implementaciya/biblioteki/",
      "nav": "Библиотеки",
      "title": "Библиотеки и tooling",
      "level": "Mixed",
      "parent": "implementaciya",
      "summary": "Сравнение на библиотеки като DEAP, PyGAD, pygmo, pymoo, jMetal и MOEA Framework.",
      "bullets": [
        "DEAP е силен за transparent prototyping.",
        "pymoo и Platypus са естествени за MOEA workflows.",
        "pygmo е добър избор за island-based parallelism."
      ],
      "example": "Ако искате бързо да пробвате класически GA, една библиотека с по-прост интерфейс може да е достатъчна. Ако ви трябват многоцелеви алгоритми и готови метрики, по-подходящ е специализиран MOEA toolkit. Така примерът показва как инструментът се избира според задачата, а не според популярността му.",
      "diagram": "library-selection-flow.svg",
      "equations": [],
      "tables": [
        "libraries"
      ],
      "children": [],
      "topSection": "implementaciya",
      "readings": [
        {
          "label": "DEAP Documentation",
          "href": "https://deap.readthedocs.io/"
        },
        {
          "label": "PyGAD Documentation",
          "href": "https://pygad.readthedocs.io/"
        },
        {
          "label": "pygmo Documentation",
          "href": "https://esa.github.io/pygmo2/"
        },
        {
          "label": "pymoo",
          "href": "https://pymoo.org/"
        },
        {
          "label": "jMetal Documentation",
          "href": "https://jmetal.readthedocs.io/"
        },
        {
          "label": "MOEA Framework",
          "href": "https://moeaframework.org/"
        },
        {
          "label": "Jenetics Manual",
          "href": "https://jenetics.io/manual/manual-7.2.0.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "decoder",
        "repair",
        "reproducibility"
      ],
      "relatedPrimary": [
        "implementaciya",
        "implementaciya-psevdokod",
        "implementaciya-reproducibility"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "iztochnici"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Сравнение на библиотеки като DEAP, PyGAD, pygmo, pymoo, jMetal и MOEA Framework.",
            "Този раздел свързва идеите от теорията с реален код. Тук се вижда кои части трябва да са ясни в една система: decode, evaluate, select, vary, survive, log и repeat.",
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "DEAP е силен за transparent prototyping.",
            "pymoo и Platypus са естествени за MOEA workflows.",
            "pygmo е добър избор за island-based parallelism."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако искате бързо да пробвате класически GA, една библиотека с по-прост интерфейс може да е достатъчна. Ако ви трябват многоцелеви алгоритми и готови метрики, по-подходящ е специализиран MOEA toolkit. Така примерът показва как инструментът се избира според задачата, а не според популярността му."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не оставяйте seed management и logging за по-късно. Те са част от дизайна на експеримента.",
            "Не смесвайте decode, repair и fitness logic без ясни интерфейси."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "implementaciya"
      ]
    },
    "implementaciya-reproducibility": {
      "key": "implementaciya-reproducibility",
      "slug": "/implementaciya/reproducibility/",
      "nav": "Reproducibility",
      "title": "Повторяемост и експериментален протокол",
      "level": "Advanced",
      "parent": "implementaciya",
      "summary": "Стохастичните algorithms искат seeds, много runs, ясни stopping rules и архивирани artifacts.",
      "bullets": [
        "Single run не е достатъчен.",
        "Съхранявайте configs, seeds и code version.",
        "Target-based reporting е по-стабилен от единични средни стойности."
      ],
      "example": "Представете си, че днес получавате силен резултат, а утре със същия код вече не можете да го възпроизведете. Без seed, точни параметри и описан stopping rule няма как да знаете защо. Така примерът показва защо repeatability не е формалност, а основа на доверие в експеримента.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "implementaciya",
      "readings": [
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "decoder",
        "repair",
        "reproducibility"
      ],
      "relatedPrimary": [
        "implementaciya",
        "implementaciya-psevdokod",
        "implementaciya-biblioteki"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "iztochnici"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Стохастичните algorithms искат seeds, много runs, ясни stopping rules и архивирани artifacts.",
            "Този раздел свързва идеите от теорията с реален код. Тук се вижда кои части трябва да са ясни в една система: decode, evaluate, select, vary, survive, log и repeat.",
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Single run не е достатъчен.",
            "Съхранявайте configs, seeds и code version.",
            "Target-based reporting е по-стабилен от единични средни стойности."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Представете си, че днес получавате силен резултат, а утре със същия код вече не можете да го възпроизведете. Без seed, точни параметри и описан stopping rule няма как да знаете защо. Така примерът показва защо repeatability не е формалност, а основа на доверие в експеримента."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не оставяйте seed management и logging за по-късно. Те са част от дизайна на експеримента.",
            "Не смесвайте decode, repair и fitness logic без ясни интерфейси."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "implementaciya"
      ]
    },
    "prilozheniya": {
      "key": "prilozheniya",
      "slug": "/prilozheniya/",
      "nav": "Приложения",
      "title": "Приложения и казуси",
      "level": "Mixed",
      "parent": "home",
      "summary": "Приложенията показват как GA се променя според domain structure и evaluation cost.",
      "bullets": [
        "Engineering problems искат real-coded logic.",
        "SQL optimization често иска permutations или trees.",
        "Fuzzy systems въвеждат tradeoff между quality и interpretability."
      ],
      "example": "В едни задачи GA настройва числови параметри, в други подрежда операции, а в трети балансира качество и разбираемост. Това значи, че един и същ алгоритъм сменя представяне, fitness и оператори според контекста. Така примерът показва как дизайнът се променя между различни реални казуси.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "prilozheniya-inzhenerstvo",
        "prilozheniya-sql",
        "prilozheniya-genetichni-razmiti-sistemi"
      ],
      "topSection": "prilozheniya",
      "readings": [
        {
          "label": "GA-базирана оптимизация на PI/PID регулатори",
          "href": "https://e-university.tu-sofia.bg/e-publ/files/1064_Yordanova_Georgieva_article_E_Eotchet.pdf"
        },
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        },
        {
          "label": "Български материали за генетични размити системи",
          "href": "https://www.bfu.bg/uploads/MyDocuments/summaries_pg.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "fitness",
        "SBX",
        "decoder"
      ],
      "relatedPrimary": [
        "prilozheniya-inzhenerstvo",
        "prilozheniya-sql",
        "prilozheniya-genetichni-razmiti-sistemi"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Приложенията показват как GA се променя според domain structure и evaluation cost.",
            "Приложенията показват защо една обща техника като [[GA]] има смисъл само ако е нагласена към самата задача.",
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Engineering problems искат real-coded logic.",
            "SQL optimization често иска permutations или trees.",
            "Fuzzy systems въвеждат tradeoff между quality и interpretability."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "В едни задачи GA настройва числови параметри, в други подрежда операции, а в трети балансира качество и разбираемост. Това значи, че един и същ алгоритъм сменя представяне, fitness и оператори според контекста. Така примерът показва как дизайнът се променя между различни реални казуси."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не пренасяйте готова конфигурация от един domain към друг без нов анализ на encoding и objectives.",
            "Не гледайте само качеството на решението; гледайте и цената на evaluation pipeline."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "prilozheniya-inzhenerstvo": {
      "key": "prilozheniya-inzhenerstvo",
      "slug": "/prilozheniya/inzhenerstvo-upravlenie/",
      "nav": "Инженерство",
      "title": "Управление и инженерна оптимизация",
      "level": "Mixed",
      "parent": "prilozheniya",
      "summary": "Engineering optimization често работи с continuous parameters, simulation budgets и tradeoff между качество и robustness.",
      "bullets": [
        "Real-coded GA е естествен baseline.",
        "Objective function често е composite criterion.",
        "Constraint handling не може да се игнорира."
      ],
      "example": "PID tuning с ISE плюс overshoot penalties е типичен engineering setup.",
      "diagram": null,
      "equations": [
        "ISE = integral e(t)^2 dt"
      ],
      "tables": [],
      "children": [],
      "topSection": "prilozheniya",
      "readings": [
        {
          "label": "GA-базирана оптимизация на PI/PID регулатори",
          "href": "https://e-university.tu-sofia.bg/e-publ/files/1064_Yordanova_Georgieva_article_E_Eotchet.pdf"
        },
        {
          "label": "Deb and Agrawal - Simulated Binary Crossover",
          "href": "https://www.complex-systems.com/abstracts/v09_i02_a02/"
        }
      ],
      "glossaryTerms": [
        "GA",
        "fitness",
        "SBX",
        "decoder"
      ],
      "relatedPrimary": [
        "prilozheniya",
        "prilozheniya-sql",
        "prilozheniya-genetichni-razmiti-sistemi"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Engineering optimization често работи с continuous parameters, simulation budgets и tradeoff между качество и robustness.",
            "Приложенията показват защо една обща техника като [[GA]] има смисъл само ако е нагласена към самата задача.",
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Real-coded GA е естествен baseline.",
            "Objective function често е composite criterion.",
            "Constraint handling не може да се игнорира."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови означения и формули",
          "simpleIntro": "",
          "paragraphs": [
            "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно."
          ],
          "bullets": [],
          "equations": [
            "ISE = integral e(t)^2 dt"
          ],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "PID tuning с ISE плюс overshoot penalties е типичен engineering setup."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не пренасяйте готова конфигурация от един domain към друг без нов анализ на encoding и objectives.",
            "Не гледайте само качеството на решението; гледайте и цената на evaluation pipeline."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "prilozheniya"
      ]
    },
    "prilozheniya-sql": {
      "key": "prilozheniya-sql",
      "slug": "/prilozheniya/sql/",
      "nav": "SQL",
      "title": "Оптимизация на SQL заявки",
      "level": "Advanced",
      "parent": "prilozheniya",
      "summary": "Join ordering е combinatorial problem, който прави representation и operator design особено важни.",
      "bullets": [
        "Cost model играе ролята на fitness.",
        "Permutation-aware operators пазят валидност.",
        "Random keys е удобна indirect алтернатива."
      ],
      "example": "Population-ът може да описва различни candidate join orders за една и съща заявка. Всеки ред се оценява чрез cost на плана, а по-добрите редове имат повече шанс да се комбинират и запазят. Така fitness става много конкретна част от SQL оптимизацията.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "prilozheniya",
      "readings": [
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        },
        {
          "label": "James Bean - Random Keys for Sequencing and Optimization",
          "href": "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"
        }
      ],
      "glossaryTerms": [
        "GA",
        "fitness",
        "SBX",
        "decoder"
      ],
      "relatedPrimary": [
        "prilozheniya",
        "prilozheniya-inzhenerstvo",
        "prilozheniya-genetichni-razmiti-sistemi"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Join ordering е combinatorial problem, който прави representation и operator design особено важни.",
            "Приложенията показват защо една обща техника като [[GA]] има смисъл само ако е нагласена към самата задача.",
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Cost model играе ролята на fitness.",
            "Permutation-aware operators пазят валидност.",
            "Random keys е удобна indirect алтернатива."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Population-ът може да описва различни candidate join orders за една и съща заявка. Всеки ред се оценява чрез cost на плана, а по-добрите редове имат повече шанс да се комбинират и запазят. Така fitness става много конкретна част от SQL оптимизацията."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не пренасяйте готова конфигурация от един domain към друг без нов анализ на encoding и objectives.",
            "Не гледайте само качеството на решението; гледайте и цената на evaluation pipeline."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "prilozheniya"
      ]
    },
    "prilozheniya-genetichni-razmiti-sistemi": {
      "key": "prilozheniya-genetichni-razmiti-sistemi",
      "slug": "/prilozheniya/genetichni-razmiti-sistemi/",
      "nav": "Размити системи",
      "title": "Генетични размити системи",
      "level": "Mixed",
      "parent": "prilozheniya",
      "summary": "GA настройва fuzzy rules и membership parameters, често под constraints за интерпретируемост.",
      "bullets": [
        "Quality и simplicity често са конкурентни цели.",
        "Representation може да е real-coded или mixed.",
        "Penalty за complexity е естествен design choice."
      ],
      "example": "Оптимизацията на membership functions е добър пример за real-coded search. Алгоритъмът променя числови параметри, но не трябва да развали разбираемостта на системата. Така примерът показва как качество и интерпретируемост често трябва да се пазят едновременно.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "prilozheniya",
      "readings": [
        {
          "label": "Български материали за генетични размити системи",
          "href": "https://www.bfu.bg/uploads/MyDocuments/summaries_pg.pdf"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "fitness",
        "SBX",
        "decoder"
      ],
      "relatedPrimary": [
        "prilozheniya",
        "prilozheniya-inzhenerstvo",
        "prilozheniya-sql"
      ],
      "relatedSecondary": [
        "predstavyane",
        "fitnes",
        "razshireniya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "GA настройва fuzzy rules и membership parameters, често под constraints за интерпретируемост.",
            "Приложенията показват защо една обща техника като [[GA]] има смисъл само ако е нагласена към самата задача.",
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Quality и simplicity често са конкурентни цели.",
            "Representation може да е real-coded или mixed.",
            "Penalty за complexity е естествен design choice."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Оптимизацията на membership functions е добър пример за real-coded search. Алгоритъмът променя числови параметри, но не трябва да развали разбираемостта на системата. Така примерът показва как качество и интерпретируемост често трябва да се пазят едновременно."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не пренасяйте готова конфигурация от един domain към друг без нов анализ на encoding и objectives.",
            "Не гледайте само качеството на решението; гледайте и цената на evaluation pipeline."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "prilozheniya"
      ]
    },
    "kapani": {
      "key": "kapani",
      "slug": "/kapani/",
      "nav": "Капани",
      "title": "Чести капани и добри практики",
      "level": "Mixed",
      "parent": "home",
      "summary": "Капаните в GA са повтаряеми: representation mismatch, bad scaling, premature convergence и weak evaluation protocol.",
      "bullets": [
        "Много проблеми са structural, не parameter-only.",
        "Repair logic може да скрие по-дълбок design defect.",
        "One-run benchmarking е почти винаги подвеждащ."
      ],
      "example": "Тази секция е удобен checklist преди да твърдите, че даден algorithmic choice е добър или лош.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [
        "kapani-dizayn",
        "kapani-ocenyavane"
      ],
      "topSection": "kapani",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "repair",
        "hypervolume",
        "reproducibility"
      ],
      "relatedPrimary": [
        "kapani-dizayn",
        "kapani-ocenyavane"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Капаните в GA са повтаряеми: representation mismatch, bad scaling, premature convergence и weak evaluation protocol.",
            "Този раздел е направен като проверка за здрав разум. Той не учи нова част от алгоритъма, а показва кога един резултат изглежда добър, но всъщност не е убедителен.",
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Много проблеми са structural, не parameter-only.",
            "Repair logic може да скрие по-дълбок design defect.",
            "One-run benchmarking е почти винаги подвеждащ."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Тази секция е удобен checklist преди да твърдите, че даден algorithmic choice е добър или лош."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не търсете само по-добри параметри, ако проблемът всъщност е structural mismatch.",
            "Не украсявайте резултатите с cherry-picked runs вместо с repeatable protocol."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "kapani-dizayn": {
      "key": "kapani-dizayn",
      "slug": "/kapani/dizayn/",
      "nav": "Дизайн",
      "title": "Типични грешки при дизайн",
      "level": "Mixed",
      "parent": "kapani",
      "summary": "Design pitfalls идват от лошо съчетаване на representation, operators, fitness и pressure.",
      "bullets": [
        "Permutation plus naive crossover е класически problem.",
        "Penalty terms могат да заличат signal.",
        "Силният pressure без diversity mechanisms води до early collapse."
      ],
      "example": "Ако repair постоянно спасява invalid offspring, проблемът вероятно е в representation-operator pair, не в repair code.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "kapani",
      "readings": [
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "James Bean - Random Keys for Sequencing and Optimization",
          "href": "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"
        },
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "repair",
        "hypervolume",
        "reproducibility"
      ],
      "relatedPrimary": [
        "kapani",
        "kapani-ocenyavane"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Design pitfalls идват от лошо съчетаване на representation, operators, fitness и pressure.",
            "Този раздел е направен като проверка за здрав разум. Той не учи нова част от алгоритъма, а показва кога един резултат изглежда добър, но всъщност не е убедителен.",
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Permutation plus naive crossover е класически problem.",
            "Penalty terms могат да заличат signal.",
            "Силният pressure без diversity mechanisms води до early collapse."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако repair постоянно спасява invalid offspring, проблемът вероятно е в representation-operator pair, не в repair code."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не търсете само по-добри параметри, ако проблемът всъщност е structural mismatch.",
            "Не украсявайте резултатите с cherry-picked runs вместо с repeatable protocol."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "kapani"
      ]
    },
    "kapani-ocenyavane": {
      "key": "kapani-ocenyavane",
      "slug": "/kapani/ocenyavane/",
      "nav": "Оценяване",
      "title": "Типични грешки при оценяване",
      "level": "Advanced",
      "parent": "kapani",
      "summary": "Evaluation pitfalls включват single-run conclusions, липсващи seeds, лоши metrics и неясни reference points.",
      "bullets": [
        "Best-of-one result не е доказателство.",
        "В stochastic optimization reliability matters.",
        "Hypervolume без context е опасна метрика."
      ],
      "example": "Два алгоритъма могат да имат близък best result и напълно различна надеждност на практика.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "kapani",
      "readings": [
        {
          "label": "Hansen et al. - BBOB Experimental Setup",
          "href": "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"
        },
        {
          "label": "Zitzler et al. - Performance Assessment of Multiobjective Optimizers",
          "href": "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"
        }
      ],
      "glossaryTerms": [
        "fitness",
        "repair",
        "hypervolume",
        "reproducibility"
      ],
      "relatedPrimary": [
        "kapani",
        "kapani-dizayn"
      ],
      "relatedSecondary": [
        "fitnes",
        "ocenyavane",
        "implementaciya"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Evaluation pitfalls включват single-run conclusions, липсващи seeds, лоши metrics и неясни reference points.",
            "Този раздел е направен като проверка за здрав разум. Той не учи нова част от алгоритъма, а показва кога един резултат изглежда добър, но всъщност не е убедителен.",
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Best-of-one result не е доказателство.",
            "В stochastic optimization reliability matters.",
            "Hypervolume без context е опасна метрика."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Два алгоритъма могат да имат близък best result и напълно различна надеждност на практика."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не търсете само по-добри параметри, ако проблемът всъщност е structural mismatch.",
            "Не украсявайте резултатите с cherry-picked runs вместо с repeatable protocol."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "kapani"
      ]
    },
    "iztochnici": {
      "key": "iztochnici",
      "slug": "/iztochnici/",
      "nav": "Източници",
      "title": "Източници",
      "level": "Mixed",
      "parent": "home",
      "summary": "Curated bibliography с foundational texts, MOEA papers, benchmarks, libraries и български източници.",
      "bullets": [
        "Beginner path: Whitley, Goldberg, Popov.",
        "Theory path: Holland, Vose, NFL.",
        "MOEA path: Deb, Zitzler, benchmark suites."
      ],
      "example": "Източниците следват приоритета от PDF-а: primary и official sources първо, локални материали когато добавят стойност.",
      "diagram": null,
      "equations": [],
      "tables": [
        "readingPaths"
      ],
      "children": [],
      "topSection": "iztochnici",
      "readings": [
        {
          "label": "John Holland - Adaptation in Natural and Artificial Systems",
          "href": "https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/"
        },
        {
          "label": "David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning",
          "href": "https://dl.acm.org/doi/10.5555/534133"
        },
        {
          "label": "Darrell Whitley - Genetic Algorithm Tutorial",
          "href": "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"
        },
        {
          "label": "Michael Vose - The Simple Genetic Algorithm: Foundations and Theory",
          "href": "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"
        },
        {
          "label": "Kalyanmoy Deb et al. - NSGA-II",
          "href": "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"
        },
        {
          "label": "Kalyanmoy Deb - NSGA-III materials",
          "href": "https://www.egr.msu.edu/~kdeb/papers/k2012016.pdf"
        },
        {
          "label": "Wolpert and Macready - No Free Lunch Theorems for Optimization",
          "href": "https://www.cs.ubc.ca/~hutter/earg/papers07/00585893.pdf"
        },
        {
          "label": "COCO/BBOB Test Suite",
          "href": "https://numbbo.github.io/coco/testsuites/bbob"
        },
        {
          "label": "Попов (2003) - Генетични алгоритми за оптимизация",
          "href": "https://p0p0v.com/science/downloads/Popov03.pdf"
        },
        {
          "label": "Велев - Оптимизация на SQL заявки с GA",
          "href": "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"
        }
      ],
      "glossaryTerms": [
        "GA",
        "MOEA",
        "NSGA-II",
        "NSGA-III"
      ],
      "relatedPrimary": [
        "ga",
        "teoriya",
        "implementaciya"
      ],
      "relatedSecondary": [
        "ocenyavane",
        "prilozheniya",
        "kapani"
      ],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Curated bibliography с foundational texts, MOEA papers, benchmarks, libraries и български източници.",
            "Добрата учебна стратегия не е да четете всичко наведнъж. По-добре е да изберете източник според това какво точно искате да разберете в момента.",
            "Страницата събира тези пътеки и следва PDF-а, който поставя на първо място основните и официалните източници, а след това полезните български материали."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Beginner path: Whitley, Goldberg, Popov.",
            "Theory path: Holland, Vose, NFL.",
            "MOEA path: Deb, Zitzler, benchmark suites."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [
            "Ако искате пълна картина за [[GA]], комбинирайте поне три вида четене: един въвеждащ текст, един по-строг теоретичен текст и един източник за методика или инструменти."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Източниците следват приоритета от PDF-а: primary и official sources първо, локални материали когато добавят стойност."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Не четете само едно popular explanation source. Сравнявайте tutorial, теория и benchmark methodology.",
            "Не пропускайте официалните ръководства за инструментите, ако искате да разберете практическите им ограничения."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": [
        "home"
      ]
    },
    "not-found": {
      "key": "not-found",
      "slug": "/404/",
      "nav": "404",
      "title": "Страницата не е намерена",
      "level": "Mixed",
      "parent": null,
      "summary": "Търсената страница не съществува в текущата статична структура. Използвайте картата на сайта или основната навигация.",
      "bullets": [
        "Сайтът е изцяло статичен.",
        "Всяка валидна секция има собствена директория.",
        "Навигацията връща към основните hubs."
      ],
      "example": "Ако URL адресът е грешен, върнете се към началната страница и продължете през страничното меню.",
      "diagram": null,
      "equations": [],
      "tables": [],
      "children": [],
      "topSection": "not-found",
      "readings": [],
      "glossaryTerms": [],
      "relatedPrimary": [
        "home",
        "ga",
        "teoriya",
        "predstavyane"
      ],
      "relatedSecondary": [],
      "studyTracks": [],
      "sections": [
        {
          "title": "Какво ще научите",
          "simpleIntro": "",
          "paragraphs": [
            "Търсената страница не съществува в текущата статична структура. Използвайте картата на сайта или основната навигация."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Ключови идеи",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [
            "Сайтът е изцяло статичен.",
            "Всяка валидна секция има собствена директория.",
            "Навигацията връща към основните hubs."
          ],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "По-дълбоко обяснение",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        },
        {
          "title": "Пример и разбор",
          "simpleIntro": "",
          "paragraphs": [
            "Ако URL адресът е грешен, върнете се към началната страница и продължете през страничното меню."
          ],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция."
        },
        {
          "title": "Чести обърквания",
          "simpleIntro": "",
          "paragraphs": [],
          "bullets": [],
          "equations": [],
          "whyMatters": "",
          "exampleCard": null,
          "visualSteps": [],
          "note": ""
        }
      ],
      "figureCaption": "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.",
      "prerequisites": []
    }
  },
  "tables": {
    "variants": {
      "title": "Сравнение на ключови GA и MOEA варианти",
      "columns": [
        "Подход",
        "Подходящ за",
        "Основна идея",
        "Ключов риск"
      ],
      "rows": [
        [
          "Каноничен GA",
          "общи дискретни задачи",
          "selection + crossover + mutation",
          "premature convergence"
        ],
        [
          "Real-coded GA",
          "engineering parameters",
          "continuous genes + SBX/mutation",
          "repair bias"
        ],
        [
          "Random keys GA",
          "sequencing",
          "indirect decode by sorting",
          "decoder bias"
        ],
        [
          "NSGA-II",
          "2-3+ цели",
          "nondominated sorting + crowding",
          "sorting cost"
        ],
        [
          "NSGA-III",
          "many-objective",
          "reference directions",
          "coverage depends on references"
        ],
        [
          "Island GA",
          "скъпи оценки",
          "subpopulations + migration",
          "migration tuning"
        ]
      ]
    },
    "representations": {
      "title": "Сравнение на представяния и кодирания",
      "columns": [
        "Представяне",
        "Типични задачи",
        "Operators",
        "Добра практика"
      ],
      "rows": [
        [
          "Бинарно",
          "feature selection",
          "1-point, uniform, bit-flip",
          "започнете с p_m ≈ 1/L"
        ],
        [
          "Реално",
          "engineering tuning",
          "SBX, polynomial, Gaussian",
          "контролирайте constraints"
        ],
        [
          "Пермутации",
          "sequencing",
          "OX, PMX, swap, inversion",
          "избягвайте naive one-point"
        ],
        [
          "Random keys",
          "indirect sequencing",
          "real-coded + decoder",
          "ясно tie-breaking"
        ],
        [
          "Дървета",
          "GP, symbolic regression",
          "subtree crossover",
          "следете bloat"
        ]
      ]
    },
    "libraries": {
      "title": "Сравнение на библиотеки и инструменти",
      "columns": [
        "Език",
        "Библиотека",
        "Силни страни",
        "Най-добра употреба"
      ],
      "rows": [
        [
          "Python",
          "DEAP",
          "прозрачен framework",
          "custom GA и GP"
        ],
        [
          "Python",
          "PyGAD",
          "лесна употреба",
          "quick applications"
        ],
        [
          "Python/C++",
          "pygmo",
          "island model",
          "parallel optimization"
        ],
        [
          "Python",
          "pymoo",
          "MOEA stack и indicators",
          "NSGA-II/III"
        ],
        [
          "Python",
          "Platypus",
          "simple MOEA API",
          "rapid MOEA prototyping"
        ],
        [
          "Java",
          "jMetal",
          "experiments and indicators",
          "academic comparisons"
        ],
        [
          "Java",
          "MOEA Framework",
          "стабилен MOEA toolkit",
          "benchmark studies"
        ],
        [
          "Java",
          "Jenetics",
          "modern API",
          "production-oriented GA"
        ]
      ]
    },
    "presets": {
      "title": "Стартови parameter presets",
      "columns": [
        "Сценарий",
        "Population",
        "Crossover",
        "Mutation",
        "Selection"
      ],
      "rows": [
        [
          "Учебен binary GA",
          "50-200",
          "0.8-0.95",
          "≈ 1/L",
          "tournament 2-4"
        ],
        [
          "Real-coded engineering",
          "100-300",
          "≈ 0.9",
          "per-variable tuning",
          "tournament/rank"
        ],
        [
          "NSGA-II",
          "100-400",
          "≈ 0.9",
          "problem-dependent",
          "binary tournament"
        ],
        [
          "Permutation tasks",
          "100-500",
          "0.8-0.95",
          "swap/inversion",
          "tournament"
        ]
      ]
    },
    "readingPaths": {
      "title": "Препоръчани reading paths",
      "columns": [
        "Пътека",
        "Подходяща за",
        "Ключови спирки"
      ],
      "rows": [
        [
          "Beginner",
          "първо влизане",
          "ГА -> Каноничен процес -> Представяния -> Оператори -> Псевдокод"
        ],
        [
          "Theory",
          "формално разбиране",
          "Теория -> Формален модел -> Schema theorem -> Сходимост -> NFL"
        ],
        [
          "MOEA",
          "Pareto optimization",
          "Многоцелеви -> NSGA-II -> NSGA-III -> Многоцелеви метрики"
        ],
        [
          "Implementation",
          "практическа работа",
          "Фитнес -> Параметри -> Библиотеки -> Reproducibility"
        ]
      ]
    }
  },
  "glossary": {
    "GA": "Genetic Algorithm. Стохастичен алгоритъм за оптимизация, който работи с популация от кандидат-решения.",
    "EA": "Evolutionary Algorithm. По-широк клас методи, от който genetic algorithms са само една част.",
    "fitness": "Числова оценка за това колко добро е дадено решение спрямо текущата цел или критерий.",
    "genotype": "Кодираното решение, с което работят операторите на алгоритъма.",
    "phenotype": "Реалното решение след decode от кодираното представяне.",
    "schema": "Шаблон върху хромозоми, който описва група решения със споделена структура.",
    "elitism": "Правило, при което най-добрите решения се запазват в следващото поколение.",
    "crossover": "Оператор за recombination, който комбинира части от два родителя.",
    "mutation": "Оператор за случайна промяна, който поддържа разнообразие в популацията.",
    "selection": "Механизъм за избор на родители или оцелели индивиди според fitness или ranking.",
    "genetic algorithm": "Английското име на генетичен алгоритъм, често съкращавано като GA.",
    "chromosome": "Една кодирана единица в популацията, съдържаща гени или параметри.",
    "gene": "Елемент от представянето на решение, например един бит, число или символ.",
    "SBX": "Simulated Binary Crossover. Класически оператор за real-coded GA, който имитира свойствата на binary crossover.",
    "Pareto front": "Множество от недоминирани компромисни решения при многоцелеви задачи.",
    "hypervolume": "Многоцелева метрика, която измерва доминирания обем към избрана референтна точка.",
    "MOEA": "Multiobjective Evolutionary Algorithm. Еволюционен алгоритъм за едновременна оптимизация по няколко цели.",
    "NSGA-II": "Популярен многоцелеви алгоритъм с nondominated sorting, crowding distance и elitist survival.",
    "NSGA-III": "Разширение на NSGA-II за many-objective задачи с reference directions.",
    "Hamming distance": "Брой позиции, по които два бинарни низа се различават.",
    "OneMax": "Учебна оптимизационна задача, в която максимизирате броя единици в бинарен низ.",
    "island model": "Подход със субпопулации и миграция между тях за поддържане на разнообразие и паралелизация.",
    "crowding distance": "Мярка в NSGA-II за това колко изолирано е решение във фронта и колко разнообразие пази.",
    "nondominated sorting": "Подреждане на решения по Pareto фронтове според доминиране.",
    "repair": "Коригираща процедура, която прави невалидно решение отново допустимо.",
    "reproducibility": "Възможност да повторите експеримента със същите параметри, код и random seeds.",
    "decoder": "Функция, която превежда кодираното представяне в реално решение."
  }
};
