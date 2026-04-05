from copy import deepcopy


def page(key, slug, nav, title, level, parent, summary, bullets, example, reads, diagram=None, equations=None, tables=None):
    return {
        "key": key,
        "slug": slug,
        "nav": nav,
        "title": title,
        "level": level,
        "parent": parent,
        "summary": summary,
        "bullets": bullets,
        "example": example,
        "reads": reads,
        "diagram": diagram,
        "equations": equations or [],
        "tables": tables or [],
    }


SOURCES = {
    "holland": ["John Holland - Adaptation in Natural and Artificial Systems", "https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/"],
    "goldberg": ["David Goldberg - Genetic Algorithms in Search, Optimization, and Machine Learning", "https://dl.acm.org/doi/10.5555/534133"],
    "whitley": ["Darrell Whitley - Genetic Algorithm Tutorial", "https://www.ibug.doc.ic.ac.uk/media/uploads/documents/courses/GeneticAlgorithm-tutorial.pdf"],
    "vose": ["Michael Vose - The Simple Genetic Algorithm: Foundations and Theory", "https://direct.mit.edu/books/monograph/5437/The-Simple-Genetic-AlgorithmFoundations-and-Theory"],
    "nfl": ["Wolpert and Macready - No Free Lunch Theorems for Optimization", "https://www.cs.ubc.ca/~hutter/earg/papers07/00585893.pdf"],
    "bean": ["James Bean - Random Keys for Sequencing and Optimization", "https://pubsonline.informs.org/doi/10.1287/ijoc.6.2.154"],
    "nsga2": ["Kalyanmoy Deb et al. - NSGA-II", "https://sci2s.ugr.es/sites/default/files/files/Teaching/OtherPostGraduateCourses/Metaheuristicas/Deb_NSGAII.pdf"],
    "nsga3": ["Kalyanmoy Deb - NSGA-III materials", "https://www.egr.msu.edu/~kdeb/papers/k2012016.pdf"],
    "sbx": ["Deb and Agrawal - Simulated Binary Crossover", "https://www.complex-systems.com/abstracts/v09_i02_a02/"],
    "coco": ["COCO/BBOB Test Suite", "https://numbbo.github.io/coco/testsuites/bbob"],
    "bbob": ["Hansen et al. - BBOB Experimental Setup", "https://sci2s.ugr.es/sites/default/files/files/TematicWebSites/EAMHCO/contributionsGECCO09/bbobdocexperiment.pdf"],
    "dtlz": ["Deb, Thiele, Laumanns and Zitzler - DTLZ Test Problems", "https://tik-old.ee.ethz.ch/file//3ec604450bf683daaf27f9027e69f44d/DTLZ2004a.pdf"],
    "zdt": ["Zitzler, Deb and Thiele - ZDT Test Problems", "https://sop.tik.ee.ethz.ch/publicationListFiles/zdt2000a.pdf"],
    "wfg": ["Huband et al. - WFG Toolkit", "https://www.research-collection.ethz.ch/bitstreams/4d08c69c-9f97-424d-bbf6-7a647bcb3d13/download"],
    "assess": ["Zitzler et al. - Performance Assessment of Multiobjective Optimizers", "https://sop.tik.ee.ethz.ch/publicationListFiles/ztlf2003a.pdf"],
    "deap": ["DEAP Documentation", "https://deap.readthedocs.io/"],
    "pygad": ["PyGAD Documentation", "https://pygad.readthedocs.io/"],
    "pygmo": ["pygmo Documentation", "https://esa.github.io/pygmo2/"],
    "pymoo": ["pymoo", "https://pymoo.org/"],
    "platypus": ["Platypus Documentation", "https://platypus.readthedocs.io/"],
    "jmetal": ["jMetal Documentation", "https://jmetal.readthedocs.io/"],
    "moea": ["MOEA Framework", "https://moeaframework.org/"],
    "jenetics": ["Jenetics Manual", "https://jenetics.io/manual/manual-7.2.0.pdf"],
    "eiben": ["Eiben et al. - Parameter Control in Evolutionary Algorithms", "https://www.cs.vu.nl/~gusz/papers/2007-eib-mich-schoen-smit-chap.pdf"],
    "koza": ["John Koza - Genetic Programming", "https://mitpress.mit.edu/9780262527910/genetic-programming/"],
    "popov": ["Попов (2003) - Генетични алгоритми за оптимизация", "https://p0p0v.com/science/downloads/Popov03.pdf"],
    "vellev": ["Велев - Оптимизация на SQL заявки с GA", "https://www.uni-sofia.bg/index.php/bul/content/download/89255/688277/version/1/file/Vellev_autoref_final.pdf"],
    "pid": ["GA-базирана оптимизация на PI/PID регулатори", "https://e-university.tu-sofia.bg/e-publ/files/1064_Yordanova_Georgieva_article_E_Eotchet.pdf"],
    "fuzzy": ["Български материали за генетични размити системи", "https://www.bfu.bg/uploads/MyDocuments/summaries_pg.pdf"],
}


GLOSSARY = {
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
    "decoder": "Функция, която превежда кодираното представяне в реално решение.",
}


TOP_LEVEL = [
    "home", "ga", "teoriya", "predstavyane", "operatori", "fitnes", "parametri",
    "razshireniya", "ocenyavane", "implementaciya", "prilozheniya", "kapani", "iztochnici"
]


TABLES = {
    "variants": {
        "title": "Сравнение на ключови GA и MOEA варианти",
        "columns": ["Подход", "Подходящ за", "Основна идея", "Ключов риск"],
        "rows": [
            ["Каноничен GA", "общи дискретни задачи", "selection + crossover + mutation", "premature convergence"],
            ["Real-coded GA", "engineering parameters", "continuous genes + SBX/mutation", "repair bias"],
            ["Random keys GA", "sequencing", "indirect decode by sorting", "decoder bias"],
            ["NSGA-II", "2-3+ цели", "nondominated sorting + crowding", "sorting cost"],
            ["NSGA-III", "many-objective", "reference directions", "coverage depends on references"],
            ["Island GA", "скъпи оценки", "subpopulations + migration", "migration tuning"],
        ],
    },
    "representations": {
        "title": "Сравнение на представяния и кодирания",
        "columns": ["Представяне", "Типични задачи", "Operators", "Добра практика"],
        "rows": [
            ["Бинарно", "feature selection", "1-point, uniform, bit-flip", "започнете с p_m ≈ 1/L"],
            ["Реално", "engineering tuning", "SBX, polynomial, Gaussian", "контролирайте constraints"],
            ["Пермутации", "sequencing", "OX, PMX, swap, inversion", "избягвайте naive one-point"],
            ["Random keys", "indirect sequencing", "real-coded + decoder", "ясно tie-breaking"],
            ["Дървета", "GP, symbolic regression", "subtree crossover", "следете bloat"],
        ],
    },
    "libraries": {
        "title": "Сравнение на библиотеки и инструменти",
        "columns": ["Език", "Библиотека", "Силни страни", "Най-добра употреба"],
        "rows": [
            ["Python", "DEAP", "прозрачен framework", "custom GA и GP"],
            ["Python", "PyGAD", "лесна употреба", "quick applications"],
            ["Python/C++", "pygmo", "island model", "parallel optimization"],
            ["Python", "pymoo", "MOEA stack и indicators", "NSGA-II/III"],
            ["Python", "Platypus", "simple MOEA API", "rapid MOEA prototyping"],
            ["Java", "jMetal", "experiments and indicators", "academic comparisons"],
            ["Java", "MOEA Framework", "стабилен MOEA toolkit", "benchmark studies"],
            ["Java", "Jenetics", "modern API", "production-oriented GA"],
        ],
    },
    "presets": {
        "title": "Стартови parameter presets",
        "columns": ["Сценарий", "Population", "Crossover", "Mutation", "Selection"],
        "rows": [
            ["Учебен binary GA", "50-200", "0.8-0.95", "≈ 1/L", "tournament 2-4"],
            ["Real-coded engineering", "100-300", "≈ 0.9", "per-variable tuning", "tournament/rank"],
            ["NSGA-II", "100-400", "≈ 0.9", "problem-dependent", "binary tournament"],
            ["Permutation tasks", "100-500", "0.8-0.95", "swap/inversion", "tournament"],
        ],
    },
    "readingPaths": {
        "title": "Препоръчани reading paths",
        "columns": ["Пътека", "Подходяща за", "Ключови спирки"],
        "rows": [
            ["Beginner", "първо влизане", "ГА -> Каноничен процес -> Представяния -> Оператори -> Псевдокод"],
            ["Theory", "формално разбиране", "Теория -> Формален модел -> Schema theorem -> Сходимост -> NFL"],
            ["MOEA", "Pareto optimization", "Многоцелеви -> NSGA-II -> NSGA-III -> Многоцелеви метрики"],
            ["Implementation", "практическа работа", "Фитнес -> Параметри -> Библиотеки -> Reproducibility"],
        ],
    },
}


BASE_PAGES = [
    page("home", "/", "Начало", "Генетични алгоритми", "Beginner", None,
         "Статичен учебен сайт за genetic algorithms, изграден по PDF структурата и подготвен за GitHub Pages без нужда от build процес.",
         ["Започнете с ГА, Каноничен процес и Представяния, ако темата ви е нова.", "Използвайте Теория, Параметри и Оценяване, ако искате по-строг прочит.", "Сравнителните таблици събират основните варианти, кодирания, библиотеки и начални настройки."],
         "Сайтът има обзорни страници за бърза ориентация и по-дълбоки страници за теми като schema theorem, NSGA-II и COCO/BBOB.",
         ["whitley", "goldberg", "popov"], "site-navigation.svg", ["max f(x), x in X", "Budget ≈ population size × generations"], ["variants", "representations", "libraries", "presets"]),
    page("ga", "/ga/", "ГА", "Какво е генетичен алгоритъм", "Beginner", "home",
         "Първо въведение в genetic algorithms: какво са genotype, phenotype и fitness и защо алгоритъмът работи с популация, а не с едно решение.",
         ["ГА работи с група решения, а не само с един кандидат.", "Selection, crossover и mutation движат търсенето напред.", "Успехът зависи от това как е кодирана задачата и какви оператори използвате."],
         "Представете си, че едно решение е бинарен низ като 101010. Целта е да получите колкото може повече единици, а fitness е просто броят на 1. В поколение 1 низовете са случайни. В поколение 5 започват да се виждат повече единици. В поколение 20 повечето добри решения вече са близо до 111111. С времето по-добрите решения се запазват и комбинират, което води до подобрение.",
         ["holland", "whitley", "popov"], "ga-process-flow.svg", ["F(g) = f(phi(g))"]),
    page("ga-kanonichen-proces", "/ga/kanonichen-proces/", "Каноничен процес", "Каноничен процес", "Beginner", "ga",
         "Каноничният цикъл на ГА минава през инициализация, оценяване, селекция, кръстосване, мутация, замяна и условие за спиране.",
         ["Generational и steady-state вариантите се държат различно във времето.", "Броят evaluations е най-важната мярка за използвания бюджет.", "Елитизмът пази най-добрите решения да не се загубят случайно."],
         "Представете си популация от 100 низа. Първо ги създавате, после мерите fitness, избирате по-добрите, кръстосвате ги и добавяте малки промени чрез мутация. След това оценявате новите решения и цикълът започва отново. Ако направите 500 поколения, ще имате около 50 000 оценки на fitness.",
         ["whitley", "goldberg"], "ga-process-flow.svg", ["Budget ≈ N × G"]),
    page("ga-koga-raboti", "/ga/koga-raboti/", "Кога работи", "Кога ГА работи и кога не", "Mixed", "ga",
         "GA е силен при black-box, noisy, combinatorial или rugged задачи, но не е универсално най-добрият метод.",
         ["Problem class matters повече от общи обещания.", "Representation и operators вкарват inductive bias.", "За гладки convex задачи често има по-специализирани методи."],
         "Ако търсите добър ред на операции в SQL заявка, GA може да е полезен, защото има много възможни комбинации и няма лесен пряк път. Ако задачата е гладка и добре описана математически, често има по-пряк оптимизационен метод. Така примерът показва, че силата на GA зависи от вида задача, а не от общо обещание, че е най-добър навсякъде.",
         ["nfl", "whitley", "vellev"], "theory-map.svg"),
    page("teoriya", "/teoriya/", "Теория", "Теоретични основи", "Mixed", "home",
         "Теоретичният раздел събира формалния модел, schema theorem, сходимостта и No Free Lunch.",
         ["Историческата интуиция не е същото като пълна теория.", "Формалните модели правят твърденията за сходимост по-точни.", "Практиката става по-добра, когато разбирате какво теорията наистина казва."],
         "Schema theorem дава интуиция защо някои полезни шаблони могат да се разпространяват в популацията. Марковият модел описва по-строго как популацията се променя с времето. Така теорията не е само абстракция, а инструмент да мислите по-точно за поведението на алгоритъма.",
         ["whitley", "vose", "nfl"], "theory-map.svg"),
    page("teoriya-formalen-model", "/teoriya/formalen-model/", "Формален модел", "Формален модел и терминология", "Mixed", "teoriya",
         "Формалният модел дефинира genotype space, phenotype space, decode function и fitness mapping.",
         ["Разграничете parent selection от survivor selection.", "Decoder и repair могат да са критични части от алгоритъма.", "Формалният език улеснява сравненията между variants."],
         "При random keys decoder-ът превръща real-valued genome в валидна permutation чрез сортиране.",
         ["vose", "whitley"], None, ["phi: G -> X", "F(g) = f(phi(g))"]),
    page("teoriya-schema-theorem", "/teoriya/schema-theorem/", "Schema theorem", "Схеми и Schema Theorem", "Advanced", "teoriya",
         "Schema theorem дава долен праг за очаквания брой копия на schema в следващото поколение при binary GA.",
         ["Schema описва шаблон върху binary strings.", "Selection усилва надсредните schemas.", "Crossover и mutation могат да разрушават дълги и високо-редови schemas."],
         "Schema 1**0****1 е по-уязвима при one-point crossover, ако defining length е голяма.",
         ["holland", "whitley", "vose"], "theory-map.svg", ["H in {0,1,*}^L", "o(H) = брой фиксирани позиции в H", "delta(H) = разстоянието между първата и последната фиксирана позиция", "P(schema survives mutation) approx (1 - p_m) ^ o(H)"]),
    page("teoriya-sxodimost", "/teoriya/sxodimost/", "Сходимост", "Маркови модели и сходимост", "Advanced", "teoriya",
         "GA може да се моделира като stochastic process върху популации и така да се говори по-ясно за convergence и expected hitting time.",
         ["Ненулева mutation променя значението на convergence.", "Elitism намалява риска да загубите най-доброто решение.", "Практическият фокус често е probability of success до budget."],
         "Вместо да обещавате гарантирана победа, измервайте вероятност за достигане на target до фиксиран budget.",
         ["vose", "whitley"], None, ["P(S_(t+1) | S_t)", "P(success by budget B)"]),
    page("teoriya-no-free-lunch", "/teoriya/no-free-lunch/", "NFL", "No Free Lunch", "Mixed", "teoriya",
         "No Free Lunch theorem показва, че няма универсално най-добър optimizer върху всички възможни функции.",
         ["Успехът идва от bias към конкретен клас задачи.", "Encoding, operators и fitness shaping носят този bias.", "Методологията за benchmarking трябва да е прозрачна."],
         "Истинският engineering въпрос не е кой е универсално best, а кой е най-подходящ за дадения problem class.",
         ["nfl", "coco"]),
    page("predstavyane", "/predstavyane/", "Представяния", "Представяния и кодиране", "Mixed", "home",
         "Представянето определя как е записано решението и как операторите действат върху него.",
         ["Binary encoding е удобен за schema-style reasoning.", "Real-coded GA избягва излишна дискретизация.", "Permutation и tree encodings искат специални operators."],
         "Ако задачата е избор на характеристики, бинарното представяне е естествено: всеки бит казва дали нещо участва или не. Ако задачата е подреждане на градове или операции, трябва представяне, което пази валидната последователност. Това показва, че кодиране, което е удобно за една задача, може да е лошо за друга.",
         ["popov", "bean", "koza"], "representation-overview.svg", tables=["representations"]),
    page("predstavyane-binarno-diskretno", "/predstavyane/binarno-diskretno/", "Бинарно/дискретно", "Бинарно и дискретно кодиране", "Beginner", "predstavyane",
         "Binary и дискретните encodings са историческият стандарт за GA и естествен дом за schema-based intuition.",
         ["Bit-flip mutation е лесна за разбиране и анализ.", "Hamming distance е проста мярка за близост.", "Feature selection е класически пример за binary representation."],
         "При OneMax всеки низ съдържа само 0 и 1, а fitness е броят на единиците. Низът 101010 има fitness 3, а низът 111110 има fitness 5. Така лесно виждате как алгоритъмът се движи към по-добри решения чрез повече единици.",
         ["goldberg", "popov"], None, ["OneMax: f(x) = sum_i x_i", "p_m ≈ 1 / L"]),
    page("predstavyane-realno-kodirani", "/predstavyane/realno-kodirani/", "Реално-кодирани", "Реално-кодирани ГА", "Mixed", "predstavyane",
         "Real-coded GA работи директно с continuous parameters и често използва SBX и polynomial mutation.",
         ["Избягвате груба бинаризация на continuous variables.", "Constraint handling става особено важен.", "Engineering tuning задачите естествено попадат тук."],
         "При настройване на PID регулатор едно решение може да е тройката Kp, Ki и Kd. Алгоритъмът сравнява различни числови комбинации и пази тези, които дават по-добро управление. Това е по-естествено от бинаризиране, защото параметрите по природа са реални числа.",
         ["sbx", "pid"], "representation-overview.svg"),
    page("predstavyane-permutacionni", "/predstavyane/permutacionni/", "Пермутации", "Пермутационни представяния", "Mixed", "predstavyane",
         "Permutation problems изискват валидност: всяка стойност трябва да се появи точно веднъж.",
         ["Naive one-point crossover често създава дубликати.", "OX и PMX пазят важни свойства на permutation.", "Repair може да вкара bias и допълнителен overhead."],
         "Ако задачата е да подредите операции или градове, всяка позиция в реда е важна и не бива да се повтаря. Добър пример е route или join ordering, където едно повторение или липсващ елемент прави решението невалидно. Затова тук операторите трябва да пазят структурата на подредбата.",
         ["vellev", "bean"]),
    page("predstavyane-random-keys", "/predstavyane/random-keys/", "Random keys", "Random keys и индиректно кодиране", "Advanced", "predstavyane",
         "Random keys използва real-valued genome и decoder, който чрез sorting създава валидна permutation.",
         ["Validity идва от decoder-а, не от operator-а.", "Можете да използвате real-coded operators.", "Tie-breaking rules трябва да са ясно описани."],
         "Ключове [0.2, 0.9, 0.1] могат да се декодират до permutation [3, 1, 2].",
         ["bean"], None, ["pi = argsort(k)"]),
    page("predstavyane-genetic-programming", "/predstavyane/genetic-programming/", "GP", "Дървета и Genetic Programming", "Mixed", "predstavyane",
         "При GP индивидите са syntax trees и variation оперира върху поддървета вместо върху фиксирани хромозоми.",
         ["Subtree crossover е централният operator.", "Bloat е реален риск при tree-based search.", "Type safety и execution cost са важни implementation теми."],
         "Symbolic regression търси expression tree, който минимизира prediction error.",
         ["koza", "deap"]),
    page("operatori", "/operatori/", "Оператори", "Оператори", "Mixed", "home",
         "Selection, crossover и mutation движат търсенето, но работят добре само ако пасват на представянето на задачата.",
         ["Selection задава натиск към по-добрите решения.", "Crossover комбинира части от вече намерена структура.", "Mutation пази разнообразието и помага да не забиете твърде рано."],
         "Представете си двама родители, които вече имат полезни части в решението си. Кръстосването може да събере тези части, а мутацията може да добави малка полезна промяна. Ако операторът не пасва на представянето, лесно се получават невалидни или безсмислени решения. Затова операторите трябва да се избират според задачата, а не по навик.",
         ["whitley", "goldberg"], "operators-overview.svg"),
    page("operatori-selekciya", "/operatori/selekciya/", "Селекция", "Селекция", "Mixed", "operatori",
         "Selection контролира кои индивиди получават шанс да влияят на следващото поколение.",
         ["Roulette и SUS зависят от scaling.", "Rank и tournament често са по-стабилни.", "Selection pressure трябва да се настройва заедно с mutation."],
         "При tournament selection избирате няколко кандидата и оставяте най-добрия да спечели. Ако турнирът е с 2-4 участника, натискът често е достатъчен, без да убива твърде рано разнообразието. Така виждате как селекцията не просто избира, а настройва колко силно популацията следва добрите решения.",
         ["whitley", "goldberg"]),
    page("operatori-krastosvane", "/operatori/krastosvane/", "Кръстосване", "Кръстосване", "Mixed", "operatori",
         "Crossover комбинира information от родители, но само ако representation го позволява смислено.",
         ["Binary one-point и uniform crossover са класически варианти.", "SBX е стандартен choice за real-coded GA.", "Permutations изискват order-aware operators като OX и PMX."],
         "При бинарно кодиране можете да разрежете два родителя в една точка и да размените опашките им. Така едно дете може да вземе началото от единия и края от другия. При реално кодиране SBX прави подобна идея, но върху числа. Кръстосването е полезно, когато наистина може да събере добри части от различни решения.",
         ["sbx", "whitley"]),
    page("operatori-mutaciya", "/operatori/mutaciya/", "Мутация", "Мутация", "Mixed", "operatori",
         "Mutation е главният механизъм за diversity maintenance и за избягване на твърде ранно застиване.",
         ["Твърде ниска mutation води до homogenization.", "Твърде висока mutation прилича на random search.", "Формата на mutation зависи силно от representation."],
         "Ако бинарният низ е с дължина 100 и p_m = 0.01, средно се променя около един бит. Това е достатъчно, за да се появи нова посока на търсене, без да се разруши цялото решение. Така мутацията действа като малка корекция, а не като пълно рестартиране.",
         ["whitley", "sbx"], None, ["p_m ≈ 1 / L"]),
    page("fitnes", "/fitnes/", "Фитнес", "Фитнес и целеви функции", "Mixed", "home",
         "Fitness превежда реалния проблем в числена оценка, по която алгоритъмът разпознава по-добрите решения.",
         ["Разпределението на fitness влияе директно на selection.", "Scaling и normalization често са нужни, а не допълнение по избор.", "Работата с ограничения е част от fitness design, а не кръпка накрая."],
         "Представете си две решения, които изглеждат близки по качество, но едното нарушава важно ограничение. Ако fitness не отчита това правилно, алгоритъмът може да избира грешния кандидат. Така дори добри оператори и добро кодиране няма да помогнат, ако самата оценка е подвеждаща.",
         ["goldberg", "popov", "nsga2"]),
    page("fitnes-skalirane", "/fitnes/skalirane/", "Скалиране", "Дефиниране и скалиране", "Mixed", "fitnes",
         "Scaling превръща суровите objective values в стабилен signal за selection.",
         ["Rank-based approaches са по-устойчиви при широки диапазони.", "Noisy objectives често искат averaging или repeated evaluation.", "Direct reciprocal transforms могат да компресират твърде силно."],
         "Ако cost е между 1 и 1 000 000, rank selection често е по-стабилна от crude inversion.",
         ["goldberg", "popov"], None, ["F(x) = 1 / (1 + c(x))"]),
    page("fitnes-ogranicheniya", "/fitnes/ogranicheniya/", "Ограничения", "Ограничения", "Advanced", "fitnes",
         "Constraint handling включва penalties, Deb feasibility rules, repair и constrained dominance.",
         ["Penalty term трябва да е калибриран внимателно.", "Deb-style rules избягват ръчно penalty tuning в много случаи.", "Repair може да е полезен, но понякога въвежда bias."],
         "Представете си решение, което е почти добро, но нарушава ограничение само с малко. Ако наказанието е прекалено силно, алгоритъмът ще го отхвърли твърде рано. Ако е прекалено слабо, ще допуска лоши кандидати. Примерът тук е именно балансът между полезна информация и твърде грубо наказание.",
         ["nsga2"], None, ["F(x) = f(x) - lambda × violation(x)", "feasible решение се предпочита пред infeasible решение"]),
    page("parametri", "/parametri/", "Параметри", "Параметри и динамика", "Mixed", "home",
         "Population size, pressure, crossover, mutation и replacement работят като система, а не като отделни копчета.",
         ["Наблюдавайте best, mean и diversity едновременно.", "Parameter control може да е по-добър от static tuning.", "Convergence plots без context не са достатъчни."],
         "Ако mutation е твърде ниска, популацията може бързо да стане прекалено еднаква. Ако е твърде висока, добрите решения трудно се запазват. По същия начин по-голяма популация пази повече разнообразие, но струва повече оценки. Примерът показва, че параметрите трябва да се настройват като система.",
         ["eiben", "whitley", "pygmo"]),
    page("parametri-tuning-control", "/parametri/tuning-control/", "Контрол", "Настройване и контрол на параметри", "Advanced", "parametri",
         "Разделът сравнява offline tuning с deterministic, adaptive и self-adaptive parameter control.",
         ["Tuning фиксира стойностите преди старта.", "Adaptive control реагира на наблюдавани сигнали.", "Self-adaptive control вгражда параметрите в representation."],
         "Проста adaptive схема е да следите разнообразието и да увеличите mutation, когато то падне прекалено ниско. Така не чакате алгоритъмът да зацикли напълно, а реагирате по време на търсенето. Това е добър пример за разликата между статична и адаптивна настройка.",
         ["eiben", "whitley"]),
    page("parametri-sxodimost-diversitet", "/parametri/sxodimost-diversitet/", "Сходимост и разнообразие", "Сходимост и преждевременна конвергенция", "Mixed", "parametri",
         "Практическата convergence diagnosis изисква да следите не само progress, но и loss of diversity.",
         ["Best и mean fitness трябва да се гледат заедно.", "Low heterozygosity е warning signal.", "Premature convergence не е равна на успех."],
         "Ако best fitness се подобрява за кратко, но после всички индивиди започнат да си приличат твърде много, това е сигнал за преждевременна конвергенция. В такъв случай проблемът често е в прекалено силен selection pressure, твърде слаба mutation или неподходящо представяне. Така примерът ви учи как да разпознаете проблема по поведението на популацията.",
         ["whitley", "pygmo"], None, ["D = (2/L) × sum_i p_i (1 - p_i)"]),
    page("parametri-diversitet-mehanizmi", "/parametri/diversitet-mehanizmi/", "Механизми", "Модели за разнообразие", "Advanced", "parametri",
         "Niching, sharing, crowding и island models пазят множество promising regions вместо population takeover by one lineage.",
         ["Island models подпомагат и паралелизацията.", "Sharing и crowding са distance-aware pressure mechanisms.", "Миграционните политики са design choice, а не подробност."],
         "Осем islands с периодична migration е класически работещ модел при скъпи задачи.",
         ["whitley", "pygmo"]),
    page("razshireniya", "/razshireniya/", "Разширения", "Разширени методи", "Mixed", "home",
         "Разширените методи надграждат каноничния GA чрез local search, Pareto logic или специални survival strategies.",
         ["Hybridization усилва exploitation.", "MOEA работи с fronts вместо единствен optimum.", "Много разширения променят survival stage повече от variation stage."],
         "Ако базовият GA намира добри посоки, но спира преди да стигне наистина силни решения, често добавяте local search. Ако имате няколко цели, заменяте едно най-добро решение с набор от компромиси. Така примерът показва защо разширенията съществуват: не за украса, а за конкретни ограничения на базовия подход.",
         ["whitley", "nsga2", "nsga3"]),
    page("razshireniya-memetichni", "/razshireniya/memetichni/", "Меметични", "Хибридни и меметични алгоритми", "Advanced", "razshireniya",
         "Memetic methods комбинират global population search с local improvement върху избрани индивиди.",
         ["Трябва да решите върху кои individuals да пускате local search.", "Budget split между global и local search е решаващ.", "Силен local search може да унищожи exploration."],
         "Често работещ вариант е първо GA да предложи няколко добри кандидата, а после локален метод да доизчисти само най-силните. Ако локалното търсене се пусне върху всички, цената може да стане твърде голяма. Това е добър пример за разделяне на ролите между глобално и локално търсене.",
         ["whitley", "vellev"]),
    page("razshireniya-multiobjective", "/razshireniya/multiobjective/", "Многоцелеви", "Многоцелеви ГА", "Mixed", "razshireniya",
         "Multiobjective GA търси Pareto множество от компромисни решения вместо едно единствено най-добро решение.",
         ["Dominance relation заменя простото подреждане по една стойност.", "Разнообразието по фронта е толкова важно, колкото и приближаването към него.", "NSGA-II и NSGA-III са сред най-важните отправни алгоритми."],
         "Представете си, че искате едновременно ниска цена и високо качество. Едно решение може да е по-евтино, но по-слабо, а друго по-скъпо, но по-добро. Вместо да изберете само едно число, многоцелевият GA пази няколко разумни компромиса. Така примерът показва защо популацията е естествена за многоцелеви задачи.",
         ["nsga2", "assess", "pymoo"], "pareto-front-illustration.svg", ["a dominates b if all objectives are no worse and at least one is better"]),
    page("razshireniya-nsga-ii", "/razshireniya/multiobjective/nsga-ii/", "NSGA-II", "NSGA-II", "Advanced", "razshireniya-multiobjective",
         "NSGA-II комбинира fast nondominated sorting, crowding distance и elitist survival.",
         ["Ранкирането става по nondominated fronts.", "Crowding distance пази spread по frontier-а.", "Sorting cost може да е значим при големи populations."],
         "Когато последният фронт не се побира, алгоритъмът избира решенията с по-голяма crowding distance.",
         ["nsga2", "pymoo"], None, ["O(M N^2)", "crowding(i) = sum_m нормализирано разстояние до съседите по цел m"]),
    page("razshireniya-nsga-iii", "/razshireniya/multiobjective/nsga-iii/", "NSGA-III", "NSGA-III", "Advanced", "razshireniya-multiobjective",
         "NSGA-III е ориентиран към many-objective scenarios, където crowding distance не е достатъчно дискриминативна.",
         ["Reference directions са сърцето на diversity control.", "Many-objective settings искат различна geometrical intuition.", "Choice of reference points влияе на резултата."],
         "Когато целите станат много, решенията вече трудно се разпределят равномерно само с обикновена crowding логика. Тогава reference directions действат като ориентири, към които алгоритъмът подрежда популацията. Това е пример как NSGA-III пази структура при по-сложни многоцелеви задачи.",
         ["nsga3", "assess"]),
    page("razshireniya-drugi-moea", "/razshireniya/multiobjective/drugi-moea/", "Други MOEA", "MOEA/D, SPEA2, IBEA", "Advanced", "razshireniya-multiobjective",
         "Други MOEA families използват decomposition, archive strength или quality indicators за selection.",
         ["MOEA/D работи с scalar subproblems.", "SPEA2 използва archive и strength values.", "IBEA използва indicator-driven selection."],
         "Ако задачата естествено се разделя на няколко подзадачи, MOEA/D може да е по-удобен избор. Ако искате по-силен архив или indicator-driven сравнение, SPEA2 и IBEA дават друга логика на оцеляване. Така примерът показва, че NSGA-II не е единственият разумен избор при много цели.",
         ["assess", "wfg", "platypus"]),
    page("ocenyavane", "/ocenyavane/", "Оценяване", "Оценяване и бенчмаркове", "Mixed", "home",
         "Оценяването показва не само най-добрия резултат, а и колко надеждно работи алгоритъмът.",
         ["Fitness вътре в алгоритъма не е същото като benchmark метрика.", "Множеството runs са задължителни при стохастични оптимизатори.", "Сравненията трябва да се правят с мисъл за ограничения бюджет."],
         "Представете си, че един алгоритъм печели веднъж много убедително, но в повечето останали runs е слаб. Друг алгоритъм може да няма най-добрия единичен резултат, но да е стабилен почти всеки път. Така примерът показва защо честното оценяване гледа и качество, и надеждност.",
         ["coco", "bbob", "assess"], "metrics-map.svg"),
    page("ocenyavane-metriki", "/ocenyavane/metriki/", "Метрики", "Метрики", "Mixed", "ocenyavane",
         "Metric section разделя single-objective и multiobjective reporting и обяснява защо evaluation protocol не е формалност.",
         ["Target-based metrics са по-информативни от единичен best result.", "Single-objective и multiobjective settings изискват различни инструменти.", "Reference point choices трябва да са експлицитни."],
         "Добра метрика е тази, която прави сравнението между runs, algorithms и benchmarks честно и разбираемо.",
         ["bbob", "assess"], "metrics-map.svg"),
    page("ocenyavane-metriki-ednocel", "/ocenyavane/metriki/ednocel/", "Едноцелеви", "Едноцелеви метрики", "Mixed", "ocenyavane-metriki",
         "Single-objective benchmarking използва best-so-far, success rate, runtime in evaluations, ERT и ECDF.",
         ["Броят evaluations често е по-важен от секунди.", "ERT наказва нестабилните methods.", "ECDF показва обобщено поведение върху много targets и instances."],
         "Ако само 20 от 30 runs достигат target, ERT включва и неуспешните attempts до budget.",
         ["coco", "bbob"], None, ["ERT = total evaluations across runs / number of successful runs"]),
    page("ocenyavane-metriki-mnogocel", "/ocenyavane/metriki/mnogocel/", "Многоцелеви", "Многоцелеви метрики", "Advanced", "ocenyavane-metriki",
         "Hypervolume, IGD, epsilon indicators и spread metrics измерват различни страни на Pareto approximation quality.",
         ["Hypervolume зависи от reference point.", "Една метрика рядко е достатъчна сама.", "Scaling between objectives влияе на conclusions."],
         "Два алгоритъма могат да имат близък hypervolume и съвсем различно покритие по frontier-а.",
         ["assess", "wfg"], None, ["Hypervolume(A, r) = обемът, доминиран от приближението A спрямо референтна точка r"]),
    page("ocenyavane-coco-bbob", "/ocenyavane/benchmarks/coco-bbob/", "COCO/BBOB", "Бенчмаркове COCO/BBOB", "Mixed", "ocenyavane",
         "COCO/BBOB е стандартизирана среда за black-box optimization benchmarking с ясни targets, budgets и post-processing.",
         ["BBOB включва 24 класически noiseless functions.", "ERT и ECDF са основни reporting tools.", "Dimension и instance selection трябва да се описват ясно."],
         "COCO позволява да сравните две GA configurations не само по best quality, а и по reliability across test suites.",
         ["coco", "bbob"]),
    page("ocenyavane-zdt-dtlz-wfg", "/ocenyavane/benchmarks/zdt-dtlz-wfg/", "ZDT/DTLZ/WFG", "ZDT, DTLZ, WFG", "Advanced", "ocenyavane",
         "Тези benchmark families покриват различни shapes и difficulties на multiobjective problems.",
         ["ZDT е класически и лесен за стартиране.", "DTLZ дава scalability по цели и променливи.", "WFG въвежда controllable bias, multimodality и non-separability."],
         "Ако сравнявате MOEA сериозно, използвайте повече от един benchmark family.",
         ["zdt", "dtlz", "wfg"]),
    page("ocenyavane-slojnost", "/ocenyavane/slojnost/", "Сложност", "Сложност и бюджет на оценки", "Mixed", "ocenyavane",
         "Computational cost идва от objective evaluations, variation overhead и понякога от expensive sorting или archiving.",
         ["При simulation-based optimization evaluation доминира.", "При евтини учебни задачи implementation overhead става видим.", "Parallel islands са естествена стратегия при скъпи objectives."],
         "Когато една evaluation отнема секунди, оптимизацията на sorting логиката не е най-важният bottleneck.",
         ["nsga2", "coco"], None, ["Cost approx O(N × C_eval) + operator overhead", "При NSGA-II сортирането често се описва с O(M N^2)"]),
    page("implementaciya", "/implementaciya/", "Имплементация", "Имплементация и инструменти", "Mixed", "home",
         "Този раздел превежда идеите от теорията и практиката в pseudocode, tooling и repeatable experiment setup.",
         ["Ясният pseudocode прави hooks-овете за decode и repair видими.", "Изборът на библиотека следва problem type.", "Logging и reproducibility са част от implementation quality."],
         "Една добра имплементация ясно отделя къде създавате популацията, къде смятате fitness и къде избирате кои решения оцеляват. Ако тези части са смесени, алгоритъмът става труден за проверка и повторение. Така примерът показва защо структурата на кода е част от самия резултат.",
         ["deap", "pymoo", "pygmo"]),
    page("implementaciya-psevdokod", "/implementaciya/psevdokod/", "Псевдокод", "Псевдокод и шаблони", "Beginner", "implementaciya",
         "Псевдокодът показва минималния algorithmic skeleton за generational GA и местата за decode, evaluate и survive.",
         ["Ясно отделете init, evaluate, select, vary и replace.", "Repair и constraint logic трябва да са explicit.", "Логовете са част от алгоритъма, не следмисъл."],
         "Проследете едно поколение от началото до края: init създава популацията, evaluate мери fitness, select избира родители, vary създава потомство и survive решава кой остава. Ако не знаете къде влиза repair, значи някоя от тези роли е смесена. Псевдокодът е полезен точно защото прави тези роли видими.",
         ["deap", "whitley"], None, ["while not stop(P, F): select -> vary -> evaluate -> survive"]),
    page("implementaciya-biblioteki", "/implementaciya/biblioteki/", "Библиотеки", "Библиотеки и tooling", "Mixed", "implementaciya",
         "Сравнение на библиотеки като DEAP, PyGAD, pygmo, pymoo, jMetal и MOEA Framework.",
         ["DEAP е силен за transparent prototyping.", "pymoo и Platypus са естествени за MOEA workflows.", "pygmo е добър избор за island-based parallelism."],
         "Ако искате бързо да пробвате класически GA, една библиотека с по-прост интерфейс може да е достатъчна. Ако ви трябват многоцелеви алгоритми и готови метрики, по-подходящ е специализиран MOEA toolkit. Така примерът показва как инструментът се избира според задачата, а не според популярността му.",
         ["deap", "pygad", "pygmo", "pymoo", "jmetal", "moea", "jenetics"], "library-selection-flow.svg", tables=["libraries"]),
    page("implementaciya-reproducibility", "/implementaciya/reproducibility/", "Reproducibility", "Повторяемост и експериментален протокол", "Advanced", "implementaciya",
         "Стохастичните algorithms искат seeds, много runs, ясни stopping rules и архивирани artifacts.",
         ["Single run не е достатъчен.", "Съхранявайте configs, seeds и code version.", "Target-based reporting е по-стабилен от единични средни стойности."],
         "Представете си, че днес получавате силен резултат, а утре със същия код вече не можете да го възпроизведете. Без seed, точни параметри и описан stopping rule няма как да знаете защо. Така примерът показва защо repeatability не е формалност, а основа на доверие в експеримента.",
         ["bbob", "assess"]),
    page("prilozheniya", "/prilozheniya/", "Приложения", "Приложения и казуси", "Mixed", "home",
         "Приложенията показват как GA се променя според domain structure и evaluation cost.",
         ["Engineering problems искат real-coded logic.", "SQL optimization често иска permutations или trees.", "Fuzzy systems въвеждат tradeoff между quality и interpretability."],
         "В едни задачи GA настройва числови параметри, в други подрежда операции, а в трети балансира качество и разбираемост. Това значи, че един и същ алгоритъм сменя представяне, fitness и оператори според контекста. Така примерът показва как дизайнът се променя между различни реални казуси.",
         ["pid", "vellev", "fuzzy"]),
    page("prilozheniya-inzhenerstvo", "/prilozheniya/inzhenerstvo-upravlenie/", "Инженерство", "Управление и инженерна оптимизация", "Mixed", "prilozheniya",
         "Engineering optimization често работи с continuous parameters, simulation budgets и tradeoff между качество и robustness.",
         ["Real-coded GA е естествен baseline.", "Objective function често е composite criterion.", "Constraint handling не може да се игнорира."],
         "PID tuning с ISE плюс overshoot penalties е типичен engineering setup.",
         ["pid", "sbx"], None, ["ISE = integral e(t)^2 dt"]),
    page("prilozheniya-sql", "/prilozheniya/sql/", "SQL", "Оптимизация на SQL заявки", "Advanced", "prilozheniya",
         "Join ordering е combinatorial problem, който прави representation и operator design особено важни.",
         ["Cost model играе ролята на fitness.", "Permutation-aware operators пазят валидност.", "Random keys е удобна indirect алтернатива."],
         "Population-ът може да описва различни candidate join orders за една и съща заявка. Всеки ред се оценява чрез cost на плана, а по-добрите редове имат повече шанс да се комбинират и запазят. Така fitness става много конкретна част от SQL оптимизацията.",
         ["vellev", "bean"]),
    page("prilozheniya-genetichni-razmiti-sistemi", "/prilozheniya/genetichni-razmiti-sistemi/", "Размити системи", "Генетични размити системи", "Mixed", "prilozheniya",
         "GA настройва fuzzy rules и membership parameters, често под constraints за интерпретируемост.",
         ["Quality и simplicity често са конкурентни цели.", "Representation може да е real-coded или mixed.", "Penalty за complexity е естествен design choice."],
         "Оптимизацията на membership functions е добър пример за real-coded search. Алгоритъмът променя числови параметри, но не трябва да развали разбираемостта на системата. Така примерът показва как качество и интерпретируемост често трябва да се пазят едновременно.",
         ["fuzzy", "popov"]),
    page("kapani", "/kapani/", "Капани", "Чести капани и добри практики", "Mixed", "home",
         "Капаните в GA са повтаряеми: representation mismatch, bad scaling, premature convergence и weak evaluation protocol.",
         ["Много проблеми са structural, не parameter-only.", "Repair logic може да скрие по-дълбок design defect.", "One-run benchmarking е почти винаги подвеждащ."],
         "Тази секция е удобен checklist преди да твърдите, че даден algorithmic choice е добър или лош.",
         ["whitley", "bbob"]),
    page("kapani-dizayn", "/kapani/dizayn/", "Дизайн", "Типични грешки при дизайн", "Mixed", "kapani",
         "Design pitfalls идват от лошо съчетаване на representation, operators, fitness и pressure.",
         ["Permutation plus naive crossover е класически problem.", "Penalty terms могат да заличат signal.", "Силният pressure без diversity mechanisms води до early collapse."],
         "Ако repair постоянно спасява invalid offspring, проблемът вероятно е в representation-operator pair, не в repair code.",
         ["whitley", "bean", "nsga2"]),
    page("kapani-ocenyavane", "/kapani/ocenyavane/", "Оценяване", "Типични грешки при оценяване", "Advanced", "kapani",
         "Evaluation pitfalls включват single-run conclusions, липсващи seeds, лоши metrics и неясни reference points.",
         ["Best-of-one result не е доказателство.", "В stochastic optimization reliability matters.", "Hypervolume без context е опасна метрика."],
         "Два алгоритъма могат да имат близък best result и напълно различна надеждност на практика.",
         ["bbob", "assess"]),
    page("iztochnici", "/iztochnici/", "Източници", "Източници", "Mixed", "home",
         "Curated bibliography с foundational texts, MOEA papers, benchmarks, libraries и български източници.",
         ["Beginner path: Whitley, Goldberg, Popov.", "Theory path: Holland, Vose, NFL.", "MOEA path: Deb, Zitzler, benchmark suites."],
         "Източниците следват приоритета от PDF-а: primary и official sources първо, локални материали когато добавят стойност.",
         ["holland", "goldberg", "whitley", "vose", "nsga2", "nsga3", "nfl", "coco", "popov", "vellev"], None, tables=["readingPaths"]),
    page("not-found", "/404/", "404", "Страницата не е намерена", "Mixed", None,
         "Търсената страница не съществува в текущата статична структура. Използвайте картата на сайта или основната навигация.",
         ["Сайтът е изцяло статичен.", "Всяка валидна секция има собствена директория.", "Навигацията връща към основните hubs."],
         "Ако URL адресът е грешен, върнете се към началната страница и продължете през страничното меню.",
         []),
]


SECTION_GUIDANCE = {
    "ga": [
        "Тук идеята е проста: [[GA]] не подобрява само едно решение, а работи с цяла група кандидати и постепенно я променя.",
        "Най-важното е студентът да свърже [[genotype]], [[phenotype]], [[fitness]], [[selection]], [[crossover]] и [[mutation]] като части от един общ процес.",
    ],
    "teoriya": [
        "Теорията тук не е украса. Тя помага да се види кои обяснения са добра интуиция и кои вече са по-строги твърдения.",
        "Този раздел учи студента да различава исторически идеи, формални модели и реални изводи за това как се проектира алгоритъм.",
    ],
    "predstavyane": [
        "Представянето не е дребен детайл. То решава дали една малка промяна в кода ще е смислена промяна и в самото решение.",
        "Основният въпрос е как да кодирате задачата така, че операторите да правят смислени промени и да запазват полезната структура.",
    ],
    "operatori": [
        "Операторите са най-видимата част на алгоритъма, но сами по себе си не са магия. Те работят добре само ако са съгласувани с представянето и с начина, по който се смята [[fitness]].",
        "Тук основната тема е балансът между търсене на нови идеи и използване на вече добри решения. Една и съща настройка може да е добра в една задача и лоша в друга.",
    ],
    "fitnes": [
        "Много реализации се провалят не защото [[selection]] или [[mutation]] са лоши, а защото [[fitness]] не подава ясен сигнал.",
        "Този раздел показва как целта, скалирането, шумът и ограниченията променят поведението на целия алгоритъм.",
    ],
    "parametri": [
        "Параметрите не са независими копчета. Population size, selection pressure и mutation rate влияят едновременно върху скоростта на convergence, устойчивостта на search и вероятността да изгубите разнообразие твърде рано.",
        "Този раздел учи как да наблюдавате поведението на алгоритъма, а не просто как да пробвате числа на сляпо.",
    ],
    "razshireniya": [
        "Разширенията показват кога базовият [[GA]] вече не е достатъчен и какво се печели, когато добавите локално търсене, Pareto ranking или по-специални правила за оцеляване.",
        "Това е мостът от учебния вариант към по-съвременните практически методи.",
    ],
    "ocenyavane": [
        "Оценяването е отделна тема, защото стохастичните алгоритми могат да изглеждат силни в един run и много по-слаби, когато ги проверите честно.",
        "Тук студентът вижда разликата между вътрешния [[fitness]] сигнал и външните метрики, по които наистина сравнявате алгоритми.",
    ],
    "implementaciya": [
        "Този раздел свързва идеите от теорията с реален код. Тук се вижда кои части трябва да са ясни в една система: decode, evaluate, select, vary, survive, log и repeat.",
        "Целта не е да изберете една библиотека завинаги, а да разберете как се прави подреден и повторяем експеримент.",
    ],
    "prilozheniya": [
        "Приложенията показват защо една обща техника като [[GA]] има смисъл само ако е нагласена към самата задача.",
        "Тук студентът минава от общи думи към реални решения: как се кодира проблемът, как се смята цената и какво се следи като качество.",
    ],
    "kapani": [
        "Този раздел е направен като проверка за здрав разум. Той не учи нова част от алгоритъма, а показва кога един резултат изглежда добър, но всъщност не е убедителен.",
        "Ако студентът може да разпознава тези капани, той вече мисли като човек, който наистина разбира темата.",
    ],
    "iztochnici": [
        "Източниците тук не са просто добавка в края. Те показват откъде да продължите според това какво искате да разберете по-добре.",
        "Подборът следва PDF-а: първо основните текстове, после важните статии и benchmark документи, а накрая практичните ръководства за инструменти.",
    ],
}


SECTION_PITFALLS = {
    "ga": [
        "Не бъркайте [[GA]] с напълно произволно търсене. Случайността присъства, но избраните настройки създават насока към полезни решения.",
        "Не приемайте, че добрият резултат от един пример автоматично значи универсална сила на метода.",
    ],
    "teoriya": [
        "Не използвайте историческата интуиция като доказателство за всички наблюдавани на практика резултати.",
        "Не говорете за convergence без да уточните в какъв смисъл и при какви условия.",
    ],
    "predstavyane": [
        "Не избирайте encoding само защото е лесен за програмиране. Питайте дали пази валидност и локалност.",
        "Не добавяйте repair навсякъде, без да проверите дали именно encoding-ът не създава проблема.",
    ],
    "operatori": [
        "Не настройвайте [[selection]], [[crossover]] и [[mutation]] изолирано. Те влияят като система.",
        "Не приемайте, че един оператор е good practice за всяка задача и всяко представяне.",
    ],
    "fitnes": [
        "Не позволявайте на penalty термина да скрие полезния signal между иначе добри решения.",
        "Не сравнявайте raw objective values без да мислите за scaling и noise.",
    ],
    "parametri": [
        "Не тълкувайте early stagnation автоматично като convergence към нещо добро.",
        "Не променяйте много параметри наведнъж без наблюдение на diversity и budget usage.",
    ],
    "razshireniya": [
        "Не добавяйте local search или multiobjective ranking без да разбирате как променят survivor selection.",
        "Не оценявайте MOEA само по една метрика или по един фронт без контекст.",
    ],
    "ocenyavane": [
        "Не правете изводи по един run или по best-of-one резултат.",
        "Не използвайте секунди като единствена мярка, когато evaluations са доминиращата цена.",
    ],
    "implementaciya": [
        "Не оставяйте seed management и logging за по-късно. Те са част от дизайна на експеримента.",
        "Не смесвайте decode, repair и fitness logic без ясни интерфейси.",
    ],
    "prilozheniya": [
        "Не пренасяйте готова конфигурация от един domain към друг без нов анализ на encoding и objectives.",
        "Не гледайте само качеството на решението; гледайте и цената на evaluation pipeline.",
    ],
    "kapani": [
        "Не търсете само по-добри параметри, ако проблемът всъщност е structural mismatch.",
        "Не украсявайте резултатите с cherry-picked runs вместо с repeatable protocol.",
    ],
    "iztochnici": [
        "Не четете само едно popular explanation source. Сравнявайте tutorial, теория и benchmark methodology.",
        "Не пропускайте официалните ръководства за инструментите, ако искате да разберете практическите им ограничения.",
    ],
}


SECTION_TERMS = {
    "ga": ["GA", "EA", "fitness", "genotype", "phenotype", "selection", "crossover", "mutation"],
    "teoriya": ["GA", "schema", "elitism", "decoder"],
    "predstavyane": ["genotype", "phenotype", "decoder", "Hamming distance", "SBX"],
    "operatori": ["selection", "crossover", "mutation", "SBX"],
    "fitnes": ["fitness", "repair", "Pareto front"],
    "parametri": ["fitness", "elitism", "island model"],
    "razshireniya": ["MOEA", "Pareto front", "NSGA-II", "NSGA-III", "crowding distance"],
    "ocenyavane": ["hypervolume", "Pareto front", "reproducibility", "NSGA-II"],
    "implementaciya": ["GA", "decoder", "repair", "reproducibility"],
    "prilozheniya": ["GA", "fitness", "SBX", "decoder"],
    "kapani": ["fitness", "repair", "hypervolume", "reproducibility"],
    "iztochnici": ["GA", "MOEA", "NSGA-II", "NSGA-III"],
}


SECONDARY_LINKS = {
    "ga": ["teoriya", "predstavyane", "operatori"],
    "teoriya": ["ga", "parametri", "ocenyavane"],
    "predstavyane": ["operatori", "fitnes", "prilozheniya"],
    "operatori": ["predstavyane", "fitnes", "parametri"],
    "fitnes": ["operatori", "parametri", "kapani"],
    "parametri": ["operatori", "ocenyavane", "kapani"],
    "razshireniya": ["teoriya", "ocenyavane", "implementaciya"],
    "ocenyavane": ["implementaciya", "kapani", "razshireniya"],
    "implementaciya": ["fitnes", "ocenyavane", "iztochnici"],
    "prilozheniya": ["predstavyane", "fitnes", "razshireniya"],
    "kapani": ["fitnes", "ocenyavane", "implementaciya"],
    "iztochnici": ["ga", "teoriya", "implementaciya"],
}


PAGE_ENHANCEMENTS = {
    "home": {
        "intro": [
            "Този сайт не е направен само за бърза справка. Ако го четете подред, може да стигнете от първите понятия за [[GA]] до по-трудни теми като [[NSGA-II]], [[hypervolume]] и честно оценяване на резултатите.",
            "Подредбата следва PDF структурата: първо основите, после представянията и операторите, след това [[fitness]], параметри, разширени методи, оценяване, implementation и приложения.",
        ],
        "deep_dive": [
            "Най-добре е да четете с ясна цел. Ако тепърва влизате в темата, започнете от какво е [[GA]], после вижте каноничния процес и представянията. Ако вече пишете код, след това минете към [[fitness]], параметри и reproducibility.",
            "На всяка страница си задавайте три въпроса: какво означава идеята, как влияе на реалния алгоритъм и къде най-често се бърка. Така сайтът става учебен път, а не просто списък от термини.",
        ],
        "study_tracks": [
            {
                "title": "Начална пътека",
                "description": "За студенти, които тепърва влизат в темата и искат здрава основа без излишно формално натоварване.",
                "pages": ["ga", "ga-kanonichen-proces", "predstavyane", "operatori", "implementaciya-psevdokod"],
            },
            {
                "title": "Първо теория",
                "description": "За читатели, които искат да разберат формалния език, ограниченията и аргументите за сходимост.",
                "pages": ["teoriya", "teoriya-formalen-model", "teoriya-schema-theorem", "teoriya-sxodimost", "teoriya-no-free-lunch"],
            },
            {
                "title": "Пътека за имплементация",
                "description": "За хора, които ще пишат код или ще правят експерименти с библиотеки и benchmark среди.",
                "pages": ["fitnes", "parametri", "implementaciya", "implementaciya-biblioteki", "implementaciya-reproducibility"],
            },
            {
                "title": "Многоцелева пътека",
                "description": "За читатели, които се интересуват от Pareto оптимизация, фронтове и по-съвременни MOEA методи.",
                "pages": ["razshireniya-multiobjective", "razshireniya-nsga-ii", "razshireniya-nsga-iii", "ocenyavane-metriki-mnogocel", "ocenyavane-zdt-dtlz-wfg"],
            },
        ],
        "related_primary": ["ga", "teoriya", "predstavyane"],
        "related_secondary": ["implementaciya", "iztochnici", "kapani"],
        "terms": ["GA", "fitness", "selection", "crossover", "mutation", "NSGA-II", "hypervolume"],
    },
    "ga": {
        "simple_intro": "Накратко: GA пробва много решения едновременно и пази по-добрите, за да се подобрява с времето.",
        "intro": [
            "Най-лесно е да мислите за [[GA]] като за начин да търсите решение не с един опит, а с цяла група от решения. Част от тях са по-добри, част са по-слаби, а алгоритъмът постепенно измества популацията към по-добри варианти.",
            "Това е полезно при задачи, в които няма удобен градиент, има много локални оптимуми или решенията са трудни за описване с проста формула.",
        ],
        "deep_dive": [
            "Важно е да се види, че [[GA]] не е една единствена готова рецепта. Един и същ общ процес може да работи с бинарни низове, реални числа, пермутации или дървета, стига decode, операторите и [[fitness]] да са добре съгласувани.",
            "Затова, когато казвате „ползвам genetic algorithm“, всъщност трябва да уточните как е кодирано решението, как се избират родители, как се комбинират, как се променят и как се оценяват.",
        ],
        "pitfalls": [
            "Не свеждайте темата само до „алгоритъм, който смесва случайни решения“. Истинската сила идва от structured variation и selection signal.",
            "Не пропускайте думи като [[genotype]] и [[phenotype]], защото без тях по-късните теоретични и практични страници ще звучат откъснато.",
        ],
        "related_primary": ["ga-kanonichen-proces", "predstavyane", "operatori"],
        "related_secondary": ["teoriya", "fitnes", "prilozheniya"],
        "why_matters": "Защо това е важно: така виждате защо GA подобрява решенията постепенно, а не на случаен принцип.",
        "simple_example": {
            "title": "Simple Example: How a Genetic Algorithm Works",
            "intro": "Представете си, че всяко решение е кратък бинарен низ.",
            "items": [
                "Example individual: 101010",
                "Goal: maximize number of 1s",
                "Fitness function: count of 1s",
                "Generation 1 -> random strings",
                "Generation 5 -> more 1s appear",
                "Generation 20 -> near-optimal solution (almost all 1s)",
            ],
            "conclusion": "С времето по-добрите решения се запазват и комбинират, което води до подобрение.",
        },
        "visual_steps": [
            {"label": "Generation 1", "sequences": ["101010", "010101", "111000"]},
            {"label": "Generation 5", "sequences": ["111010", "110111", "111100"]},
            {"label": "Generation 20", "sequences": ["111111", "111110", "111111"]},
        ],
        "terms": ["GA", "EA", "genotype", "phenotype", "fitness", "selection", "crossover", "mutation"],
    },
    "ga-kanonichen-proces": {
        "simple_intro": "Накратко: това е основният цикъл, в който алгоритъмът създава, оценява и подобрява решенията.",
        "intro": [
            "Каноничният процес е най-доброто място за първо подреждане на темата. Почти всички по-сложни варианти са просто промени върху този основен цикъл.",
            "Ако тук ви е ясно кога се създава популацията, кога се оценява и кога се решава кой остава, после много по-лесно ще разберете и по-сложните варианти.",
        ],
        "deep_dive": [
            "Важно е не само да знаете реда на стъпките, а и какво прави всяка от тях. Evaluation показва кои решения са добри. Parent selection решава кой ще има шанс да създава потомство. Survivor selection пази част от натрупаното знание в популацията.",
            "Полезно е да различавате generational от steady-state вариант. В единия сменяте почти всичко наведнъж. В другия правите по-малки местни промени. Това се усеща върху разнообразието и скоростта на напредък.",
        ],
        "pitfalls": [
            "Не смесвайте parent selection и survivor selection като една и съща операция. В modern algorithms те често се оптимизират по различен начин.",
            "Не измервайте цената на процеса само в поколения. При скъпи задачи точната валута е броят на fitness evaluations.",
        ],
        "related_primary": ["ga", "operatori", "implementaciya-psevdokod"],
        "related_secondary": ["parametri", "fitnes", "razshireniya"],
        "why_matters": "Защо това е важно: когато знаете всяка стъпка, по-лесно разбирате къде алгоритъмът печели или губи качество.",
    },
    "teoriya": {
        "simple_intro": "Накратко: теорията обяснява защо алгоритъмът се държи така, а не само как изглежда.",
        "intro": [
            "Теоретичният раздел подрежда нещата по-строго. Той е нужен, защото интуитивните обяснения са полезни, но понякога могат да се тълкуват прекалено силно.",
            "Добрата теория не пречи на разбирането. Тя просто показва по-ясно къде една идея е добра интуиция и къде вече говорим за по-сериозно твърдение.",
        ],
        "deep_dive": [
            "Най-полезно е да сравнявате идеите една с друга. Schema theorem дава важна историческа интуиция, Markov models дават по-точен език, а [[nfl]] напомня, че няма универсален победител за всички задачи.",
            "Гледайте този раздел като основа за по-добър избор на representation, operators и evaluation protocol, а не като отделна академична добавка.",
        ],
        "related_primary": ["teoriya-formalen-model", "teoriya-schema-theorem", "teoriya-sxodimost"],
        "related_secondary": ["ga", "parametri", "ocenyavane"],
        "why_matters": "Защо това е важно: теорията пази от грешни обещания и помага да избирате по-разумно.",
    },
    "predstavyane": {
        "simple_intro": "Накратко: начинът, по който записвате решението, променя как алгоритъмът търси.",
        "why_matters": "Защо това е важно: начинът на кодиране влияе пряко колко добре алгоритъмът намира добри решения.",
    },
    "operatori": {
        "simple_intro": "Накратко: операторите решават кои решения оцеляват, как се смесват и как се променят.",
        "intro": [
            "Много хора първо гледат [[crossover]] и [[mutation]], защото те се виждат най-лесно. Но сами по себе си тези оператори не казват много, ако не знаете как е кодирано решението и как се смята [[fitness]].",
            "Полезно е да ги четете по роля: [[selection]] избира кой ще влияе повече, recombination смесва вече намерена полезна структура, а mutation пази шанс за нови посоки на търсене.",
        ],
        "deep_dive": [
            "Когато мислите за оператор, питайте се дали той прави смислени промени за конкретната задача. Добрият оператор не чупи без нужда валидността на решенията. Той не прави и напълно случайни скокове.",
            "Точно тук се вижда разликата между учебен пример и добра практическа реализация.",
        ],
        "related_primary": ["operatori-selekciya", "operatori-krastosvane", "operatori-mutaciya"],
        "related_secondary": ["predstavyane", "fitnes", "parametri"],
        "why_matters": "Защо това е важно: операторите определят дали добрите части на решенията ще се запазят и развият.",
    },
    "operatori-selekciya": {
        "why_matters": "Защо това е важно: селекцията дава повече шанс на добрите решения да оставят потомство.",
    },
    "operatori-krastosvane": {
        "why_matters": "Защо това е важно: кръстосването събира полезни части от различни решения.",
    },
    "operatori-mutaciya": {
        "why_matters": "Защо това е важно: мутацията помага алгоритъмът да не зацикли в слаби решения.",
    },
    "fitnes": {
        "simple_intro": "Накратко: fitness казва на алгоритъма кое решение е по-добро.",
        "intro": [
            "Разделът за [[fitness]] е решаващ, защото точно тук реалният проблем се превежда на езика на алгоритъма. Ако този превод е слаб, алгоритъмът няма ясна посока.",
            "В практиката [[fitness]] рядко е просто „вземи функцията и готово“. Често има скалиране, penalties, работа с ограничения и шум.",
        ],
        "deep_dive": [
            "Най-важната идея тук е, че [[selection]] не вижда самия свят, а само числата, които му давате чрез [[fitness]]. Затова скалирането и добрата обработка на стойностите променят самото поведение на търсенето.",
            "Оттук идва и връзката към benchmarking: ако [[fitness]] е построен по различен начин, трябва честно да покажете как после сравнявате алгоритмите.",
        ],
        "related_primary": ["fitnes-skalirane", "fitnes-ogranicheniya", "operatori-selekciya"],
        "related_secondary": ["parametri", "kapani", "ocenyavane"],
        "why_matters": "Защо това е важно: добрият fitness дава ясна посока на търсенето.",
    },
    "parametri": {
        "simple_intro": "Накратко: параметрите настройват колко бързо алгоритъмът търси и колко разнообразие пази.",
        "why_matters": "Защо това е важно: настройките променят баланса между бърз напредък и запазване на разнообразие.",
    },
    "razshireniya-multiobjective": {
        "simple_intro": "Накратко: вместо едно най-добро решение, тук търсите добри компромиси между няколко цели.",
        "intro": [
            "Многоцелевата оптимизация е естествена следваща стъпка. Вместо да търсите едно число, което събира всичко, пазите множество компромисни решения по [[Pareto front]].",
            "Това прави [[MOEA]] подходите полезни при задачи, в които качеството има повече от едно лице: например цена срещу надеждност или маса срещу якост.",
        ],
        "deep_dive": [
            "Най-голямата промяна е, че подреждането вече не става по една стойност на [[fitness]], а по relation of dominance плюс механизъм за разнообразие. Това променя и оцеляването, и начина на оценяване.",
            "Когато това стане ясно, преходът към [[NSGA-II]], [[NSGA-III]] и многоцелевите метрики става много по-лесен.",
        ],
        "related_primary": ["razshireniya-nsga-ii", "razshireniya-nsga-iii", "ocenyavane-metriki-mnogocel"],
        "related_secondary": ["teoriya", "fitnes", "ocenyavane-zdt-dtlz-wfg"],
        "why_matters": "Защо това е важно: така можете да търсите добри компромиси, а не само едно число.",
        "terms": ["MOEA", "Pareto front", "NSGA-II", "NSGA-III", "crowding distance", "hypervolume"],
    },
    "ocenyavane": {
        "simple_intro": "Накратко: този раздел показва как честно да проверите дали алгоритъмът наистина работи добре.",
        "intro": [
            "Добрата проверка на резултатите отличава сериозния експеримент от красивата, но слаба демонстрация. При стохастични алгоритми не стига да покажете един силен run.",
            "Този раздел е важен, защото учи не само как да търсите решения, а и как честно да кажете дали една настройка на [[GA]] е по-надеждна от друга.",
        ],
        "deep_dive": [
            "Правилният въпрос често не е „кой даде най-доброто единично число“, а „кой стига до добра цел по-стабилно и с какъв budget“. Затова тук се появяват ERT, ECDF, [[hypervolume]] и benchmark suites като COCO/BBOB.",
            "Тук ясно се вижда и връзката с reproducibility: без много runs, ясни targets и описани seeds изводите ви стават много по-слаби.",
        ],
        "related_primary": ["ocenyavane-metriki", "ocenyavane-coco-bbob", "ocenyavane-slojnost"],
        "related_secondary": ["implementaciya-reproducibility", "kapani-ocenyavane", "razshireniya-multiobjective"],
        "why_matters": "Защо това е важно: без добра проверка лесно може да повярвате на случайно добър резултат.",
        "terms": ["hypervolume", "reproducibility", "Pareto front", "NSGA-II"],
    },
    "implementaciya": {
        "simple_intro": "Накратко: тук идеите стават на реален код и повторяем експеримент.",
        "intro": [
            "Разделът за implementation превежда теорията в реални части от кода. Ако не знаете къде стои decoder-ът, кога се прави repair и как се записват runs, значи темата още не е подредена на практика.",
            "Тук [[GA]] започва да се вижда като система от отделни части: представяне, оценяване, оператори, логване и организация на експеримента.",
        ],
        "deep_dive": [
            "В добрата implementation има едно просто правило: всичко, което може да промени резултата, трябва да е ясно и повторяемо. Това важи за seeds, stopping criteria, параметри и стандартни настройки на библиотеките.",
            "Затова този раздел свързва псевдокода, библиотеките и reproducibility protocol-а в една обща картина.",
        ],
        "related_primary": ["implementaciya-psevdokod", "implementaciya-biblioteki", "implementaciya-reproducibility"],
        "related_secondary": ["fitnes", "ocenyavane", "iztochnici"],
        "why_matters": "Защо това е важно: добрата имплементация прави резултатите разбираеми и повторяеми.",
    },
    "iztochnici": {
        "intro": [
            "Добрата учебна стратегия не е да четете всичко наведнъж. По-добре е да изберете източник според това какво точно искате да разберете в момента.",
            "Страницата събира тези пътеки и следва PDF-а, който поставя на първо място основните и официалните източници, а след това полезните български материали.",
        ],
        "deep_dive": [
            "Ако искате пълна картина за [[GA]], комбинирайте поне три вида четене: един въвеждащ текст, един по-строг теоретичен текст и един източник за методика или инструменти.",
        ],
        "related_primary": ["ga", "teoriya", "implementaciya"],
        "related_secondary": ["ocenyavane", "prilozheniya", "kapani"],
    },
    "teoriya-formalen-model": {
        "intro": [
            "Тази страница дава точния език, с който по-късно се говори за представяне, decode и [[fitness]]. Без този език много по-късни теми изглеждат по-трудни, отколкото всъщност са.",
            "Не е нужно да мислите за формалния модел като за нещо страшно. Той просто подрежда какво е кодът на решението, какво е самото решение и как се минава от едното към другото.",
        ],
        "deep_dive": [
            "Тук най-важното е да не смесвате представянето със задачата. [[genotype]] е кодът, с който работи алгоритъмът, а [[phenotype]] е реалното решение, което интересува задачата.",
            "Когато това разграничение е ясно, по-лесно се вижда защо една и съща задача може да има различни представяния и защо decode функцията понякога е толкова важна, колкото и самите оператори.",
        ],
        "equation_intro": "Тези две формули са основата на страницата. Първата казва как минавате от кодираното решение към реалното, а втората показва как quality на реалното решение става quality на генома.",
        "related_primary": ["predstavyane", "ga", "fitnes"],
        "related_secondary": ["teoriya-schema-theorem", "implementaciya-psevdokod", "prilozheniya-sql"],
        "terms": ["genotype", "phenotype", "decoder", "fitness"],
    },
    "teoriya-schema-theorem": {
        "intro": [
            "Schema theorem е една от исторически важните идеи в genetic algorithms. Тя се опитва да обясни защо някои полезни частични структури могат да се разпространяват в популацията.",
            "Полезно е да я четете като интуиция с формален вкус, а не като универсално доказателство за успеха на всеки [[GA]].",
        ],
        "deep_dive": [
            "Тук е добре да си представите schema като шаблон, а не като едно конкретно решение. Така вместо да следите един индивид, започвате да следите как се държи цял клас от сходни индивиди.",
            "Именно тук се вижда и защо редът на schema и defining length имат значение: те показват колко лесно [[crossover]] и [[mutation]] могат да разрушат полезната структура.",
        ],
        "equation_intro": "Формулите тук имат една задача: да покажат как се описва schema и как mutation или crossover влияят върху шанса тя да оцелее. Подходът е полезен за мислене, но не трябва да се чете като пълно описание на динамиката.",
        "related_primary": ["teoriya", "predstavyane-binarno-diskretno", "operatori-krastosvane"],
        "related_secondary": ["teoriya-sxodimost", "operatori-mutaciya", "kapani-dizayn"],
        "terms": ["schema", "GA", "crossover", "mutation"],
    },
    "teoriya-sxodimost": {
        "intro": [
            "Когато се говори за сходимост, лесно е да се мисли, че алгоритъмът просто „стига до отговора и спира“. При [[GA]] това често не е точната картина, защото има случайност и mutation.",
            "Затова тук сходимостта се гледа по-внимателно: като вероятност, като време до target или като поведение при определени правила за оцеляване.",
        ],
        "deep_dive": [
            "Полезно е да приемете, че при ненулева [[mutation]] дори доброто решение не е завинаги защитено. Алгоритъмът може да го загуби, освен ако design-ът не пази част от най-доброто.",
            "Точно затова [[elitism]] и вероятността за успех до даден budget стават толкова важни. Те казват повече за реалното поведение на алгоритъма от твърдението „конвергира“. ",
        ],
        "equation_intro": "Тези означения не са само теория заради самата теория. Те помагат да формулирате как популацията се променя във времето и какво значи да стигнете до добър резултат с ограничен бюджет.",
        "related_primary": ["parametri-sxodimost-diversitet", "ocenyavane-metriki-ednocel", "teoriya"],
        "related_secondary": ["ga-kanonichen-proces", "kapani-ocenyavane", "ocenyavane-slojnost"],
        "terms": ["elitism", "mutation", "GA"],
    },
    "fitnes-skalirane": {
        "intro": [
            "Скалирането е нужно, когато суровите стойности не са удобни за selection. Ако едни решения изглеждат прекалено силни само заради мащаба на числата, търсенето може да стане нестабилно.",
            "Тук идеята не е да смените задачата, а да направите сигнала към алгоритъма по-полезен.",
        ],
        "deep_dive": [
            "Когато минавате от минимизация към максимизация, това не е просто дребен технически ход. Формата на преобразуването може да усили или да отслаби разликите между решенията.",
            "Затова доброто скалиране не е само математика, а и практическо решение за това какъв натиск искате да има върху популацията.",
        ],
        "equation_intro": "Показаната формула е пример как стойност на цена може да се превърне в по-удобен [[fitness]] сигнал. По-важно от самата формула е да разберете как тя променя разликите между решенията.",
        "related_primary": ["fitnes", "operatori-selekciya", "kapani-dizayn"],
        "related_secondary": ["fitnes-ogranicheniya", "ocenyavane-metriki-ednocel", "implementaciya-reproducibility"],
        "why_matters": "Защо това е важно: скалирането прави разликата между решенията по-полезна за селекцията.",
        "terms": ["fitness", "selection"],
    },
    "fitnes-ogranicheniya": {
        "intro": [
            "Ограниченията правят задачата по-реалистична, но и по-трудна. Не стига едно решение да е добро, то трябва и да е допустимо.",
            "Тази страница показва защо penalty подходите са удобни, но и защо понякога са трудни за настройване.",
        ],
        "deep_dive": [
            "Когато penalty term е твърде голям, всички невалидни решения изглеждат еднакво лоши и алгоритъмът губи полезна информация. Когато е твърде малък, получавате добри на вид, но недопустими решения.",
            "Точно затова Deb-style rules са толкова важни в практиката: те дават по-ясен ред за сравнение без да ви карат винаги да измисляте сложна penalty схема.",
        ],
        "equation_intro": "Формулата тук е типичен пример за penalty подход. Полезно е да я четете така: базовата цел се коригира със стойност, която наказва нарушението на ограниченията.",
        "related_primary": ["fitnes", "razshireniya-multiobjective", "kapani-dizayn"],
        "related_secondary": ["prilozheniya-inzhenerstvo", "parametri", "implementaciya-psevdokod"],
        "why_matters": "Защо това е важно: ограниченията пазят алгоритъма да не избира добри на вид, но невалидни решения.",
        "terms": ["fitness", "repair", "Pareto front"],
    },
    "predstavyane-binarno-diskretno": {
        "why_matters": "Защо това е важно: бинарното кодиране е лесно за работа и показва ясно как търсенето се подобрява.",
    },
    "predstavyane-realno-kodirani": {
        "why_matters": "Защо това е важно: реалното кодиране пази числовите параметри в естествения им вид.",
    },
    "predstavyane-permutacionni": {
        "why_matters": "Защо това е важно: при подредби операторите трябва да пазят валидния ред, а не само да смесват стойности.",
    },
    "razshireniya-nsga-ii": {
        "intro": [
            "NSGA-II е един от най-важните многоцелеви алгоритми и често е първият сериозен пример за [[MOEA]], който студентът среща.",
            "Причината е проста: той събира няколко важни идеи на едно място - nondominated sorting, [[crowding distance]] и elitist survival.",
        ],
        "deep_dive": [
            "Тук е важно да мислите не само как алгоритъмът намира добри решения, а и как пази разпределение по целия [[Pareto front]]. Ако запазите само най-силните по малък регион, губите важна част от многоцелевата картина.",
            "Именно затова crowding distance и правилото за избор от последния фронт са толкова важни за разбирането на NSGA-II.",
        ],
        "equation_intro": "Показаните означения подчертават две различни идеи: цената на самото сортиране и начина, по който се мери локалната гъстота около решение. И двете са важни, защото едното влияе на бързината, а другото на качеството на фронта.",
        "related_primary": ["razshireniya-multiobjective", "ocenyavane-metriki-mnogocel", "ocenyavane-slojnost"],
        "related_secondary": ["razshireniya-nsga-iii", "fitnes-ogranicheniya", "ocenyavane-zdt-dtlz-wfg"],
        "terms": ["NSGA-II", "Pareto front", "crowding distance", "nondominated sorting", "hypervolume"],
    },
    "ocenyavane-metriki-ednocel": {
        "intro": [
            "При едноцелева задача често изглежда, че е достатъчно да покажете най-добрия резултат. На практика това почти никога не стига.",
            "Тази страница показва какво печелите, когато гледате много runs и когато мерите усилието в evaluations, а не само в време.",
        ],
        "deep_dive": [
            "ERT е полезна, защото съчетава успехите и неуспехите в една обща картина. Така не се впечатлявате само от редките много добри runs, а виждате колко надеждно работи алгоритъмът.",
            "Това е по-честно към стохастичните методи и много по-полезно за сравнение между конфигурации.",
        ],
        "equation_intro": "ERT формулата трябва да се чете много просто: колко evaluations са похарчени общо, разделено на броя runs, които наистина са стигнали целта.",
        "related_primary": ["ocenyavane", "ocenyavane-coco-bbob", "implementaciya-reproducibility"],
        "related_secondary": ["kapani-ocenyavane", "ocenyavane-slojnost", "parametri-sxodimost-diversitet"],
    },
    "ocenyavane-metriki-mnogocel": {
        "intro": [
            "При многоцелевите задачи една метрика рядко стига сама. Трябва да гледате едновременно колко близо сте до фронта и колко добре покривате различните компромиси.",
            "Тази страница е важна, защото тук студентът започва да вижда, че оценяването на Pareto решения е отделна трудна тема.",
        ],
        "deep_dive": [
            "Най-честият капан е да се види едно добро число и да се приеме, че всичко е наред. При [[hypervolume]] например изборът на референтна точка може силно да промени изводите.",
            "Затова добрата практика е да не се разчита само на една метрика и винаги да се описва как е настроена тя.",
        ],
        "equation_intro": "Hypervolume формулата или концептуалното й описание има една главна цел: да покаже, че не измервате само близост до фронта, а и покритата част от пространството на целите.",
        "related_primary": ["razshireniya-multiobjective", "razshireniya-nsga-ii", "ocenyavane-zdt-dtlz-wfg"],
        "related_secondary": ["kapani-ocenyavane", "ocenyavane-slojnost", "fitnes-ogranicheniya"],
        "terms": ["hypervolume", "Pareto front", "NSGA-II"],
    },
    "ocenyavane-slojnost": {
        "intro": [
            "Сложността е важна не само като теоретична тема, а и като практичен ориентир. Тя ви помага да видите къде наистина отива времето.",
            "При едни задачи всичко се решава от цената на evaluation, а при други започват да се усещат и самите algorithmic overhead-и.",
        ],
        "deep_dive": [
            "Най-полезният навик тук е да разделяте цената на две: цена за смятане на целевата функция и цена за вътрешната работа на алгоритъма. Това веднага показва какво има смисъл да оптимизирате.",
            "При скъпи симулации най-важно е да намалите evaluations или да ги пуснете паралелно. При евтини учебни задачи вече има смисъл да гледате и разхода за сортиране.",
        ],
        "equation_intro": "Тези оценки за сложност са ориентир, не магическо число. Те ви помагат да видите кога evaluation доминира и кога вътрешните процедури като сортиране вече имат голямо значение.",
        "related_primary": ["ocenyavane", "razshireniya-nsga-ii", "parametri-diversitet-mehanizmi"],
        "related_secondary": ["ocenyavane-coco-bbob", "implementaciya-reproducibility", "kapani-ocenyavane"],
    },
}


def source_items(keys):
    return [{"label": SOURCES[key][0], "href": SOURCES[key][1]} for key in keys]


def top_section(key, pages):
    current = pages[key]
    while current["parent"] and current["parent"] != "home":
        current = pages[current["parent"]]
    return current["key"]


def default_related_primary(page, pages):
    if page["children"]:
        return page["children"][:4]
    if page["parent"] and page["parent"] in pages:
        siblings = [child for child in pages[page["parent"]]["children"] if child != page["key"]]
        candidates = [page["parent"]] + siblings
        return candidates[:4]
    return [key for key in TOP_LEVEL if key != page["key"]][:4]


def default_related_secondary(top_key, page):
    return [key for key in SECONDARY_LINKS.get(top_key, []) if key != page["key"]][:4]


def build_sections(page, top_key, enhancement):
    sections = [
        {
            "title": "Какво ще научите",
            "simpleIntro": enhancement.get("simple_intro", ""),
            "paragraphs": [page["summary"]] + enhancement.get("intro", SECTION_GUIDANCE.get(top_key, [])[:2]),
            "bullets": [],
            "equations": [],
            "whyMatters": enhancement.get("why_matters", ""),
            "exampleCard": None,
            "visualSteps": [],
            "note": "",
        },
        {
            "title": "Ключови идеи",
            "simpleIntro": "",
            "paragraphs": [],
            "bullets": page["bullets"],
            "equations": [],
            "whyMatters": "",
            "exampleCard": None,
            "visualSteps": [],
            "note": "",
        },
        {
            "title": "По-дълбоко обяснение",
            "simpleIntro": "",
            "paragraphs": enhancement.get("deep_dive", SECTION_GUIDANCE.get(top_key, [])[1:2]),
            "bullets": [],
            "equations": [],
            "whyMatters": "",
            "exampleCard": None,
            "visualSteps": [],
            "note": "",
        },
    ]
    if page["equations"]:
        sections.append(
            {
                "title": "Ключови означения и формули",
                "simpleIntro": "",
                "paragraphs": [enhancement.get("equation_intro", "Тези означения не изчерпват темата, но дават опорни точки за четене на източниците и помагат да видите как идеята се записва по-кратко и точно.")],
                "bullets": [],
                "equations": page["equations"],
                "whyMatters": "",
                "exampleCard": None,
                "visualSteps": [],
                "note": "",
            }
        )
    sections.append(
        {
            "title": "Пример и разбор",
            "simpleIntro": "",
            "paragraphs": [page["example"]],
            "bullets": [],
            "equations": [],
            "whyMatters": "",
            "exampleCard": enhancement.get("simple_example"),
            "visualSteps": enhancement.get("visual_steps", []),
            "note": "Използвайте примера като опорна картина. Целта му е да покаже защо темата има практическо значение, а не само да даде дефиниция.",
        }
    )
    sections.append(
        {
            "title": "Чести обърквания",
            "simpleIntro": "",
            "paragraphs": [],
            "bullets": enhancement.get("pitfalls", SECTION_PITFALLS.get(top_key, [])),
            "equations": [],
            "whyMatters": "",
            "exampleCard": None,
            "visualSteps": [],
            "note": "",
        }
    )
    return sections


def build_site_data():
    pages_list = deepcopy(BASE_PAGES)
    pages = {item["key"]: item for item in pages_list}

    for item in pages_list:
        item["children"] = [candidate["key"] for candidate in pages_list if candidate["parent"] == item["key"]]

    for item in pages_list:
        enhancement = PAGE_ENHANCEMENTS.get(item["key"], {})
        section_key = top_section(item["key"], pages) if item["key"] != "home" else "ga"
        item["topSection"] = section_key
        item["readings"] = source_items(item.pop("reads"))
        item["glossaryTerms"] = enhancement.get("terms", SECTION_TERMS.get(section_key, []))
        item["relatedPrimary"] = enhancement.get("related_primary", default_related_primary(item, pages))
        item["relatedSecondary"] = enhancement.get("related_secondary", default_related_secondary(section_key, item))
        item["studyTracks"] = enhancement.get("study_tracks", [])
        item["sections"] = build_sections(item, section_key, enhancement)
        item["figureCaption"] = enhancement.get("figure_caption", "Диаграма или placeholder asset, синхронизиран с темата от PDF спецификацията.")
        item["prerequisites"] = enhancement.get("prerequisites", [item["parent"]] if item["parent"] else [])

    return {
        "title": "Genetic Algorithms",
        "topLevel": TOP_LEVEL,
        "pages": {item["key"]: item for item in pages_list},
        "tables": TABLES,
        "glossary": GLOSSARY,
    }
