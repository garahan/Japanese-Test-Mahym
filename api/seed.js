const UPSTASH_URL = process.env.KV_REST_API_URL;
const UPSTASH_TOKEN = process.env.KV_REST_API_TOKEN;

async function redisSet(key, value) {
  const res = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(['SET', key, JSON.stringify(value)]),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

// ============================================================================
// HIGH QUALITY QUESTION BANK (Lessons 26 - 31)
// ============================================================================
const QUESTIONS = [
  // ── LESSON 26: てあげる / てくれる / てもらう (Giving & Receiving) ──
  {id:'q26_k1',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji',
   s:'自分で旅行を計画するのは楽しいです。',a:'「自分」の読み方は？',
   o:['じぶん','ちっぷん','じっぷん','ちぶん'],c:0,exp:'自分 = じぶん (oneself)'},
  {id:'q26_v1',type:'vocab',category:'語彙',difficulty:'medium',lesson:26,gp:'vocab',
   s:'子どもに ＿＿ をかってやりました。とてもよろこびました。',a:'正しい言葉を選んでください。',
   o:['にんぎょう','おみやげ','くすり','でんしゃ'],c:0,exp:'にんぎょう (人形) = doll'},
  {id:'q26_g1',type:'grammar',category:'文法',difficulty:'hard',lesson:26,gp:'〜てくれる',
   s:'先生がわからない問題を説明＿＿。',a:'正しい形を選んでください。',
   o:['してあげました','してもらいました','してくれました','しました'],c:2,
   exp:'〜てくれる = someone (the teacher) does something for me. The subject is the giver.'},

  // ── LESSON 27: Potential Form ──
  {id:'q27_k1',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji',
   s:'この自転車はまだ使えますよ。',a:'「使えます」の読み方は？',
   o:['つかえます','つくえます','はたらけます','うごけます'],c:0,exp:'使える = つかえる (can use - potential form of 使う)'},
  {id:'q27_g1',type:'grammar',category:'文法',difficulty:'medium',lesson:27,gp:'potential form',
   s:'子どもの時は、ピアノが＿＿ませんでした。',a:'正しい形を選んでください。',
   o:['ひかれ','ひき','ひけ','ひける'],c:2,exp:'弾ける → 弾けません = could not play. Potential form takes が instead of を.'},
  {id:'q27_g2',type:'grammar',category:'文法',difficulty:'challenge',lesson:27,gp:'potential form vs visible',
   s:'ここから富士山が＿＿。',a:'正しい形を選んでください。',
   o:['見ます','見られます','見えます','見させます'],c:2,exp:'見えます (can be seen naturally) vs 見られます (have the opportunity to see).'},

  // ── LESSON 28: 〜ながら / 〜し、〜し ──
  {id:'q28_v1',type:'vocab',category:'語彙',difficulty:'easy',lesson:28,gp:'vocab',
   s:'毎朝、ジョギングをして、シャワーを ＿＿ から、会社へ行きます。',a:'正しい言葉を選んでください。',
   o:['あびて','のんで','きて','して'],c:0,exp:'シャワーをあびる (浴びる) = to take a shower'},
  {id:'q28_g1',type:'grammar',category:'文法',difficulty:'easy',lesson:28,gp:'〜ながら',
   s:'音楽を＿＿ながら、勉強します。',a:'正しい形を選んでください。',
   o:['聞く','聞いて','聞き','聞かない'],c:2,exp:'Verb stem (masu-form without masu) + ながら = doing two actions at the same time.'},
  {id:'q28_g2',type:'grammar',category:'文法',difficulty:'medium',lesson:28,gp:'〜し、〜し',
   s:'このレストランは＿＿し、おいしいし、いつも人が多いです。',a:'正しい形を選んでください。',
   o:['安い','安くて','安だ','安の'],c:0,exp:'Plain form + し. For i-adjectives, keep the い (安いし). Gives multiple reasons.'},

  // ── LESSON 29: Intransitive Verbs & 〜てしまう (Completion/Regret) ──
  {id:'q29_k1',type:'kanji',category:'漢字',difficulty:'medium',lesson:29,gp:'kanji',
   s:'風で窓が閉まりました。',a:'「閉まりました」の読み方は？',
   o:['きまりました','しまりました','あつまりました','とまりました'],c:1,exp:'閉まる = しまる (to close - intransitive)'},
  {id:'q29_k2',type:'kanji',category:'漢字',difficulty:'hard',lesson:29,gp:'kanji',
   s:'コップが割れてしまいました。',a:'「割れて」の読み方は？',
   o:['おれて','よごれて','われて','こわれて'],c:2,exp:'割れる = われる (to smash/break, usually glass or plates)'},
  {id:'q29_v1',type:'vocab',category:'語彙',difficulty:'medium',lesson:29,gp:'intransitive pairs',
   s:'あ、電気が ＿＿ いますよ。消しましょうか。',a:'正しい言葉を選んでください。',
   o:['つけて','ついて','きえて','けして'],c:1,exp:'ついています = is on (intransitive state). つける is transitive (someone turns it on).'},
  {id:'q29_g1',type:'grammar',category:'文法',difficulty:'easy',lesson:29,gp:'〜ている (state)',
   s:'あっ、あそこの道に財布が＿＿いますよ。',a:'正しい形を選んでください。',
   o:['落として','落ちて','落とされて','落ちさせて'],c:1,exp:'落ちている = is dropped/fallen (describing a current state using intransitive verb).'},
  {id:'q29_g2',type:'grammar',category:'文法',difficulty:'medium',lesson:29,gp:'〜てしまう',
   s:'大切な手紙を間違えて＿＿しまいました。',a:'正しい形を選んでください。',
   o:['捨てて','捨て','捨てる','捨てた'],c:0,exp:'Verb-て + しまう = expresses regret or accidental completion.'},
  {id:'q29_g3',type:'grammar',category:'文法',difficulty:'challenge',lesson:29,gp:'transitive vs intransitive',
   s:'シャツのボタンが＿＿いますよ。',a:'正しい形を選んでください。',
   o:['はずして','はずれて','とって','とれて'],c:1,exp:'外れる (はずれる) = to come off (button, tire, etc.). Intransitive state.'},

  // ── LESSON 30: 〜てある (Intentional State) & 〜ておく (Preparation) ──
  {id:'q30_k1',type:'kanji',category:'漢字',difficulty:'medium',lesson:30,gp:'kanji',
   s:'壁にカレンダーが掛けてあります。',a:'「壁」の読み方は？',
   o:['はこ','かべ','まど','ゆか'],c:1,exp:'壁 = かべ (wall)'},
  {id:'q30_v1',type:'vocab',category:'語彙',difficulty:'easy',lesson:30,gp:'vocab',
   s:'部屋の壁にきれいな絵が ＿＿ あります。',a:'正しい言葉を選んでください。',
   o:['かざって','ならべて','しまって','まとめて'],c:0,exp:'飾る (かざる) = to decorate/display'},
  {id:'q30_v2',type:'vocab',category:'語彙',difficulty:'medium',lesson:30,gp:'vocab',
   s:'授業が終わったら、辞書を本棚に ＿＿ おいてください。',a:'正しい言葉を選んでください。',
   o:['もどして','ならべて','はって','うえて'],c:0,exp:'戻す (もどす) = to return something to its original place'},
  {id:'q30_g1',type:'grammar',category:'文法',difficulty:'hard',lesson:30,gp:'〜てある vs 〜ている',
   s:'窓が＿＿あります。',a:'正しい形を選んでください。',
   o:['開いて','開けて','閉まって','閉める'],c:1,exp:'〜てある uses Transitive verbs to show someone did it intentionally. 開ける → 開けてある。'},
  {id:'q30_g2',type:'grammar',category:'文法',difficulty:'medium',lesson:30,gp:'〜ておく',
   s:'旅行の前に、インターネットでホテルを＿＿おきます。',a:'正しい形を選んでください。',
   o:['予約する','予約して','予約した','予約し'],c:1,exp:'〜ておく = to prepare in advance. Requires Te-form.'},
  {id:'q30_g3',type:'grammar',category:'文法',difficulty:'challenge',lesson:30,gp:'〜ておく (leave as is)',
   s:'「はさみを片付けましょうか。」「まだ使いますから、そのままに＿＿。」',a:'正しい形を選んでください。',
   o:['してください','してあります','しておいてください','しています'],c:2,exp:'そのままにしておく = leave it as it is (for future use).'},

  // ── LESSON 31: Volitional Form & Intentions ──
  {id:'q31_k1',type:'kanji',category:'漢字',difficulty:'medium',lesson:31,gp:'kanji',
   s:'来年、大学を卒業する予定です。',a:'「卒業」の読み方は？',
   o:['そつぎょう','そつきょう','しゅつぎょう','しゅつきょう'],c:0,exp:'卒業 = そつぎょう (graduation)'},
  {id:'q31_k2',type:'kanji',category:'漢字',difficulty:'hard',lesson:31,gp:'kanji',
   s:'会議は10時に始まる予定です。',a:'「始まる」の読み方は？',
   o:['おわる','はじまる','とまる','しまる'],c:1,exp:'始まる = はじまる (to begin/start - intransitive)'},
  {id:'q31_v1',type:'vocab',category:'語彙',difficulty:'easy',lesson:31,gp:'vocab',
   s:'ずっと歩いたので、少し ＿＿ しましょう。',a:'正しい言葉を選んでください。',
   o:['きゅうけい','よしゅう','ふくしゅう','じゅんび'],c:0,exp:'休憩 (きゅうけい) = break/rest'},
  {id:'q31_g1',type:'grammar',category:'文法',difficulty:'easy',lesson:31,gp:'volitional form',
   s:'今日は疲れたから、早く＿＿。',a:'正しい形を選んでください。',
   o:['寝る','寝よう','寝た','寝ろう'],c:1,exp:'寝よう = Volitional form of 寝る (Let\'s sleep / I shall sleep). Group 2 drops る adds よう.'},
  {id:'q31_g2',type:'grammar',category:'文法',difficulty:'medium',lesson:31,gp:'〜と思っています',
   s:'週末は海に行こうと＿＿。',a:'正しい形を選んでください。',
   o:['思います','思っています','考えます','考えています'],c:1,exp:'Volitional + と思っています = I am thinking of doing (an ongoing intention).'},
  {id:'q31_g3',type:'grammar',category:'文法',difficulty:'hard',lesson:31,gp:'〜つもりです',
   s:'明日からは、絶対にたばこを＿＿つもりです。',a:'正しい形を選んでください。',
   o:['吸わない','吸わなかった','吸おう','吸う'],c:0,exp:'Verb Dictionary / Nai-form + つもりです = firm intention. (I intend NOT to smoke).'},
  {id:'q31_g4',type:'grammar',category:'文法',difficulty:'challenge',lesson:31,gp:'〜予定です',
   s:'部長は午後から出張の＿＿です。',a:'正しい形を選んでください。',
   o:['つもり','予定','計画','思い'],c:1,exp:'Noun + の + 予定です = It is scheduled that... (Objective fact, unlike つもり which is personal intention).'}
];

// ============================================================================
// HIGH QUALITY FLASHCARD BANK (Lessons 26 - 31)
// ============================================================================
const FLASHCARDS = [
  // L29: Intransitive verbs
  {id:'f29_1',lesson:29,type:'vocab',front:'開く',reading:'あく',meaning:'to open (intransitive)',
   example:'ドアが開きます。',exampleReading:'ドアがあきます。',exampleMeaning:'The door opens.'},
  {id:'f29_2',lesson:29,type:'vocab',front:'閉まる',reading:'しまる',meaning:'to close (intransitive)',
   example:'窓が閉まりました。',exampleReading:'まどがしまりました。',exampleMeaning:'The window closed.'},
  {id:'f29_3',lesson:29,type:'vocab',front:'つく',reading:'つく',meaning:'to turn on / be on (intransitive)',
   example:'電気がついています。',exampleReading:'でんきがついています。',exampleMeaning:'The light is on.'},
  {id:'f29_4',lesson:29,type:'vocab',front:'消える',reading:'きえる',meaning:'to go off / disappear (intransitive)',
   example:'テレビが消えました。',exampleReading:'テレビがきえました。',exampleMeaning:'The TV went off.'},
  {id:'f29_5',lesson:29,type:'vocab',front:'壊れる',reading:'こわれる',meaning:'to break (intransitive)',
   example:'このパソコンは壊れています。',exampleReading:'このパソコンはこわれています。',exampleMeaning:'This PC is broken.'},
  {id:'f29_6',lesson:29,type:'grammar',front:'〜てしまう',reading:'verb-te form + しまう',meaning:'accidentally completed / regret',
   example:'パスポートを落としてしまいました。',exampleReading:'パスポートをおとしてしまいました。',exampleMeaning:'I accidentally dropped my passport.'},
  
  // L30: Transitive preparation
  {id:'f30_1',lesson:30,type:'vocab',front:'飾る',reading:'かざる',meaning:'to decorate / display',
   example:'部屋に花を飾ります。',exampleReading:'へやにはなをかざります。',exampleMeaning:'I decorate the room with flowers.'},
  {id:'f30_2',lesson:30,type:'vocab',front:'並べる',reading:'ならべる',meaning:'to line up / arrange',
   example:'机の上に本を並べます。',exampleReading:'つくえのうえにほんをならべます。',exampleMeaning:'I line up books on the desk.'},
  {id:'f30_3',lesson:30,type:'vocab',front:'しまう',reading:'しまう',meaning:'to put away',
   example:'服を引き出しにしまいます。',exampleReading:'ふくをひきだしにしまいます。',exampleMeaning:'I put the clothes away in the drawer.'},
  {id:'f30_4',lesson:30,type:'vocab',front:'戻す',reading:'もどす',meaning:'to return something to its place',
   example:'使ったら、元の所に戻してください。',exampleReading:'つかったら、もとのところにもどしてください。',exampleMeaning:'When you finish using it, return it to its original place.'},
  {id:'f30_5',lesson:30,type:'grammar',front:'〜てある',reading:'transitive verb-te form + ある',meaning:'is done (intentional state)',
   example:'黒板に字が書いてあります。',exampleReading:'こくばんにじがかいてあります。',exampleMeaning:'Words are written on the blackboard (intentionally).'},
  {id:'f30_6',lesson:30,type:'grammar',front:'〜ておく',reading:'verb-te form + おく',meaning:'do in advance / prepare',
   example:'旅行の前にホテルを予約しておきます。',exampleReading:'りょこうのまえにホテルをよやくしておきます。',exampleMeaning:'I will book a hotel in advance of the trip.'},

  // L31: Volitional
  {id:'f31_1',lesson:31,type:'vocab',front:'始まる',reading:'はじまる',meaning:'to begin / start (intransitive)',
   example:'会議が始まります。',exampleReading:'かいぎがはじまります。',exampleMeaning:'The meeting will begin.'},
  {id:'f31_2',lesson:31,type:'vocab',front:'見つける',reading:'みつける',meaning:'to find (transitive)',
   example:'新しい仕事を見つけました。',exampleReading:'あたらしいしごとをみつけました。',exampleMeaning:'I found a new job.'},
  {id:'f31_3',lesson:31,type:'vocab',front:'予定',reading:'よてい',meaning:'schedule / plan',
   example:'明日は出張の予定です。',exampleReading:'あしたはしゅっちょうのよていです。',exampleMeaning:'I am scheduled for a business trip tomorrow.'},
  {id:'f31_4',lesson:31,type:'grammar',front:'Volitional + と思っています',reading:'〜とおもっています',meaning:'I am thinking of doing...',
   example:'週末は海に行こうと思っています。',exampleReading:'しゅうまつはうみにいこうとおもっています。',exampleMeaning:'I am thinking of going to the sea this weekend.'},
  {id:'f31_5',lesson:31,type:'grammar',front:'〜つもりです',reading:'dictionary / nai form + つもり',meaning:'firm intention / plan',
   example:'明日からたばこを吸わないつもりです。',exampleReading:'あしたからたばこをすわないつもりです。',exampleMeaning:'I intend not to smoke starting tomorrow.'}
];

// ============================================================================
// LESSON METADATA
// ============================================================================
const LESSONS = [
  {id:'l026',number:26,title:'Lesson 26 — てあげる/くれる/もらう',questionCount:3,flashcardCount:0},
  {id:'l027',number:27,title:'Lesson 27 — Potential Form',questionCount:3,flashcardCount:0},
  {id:'l028',number:28,title:'Lesson 28 — ながら / し、し',questionCount:3,flashcardCount:0},
  {id:'l029',number:29,title:'Lesson 29 — Intransitive verbs / てしまう',questionCount:6,flashcardCount:6},
  {id:'l030',number:30,title:'Lesson 30 — てある / ておく',questionCount:6,flashcardCount:6},
  {id:'l031',number:31,title:'Lesson 31 — Volitional form / つもり',questionCount:7,flashcardCount:5},
];

export default async function handler(req, res) {
  // Protect the endpoint
  if (req.query.secret !== 'seed_nihongo_2024') {
    return res.status(400).json({ ok: false, error: 'Missing secret param. Add ?secret=seed_nihongo_2024 to the URL' });
  }

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(500).json({ ok: false, error: 'Upstash env vars not set' });
  }

  try {
    // 1. Fetch existing data so we don't wipe out everything else (like L26-28 stuff not included in this file)
    // NOTE: For this specific seed file, we will MERGE the new questions with the existing ones to prevent data loss.
    const getRes = await fetch(`${UPSTASH_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        ['GET', 'questions'],
        ['GET', 'flashcards'],
        ['GET', 'lessons']
      ]),
    });
    const existingData = await getRes.json();
    
    let existingQs = [];
    let existingFCs = [];
    
    // Safely parse existing data if Upstash pipeline response format
    if (existingData && Array.isArray(existingData)) {
      if (existingData[0] && existingData[0].result) existingQs = JSON.parse(existingData[0].result);
      if (existingData[1] && existingData[1].result) existingFCs = JSON.parse(existingData[1].result);
    } else if (existingData && existingData.result) {
       // Single get fallback
       existingQs = JSON.parse(existingData.result) || [];
    }

    // 2. Merge existing data with the new seed data (deduplicate by ID)
    const mergedQs = [...existingQs];
    QUESTIONS.forEach(q => {
      const idx = mergedQs.findIndex(ex => ex.id === q.id);
      if (idx > -1) mergedQs[idx] = q; else mergedQs.push(q);
    });

    const mergedFCs = [...existingFCs];
    FLASHCARDS.forEach(f => {
      const idx = mergedFCs.findIndex(ex => ex.id === f.id);
      if (idx > -1) mergedFCs[idx] = f; else mergedFCs.push(f);
    });

    // We will completely overwrite the LESSONS array to keep the titles clean
    await redisSet('questions', mergedQs);
    await redisSet('flashcards', mergedFCs);
    await redisSet('lessons', LESSONS);

    return res.status(200).json({ 
      ok: true, 
      message: 'Database heavily seeded and merged successfully!',
      stats: {
        total_questions: mergedQs.length,
        total_flashcards: mergedFCs.length,
        total_lessons: LESSONS.length
      }
    });

  } catch (err) {
    console.error('Seed error:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
