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
    {id:'k001',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'自分で旅行を計画するのは楽しいです。',a:'「自分」の読み方は？',
   o:['じぶん','ちっぷん','じっぷん','ちぶん'],c:0,exp:'自分 = じぶん (oneself)'},
  {id:'k002',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'自分で旅行を計画するのは楽しいです。',a:'「旅行」の読み方は？',
   o:['りゅうこ','りょうこ','りょこう','りゅこう'],c:2,exp:'旅行 = りょこう (travel)'},
  {id:'k003',type:'kanji',category:'漢字',difficulty:'medium',lesson:26,gp:'kanji-reading',
   s:'自分で旅行を計画するのは楽しいです。',a:'「計画」の読み方は？',
   o:['けいかく','けいが','げいかく','けが'],c:0,exp:'計画 = けいかく (plan/schedule)'},
  {id:'k004',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'自分で旅行を計画するのは楽しいです。',a:'「楽しい」の読み方は？',
   o:['うれしい','うつくしい','たのしい','いそがしい'],c:2,exp:'楽しい = たのしい (fun, enjoyable)'},
  {id:'k005',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'この学生は毎日地下鉄で大学に通っています。',a:'「地下鉄」の読み方は？',
   o:['じげてつ','じがてつ','ちげてつ','ちかてつ'],c:3,exp:'地下鉄 = ちかてつ (subway)'},
  {id:'k006',type:'kanji',category:'漢字',difficulty:'easy',lesson:27,gp:'kanji-reading',
   s:'この学生は毎日地下鉄で大学に通っています。',a:'「大学」の読み方は？',
   o:['たいがく','だいかく','たいかく','だいがく'],c:3,exp:'大学 = だいがく (university)'},
  {id:'k007',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'この学生は毎日地下鉄で大学に通っています。',a:'「通って」の読み方は？',
   o:['かえって','かよって','かおって','いって'],c:1,exp:'通う = かよう (to commute)'},
  {id:'k008',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'姉がいつも食事の用意をしてくれます。',a:'「姉」の読み方は？',
   o:['いもうと','おとうと','あね','あに'],c:2,exp:'姉 = あね (older sister)'},
  {id:'k009',type:'kanji',category:'漢字',difficulty:'medium',lesson:26,gp:'kanji-reading',
   s:'姉がいつも食事の用意をしてくれます。',a:'「食事」の読み方は？',
   o:['しょくじ','しょうじ','そうじ','そくじ'],c:0,exp:'食事 = しょくじ (meal)'},
  {id:'k010',type:'kanji',category:'漢字',difficulty:'medium',lesson:26,gp:'kanji-reading',
   s:'姉がいつも食事の用意をしてくれます。',a:'「用意」の読み方は？',
   o:['よい','ようい','よじ','ようじ'],c:1,exp:'用意 = ようい (preparation)'},
  {id:'k011',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-writing',
   s:'彼女はこうちょくしたようにうごかない。',a:'「うごかない」の漢字は？',
   o:['動かない','働かない','重かない','衝かない'],c:0,exp:'動く = うごく (to move)'},
  {id:'k012',type:'kanji',category:'漢字',difficulty:'hard',lesson:28,gp:'kanji-reading',
   s:'奈良と京都は日本の古い都です。',a:'「都」の読み方は？',
   o:['みなと','ふるさと','みやこ','いなか'],c:2,exp:'都 = みやこ (capital city)'},
  {id:'k013',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'趣味としてじゅうどうを習うつもりです。',a:'「趣味」の読み方は？',
   o:['しゅみ','きょうみ','ちゅみ','ちょうみ'],c:0,exp:'趣味 = しゅみ (hobby)'},
  {id:'k014',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-writing',
   s:'きゅうに空が暗くなりました。',a:'「きゅうに」の漢字は？',
   o:['早に','速に','突に','急に'],c:3,exp:'急に = きゅうに (suddenly)'},
  {id:'k015',type:'kanji',category:'漢字',difficulty:'hard',lesson:28,gp:'kanji-reading',
   s:'兄が入院したので、花を持ってお見舞いに行った。',a:'「お見舞い」の読み方は？',
   o:['おみあい','おみまい','おけんまい','おけんあい'],c:1,exp:'お見舞い = おみまい (hospital visit)'},
  {id:'k016',type:'kanji',category:'漢字',difficulty:'hard',lesson:28,gp:'kanji-writing',
   s:'のどがかわいています。水が飲みたいです。',a:'「かわいて」の漢字は？',
   o:['乾いて','変いて','掛いて','渇いて'],c:3,exp:'渇く = かわく (to be thirsty) ≠ 乾く (to dry out)'},
  {id:'k017',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'先生の奥さんはとても優しいです。',a:'「優しい」の読み方は？',
   o:['きびしい','やさしい','たのしい','したしい'],c:1,exp:'優しい = やさしい (kind, gentle)'},
  {id:'k018',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'ディズニーランドで姉に人形を買ってやった。',a:'「人形」の読み方は？',
   o:['にんけい','じんけい','にんぎょう','じんぎょう'],c:2,exp:'人形 = にんぎょう (doll)'},
  {id:'k019',type:'kanji',category:'漢字',difficulty:'hard',lesson:28,gp:'kanji-reading',
   s:'おばあさんが昔のいろんな物語を話してくれた。',a:'「物語」の読み方は？',
   o:['ものはなし','ものばなし','ものかたり','ものがたり'],c:3,exp:'物語 = ものがたり (story, tale)'},
  {id:'k020',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-writing',
   s:'友達がいなくて、さびしいです。',a:'「さびしい」の漢字は？',
   o:['悲しい','厳しい','美しい','寂しい'],c:3,exp:'寂しい = さびしい (lonely)'},
  {id:'k021',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'海から強い風がふいてきた。',a:'「海」の読み方は？',
   o:['うみ','あめ','かぜ','うた'],c:0,exp:'海 = うみ (sea, ocean)'},
  {id:'k022',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'海から強い風がふいてきた。',a:'「強い」の読み方は？',
   o:['おもい','あまい','すごい','つよい'],c:3,exp:'強い = つよい (strong)'},
  {id:'k023',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'海から強い風がふいてきた。',a:'「風」の読み方は？',
   o:['かべ','かばん','かぜ','かぎ'],c:2,exp:'風 = かぜ (wind)'},
  {id:'k024',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'川で魚をとりました。今日の夕飯はその魚を使った料理にします。',a:'「魚」の読み方は？',
   o:['こめ','さかな','にく','やさい'],c:1,exp:'魚 = さかな (fish)'},
  {id:'k025',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'川で魚をとりました。今日の夕飯はその魚を使った料理にします。',a:'「夕飯」の読み方は？',
   o:['ちゅうはん','ゆうはん','ちゅうしょく','ゆうしょく'],c:1,exp:'夕飯 = ゆうはん (dinner)'},
  {id:'k026',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'川で魚をとりました。今日の夕飯はその魚を使った料理にします。',a:'「使った」の読み方は？',
   o:['つかった','つくった','はって','きった'],c:0,exp:'使う = つかう (to use)'},
  {id:'k027',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'川で魚をとりました。今日の夕飯はその魚を使った料理にします。',a:'「料理」の読み方は？',
   o:['りょり','りょいり','りょうり','りょおい'],c:2,exp:'料理 = りょうり (cooking, dish)'},
  {id:'k028',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'となりの教室から歌が聞こえるので、まどを閉めてください。',a:'「教室」の読み方は？',
   o:['きょうじつ','きゅうしつ','きゅうじつ','きょうしつ'],c:3,exp:'教室 = きょうしつ (classroom)'},
  {id:'k029',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji-reading',
   s:'となりの教室から歌が聞こえるので、まどを閉めてください。',a:'「歌」の読み方は？',
   o:['うた','おた','きえ','こえ'],c:0,exp:'歌 = うた (song)'},
  {id:'k030',type:'kanji',category:'漢字',difficulty:'medium',lesson:27,gp:'kanji-reading',
   s:'となりの教室から歌が聞こえるので、まどを閉めてください。',a:'「閉めて」の読み方は？',
   o:['あめて','とめて','しめて','やめて'],c:2,exp:'閉める = しめる (to close)'},

  // ── VOCABULARY ─────────────────────────────────────────
  {id:'v001',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'seasons',
   s:'日本では、はる·なつ·あき·ふゆの四つの＿＿があります。',a:'正しい言葉を選んでください。',
   o:['てんき','きぶん','きおん','きせつ'],c:3,exp:'きせつ (季節) = seasons'},
  {id:'v002',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'〜てしまう',
   s:'きのうならったことをもう＿＿しまいました。',a:'正しい言葉を選んでください。',
   o:['わすれて','すてて','なくして','とって'],c:0,exp:'わすれてしまいました = accidentally forgot'},
  {id:'v003',type:'vocab',category:'語彙',difficulty:'medium',lesson:27,gp:'katakana',
   s:'シャツのうりばは３がいです。あの＿＿でいってください。',a:'正しい言葉を選んでください。',
   o:['ドア','タクシー','サンダル','エスカレーター'],c:3,exp:'エスカレーター = escalator'},
  {id:'v004',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'adjectives',
   s:'あまり勉強しなかったので、テストのてんが＿＿です。',a:'正しい言葉を選んでください。',
   o:['しんぱい','きけん','あんぜん','あんしん'],c:0,exp:'しんぱい (心配) = worried'},
  {id:'v005',type:'vocab',category:'語彙',difficulty:'medium',lesson:27,gp:'adverbs',
   s:'おもしろいえいがだと聞いたので、＿＿みたいです。',a:'正しい言葉を選んでください。',
   o:['たぶん','そんなに','ぜひ','きゅうに'],c:2,exp:'ぜひ = by all means, definitely'},
  {id:'v006',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'katakana',
   s:'たかださんは＿＿をしながらだいがくにかよっています。',a:'正しい言葉を選んでください。',
   o:['オートバイ','デパート','アルバイト','カレンダー'],c:2,exp:'アルバイト = part-time job'},
  {id:'v007',type:'vocab',category:'語彙',difficulty:'medium',lesson:27,gp:'clothing',
   s:'はなこさんは白いスカートと＿＿をはいています。',a:'正しい言葉を選んでください。',
   o:['セーター','ハンカチ','サンダル','オーバー'],c:2,exp:'サンダル = sandals (はく = wear on feet)'},
  {id:'v008',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'gift-giving',
   s:'父はとうきょうへ行くと、いつも＿＿をかってきてくれます。',a:'正しい言葉を選んでください。',
   o:['おまつり','おれい','おみやげ','おいわい'],c:2,exp:'おみやげ (お土産) = souvenir/gift from trip'},
  {id:'v009',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'katakana',
   s:'あのあたらしい＿＿はデパートです。',a:'正しい言葉を選んでください。',
   o:['アパート','ホテル','プール','ビル'],c:3,exp:'ビル = building'},
  {id:'v010',type:'vocab',category:'語彙',difficulty:'easy',lesson:26,gp:'activities',
   s:'じゅぎょうがおわってから、まいにち、ピンポンの＿＿をします。',a:'正しい言葉を選んでください。',
   o:['しゅみ','うんどう','れんしゅう','しゅうかん'],c:2,exp:'れんしゅう (練習) = practice'},

  // ── GRAMMAR ────────────────────────────────────────────
  {id:'g001',type:'grammar',category:'文法',difficulty:'easy',lesson:26,gp:'〜てあげる',
   s:'友達が重い荷物を持っていたので＿＿。',a:'正しい形を選んでください。',
   o:['もってあげました','もってもらいました','もってくれました','もっていました'],c:0,
   exp:'〜てあげる = I do something for someone else'},
  {id:'g002',type:'grammar',category:'文法',difficulty:'easy',lesson:26,gp:'〜てくれる',
   s:'先生がわからない問題を説明＿＿。',a:'正しい形を選んでください。',
   o:['してあげました','してもらいました','してくれました','しました'],c:2,
   exp:'〜てくれる = someone does something for me'},
  {id:'g003',type:'grammar',category:'文法',difficulty:'easy',lesson:26,gp:'〜てもらう',
   s:'私は弟に宿題を手伝って＿＿。',a:'正しい形を選んでください。',
   o:['あげました','くれました','もらいました','やりました'],c:2,
   exp:'〜てもらう = I receive the benefit of someone\'s action'},
  {id:'g004',type:'grammar',category:'文法',difficulty:'medium',lesson:26,gp:'〜てあげる/くれる/もらう',
   s:'母は毎朝おべんとうを作って＿＿。（私のために）',a:'正しい形を選んでください。',
   o:['あげます','もらいます','くれます','やります'],c:2,
   exp:'Mother → me: teacher gives benefit to me = くれます'},
  {id:'g005',type:'grammar',category:'文法',difficulty:'easy',lesson:27,gp:'〜てしまう',
   s:'大切なメールをまちがえて消して＿＿。',a:'正しい形を選んでください。',
   o:['みました','おきました','しまいました','あげました'],c:2,
   exp:'〜てしまう = accidentally did / regret'},
  {id:'g006',type:'grammar',category:'文法',difficulty:'easy',lesson:27,gp:'〜てしまう',
   s:'財布を家に忘れて＿＿ので、何も買えませんでした。',a:'正しい形を選んでください。',
   o:['しまった','みた','おいた','くれた'],c:0,
   exp:'〜てしまった = I (unfortunately) left it behind'},
  {id:'g007',type:'grammar',category:'文法',difficulty:'medium',lesson:28,gp:'〜ておく',
   s:'パーティーの前に食べ物を買って＿＿ました。',a:'正しい形を選んでください。',
   o:['み','あげ','おき','しまい'],c:2,
   exp:'〜ておく = to do something in advance'},
  {id:'g008',type:'grammar',category:'文法',difficulty:'medium',lesson:28,gp:'〜ておく',
   s:'旅行のまえに地図を調べて＿＿ほうがいいですよ。',a:'正しい形を選んでください。',
   o:['みた','おいた','しまった','くれた'],c:1,
   exp:'〜ておく = prepare beforehand'},
  {id:'g009',type:'grammar',category:'文法',difficulty:'easy',lesson:27,gp:'〜てみる',
   s:'このお菓子、おいしそうですね。一つ食べて＿＿ください。',a:'正しい形を選んでください。',
   o:['あげて','くれて','みて','しまって'],c:2,
   exp:'〜てみる = to try doing something'},
  {id:'g010',type:'grammar',category:'文法',difficulty:'medium',lesson:28,gp:'〜ているところ',
   s:'今、ちょうどごはんを食べて＿＿です。あとで電話します。',a:'正しい形を選んでください。',
   o:['いたところ','いるところ','おくところ','みるところ'],c:1,
   exp:'〜ているところ = in the middle of doing (right now)'},
  {id:'g011',type:'grammar',category:'文法',difficulty:'medium',lesson:28,gp:'〜たばかり',
   s:'さっき昼ごはんを食べた＿＿なので、おなかがいっぱいです。',a:'正しい形を選んでください。',
   o:['ところ','ばかり','まま','つもり'],c:1,
   exp:'〜たばかり = just did something (very recently)'},
  {id:'g012',type:'grammar',category:'文法',difficulty:'hard',lesson:28,gp:'〜まま',
   s:'テレビをつけた＿＿寝てしまいました。',a:'正しい形を選んでください。',
   o:['ところ','ばかり','まま','つもり'],c:2,
   exp:'〜まま = left in that state (TV still on while sleeping)'},
  {id:'g013',type:'grammar',category:'文法',difficulty:'medium',lesson:27,gp:'potential form',
   s:'もっと速く＿＿ように、毎日練習しています。',a:'正しい形を選んでください。',
   o:['はしる','はしれる','はしった','はしっている'],c:1,
   exp:'〜ように + potential = practice so I can do something'},
  {id:'g014',type:'grammar',category:'文法',difficulty:'easy',lesson:26,gp:'〜ながら',
   s:'音楽を聴き＿＿勉強するのは好きじゃないです。',a:'正しい形を選んでください。',
   o:['ながら','まま','ところ','ばかり'],c:0,
   exp:'〜ながら = while doing X, do Y simultaneously'},
  {id:'g015',type:'grammar',category:'文法',difficulty:'challenge',lesson:28,gp:'〜てしまう',
   s:'新しいスマホを買ったばかりなのに、もう壊して＿＿。どうしよう…',a:'正しい形を選んでください。',
   o:['みました','おきました','しまいました','もらいました'],c:2,
   exp:'〜てしまいました = strong regret about breaking something'},
  {id:'g016',type:'grammar',category:'文法',difficulty:'challenge',lesson:26,gp:'〜てくれる vs 〜てもらう',
   s:'先生は私に漢字を教えて＿＿。（先生が私に）',a:'正しい形を選んでください。',
   o:['あげました','くれました','もらいました','やりました'],c:1,
   exp:'先生 → 私: teacher gives benefit to me = くれました'},
  {id:'g017',type:'grammar',category:'文法',difficulty:'challenge',lesson:28,gp:'〜ておく',
   s:'明日プレゼンがあるので、今日スライドを準備して＿＿ました。',a:'正しい形を選んでください。',
   o:['み','あげ','おき','しまい'],c:2,
   exp:'〜ておく = did it in advance to be ready for tomorrow'},
  {id:'g018',type:'grammar',category:'文法',difficulty:'challenge',lesson:28,gp:'〜たばかり vs 〜ているところ',
   s:'「今何をしていますか？」「ちょうど宿題を終わらせた＿＿です。」',a:'正しい形を選んでください。',
   o:['まま','ばかり','ところ','ながら'],c:1,
   exp:'〜たばかり = just finished (moments ago)'},

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
   o:['つもり','予定','計画','思い'],c:1,exp:'Noun + の + 予定です = It is scheduled that... (Objective fact, unlike つもり which is personal intention).'},

  // Extra questions for L26
  {id:'q26_k1',type:'kanji',category:'漢字',difficulty:'easy',lesson:26,gp:'kanji',
   s:'自分で旅行を計画するのは楽しいです。',a:'「自分」の読み方は？',
   o:['じぶん','ちっぷん','じっぷん','ちぶん'],c:0,exp:'自分 = じぶん (oneself)'},
  {id:'q26_v1',type:'vocab',category:'語彙',difficulty:'medium',lesson:26,gp:'vocab',
   s:'子どもに ＿＿ をかってやりました。とてもよろこびました。',a:'正しい言葉を選んでください。',
   o:['にんぎょう','おみやげ','くすり','でんしゃ'],c:0,exp:'にんぎょう (人形) = doll'},
  {id:'q26_g1',type:'grammar',category:'文法',difficulty:'hard',lesson:26,gp:'〜てくれる',
   s:'先生がわからない問題を説明＿＿。',a:'正しい形を選んでください。',
   o:['してあげました','してもらいました','してくれました','しました'],c:2,
   exp:'〜てくれる = someone (the teacher) does something for me. The subject is the giver.'}
];

// ============================================================================
// HIGH QUALITY FLASHCARD BANK (Lessons 26 - 31)
// ============================================================================
const FLASHCARDS = [
  {id:'f001',lesson:26,type:'vocab',front:'旅行',reading:'りょこう',meaning:'travel, trip',
   example:'来年、日本へ旅行に行きたいです。',exampleReading:'らいねん、にほんへりょこうにいきたいです。',
   exampleMeaning:'I want to travel to Japan next year.'},
  {id:'f002',lesson:26,type:'vocab',front:'計画',reading:'けいかく',meaning:'plan, schedule',
   example:'旅行の計画を立てました。',exampleReading:'りょこうのけいかくをたてました。',
   exampleMeaning:'I made a plan for the trip.'},
  {id:'f003',lesson:27,type:'vocab',front:'地下鉄',reading:'ちかてつ',meaning:'subway, underground train',
   example:'毎日地下鉄で会社に行きます。',exampleReading:'まいにちちかてつでかいしゃにいきます。',
   exampleMeaning:'I go to work by subway every day.'},
  {id:'f004',lesson:27,type:'vocab',front:'大学',reading:'だいがく',meaning:'university, college',
   example:'姉は大学で日本語を勉強しています。',exampleReading:'あねはだいがくでにほんごをべんきょうしています。',
   exampleMeaning:'My older sister is studying Japanese at university.'},
  {id:'f005',lesson:26,type:'vocab',front:'食事',reading:'しょくじ',meaning:'meal, dining',
   example:'家族と一緒に食事をするのが好きです。',exampleReading:'かぞくといっしょにしょくじをするのがすきです。',
   exampleMeaning:'I like dining together with my family.'},
  {id:'f006',lesson:26,type:'vocab',front:'用意',reading:'ようい',meaning:'preparation, getting ready',
   example:'パーティーの用意ができました。',exampleReading:'パーティーのよういができました。',
   exampleMeaning:'The preparations for the party are done.'},
  {id:'f007',lesson:26,type:'vocab',front:'趣味',reading:'しゅみ',meaning:'hobby, interest',
   example:'私の趣味は料理を作ることです。',exampleReading:'わたしのしゅみはりょうりをつくることです。',
   exampleMeaning:'My hobby is cooking.'},
  {id:'f008',lesson:28,type:'vocab',front:'物語',reading:'ものがたり',meaning:'story, tale',
   example:'おばあさんが子どもたちに物語を話してくれた。',exampleReading:'おばあさんがこどもたちにものがたりをはなしてくれた。',
   exampleMeaning:'Grandma told the children a story.'},
  {id:'f009',lesson:27,type:'vocab',front:'人形',reading:'にんぎょう',meaning:'doll, puppet',
   example:'日本の人形はとてもきれいです。',exampleReading:'にほんのにんぎょうはとてもきれいです。',
   exampleMeaning:'Japanese dolls are very beautiful.'},
  {id:'f010',lesson:26,type:'vocab',front:'優しい',reading:'やさしい',meaning:'kind, gentle, easy',
   example:'田中先生はとても優しい先生です。',exampleReading:'たなかせんせいはとてもやさしいせんせいです。',
   exampleMeaning:'Tanaka-sensei is a very kind teacher.'},
  {id:'f011',lesson:26,type:'vocab',front:'料理',reading:'りょうり',meaning:'cooking, dish, cuisine',
   example:'母の料理はいつもおいしいです。',exampleReading:'ははのりょうりはいつもおいしいです。',
   exampleMeaning:'My mother\'s cooking is always delicious.'},
  {id:'f012',lesson:27,type:'vocab',front:'教室',reading:'きょうしつ',meaning:'classroom',
   example:'教室に学生が二十人います。',exampleReading:'きょうしつにがくせいがにじゅうにんいます。',
   exampleMeaning:'There are twenty students in the classroom.'},
  {id:'f013',lesson:26,type:'vocab',front:'季節',reading:'きせつ',meaning:'season',
   example:'日本には四つの季節があります。',exampleReading:'にほんにはよっつのきせつがあります。',
   exampleMeaning:'Japan has four seasons.'},
  {id:'f014',lesson:26,type:'vocab',front:'アルバイト',reading:'アルバイト',meaning:'part-time job',
   example:'大学生のとき、カフェでアルバイトをしました。',exampleReading:'だいがくせいのとき、カフェでアルバイトをしました。',
   exampleMeaning:'When I was a university student, I worked part-time at a cafe.'},
  {id:'f015',lesson:26,type:'vocab',front:'おみやげ',reading:'おみやげ',meaning:'souvenir, gift from a trip',
   example:'京都へ行ったとき、おみやげを買いました。',exampleReading:'きょうとへいったとき、おみやげをかいました。',
   exampleMeaning:'When I went to Kyoto, I bought souvenirs.'},
  {id:'f016',lesson:26,type:'vocab',front:'練習',reading:'れんしゅう',meaning:'practice',
   example:'毎日日本語の練習をしています。',exampleReading:'まいにちにほんごのれんしゅうをしています。',
   exampleMeaning:'I practice Japanese every day.'},
  {id:'f017',lesson:27,type:'vocab',front:'急に',reading:'きゅうに',meaning:'suddenly, all of a sudden',
   example:'急に雨が降ってきました。',exampleReading:'きゅうにあめがふってきました。',
   exampleMeaning:'It suddenly started to rain.'},
  {id:'f018',lesson:28,type:'vocab',front:'お見舞い',reading:'おみまい',meaning:'hospital visit, get-well visit',
   example:'入院した友達にお見舞いに行きました。',exampleReading:'にゅういんしたともだちにおみまいにいきました。',
   exampleMeaning:'I visited my hospitalized friend.'},
  {id:'f019',lesson:27,type:'vocab',front:'寂しい',reading:'さびしい',meaning:'lonely, lonesome',
   example:'一人で住んでいると、時々寂しいです。',exampleReading:'ひとりでそんでいると、ときどきさびしいです。',
   exampleMeaning:'Living alone, I sometimes feel lonely.'},
  {id:'f020',lesson:26,type:'vocab',front:'自分',reading:'じぶん',meaning:'oneself, myself',
   example:'自分で料理を作るのは楽しいです。',exampleReading:'じぶんでりょうりをつくるのはたのしいです。',
   exampleMeaning:'It\'s fun to cook for yourself.'},
  // Grammar flashcards
  {id:'f021',lesson:26,type:'grammar',front:'〜てあげる',reading:'〜てあげる',meaning:'to do something for someone (you give)',
   example:'友達に日本語を教えてあげました。',exampleReading:'ともだちににほんごをおしえてあげました。',
   exampleMeaning:'I taught Japanese to my friend (as a favor).'},
  {id:'f022',lesson:26,type:'grammar',front:'〜てくれる',reading:'〜てくれる',meaning:'someone does something for me (they give)',
   example:'先生が漢字を説明してくれました。',exampleReading:'せんせいがかんじをせつめいしてくれました。',
   exampleMeaning:'The teacher explained the kanji for me.'},
  {id:'f023',lesson:26,type:'grammar',front:'〜てもらう',reading:'〜てもらう',meaning:'to receive the favor of someone doing something',
   example:'母に弁当を作ってもらいました。',exampleReading:'ははにべんとうをつくってもらいました。',
   exampleMeaning:'I had my mother make me a bento.'},
  {id:'f024',lesson:27,type:'grammar',front:'〜てしまう',reading:'〜てしまう',meaning:'to do completely / accidentally (with regret)',
   example:'宿題を忘れてしまいました。',exampleReading:'しゅくだいをわすれてしまいました。',
   exampleMeaning:'I accidentally forgot my homework.'},
  {id:'f025',lesson:28,type:'grammar',front:'〜ておく',reading:'〜ておく',meaning:'to do in advance / leave in a state',
   example:'旅行の前にホテルを予約しておきます。',exampleReading:'りょこうのまえにホテルをよやくしておきます。',
   exampleMeaning:'I\'ll book the hotel in advance before the trip.'},
  {id:'f026',lesson:27,type:'grammar',front:'〜てみる',reading:'〜てみる',meaning:'to try doing something',
   example:'新しいレストランで食べてみました。',exampleReading:'あたらしいレストランでたべてみました。',
   exampleMeaning:'I tried eating at the new restaurant.'},
  {id:'f027',lesson:28,type:'grammar',front:'〜ているところ',reading:'〜ているところ',meaning:'in the middle of doing (right now)',
   example:'今、ちょうど料理しているところです。',exampleReading:'いま、ちょうどりょうりしているところです。',
   exampleMeaning:'I\'m right in the middle of cooking now.'},
  {id:'f028',lesson:28,type:'grammar',front:'〜たばかり',reading:'〜たばかり',meaning:'just did something (very recently)',
   example:'日本語の勉強を始めたばかりです。',exampleReading:'にほんごのべんきょうをはじめたばかりです。',
   exampleMeaning:'I just started studying Japanese.'},
  {id:'f029',lesson:28,type:'grammar',front:'〜まま',reading:'〜まま',meaning:'leaving something in a state / as is',
   example:'電気をつけたまま寝てしまいました。',exampleReading:'でんきをつけたままねてしまいました。',
   exampleMeaning:'I fell asleep with the lights still on.'},
  {id:'f030',lesson:27,type:'grammar',front:'potential form',reading:'〜られる / 〜える',meaning:'can do / be able to do',
   example:'ひらがなが読めるようになりました。',exampleReading:'ひらがながよめるようになりました。',
   exampleMeaning:'I became able to read hiragana.'},
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
   example:'使ったら、元の所に戻してください。',exampleReading:'つかったら、もとのところにもどしてください。',exampleMeaning:'When you finish using it, return it to the original location.'},
  {id:'f30_5',lesson:30,type:'grammar',front:'〜てある',reading:'transitive verb-te form + ある',meaning:'is done (intentional state)',
   example:'黒板に字が書いてあります。',exampleReading:'こくばんにじがかいてあります。',exampleMeaning:'Words are written on the blackboard (intentionally).'},
  {id:'f30_6',lesson:30,type:'grammar',front:'〜ておく',reading:'verb-te form + おく',meaning:'do in advance / prepare',
   example:'旅行の前にホテルを予約しておきます。',exampleReading:'りょこうのまえにホテルをよやくしておきます。',exampleMeaning:'I will book a hotel in advance before the trip.'},
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
