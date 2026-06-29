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

,

/* ===================== LESSON 31 ===================== */
{
  lessonNum: 31,
  topic: "意向形・〜（よ）うと思っています",
  topicEn: "Volitional Form & Intentions / Plans",
  module: 'L31', moduleLabel: 'L31 — Volitional & Intentions', lesson: 'L31', lessonLabel: 'Volitional & Intentions',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L31v1", word: "予定", reading: "よてい", pitch: 0, meaning: "schedule; plan (fixed)", example: "来月、国へ帰る予定です。", exampleMeaning: "I'm scheduled to go home next month." },
    { id: "L31v2", word: "計画", reading: "けいかく", pitch: 0, meaning: "plan", example: "旅行の計画を立てています。", exampleMeaning: "I'm making a travel plan." },
    { id: "L31v3", word: "決めます", reading: "きめます", pitch: 0, meaning: "to decide", example: "来年留学しようと決めました。", exampleMeaning: "I decided to study abroad next year." },
    { id: "L31v4", word: "申し込みます", reading: "もうしこみます", pitch: 5, meaning: "to apply; to sign up", example: "あした試験に申し込もうと思っています。", exampleMeaning: "I'm thinking of applying for the exam tomorrow." },
    { id: "L31v5", word: "案内します", reading: "あんないします", pitch: 0, meaning: "to guide; to show around", example: "週末、町を案内するつもりです。", exampleMeaning: "I plan to show you around town this weekend." },
    { id: "L31v6", word: "泊まります", reading: "とまります", pitch: 3, meaning: "to stay overnight", example: "京都で2泊しようと思っています。", exampleMeaning: "I'm thinking of staying two nights in Kyoto." },
    { id: "L31v7", word: "増えます", reading: "ふえます", pitch: 3, meaning: "to increase", example: "貯金を増やすつもりです。", exampleMeaning: "I plan to increase my savings." },
    { id: "L31v8", word: "やめます", reading: "やめます", pitch: 3, meaning: "to quit; to stop (a habit)", example: "たばこをやめようと思っています。", exampleMeaning: "I'm thinking of quitting smoking." },
    { id: "L31v9", word: "育てます", reading: "そだてます", pitch: 3, meaning: "to raise; to bring up", example: "庭で野菜を育てるつもりです。", exampleMeaning: "I plan to grow vegetables in the garden." },
    { id: "L31v10", word: "そろそろ", reading: "そろそろ", pitch: 1, meaning: "soon; it's about time", example: "そろそろ帰ろうと思います。", exampleMeaning: "I think I'll head home soon." }
  ],
  grammar: [
    {
      id: "L31g1",
      point: "意向形 — volitional form (let's / I'll …)",
      explanation: "Group I: final -u → -ou (行く→行こう, 話す→話そう). Group II: drop ます, add よう (食べます→食べよう, 見ます→見よう). Irregular: します→しよう, 来ます→来よう. The plain volitional is the casual form of ましょう ('let's / shall I'). On its own it means 'let's…' or 'I'll…'.",
      examples: [
        "ちょっと休もう。 (Let's take a little break.)",
        "もう遅いから、帰ろう。 (It's late, so let's go home.)",
        "今日は早く寝よう。 (I'll go to bed early today.)"
      ],
      listening: "The volitional ends in -ou / -you. On its own it's casual 'let's…'.",
      production: "Suggest three things to a friend using the plain volitional (休もう, 食べよう…)."
    },
    {
      id: "L31g2",
      point: "〜（よ）うと思っています (I'm thinking of doing)",
      explanation: "Volitional ＋ と思っています expresses an intention you've been holding. 〜と思います (without ている) is a decision made on the spot. Compare with 〜つもりです (firm plan/intention) and 〜予定です (a fixed schedule, often set by others or a timetable).",
      examples: [
        "夏休みに国へ帰ろうと思っています。 (I'm thinking of going home over summer.)",
        "毎日30分歩くつもりです。 (I intend to walk 30 minutes every day.)",
        "会議は3時から始まる予定です。 (The meeting is scheduled to start at 3.)"
      ],
      listening: "〜ようと思っています = a held intention; 〜つもり = firm plan; 〜予定 = fixed schedule.",
      production: "Say one intention with 〜ようと思っています and one firm plan with 〜つもりです."
    }
  ],
  kanji: [
    { id: "L31k1", char: "予", reading: "よ", meaning: "beforehand; in advance", exampleWord: "予定（よてい）" },
    { id: "L31k2", char: "定", reading: "てい／さだ（める）", meaning: "fix; decide; settle", exampleWord: "予定（よてい）" },
    { id: "L31k3", char: "計", reading: "けい／はか（る）", meaning: "plan; measure; total", exampleWord: "計画（けいかく）" },
    { id: "L31k4", char: "画", reading: "が／かく", meaning: "picture; stroke; plan", exampleWord: "計画（けいかく）" }
  ],
  reading: {
    id: "L31r1",
    title: "夏休みの計画",
    passage: "もうすぐ夏休みです。\n私は今年、国へ帰ろうと思っています。\n両親に会って、友達と海へ行くつもりです。\n飛行機のチケットはもう予約しました。\nそして、休みのあいだに日本語の勉強も続けようと思っています。",
    targetWords: [
      { word: "帰ろうと思っています", id: "L31v8" },
      { word: "予約しました", id: "L31v1" }
    ],
    questions: [
      { id: "rq31-1", q: "この人は夏休みに何をしようと思っていますか。", o: ["仕事をする", "国へ帰る", "引っ越す", "学校に行く"], c: 1, exp: "国へ帰ろうと思っています。" },
      { id: "rq31-2", q: "友達と何をするつもりですか。", o: ["山に登る", "海へ行く", "買い物する", "勉強する"], c: 1, exp: "友達と海へ行くつもりです。" },
      { id: "rq31-3", q: "休みのあいだも続けようと思っていることは何ですか。", o: ["アルバイト", "日本語の勉強", "スポーツ", "料理"], c: 1, exp: "日本語の勉強も続けようと思っています。" }
    ]
  },
  listening: [
    { id: "L31l1", audioText: "A：週末、何をしますか。B：天気がよかったら、山に登ろうと思っています。", a: "Bさんは週末何をしようと思っていますか。", o: ["うちにいる", "山に登る", "買い物する", "仕事する"], c: 1, exp: "山に登ろうと思っています。" },
    { id: "L31l2", audioText: "A：会議は何時からですか。B：2時から始まる予定です。少し早めに来てください。", a: "会議は何時から始まる予定ですか。", o: ["1時", "2時", "3時", "4時"], c: 1, exp: "2時から始まる予定です。" }
  ],
  questions: [
    { id: "L31q1", dim: "grammar", type: "recall", difficulty: "medium", s: "行きます → volitional form?", a: "行こう", o: ["行こう", "行きよう", "行かよう", "行けよう"], c: 0, exp: "Group I: -ku → -kou. 行く→行こう.", linksTo: "L31g1" },
    { id: "L31q2", dim: "grammar", type: "recall", difficulty: "medium", s: "食べます → volitional form?", a: "食べよう", o: ["食べよう", "食べろう", "食べおう", "食べよ"], c: 0, exp: "Group II: drop ます, add よう. 食べます→食べよう.", linksTo: "L31g1" },
    { id: "L31q3", dim: "grammar", type: "recall", difficulty: "hard", s: "夏休みに国へ帰ろう___。(I'm thinking of…)", a: "と思っています", o: ["と思っています", "ています", "つもりです", "でしょう"], c: 0, exp: "Volitional ＋ と思っています = a held intention.", linksTo: "L31g2" },
    { id: "L31q4", dim: "grammar", type: "recall", difficulty: "hard", s: "会議は3時から始まる___。(scheduled — fixed timetable)", a: "予定です", o: ["つもりです", "予定です", "と思います", "ようです"], c: 1, exp: "A fixed schedule (set by a timetable) uses 〜予定です, not つもり.", linksTo: "L31g2" },
    { id: "L31q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "申し込みます means…", a: "to apply / sign up", o: ["to decide", "to apply / sign up", "to increase", "to quit"], c: 1, exp: "申し込みます = to apply / sign up.", linksTo: "L31v4" },
    { id: "L31q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「よてい」?", a: "予定", o: ["計画", "予定", "予約", "決定"], c: 1, exp: "予定（よてい）= schedule.", linksTo: "L31k1" }
  ]
},

/* ===================== LESSON 32 ===================== */
{
  lessonNum: 32,
  topic: "〜ほうがいい・〜でしょう・〜かもしれません",
  topicEn: "Advice, Probability & Possibility",
  module: 'L32', moduleLabel: 'L32 — Advice & Probability', lesson: 'L32', lessonLabel: 'Advice & Probability',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L32v1", word: "運動します", reading: "うんどうします", pitch: 0, meaning: "to exercise", example: "毎日運動したほうがいいですよ。", exampleMeaning: "You'd better exercise every day." },
    { id: "L32v2", word: "無理", reading: "むり", pitch: 1, meaning: "overdoing; unreasonable (na-adj)", example: "無理をしないほうがいいです。", exampleMeaning: "You'd better not overdo it." },
    { id: "L32v3", word: "倒れます", reading: "たおれます", pitch: 3, meaning: "to collapse; to fall over", example: "働きすぎると、倒れるかもしれません。", exampleMeaning: "If you overwork, you might collapse." },
    { id: "L32v4", word: "気をつけます", reading: "きをつけます", pitch: 0, meaning: "to be careful", example: "かぜに気をつけたほうがいいです。", exampleMeaning: "You'd better watch out for colds." },
    { id: "L32v5", word: "危険", reading: "きけん", pitch: 0, meaning: "danger; dangerous (na-adj)", example: "夜、一人で歩くのは危険でしょう。", exampleMeaning: "Walking alone at night is probably dangerous." },
    { id: "L32v6", word: "たぶん", reading: "たぶん", pitch: 1, meaning: "probably", example: "彼はたぶん来るでしょう。", exampleMeaning: "He'll probably come." },
    { id: "L32v7", word: "効果", reading: "こうか", pitch: 1, meaning: "effect", example: "この薬は効果があるかもしれません。", exampleMeaning: "This medicine might be effective." },
    { id: "L32v8", word: "変わります", reading: "かわります", pitch: 4, meaning: "to change", example: "天気が変わるかもしれません。", exampleMeaning: "The weather might change." },
    { id: "L32v9", word: "止めます", reading: "とめます", pitch: 3, meaning: "to stop (something); to park", example: "ここに車を止めないほうがいいです。", exampleMeaning: "You'd better not park here." },
    { id: "L32v10", word: "向かいます", reading: "むかいます", pitch: 4, meaning: "to head toward", example: "台風がこちらに向かっているでしょう。", exampleMeaning: "The typhoon is probably heading this way." }
  ],
  grammar: [
    {
      id: "L32g1",
      point: "〜ほうがいいです (you'd better / it's better to)",
      explanation: "Affirmative advice: past plain (た-form) ＋ ほうがいいです — 休んだほうがいいです. Negative advice: 〜ないほうがいいです — 無理をしないほうがいいです. It's a fairly strong recommendation, so use it gently with people above you.",
      examples: [
        "熱があるなら、病院へ行ったほうがいいですよ。 (If you have a fever, you'd better see a doctor.)",
        "夜遅くコーヒーを飲まないほうがいいです。 (You'd better not drink coffee late at night.)",
        "早く謝ったほうがいいと思います。 (I think you'd better apologise soon.)"
      ],
      listening: "Affirmative advice uses the past た-form ＋ ほうがいい; negative uses 〜ないほうがいい.",
      production: "Give one 'you'd better do' and one 'you'd better not do' piece of advice."
    },
    {
      id: "L32g2",
      point: "〜でしょう / 〜かもしれません (probably / might)",
      explanation: "〜でしょう = a confident guess ('probably', ~60–80%). 〜かもしれません = a weaker possibility ('might', ~30–50%). Attach to plain forms; na-adj/noun drop だ before でしょう and before かもしれません (元気でしょう / 雨かもしれません). たぶん often pairs with でしょう.",
      examples: [
        "あした晴れるでしょう。 (It'll probably be sunny tomorrow.)",
        "彼はもう帰ったかもしれません。 (He might have already gone home.)",
        "この問題は難しいでしょう。 (This problem is probably difficult.)"
      ],
      listening: "でしょう = a confident guess; かもしれません = a lighter 'maybe'.",
      production: "Make one prediction with でしょう and one possibility with かもしれません."
    }
  ],
  kanji: [
    { id: "L32k1", char: "運", reading: "うん／はこ（ぶ）", meaning: "carry; luck; transport", exampleWord: "運動（うんどう）" },
    { id: "L32k2", char: "動", reading: "どう／うご（く）", meaning: "move", exampleWord: "運動（うんどう）" },
    { id: "L32k3", char: "危", reading: "き／あぶ（ない）", meaning: "danger", exampleWord: "危険（きけん）" },
    { id: "L32k4", char: "険", reading: "けん／けわ（しい）", meaning: "steep; risk", exampleWord: "危険（きけん）" }
  ],
  reading: {
    id: "L32r1",
    title: "むりをしないで",
    passage: "さいきん、田中さんはとても疲れているようです。\n毎日遅くまで残業しているからでしょう。\nこのまま無理を続けたら、倒れるかもしれません。\n私は「少し休んだほうがいいですよ」と言いました。\n田中さんは「そうですね、あした休もうと思います」と答えました。",
    targetWords: [
      { word: "無理", id: "L32v2" },
      { word: "倒れる", id: "L32v3" }
    ],
    questions: [
      { id: "rq32-1", q: "田中さんはなぜ疲れていますか。", o: ["病気だから", "毎日残業しているから", "運動しすぎたから", "旅行したから"], c: 1, exp: "毎日遅くまで残業しているからでしょう。" },
      { id: "rq32-2", q: "このまま無理を続けると、どうなるかもしれませんか。", o: ["元気になる", "倒れる", "やせる", "出世する"], c: 1, exp: "倒れるかもしれません。" },
      { id: "rq32-3", q: "「私」は田中さんに何と言いましたか。", o: ["もっと働け", "少し休んだほうがいい", "病院に行くな", "やめたほうがいい"], c: 1, exp: "少し休んだほうがいいですよ。" }
    ]
  },
  listening: [
    { id: "L32l1", audioText: "A：頭が痛くて、熱もあるんです。B：それは薬を飲んで、早く寝たほうがいいですよ。", a: "Bさんは何をすすめましたか。", o: ["運動する", "薬を飲んで早く寝る", "病院に行かない", "仕事を続ける"], c: 1, exp: "薬を飲んで、早く寝たほうがいいですよ。" },
    { id: "L32l2", audioText: "A：あした、ピクニックに行けるでしょうか。B：天気予報によると、午後から雨が降るかもしれません。", a: "あしたの午後の天気はどうですか。", o: ["晴れる", "雨が降るかもしれない", "雪が降る", "わからない"], c: 1, exp: "午後から雨が降るかもしれません。" }
  ],
  questions: [
    { id: "L32q1", dim: "grammar", type: "recall", difficulty: "easy", s: "熱があるなら、休ん___。(you'd better rest)", a: "だほうがいいです", o: ["だほうがいいです", "でほうがいいです", "るほうがいいです", "ないほうがいいです"], c: 0, exp: "Affirmative advice = past た-form ＋ ほうがいい: 休んだほうがいい.", linksTo: "L32g1" },
    { id: "L32q2", dim: "grammar", type: "recall", difficulty: "medium", s: "ここに車を止め___。(you'd better not)", a: "ないほうがいいです", o: ["たほうがいいです", "ないほうがいいです", "るほうがいいです", "てほうがいいです"], c: 1, exp: "Negative advice = 〜ないほうがいいです.", linksTo: "L32g1" },
    { id: "L32q3", dim: "grammar", type: "recall", difficulty: "medium", s: "あした、晴れる___。(probably)", a: "でしょう", o: ["かもしれません", "でしょう", "そうです", "ようです"], c: 1, exp: "でしょう = a confident guess ('probably').", linksTo: "L32g2" },
    { id: "L32q4", dim: "grammar", type: "recall", difficulty: "hard", s: "Which is the WEAKER guess ('might')?", a: "雨かもしれません", o: ["雨でしょう", "雨かもしれません", "雨です", "雨だ"], c: 1, exp: "かもしれません (~maybe) is weaker than でしょう (~probably).", linksTo: "L32g2" },
    { id: "L32q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "倒れます means…", a: "to collapse", o: ["to change", "to collapse", "to exercise", "to stop"], c: 1, exp: "倒れます = to collapse / fall over.", linksTo: "L32v3" },
    { id: "L32q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'danger'?", a: "危", o: ["運", "動", "危", "険"], c: 2, exp: "危 → 危険（きけん）danger. (険 = risk/steep.)", linksTo: "L32k3" }
  ]
},

/* ===================== LESSON 33 ===================== */
{
  lessonNum: 33,
  topic: "命令形・禁止形・〜と書いてあります",
  topicEn: "Imperatives, Prohibitions & Quoting",
  module: 'L33', moduleLabel: 'L33 — Imperatives & Quoting', lesson: 'L33', lessonLabel: 'Imperatives & Quoting',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L33v1", word: "規則", reading: "きそく", pitch: 1, meaning: "rule; regulation", example: "規則を守ってください。", exampleMeaning: "Please follow the rules." },
    { id: "L33v2", word: "守ります", reading: "まもります", pitch: 3, meaning: "to protect; to obey (a rule)", example: "約束を守れ、と父に言われました。", exampleMeaning: "My father told me to keep my promise." },
    { id: "L33v3", word: "注意します", reading: "ちゅういします", pitch: 1, meaning: "to warn; to pay attention", example: "「危ない」と注意されました。", exampleMeaning: "I was warned, 'It's dangerous.'" },
    { id: "L33v4", word: "伝えます", reading: "つたえます", pitch: 0, meaning: "to convey; to pass on a message", example: "田中さんによろしくと伝えてください。", exampleMeaning: "Please give my regards to Tanaka." },
    { id: "L33v5", word: "禁止", reading: "きんし", pitch: 0, meaning: "prohibition", example: "ここは駐車禁止です。", exampleMeaning: "Parking is prohibited here." },
    { id: "L33v6", word: "立入禁止", reading: "たちいりきんし", pitch: 0, meaning: "no entry; keep out", example: "「立入禁止」と書いてあります。", exampleMeaning: "It says 'No entry.'" },
    { id: "L33v7", word: "非常口", reading: "ひじょうぐち", pitch: 3, meaning: "emergency exit", example: "あそこに非常口があります。", exampleMeaning: "There's an emergency exit over there." },
    { id: "L33v8", word: "矢印", reading: "やじるし", pitch: 2, meaning: "arrow (sign)", example: "矢印のとおりに進んでください。", exampleMeaning: "Please go in the direction of the arrow." },
    { id: "L33v9", word: "押します", reading: "おします", pitch: 3, meaning: "to push; to press", example: "このボタンを押せと書いてあります。", exampleMeaning: "It says to press this button." },
    { id: "L33v10", word: "引きます", reading: "ひきます", pitch: 3, meaning: "to pull", example: "ドアは引いてください。", exampleMeaning: "Please pull the door." }
  ],
  grammar: [
    {
      id: "L33g1",
      point: "命令形 / 禁止形 — imperative & prohibitive",
      explanation: "Imperative (do it!): Group I -e (行く→行け, 待つ→待て), Group II ＋ろ (食べる→食べろ, 見る→見ろ), する→しろ, 来る→来い. Prohibitive (don't!): dictionary form ＋ な (行くな, 食べるな). These are blunt — used on signs, in emergencies, by coaches, or when quoting a strict order. Daily speech softens to 〜てください / 〜ないでください.",
      examples: [
        "「火を使うな」と書いてあります。 (It says 'Don't use fire.')",
        "がんばれ！ もう少しだ。 (Go for it! Almost there.)",
        "ここに止まれ、と書いてあります。 (It says 'Stop here.')"
      ],
      listening: "Imperatives end -e / -ro; prohibitions end dictionary-form ＋ な. They sound blunt — usually signs or strong orders.",
      production: "Write two sign-style commands (one 'do', one 'don't') using the imperative/prohibitive."
    },
    {
      id: "L33g2",
      point: "〜と書いてあります / 〜と言っていました (it says… / they said…)",
      explanation: "Use と (quote particle) ＋ a verb of saying/writing to report content. 〜と書いてあります = 'it is written that…' (signs, notices). 〜と言っていました = relaying what someone said. 〜という意味です = 'it means…'; 〜と読みます = 'it is read as…'.",
      examples: [
        "あの紙に「会議は中止」と書いてあります。 (That paper says 'Meeting cancelled.')",
        "部長は来週出張すると言っていました。 (The manager said he'll travel next week.)",
        "この漢字は「みち」と読みます。 (This kanji is read 'michi'.)"
      ],
      listening: "Listen for と just before 書いてあります / 言っていました / 読みます — it marks the quoted content.",
      production: "Report one thing a sign says and one thing a friend said, using 〜と書いてあります / 〜と言っていました."
    }
  ],
  kanji: [
    { id: "L33k1", char: "規", reading: "き", meaning: "standard; rule", exampleWord: "規則（きそく）" },
    { id: "L33k2", char: "則", reading: "そく", meaning: "rule; law", exampleWord: "規則（きそく）" },
    { id: "L33k3", char: "禁", reading: "きん", meaning: "prohibit; forbid", exampleWord: "禁止（きんし）" },
    { id: "L33k4", char: "守", reading: "しゅ／まも（る）", meaning: "protect; obey", exampleWord: "守ります（まもります）" }
  ],
  reading: {
    id: "L33r1",
    title: "公園のルール",
    passage: "公園の入り口に大きな紙が貼ってあります。\nそこには「自転車を止めるな」と書いてあります。\nそして「ごみは持って帰れ」とも書いてあります。\n友達は「規則は守ったほうがいいよ」と言っていました。\nみんなが気持ちよく使えるように、ルールを守りましょう。",
    targetWords: [
      { word: "書いてあります", id: "L33v9" },
      { word: "規則", id: "L33v1" }
    ],
    questions: [
      { id: "rq33-1", q: "入り口の紙には何と書いてありますか。", o: ["自転車を止めろ", "自転車を止めるな", "ここで遊べ", "走るな"], c: 1, exp: "「自転車を止めるな」と書いてあります。" },
      { id: "rq33-2", q: "ごみについて、何と書いてありますか。", o: ["捨てろ", "持って帰れ", "燃やせ", "集めろ"], c: 1, exp: "「ごみは持って帰れ」とも書いてあります。" },
      { id: "rq33-3", q: "友達は何と言っていましたか。", o: ["規則は守ったほうがいい", "公園は嫌いだ", "ごみを捨てよう", "自転車で行こう"], c: 0, exp: "規則は守ったほうがいいよ、と言っていました。" }
    ]
  },
  listening: [
    { id: "L33l1", audioText: "A：あの看板、何と書いてありますか。B：「ここで泳ぐな、危険」と書いてありますよ。", a: "看板には何と書いてありますか。", o: ["ここで泳げ", "ここで泳ぐな", "魚を取るな", "入るな"], c: 1, exp: "「ここで泳ぐな、危険」と書いてあります。" },
    { id: "L33l2", audioText: "A：田中さんは来ますか。B：さっき、少し遅れると言っていましたよ。", a: "田中さんは何と言っていましたか。", o: ["来ない", "少し遅れる", "もう着いた", "休む"], c: 1, exp: "少し遅れると言っていました。" }
  ],
  questions: [
    { id: "L33q1", dim: "grammar", type: "recall", difficulty: "hard", s: "待ちます → imperative (do it!)?", a: "待て", o: ["待て", "待ろ", "待れ", "待い"], c: 0, exp: "Group I imperative: -tsu → -te. 待つ→待て.", linksTo: "L33g1" },
    { id: "L33q2", dim: "grammar", type: "recall", difficulty: "hard", s: "食べます → prohibitive (don't!)?", a: "食べるな", o: ["食べな", "食べるな", "食べろな", "食べないな"], c: 1, exp: "Prohibitive = dictionary form ＋ な: 食べる→食べるな.", linksTo: "L33g1" },
    { id: "L33q3", dim: "grammar", type: "recall", difficulty: "medium", s: "看板に「危険」___あります。(it says…)", a: "と書いて", o: ["と書いて", "を書いて", "に書いて", "が書いて"], c: 0, exp: "と marks the quoted content before 書いてあります.", linksTo: "L33g2" },
    { id: "L33q4", dim: "grammar", type: "recall", difficulty: "medium", s: "部長は出張する___。(the manager said…)", a: "と言っていました", o: ["と言っていました", "と書いてあります", "と読みます", "という意味です"], c: 0, exp: "〜と言っていました relays what someone said.", linksTo: "L33g2" },
    { id: "L33q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "非常口 means…", a: "emergency exit", o: ["entrance", "emergency exit", "no entry", "arrow"], c: 1, exp: "非常口（ひじょうぐち）= emergency exit.", linksTo: "L33v7" },
    { id: "L33q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'protect / obey'?", a: "守", o: ["規", "則", "禁", "守"], c: 3, exp: "守 → 守ります (protect/obey a rule).", linksTo: "L33k4" }
  ]
},

/* ===================== LESSON 34 ===================== */
{
  lessonNum: 34,
  topic: "〜とおりに・〜たあとで・〜ないで",
  topicEn: "As Instructed · After · Without Doing",
  module: 'L34', moduleLabel: 'L34 — As / After / Without', lesson: 'L34', lessonLabel: 'As / After / Without',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L34v1", word: "説明書", reading: "せつめいしょ", pitch: 0, meaning: "instruction manual", example: "説明書のとおりに組み立てました。", exampleMeaning: "I assembled it as the manual said." },
    { id: "L34v2", word: "順番", reading: "じゅんばん", pitch: 0, meaning: "order; turn", example: "順番のとおりに並んでください。", exampleMeaning: "Please line up in order." },
    { id: "L34v3", word: "混ぜます", reading: "まぜます", pitch: 3, meaning: "to mix", example: "卵と砂糖を混ぜます。", exampleMeaning: "Mix the egg and sugar." },
    { id: "L34v4", word: "組み立てます", reading: "くみたてます", pitch: 5, meaning: "to assemble; to put together", example: "本棚を自分で組み立てました。", exampleMeaning: "I assembled the bookshelf myself." },
    { id: "L34v5", word: "確認します", reading: "かくにんします", pitch: 0, meaning: "to confirm; to check", example: "出かける前に、必ず確認します。", exampleMeaning: "I always check before going out." },
    { id: "L34v6", word: "印", reading: "しるし", pitch: 0, meaning: "mark; sign", example: "地図に印をつけておきました。", exampleMeaning: "I put a mark on the map." },
    { id: "L34v7", word: "線", reading: "せん", pitch: 1, meaning: "line", example: "赤い線のとおりに切ってください。", exampleMeaning: "Please cut along the red line." },
    { id: "L34v8", word: "まず", reading: "まず", pitch: 1, meaning: "first (of all)", example: "まず手を洗ってください。", exampleMeaning: "First, please wash your hands." },
    { id: "L34v9", word: "次に", reading: "つぎに", pitch: 0, meaning: "next", example: "次に、お湯を入れます。", exampleMeaning: "Next, add hot water." },
    { id: "L34v10", word: "押さえます", reading: "おさえます", pitch: 4, meaning: "to hold down; to press", example: "ボタンを押さえたまま、待ちます。", exampleMeaning: "Hold the button down and wait." }
  ],
  grammar: [
    {
      id: "L34g1",
      point: "〜とおりに (in the same way as / as)",
      explanation: "Verb (dictionary or past た-form) ＋ とおりに, or noun ＋ のとおりに. Means 'do exactly as…'. Past た-form = 'as I just (saw/heard/did)': 見たとおりに. Dictionary form = 'as (someone) says': 私が言うとおりに. Noun: 説明書のとおりに.",
      examples: [
        "私が言うとおりに、書いてください。 (Write exactly as I say.)",
        "説明書のとおりに、組み立てました。 (I assembled it as the manual said.)",
        "習ったとおりに、作ってみます。 (I'll make it the way I learned.)"
      ],
      listening: "とおりに follows a verb or のとおりに follows a noun — 'exactly as…'.",
      production: "Describe doing something 'as the recipe / as the manual' says using 〜とおりに."
    },
    {
      id: "L34g2",
      point: "〜たあとで / 〜ないで (after doing / without doing)",
      explanation: "〜たあとで = 'after doing X' (X finishes, then Y): ごはんを食べたあとで、薬を飲みます。 Noun ＋ のあとで: 仕事のあとで. 〜ないで = do Y without doing X, or 'instead of': 朝ごはんを食べないで、出かけました。(Don't confuse with 〜なくて, which is a cause.)",
      examples: [
        "宿題をしたあとで、ゲームをします。 (After doing homework, I'll play games.)",
        "傘を持たないで出かけて、ぬれました。 (I went out without an umbrella and got wet.)",
        "辞書を使わないで、読んでみてください。 (Try reading without using a dictionary.)"
      ],
      listening: "〜たあとで = 'after'; 〜ないで = 'without doing' the action that follows.",
      production: "Say one 'after X, I do Y' and one 'I did Y without doing X' sentence."
    }
  ],
  kanji: [
    { id: "L34k1", char: "説", reading: "せつ／と（く）", meaning: "explain", exampleWord: "説明書（せつめいしょ）" },
    { id: "L34k2", char: "順", reading: "じゅん", meaning: "order; sequence", exampleWord: "順番（じゅんばん）" },
    { id: "L34k3", char: "番", reading: "ばん", meaning: "number; turn", exampleWord: "順番（じゅんばん）" },
    { id: "L34k4", char: "確", reading: "かく／たし（か）", meaning: "certain; confirm", exampleWord: "確認（かくにん）" }
  ],
  reading: {
    id: "L34r1",
    title: "カレーの作り方",
    passage: "今日は説明書のとおりにカレーを作ってみました。\nまず、野菜と肉を切ります。\n次に、なべに油を入れて、肉を炒めます。\n野菜を入れたあとで、水を入れて20分煮ます。\n最後にルーを入れて、よく混ぜたら、できあがりです。",
    targetWords: [
      { word: "説明書のとおりに", id: "L34v1" },
      { word: "混ぜたら", id: "L34v3" }
    ],
    questions: [
      { id: "rq34-1", q: "最初に何をしますか。", o: ["水を入れる", "野菜と肉を切る", "ルーを入れる", "肉を炒める"], c: 1, exp: "まず、野菜と肉を切ります。" },
      { id: "rq34-2", q: "野菜を入れたあとで、何をしますか。", o: ["切る", "水を入れて煮る", "食べる", "混ぜる"], c: 1, exp: "野菜を入れたあとで、水を入れて20分煮ます。" },
      { id: "rq34-3", q: "最後にすることは何ですか。", o: ["肉を切る", "ルーを入れて混ぜる", "皿を洗う", "味見する"], c: 1, exp: "最後にルーを入れて、よく混ぜます。" }
    ]
  },
  listening: [
    { id: "L34l1", audioText: "A：この機械、どう使いますか。B：説明書のとおりに、まず赤いボタンを押してください。", a: "最初に何をしますか。", o: ["青いボタンを押す", "赤いボタンを押す", "電源を切る", "説明書を読む"], c: 1, exp: "説明書のとおりに、まず赤いボタンを押してください。" },
    { id: "L34l2", audioText: "A：朝ごはんは食べましたか。B：いいえ、時間がなくて、何も食べないで来ました。", a: "Bさんは朝ごはんをどうしましたか。", o: ["パンを食べた", "何も食べないで来た", "家で食べた", "あとで食べる"], c: 1, exp: "何も食べないで来ました。" }
  ],
  questions: [
    { id: "L34q1", dim: "grammar", type: "recall", difficulty: "medium", s: "私が言う___、書いてください。(exactly as I say)", a: "とおりに", o: ["とおりに", "あとで", "ないで", "ながら"], c: 0, exp: "Verb ＋ とおりに = 'exactly as…'.", linksTo: "L34g1" },
    { id: "L34q2", dim: "grammar", type: "recall", difficulty: "easy", s: "説明書___組み立てました。(as the manual said)", a: "のとおりに", o: ["のとおりに", "とおりに", "のあとで", "ないで"], c: 0, exp: "Noun ＋ のとおりに.", linksTo: "L34g1" },
    { id: "L34q3", dim: "grammar", type: "recall", difficulty: "medium", s: "宿題をし___、ゲームをします。(after doing)", a: "たあとで", o: ["たあとで", "ないで", "ながら", "るまえに"], c: 0, exp: "〜たあとで = 'after doing'.", linksTo: "L34g2" },
    { id: "L34q4", dim: "grammar", type: "recall", difficulty: "hard", s: "傘を持た___出かけて、ぬれました。(without taking)", a: "ないで", o: ["なくて", "ないで", "たあとで", "ながら"], c: 1, exp: "〜ないで = do/go 'without doing' X. (なくて would be a cause.)", linksTo: "L34g2" },
    { id: "L34q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "組み立てます means…", a: "to assemble", o: ["to mix", "to assemble", "to confirm", "to push"], c: 1, exp: "組み立てます = to assemble / put together.", linksTo: "L34v4" },
    { id: "L34q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'order / sequence'?", a: "順", o: ["説", "順", "番", "確"], c: 1, exp: "順 → 順番（じゅんばん）order/turn.", linksTo: "L34k2" }
  ]
},

/* ===================== LESSON 35 ===================== */
{
  lessonNum: 35,
  topic: "〜ば（条件形）・〜なら",
  topicEn: "Provisional Conditional ば & なら",
  module: 'L35', moduleLabel: 'L35 — Conditional ば & なら', lesson: 'L35', lessonLabel: 'Conditional ば & なら',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L35v1", word: "季節", reading: "きせつ", pitch: 1, meaning: "season", example: "春になれば、暖かくなります。", exampleMeaning: "When spring comes, it gets warm." },
    { id: "L35v2", word: "比べます", reading: "くらべます", pitch: 3, meaning: "to compare", example: "比べれば、違いがわかります。", exampleMeaning: "If you compare them, you'll see the difference." },
    { id: "L35v3", word: "役に立ちます", reading: "やくにたちます", pitch: 0, meaning: "to be useful", example: "この辞書は役に立ちます。", exampleMeaning: "This dictionary is useful." },
    { id: "L35v4", word: "利用します", reading: "りようします", pitch: 0, meaning: "to use; to make use of", example: "ネットを利用すれば、すぐ調べられます。", exampleMeaning: "If you use the internet, you can look it up right away." },
    { id: "L35v5", word: "自由", reading: "じゆう", pitch: 2, meaning: "freedom; free (na-adj)", example: "自由に使ってもいいです。", exampleMeaning: "You may use it freely." },
    { id: "L35v6", word: "確かめます", reading: "たしかめます", pitch: 4, meaning: "to make sure; to verify", example: "間違いがないか確かめます。", exampleMeaning: "I'll make sure there are no mistakes." },
    { id: "L35v7", word: "回します", reading: "まわします", pitch: 4, meaning: "to turn; to rotate", example: "右に回せば、開きます。", exampleMeaning: "If you turn it right, it opens." },
    { id: "L35v8", word: "進みます", reading: "すすみます", pitch: 4, meaning: "to advance; to proceed", example: "まっすぐ進めば、駅に着きます。", exampleMeaning: "If you go straight, you'll reach the station." },
    { id: "L35v9", word: "押せば", reading: "おせば", pitch: 0, meaning: "if you push (ば-form of 押す)", example: "ボタンを押せば、動きます。", exampleMeaning: "If you press the button, it works." },
    { id: "L35v10", word: "値段", reading: "ねだん", pitch: 0, meaning: "price", example: "値段が安ければ、買います。", exampleMeaning: "If the price is cheap, I'll buy it." }
  ],
  grammar: [
    {
      id: "L35g1",
      point: "〜ば — provisional conditional (if)",
      explanation: "Form: Group I final -u → -eba (行く→行けば, 押す→押せば). Group II: drop る, add れば (食べる→食べれば). i-adj: い→ければ (安い→安ければ; いい→よければ). na-adj/noun ＋ なら (元気なら). Used for general 'if X then Y', natural results, and conditions. If the main clause is a request/command, the ば-clause is usually a state (adjective/potential), not a controllable action.",
      examples: [
        "ボタンを押せば、ドアが開きます。 (If you press the button, the door opens.)",
        "安ければ、買います。 (If it's cheap, I'll buy it.)",
        "わからなければ、聞いてください。 (If you don't understand, please ask.)"
      ],
      listening: "Verbs in -eba / -reba, adjectives in -kereba signal the 'if' condition.",
      production: "Make two 'if X, then Y' sentences with 〜ば (one verb, one adjective)."
    },
    {
      id: "L35g2",
      point: "〜なら (if it's the case that / as for)",
      explanation: "Plain form ＋ なら (noun/na-adj drop だ). Picks up a topic the other person raised and gives advice or info about THAT case: 京都へ行くなら、新幹線が便利です ('if you're going to Kyoto, the bullet train is handy'). It often responds to what was just said.",
      examples: [
        "A: 辞書を買いたいんです。 B: 辞書なら、あの店が安いですよ。 (As for dictionaries, that shop is cheap.)",
        "日本語を勉強するなら、毎日少しずつがいいです。 (If you're going to study Japanese, a little each day is best.)",
        "暇なら、手伝ってください。 (If you're free, please help.)"
      ],
      listening: "なら picks up the topic just mentioned and comments on 'that case'.",
      production: "Respond to 'I want to travel in Japan' with advice using 〜なら."
    }
  ],
  kanji: [
    { id: "L35k1", char: "季", reading: "き", meaning: "season", exampleWord: "季節（きせつ）" },
    { id: "L35k2", char: "節", reading: "せつ／ふし", meaning: "season; node; joint", exampleWord: "季節（きせつ）" },
    { id: "L35k3", char: "利", reading: "り／き（く）", meaning: "benefit; advantage", exampleWord: "利用（りよう）" },
    { id: "L35k4", char: "由", reading: "ゆう／よし", meaning: "reason; cause", exampleWord: "自由（じゆう）" }
  ],
  reading: {
    id: "L35r1",
    title: "図書館の利用",
    passage: "大学の図書館はとても便利です。\nカードがあれば、だれでも本が借りられます。\n借りたい本があれば、機械で予約することもできます。\n本の場所がわからなければ、係の人に聞いてください。\nレポートを書くなら、ここの資料を利用するといいですよ。",
    targetWords: [
      { word: "あれば", id: "L35v9" },
      { word: "利用する", id: "L35v4" }
    ],
    questions: [
      { id: "rq35-1", q: "本を借りるには何が必要ですか。", o: ["お金", "カード", "パスポート", "先生の許可"], c: 1, exp: "カードがあれば、だれでも本が借りられます。" },
      { id: "rq35-2", q: "本の場所がわからないとき、どうしますか。", o: ["あきらめる", "係の人に聞く", "帰る", "機械で予約する"], c: 1, exp: "わからなければ、係の人に聞いてください。" },
      { id: "rq35-3", q: "レポートを書くなら、何を利用するといいですか。", o: ["インターネットだけ", "ここの資料", "友達のノート", "教科書だけ"], c: 1, exp: "レポートを書くなら、ここの資料を利用するといい。" }
    ]
  },
  listening: [
    { id: "L35l1", audioText: "A：このコピー機、どうやって使いますか。B：このボタンを押せば、すぐ使えますよ。", a: "コピー機はどうすれば使えますか。", o: ["カードを入れる", "ボタンを押す", "係の人を呼ぶ", "お金を入れる"], c: 1, exp: "このボタンを押せば、すぐ使えます。" },
    { id: "L35l2", audioText: "A：日本のおみやげを買いたいんですが。B：おみやげなら、駅の近くの店がいいですよ。", a: "Bさんは何をすすめましたか。", o: ["デパート", "駅の近くの店", "空港", "ネット"], c: 1, exp: "おみやげなら、駅の近くの店がいいですよ。" }
  ],
  questions: [
    { id: "L35q1", dim: "grammar", type: "recall", difficulty: "medium", s: "押します → ば-conditional?", a: "押せば", o: ["押せば", "押すば", "押しば", "押されば"], c: 0, exp: "Group I: -su → -seba. 押す→押せば.", linksTo: "L35g1" },
    { id: "L35q2", dim: "grammar", type: "recall", difficulty: "medium", s: "安い → ば-conditional?", a: "安ければ", o: ["安いば", "安ければ", "安かれば", "安くば"], c: 1, exp: "i-adj: い→ければ. 安い→安ければ.", linksTo: "L35g1" },
    { id: "L35q3", dim: "grammar", type: "recall", difficulty: "hard", s: "いい → ば-conditional?", a: "よければ", o: ["いければ", "いいば", "よければ", "よけば"], c: 2, exp: "いい is irregular: よい→よければ.", linksTo: "L35g1" },
    { id: "L35q4", dim: "grammar", type: "recall", difficulty: "hard", s: "辞書を買いたいんです。― 辞書___、あの店が安いですよ。", a: "なら", o: ["ば", "なら", "たら", "と"], c: 1, exp: "〜なら picks up the topic just raised ('as for dictionaries…').", linksTo: "L35g2" },
    { id: "L35q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "役に立ちます means…", a: "to be useful", o: ["to compare", "to be useful", "to turn", "to advance"], c: 1, exp: "役に立ちます = to be useful.", linksTo: "L35v3" },
    { id: "L35q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「きせつ」?", a: "季節", o: ["季節", "自由", "利用", "値段"], c: 0, exp: "季節（きせつ）= season.", linksTo: "L35k1" }
  ]
},

/* ===================== LESSON 36 ===================== */
{
  lessonNum: 36,
  topic: "〜ように・〜ようになります・〜ようにします",
  topicEn: "Purpose, Change of Ability & Effort",
  module: 'L36', moduleLabel: 'L36 — Purpose & Change (ように)', lesson: 'L36', lessonLabel: 'Purpose & Change (ように)',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L36v1", word: "慣れます", reading: "なれます", pitch: 3, meaning: "to get used to", example: "日本の生活に慣れました。", exampleMeaning: "I've gotten used to life in Japan." },
    { id: "L36v2", word: "努力します", reading: "どりょくします", pitch: 0, meaning: "to make an effort", example: "毎日努力しています。", exampleMeaning: "I'm making an effort every day." },
    { id: "L36v3", word: "できるだけ", reading: "できるだけ", pitch: 0, meaning: "as much as possible", example: "できるだけ日本語で話すようにしています。", exampleMeaning: "I try to speak in Japanese as much as possible." },
    { id: "L36v4", word: "治ります", reading: "なおります", pitch: 3, meaning: "to recover; to get better (illness)", example: "薬を飲んだら、治りました。", exampleMeaning: "After taking medicine, I got better." },
    { id: "L36v5", word: "通じます", reading: "つうじます", pitch: 3, meaning: "to be understood; to get through", example: "やっと言葉が通じるようになりました。", exampleMeaning: "Finally my words started getting through." },
    { id: "L36v6", word: "覚えます", reading: "おぼえます", pitch: 3, meaning: "to memorize; to remember", example: "漢字を覚えるように、毎日書いています。", exampleMeaning: "I write daily so I'll remember kanji." },
    { id: "L36v7", word: "自信", reading: "じしん", pitch: 0, meaning: "confidence", example: "話せるようになって、自信がつきました。", exampleMeaning: "Becoming able to speak gave me confidence." },
    { id: "L36v8", word: "減らします", reading: "へらします", pitch: 4, meaning: "to reduce; to cut down", example: "塩をできるだけ減らすようにしています。", exampleMeaning: "I try to cut down on salt as much as possible." },
    { id: "L36v9", word: "届きます", reading: "とどきます", pitch: 3, meaning: "to reach; to arrive", example: "上の棚に手が届くようになりました。", exampleMeaning: "I became able to reach the top shelf." },
    { id: "L36v10", word: "進歩", reading: "しんぽ", pitch: 1, meaning: "progress; improvement", example: "毎日練習すれば、進歩します。", exampleMeaning: "If you practise daily, you'll make progress." }
  ],
  grammar: [
    {
      id: "L36g1",
      point: "〜ように (so that / in order to)",
      explanation: "Dictionary form or 〜ない ＋ ように states a goal you can't fully control (potential verbs, change verbs, negatives). 漢字が読めるように、練習します ('so that I can read kanji, I practise'). 忘れないように、メモします ('so I won't forget, I take notes'). For controllable goals you'd use 〜ために instead.",
      examples: [
        "後ろの人に聞こえるように、大きい声で話します。 (I speak loudly so the people in back can hear.)",
        "風邪をひかないように、気をつけてください。 (Take care so you don't catch a cold.)",
        "よく見えるように、めがねをかけます。 (I wear glasses so I can see well.)"
      ],
      listening: "〜ように often pairs with a potential/negative verb — the goal is a state you aim for, not a direct action.",
      production: "State two goals using 〜ように (one 'so I can…', one 'so I won't…')."
    },
    {
      id: "L36g2",
      point: "〜ようになります / 〜ようにします (came to / make an effort to)",
      explanation: "〜ようになります = a change over time, usually 'became able to': 泳げるようになりました. With negatives: 〜なくなりました (お酒を飲まなくなりました). 〜ようにします = make a conscious effort: 毎日歩くようにします; 〜ようにしています = an ongoing habit you keep up.",
      examples: [
        "練習して、自転車に乗れるようになりました。 (After practising, I became able to ride a bike.)",
        "健康のために、階段を使うようにしています。 (For my health, I make a point of using the stairs.)",
        "夜は甘いものを食べないようにしています。 (I try not to eat sweets at night.)"
      ],
      listening: "〜ようになりました = a change/achievement; 〜ようにしています = an ongoing effort/habit.",
      production: "Say one thing you 'became able to' and one habit you 'try to' keep, using these patterns."
    }
  ],
  kanji: [
    { id: "L36k1", char: "慣", reading: "かん／な（れる）", meaning: "get used to; custom", exampleWord: "慣れます（なれます）" },
    { id: "L36k2", char: "努", reading: "ど／つと（める）", meaning: "endeavour; effort", exampleWord: "努力（どりょく）" },
    { id: "L36k3", char: "力", reading: "りょく／ちから", meaning: "power; strength", exampleWord: "努力（どりょく）" },
    { id: "L36k4", char: "信", reading: "しん", meaning: "trust; believe", exampleWord: "自信（じしん）" }
  ],
  reading: {
    id: "L36r1",
    title: "日本語が話せるように",
    passage: "日本に来たばかりのころは、簡単な言葉も通じませんでした。\nそこで、できるだけ日本人と話すようにしました。\n知らない言葉は、忘れないようにノートに書きました。\n半年たって、やっと自分の考えが言えるようになりました。\n今は少し自信がついて、もっと上手になりたいと思っています。",
    targetWords: [
      { word: "話すようにしました", id: "L36v3" },
      { word: "言えるようになりました", id: "L36v5" }
    ],
    questions: [
      { id: "rq36-1", q: "来たばかりのころ、どうでしたか。", o: ["よく話せた", "簡単な言葉も通じなかった", "日本語が好きだった", "友達が多かった"], c: 1, exp: "簡単な言葉も通じませんでした。" },
      { id: "rq36-2", q: "知らない言葉はどうしましたか。", o: ["あきらめた", "ノートに書いた", "先生に聞いた", "辞書を買った"], c: 1, exp: "忘れないようにノートに書きました。" },
      { id: "rq36-3", q: "半年後、どうなりましたか。", o: ["国へ帰った", "自分の考えが言えるようになった", "勉強をやめた", "通じなくなった"], c: 1, exp: "自分の考えが言えるようになりました。" }
    ]
  },
  listening: [
    { id: "L36l1", audioText: "A：ピアノが上手ですね。B：ありがとうございます。毎日練習して、やっと弾けるようになりました。", a: "Bさんはどうなりましたか。", o: ["弾けなくなった", "弾けるようになった", "やめた", "先生になった"], c: 1, exp: "やっと弾けるようになりました。" },
    { id: "L36l2", audioText: "A：健康のために、何かしていますか。B：ええ、できるだけ歩くようにしています。", a: "Bさんは何をするようにしていますか。", o: ["走る", "歩く", "泳ぐ", "休む"], c: 1, exp: "できるだけ歩くようにしています。" }
  ],
  questions: [
    { id: "L36q1", dim: "grammar", type: "recall", difficulty: "medium", s: "漢字が読める___、毎日練習します。(so that I can…)", a: "ように", o: ["ように", "ために", "ことに", "そうに"], c: 0, exp: "Potential/uncontrollable goal → 〜ように.", linksTo: "L36g1" },
    { id: "L36q2", dim: "grammar", type: "recall", difficulty: "medium", s: "風邪をひか___、気をつけてください。(so you won't…)", a: "ないように", o: ["ないように", "るように", "ないために", "なくて"], c: 0, exp: "Negative goal: 〜ないように.", linksTo: "L36g1" },
    { id: "L36q3", dim: "grammar", type: "recall", difficulty: "hard", s: "練習して、泳げる___。(became able to)", a: "ようになりました", o: ["ようにします", "ようになりました", "ようです", "ことにしました"], c: 1, exp: "〜ようになりました = a change ('became able to').", linksTo: "L36g2" },
    { id: "L36q4", dim: "grammar", type: "recall", difficulty: "hard", s: "毎日、階段を使う___。(I make an effort to / habit)", a: "ようにしています", o: ["ようになります", "ようにしています", "ところです", "つもりです"], c: 1, exp: "〜ようにしています = an ongoing effort/habit.", linksTo: "L36g2" },
    { id: "L36q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "慣れます means…", a: "to get used to", o: ["to recover", "to get used to", "to reduce", "to reach"], c: 1, exp: "慣れます = to get used to.", linksTo: "L36v1" },
    { id: "L36q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「どりょく」?", a: "努力", o: ["自信", "努力", "進歩", "通信"], c: 1, exp: "努力（どりょく）= effort.", linksTo: "L36k2" }
  ]
},

/* ===================== LESSON 37 ===================== */
{
  lessonNum: 37,
  topic: "受身（〜られます）",
  topicEn: "Passive Verbs",
  module: 'L37', moduleLabel: 'L37 — Passive Verbs', lesson: 'L37', lessonLabel: 'Passive Verbs',
  difficulty: "hard",
  level: "N4",
  vocabulary: [
    { id: "L37v1", word: "招待します", reading: "しょうたいします", pitch: 0, meaning: "to invite", example: "結婚式に招待されました。", exampleMeaning: "I was invited to the wedding." },
    { id: "L37v2", word: "ほめます", reading: "ほめます", pitch: 2, meaning: "to praise", example: "先生にほめられました。", exampleMeaning: "I was praised by the teacher." },
    { id: "L37v3", word: "叱ります", reading: "しかります", pitch: 3, meaning: "to scold", example: "母に叱られました。", exampleMeaning: "I was scolded by my mother." },
    { id: "L37v4", word: "盗みます", reading: "ぬすみます", pitch: 3, meaning: "to steal", example: "電車で財布を盗まれました。", exampleMeaning: "My wallet was stolen on the train." },
    { id: "L37v5", word: "踏みます", reading: "ふみます", pitch: 3, meaning: "to step on", example: "満員電車で足を踏まれました。", exampleMeaning: "My foot got stepped on in the packed train." },
    { id: "L37v6", word: "建てます", reading: "たてます", pitch: 3, meaning: "to build", example: "この寺は1000年前に建てられました。", exampleMeaning: "This temple was built 1000 years ago." },
    { id: "L37v7", word: "発明します", reading: "はつめいします", pitch: 0, meaning: "to invent", example: "電話はベルに発明されました。", exampleMeaning: "The telephone was invented by Bell." },
    { id: "L37v8", word: "発見します", reading: "はっけんします", pitch: 0, meaning: "to discover", example: "新しい星が発見されました。", exampleMeaning: "A new star was discovered." },
    { id: "L37v9", word: "輸出します", reading: "ゆしゅつします", pitch: 0, meaning: "to export", example: "車が世界中に輸出されています。", exampleMeaning: "Cars are exported all over the world." },
    { id: "L37v10", word: "翻訳します", reading: "ほんやくします", pitch: 0, meaning: "to translate", example: "この本は英語に翻訳されました。", exampleMeaning: "This book was translated into English." }
  ],
  grammar: [
    {
      id: "L37g1",
      point: "受身形 — passive verb forms",
      explanation: "Group I: final -u → -areru (書く→書かれる, 取る→取られる). Group II: drop ます, add られます (食べます→食べられます, 見ます→見られます). Irregular: します→されます, 来ます→来られます. In a passive sentence the doer is marked with に: 私は先生にほめられました ('I was praised by the teacher').",
      examples: [
        "弟にケーキを食べられました。 (My cake was eaten by my little brother.)",
        "会議で意見を聞かれました。 (I was asked my opinion at the meeting.)",
        "みんなに笑われました。 (I was laughed at by everyone.)"
      ],
      listening: "Passive verbs end -areru / -rareru; the doer is marked with に.",
      production: "Say two things that were done to you, using the passive with に."
    },
    {
      id: "L37g2",
      point: "Passive of suffering & 'made/discovered' passive",
      explanation: "Indirect (suffering) passive: something happens that troubles you — 雨に降られました ('I got rained on'), 赤ちゃんに泣かれました. For possessions/body parts, the owner is the subject and the thing takes を: (私は)足を踏まれました. For creations/facts, the maker is usually dropped or marked by によって: この絵はピカソによって描かれました.",
      examples: [
        "電車で隣の人に足を踏まれました。 (My foot got stepped on by the person next to me.)",
        "帰る途中で雨に降られて、ぬれました。 (I got rained on on the way home and got wet.)",
        "オリンピックは4年に1回開かれます。 (The Olympics are held once every 4 years.)"
      ],
      listening: "Suffering passive often involves an unwanted event (雨に降られる); で / によって can mark when/by whom for facts.",
      production: "Describe one annoying thing that happened to you using the suffering passive."
    }
  ],
  kanji: [
    { id: "L37k1", char: "招", reading: "しょう／まね（く）", meaning: "invite; beckon", exampleWord: "招待（しょうたい）" },
    { id: "L37k2", char: "待", reading: "たい／ま（つ）", meaning: "wait; treat", exampleWord: "招待（しょうたい）" },
    { id: "L37k3", char: "建", reading: "けん／た（てる）", meaning: "build", exampleWord: "建てます（たてます）" },
    { id: "L37k4", char: "発", reading: "はつ／はっ", meaning: "emit; departure; reveal", exampleWord: "発見（はっけん）" }
  ],
  reading: {
    id: "L37r1",
    title: "古いお寺",
    passage: "京都には古いお寺がたくさんあります。\nある寺は1200年前に建てられたそうです。\n毎年、世界中からたくさんの人が訪れます。\n美しい庭は、外国の本にもよく紹介されています。\n先週、私も友達に招待されて、その寺を見に行きました。",
    targetWords: [
      { word: "建てられた", id: "L37v6" },
      { word: "招待されて", id: "L37v1" }
    ],
    questions: [
      { id: "rq37-1", q: "ある寺はいつ建てられましたか。", o: ["200年前", "800年前", "1200年前", "去年"], c: 2, exp: "1200年前に建てられたそうです。" },
      { id: "rq37-2", q: "美しい庭はどこに紹介されていますか。", o: ["テレビ", "外国の本", "新聞", "雑誌だけ"], c: 1, exp: "外国の本にもよく紹介されています。" },
      { id: "rq37-3", q: "「私」はどうしてその寺へ行きましたか。", o: ["仕事で", "友達に招待されて", "一人で", "学校の授業で"], c: 1, exp: "友達に招待されて、見に行きました。" }
    ]
  },
  listening: [
    { id: "L37l1", audioText: "A：元気がないですね。どうしたんですか。B：今朝、電車で足を踏まれて、痛いんです。", a: "Bさんに何がありましたか。", o: ["転んだ", "足を踏まれた", "財布をなくした", "風邪をひいた"], c: 1, exp: "電車で足を踏まれて、痛いんです。" },
    { id: "L37l2", audioText: "A：その時計、すてきですね。B：ありがとう。父に誕生日にもらったんです。みんなにほめられます。", a: "Bさんは時計についてどう言っていますか。", o: ["高かった", "みんなにほめられる", "壊れている", "自分で買った"], c: 1, exp: "みんなにほめられます。" }
  ],
  questions: [
    { id: "L37q1", dim: "grammar", type: "recall", difficulty: "medium", s: "書きます → passive form?", a: "書かれます", o: ["書かれます", "書けます", "書かせます", "書かります"], c: 0, exp: "Group I passive: -ku → -kareru. 書く→書かれる.", linksTo: "L37g1" },
    { id: "L37q2", dim: "grammar", type: "recall", difficulty: "medium", s: "食べます → passive form?", a: "食べられます", o: ["食べさせます", "食べられます", "食べれます", "食べます"], c: 1, exp: "Group II passive: drop ます, add られます. (Same shape as potential.)", linksTo: "L37g1" },
    { id: "L37q3", dim: "grammar", type: "recall", difficulty: "hard", s: "私は先生___ほめられました。(by the teacher)", a: "に", o: ["を", "に", "が", "で"], c: 1, exp: "The doer in a passive sentence is marked with に.", linksTo: "L37g1" },
    { id: "L37q4", dim: "grammar", type: "recall", difficulty: "hard", s: "満員電車で足___踏まれました。(my foot)", a: "を", o: ["が", "を", "に", "は"], c: 1, exp: "For a body part/possession in the suffering passive, the part takes を.", linksTo: "L37g2" },
    { id: "L37q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "盗みます means…", a: "to steal", o: ["to invite", "to steal", "to praise", "to build"], c: 1, exp: "盗みます = to steal → 盗まれました (was stolen).", linksTo: "L37v4" },
    { id: "L37q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji means 'build'?", a: "建", o: ["招", "待", "建", "発"], c: 2, exp: "建 → 建てます (build) / 建てられました (was built).", linksTo: "L37k3" }
  ]
},

/* ===================== LESSON 38 ===================== */
{
  lessonNum: 38,
  topic: "〜の（名詞化）・〜のは…です",
  topicEn: "Nominalizing の & Cleft Sentences",
  module: 'L38', moduleLabel: 'L38 — Nominalizer の', lesson: 'L38', lessonLabel: 'Nominalizer の',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L38v1", word: "趣味", reading: "しゅみ", pitch: 1, meaning: "hobby", example: "私の趣味は写真を撮ることです。", exampleMeaning: "My hobby is taking photos." },
    { id: "L38v2", word: "集めます", reading: "あつめます", pitch: 3, meaning: "to collect", example: "切手を集めるのが好きです。", exampleMeaning: "I like collecting stamps." },
    { id: "L38v3", word: "興味", reading: "きょうみ", pitch: 1, meaning: "interest", example: "歴史に興味があります。", exampleMeaning: "I'm interested in history." },
    { id: "L38v4", word: "得意", reading: "とくい", pitch: 0, meaning: "good at; strong point (na-adj)", example: "歌を歌うのが得意です。", exampleMeaning: "I'm good at singing." },
    { id: "L38v5", word: "苦手", reading: "にがて", pitch: 0, meaning: "weak at; not good with (na-adj)", example: "早く起きるのは苦手です。", exampleMeaning: "Getting up early is not my strong point." },
    { id: "L38v6", word: "楽しみ", reading: "たのしみ", pitch: 3, meaning: "enjoyment; something to look forward to", example: "旅行に行くのが楽しみです。", exampleMeaning: "I'm looking forward to the trip." },
    { id: "L38v7", word: "性格", reading: "せいかく", pitch: 0, meaning: "personality", example: "彼は明るい性格です。", exampleMeaning: "He has a cheerful personality." },
    { id: "L38v8", word: "才能", reading: "さいのう", pitch: 0, meaning: "talent", example: "絵をかく才能があります。", exampleMeaning: "He has a talent for drawing." },
    { id: "L38v9", word: "知らせます", reading: "しらせます", pitch: 4, meaning: "to inform; to let know", example: "結果が出たら、知らせます。", exampleMeaning: "I'll let you know when the result comes out." },
    { id: "L38v10", word: "手伝います", reading: "てつだいます", pitch: 4, meaning: "to help", example: "料理を作るのを手伝います。", exampleMeaning: "I'll help make the food." }
  ],
  grammar: [
    {
      id: "L38g1",
      point: "Verb ＋ の (turning a verb into a noun)",
      explanation: "Plain-form verb ＋ の makes the action a noun, so it can take は/が/を. 本を読むのが好きです ('I like reading'). 日本語を話すのは難しいです ('Speaking Japanese is hard'). With 好き・上手・得意・苦手 the action takes が; as an object it takes を (薬を飲むのを忘れた). (こと can replace の for facts, but の is preferred with perception/like-dislike.)",
      examples: [
        "音楽を聞くのが好きです。 (I like listening to music.)",
        "朝早く起きるのは大変です。 (Getting up early is tough.)",
        "かぎをかけるのを忘れました。 (I forgot to lock up.)"
      ],
      listening: "A plain verb followed by の が/は/を is the action working as a noun.",
      production: "Say what you like doing and one thing that's hard for you, both using verb ＋ の."
    },
    {
      id: "L38g2",
      point: "〜のは…です (cleft — emphasising one part)",
      explanation: "Take a sentence and spotlight one element by making the rest 〜のは… and putting the focus at the end. 私は北海道で生まれました → 私が生まれたのは北海道です ('the place I was born is Hokkaido'). It answers 'which/where/who/when exactly?'.",
      examples: [
        "私が会いたいのは山田さんです。 (The one I want to meet is Yamada.)",
        "彼が日本へ来たのは3年前です。 (It was 3 years ago that he came to Japan.)",
        "いちばん大切なのは健康です。 (The most important thing is health.)"
      ],
      listening: "〜のは…です puts the spotlighted answer (place/person/time) right at the end.",
      production: "Emphasise where you were born or what you like most using 〜のは…です."
    }
  ],
  kanji: [
    { id: "L38k1", char: "趣", reading: "しゅ／おもむき", meaning: "taste; interest", exampleWord: "趣味（しゅみ）" },
    { id: "L38k2", char: "味", reading: "み／あじ", meaning: "flavour; taste", exampleWord: "趣味（しゅみ）" },
    { id: "L38k3", char: "興", reading: "きょう／こう", meaning: "interest; entertain", exampleWord: "興味（きょうみ）" },
    { id: "L38k4", char: "得", reading: "とく／え（る）", meaning: "gain; advantage", exampleWord: "得意（とくい）" }
  ],
  reading: {
    id: "L38r1",
    title: "私の趣味",
    passage: "私の趣味は古い切手を集めることです。\n小さいころから集めるのが好きで、今では1000枚以上あります。\n珍しい切手を見つけるのは簡単ではありません。\nでも、探すのがとても楽しいです。\nいちばんうれしいのは、外国の友達と切手を交換するときです。",
    targetWords: [
      { word: "集める", id: "L38v2" },
      { word: "楽しい", id: "L38v6" }
    ],
    questions: [
      { id: "rq38-1", q: "この人の趣味は何ですか。", o: ["写真を撮ること", "切手を集めること", "絵をかくこと", "旅行すること"], c: 1, exp: "趣味は古い切手を集めることです。" },
      { id: "rq38-2", q: "珍しい切手を見つけるのはどうですか。", o: ["簡単だ", "簡単ではない", "つまらない", "お金がかかる"], c: 1, exp: "珍しい切手を見つけるのは簡単ではありません。" },
      { id: "rq38-3", q: "いちばんうれしいのはどんなときですか。", o: ["切手を買うとき", "友達と切手を交換するとき", "切手を売るとき", "切手を見るとき"], c: 1, exp: "外国の友達と切手を交換するときです。" }
    ]
  },
  listening: [
    { id: "L38l1", audioText: "A：スポーツは得意ですか。B：いいえ、体を動かすのは苦手です。本を読むほうが好きです。", a: "Bさんが苦手なことは何ですか。", o: ["本を読むこと", "体を動かすこと", "歌うこと", "料理すること"], c: 1, exp: "体を動かすのは苦手です。" },
    { id: "L38l2", audioText: "A：彼に初めて会ったのはいつですか。B：会ったのは去年の春です。大学のパーティーでした。", a: "二人が初めて会ったのはいつですか。", o: ["今年の春", "去年の春", "去年の冬", "おととし"], c: 1, exp: "会ったのは去年の春です。" }
  ],
  questions: [
    { id: "L38q1", dim: "grammar", type: "recall", difficulty: "easy", s: "本を読む___が好きです。(I like reading)", a: "の", o: ["の", "こと", "もの", "ところ"], c: 0, exp: "Verb ＋ の が好き = 'like doing'.", linksTo: "L38g1" },
    { id: "L38q2", dim: "grammar", type: "recall", difficulty: "medium", s: "かぎをかける___忘れました。(forgot to lock)", a: "のを", o: ["のが", "のは", "のを", "のに"], c: 2, exp: "As the object of 忘れる, the action takes のを.", linksTo: "L38g1" },
    { id: "L38q3", dim: "grammar", type: "recall", difficulty: "hard", s: "私が生まれた___北海道です。(It was Hokkaido where I was born)", a: "のは", o: ["のが", "のは", "のを", "ので"], c: 1, exp: "Cleft: 〜のは…です spotlights the place.", linksTo: "L38g2" },
    { id: "L38q4", dim: "grammar", type: "recall", difficulty: "medium", s: "歌を歌う___得意です。(good at singing)", a: "のが", o: ["のが", "のを", "のは", "のに"], c: 0, exp: "With 得意/上手/好き, the action takes のが.", linksTo: "L38g1" },
    { id: "L38q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "苦手 means…", a: "weak at / not good with", o: ["good at", "weak at / not good with", "interest", "talent"], c: 1, exp: "苦手 = weak at; 得意 = good at.", linksTo: "L38v5" },
    { id: "L38q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「しゅみ」?", a: "趣味", o: ["興味", "趣味", "得意", "性格"], c: 1, exp: "趣味（しゅみ）= hobby.", linksTo: "L38k1" }
  ]
},

/* ===================== LESSON 39 ===================== */
{
  lessonNum: 39,
  topic: "〜て／で（原因）・〜ので",
  topicEn: "Cause with て/で & Reason with ので",
  module: 'L39', moduleLabel: 'L39 — Cause (て/で) & ので', lesson: 'L39', lessonLabel: 'Cause (て/で) & ので',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L39v1", word: "地震", reading: "じしん", pitch: 0, meaning: "earthquake", example: "地震で電車が止まりました。", exampleMeaning: "The train stopped because of the earthquake." },
    { id: "L39v2", word: "火事", reading: "かじ", pitch: 1, meaning: "fire (disaster)", example: "火事でビルが焼けました。", exampleMeaning: "The building burned down in a fire." },
    { id: "L39v3", word: "渋滞", reading: "じゅうたい", pitch: 0, meaning: "traffic jam", example: "渋滞で遅れました。", exampleMeaning: "I was late because of a traffic jam." },
    { id: "L39v4", word: "停電", reading: "ていでん", pitch: 0, meaning: "power outage", example: "停電でエアコンが止まりました。", exampleMeaning: "The AC stopped due to a power outage." },
    { id: "L39v5", word: "びっくりします", reading: "びっくりします", pitch: 3, meaning: "to be surprised", example: "大きい音にびっくりしました。", exampleMeaning: "I was startled by the loud noise." },
    { id: "L39v6", word: "安心します", reading: "あんしんします", pitch: 0, meaning: "to feel relieved", example: "無事だと聞いて、安心しました。", exampleMeaning: "I was relieved to hear everyone was safe." },
    { id: "L39v7", word: "心配します", reading: "しんぱいします", pitch: 0, meaning: "to worry", example: "連絡がなくて、心配しました。", exampleMeaning: "I worried because there was no word." },
    { id: "L39v8", word: "残念", reading: "ざんねん", pitch: 3, meaning: "regrettable; a pity (na-adj)", example: "中止になって、残念です。", exampleMeaning: "It's a pity it was cancelled." },
    { id: "L39v9", word: "原因", reading: "げんいん", pitch: 0, meaning: "cause", example: "事故の原因はまだわかりません。", exampleMeaning: "The cause of the accident is still unknown." },
    { id: "L39v10", word: "用事", reading: "ようじ", pitch: 0, meaning: "errand; something to do", example: "用事があるので、お先に失礼します。", exampleMeaning: "I have an errand, so I'll excuse myself first." }
  ],
  grammar: [
    {
      id: "L39g1",
      point: "〜て / 〜で (cause / reason via the te-form)",
      explanation: "The te-form can show cause when the main clause is an emotion or an uncontrollable result (no command, request, or volition follows). Verb て-form: ニュースを聞いて、びっくりしました. Noun ＋ で: 地震で電車が止まりました. i-adj い→くて (忙しくて…), na-adj/noun ＋で (病気で…).",
      examples: [
        "知らせを聞いて、安心しました。 (I heard the news and felt relieved.)",
        "事故で道が込んでいます。 (The road is crowded because of an accident.)",
        "宿題が多くて、寝られませんでした。 (There was so much homework I couldn't sleep.)"
      ],
      listening: "When the て/で clause is followed by a feeling or an out-of-control result, it's giving the cause.",
      production: "Give two cause–effect sentences using て/で (e.g. 'because of the rain…')."
    },
    {
      id: "L39g2",
      point: "〜ので (reason — soft & objective)",
      explanation: "Plain form ＋ ので (na-adj/noun: 〜なので). States a reason more softly and objectively than から, so it's common in polite explanations and excuses. 用事があるので、帰ります. Because it sounds reasonable rather than insistent, it's preferred when being considerate.",
      examples: [
        "頭が痛いので、早く帰ってもいいですか。 (My head hurts, so may I leave early?)",
        "日曜日なので、銀行は休みです。 (It's Sunday, so the bank is closed.)",
        "道が込んでいたので、遅れました。 (The road was crowded, so I was late.)"
      ],
      listening: "〜ので gives a soft, polite reason — common in excuses and requests.",
      production: "Politely ask to leave early, giving a reason with 〜ので."
    }
  ],
  kanji: [
    { id: "L39k1", char: "地", reading: "ち／じ", meaning: "ground; earth", exampleWord: "地震（じしん）" },
    { id: "L39k2", char: "震", reading: "しん／ふる（える）", meaning: "quake; tremble", exampleWord: "地震（じしん）" },
    { id: "L39k3", char: "原", reading: "げん／はら", meaning: "origin; field", exampleWord: "原因（げんいん）" },
    { id: "L39k4", char: "因", reading: "いん／よ（る）", meaning: "cause; depend on", exampleWord: "原因（げんいん）" }
  ],
  reading: {
    id: "L39r1",
    title: "大きい地震",
    passage: "ゆうべ、大きい地震がありました。\n強い揺れにびっくりして、すぐ外に出ました。\n地震で電車が止まったので、駅にはたくさんの人がいました。\n家族から連絡がなくて、とても心配しました。\nでも、みんな無事だとわかって、安心しました。",
    targetWords: [
      { word: "びっくりして", id: "L39v5" },
      { word: "心配しました", id: "L39v7" }
    ],
    questions: [
      { id: "rq39-1", q: "この人はなぜすぐ外に出ましたか。", o: ["火事だったから", "強い揺れにびっくりして", "電車に乗るため", "買い物のため"], c: 1, exp: "強い揺れにびっくりして、すぐ外に出ました。" },
      { id: "rq39-2", q: "駅に人が多かったのはなぜですか。", o: ["祭りがあったから", "地震で電車が止まったので", "セールがあったから", "雨だったから"], c: 1, exp: "地震で電車が止まったので、人が多かった。" },
      { id: "rq39-3", q: "最後に、この人はどう感じましたか。", o: ["まだ心配だ", "みんな無事で安心した", "残念だ", "怒った"], c: 1, exp: "みんな無事だとわかって、安心しました。" }
    ]
  },
  listening: [
    { id: "L39l1", audioText: "A：遅かったですね。B：すみません、事故で道がすごく渋滞していたんです。", a: "Bさんはなぜ遅れましたか。", o: ["寝坊した", "事故の渋滞", "電車が止まった", "道に迷った"], c: 1, exp: "事故で道が渋滞していたんです。" },
    { id: "L39l2", audioText: "A：あしたのパーティー、来られますか。B：すみません、用事があるので、行けないんです。", a: "Bさんはなぜ行けませんか。", o: ["病気だから", "用事があるから", "遠いから", "お金がないから"], c: 1, exp: "用事があるので、行けないんです。" }
  ],
  questions: [
    { id: "L39q1", dim: "grammar", type: "recall", difficulty: "medium", s: "ニュースを聞い___、びっくりしました。(and was surprised)", a: "て", o: ["て", "で", "から", "のに"], c: 0, exp: "Verb て-form can express the cause of a feeling.", linksTo: "L39g1" },
    { id: "L39q2", dim: "grammar", type: "recall", difficulty: "medium", s: "地震___電車が止まりました。(because of the earthquake)", a: "で", o: ["て", "で", "に", "を"], c: 1, exp: "Noun ＋ で expresses cause: 地震で.", linksTo: "L39g1" },
    { id: "L39q3", dim: "grammar", type: "recall", difficulty: "easy", s: "頭が痛い___、早く帰ってもいいですか。(soft reason)", a: "ので", o: ["ので", "のに", "ても", "たら"], c: 0, exp: "〜ので gives a soft, polite reason.", linksTo: "L39g2" },
    { id: "L39q4", dim: "grammar", type: "recall", difficulty: "hard", s: "日曜日 ＋ ので → ?", a: "日曜日なので", o: ["日曜日ので", "日曜日だので", "日曜日なので", "日曜日のので"], c: 2, exp: "Noun/na-adj take な before ので: 日曜日なので.", linksTo: "L39g2" },
    { id: "L39q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "渋滞 means…", a: "traffic jam", o: ["earthquake", "traffic jam", "power outage", "fire"], c: 1, exp: "渋滞（じゅうたい）= traffic jam.", linksTo: "L39v3" },
    { id: "L39q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「じしん」 (earthquake)?", a: "地震", o: ["地震", "原因", "火事", "停電"], c: 0, exp: "地震（じしん）= earthquake.", linksTo: "L39k1" }
  ]
},

/* ===================== LESSON 40 ===================== */
{
  lessonNum: 40,
  topic: "〜か（どうか）・〜てみます",
  topicEn: "Embedded Questions & Trying Out",
  module: 'L40', moduleLabel: 'L40 — Embedded Questions & てみる', lesson: 'L40', lessonLabel: 'Embedded Questions & てみる',
  difficulty: "medium",
  level: "N4",
  vocabulary: [
    { id: "L40v1", word: "調べます", reading: "しらべます", pitch: 3, meaning: "to look up; to investigate", example: "電車の時間を調べてみます。", exampleMeaning: "I'll look up the train times." },
    { id: "L40v2", word: "試します", reading: "ためします", pitch: 3, meaning: "to try out; to test", example: "新しい方法を試してみました。", exampleMeaning: "I tried out a new method." },
    { id: "L40v3", word: "確認します", reading: "かくにんします", pitch: 0, meaning: "to confirm; to check", example: "予約できたかどうか確認します。", exampleMeaning: "I'll check whether the booking went through." },
    { id: "L40v4", word: "数えます", reading: "かぞえます", pitch: 3, meaning: "to count", example: "お金が足りるかどうか、数えてみます。", exampleMeaning: "I'll count to see if there's enough money." },
    { id: "L40v5", word: "合います", reading: "あいます", pitch: 2, meaning: "to fit; to match; to suit", example: "サイズが合うかどうか、着てみます。", exampleMeaning: "I'll try it on to see if the size fits." },
    { id: "L40v6", word: "サイズ", reading: "サイズ", pitch: 1, meaning: "size", example: "このサイズで合うかどうか分かりません。", exampleMeaning: "I'm not sure if this size fits." },
    { id: "L40v7", word: "締め切り", reading: "しめきり", pitch: 0, meaning: "deadline", example: "締め切りがいつか、調べます。", exampleMeaning: "I'll check when the deadline is." },
    { id: "L40v8", word: "申し込みます", reading: "もうしこみます", pitch: 5, meaning: "to apply; to sign up", example: "申し込めるかどうか聞いてみます。", exampleMeaning: "I'll ask whether I can apply." },
    { id: "L40v9", word: "知らせます", reading: "しらせます", pitch: 4, meaning: "to inform; to let know", example: "結果が出たかどうか知らせてください。", exampleMeaning: "Please let me know whether the result is out." },
    { id: "L40v10", word: "計ります", reading: "はかります", pitch: 3, meaning: "to measure; to time", example: "熱があるかどうか、計ってみます。", exampleMeaning: "I'll take my temperature to see if I have a fever." }
  ],
  grammar: [
    {
      id: "L40g1",
      point: "〜か（どうか）— embedded questions",
      explanation: "Embed a question inside a sentence with か. Yes/no questions use 〜かどうか ('whether or not'): 来るかどうか分かりません. Wh-questions keep the question word ＋ か: どこにあるか教えてください. Plain forms go before か; a noun/na-adj before か drops だ (元気かどうか, 学生か).",
      examples: [
        "間に合うかどうか分かりません。 (I don't know whether we'll make it in time.)",
        "彼が何時に来るか聞いてください。 (Please ask what time he's coming.)",
        "これでいいかどうか、確認します。 (I'll check whether this is okay.)"
      ],
      listening: "か（どうか）turns a question into a noun-like chunk inside a bigger sentence.",
      production: "Make one 'I don't know whether…' (かどうか) and one 'please tell me wh-…か' sentence."
    },
    {
      id: "L40g2",
      point: "〜てみます (try doing / do and see)",
      explanation: "Te-form ＋ みます means 'do something to see how it goes / give it a try'. 食べてみます ('I'll try eating it'). Past: 〜てみました ('I tried…'). Request: 〜てみてください. It implies you don't yet know the result.",
      examples: [
        "この服を着てみてもいいですか。 (May I try this on?)",
        "新しいレストランへ行ってみました。 (I tried going to the new restaurant.)",
        "わからない言葉は、辞書で調べてみてください。 (Try looking up words you don't know.)"
      ],
      listening: "〜てみます = a trial action ('do and see'); often paired with 調べる/食べる/着る.",
      production: "Say two things you'll 'try doing to see' using 〜てみます."
    }
  ],
  kanji: [
    { id: "L40k1", char: "調", reading: "ちょう／しら（べる）", meaning: "investigate; tune", exampleWord: "調べます（しらべます）" },
    { id: "L40k2", char: "確", reading: "かく／たし（か）", meaning: "certain; confirm", exampleWord: "確認（かくにん）" },
    { id: "L40k3", char: "認", reading: "にん／みと（める）", meaning: "recognise; approve", exampleWord: "確認（かくにん）" },
    { id: "L40k4", char: "計", reading: "けい／はか（る）", meaning: "measure; plan; total", exampleWord: "計ります（はかります）" }
  ],
  reading: {
    id: "L40r1",
    title: "申し込みの前に",
    passage: "来月の日本語のスピーチ大会に出たいと思っています。\nでも、留学生が申し込めるかどうか分かりませんでした。\nそこで、まず事務所に聞いてみました。\n係の人は「だいじょうぶですよ」と教えてくれました。\n締め切りがいつか確認して、さっそく申し込んでみるつもりです。",
    targetWords: [
      { word: "申し込めるかどうか", id: "L40v8" },
      { word: "聞いてみました", id: "L40v3" }
    ],
    questions: [
      { id: "rq40-1", q: "この人は何に出たいですか。", o: ["スポーツ大会", "スピーチ大会", "音楽会", "試験"], c: 1, exp: "日本語のスピーチ大会に出たい。" },
      { id: "rq40-2", q: "分からなかったことは何ですか。", o: ["大会の日", "留学生が申し込めるかどうか", "場所", "賞金"], c: 1, exp: "留学生が申し込めるかどうか分からなかった。" },
      { id: "rq40-3", q: "この人はまず何をしましたか。", o: ["申し込んだ", "事務所に聞いてみた", "あきらめた", "先生に相談した"], c: 1, exp: "まず事務所に聞いてみました。" }
    ]
  },
  listening: [
    { id: "L40l1", audioText: "A：この服、すてきですね。B：ありがとう。でもサイズが合うかどうか、ちょっと着てみます。", a: "Bさんはこれから何をしますか。", o: ["買う", "着てみる", "返す", "別の店へ行く"], c: 1, exp: "サイズが合うかどうか、着てみます。" },
    { id: "L40l2", audioText: "A：会議は何時からか分かりますか。B：すみません、分かりません。確認してみますね。", a: "Bさんはこれから何をしますか。", o: ["会議に出る", "時間を確認してみる", "帰る", "資料を作る"], c: 1, exp: "確認してみますね。" }
  ],
  questions: [
    { id: "L40q1", dim: "grammar", type: "recall", difficulty: "medium", s: "来る___分かりません。(whether or not he comes)", a: "かどうか", o: ["かどうか", "かが", "のか", "ことが"], c: 0, exp: "Yes/no embedded question = 〜かどうか.", linksTo: "L40g1" },
    { id: "L40q2", dim: "grammar", type: "recall", difficulty: "hard", s: "彼が何時に来る___聞いてください。(wh-question embedded)", a: "か", o: ["か", "かどうか", "のを", "と"], c: 0, exp: "With a question word (何時), keep just か (not かどうか).", linksTo: "L40g1" },
    { id: "L40q3", dim: "grammar", type: "recall", difficulty: "easy", s: "この服を着___もいいですか。(may I try on?)", a: "てみて", o: ["てみて", "ておいて", "てあって", "てしまって"], c: 0, exp: "〜てみる = try doing → 着てみてもいいですか.", linksTo: "L40g2" },
    { id: "L40q4", dim: "grammar", type: "recall", difficulty: "hard", s: "学生 ＋ かどうか → ?", a: "学生かどうか", o: ["学生だかどうか", "学生かどうか", "学生なかどうか", "学生のかどうか"], c: 1, exp: "Noun before か drops だ: 学生かどうか.", linksTo: "L40g1" },
    { id: "L40q5", dim: "vocab", type: "recognition", difficulty: "easy", s: "調べます means…", a: "to look up / investigate", o: ["to try out", "to look up / investigate", "to count", "to measure"], c: 1, exp: "調べます = to look up / investigate.", linksTo: "L40v1" },
    { id: "L40q6", dim: "kanji", type: "recognition", difficulty: "medium", s: "Which kanji pair reads 「かくにん」?", a: "確認", o: ["確認", "調査", "計算", "確実"], c: 0, exp: "確認（かくにん）= confirmation/checking.", linksTo: "L40k2" }
  ]
}


];

if (typeof window !== 'undefined') window.SEED_CONTENT = SEED_CONTENT;
if (typeof module !== 'undefined' && module.exports) module.exports = SEED_CONTENT;
