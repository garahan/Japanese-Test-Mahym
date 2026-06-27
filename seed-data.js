/* ============================================================
   SEED CONTENT — Minna no Nihongo L1–10
   pitch: 0 = heiban (flat), N = drop after Nth mora
   ============================================================ */
const SEED_CONTENT = [

{
  lessonNum: 25,
  topic: "〜ても",
  topicEn: "Even If / Even Though",
  module: 'L25', moduleLabel: 'L25 — Even If / Even Though', lesson: 'L25', lessonLabel: 'Even If / Even Though',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L25v1", word: "たとえ", reading: "たとえ", pitch: 0, meaning: "even if; supposing that (sets up a hypothetical)", example: "たとえあめでも、いきます。", exampleMeaning: "Even if it rains, I will go." },
    { id: "L25v2", word: "かならず", reading: "かならず", pitch: 2, meaning: "definitely; without fail; always", example: "かならずれんらくしてください。", exampleMeaning: "Please contact me without fail." },
    { id: "L25v3", word: "あきらめます", reading: "あきらめます", pitch: 4, meaning: "to give up; to resign oneself", example: "どんなにむずかしくてもあきらめません。", exampleMeaning: "No matter how hard it is, I won't give up." },
    { id: "L25v4", word: "がんばります", reading: "がんばります", pitch: 3, meaning: "to do one's best; to persevere; to hang in there", example: "つかれてもがんばります。", exampleMeaning: "Even if I am tired, I will do my best." },
    { id: "L25v5", word: "つかれます", reading: "つかれます", pitch: 3, meaning: "to get tired; to become exhausted", example: "しごとでつかれました。", exampleMeaning: "I got tired from work." },
    { id: "L25v6", word: "やめます", reading: "やめます", pitch: 2, meaning: "to quit; to stop; to give up", example: "たいへんでもやめたくないです。", exampleMeaning: "Even if it's hard, I don't want to quit." },
    { id: "L25v7", word: "いつでも", reading: "いつでも", pitch: 3, meaning: "anytime; at any time; always", example: "いつでもれんらくしてください。", exampleMeaning: "Please contact me anytime." },
    { id: "L25v8", word: "どんなに", reading: "どんなに", pitch: 0, meaning: "no matter how; however much", example: "どんなにつかれても、あきらめません。", exampleMeaning: "No matter how tired I am, I won't give up." }
  ],
  grammar: [
    {
      id: "L25g1",
      point: "〜ても (even if / even though)",
      explanation: "Form: verb て-form＋も; i-adjective: replace い with くても; na-adjective/noun: ＋でも. Expresses that the result in the main clause is unaffected by the condition in the ても clause. Often paired with かならず, やはり, それでも, or どんなに.",
      examples: [
        "あめがふっても、しあいはつづきます。 (Even if it rains, the match will continue.)",
        "たかくても、このかばんをかいたいです。 (Even if it is expensive, I want to buy this bag.)",
        "どんなにむずかしくても、あきらめません。 (No matter how difficult it is, I won't give up.)"
      ],
      listening: "Listen for て-form＋も to signal a concessive meaning: the speaker acknowledges the obstacle but asserts the outcome anyway.",
      production: "Describe three situations where you would carry on regardless, using 〜ても or どんなに〜ても."
    },
    {
      id: "L25g2",
      point: "〜なくても (even if not / without needing to)",
      explanation: "Negative concessive: verb ない-form (drop い)＋くても. Expresses that the main clause holds true even in the absence of the action or state in the subordinate clause.",
      examples: [
        "むりしなくても、だいじょうぶです。 (Even if you don't push yourself, it's okay.)",
        "まいにちれんしゅうしなくても、うまくなれます。 (Even without practising every day, you can improve.)",
        "たべなくても、げんきです。 (Even without eating, I'm fine.)"
      ],
      listening: "Listen for なく before ても to identify the negative concessive, in contrast to positive て-form＋も.",
      production: "Give advice to a worried friend using 〜なくても to reassure them they don't have to do certain things."
    }
  ],
  kanji: [
    { id: "L25k1", char: "諦", reading: "あきら（める）", meaning: "give up; abandon hope", exampleWord: "諦めます" },
    { id: "L25k2", char: "頑", reading: "がん", meaning: "stubborn; firm; persevere", exampleWord: "頑張る（がんばる）" },
    { id: "L25k3", char: "張", reading: "は（る）／ちょう", meaning: "stretch; strain; effort", exampleWord: "頑張ります（がんばります）" },
    { id: "L25k4", char: "疲", reading: "つか（れる）", meaning: "tired; fatigue", exampleWord: "疲れます" }
  ],
  reading: {
    id: "L25r1",
    title: "あきらめないこころ",
    passage: "たなかさんはにほんごのしけんにおちても、あきらめませんでした。\nどんなにむずかしくても、かならずもういちどちょうせんすると、こころのなかでおもいました。\nつかれても、まいにちさんじかんべんきょうしました。\nはんとしごのしけんで、とうとうごうかくしました。\nどんなにたいへんでも、がんばればかならずむくわれるとおもいます。",
    targetWords: [
      { word: "あきらめませんでした", id: "L25v3" },
      { word: "どんなに", id: "L25v8" },
      { word: "がんばれば", id: "L25v4" }
    ],
    questions: [
      { id: "rq25-1", q: "たなかさんはしけんにおちたあと、どうしましたか。", o: ["べんきょうをやめた", "あきらめなかった", "かいしゃをやめた", "せんせいにそうだんした"], c: 1, exp: "しけんにおちても、あきらめませんでした。" },
      { id: "rq25-2", q: "たなかさんはまいにちなんじかんべんきょうしましたか。", o: ["1じかん", "2じかん", "3じかん", "4じかん"], c: 2, exp: "まいにちさんじかんべんきょうしました。" },
      { id: "rq25-3", q: "たなかさんはいつごうかくしましたか。", o: ["1かげつご", "3かげつご", "はんとしご", "1ねんご"], c: 2, exp: "はんとしごのしけんで、とうとうごうかくしました。" }
    ]
  },
  listening: [
    { id: "L25l1", audioText: "A：しごとがたいへんでも、やめないんですか。B：ええ、どんなにつかれても、このしごとがすきですから、あきらめません。", a: "Bさんはなぜしごとをやめませんか。", o: ["たいへんじゃないから", "このしごとがすきだから", "おかねがほしいから", "ほかのしごとがないから"], c: 1, exp: "B says このしごとがすきですから、あきらめません。" },
    { id: "L25l2", audioText: "A：まいにちれんしゅうしなくても、じょうずになれますか。B：なれますよ。でも、いつでもたのしんでれんしゅうすることがたいせつだとおもいます。", a: "Bさんによると、なにがたいせつですか。", o: ["まいにちれんしゅうすること", "せんせいにならうこと", "たのしんでれんしゅうすること", "たくさんれんしゅうすること"], c: 2, exp: "B says たのしんでれんしゅうすることがたいせつだとおもいます。" }
  ],
  questions: [
    { id: "L25q1", dim: "vocab", type: "recognition", s: "No matter ___ hard it is, I won't give up.", a: "どんなに", o: ["かならず", "いつでも", "たとえ", "どんなに"], c: 3, exp: "どんなに means 'no matter how' and sets up a degree-based concessive.", linksTo: "L25v8" },
    { id: "L25q2", dim: "grammar", type: "recall", s: "あめがふっ___、しあいはつづきます。", a: "ても", o: ["たら", "ても", "と", "から"], c: 1, exp: "て-form＋も (ても) expresses 'even if / even though'.", linksTo: "L25g1" },
    { id: "L25q3", dim: "kanji", type: "recognition", s: "Which kanji means 'tired/fatigue'?", a: "疲", o: ["諦", "頑", "張", "疲"], c: 3, exp: "疲 (つかれる) means to become tired or fatigued.", linksTo: "L25k4" },
    { id: "L25q4", dim: "grammar", type: "recall", s: "むりし___、だいじょうぶです。(Even if you don't push yourself, it's okay.)", a: "なくても", o: ["ても", "なくても", "ないで", "ずに"], c: 1, exp: "〜なくても expresses 'even without doing X' / 'even if not X'.", linksTo: "L25g2" }
  ]
},
{
  lessonNum: 26,
  topic: "〜そうです（伝聞・様態）",
  topicEn: "Hearsay and Appearance",
  module: 'L26', moduleLabel: 'L26 — Hearsay and Appearance', lesson: 'L26', lessonLabel: 'Hearsay and Appearance',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L26v1", word: "てんきよほう", reading: "てんきよほう", pitch: 5, meaning: "weather forecast", example: "てんきよほうによると、あしたはあめだそうです。", exampleMeaning: "According to the weather forecast, it will rain tomorrow." },
    { id: "L26v2", word: "あめ", reading: "あめ", pitch: 1, meaning: "rain", example: "あめがふっています。", exampleMeaning: "It is raining." },
    { id: "L26v3", word: "ゆき", reading: "ゆき", pitch: 2, meaning: "snow", example: "やまのうえにゆきがつもっています。", exampleMeaning: "Snow has piled up on the mountain top." },
    { id: "L26v4", word: "くもり", reading: "くもり", pitch: 0, meaning: "cloudy; overcast", example: "あしたはくもりだそうです。", exampleMeaning: "I heard tomorrow will be cloudy." },
    { id: "L26v5", word: "はれ", reading: "はれ", pitch: 2, meaning: "clear sky; sunny weather", example: "あさははれていましたが、いまはくもっています。", exampleMeaning: "It was sunny this morning, but now it is cloudy." },
    { id: "L26v6", word: "きおん", reading: "きおん", pitch: 1, meaning: "temperature (air); atmospheric temperature", example: "きょうのきおんはたかいです。", exampleMeaning: "Today's temperature is high." },
    { id: "L26v7", word: "〜によると", reading: "〜によると", pitch: 0, meaning: "according to ~", example: "ニュースによると、じしんがあったそうです。", exampleMeaning: "According to the news, there was an earthquake." },
    { id: "L26v8", word: "ニュース", reading: "ニュース", pitch: 1, meaning: "news", example: "まいにちニュースをみます。", exampleMeaning: "I watch the news every day." },
    { id: "L26v9", word: "らしい", reading: "らしい", pitch: 2, meaning: "seems; apparently; it looks like (inference from evidence)", example: "かれはびょうきらしいです。", exampleMeaning: "He seems to be sick." }
  ],
  grammar: [
    {
      id: "L26g1",
      point: "〜そうです [hearsay] (I heard that…; it is said that…)",
      explanation: "Plain form verb/adjective/noun＋だ＋そうです reports information heard from another source. This is distinct from the appearance 〜そうです (ます-stem＋そうです). 〜によると often precedes it to cite the source. The speaker takes no personal responsibility for the truth.",
      examples: [
        "てんきよほうによると、あしたはゆきがふるそうです。 (According to the forecast, it will snow tomorrow.)",
        "ニュースによると、あのみせはやすいそうです。 (According to the news, that store is cheap.)",
        "やまださんはかいしゃをやめたそうです。 (I heard Yamada-san quit the company.)"
      ],
      listening: "Listen for plain form before そうです and a source phrase (〜によると) to identify reported speech / hearsay.",
      production: "Report three pieces of news or rumours you have heard recently using 〜によると〜そうです."
    },
    {
      id: "L26g2",
      point: "〜らしいです (apparently / it seems — inference from evidence)",
      explanation: "Plain form＋らしいです expresses inference based on indirect evidence or what one has heard/observed. Similar to hearsay そうです but implies the speaker has some evidence or general consensus, not just a direct report. Often more tentative in tone.",
      examples: [
        "かれはかぜをひいたらしいです。 (He apparently caught a cold.)",
        "あのレストランはとてもおいしいらしいです。 (That restaurant is apparently very delicious.)",
        "らいねん、ここにあたらしいえきができるらしいです。 (Apparently a new station will be built here next year.)"
      ],
      listening: "Compare らしいです (inference/indirect evidence) with そうです (direct hearsay) to correctly interpret the speaker's confidence level.",
      production: "Make three sentences about things you have indirect evidence for or have heard generally, using 〜らしいです."
    }
  ],
  kanji: [
    { id: "L26k1", char: "天", reading: "てん", meaning: "sky; heaven; weather", exampleWord: "天気（てんき）" },
    { id: "L26k2", char: "気", reading: "き／け", meaning: "spirit; energy; weather; feeling", exampleWord: "天気予報（てんきよほう）" },
    { id: "L26k3", char: "雨", reading: "あめ／う", meaning: "rain", exampleWord: "雨（あめ）" },
    { id: "L26k4", char: "雪", reading: "ゆき", meaning: "snow", exampleWord: "雪（ゆき）" }
  ],
  reading: {
    id: "L26r1",
    title: "てんきよほうをみて",
    passage: "けさ、てんきよほうをみると、あしたはゆきがふるそうです。\nきおんも−2どになるそうで、とてもさむくなるらしいです。\nニュースによると、こうつうにもえいきょうがでるらしいです。\nともだちのさきさんはでんしゃがとまるかもしれないからバスでいくつもりだそうです。\nわたしもあしたはいつもよりはやくでかけようとおもっています。",
    targetWords: [
      { word: "そうです", id: "L26g1" },
      { word: "らしいです", id: "L26g2" },
      { word: "てんきよほう", id: "L26v1" }
    ],
    questions: [
      { id: "rq26-1", q: "あしたのてんきはどうだそうですか。", o: ["はれ", "くもり", "ゆき", "あめ"], c: 2, exp: "てんきよほうによると、あしたはゆきがふるそうです。" },
      { id: "rq26-2", q: "さきさんはあしたどうやってがっこうにいくつもりですか。", o: ["でんしゃ", "バス", "じてんしゃ", "あるく"], c: 1, exp: "でんしゃがとまるかもしれないからバスでいくつもりだそうです。" },
      { id: "rq26-3", q: "わたしはあしたどうするつもりですか。", o: ["いつもよりおそくでかける", "いつもよりはやくでかける", "うちにいる", "でんしゃにのる"], c: 1, exp: "いつもよりはやくでかけようとおもっています。" }
    ]
  },
  listening: [
    { id: "L26l1", audioText: "A：てんきよほうによると、こんしゅうのきゅうじつはずっとあめだそうですよ。B：えー、そうですか。だったら、うちでえいがでもみましょうか。", a: "こんしゅうのきゅうじつのてんきはどうだそうですか。", o: ["はれ", "くもり", "ゆき", "あめ"], c: 3, exp: "A says てんきよほうによると、こんしゅうのきゅうじつはずっとあめだそうです。" },
    { id: "L26l2", audioText: "A：あのしんかんせんえきのまわりに、あたらしいホテルができるらしいですね。B：そうらしいですね。ニュースでいっていましたよ。らいねんのなつまでにはかんせいするらしいです。", a: "あたらしいホテルはいつかんせいするらしいですか。", o: ["ことしのなつ", "らいねんのはる", "らいねんのなつ", "さらいねん"], c: 2, exp: "B says らいねんのなつまでにはかんせいするらしいです。" }
  ],
  questions: [
    { id: "L26q1", dim: "vocab", type: "recognition", s: "___ によると、あしたはゆきだそうです。", a: "てんきよほう", o: ["ニュース", "てんきよほう", "ともだち", "しんぶん"], c: 1, exp: "てんきよほう (weather forecast) is the most natural source for snow predictions.", linksTo: "L26v1" },
    { id: "L26q2", dim: "grammar", type: "recall", s: "ニュースによると、じしんがあった___。", a: "そうです", o: ["らしいです", "そうです", "ようです", "みたいです"], c: 1, exp: "〜によると〜そうです is the standard structure for reporting directly heard information.", linksTo: "L26g1" },
    { id: "L26q3", dim: "kanji", type: "recognition", s: "Which kanji means 'rain'?", a: "雨", o: ["天", "気", "雨", "雪"], c: 2, exp: "雨 (あめ) means rain.", linksTo: "L26k3" },
    { id: "L26q4", dim: "grammar", type: "recall", s: "あのみせはとてもおいしい___。(That shop is apparently very delicious.)", a: "らしいです", o: ["そうです", "らしいです", "ようです", "だそうです"], c: 1, exp: "らしいです expresses inference from indirect evidence or general hearsay — more tentative than そうです.", linksTo: "L26g2" }
  ]
},


/* ══════════════════════════════════════════════════════════
   LESSONS L27-34
══════════════════════════════════════════════════════════ */
{
  lessonNum: 27,
  topic: "うけみ",
  topicEn: "Passive Voice",
  module: 'L27', moduleLabel: 'L27 — Passive Voice', lesson: 'L27', lessonLabel: 'Passive Voice',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L27v1", word: "ほめます", reading: "ほめます", pitch: 0, meaning: "to praise", example: "先生に ほめられました。", exampleMeaning: "I was praised by the teacher." },
    { id: "L27v2", word: "しかります", reading: "しかります", pitch: 3, meaning: "to scold", example: "母に しかられました。", exampleMeaning: "I was scolded by my mother." },
    { id: "L27v3", word: "さそいます", reading: "さそいます", pitch: 4, meaning: "to invite", example: "友だちに パーティーに さそわれました。", exampleMeaning: "I was invited to a party by my friend." },
    { id: "L27v4", word: "おします", reading: "おします", pitch: 0, meaning: "to push", example: "電車の中で 知らない人に おされました。", exampleMeaning: "I was pushed by a stranger on the train." },
    { id: "L27v5", word: "ふみます", reading: "ふみます", pitch: 0, meaning: "to step on", example: "足を ふまれました。", exampleMeaning: "My foot was stepped on." },
    { id: "L27v6", word: "どろぼう", reading: "どろぼう", pitch: 0, meaning: "thief; burglar", example: "どろぼうに 入られました。", exampleMeaning: "A burglar broke into my house." },
    { id: "L27v7", word: "さいふ", reading: "さいふ", pitch: 0, meaning: "wallet", example: "さいふを ぬすまれました。", exampleMeaning: "My wallet was stolen." },
    { id: "L27v8", word: "ぬすまれます", reading: "ぬすまれます", pitch: 4, meaning: "to be stolen", example: "かばんを ぬすまれて こまりました。", exampleMeaning: "I was troubled because my bag was stolen." },
    { id: "L27v9", word: "こまります", reading: "こまります", pitch: 3, meaning: "to be troubled; to be in a fix", example: "雨に ふられて こまりました。", exampleMeaning: "I was troubled when it rained on me." }
  ],
  grammar: [
    {
      id: "L27g1",
      point: "〜られます (passive form)",
      explanation: "The passive form expresses that the subject receives an action done by someone else. Group 1 verbs: change the final u-sound to a-sound + れます (書く→書かれます). Group 2 verbs: drop る + られます (食べる→食べられます). Group 3: します→されます, きます→こられます. The agent (doer) is marked by に.",
      examples: [
        "先生に しかられました。",
        "だれかに 足を ふまれました。",
        "友だちに 写真を とられました。"
      ],
      listening: "Listen for に before the agent and られます at the end of the verb.",
      production: "Describe a situation where something was done to you: 〔agent〕に〔verb passive〕。"
    },
    {
      id: "L27g2",
      point: "迷惑受け身 — passive of suffering",
      explanation: "Japanese passive is often used to express that the speaker was adversely affected by someone else's action, even when the action did not directly target the speaker. This 'suffering passive' conveys inconvenience or annoyance. Example: 子どもに なかれました (The child cried on me / I was troubled by the child crying).",
      examples: [
        "となりの人に たばこを すわれて、気分が わるくなりました。",
        "友だちに こられて、勉強が できませんでした。",
        "雨に ふられて、かぜを ひきました。"
      ],
      listening: "Notice that the passive verb describes an indirect nuisance to the subject.",
      production: "Use the suffering passive to explain why something bad happened to you."
    }
  ],
  kanji: [
    { id: "L27k1", char: "盗", reading: "ぬす・とう", meaning: "steal", exampleWord: "盗む／盗難" },
    { id: "L27k2", char: "褒", reading: "ほ", meaning: "praise", exampleWord: "褒める" },
    { id: "L27k3", char: "受", reading: "う・じゅ", meaning: "receive", exampleWord: "受ける／受身" },
    { id: "L27k4", char: "身", reading: "み・しん", meaning: "body; oneself", exampleWord: "受身／身体" }
  ],
  reading: {
    id: "L27r1",
    title: "さいふを ぬすまれました",
    passage: "きのう、えきの ホームで さいふを ぬすまれました。でんしゃを まっているとき、だれかに かばんを あけられたようです。さいふの なかには クレジットカードと げんきんが 入っていました。すぐに けいさつに とどけましたが、まだ みつかっていません。これから、きを つけなければ なりません。",
    targetWords: [
      { word: "ぬすまれました", id: "L27v8" },
      { word: "さいふ", id: "L27v7" },
      { word: "どろぼう", id: "L27v6" }
    ],
    questions: [
      { id: "rq27-1", q: "さいふは どこで ぬすまれましたか。", o: ["みせの中で", "えきの ホームで", "でんしゃの 中で", "がっこうで"], c: 1, exp: "「えきの ホームで さいふを ぬすまれました」とあります。" },
      { id: "rq27-2", q: "さいふの 中に なにが ありましたか。", o: ["げんきんだけ", "クレジットカードだけ", "クレジットカードと げんきん", "スマートフォン"], c: 2, exp: "「クレジットカードと げんきんが 入っていました」とあります。" },
      { id: "rq27-3", q: "この人は さいふが みつかりましたか。", o: ["はい、みつかりました", "いいえ、まだ みつかっていません", "けいさつが もっています", "ともだちが みつけました"], c: 1, exp: "「まだ みつかっていません」とあります。" }
    ]
  },
  listening: [
    { id: "L27l1", audioText: "A：どうしたんですか。元気が なさそうですね。B：実は、きのう 電車の中で となりの人に 足を ふまれて、いたかったんです。A：それは たいへんでしたね。あやまられましたか。B：いいえ、そのまま おりてしまいました。", a: "電車の中で 足を ふまれた。", o: ["電車に のりおくれた", "電車の中で 足を ふまれた", "さいふを ぬすまれた", "電車が おくれた"], c: 1, exp: "「となりの人に 足を ふまれて、いたかった」と言っています。" },
    { id: "L27l2", audioText: "A：レポートを 先生に ほめられたんですよ。B：すごいですね！どんなことを 言われましたか。A：「よく 調べてある」と 言われました。とても うれしかったです。", a: "先生に レポートを ほめられた。", o: ["先生に しかられた", "レポートを なくした", "先生に レポートを ほめられた", "テストに ごうかくした"], c: 2, exp: "「レポートを 先生に ほめられた」と言っています。" }
  ],
  questions: [
    { id: "L27q1", dim: "vocab", type: "recognition", s: "「さいふ」の いみは なんですか。", a: "wallet", o: ["umbrella", "wallet", "key", "bag"], c: 1, exp: "さいふ means wallet.", linksTo: "L27v7" },
    { id: "L27q2", dim: "grammar", type: "recall", s: "「しかる」の うけみけいは なんですか。", a: "しかられます", o: ["しかります", "しかられます", "しからせます", "しかれます"], c: 1, exp: "Group 1 verb: しか・る → しか・られます (a-row + れます).", linksTo: "L27g1" },
    { id: "L27q3", dim: "kanji", type: "recognition", s: "「盗」の よみかたは どれですか。", a: "ぬす", o: ["と", "ぬす", "う", "み"], c: 1, exp: "盗む (ぬすむ) means to steal.", linksTo: "L27k1" },
    { id: "L27q4", dim: "grammar", type: "recall", s: "迷惑受け身の ぶんは どれですか。", a: "雨に ふられて、かぜを ひきました。", o: ["雨が ふりました。", "雨に ふられて、かぜを ひきました。", "雨を ふらせました。", "雨が すきです。"], c: 1, exp: "迷惑受け身 uses passive to show the subject was adversely affected by something.", linksTo: "L27g2" }
  ]
},
{
  lessonNum: 28,
  topic: "させます",
  topicEn: "Causative Form",
  module: 'L28', moduleLabel: 'L28 — Causative Form', lesson: 'L28', lessonLabel: 'Causative Form',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L28v1", word: "させます", reading: "させます", pitch: 0, meaning: "to make/let someone do", example: "子どもに 野菜を たべさせます。", exampleMeaning: "I make my child eat vegetables." },
    { id: "L28v2", word: "こどもたち", reading: "こどもたち", pitch: 4, meaning: "children", example: "こどもたちを じゆうに あそばせました。", exampleMeaning: "I let the children play freely." },
    { id: "L28v3", word: "てつだいます", reading: "てつだいます", pitch: 4, meaning: "to help; to assist", example: "むすこに そうじを てつだわせました。", exampleMeaning: "I had my son help with cleaning." },
    { id: "L28v4", word: "むりに", reading: "むりに", pitch: 2, meaning: "forcibly; against one's will", example: "むりに たべさせないでください。", exampleMeaning: "Please don't force me to eat." },
    { id: "L28v5", word: "じゆうに", reading: "じゆうに", pitch: 2, meaning: "freely; as one likes", example: "じゆうに えらんでいいですよ。", exampleMeaning: "You may choose freely." },
    { id: "L28v6", word: "けいけん", reading: "けいけん", pitch: 3, meaning: "experience", example: "いろいろな けいけんを させてあげたいです。", exampleMeaning: "I want to let them have various experiences." },
    { id: "L28v7", word: "しどう", reading: "しどう", pitch: 1, meaning: "guidance; coaching", example: "せんせいが がくせいを しどうしました。", exampleMeaning: "The teacher coached the students." },
    { id: "L28v8", word: "はっぴょう", reading: "はっぴょう", pitch: 0, meaning: "presentation; announcement", example: "クラスの まえで はっぴょうさせました。", exampleMeaning: "I had them give a presentation in front of the class." }
  ],
  grammar: [
    {
      id: "L28g1",
      point: "〜させます (causative form)",
      explanation: "The causative form means 'to make someone do' or 'to let someone do.' Group 1 verbs: change the u-sound to a-sound + せます (書く→書かせます). Group 2 verbs: drop る + させます (食べる→食べさせます). Group 3: します→させます, きます→こさせます. The person made to do the action is marked by に (for intransitive verbs) or を (for transitive verbs). Context determines whether the meaning is 'make' (force) or 'let' (permit).",
      examples: [
        "部長は 田中さんに 残業させました。",
        "親は 子どもを じゆうに あそばせました。",
        "せんせいは がくせいに かんじを かかせました。"
      ],
      listening: "Listen for させます or させました at the end of the verb to identify causative sentences.",
      production: "Use 〜させます to describe making or letting someone do something: 〔person〕に/を〔verb causative〕。"
    },
    {
      id: "L28g2",
      point: "〜させてください (please let me do)",
      explanation: "〜させてください is used to ask for permission to do something yourself. It is a polite request form. The te-form of the causative verb + ください. Example: 少し 休ませてください (Please let me rest a little). This is different from 〜てください which is a general request.",
      examples: [
        "少し 考えさせてください。",
        "この仕事を わたしに やらせてください。",
        "もう一度 説明させてください。"
      ],
      listening: "Listen for させてください to identify a permission request from the speaker.",
      production: "Ask for permission to do something yourself using 〔verb causative te-form〕ください。"
    }
  ],
  kanji: [
    { id: "L28k1", char: "強", reading: "つよ・きょう", meaning: "strong; force", exampleWord: "強い／強制" },
    { id: "L28k2", char: "自", reading: "じ・みずか", meaning: "self", exampleWord: "自由／自分" },
    { id: "L28k3", char: "由", reading: "ゆ・ゆう", meaning: "reason; freedom", exampleWord: "自由／理由" },
    { id: "L28k4", char: "験", reading: "けん", meaning: "test; experience", exampleWord: "経験／試験" }
  ],
  reading: {
    id: "L28r1",
    title: "子どもの きょういく",
    passage: "わたしの 父は きびしい 人で、まいにち ピアノを れんしゅうさせました。はじめは いやでしたが、おとなに なってから、ありがたいと おもっています。でも、わたしは じぶんの こどもには、じゆうに やりたいことを させてあげたいと おもっています。むりに なにかを させるより、こどもが じぶんで えらぶことが たいせつだと おもいます。",
    targetWords: [
      { word: "させました", id: "L28v1" },
      { word: "じゆうに", id: "L28v5" },
      { word: "けいけん", id: "L28v6" }
    ],
    questions: [
      { id: "rq28-1", q: "父は まいにち なにを させましたか。", o: ["えいごを べんきょうさせた", "ピアノを れんしゅうさせた", "そうじを てつだわせた", "はやく ねさせた"], c: 1, exp: "「まいにち ピアノを れんしゅうさせました」とあります。" },
      { id: "rq28-2", q: "この人は おとなに なってから、どう おもっていますか。", o: ["まだ いやだと おもっている", "ありがたいと おもっている", "つかれたと おもっている", "かなしいと おもっている"], c: 1, exp: "「おとなに なってから、ありがたいと おもっています」とあります。" },
      { id: "rq28-3", q: "この人は じぶんの こどもに どう したいですか。", o: ["むりに べんきょうさせたい", "ピアノを ならわせたい", "じゆうに やりたいことを させてあげたい", "きびしく しどうしたい"], c: 2, exp: "「じゆうに やりたいことを させてあげたい」とあります。" }
    ]
  },
  listening: [
    { id: "L28l1", audioText: "A：山田さんは お子さんに どんな習い事を させていますか。B：水泳と 英会話を させています。本人が やりたいと 言ったので。A：むりに させているわけじゃないんですね。B：ええ、じゆうに えらばせています。", a: "子どもが やりたいと 言ったので、習い事を させている。", o: ["むりに 習い事を させている", "子どもが やりたいと 言ったので させている", "親が えらんだ 習い事を させている", "習い事は させていない"], c: 1, exp: "「本人が やりたいと 言ったので」とあります。" },
    { id: "L28l2", audioText: "A：課長、少し 早く かえらせていただけませんか。きょうは 子どもの 学校の ぎょうじが あるんです。B：そうですか。しごとは おわりましたか。A：はい、もう おわっています。B：じゃあ、どうぞ。", a: "子どもの 学校の ぎょうじが あるので、早く かえりたい。", o: ["しごとが おわっていないが かえりたい", "子どもが びょうきなので かえりたい", "子どもの 学校の ぎょうじが あるので かえりたい", "ぐあいが わるいので かえりたい"], c: 2, exp: "「子どもの 学校の ぎょうじが あるんです」と 言っています。" }
  ],
  questions: [
    { id: "L28q1", dim: "vocab", type: "recognition", s: "「むりに」の いみは なんですか。", a: "forcibly", o: ["freely", "forcibly", "carefully", "slowly"], c: 1, exp: "むりに means forcibly or against one's will.", linksTo: "L28v4" },
    { id: "L28q2", dim: "grammar", type: "recall", s: "「食べる」の しえきけい（causative）は なんですか。", a: "食べさせます", o: ["食べられます", "食べさせます", "食べてもらいます", "食べておきます"], c: 1, exp: "Group 2 verb: 食べる → 食べさせます (drop る + させます).", linksTo: "L28g1" },
    { id: "L28q3", dim: "kanji", type: "recognition", s: "「自由」の よみかたは どれですか。", a: "じゆう", o: ["じゆう", "しゆ", "じゆ", "しゆう"], c: 0, exp: "自由 (じゆう) means freedom.", linksTo: "L28k2" },
    { id: "L28q4", dim: "grammar", type: "recall", s: "「させてください」は どんな いみですか。", a: "Please let me do (it).", o: ["Please do (it) for me.", "Please let me do (it).", "I was made to do (it).", "I will make you do (it)."], c: 1, exp: "〜させてください is a request for permission to do something yourself.", linksTo: "L28g2" }
  ]
},
{
  lessonNum: 29,
  topic: "〜ば",
  topicEn: "Conditional (ba-form)",
  module: 'L29', moduleLabel: 'L29 — Conditional (ba-form)', lesson: 'L29', lessonLabel: 'Conditional (ba-form)',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L29v1", word: "もし", reading: "もし", pitch: 1, meaning: "if (hypothetical marker)", example: "もし 時間が あれば、てつだいます。", exampleMeaning: "If I have time, I will help you." },
    { id: "L29v2", word: "どうすれば", reading: "どうすれば", pitch: 0, meaning: "what should I do; if I do what", example: "どうすれば うまく できますか。", exampleMeaning: "What should I do to succeed?" },
    { id: "L29v3", word: "こまります", reading: "こまります", pitch: 3, meaning: "to be troubled; to be in difficulty", example: "お金が なければ こまります。", exampleMeaning: "If I don't have money, I'll be in trouble." },
    { id: "L29v4", word: "アドバイス", reading: "アドバイス", pitch: 4, meaning: "advice", example: "アドバイスを もらえれば、たすかります。", exampleMeaning: "If I can get some advice, it would be a great help." },
    { id: "L29v5", word: "なら", reading: "なら", pitch: 1, meaning: "if (it is the case that); as for", example: "東京に いくなら、新幹線が べんりです。", exampleMeaning: "If you're going to Tokyo, the Shinkansen is convenient." },
    { id: "L29v6", word: "〜ばよかった", reading: "〜ばよかった", pitch: 0, meaning: "should have done; I wish I had done", example: "もっと はやく おきれば よかった。", exampleMeaning: "I should have woken up earlier." },
    { id: "L29v7", word: "たとえば", reading: "たとえば", pitch: 3, meaning: "for example", example: "たとえば、毎日 れんしゅうすれば うまくなります。", exampleMeaning: "For example, if you practice every day, you'll improve." },
    { id: "L29v8", word: "かいけつ", reading: "かいけつ", pitch: 0, meaning: "solution; resolution", example: "はなしあえば かいけつできると おもいます。", exampleMeaning: "I think we can resolve it if we talk it out." }
  ],
  grammar: [
    {
      id: "L29g1",
      point: "〜ば (ba-conditional form)",
      explanation: "The ば-form expresses a conditional 'if X, then Y.' For Group 1 verbs: change the final u-sound to e-sound + ば (書く→書けば). For Group 2 verbs: drop る + れば (食べる→食べれば). Group 3: する→すれば, くる→くれば. For い-adjectives: drop い + ければ (高い→高ければ). For な-adjectives and nouns: + であれば or + なら. Y must be something that naturally follows from X — it is often advice, a desirable result, or a general truth.",
      examples: [
        "毎日 れんしゅうすれば、じょうずに なりますよ。",
        "もし 雨が ふれば、えんそくは 中止です。",
        "お金が あれば、りょこうに いけます。"
      ],
      listening: "Listen for the ば-ending on verbs and adjectives to identify conditional clauses.",
      production: "Make an if-then sentence about advice or a hypothetical situation using the ば-form."
    },
    {
      id: "L29g2",
      point: "〜ばよかった (I should have / I wish I had)",
      explanation: "〜ばよかった expresses regret about something not done in the past, meaning 'I should have done X' or 'I wish I had done X.' It uses the ば-form of the verb + よかった (past tense of いい). Example: 早く 起きればよかった (I should have gotten up earlier). The negative version もっと 〜なければよかった means 'I wish I hadn't done X.'",
      examples: [
        "かさを もってくれば よかった。",
        "もっと 勉強すれば よかったです。",
        "そんなことを 言わなければ よかった。"
      ],
      listening: "Listen for ばよかった after a verb to identify regret or hindsight.",
      production: "Express regret about a past situation using 〔verb ba-form〕よかった。"
    }
  ],
  kanji: [
    { id: "L29k1", char: "悩", reading: "なや", meaning: "worry; trouble", exampleWord: "悩む／悩み" },
    { id: "L29k2", char: "解", reading: "と・かい", meaning: "solve; loosen", exampleWord: "解く／解決" },
    { id: "L29k3", char: "決", reading: "き・けつ", meaning: "decide", exampleWord: "決める／解決" },
    { id: "L29k4", char: "相", reading: "そう・あい", meaning: "mutual; phase", exampleWord: "相談／相手" }
  ],
  reading: {
    id: "L29r1",
    title: "どうすれば いいですか",
    passage: "さいきん 仕事が いそがしくて、ぜんぜん ねむれません。友だちに そうだんしたら、「もし ストレスが あれば、うんどうすれば いいよ」と アドバイスして くれました。たしかに、うんどうすれば 気もちが かるくなるかも しれません。もっと はやく そうだんすれば よかったと おもいました。あしたから、まいにち すこし あるいてみます。",
    targetWords: [
      { word: "アドバイス", id: "L29v4" },
      { word: "〜ばよかった", id: "L29v6" },
      { word: "こまります", id: "L29v3" }
    ],
    questions: [
      { id: "rq29-1", q: "この人は さいきん どんな もんだいが ありますか。", o: ["お金が ない", "仕事が いそがしくて ねむれない", "友だちが いない", "びょうきに なった"], c: 1, exp: "「仕事が いそがしくて、ぜんぜん ねむれません」とあります。" },
      { id: "rq29-2", q: "友だちは どんな アドバイスを しましたか。", o: ["はやく ねる", "うんどうする", "くすりを のむ", "しごとを やめる"], c: 1, exp: "「うんどうすれば いいよ」と アドバイスしました。" },
      { id: "rq29-3", q: "この人は なにを こうかいしていますか。", o: ["うんどうを しなかったこと", "はやく ともだちに そうだんしなかったこと", "しごとを しすぎたこと", "ともだちに れんらくしなかったこと"], c: 1, exp: "「もっと はやく そうだんすれば よかった」と おもっています。" }
    ]
  },
  listening: [
    { id: "L29l1", audioText: "A：日本語が なかなか うまく ならなくて こまっています。B：どんな 勉強を していますか。A：テキストを よんでいるだけです。B：それなら、毎日 日本人と はなすれば きっと うまく なりますよ。", a: "毎日 日本人と はなすれば いい。", o: ["テキストを もっと よめば いい", "毎日 日本人と はなすれば いい", "アニメを みれば いい", "にほんに いけば いい"], c: 1, exp: "「毎日 日本人と はなすれば きっと うまく なりますよ」と 言っています。" },
    { id: "L29l2", audioText: "A：きのうの テスト、あんまり できなかった…。B：そうなんだ。どうして？A：ぜんぜん べんきょうしなかったんです。もっと べんきょうすれば よかった。B：つぎは がんばってね。", a: "もっと べんきょうすれば よかったと こうかいしている。", o: ["テストが むずかしすぎたと おもっている", "もっと べんきょうすれば よかったと こうかいしている", "べんきょうしたが できなかった", "テストが やさしすぎた"], c: 1, exp: "「もっと べんきょうすれば よかった」と 言っています。" }
  ],
  questions: [
    { id: "L29q1", dim: "vocab", type: "recognition", s: "「もし」は どんなときに つかいますか。", a: "to introduce a hypothetical condition", o: ["to express gratitude", "to introduce a hypothetical condition", "to show contrast", "to express regret"], c: 1, exp: "もし is used to introduce a hypothetical or uncertain condition.", linksTo: "L29v1" },
    { id: "L29q2", dim: "grammar", type: "recall", s: "「行く」の ば-けいは なんですか。", a: "行けば", o: ["行けば", "行けれ", "行かば", "行くなら"], c: 0, exp: "Group 1 verb 行く: ku→ke + ば → 行けば.", linksTo: "L29g1" },
    { id: "L29q3", dim: "kanji", type: "recognition", s: "「解決」の よみかたは どれですか。", a: "かいけつ", o: ["かいけつ", "とけつ", "かいきめ", "とくしょ"], c: 0, exp: "解決 (かいけつ) means solution/resolution.", linksTo: "L29k2" },
    { id: "L29q4", dim: "grammar", type: "recall", s: "「かさを もってこれば よかった」は どんな いみですか。", a: "I should have brought an umbrella.", o: ["I will bring an umbrella.", "I should have brought an umbrella.", "I brought an umbrella.", "I don't need an umbrella."], c: 1, exp: "〜ばよかった expresses regret about something not done in the past.", linksTo: "L29g2" }
  ]
},
{
  lessonNum: 30,
  topic: "〜ようです／みたいです",
  topicEn: "Appearance and Similarity",
  module: 'L30', moduleLabel: 'L30 — Appearance and Similarity', lesson: 'L30', lessonLabel: 'Appearance and Similarity',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L30v1", word: "ようです", reading: "ようです", pitch: 0, meaning: "seems; appears (based on evidence)", example: "かれは つかれているようです。", exampleMeaning: "He seems to be tired." },
    { id: "L30v2", word: "みたいです", reading: "みたいです", pitch: 0, meaning: "looks like; seems (casual)", example: "かれは つかれているみたいです。", exampleMeaning: "He looks tired." },
    { id: "L30v3", word: "においがします", reading: "においがします", pitch: 0, meaning: "there is a smell; to smell like", example: "カレーの においが します。", exampleMeaning: "I smell curry." },
    { id: "L30v4", word: "おとがします", reading: "おとがします", pitch: 0, meaning: "there is a sound; to sound like", example: "へんな おとが します。", exampleMeaning: "There is a strange sound." },
    { id: "L30v5", word: "かんじ", reading: "かんじ", pitch: 1, meaning: "feeling; sense; impression", example: "なにか いやな かんじが します。", exampleMeaning: "I have some kind of bad feeling." },
    { id: "L30v6", word: "〜かのようです", reading: "〜かのようです", pitch: 0, meaning: "as if; as though", example: "ゆめを みているかのようです。", exampleMeaning: "It's as if I am dreaming." },
    { id: "L30v7", word: "きがします", reading: "きがします", pitch: 0, meaning: "I have a feeling that; it seems like", example: "だれかが いるような きが します。", exampleMeaning: "I have a feeling that someone is there." },
    { id: "L30v8", word: "らしいです", reading: "らしいです", pitch: 0, meaning: "it seems (hearsay); apparently", example: "かれは もう かえったらしいです。", exampleMeaning: "Apparently he has already gone home." }
  ],
  grammar: [
    {
      id: "L30g1",
      point: "〜ようです / 〜みたいです (seems/appears)",
      explanation: "〜ようです (formal) and 〜みたいです (casual) both mean 'seems,' 'looks like,' or 'appears' based on direct sensory evidence or inference. They follow: plain verb/adjective + ようです; noun + の + ようです (formal) or noun + みたいです (casual). Example: 雨が ふるようです (It seems it will rain). みたいです is the casual equivalent used in conversation.",
      examples: [
        "熱が あるようです。かおが あかいですね。",
        "この ケーキは おいしそうです。チョコレートみたいです。",
        "となりの へやから おとが するようです。"
      ],
      listening: "Listen for ようです or みたいです at the end to identify inference or appearance sentences.",
      production: "Describe what something seems like based on what you see/hear/smell using 〜ようです or 〜みたいです."
    },
    {
      id: "L30g2",
      point: "〜かのようです (as if)",
      explanation: "〜かのようです is used to describe something that gives an impression of being something it is not — 'as if' or 'as though.' It attaches to the plain form of a verb or adjective + かのようです. It often implies a simile or metaphor. Example: 時間が とまったかのようです (It is as if time has stopped). The casual form is 〜かのみたいです.",
      examples: [
        "その 景色は えのかのようでした。",
        "かれは まるで じぶんが 先生かのように はなします。",
        "夢を みているかのような きもちです。"
      ],
      listening: "Listen for かのようです or かのみたいです to identify 'as if' comparisons.",
      production: "Describe a dramatic or surprising impression using 〜かのようです."
    }
  ],
  kanji: [
    { id: "L30k1", char: "様", reading: "さま・よう", meaning: "appearance; manner", exampleWord: "様子／〜のよう" },
    { id: "L30k2", char: "似", reading: "に", meaning: "resemble", exampleWord: "似る／似ている" },
    { id: "L30k3", char: "感", reading: "かん", meaning: "feeling; sense", exampleWord: "感じ／感覚" },
    { id: "L30k4", char: "覚", reading: "おぼ・かく", meaning: "sense; memorize", exampleWord: "覚える／感覚" }
  ],
  reading: {
    id: "L30r1",
    title: "おかしな においと おと",
    passage: "きのうの よる、だいどころから へんな においが しました。こげているようなにおいで、なにかが もえているみたいでした。あわてて みに いくと、なべの 中の スープが ぜんぶ なくなっていました。まるで じかんを わすれて いたかのようです。さいわい、かじに はなりませんでしたが、これからは きを つけなければ なりません。",
    targetWords: [
      { word: "においがします", id: "L30v3" },
      { word: "みたいです", id: "L30v2" },
      { word: "〜かのようです", id: "L30v6" }
    ],
    questions: [
      { id: "rq30-1", q: "どこから においが しましたか。", o: ["じむしょから", "となりの へやから", "だいどころから", "ろうかから"], c: 2, exp: "「だいどころから へんな においが しました」とあります。" },
      { id: "rq30-2", q: "なべの 中は どう なっていましたか。", o: ["スープが あふれていた", "スープが ぜんぶ なくなっていた", "なべが こわれていた", "スープが つめたかった"], c: 1, exp: "「なべの 中の スープが ぜんぶ なくなっていました」とあります。" },
      { id: "rq30-3", q: "「まるで じかんを わすれていたかのようです」は どんな いみですか。", o: ["じかんを わすれた ことが ある", "まるで じかんが とまったような きもちだ", "じかんを わすれて いたことに きが ついた", "まるで じかんを わすれた ひとの ようだ"], c: 3, exp: "かのようです describes that the situation was just like having forgotten about time.", linksTo: "L30g2" }
    ]
  },
  listening: [
    { id: "L30l1", audioText: "A：田中さん、きょうは 元気が なさそうですね。B：そうですか？A：はい、かおが すこし あおいようです。B：じつは、ゆうべから すこし ねつが あるんです。A：それは たいへん。はやく かえって やすんだ ほうが いいですよ。", a: "田中さんは かおが あおくて、ねつが あるようだ。", o: ["田中さんは げんきそうだ", "田中さんは ねむそうだ", "田中さんは ねつが あるようだ", "田中さんは いそがしそうだ"], c: 2, exp: "「ねつが ある」と 言っています。かおも あおいようです。" },
    { id: "L30l2", audioText: "A：この りょうりは なんですか。B：ぎょうざです。はじめて たべますか。A：はい。においが して、おいしそうです。まるで いえで おかあさんが つくる りょうりみたいです。B：それは うれしいです！ぜひ たべてみてください。", a: "りょうりの においが して、おいしそうだと おもっている。", o: ["りょうりが からすぎると おもっている", "たべたことが あると 言っている", "においが して おいしそうだと おもっている", "りょうりが きらいだと 言っている"], c: 2, exp: "「においが して、おいしそうです」と 言っています。" }
  ],
  questions: [
    { id: "L30q1", dim: "vocab", type: "recognition", s: "「においがします」の いみは なんですか。", a: "there is a smell", o: ["there is a sound", "there is a smell", "there is a feeling", "there is a taste"], c: 1, exp: "においがします means there is a smell / I can smell something.", linksTo: "L30v3" },
    { id: "L30q2", dim: "grammar", type: "recall", s: "「ようです」と「みたいです」の ちがいは なんですか。", a: "ようです is formal; みたいです is casual", o: ["ようです is casual; みたいです is formal", "ようです is formal; みたいです is casual", "they are completely different in meaning", "ようです is only for nouns"], c: 1, exp: "ようです is the formal equivalent; みたいです is the casual equivalent.", linksTo: "L30g1" },
    { id: "L30q3", dim: "kanji", type: "recognition", s: "「感じ」の よみかたは どれですか。", a: "かんじ", o: ["かんじ", "おもい", "ようす", "きもち"], c: 0, exp: "感じ (かんじ) means feeling or impression.", linksTo: "L30k3" },
    { id: "L30q4", dim: "grammar", type: "recall", s: "「まるで ゆめを みているかのようです」は なにを あらわしますか。", a: "a simile comparing reality to a dream", o: ["a fact about dreaming", "a simile comparing reality to a dream", "a request to dream", "a regret about not dreaming"], c: 1, exp: "〜かのようです expresses 'as if' — a comparison to something it is not.", linksTo: "L30g2" }
  ]
}

];

if (typeof window !== 'undefined') window.SEED_CONTENT = SEED_CONTENT;
if (typeof module !== 'undefined' && module.exports) module.exports = SEED_CONTENT;