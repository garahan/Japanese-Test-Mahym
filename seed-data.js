/* ============================================================
   SEED CONTENT — Minna no Nihongo II, Lessons 25–30
   Grammar points follow the standard Minna no Nihongo syllabus.
   All example sentences are original (not copied from the textbook).
   Fields per question: { id, dim, type, s, a, o:[...], c:correctIndex, exp, difficulty?, linksTo? }
   ============================================================ */
const SEED_CONTENT = [

/* ===================== LESSON 25 ===================== */
{
  lessonNum: 25,
  topic: "〜たら・〜ても",
  topicEn: "If / When · Even If",
  module: 'L25', moduleLabel: 'L25 — If / When · Even If', lesson: 'L25', lessonLabel: 'If / When · Even If',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L25v1", word: "もし", reading: "もし", pitch: 1, meaning: "if (signals a hypothetical; pairs with たら)", example: "もし雨が降ったら、行きません。", exampleMeaning: "If it rains, I won't go." },
    { id: "L25v2", word: "卒業します", reading: "そつぎょうします", pitch: 0, meaning: "to graduate", example: "大学を卒業したら、働きます。", exampleMeaning: "When I graduate from university, I'll work." },
    { id: "L25v3", word: "留学します", reading: "りゅうがくします", pitch: 0, meaning: "to study abroad", example: "お金があったら、留学したいです。", exampleMeaning: "If I had money, I'd like to study abroad." },
    { id: "L25v4", word: "給料", reading: "きゅうりょう", pitch: 1, meaning: "salary; pay", example: "給料をもらったら、新しいかばんを買います。", exampleMeaning: "When I get my salary, I'll buy a new bag." },
    { id: "L25v5", word: "ボーナス", reading: "ボーナス", pitch: 1, meaning: "bonus", example: "ボーナスが出ても、貯金します。", exampleMeaning: "Even if I get a bonus, I'll save it." },
    { id: "L25v6", word: "連絡します", reading: "れんらくします", pitch: 0, meaning: "to contact; to get in touch", example: "駅に着いたら、連絡してください。", exampleMeaning: "When you arrive at the station, please contact me." },
    { id: "L25v7", word: "過ぎます", reading: "すぎます", pitch: 2, meaning: "to pass (time); to exceed", example: "5時を過ぎても、終わりません。", exampleMeaning: "Even after 5 o'clock passes, it doesn't finish." },
    { id: "L25v8", word: "集まります", reading: "あつまります", pitch: 4, meaning: "to gather; to come together", example: "ベルが鳴ったら、ここに集まってください。", exampleMeaning: "When the bell rings, please gather here." },
    { id: "L25v9", word: "全部", reading: "ぜんぶ", pitch: 1, meaning: "all; everything", example: "全部食べても、まだおなかがすいています。", exampleMeaning: "Even after eating it all, I'm still hungry." },
    { id: "L25v10", word: "細かい", reading: "こまかい", pitch: 3, meaning: "small (change); fine; detailed", example: "細かいお金がなくても、大丈夫です。", exampleMeaning: "Even if you don't have small change, it's fine." }
  ],
  grammar: [
    {
      id: "L25g1",
      point: "〜たら (if / when — past-conditional)",
      explanation: "Form: plain past (た-form) ＋ ら. Verb 行った→行ったら, i-adj 高かった→高かったら, na-adj/noun 暇だった→暇だったら. It means 'if X happens' or 'when X is done, then…'. The main clause states what follows once the condition is met. Use it for a one-time, ordered 'after/when' as well as a hypothetical 'if'.",
      examples: [
        "時間があったら、手伝ってください。 (If you have time, please help.)",
        "駅に着いたら、電話します。 (When I arrive at the station, I'll call.)",
        "もし宝くじが当たったら、家を買います。 (If I won the lottery, I'd buy a house.)"
      ],
      listening: "Listen for the past た-form immediately followed by ら — that ら turns it into 'if/when'.",
      production: "Make three sentences about your plans using 〜たら: one real, one hypothetical."
    },
    {
      id: "L25g2",
      point: "〜ても (even if / even though)",
      explanation: "Form: verb て-form ＋ も; i-adj い→くても; na-adj/noun ＋でも. The main clause stays true regardless of the condition. Contrast with 〜たら: たら = the result depends on the condition; ても = the result is unaffected by it. Often paired with どんなに / いくら.",
      examples: [
        "雨が降っても、試合は続きます。 (Even if it rains, the match continues.)",
        "高くても、この時計が買いたいです。 (Even if it's expensive, I want to buy this watch.)",
        "どんなに忙しくても、朝ごはんは食べます。 (No matter how busy I am, I eat breakfast.)"
      ],
      listening: "Listen for て-form ＋ も to flag the concessive 'even if'. Compare with たら, which makes the result conditional.",
      production: "Describe two things you'd do no matter what, using 〜ても or どんなに〜ても."
    }
  ],
  kanji: [
    { id: "L25k1", char: "業", reading: "ぎょう／わざ", meaning: "work; vocation; deed", exampleWord: "卒業（そつぎょう）" },
    { id: "L25k2", char: "留", reading: "りゅう／と（める）", meaning: "stay; detain; fasten", exampleWord: "留学（りゅうがく）" },
    { id: "L25k3", char: "全", reading: "ぜん／まった（く）", meaning: "whole; all; entirely", exampleWord: "全部（ぜんぶ）" },
    { id: "L25k4", char: "連", reading: "れん／つ（れる）", meaning: "connect; take along", exampleWord: "連絡（れんらく）" }
  ],
  reading: {
    id: "L25r1",
    title: "卒業したら",
    passage: "リンさんは来年大学を卒業します。\n卒業したら、国へ帰って働くつもりです。\nでも、もしいい仕事が見つかったら、日本にもう少しいたいと思っています。\n給料が高くなくても、好きな仕事ならがんばれます。\nどんなに大変でも、あきらめないと言っていました。",
    targetWords: [
      { word: "卒業します", id: "L25v2" },
      { word: "給料", id: "L25v4" }
    ],
    questions: [
      { id: "rq25-1", q: "リンさんはいつ大学を卒業しますか。", o: ["今年", "来年", "再来年", "もう卒業した"], c: 1, exp: "来年大学を卒業します。" },
      { id: "rq25-2", q: "いい仕事が見つかったら、リンさんはどうしたいですか。", o: ["すぐ国へ帰る", "日本にもう少しいたい", "大学院に行く", "仕事をやめる"], c: 1, exp: "もしいい仕事が見つかったら、日本にもう少しいたい。" },
      { id: "rq25-3", q: "リンさんにとって、給料より大切なことは何ですか。", o: ["休みが多いこと", "好きな仕事であること", "会社が大きいこと", "東京で働くこと"], c: 1, exp: "給料が高くなくても、好きな仕事ならがんばれます。" }
    ]
  },
  listening: [
    { id: "L25l1", audioText: "A：日本語の試験、どうでしたか。B：まだ結果が出ていません。でも、もし落ちても、来年もう一度受けるつもりです。", a: "Bさんは試験に落ちたら、どうしますか。", o: ["あきらめる", "来年もう一度受ける", "国へ帰る", "先生に相談する"], c: 1, exp: "もし落ちても、来年もう一度受けるつもりです。" },
    { id: "L25l2", audioText: "A：会議は何時からですか。B：3時です。みなさんが集まったら、始めましょう。", a: "会議はいつ始めますか。", o: ["3時ちょうどに", "みんなが集まったら", "社長が来たら", "資料ができたら"], c: 1, exp: "みなさんが集まったら、始めましょう。" }
  ],
  questions: [
    { id: "L25q1", dim: "grammar", type: "recall", difficulty: "easy", s: "時間があっ___、手伝ってください。(If you have time, please help.)", a: "たら", o: ["たら", "ても", "ながら", "から"], c: 0, exp: "た-form ＋ ら = 'if/when'. The help depends on having time.", linksTo: "L25g1" },
    { id: "L25q2", dim: "grammar", type: "recall", difficulty: "medium", s: "雨が降っ___、試合は続きます。(Even if it rains, the match continues.)", a: "ても", o: ["たら", "ても", "と", "ので"], c: 1, exp: "て-form ＋ も = 'even if'. The result is unaffected by the rain.", linksTo: "L25g2" },
    { id: "L25q3", dim: "grammar", type: "recall", difficulty: "hard", s: "Choose the natural sentence.", a: "高くても買います", o: ["高いたら買います", "高くても買います", "高いても買います", "高かっても買います"], c: 1, exp: "i-adj 高い → 高くても (drop い, add くても).", linksTo: "L25g2" },
    { id: "L25q4", dim: "vocab", type: "recognition", difficulty: "easy", s: "給料 means…", a: "salary", o: ["bonus", "salary", "savings", "tax"], c: 1, exp: "給料 (きゅうりょう) = salary/pay. ボーナス = bonus.", linksTo: "L25v4" },
    { id: "L25q5", dim: "vocab", type: "recall", difficulty: "medium", s: "ベルが鳴ったら、ここに___ください。(gather)", a: "集まって", o: ["集めて", "集まって", "過ぎて", "連絡して"], c: 1, exp: "集まります = (people) gather. 集めます = to collect things.", linksTo: "L25v8" },
    { id: "L25q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji is read 「ぜん」 in 「全部」?", a: "全", o: ["業", "留", "全", "連"], c: 2, exp: "全 = whole/all → 全部（ぜんぶ）.", linksTo: "L25k3" }
  ]
},

/* ===================== LESSON 26 ===================== */
{
  lessonNum: 26,
  topic: "〜んです・〜ていただけませんか",
  topicEn: "Explanatory んです & Polite Requests",
  module: 'L26', moduleLabel: 'L26 — Explanatory んです & Requests', lesson: 'L26', lessonLabel: 'Explanatory んです & Requests',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L26v1", word: "約束", reading: "やくそく", pitch: 0, meaning: "promise; appointment; plan with someone", example: "友達と約束があるんです。", exampleMeaning: "It's that I have plans with a friend." },
    { id: "L26v2", word: "都合", reading: "つごう", pitch: 0, meaning: "convenience; one's availability", example: "あした都合が悪いんです。", exampleMeaning: "It's that I'm not available tomorrow." },
    { id: "L26v3", word: "直します", reading: "なおします", pitch: 4, meaning: "to fix; to repair; to correct", example: "この時計を直していただけませんか。", exampleMeaning: "Could you fix this watch for me?" },
    { id: "L26v4", word: "故障します", reading: "こしょうします", pitch: 0, meaning: "to break down (machine)", example: "エアコンが故障したんです。", exampleMeaning: "It's that the air conditioner broke down." },
    { id: "L26v5", word: "動きます", reading: "うごきます", pitch: 4, meaning: "to move; to run/work (machine)", example: "パソコンが動かないんです。", exampleMeaning: "It's that my computer won't work." },
    { id: "L26v6", word: "込みます", reading: "こみます", pitch: 2, meaning: "to be crowded", example: "電車が込んでいて、遅れたんです。", exampleMeaning: "It's that the train was crowded, so I was late." },
    { id: "L26v7", word: "詳しい", reading: "くわしい", pitch: 3, meaning: "detailed; knowing a lot about", example: "この町に詳しいんですか。", exampleMeaning: "Are you familiar with this town?" },
    { id: "L26v8", word: "急ぎます", reading: "いそぎます", pitch: 3, meaning: "to hurry", example: "急いでいるんです。先に行ってください。", exampleMeaning: "It's that I'm in a hurry. Please go ahead." },
    { id: "L26v9", word: "説明します", reading: "せつめいします", pitch: 0, meaning: "to explain", example: "もう一度説明していただけませんか。", exampleMeaning: "Could you explain it once more?" },
    { id: "L26v10", word: "両替します", reading: "りょうがえします", pitch: 0, meaning: "to exchange money / break a bill", example: "千円を両替していただけませんか。", exampleMeaning: "Could you change a 1000-yen note for me?" }
  ],
  grammar: [
    {
      id: "L26g1",
      point: "〜んです (explanatory / asking for a reason)",
      explanation: "Form: plain form ＋ んです (casual: んだ). na-adj/noun use な before んです (元気なんです / 学生なんです). It links a statement to the situation: giving a reason, an explanation, or asking 'what's the matter?'. 「どうしたんですか」=what happened? — answer with 〜んです. It is NOT used to state plain neutral facts.",
      examples: [
        "A: 顔色が悪いですね。B: 頭が痛いんです。 (You look pale. — It's that my head hurts.)",
        "どうして来なかったんですか。 (How come you didn't come?)",
        "この料理、おいしいですね。自分で作ったんですか。 (This is tasty. Did you make it yourself?)"
      ],
      listening: "んです often answers or asks 'why/what's going on'. Hear な before んです after a noun/na-adjective.",
      production: "Imagine you're late. Explain why using 〜んです (e.g. the train was crowded)."
    },
    {
      id: "L26g2",
      point: "〜ていただけませんか (polite request)",
      explanation: "Form: て-form ＋ いただけませんか. A humble, very polite way to ask someone to do something — softer than 〜てください. Use it with people you should be polite to. Slightly less formal alternative: 〜てもらえませんか.",
      examples: [
        "すみません、写真を撮っていただけませんか。 (Excuse me, could you take a photo?)",
        "この漢字の読み方を教えていただけませんか。 (Could you teach me how to read this kanji?)",
        "もう少しゆっくり話していただけませんか。 (Could you speak a little more slowly?)"
      ],
      listening: "Listen for て-form ＋ いただけませんか as a polite request. The か at the end keeps it soft.",
      production: "Politely ask a stranger to do two small favours using 〜ていただけませんか."
    },
    {
      id: "L26g3",
      point: "〜たらいいですか (asking what one should do)",
      explanation: "Form: た-form ＋ らいいですか. Used to ask for instructions/advice: 'What/where/how should I…?'. Often with a question word (どこ・何・いつ・どう).",
      examples: [
        "すみません、どこで払ったらいいですか。 (Excuse me, where should I pay?)",
        "何時に来たらいいですか。 (What time should I come?)",
        "この書類はどう書いたらいいですか。 (How should I fill out this form?)"
      ],
      listening: "A question word ＋ た-form ＋ らいいですか signals 'what should I do?'.",
      production: "You're a new visitor. Ask two 'what/where should I…?' questions using 〜たらいいですか."
    }
  ],
  kanji: [
    { id: "L26k1", char: "約", reading: "やく", meaning: "promise; approximately", exampleWord: "約束（やくそく）" },
    { id: "L26k2", char: "束", reading: "そく／たば", meaning: "bundle; bind", exampleWord: "約束（やくそく）" },
    { id: "L26k3", char: "急", reading: "きゅう／いそ（ぐ）", meaning: "hurry; sudden; urgent", exampleWord: "急ぎます（いそぎます）" },
    { id: "L26k4", char: "説", reading: "せつ／と（く）", meaning: "explain; theory", exampleWord: "説明（せつめい）" }
  ],
  reading: {
    id: "L26r1",
    title: "どうしたんですか",
    passage: "けさ、会社に30分遅れました。\n部長に「どうして遅れたんですか」と聞かれました。\n電車が止まっていたんです、と説明しました。\n事故があって、電車が30分も動かなかったんです。\n部長は「そうだったんですか。次から、何かあったら連絡してください」と言いました。",
    targetWords: [
      { word: "説明しました", id: "L26v9" },
      { word: "動かなかった", id: "L26v5" }
    ],
    questions: [
      { id: "rq26-1", q: "この人はなぜ会社に遅れましたか。", o: ["寝坊したから", "電車が止まっていたから", "道に迷ったから", "気分が悪かったから"], c: 1, exp: "電車が止まっていたんです。事故で動かなかった。" },
      { id: "rq26-2", q: "電車はどのくらい動きませんでしたか。", o: ["10分", "20分", "30分", "1時間"], c: 2, exp: "電車が30分も動かなかったんです。" },
      { id: "rq26-3", q: "部長は次から何をしてほしいと言いましたか。", o: ["早く起きる", "何かあったら連絡する", "タクシーで来る", "謝る"], c: 1, exp: "何かあったら連絡してください。" }
    ]
  },
  listening: [
    { id: "L26l1", audioText: "A：すみません、この自転車、かぎが壊れているんです。直していただけませんか。B：はい、ちょっと見ますね。", a: "Aさんは何をお願いしましたか。", o: ["自転車を貸すこと", "かぎを直すこと", "道を教えること", "お金を両替すること"], c: 1, exp: "かぎが壊れているんです。直していただけませんか。" },
    { id: "L26l2", audioText: "A：はじめて来たので、わからないんですが、どこで払ったらいいですか。B：あちらのレジでお願いします。", a: "Aさんは何を知りたいですか。", o: ["店の場所", "払う場所", "電車の時間", "トイレの場所"], c: 1, exp: "どこで払ったらいいですか。" }
  ],
  questions: [
    { id: "L26q1", dim: "grammar", type: "recall", difficulty: "easy", s: "顔色が悪いですね。― 頭が痛い___。(It's that my head hurts.)", a: "んです", o: ["んです", "ました", "でしょう", "ています"], c: 0, exp: "〜んです gives the reason behind the situation.", linksTo: "L26g1" },
    { id: "L26q2", dim: "grammar", type: "recall", difficulty: "hard", s: "学生 ＋ んです → ?", a: "学生なんです", o: ["学生んです", "学生だんです", "学生なんです", "学生のんです"], c: 2, exp: "Nouns / na-adjectives take な before んです: 学生なんです.", linksTo: "L26g1" },
    { id: "L26q3", dim: "grammar", type: "recall", difficulty: "medium", s: "写真を撮っ___。(Could you take a photo? — very polite)", a: "ていただけませんか", o: ["てください", "ていただけませんか", "てもいいですか", "ましょうか"], c: 1, exp: "て-form ＋ いただけませんか = polite request.", linksTo: "L26g2" },
    { id: "L26q4", dim: "grammar", type: "recall", difficulty: "medium", s: "どこで払っ___いいですか。(Where should I pay?)", a: "たら", o: ["たら", "ても", "ながら", "ては"], c: 0, exp: "Question word ＋ た-form ＋ らいいですか = 'what/where should I…?'.", linksTo: "L26g3" },
    { id: "L26q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "故障します means…", a: "to break down", o: ["to be crowded", "to break down (machine)", "to hurry", "to explain"], c: 1, exp: "故障します = a machine breaks down. 込みます = to be crowded.", linksTo: "L26v4" },
    { id: "L26q6", dim: "vocab", type: "recall", difficulty: "medium", s: "電車が___いて、遅れたんです。(crowded)", a: "込んで", o: ["動いて", "込んで", "急いで", "直して"], c: 1, exp: "込みます = to be crowded → 込んでいて.", linksTo: "L26v6" }
  ]
},

/* ===================== LESSON 27 ===================== */
{
  lessonNum: 27,
  topic: "可能形（〜られます）",
  topicEn: "Potential Form — Can Do",
  module: 'L27', moduleLabel: 'L27 — Potential Form (Can Do)', lesson: 'L27', lessonLabel: 'Potential Form (Can Do)',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L27v1", word: "見えます", reading: "みえます", pitch: 3, meaning: "to be visible; can see (spontaneously)", example: "ここから海が見えます。", exampleMeaning: "You can see the sea from here." },
    { id: "L27v2", word: "聞こえます", reading: "きこえます", pitch: 4, meaning: "to be audible; can hear (spontaneously)", example: "鳥の声が聞こえます。", exampleMeaning: "You can hear birds' voices." },
    { id: "L27v3", word: "できます", reading: "できます", pitch: 3, meaning: "to be able to; to be completed/made", example: "日本語が少しできます。", exampleMeaning: "I can speak a little Japanese." },
    { id: "L27v4", word: "景色", reading: "けしき", pitch: 1, meaning: "scenery; view", example: "山の上から景色が見えます。", exampleMeaning: "You can see the scenery from the top of the mountain." },
    { id: "L27v5", word: "翻訳します", reading: "ほんやくします", pitch: 0, meaning: "to translate", example: "この本は英語に翻訳できます。", exampleMeaning: "This book can be translated into English." },
    { id: "L27v6", word: "泳ぎます", reading: "およぎます", pitch: 3, meaning: "to swim", example: "100メートル泳げます。", exampleMeaning: "I can swim 100 meters." },
    { id: "L27v7", word: "信号", reading: "しんごう", pitch: 0, meaning: "traffic light; signal", example: "信号が青になったら、渡れます。", exampleMeaning: "When the light turns green, you can cross." },
    { id: "L27v8", word: "ぜんぜん", reading: "ぜんぜん", pitch: 0, meaning: "(not) at all (with negative)", example: "漢字はぜんぜん読めません。", exampleMeaning: "I can't read kanji at all." },
    { id: "L27v9", word: "届きます", reading: "とどきます", pitch: 3, meaning: "to reach; to be delivered", example: "メールが届いたら、見られます。", exampleMeaning: "Once the email arrives, I can see it." },
    { id: "L27v10", word: "ペット", reading: "ペット", pitch: 1, meaning: "pet", example: "このマンションではペットが飼えません。", exampleMeaning: "You can't keep pets in this apartment." }
  ],
  grammar: [
    {
      id: "L27g1",
      point: "可能形 — potential verbs (can do)",
      explanation: "Group I: change the final -u sound to -eru (書く→書ける, 話す→話せる, 泳ぐ→泳げる). Group II: drop ます, add られます/られる (食べます→食べられます, 見ます→見られます). Irregular: します→できます, 来ます→来られます. The object usually takes が (or keeps を): 日本語が話せます. Note 見えます/聞こえます are spontaneous, while 見られます/聞けます mean 'can see/hear if you try'.",
      examples: [
        "私は漢字が少し書けます。 (I can write a little kanji.)",
        "あした来られますか。 (Can you come tomorrow?)",
        "ここで写真が撮れますか。 (Can I take photos here?)"
      ],
      listening: "Potential verbs end in -eru / られる. が often marks the thing you can do.",
      production: "List three things you can and can't do in Japanese using the potential form (〜が…ます／…ません)."
    },
    {
      id: "L27g2",
      point: "〜が見えます / 〜が聞こえます (spontaneously visible / audible)",
      explanation: "Use these when something comes into view or earshot on its own, without your effort. Contrast: 窓から富士山が見えます (it's simply visible) vs. メガネをかければ富士山が見られます (you can see it if you try).",
      examples: [
        "部屋から花火が見えます。 (You can see the fireworks from the room.)",
        "となりの部屋から音楽が聞こえます。 (Music can be heard from the next room.)",
        "電車の音が聞こえて、眠れませんでした。 (I could hear the train and couldn't sleep.)"
      ],
      listening: "見えます／聞こえます describe what naturally reaches your eyes/ears, marked with が.",
      production: "Describe what you can see and hear from your window using 見えます / 聞こえます."
    },
    {
      id: "L27g3",
      point: "〜しか〜ない (only / nothing but)",
      explanation: "〜しか always pairs with a negative verb but carries a positive 'only' meaning. しか replaces を/が (and may follow other particles). It emphasises that the amount is less than expected: 100円しかありません = I have only 100 yen.",
      examples: [
        "ひらがなしか読めません。 (I can only read hiragana.)",
        "けさはパンしか食べませんでした。 (This morning I only ate bread.)",
        "一人しか来ませんでした。 (Only one person came.)"
      ],
      listening: "しか signals 'only', but the verb stays negative — don't mishear it as a real negative.",
      production: "Say two 'I only have / can only…' sentences using 〜しか〜ない."
    }
  ],
  kanji: [
    { id: "L27k1", char: "見", reading: "けん／み（る）", meaning: "see; look", exampleWord: "見えます（みえます）" },
    { id: "L27k2", char: "聞", reading: "ぶん／き（く）", meaning: "hear; listen; ask", exampleWord: "聞こえます（きこえます）" },
    { id: "L27k3", char: "泳", reading: "えい／およ（ぐ）", meaning: "swim", exampleWord: "泳げます（およげます）" },
    { id: "L27k4", char: "信", reading: "しん", meaning: "trust; signal; believe", exampleWord: "信号（しんごう）" }
  ],
  reading: {
    id: "L27r1",
    title: "新しいへや",
    passage: "先月、駅の近くのマンションに引っ越しました。\n部屋から海が見えて、とてもきれいです。\n朝は鳥の声が聞こえて、気持ちがいいです。\nでも、ペットが飼えないので、少しさびしいです。\n近くにプールがあるので、休みの日は泳げます。",
    targetWords: [
      { word: "見えて", id: "L27v1" },
      { word: "聞こえて", id: "L27v2" },
      { word: "泳げます", id: "L27v6" }
    ],
    questions: [
      { id: "rq27-1", q: "部屋から何が見えますか。", o: ["山", "海", "公園", "駅"], c: 1, exp: "部屋から海が見えて、とてもきれいです。" },
      { id: "rq27-2", q: "このマンションでできないことは何ですか。", o: ["泳ぐこと", "ペットを飼うこと", "料理すること", "鳥を見ること"], c: 1, exp: "ペットが飼えないので、少しさびしいです。" },
      { id: "rq27-3", q: "休みの日にできることは何ですか。", o: ["買い物", "泳ぐこと", "つり", "ジョギング"], c: 1, exp: "近くにプールがあるので、泳げます。" }
    ]
  },
  listening: [
    { id: "L27l1", audioText: "A：日本語で電話ができますか。B：少しできますが、まだ早く話せません。", a: "Bさんは日本語の電話がどうですか。", o: ["ぜんぜんできない", "少しできるが速く話せない", "とても上手だ", "電話が嫌いだ"], c: 1, exp: "少しできますが、まだ早く話せません。" },
    { id: "L27l2", audioText: "A：このへやから富士山が見えますか。B：天気がよければ見えますよ。きょうは雲が多くて見えません。", a: "きょう富士山は見えますか。", o: ["よく見える", "見えない", "半分見える", "夜だけ見える"], c: 1, exp: "きょうは雲が多くて見えません。" }
  ],
  questions: [
    { id: "L27q1", dim: "grammar", type: "recall", difficulty: "medium", s: "書きます → potential form?", a: "書けます", o: ["書きられます", "書けます", "書かれます", "書けります"], c: 1, exp: "Group I: -ku → -keru. 書く→書ける→書けます.", linksTo: "L27g1" },
    { id: "L27q2", dim: "grammar", type: "recall", difficulty: "medium", s: "食べます → potential form?", a: "食べられます", o: ["食べれます", "食べられます", "食べます", "食べさせます"], c: 1, exp: "Group II: drop ます, add られます. (食べれます is casual 'ら-less'.)", linksTo: "L27g1" },
    { id: "L27q3", dim: "grammar", type: "recall", difficulty: "hard", s: "となりの部屋から音楽が___。(can be heard, spontaneously)", a: "聞こえます", o: ["聞けます", "聞こえます", "聞かれます", "聞きます"], c: 1, exp: "Spontaneous hearing = 聞こえます (not 聞けます).", linksTo: "L27g2" },
    { id: "L27q4", dim: "grammar", type: "recall", difficulty: "hard", s: "100円___ありません。(I have only 100 yen.)", a: "しか", o: ["だけ", "しか", "でも", "ほど"], c: 1, exp: "しか + negative verb = 'only'. だけ would take a positive verb.", linksTo: "L27g3" },
    { id: "L27q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "景色 means…", a: "scenery", o: ["traffic light", "scenery", "pet", "signal"], c: 1, exp: "景色 (けしき) = scenery/view.", linksTo: "L27v4" },
    { id: "L27q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'hear / listen'?", a: "聞", o: ["見", "聞", "泳", "信"], c: 1, exp: "聞 = hear/listen → 聞こえます.", linksTo: "L27k2" }
  ]
},

/* ===================== LESSON 28 ===================== */
{
  lessonNum: 28,
  topic: "〜ながら・〜ています（習慣）・〜し",
  topicEn: "While · Habits · Listing Reasons",
  module: 'L28', moduleLabel: 'L28 — While · Habits · And (し)', lesson: 'L28', lessonLabel: 'While · Habits · And (し)',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L28v1", word: "通います", reading: "かよいます", pitch: 3, meaning: "to commute; to attend regularly", example: "毎日、自転車で学校に通っています。", exampleMeaning: "I commute to school by bike every day." },
    { id: "L28v2", word: "続けます", reading: "つづけます", pitch: 3, meaning: "to continue", example: "10年間ピアノを続けています。", exampleMeaning: "I've been continuing piano for 10 years." },
    { id: "L28v3", word: "残業します", reading: "ざんぎょうします", pitch: 0, meaning: "to work overtime", example: "今週は毎日残業しています。", exampleMeaning: "This week I'm working overtime every day." },
    { id: "L28v4", word: "別々に", reading: "べつべつに", pitch: 0, meaning: "separately", example: "別々に払いましょう。", exampleMeaning: "Let's pay separately." },
    { id: "L28v5", word: "メモします", reading: "メモします", pitch: 1, meaning: "to take a note", example: "話を聞きながら、メモします。", exampleMeaning: "I take notes while listening." },
    { id: "L28v6", word: "ためます", reading: "ためます", pitch: 3, meaning: "to save up; to accumulate", example: "働きながら、お金をためています。", exampleMeaning: "I'm saving money while working." },
    { id: "L28v7", word: "貿易", reading: "ぼうえき", pitch: 0, meaning: "trade (commerce)", example: "貿易の会社で働いています。", exampleMeaning: "I work at a trading company." },
    { id: "L28v8", word: "親切", reading: "しんせつ", pitch: 1, meaning: "kind (na-adjective)", example: "この店は安いし、店員も親切です。", exampleMeaning: "This shop is cheap, and the staff are kind too." },
    { id: "L28v9", word: "まじめ", reading: "まじめ", pitch: 0, meaning: "serious; diligent (na-adjective)", example: "彼はまじめだし、よく働きます。", exampleMeaning: "He's diligent, and he works hard." },
    { id: "L28v10", word: "番組", reading: "ばんぐみ", pitch: 0, meaning: "(TV/radio) program", example: "ごはんを食べながら、番組を見ます。", exampleMeaning: "I watch programs while eating." }
  ],
  grammar: [
    {
      id: "L28g1",
      point: "〜ながら (doing two things at once)",
      explanation: "Form: verb ます-stem ＋ ながら ＋ main clause. One subject does two actions simultaneously; the SECOND (main) verb is the central action. 音楽を聞きながら勉強します = study (main) while listening to music (background).",
      examples: [
        "コーヒーを飲みながら、新聞を読みます。 (I read the paper while drinking coffee.)",
        "歌を歌いながら、シャワーを浴びます。 (I sing while showering.)",
        "話しながら歩きましょう。 (Let's talk while we walk.)"
      ],
      listening: "ます-stem ＋ ながら marks the background action; the main verb comes after.",
      production: "Describe two things you often do at the same time using 〜ながら."
    },
    {
      id: "L28g2",
      point: "〜ています (habitual / ongoing activity)",
      explanation: "Besides 'currently doing', 〜ています expresses a repeated habit or a long-running activity/state: occupations, regular routines, ongoing study. 銀行で働いています = I work at a bank (ongoing). 日本語を勉強しています = I'm studying Japanese these days.",
      examples: [
        "貿易の会社で働いています。 (I work at a trading company.)",
        "毎朝ジョギングをしています。 (I go jogging every morning.)",
        "3年間、日本語を習っています。 (I've been learning Japanese for 3 years.)"
      ],
      listening: "〜ています can mean a habit/occupation, not only 'right now'. Context (毎日, 〜年間) tells you which.",
      production: "Say what you do for work/study and one daily habit, both with 〜ています."
    },
    {
      id: "L28g3",
      point: "〜し、〜し (listing reasons / 'and what's more')",
      explanation: "Form: plain form ＋ し. Lists two or more reasons or qualities, implying 'and on top of that'. Often the final clause states a conclusion: この店は安いし、おいしいし、よく来ます. na-adj/noun: 親切だし / 学生だし.",
      examples: [
        "この部屋は広いし、駅も近いし、気に入っています。 (It's spacious and near the station, so I like it.)",
        "彼は親切だし、まじめだし、みんなに好かれています。 (He's kind and diligent, so everyone likes him.)",
        "きょうは寒いし、雨だし、出かけたくないです。 (It's cold and rainy, so I don't want to go out.)"
      ],
      listening: "Repeated 〜し stacks reasons; expect a conclusion or feeling at the end.",
      production: "Give two reasons you like something using 〜し、〜し."
    }
  ],
  kanji: [
    { id: "L28k1", char: "通", reading: "つう／かよ（う）／とお（る）", meaning: "pass through; commute", exampleWord: "通います（かよいます）" },
    { id: "L28k2", char: "続", reading: "ぞく／つづ（く）", meaning: "continue", exampleWord: "続けます（つづけます）" },
    { id: "L28k3", char: "親", reading: "しん／おや", meaning: "parent; intimacy; kind", exampleWord: "親切（しんせつ）" },
    { id: "L28k4", char: "番", reading: "ばん", meaning: "number; turn; watch", exampleWord: "番組（ばんぐみ）" }
  ],
  reading: {
    id: "L28r1",
    title: "わたしの一日",
    passage: "私は貿易の会社で働いています。\n毎朝、音楽を聞きながら電車で会社へ通っています。\n仕事は大変だし、残業も多いし、ときどき疲れます。\nでも、会社の人はみんな親切だし、仕事もおもしろいので、続けたいと思っています。\n週末は、コーヒーを飲みながら本を読んで、ゆっくりします。",
    targetWords: [
      { word: "通っています", id: "L28v1" },
      { word: "親切", id: "L28v8" },
      { word: "続けたい", id: "L28v2" }
    ],
    questions: [
      { id: "rq28-1", q: "この人は通勤のとき、何をしますか。", o: ["本を読む", "音楽を聞く", "寝る", "メモする"], c: 1, exp: "音楽を聞きながら電車で通っています。" },
      { id: "rq28-2", q: "仕事の大変なところは何ですか。", o: ["給料が安い", "残業が多い", "遠い", "人がこわい"], c: 1, exp: "残業も多いし、ときどき疲れます。" },
      { id: "rq28-3", q: "なぜこの人は仕事を続けたいですか。", o: ["給料がいいから", "人が親切で仕事もおもしろいから", "家から近いから", "ひまだから"], c: 1, exp: "会社の人はみんな親切だし、仕事もおもしろいので。" }
    ]
  },
  listening: [
    { id: "L28l1", audioText: "A：いつも何をしながら勉強しますか。B：音楽を聞きながら勉強します。そのほうが集中できるんです。", a: "Bさんは何をしながら勉強しますか。", o: ["テレビを見ながら", "音楽を聞きながら", "食べながら", "歩きながら"], c: 1, exp: "音楽を聞きながら勉強します。" },
    { id: "L28l2", audioText: "A：あの店、どうですか。B：安いし、店員も親切だし、おすすめですよ。", a: "Bさんはどうしてその店をすすめますか。", o: ["近いから", "安くて店員も親切だから", "新しいから", "有名だから"], c: 1, exp: "安いし、店員も親切だし。" }
  ],
  questions: [
    { id: "L28q1", dim: "grammar", type: "recall", difficulty: "easy", s: "音楽を聞き___、勉強します。(while listening)", a: "ながら", o: ["ながら", "たら", "ても", "ので"], c: 0, exp: "ます-stem ＋ ながら = 'while doing'.", linksTo: "L28g1" },
    { id: "L28q2", dim: "grammar", type: "recall", difficulty: "hard", s: "Which is correct for 'study while listening'?", a: "聞きながら勉強します", o: ["勉強しながら聞きます", "聞きながら勉強します", "聞くながら勉強します", "聞いてながら勉強します"], c: 1, exp: "The MAIN action (study) comes after ながら; use the ます-stem 聞き.", linksTo: "L28g1" },
    { id: "L28q3", dim: "grammar", type: "recall", difficulty: "medium", s: "貿易の会社で働い___。(I work — ongoing/occupation)", a: "ています", o: ["ます", "ています", "ました", "たいです"], c: 1, exp: "Occupations use 〜ています (ongoing state).", linksTo: "L28g2" },
    { id: "L28q4", dim: "grammar", type: "recall", difficulty: "medium", s: "安い___、おいしい___、よく来ます。(cheap AND tasty…)", a: "し / し", o: ["て / て", "し / し", "から / から", "が / が"], c: 1, exp: "〜し stacks reasons: 安いし、おいしいし.", linksTo: "L28g3" },
    { id: "L28q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "通います means…", a: "to commute / attend regularly", o: ["to continue", "to commute / attend regularly", "to save up", "to work overtime"], c: 1, exp: "通います = commute/attend regularly.", linksTo: "L28v1" },
    { id: "L28q6", dim: "vocab", type: "recall", difficulty: "medium", s: "彼は___だし、よく働きます。(diligent)", a: "まじめ", o: ["親切", "まじめ", "別々", "残業"], c: 1, exp: "まじめ = serious/diligent.", linksTo: "L28v9" }
  ]
},

/* ===================== LESSON 29 ===================== */
{
  lessonNum: 29,
  topic: "〜ています（状態）・〜てしまいました",
  topicEn: "Resultant States & Completion/Regret",
  module: 'L29', moduleLabel: 'L29 — Resultant States & 〜てしまう', lesson: 'L29', lessonLabel: 'Resultant States & 〜てしまう',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L29v1", word: "割れます", reading: "われます", pitch: 3, meaning: "to break; to crack (intransitive)", example: "コップが割れています。", exampleMeaning: "The glass is broken." },
    { id: "L29v2", word: "壊れます", reading: "こわれます", pitch: 3, meaning: "to break / be broken (intransitive)", example: "いすが壊れています。", exampleMeaning: "The chair is broken." },
    { id: "L29v3", word: "消えます", reading: "きえます", pitch: 3, meaning: "to go out; to disappear (intransitive)", example: "電気が消えています。", exampleMeaning: "The light is off." },
    { id: "L29v4", word: "つきます", reading: "つきます", pitch: 2, meaning: "to come on; to be lit (intransitive)", example: "エアコンがついています。", exampleMeaning: "The air conditioner is on." },
    { id: "L29v5", word: "落とします", reading: "おとします", pitch: 4, meaning: "to drop; to lose (transitive)", example: "財布を落としてしまいました。", exampleMeaning: "I dropped my wallet." },
    { id: "L29v6", word: "なくします", reading: "なくします", pitch: 0, meaning: "to lose (something)", example: "かぎをなくしてしまいました。", exampleMeaning: "I've lost my key." },
    { id: "L29v7", word: "汚れます", reading: "よごれます", pitch: 4, meaning: "to get dirty (intransitive)", example: "シャツが汚れています。", exampleMeaning: "The shirt is dirty." },
    { id: "L29v8", word: "間違えます", reading: "まちがえます", pitch: 4, meaning: "to make a mistake", example: "電車を間違えてしまいました。", exampleMeaning: "I took the wrong train." },
    { id: "L29v9", word: "故郷", reading: "ふるさと", pitch: 2, meaning: "hometown", example: "故郷の写真を見ると、なつかしいです。", exampleMeaning: "When I see photos of my hometown, I feel nostalgic." },
    { id: "L29v10", word: "忘れ物", reading: "わすれもの", pitch: 0, meaning: "something left behind", example: "電車に忘れ物をしてしまいました。", exampleMeaning: "I left something behind on the train." }
  ],
  grammar: [
    {
      id: "L29g1",
      point: "〜ています (state resulting from a change)",
      explanation: "With intransitive change verbs (割れる, 壊れる, 消える, つく, 開く, 閉まる, 汚れる…), 〜ています describes the resulting STATE, not an action in progress. 窓が割れています = the window is in a broken state. Compare: 雨が降っています = it's raining (action in progress).",
      examples: [
        "電気が消えています。だれもいないんでしょう。 (The light is off; probably nobody's there.)",
        "あ、さいふが落ちていますよ。 (Oh, there's a wallet lying there.)",
        "ドアが開いていますね。閉めましょうか。 (The door is open. Shall I close it?)"
      ],
      listening: "With change verbs, 〜ています = the current state (broken/off/open), not 'in the act of'.",
      production: "Look around the room and describe three states using 〜ています (e.g. the window is open)."
    },
    {
      id: "L29g2",
      point: "〜てしまいます / 〜てしまいました (completion or regret)",
      explanation: "Form: て-form ＋ しまいます. Two nuances: (1) finishing something completely — 宿題をやってしまいました; (2) regret over an unintended result — 電車に傘を忘れてしまいました. Casual contractions: 〜ちゃう (〜てしまう) / 〜じゃう (〜でしまう).",
      examples: [
        "この本はおもしろくて、一日で読んでしまいました。 (It was so interesting I finished it in a day.)",
        "大切な書類をなくしてしまいました。 (I've lost an important document — regret.)",
        "ケーキを全部食べてしまいました。 (I ended up eating all the cake.)"
      ],
      listening: "〜てしまいました often carries an 'oops/finally' feeling — listen to context to tell completion from regret.",
      production: "Tell one thing you accidentally did and one thing you finished completely, both with 〜てしまいました."
    }
  ],
  kanji: [
    { id: "L29k1", char: "消", reading: "しょう／き（える）／け（す）", meaning: "extinguish; disappear", exampleWord: "消えます（きえます）" },
    { id: "L29k2", char: "落", reading: "らく／お（ちる）／お（とす）", meaning: "fall; drop", exampleWord: "落とします（おとします）" },
    { id: "L29k3", char: "汚", reading: "お／よご（れる）／きたな（い）", meaning: "dirty; pollute", exampleWord: "汚れます（よごれます）" },
    { id: "L29k4", char: "間", reading: "かん／あいだ／ま", meaning: "interval; between", exampleWord: "間違えます（まちがえます）" }
  ],
  reading: {
    id: "L29r1",
    title: "たいへんな朝",
    passage: "けさは本当にたいへんでした。\nまず、寝坊して、電車を間違えてしまいました。\n駅で走ったとき、かばんが開いていて、財布を落としてしまいました。\n会社に着いたら、電気が消えていて、だれもいませんでした。\nきょうは休みだったのを、忘れていたんです。",
    targetWords: [
      { word: "間違えて", id: "L29v8" },
      { word: "落として", id: "L29v5" },
      { word: "消えて", id: "L29v3" }
    ],
    questions: [
      { id: "rq29-1", q: "この人は電車をどうしましたか。", o: ["乗り遅れた", "間違えた", "止めた", "降りた"], c: 1, exp: "電車を間違えてしまいました。" },
      { id: "rq29-2", q: "なぜ財布を落としましたか。", o: ["ポケットが小さいから", "かばんが開いていたから", "盗まれたから", "忘れたから"], c: 1, exp: "かばんが開いていて、財布を落としてしまいました。" },
      { id: "rq29-3", q: "会社にだれもいなかったのはなぜですか。", o: ["朝早かったから", "きょうは休みだったから", "事故があったから", "停電したから"], c: 1, exp: "きょうは休みだったのを忘れていた。" }
    ]
  },
  listening: [
    { id: "L29l1", audioText: "A：あれ、エアコンがついていますよ。B：あ、本当だ。消すのを忘れてしまいました。", a: "Bさんは何を忘れましたか。", o: ["エアコンをつけること", "エアコンを消すこと", "窓を閉めること", "電気をつけること"], c: 1, exp: "消すのを忘れてしまいました。" },
    { id: "L29l2", audioText: "A：その本、もう読みましたか。B：ええ、おもしろくて、ゆうべ全部読んでしまいました。", a: "Bさんは本をどうしましたか。", o: ["まだ読んでいない", "半分読んだ", "ゆうべ全部読んだ", "なくした"], c: 2, exp: "ゆうべ全部読んでしまいました。" }
  ],
  questions: [
    { id: "L29q1", dim: "grammar", type: "recall", difficulty: "medium", s: "電気が___。だれもいないんでしょう。(The light is off — state)", a: "消えています", o: ["消します", "消えています", "消えます", "消しています"], c: 1, exp: "Change verb 消える ＋ ています = resulting state ('is off').", linksTo: "L29g1" },
    { id: "L29q2", dim: "grammar", type: "recall", difficulty: "hard", s: "Which describes a STATE, not an action in progress?", a: "ドアが開いています", o: ["雨が降っています", "ご飯を食べています", "ドアが開いています", "本を読んでいます"], c: 2, exp: "開く is a change verb → 開いています = 'is open' (state).", linksTo: "L29g1" },
    { id: "L29q3", dim: "grammar", type: "recall", difficulty: "easy", s: "傘を電車に忘れ___。(I left it — regret)", a: "てしまいました", o: ["ました", "てしまいました", "ています", "ておきました"], c: 1, exp: "〜てしまいました shows the regret of an unintended result.", linksTo: "L29g2" },
    { id: "L29q4", dim: "grammar", type: "recall", difficulty: "hard", s: "Casual form of 食べてしまう is…", a: "食べちゃう", o: ["食べじゃう", "食べちゃう", "食べとく", "食べてる"], c: 1, exp: "〜てしまう → 〜ちゃう (〜でしまう → 〜じゃう).", linksTo: "L29g2" },
    { id: "L29q5", dim: "vocab", type: "recognition", difficulty: "medium", s: "Which pair is correct (intransitive)?", a: "割れます = to break (by itself)", o: ["割れます = to break it", "割れます = to break (by itself)", "落とします = to fall", "消します = to go out"], c: 1, exp: "割れます is intransitive; 割ります is transitive ('break it').", linksTo: "L29v1" },
    { id: "L29q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'fall / drop'?", a: "落", o: ["消", "落", "汚", "間"], c: 1, exp: "落 → 落とします (drop).", linksTo: "L29k2" }
  ]
},

/* ===================== LESSON 30 ===================== */
{
  lessonNum: 30,
  topic: "〜てあります・〜ておきます",
  topicEn: "Resultant State (Intentional) & Doing in Advance",
  module: 'L30', moduleLabel: 'L30 — 〜てあります & 〜ておきます', lesson: 'L30', lessonLabel: '〜てあります & 〜ておきます',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L30v1", word: "貼ります", reading: "はります", pitch: 2, meaning: "to stick; to post (a notice)", example: "かべに地図が貼ってあります。", exampleMeaning: "A map is put up on the wall." },
    { id: "L30v2", word: "掛けます", reading: "かけます", pitch: 3, meaning: "to hang", example: "かべに絵が掛けてあります。", exampleMeaning: "A picture is hung on the wall." },
    { id: "L30v3", word: "並べます", reading: "ならべます", pitch: 4, meaning: "to line up; to arrange", example: "テーブルにお皿が並べてあります。", exampleMeaning: "Plates are arranged on the table." },
    { id: "L30v4", word: "戻します", reading: "もどします", pitch: 4, meaning: "to put back; to return (something)", example: "使ったら、元の所に戻しておきます。", exampleMeaning: "After using it, I'll put it back where it was." },
    { id: "L30v5", word: "準備します", reading: "じゅんびします", pitch: 0, meaning: "to prepare", example: "会議の前に資料を準備しておきます。", exampleMeaning: "I'll prepare the documents before the meeting." },
    { id: "L30v6", word: "予約します", reading: "よやくします", pitch: 0, meaning: "to reserve; to book", example: "旅行の前にホテルを予約しておきます。", exampleMeaning: "I'll book a hotel before the trip." },
    { id: "L30v7", word: "片付けます", reading: "かたづけます", pitch: 4, meaning: "to tidy up; to clear away", example: "お客さんが来る前に部屋を片付けておきます。", exampleMeaning: "I'll tidy the room before the guests come." },
    { id: "L30v8", word: "しまいます", reading: "しまいます", pitch: 3, meaning: "to put away; to store", example: "使った後、はさみを引き出しにしまっておきます。", exampleMeaning: "After use, I'll put the scissors away in the drawer." },
    { id: "L30v9", word: "資料", reading: "しりょう", pitch: 1, meaning: "materials; documents; data", example: "机の上に資料が置いてあります。", exampleMeaning: "The materials are placed on the desk." },
    { id: "L30v10", word: "そのまま", reading: "そのまま", pitch: 0, meaning: "as it is; leave it as is", example: "それはそのまま置いておいてください。", exampleMeaning: "Please leave that as it is." }
  ],
  grammar: [
    {
      id: "L30g1",
      point: "〜てあります (resultant state of an intentional action)",
      explanation: "Form: TRANSITIVE verb て-form ＋ あります. Describes a state that remains because someone did it ON PURPOSE (often for a reason). The thing acted on is marked with が. 窓が開けてあります = the window has been deliberately opened (and stays open). Contrast 窓が開いています (just 'is open', neutral, intransitive).",
      examples: [
        "テーブルに花が飾ってあります。 (Flowers have been arranged on the table.)",
        "予定はカレンダーに書いてあります。 (The schedule is written on the calendar.)",
        "ビールは冷蔵庫に入れてあります。 (The beer has been put in the fridge — ready.)"
      ],
      listening: "〜てあります uses a transitive verb ＋が and implies someone prepared it on purpose; 〜ています with an intransitive verb is just a neutral state.",
      production: "Describe two things in your room that were set up on purpose using 〜てあります."
    },
    {
      id: "L30g2",
      point: "〜ておきます (do in advance / leave something done)",
      explanation: "Form: て-form ＋ おきます. (1) Do something in advance as preparation: 旅行の前に予約しておきます. (2) Leave a state as it is / finish a task and leave it: そのままにしておいてください. Casual contraction: 〜とく (予約しとく).",
      examples: [
        "会議の前に、資料をコピーしておきます。 (I'll copy the materials before the meeting.)",
        "パーティーのために、飲み物を買っておきました。 (I bought drinks in advance for the party.)",
        "使った後は、元の所に戻しておいてください。 (After use, please put it back where it was.)"
      ],
      listening: "〜ておきます signals preparation 'ahead of time' or 'leave it done'. Hear おきます after the て-form.",
      production: "Name two things you'd do in advance before a trip using 〜ておきます."
    }
  ],
  kanji: [
    { id: "L30k1", char: "並", reading: "へい／なら（ぶ）／なら（べる）", meaning: "line up; row", exampleWord: "並べます（ならべます）" },
    { id: "L30k2", char: "準", reading: "じゅん", meaning: "standard; semi-; prepare", exampleWord: "準備（じゅんび）" },
    { id: "L30k3", char: "予", reading: "よ", meaning: "beforehand; in advance", exampleWord: "予約（よやく）" },
    { id: "L30k4", char: "資", reading: "し", meaning: "resources; materials; capital", exampleWord: "資料（しりょう）" }
  ],
  reading: {
    id: "L30r1",
    title: "パーティーのじゅんび",
    passage: "あした、うちでパーティーをします。\nだから、きょうのうちにいろいろ準備しておきました。\n飲み物は冷蔵庫に入れてあります。\nテーブルにはお皿とコップが並べてあります。\nかべには「ようこそ」と書いた紙が貼ってあります。\nあとは料理を作るだけです。",
    targetWords: [
      { word: "準備して", id: "L30v5" },
      { word: "並べて", id: "L30v3" },
      { word: "貼って", id: "L30v1" }
    ],
    questions: [
      { id: "rq30-1", q: "飲み物はどこにありますか。", o: ["テーブルの上", "冷蔵庫の中", "かべ", "引き出し"], c: 1, exp: "飲み物は冷蔵庫に入れてあります。" },
      { id: "rq30-2", q: "テーブルには何が並べてありますか。", o: ["料理", "お皿とコップ", "花", "紙"], c: 1, exp: "お皿とコップが並べてあります。" },
      { id: "rq30-3", q: "あと残っている準備は何ですか。", o: ["飲み物を買う", "料理を作る", "そうじをする", "紙を貼る"], c: 1, exp: "あとは料理を作るだけです。" }
    ]
  },
  listening: [
    { id: "L30l1", audioText: "A：あした出張ですね。新幹線は予約しましたか。B：はい、もう予約しておきました。ホテルも取ってあります。", a: "Bさんはもう何をしましたか。", o: ["まだ何もしていない", "新幹線とホテルを予約した", "切符だけ買った", "上司に聞いた"], c: 1, exp: "予約しておきました。ホテルも取ってあります。" },
    { id: "L30l2", audioText: "A：この資料、片付けましょうか。B：いえ、まだ使うので、そのままにしておいてください。", a: "資料はどうしますか。", o: ["片付ける", "そのままにしておく", "捨てる", "コピーする"], c: 1, exp: "そのままにしておいてください。" }
  ],
  questions: [
    { id: "L30q1", dim: "grammar", type: "recall", difficulty: "hard", s: "かべに地図が貼っ___。(has been put up — on purpose)", a: "てあります", o: ["ています", "てあります", "ておきます", "てしまいます"], c: 1, exp: "Transitive 貼る ＋ てあります = state set up intentionally (が marks 地図).", linksTo: "L30g1" },
    { id: "L30q2", dim: "grammar", type: "recall", difficulty: "hard", s: "Pick the natural 〜てあります sentence.", a: "窓が開けてあります", o: ["窓を開けてあります", "窓が開けてあります", "窓が開いてあります", "窓を開いてあります"], c: 1, exp: "〜てあります takes が ＋ a transitive verb: 窓が開けてあります.", linksTo: "L30g1" },
    { id: "L30q3", dim: "grammar", type: "recall", difficulty: "medium", s: "旅行の前にホテルを予約し___。(do in advance)", a: "ておきます", o: ["てあります", "ておきます", "ています", "てしまいます"], c: 1, exp: "〜ておきます = do something in advance as preparation.", linksTo: "L30g2" },
    { id: "L30q4", dim: "grammar", type: "recall", difficulty: "easy", s: "そのままにし___ください。(leave it as is)", a: "ておいて", o: ["てあって", "ておいて", "てしまって", "ていて"], c: 1, exp: "〜ておく also means 'leave a state as it is'.", linksTo: "L30g2" },
    { id: "L30q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "片付けます means…", a: "to tidy up", o: ["to prepare", "to reserve", "to tidy up", "to line up"], c: 2, exp: "片付けます = tidy up / clear away.", linksTo: "L30v7" },
    { id: "L30q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'beforehand / in advance'?", a: "予", o: ["並", "準", "予", "資"], c: 2, exp: "予 → 予約（よやく）reserve in advance.", linksTo: "L30k3" }
  ]
}

];

if (typeof window !== 'undefined') window.SEED_CONTENT = SEED_CONTENT;
if (typeof module !== 'undefined' && module.exports) module.exports = SEED_CONTENT;
