/* ============================================================
   SEED CONTENT — Japanese Mastery System
   Structure: an array of LESSON PACKS. One pack = one themed lesson.
   This is the OFFLINE FALLBACK and the SEED source for the database.
   Every item carries a stable `id` so the SRS + mastery engine can track it.
   Aligned roughly to Minna no Nihongo L26–28 so it's useful from day one.
   ============================================================ */

const SEED_CONTENT = [
  /* ---------------------------------------------------------- */
  {
    level: "N4",
    module: "travel",
    moduleLabel: "旅行 — Travel",
    lesson: "planning-a-trip",
    lessonLabel: "Planning a trip",
    vocabulary: [
      { id: "v_ryokou",  word: "旅行",   reading: "りょこう",  meaning: "trip, travel",      example: "来月、旅行に行きます。",        exampleMeaning: "I'm going on a trip next month." },
      { id: "v_yoyaku",  word: "予約",   reading: "よやく",    meaning: "reservation",       example: "ホテルを予約しました。",        exampleMeaning: "I reserved a hotel." },
      { id: "v_keikaku", word: "計画",   reading: "けいかく",  meaning: "plan",              example: "自分で計画を立てます。",        exampleMeaning: "I'll make the plan myself." },
      { id: "v_kuukou",  word: "空港",   reading: "くうこう",  meaning: "airport",           example: "空港まで電車で行きます。",      exampleMeaning: "I'll go to the airport by train." },
      { id: "v_nimotsu", word: "荷物",   reading: "にもつ",    meaning: "luggage, baggage",  example: "荷物が多くて大変です。",        exampleMeaning: "I have a lot of luggage, it's tough." },
      { id: "v_annai",   word: "案内",   reading: "あんない",  meaning: "guidance, to guide",example: "町を案内してくれました。",      exampleMeaning: "They showed me around town." }
    ],
    grammar: [
      {
        id: "g_ndesu",
        point: "〜んです",
        explanation: "Adds explanation or emphasis — gives the reason/background behind a statement, or asks for one. Verb plain form + んです.",
        examples: [
          "どうして遅れたんですか。 — Why were you late?",
          "電車が止まったんです。 — (It's because) the train stopped.",
          "ちょっと頭が痛いんです。 — The thing is, I have a bit of a headache."
        ],
        listening: "今日は会社を休むんです。",
        readingRef: "planning-a-trip",
        production: "Write one sentence using 〜んです to explain why you can't come today."
      },
      {
        id: "g_teitadakemasenka",
        point: "〜ていただけませんか",
        explanation: "A very polite request: 'Could you please…?' More polite than 〜てください. Verb て-form + いただけませんか.",
        examples: [
          "住所を教えていただけませんか。 — Could you tell me your address?",
          "写真を撮っていただけませんか。 — Could you take a photo for me?",
          "もう一度説明していただけませんか。 — Could you explain once more?"
        ],
        listening: "ここに名前を書いていただけませんか。",
        readingRef: "planning-a-trip",
        production: "Write a polite request asking someone to wait a moment using 〜ていただけませんか."
      }
    ],
    kanji: [
      { id: "k_ryo",  char: "旅", reading: "りょ / たび", meaning: "journey",  exampleWord: "旅行 (りょこう) — travel" },
      { id: "k_yo",   char: "予", reading: "よ",          meaning: "beforehand",exampleWord: "予約 (よやく) — reservation" },
      { id: "k_kuu",  char: "空", reading: "くう / そら",  meaning: "sky, empty",exampleWord: "空港 (くうこう) — airport" }
    ],
    reading: {
      id: "r_trip",
      title: "はじめての一人旅 — My first solo trip",
      passage: "来月、はじめて一人で旅行します。ホテルはもう予約しました。計画を立てるのは大変でしたが、とても楽しかったです。空港まで電車で行くつもりです。荷物が多いので、小さいかばんを買いました。むこうに着いたら、町を案内してもらいたいです。",
      targetWords: ["v_ryokou", "v_yoyaku", "v_keikaku", "v_kuukou", "v_nimotsu", "v_annai"],
      targetGrammar: ["g_ndesu"],
      questions: [
        { id: "rq_trip1", q: "ホテルはどうしましたか。", o: ["まだ予約していません", "もう予約しました", "予約できませんでした", "友達が予約しました"], c: 1, exp: "「ホテルはもう予約しました」とあります。" },
        { id: "rq_trip2", q: "空港までどうやって行きますか。", o: ["バスで", "車で", "電車で", "歩いて"], c: 2, exp: "「空港まで電車で行くつもりです」。" },
        { id: "rq_trip3", q: "どうして小さいかばんを買いましたか。", o: ["安かったから", "荷物が多いから", "色がよかったから", "古かったから"], c: 1, exp: "「荷物が多いので、小さいかばんを買いました」。" }
      ]
    },
    listening: [
      { id: "l_trip1", audioText: "すみません、駅まで案内していただけませんか。", a: "What is the speaker asking for?", o: ["Directions to a hotel", "To be guided to the station", "To make a reservation", "To carry luggage"], c: 1, exp: "案内していただけませんか = could you guide me (to the station)." },
      { id: "l_trip2", audioText: "荷物が多いんです。", a: "What is the speaker explaining?", o: ["They have little luggage", "They have a lot of luggage", "They lost their luggage", "They forgot their luggage"], c: 1, exp: "荷物が多いんです = the thing is, I have a lot of luggage." }
    ],
    questions: [
      { id: "q_v_yoyaku", dim: "vocab",   type: "recall",      s: "ホテルを＿＿しました。",        a: "Best word for the blank?",      o: ["案内", "予約", "計画", "旅行"], c: 1, exp: "予約する = to reserve.", linksTo: "v_yoyaku" },
      { id: "q_k_kuu",    dim: "kanji",   type: "recognition", s: "来週、＿＿へ行きます。(airport)", a: "「空港」の読み方は？",          o: ["くうこう", "くうこ", "そらこう", "くこう"], c: 0, exp: "空港 = くうこう.", linksTo: "k_kuu" },
      { id: "q_g_ndesu",  dim: "grammar", type: "recognition", s: "A:どうして来なかった＿＿？", a: "Choose the natural ending.", o: ["んですか", "ますか", "でしたか", "ましたか"], c: 0, exp: "Asking for a reason → んですか.", linksTo: "g_ndesu" }
    ]
  },

  /* ---------------------------------------------------------- */
  {
    level: "N4",
    module: "daily-life",
    moduleLabel: "毎日の生活 — Daily Life",
    lesson: "habits-and-ability",
    lessonLabel: "Habits & ability",
    vocabulary: [
      { id: "v_shumi",   word: "趣味",   reading: "しゅみ",    meaning: "hobby",            example: "趣味は音楽を聞くことです。",    exampleMeaning: "My hobby is listening to music." },
      { id: "v_unten",   word: "運転",   reading: "うんてん",  meaning: "driving",          example: "車の運転ができます。",          exampleMeaning: "I can drive a car." },
      { id: "v_seikatsu",word: "生活",   reading: "せいかつ",  meaning: "life, living",     example: "日本の生活に慣れました。",      exampleMeaning: "I've gotten used to life in Japan." },
      { id: "v_betsuni", word: "別に",   reading: "べつに",    meaning: "not particularly", example: "別に、何もありません。",        exampleMeaning: "Nothing in particular." },
      { id: "v_naremasu",word: "慣れます",reading: "なれます",  meaning: "to get used to",   example: "新しい仕事に慣れました。",      exampleMeaning: "I got used to the new job." }
    ],
    grammar: [
      {
        id: "g_potential",
        point: "可能形 (Potential form)",
        explanation: "Expresses ability ('can do'). Group 1: 〜u → 〜eru (書く→書ける). Group 2: 〜る→られる (食べる→食べられる). する→できる, 来る→来られる. The object usually takes が.",
        examples: [
          "漢字が読めます。 — I can read kanji.",
          "刺身が食べられますか。 — Can you eat sashimi?",
          "日本語で電話ができます。 — I can make phone calls in Japanese."
        ],
        listening: "私は車の運転ができます。",
        readingRef: "habits-and-ability",
        production: "Write one sentence about something you can now do that you couldn't before."
      },
      {
        id: "g_nagara",
        point: "〜ながら",
        explanation: "Two actions by the same person at the same time ('while…'). Verb ます-stem + ながら. The main action is the second clause.",
        examples: [
          "音楽を聞きながら勉強します。 — I study while listening to music.",
          "歩きながら話しましょう。 — Let's talk while walking.",
          "コーヒーを飲みながら新聞を読みます。 — I read the paper while drinking coffee."
        ],
        listening: "テレビを見ながらご飯を食べます。",
        readingRef: "habits-and-ability",
        production: "Write one sentence using 〜ながら about something you do while eating."
      }
    ],
    kanji: [
      { id: "k_sei",  char: "生", reading: "せい / い(きる)", meaning: "life, birth", exampleWord: "生活 (せいかつ) — life" },
      { id: "k_un",   char: "運", reading: "うん / はこ(ぶ)", meaning: "carry, luck",  exampleWord: "運転 (うんてん) — driving" },
      { id: "k_shu",  char: "趣", reading: "しゅ / おもむき",  meaning: "taste, flavor",exampleWord: "趣味 (しゅみ) — hobby" }
    ],
    reading: {
      id: "r_daily",
      title: "日本の生活 — Life in Japan",
      passage: "日本に来て一年になりました。さいしょは生活に慣れるのが大変でしたが、今は楽しいです。趣味は料理で、よく音楽を聞きながら作ります。先月、車の運転もできるようになりました。週末は友だちと出かけることが多いです。日本語も少しずつ話せるようになって、うれしいです。",
      targetWords: ["v_seikatsu", "v_shumi", "v_unten", "v_naremasu"],
      targetGrammar: ["g_potential", "g_nagara"],
      questions: [
        { id: "rq_daily1", q: "この人は日本に来てどのくらいですか。", o: ["一か月", "半年", "一年", "三年"], c: 2, exp: "「日本に来て一年になりました」。" },
        { id: "rq_daily2", q: "趣味は何ですか。", o: ["音楽", "料理", "運転", "旅行"], c: 1, exp: "「趣味は料理で」。" },
        { id: "rq_daily3", q: "先月、何ができるようになりましたか。", o: ["料理", "日本語", "運転", "ピアノ"], c: 2, exp: "「車の運転もできるようになりました」。" }
      ]
    },
    listening: [
      { id: "l_daily1", audioText: "音楽を聞きながら勉強します。", a: "What are the two simultaneous actions?", o: ["Cooking and eating", "Listening to music and studying", "Driving and talking", "Walking and reading"], c: 1, exp: "聞きながら勉強します = study while listening to music." },
      { id: "l_daily2", audioText: "刺身が食べられますか。", a: "What is being asked?", o: ["Do you like sashimi?", "Can you eat sashimi?", "Did you eat sashimi?", "Where is the sashimi?"], c: 1, exp: "食べられますか = potential form, 'can you eat?'" }
    ],
    questions: [
      { id: "q_g_pot",    dim: "grammar", type: "recall",      s: "私は漢字が＿＿。(can read)",   a: "Pick the potential form.", o: ["読みます", "読めます", "読んでいます", "読みたいです"], c: 1, exp: "読む → 読める (potential).", linksTo: "g_potential" },
      { id: "q_g_nagara", dim: "grammar", type: "recognition", s: "コーヒーを飲み＿＿新聞を読みます。", a: "Fill the blank.",           o: ["ながら", "まま", "ので", "から"], c: 0, exp: "ます-stem + ながら = 'while'.", linksTo: "g_nagara" },
      { id: "q_v_naru",   dim: "vocab",   type: "recall",      s: "新しい仕事に＿＿。(got used to)", a: "Best word?",               o: ["慣れました", "別に", "案内", "生活"], c: 0, exp: "慣れる = to get used to.", linksTo: "v_naremasu" },
      { id: "q_k_sei",    dim: "kanji",   type: "recognition", s: "日本の＿＿は楽しいです。(life)", a: "「生活」の読み方は？",        o: ["せいかつ", "せいかく", "しょうかつ", "せかつ"], c: 0, exp: "生活 = せいかつ.", linksTo: "k_sei" }
    ]
  }
];

/* Make available to both the browser (window) and the seed script (node) */
if (typeof window !== "undefined") window.SEED_CONTENT = SEED_CONTENT;
if (typeof module !== "undefined" && module.exports) module.exports = SEED_CONTENT;
