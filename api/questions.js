// Question Pool — Minna no Nihongo Lessons 26-28
// Each question: { id, lesson, type, difficulty, grammarTag, sentence, ask, options, correct, explanation }
// difficulty: 1=easy, 2=medium, 3=hard, 4=challenge
// type: kanji | vocab | grammar

window.QUESTION_POOL = [

// ==================== KANJI ====================

// --- Lesson 26 kanji ---
{id:"k001",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"自分で旅行を計画するのは楽しいです。",ask:"「自分」の読み方は？",
 options:["じぶん","ちっぷん","じっぷん","ちぶん"],correct:0,
 explanation:"自分（じぶん）= oneself / myself"},

{id:"k002",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"自分で旅行を計画するのは楽しいです。",ask:"「旅行」の読み方は？",
 options:["りゅうこ","りょうこ","りょこう","りゅこう"],correct:2,
 explanation:"旅行（りょこう）= travel / trip"},

{id:"k003",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"自分で旅行を計画するのは楽しいです。",ask:"「計画」の読み方は？",
 options:["けいかく","けいが","げいかく","けが"],correct:0,
 explanation:"計画（けいかく）= plan / planning"},

{id:"k004",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"自分で旅行を計画するのは楽しいです。",ask:"「楽しい」の読み方は？",
 options:["うれしい","うつくしい","たのしい","いそがしい"],correct:2,
 explanation:"楽しい（たのしい）= fun / enjoyable"},

{id:"k005",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"この学生は毎日地下鉄で大学に通っています。",ask:"「地下鉄」の読み方は？",
 options:["じげてつ","じがてつ","ちげてつ","ちかてつ"],correct:3,
 explanation:"地下鉄（ちかてつ）= subway / underground"},

{id:"k006",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"この学生は毎日地下鉄で大学に通っています。",ask:"「大学」の読み方は？",
 options:["たいがく","だいかく","たいかく","だいがく"],correct:3,
 explanation:"大学（だいがく）= university"},

{id:"k007",lesson:26,type:"kanji",difficulty:2,grammarTag:"kanji-basic",
 sentence:"この学生は毎日地下鉄で大学に通っています。",ask:"「通って」の読み方は？",
 options:["かえって","かよって","かおって","いって"],correct:1,
 explanation:"通う（かよう）= to commute / to go regularly"},

{id:"k008",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-family",
 sentence:"姉がいつも食事の用意をしてくれます。",ask:"「姉」の読み方は？",
 options:["いもうと","おとうと","あね","あに"],correct:2,
 explanation:"姉（あね）= older sister"},

{id:"k009",lesson:26,type:"kanji",difficulty:1,grammarTag:"kanji-basic",
 sentence:"姉がいつも食事の用意をしてくれます。",ask:"「食事」の読み方は？",
 options:["しょくじ","しょうじ","そうじ","そくじ"],correct:0,
 explanation:"食事（しょくじ）= meal / dining"},

{id:"k010",lesson:26,type:"kanji",difficulty:2,grammarTag:"kanji-basic",
 sentence:"姉がいつも食事の用意をしてくれます。",ask:"「用意」の読み方は？",
 options:["よい","ようい","よじ","ようじ"],correct:1,
 explanation:"用意（ようい）= preparation / readiness"},

{id:"k011",lesson:27,type:"kanji",difficulty:2,grammarTag:"kanji-verb",
 sentence:"彼女はこうちょくしたようにうごかない。",ask:"「うごかない」の漢字は？",
 options:["動かない","働かない","重かない","衝かない"],correct:0,
 explanation:"動く（うごく）= to move; 動かない = doesn't move"},

{id:"k012",lesson:27,type:"kanji",difficulty:3,grammarTag:"kanji-place",
 sentence:"奈良と京都は日本の古い都です。",ask:"「都」の読み方は？",
 options:["みなと","ふるさと","みやこ","いなか"],correct:2,
 explanation:"都（みやこ）= capital city"},

{id:"k013",lesson:27,type:"kanji",difficulty:2,grammarTag:"kanji-noun",
 sentence:"趣味としてじゅうどうを習うつもりです。",ask:"「趣味」の読み方は？",
 options:["しゅみ","きょうみ","ちゅみ","ちょうみ"],correct:0,
 explanation:"趣味（しゅみ）= hobby"},

{id:"k014",lesson:27,type:"kanji",difficulty:2,grammarTag:"kanji-adverb",
 sentence:"きゅうに空が暗くなりました。",ask:"「きゅうに」の漢字は？",
 options:["早に","速に","突に","急に"],correct:3,
 explanation:"急に（きゅうに）= suddenly"},

{id:"k015",lesson:27,type:"kanji",difficulty:2,grammarTag:"kanji-noun",
 sentence:"兄が入院したので、花を持ってお見舞いに行った。",ask:"「お見舞い」の読み方は？",
 options:["おみあい","おみまい","おけんまい","おけんあい"],correct:1,
 explanation:"お見舞い（おみまい）= hospital visit"},

{id:"k016",lesson:27,type:"kanji",difficulty:3,grammarTag:"kanji-verb",
 sentence:"のどがかわいています。水が飲みたいです。",ask:"「かわいて」の漢字は？",
 options:["乾いて","変いて","掛いて","渇いて"],correct:3,
 explanation:"渇く（かわく）= to be thirsty; 乾く（かわく）= to dry — different kanji!"},

{id:"k017",lesson:27,type:"kanji",difficulty:1,grammarTag:"kanji-adj",
 sentence:"先生の奥さんはとても優しいです。",ask:"「優しい」の読み方は？",
 options:["きびしい","やさしい","たのしい","したしい"],correct:1,
 explanation:"優しい（やさしい）= kind / gentle"},

{id:"k018",lesson:27,type:"kanji",difficulty:2,grammarTag:"kanji-noun",
 sentence:"ディズニーランドで姉に人形を買ってやった。",ask:"「人形」の読み方は？",
 options:["にんけい","じんけい","にんぎょう","じんぎょう"],correct:2,
 explanation:"人形（にんぎょう）= doll"},

{id:"k019",lesson:28,type:"kanji",difficulty:2,grammarTag:"kanji-noun",
 sentence:"おばあさんが昔のいろんな物語を話してくれた。",ask:"「物語」の読み方は？",
 options:["ものはなし","ものばなし","ものかたり","ものがたり"],correct:3,
 explanation:"物語（ものがたり）= story / tale"},

{id:"k020",lesson:28,type:"kanji",difficulty:2,grammarTag:"kanji-adj",
 sentence:"友達がいなくて、さびしいです。",ask:"「さびしい」の漢字は？",
 options:["悲しい","厳しい","美しい","寂しい"],correct:3,
 explanation:"寂しい（さびしい）= lonely"},

{id:"k021",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-nature",
 sentence:"海から強い風がふいてきた。",ask:"「海」の読み方は？",
 options:["うみ","あめ","かぜ","うた"],correct:0,
 explanation:"海（うみ）= sea / ocean"},

{id:"k022",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-adj",
 sentence:"海から強い風がふいてきた。",ask:"「強い」の読み方は？",
 options:["おもい","あまい","すごい","つよい"],correct:3,
 explanation:"強い（つよい）= strong"},

{id:"k023",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-nature",
 sentence:"海から強い風がふいてきた。",ask:"「風」の読み方は？",
 options:["かべ","かばん","かぜ","かぎ"],correct:2,
 explanation:"風（かぜ）= wind"},

{id:"k024",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-food",
 sentence:"川で魚をとりました。今日の夕飯はその魚を使った料理にします。",ask:"「魚」の読み方は？",
 options:["こめ","さかな","にく","やさい"],correct:1,
 explanation:"魚（さかな）= fish"},

{id:"k025",lesson:28,type:"kanji",difficulty:2,grammarTag:"kanji-time",
 sentence:"川で魚をとりました。今日の夕飯はその魚を使った料理にします。",ask:"「夕飯」の読み方は？",
 options:["ちゅうはん","ゆうはん","ちゅうしょく","ゆうしょく"],correct:1,
 explanation:"夕飯（ゆうはん）= dinner / evening meal"},

{id:"k026",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-verb",
 sentence:"川で魚をとりました。今日の夕飯はその魚を使った料理にします。",ask:"「使った」の読み方は？",
 options:["つかった","つくった","はって","きった"],correct:0,
 explanation:"使う（つかう）= to use"},

{id:"k027",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-food",
 sentence:"川で魚をとりました。今日の夕飯はその魚を使った料理にします。",ask:"「料理」の読み方は？",
 options:["りょり","りょいり","りょうり","りょおい"],correct:2,
 explanation:"料理（りょうり）= cooking / dish"},

{id:"k028",lesson:28,type:"kanji",difficulty:2,grammarTag:"kanji-place",
 sentence:"となりの教室から歌が聞こえるので、まどを閉めてください。",ask:"「教室」の読み方は？",
 options:["きょうじつ","きゅうしつ","きゅうじつ","きょうしつ"],correct:3,
 explanation:"教室（きょうしつ）= classroom"},

{id:"k029",lesson:28,type:"kanji",difficulty:1,grammarTag:"kanji-art",
 sentence:"となりの教室から歌が聞こえるので、まどを閉めてください。",ask:"「歌」の読み方は？",
 options:["うた","おた","きえ","こえ"],correct:0,
 explanation:"歌（うた）= song"},

{id:"k030",lesson:28,type:"kanji",difficulty:2,grammarTag:"kanji-verb",
 sentence:"となりの教室から歌が聞こえるので、まどを閉めてください。",ask:"「閉めて」の読み方は？",
 options:["あめて","とめて","しめて","やめて"],correct:2,
 explanation:"閉める（しめる）= to close / shut"},

// Extra kanji challenge questions
{id:"k031",lesson:26,type:"kanji",difficulty:3,grammarTag:"kanji-family",
 sentence:"兄は毎朝早く起きて運動します。",ask:"「兄」の読み方は？",
 options:["あに","あね","おとうと","いもうと"],correct:0,
 explanation:"兄（あに）= older brother"},

{id:"k032",lesson:27,type:"kanji",difficulty:3,grammarTag:"kanji-noun",
 sentence:"病院で医者に診てもらいました。",ask:"「病院」の読み方は？",
 options:["びょいん","びょうえん","びょうい","びょういん"],correct:3,
 explanation:"病院（びょういん）= hospital"},

{id:"k033",lesson:27,type:"kanji",difficulty:3,grammarTag:"kanji-noun",
 sentence:"この薬を飲んだら、すぐに元気になりました。",ask:"「薬」の読み方は？",
 options:["くすり","やく","やっき","くすび"],correct:0,
 explanation:"薬（くすり）= medicine"},

{id:"k034",lesson:28,type:"kanji",difficulty:4,grammarTag:"kanji-verb",
 sentence:"窓を開けたまま、出かけてしまいました。",ask:"「開けた」の読み方は？",
 options:["しめた","あけた","とめた","つけた"],correct:1,
 explanation:"開ける（あける）= to open; 閉める（しめる）= to close"},

{id:"k035",lesson:26,type:"kanji",difficulty:4,grammarTag:"kanji-adverb",
 sentence:"彼はいつも親切に教えてくれます。",ask:"「親切」の読み方は？",
 options:["しんさつ","しんせつ","しんきり","おやきり"],correct:1,
 explanation:"親切（しんせつ）= kindness / kind"},

// ==================== VOCABULARY ====================

{id:"v001",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-seasons",
 sentence:"日本では、はる·なつ·あき·ふゆの四つの ＿＿ があります。",ask:"正しい言葉を選んでください。",
 options:["てんき","きぶん","きおん","きせつ"],correct:3,
 explanation:"きせつ（季節）= seasons; There are 4 seasons in Japan"},

{id:"v002",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-action",
 sentence:"きのうならったことをもう ＿＿ しまいました。",ask:"正しい言葉を選んでください。",
 options:["わすれて","すてて","なくして","とって"],correct:0,
 explanation:"わすれてしまいました = accidentally forgot (〜てしまう pattern)"},

{id:"v003",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-place",
 sentence:"シャツのうりばは、このうえの３がいです。あの ＿＿ でいってください。",ask:"正しい言葉を選んでください。",
 options:["ドア","タクシー","サンダル","エスカレーター"],correct:3,
 explanation:"エスカレーター = escalator; うりば = sales floor"},

{id:"v004",lesson:26,type:"vocab",difficulty:2,grammarTag:"vocab-emotion",
 sentence:"あまり勉強しなかったので、テストのてんが ＿＿ です。",ask:"正しい言葉を選んでください。",
 options:["しんぱい","きけん","あんぜん","あんしん"],correct:0,
 explanation:"しんぱい（心配）= worried / anxious about the test score"},

{id:"v005",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-adverb",
 sentence:"おもしろいえいがだと聞いたので、＿＿ みたいです。",ask:"正しい言葉を選んでください。",
 options:["たぶん","そんなに","ぜひ","きゅうに"],correct:2,
 explanation:"ぜひ = by all means / definitely (expresses strong desire)"},

{id:"v006",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-work",
 sentence:"たかださんは ＿＿ をしながらだいがくにかよっています。",ask:"正しい言葉を選んでください。",
 options:["オートバイ","デパート","アルバイト","カレンダー"],correct:2,
 explanation:"アルバイト = part-time job (from German: Arbeit)"},

{id:"v007",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-clothing",
 sentence:"はなこさんは白いスカートと ＿＿ をはいています。",ask:"正しい言葉を選んでください。",
 options:["セーター","ハンカチ","サンダル","オーバー"],correct:2,
 explanation:"サンダル = sandals; はく = wear on feet/legs"},

{id:"v008",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-gift",
 sentence:"父はとうきょうへ行くと、いつも ＿＿ をかってきてくれます。",ask:"正しい言葉を選んでください。",
 options:["おまつり","おれい","おみやげ","おいわい"],correct:2,
 explanation:"おみやげ（お土産）= souvenir / gift from a trip"},

{id:"v009",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-place",
 sentence:"あのあたらしい ＿＿ はデパートです。",ask:"正しい言葉を選んでください。",
 options:["アパート","ホテル","プール","ビル"],correct:3,
 explanation:"ビル = building (from English: building)"},

{id:"v010",lesson:26,type:"vocab",difficulty:1,grammarTag:"vocab-activity",
 sentence:"じゅぎょうがおわってから、まいにち、ピンポンの ＿＿ をします。",ask:"正しい言葉を選んでください。",
 options:["しゅみ","うんどう","れんしゅう","しゅうかん"],correct:2,
 explanation:"れんしゅう（練習）= practice"},

{id:"v011",lesson:27,type:"vocab",difficulty:2,grammarTag:"vocab-health",
 sentence:"かぜをひいたので、はやく ＿＿ に行きました。",ask:"正しい言葉を選んでください。",
 options:["びょういん","がっこう","ぎんこう","ゆうびんきょく"],correct:0,
 explanation:"びょういん（病院）= hospital"},

{id:"v012",lesson:27,type:"vocab",difficulty:2,grammarTag:"vocab-emotion",
 sentence:"プレゼントをもらって、とても ＿＿ でした。",ask:"正しい言葉を選んでください。",
 options:["かなしい","うれしい","さびしい","こわい"],correct:1,
 explanation:"うれしい（嬉しい）= happy / glad"},

{id:"v013",lesson:27,type:"vocab",difficulty:2,grammarTag:"vocab-hobby",
 sentence:"わたしの ＿＿ はえいがをみることです。",ask:"正しい言葉を選んでください。",
 options:["しごと","しゅみ","せいかつ","けんこう"],correct:1,
 explanation:"しゅみ（趣味）= hobby"},

{id:"v014",lesson:27,type:"vocab",difficulty:3,grammarTag:"vocab-manner",
 sentence:"かれは ＿＿ に車を運転します。いつもスピードが速すぎます。",ask:"正しい言葉を選んでください。",
 options:["しずかに","ていねいに","きけんに","あんぜんに"],correct:2,
 explanation:"きけんに（危険に）= dangerously; 安全に（あんぜんに）= safely"},

{id:"v015",lesson:27,type:"vocab",difficulty:2,grammarTag:"vocab-time",
 sentence:"バスは ＿＿ 来ません。もう30分待っています。",ask:"正しい言葉を選んでください。",
 options:["なかなか","たいてい","だんだん","もうすぐ"],correct:0,
 explanation:"なかなか〜ない = not easily / just won't come"},

{id:"v016",lesson:27,type:"vocab",difficulty:3,grammarTag:"vocab-comparison",
 sentence:"このレストランは前より ＿＿ なりました。",ask:"正しい言葉を選んでください。",
 options:["にぎやかに","しずかに","にぎやかな","しずかな"],correct:0,
 explanation:"にぎやかに（なる）= became lively (use に with なる for na-adjectives)"},

{id:"v017",lesson:28,type:"vocab",difficulty:2,grammarTag:"vocab-nature",
 sentence:"秋になると、木の ＿＿ が赤や黄色になります。",ask:"正しい言葉を選んでください。",
 options:["えだ","はな","は","み"],correct:2,
 explanation:"は（葉）= leaves; えだ = branch; はな = flower; み = fruit"},

{id:"v018",lesson:28,type:"vocab",difficulty:2,grammarTag:"vocab-feeling",
 sentence:"ひとりで外国に住んでいると、時々 ＿＿ です。",ask:"正しい言葉を選んでください。",
 options:["たのしい","にぎやか","さびしい","うれしい"],correct:2,
 explanation:"さびしい（寂しい）= lonely"},

{id:"v019",lesson:28,type:"vocab",difficulty:3,grammarTag:"vocab-manner",
 sentence:"あの店員さんは ＿＿ 説明してくれたので、よくわかりました。",ask:"正しい言葉を選んでください。",
 options:["きゅうに","ていねいに","とつぜん","やっと"],correct:1,
 explanation:"ていねいに（丁寧に）= politely / carefully"},

{id:"v020",lesson:28,type:"vocab",difficulty:3,grammarTag:"vocab-result",
 sentence:"3ヶ月練習した ＿＿、やっと泳げるようになりました。",ask:"正しい言葉を選んでください。",
 options:["ので","から","けど","おかげで"],correct:3,
 explanation:"おかげで = thanks to / because of (positive result)"},

{id:"v021",lesson:26,type:"vocab",difficulty:4,grammarTag:"vocab-challenge",
 sentence:"この映画は ＿＿ 感動的で、最後には泣いてしまいました。",ask:"正しい言葉を選んでください。",
 options:["とても","あまり","なかなか","そんなに"],correct:0,
 explanation:"とても = very; あまり（negative）= not very; なかなか（negative）= just won't"},

{id:"v022",lesson:27,type:"vocab",difficulty:4,grammarTag:"vocab-challenge",
 sentence:"電車が ＿＿ ので、会議に遅れてしまいました。",ask:"正しい言葉を選んでください。",
 options:["おくれた","すすんだ","とまった","きた"],correct:0,
 explanation:"おくれる（遅れる）= to be late / delayed"},

{id:"v023",lesson:28,type:"vocab",difficulty:4,grammarTag:"vocab-challenge",
 sentence:"彼女に花を ＿＿ あげたら、とても喜んでくれました。",ask:"正しい言葉を選んでください。",
 options:["かって","かいて","かって","もって"],correct:0,
 explanation:"買って（かって）= bought; 書いて（かいて）= wrote; 持って（もって）= carried"},

// ==================== GRAMMAR ====================

{id:"g001",lesson:26,type:"grammar",difficulty:1,grammarTag:"〜てあげる",
 sentence:"友達が引越しを手伝って___。（私が友達のために）",ask:"正しい形を選んでください。",
 options:["くれました","あげました","もらいました","やりました"],correct:1,
 explanation:"〜てあげる = to do something FOR someone (speaker does it for others)"},

{id:"g002",lesson:26,type:"grammar",difficulty:1,grammarTag:"〜てくれる",
 sentence:"田中さんが駅まで送って___。（田中さんが私のために）",ask:"正しい形を選んでください。",
 options:["あげました","やりました","くれました","もらいました"],correct:2,
 explanation:"〜てくれる = someone does something FOR the speaker"},

{id:"g003",lesson:26,type:"grammar",difficulty:1,grammarTag:"〜てもらう",
 sentence:"医者に薬を出して___。（私は医者にしてもらった）",ask:"正しい形を選んでください。",
 options:["くれました","あげました","やりました","もらいました"],correct:3,
 explanation:"〜てもらう = to have/get someone to do something (speaker receives)"},

{id:"g004",lesson:26,type:"grammar",difficulty:2,grammarTag:"〜てあげる",
 sentence:"子供に本を読んで___。（親が子供のために）",ask:"正しい形を選んでください。",
 options:["くれました","もらいました","あげました","やりました"],correct:3,
 explanation:"〜てやる = to do for someone beneath you (child, pet); informal version of あげる"},

{id:"g005",lesson:26,type:"grammar",difficulty:2,grammarTag:"〜てくれる",
 sentence:"___、本当にありがとうございます。",ask:"正しい完成形を選んでください。",
 options:["手伝ってあげて","手伝ってもらって","手伝ってくれて","手伝っていて"],correct:2,
 explanation:"〜てくれてありがとう = Thank you for doing this for me"},

{id:"g006",lesson:27,type:"grammar",difficulty:1,grammarTag:"〜てしまう",
 sentence:"宿題を___しまいました。（うっかりして）",ask:"正しい形を選んでください。",
 options:["わすれて","わすれる","わすれに","わすれた"],correct:0,
 explanation:"〜てしまう = accidentally did / completed (often with regret)"},

{id:"g007",lesson:27,type:"grammar",difficulty:2,grammarTag:"〜てしまう",
 sentence:"ケーキを全部___。ダイエット中なのに。",ask:"正しい形を選んでください。",
 options:["たべます","たべてしまいました","たべていました","たべました"],correct:1,
 explanation:"〜てしまいました = ended up eating (all of it), with regret"},

{id:"g008",lesson:27,type:"grammar",difficulty:2,grammarTag:"〜ておく",
 sentence:"旅行の前に、ホテルを予約して___。",ask:"正しい形を選んでください。",
 options:["います","おきます","あります","しまいます"],correct:1,
 explanation:"〜ておく = to do in advance / prepare ahead"},

{id:"g009",lesson:27,type:"grammar",difficulty:3,grammarTag:"〜ておく",
 sentence:"会議の前に、資料を___おいてください。",ask:"正しい形を選んでください。",
 options:["よんで","よみて","よんに","よみに"],correct:0,
 explanation:"読んでおいてください = please read it ahead of time (〜ておく)"},

{id:"g010",lesson:27,type:"grammar",difficulty:1,grammarTag:"〜ているところ",
 sentence:"今、ごはんを___ところです。",ask:"正しい形を選んでください。",
 options:["たべる","たべている","たべた","たべて"],correct:1,
 explanation:"〜ているところ = in the middle of doing (right now)"},

{id:"g011",lesson:27,type:"grammar",difficulty:2,grammarTag:"〜たところ",
 sentence:"今、ちょうどごはんを___ところです。",ask:"正しい形を選んでください。（食べ終わった）",
 options:["たべる","たべている","たべた","たべて"],correct:2,
 explanation:"〜たところ = just finished doing (completed a moment ago)"},

{id:"g012",lesson:28,type:"grammar",difficulty:1,grammarTag:"〜たばかり",
 sentence:"この映画は___ばかりなので、まだ見ていません。",ask:"正しい形を選んでください。",
 options:["はじまる","はじまって","はじまった","はじまり"],correct:2,
 explanation:"〜たばかり = just did (recently happened)"},

{id:"g013",lesson:28,type:"grammar",difficulty:2,grammarTag:"〜たばかり",
 sentence:"日本に来た___で、まだ日本語があまり話せません。",ask:"正しい言葉を選んでください。",
 options:["ばかり","ところ","まま","だけ"],correct:0,
 explanation:"来たばかり = just arrived (very recently)"},

{id:"g014",lesson:28,type:"grammar",difficulty:2,grammarTag:"〜まま",
 sentence:"電気をつけた___、寝てしまいました。",ask:"正しい言葉を選んでください。",
 options:["まま","ところ","ばかり","けど"],correct:0,
 explanation:"〜まま = leaving in that state (light still on while sleeping)"},

{id:"g015",lesson:28,type:"grammar",difficulty:3,grammarTag:"〜まま",
 sentence:"靴を履いた___、家に入らないでください。",ask:"正しい言葉を選んでください。",
 options:["ところで","まま","ばかり","から"],correct:1,
 explanation:"靴を履いたまま = with shoes still on (don't enter the house like that)"},

{id:"g016",lesson:28,type:"grammar",difficulty:2,grammarTag:"〜てみる",
 sentence:"一度、日本料理を作って___ください。",ask:"正しい形を選んでください。",
 options:["おいて","みて","しまって","あげて"],correct:1,
 explanation:"〜てみる = to try doing something"},

{id:"g017",lesson:26,type:"grammar",difficulty:3,grammarTag:"〜てあげる",
 sentence:"A:「手伝いましょうか？」B:「ありがとう。じゃ、___ください。」",ask:"正しい形を選んでください。",
 options:["てつだってあげて","てつだってくれて","てつだってもらって","てつだってみて"],correct:1,
 explanation:"〜てくれてください = please do this for me (request)"},

{id:"g018",lesson:27,type:"grammar",difficulty:3,grammarTag:"〜てしまう",
 sentence:"財布を___しまったので、電車に乗れません。",ask:"正しい形を選んでください。",
 options:["なくして","なくす","なくし","なくした"],correct:0,
 explanation:"なくしてしまった = lost it (accidentally, with regret)"},

{id:"g019",lesson:28,type:"grammar",difficulty:4,grammarTag:"〜たばかり",
 sentence:"「もう食べましたか？」「はい、今___ところです。」",ask:"最も自然な表現は？",
 options:["たべたばかりの","たべたばかり","たべているばかり","たべてばかり"],correct:1,
 explanation:"食べたばかり = just ate (very recently). No の needed here."},

{id:"g020",lesson:28,type:"grammar",difficulty:4,grammarTag:"〜まま",
 sentence:"彼は何も___まま、部屋を出て行きました。",ask:"正しい形を選んでください。",
 options:["いわない","いわず","いわなかった","いわない"],correct:0,
 explanation:"何も言わないまま = without saying anything (leaving in that state)"},

];

// Helper: get questions by filters
window.getQuestions = function({ lessons = [26,27,28], types = ['kanji','vocab','grammar'], count = 30, difficulty = null } = {}) {
  let pool = QUESTION_POOL.filter(q =>
    lessons.includes(q.lesson) &&
    types.includes(q.type) &&
    (difficulty === null || q.difficulty <= difficulty)
  );
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
};

// Shuffle options for a question (returns new question with shuffled options)
window.shuffleOptions = function(q) {
  const indices = [0,1,2,3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const newOptions = indices.map(i => q.options[i]);
  const newCorrect = indices.indexOf(q.correct);
  return { ...q, options: newOptions, correct: newCorrect };
};
