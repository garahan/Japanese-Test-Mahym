/* N5 CONTENT — Beginner Japanese (JLPT N5), Lessons 1-3 */
const N5_CONTENT = [
{
  lessonNum:1,topic:"挨拶・自己紹介",topicEn:"Greetings",module:'N5L1',moduleLabel:'N5 L1 — Greetings',lesson:'N5L1',lessonLabel:'Greetings',difficulty:"easy",level:"N5",
  vocabulary:[
    {id:"N5L1v1",word:"こんにちは",reading:"こんにちは",pitch:0,meaning:"hello",example:"こんにちは。",exampleMeaning:"Hello."},
    {id:"N5L1v2",word:"はじめまして",reading:"はじめまして",pitch:4,meaning:"nice to meet you",example:"はじめまして。",exampleMeaning:"Nice to meet you."},
    {id:"N5L1v3",word:"ありがとうございます",reading:"ありがとうございます",pitch:5,meaning:"thank you",example:"ありがとうございます。",exampleMeaning:"Thank you."},
    {id:"N5L1v4",word:"すみません",reading:"すみません",pitch:3,meaning:"excuse me; sorry",example:"すみません、駅はどこですか。",exampleMeaning:"Excuse me, where is the station?"},
    {id:"N5L1v5",word:"おはようございます",reading:"おはようございます",pitch:6,meaning:"good morning",example:"おはようございます。",exampleMeaning:"Good morning."},
    {id:"N5L1v6",word:"こんばんは",reading:"こんばんは",pitch:0,meaning:"good evening",example:"こんばんは。",exampleMeaning:"Good evening."},
    {id:"N5L1v7",word:"さようなら",reading:"さようなら",pitch:4,meaning:"goodbye",example:"さようなら。",exampleMeaning:"Goodbye."},
    {id:"N5L1v8",word:"はい",reading:"はい",pitch:0,meaning:"yes",example:"はい、そうです。",exampleMeaning:"Yes, that's right."},
    {id:"N5L1v9",word:"いいえ",reading:"いいえ",pitch:3,meaning:"no",example:"いいえ、違います。",exampleMeaning:"No, that's wrong."},
    {id:"N5L1v10",word:"名前",reading:"なまえ",pitch:2,meaning:"name",example:"名前は何ですか。",exampleMeaning:"What is your name?"},
    {id:"N5L1v11",word:"私",reading:"わたし",pitch:0,meaning:"I; me",example:"私は学生です。",exampleMeaning:"I am a student."},
    {id:"N5L1v12",word:"先生",reading:"せんせい",pitch:3,meaning:"teacher",example:"先生は日本人です。",exampleMeaning:"The teacher is Japanese."},
    {id:"N5L1v13",word:"学生",reading:"がくせい",pitch:0,meaning:"student",example:"私は学生です。",exampleMeaning:"I am a student."},
    {id:"N5L1v14",word:"会社員",reading:"かいしゃいん",pitch:3,meaning:"company employee",example:"父は会社員です。",exampleMeaning:"My father is a company employee."},
    {id:"N5L1v15",word:"日本人",reading:"にほんじん",pitch:4,meaning:"Japanese person",example:"田中さんは日本人です。",exampleMeaning:"Tanaka is Japanese."},
    {id:"N5L1v16",word:"何",reading:"なん／なに",pitch:0,meaning:"what",example:"これは何ですか。",exampleMeaning:"What is this?"},
    {id:"N5L1v17",word:"誰",reading:"だれ",pitch:1,meaning:"who",example:"あの人は誰ですか。",exampleMeaning:"Who is that person?"},
    {id:"N5L1v18",word:"国",reading:"くに",pitch:2,meaning:"country",example:"どこの国から来ましたか。",exampleMeaning:"Which country are you from?"},
    {id:"N5L1v19",word:"日本",reading:"にほん",pitch:2,meaning:"Japan",example:"日本へ行きたいです。",exampleMeaning:"I want to go to Japan."},
    {id:"N5L1v20",word:"大学",reading:"だいがく",pitch:0,meaning:"university",example:"大学の学生です。",exampleMeaning:"I'm a university student."},
    {id:"N5L1v21",word:"仕事",reading:"しごと",pitch:0,meaning:"work; job",example:"仕事は何ですか。",exampleMeaning:"What is your job?"},
    {id:"N5L1v22",word:"アメリカ",reading:"アメリカ",pitch:0,meaning:"USA",example:"アメリカから来ました。",exampleMeaning:"I came from America."},
    {id:"N5L1v23",word:"中国",reading:"ちゅうごく",pitch:1,meaning:"China",example:"中国から来ました。",exampleMeaning:"I came from China."},
    {id:"N5L1v24",word:"韓国",reading:"かんこく",pitch:1,meaning:"Korea",example:"韓国から来ました。",exampleMeaning:"I came from Korea."},
    {id:"N5L1v25",word:"どうぞ",reading:"どうぞ",pitch:1,meaning:"please (offering)",example:"どうぞ、お座りください。",exampleMeaning:"Please, have a seat."},
    {id:"N5L1v26",word:"お願いします",reading:"おねがいします",pitch:5,meaning:"please (requesting)",example:"コーヒーをお願いします。",exampleMeaning:"A coffee, please."},
    {id:"N5L1v27",word:"〜さん",reading:"〜さん",pitch:0,meaning:"Mr./Ms. (honorific)",example:"田中さんは先生です。",exampleMeaning:"Mr. Tanaka is a teacher."},
    {id:"N5L1v28",word:"〜歳",reading:"〜さい",pitch:0,meaning:"years old",example:"20歳です。",exampleMeaning:"I'm 20 years old."},
    {id:"N5L1v29",word:"どうぞよろしく",reading:"どうぞよろしく",pitch:5,meaning:"please treat me well",example:"どうぞよろしくお願いします。",exampleMeaning:"Please treat me well."},
    {id:"N5L1v30",word:"あなた",reading:"あなた",pitch:2,meaning:"you",example:"あなたは学生ですか。",exampleMeaning:"Are you a student?"}
  ],
  grammar:[
    {id:"N5L1g1",point:"〜は〜です (A is B)",explanation:"Basic sentence: [topic] は [noun] です. Negative: 〜じゃないです. Question: 〜ですか.",examples:["私は学生です。 (I am a student.)","田中さんは先生ですか。 (Is Tanaka a teacher?)"],listening:"は = topic, です = polite copula.",production:"Introduce yourself using 〜は〜です."},
    {id:"N5L1g2",point:"〜の (possessive)",explanation:"Noun の Noun links nouns. 私の本 (my book). 日本語の先生 (Japanese teacher).",examples:["私の名前は田中です。 (My name is Tanaka.)","これは田中さんの傘です。 (This is Tanaka's umbrella.)"],listening:"の connects two nouns.",production:"Say 'my book' and 'Japanese teacher' using の."}
  ],
  kanji:[
    {id:"N5L1k1",char:"日",reading:"にち／に／ひ",meaning:"day; sun; Japan",exampleWord:"日本（にほん）"},
    {id:"N5L1k2",char:"本",reading:"ほん／もと",meaning:"book; origin",exampleWord:"日本（にほん）"},
    {id:"N5L1k3",char:"人",reading:"じん／にん／ひと",meaning:"person",exampleWord:"日本人（にほんじん）"},
    {id:"N5L1k4",char:"学",reading:"がく／まな（ぶ）",meaning:"study; learn",exampleWord:"学生（がくせい）"},
    {id:"N5L1k5",char:"生",reading:"せい／なま",meaning:"life; birth",exampleWord:"学生（がくせい）"},
    {id:"N5L1k6",char:"先",reading:"せん／さき",meaning:"before; ahead",exampleWord:"先生（せんせい）"},
    {id:"N5L1k7",char:"名",reading:"めい／な",meaning:"name",exampleWord:"名前（なまえ）"},
    {id:"N5L1k8",char:"私",reading:"し／わたし",meaning:"I; private",exampleWord:"私（わたし）"}
  ],
  reading:{id:"N5L1r1",title:"自己紹介",passage:"はじめまして。私の名前は田中太郎です。日本人です。東京大学の学生です。20歳です。専門は日本語です。どうぞよろしくお願いします。",targetWords:[{word:"はじめまして",id:"N5L1v2"},{word:"学生",id:"N5L1v13"}],questions:[
    {id:"rqN5L1-1",q:"田中さんは何歳ですか。",o:["18歳","20歳","22歳","25歳"],c:1,exp:"20歳です。"},
    {id:"rqN5L1-2",q:"どこの国の人ですか。",o:["アメリカ","中国","日本","韓国"],c:2,exp:"日本人です。"},
    {id:"rqN5L1-3",q:"何の学生ですか。",o:["英語","日本語","中国語","歴史"],c:1,exp:"専門は日本語です。"}
  ]},
  listening:[
    {id:"N5L1l1",audioText:"A：はじめまして。田中です。B：はじめまして。山田です。",a:"二人は何をしていますか。",o:["挨拶している","仕事している","勉強している","食べている"],c:0,exp:"自己紹介しています。"},
    {id:"N5L1l2",audioText:"A：おはようございます。B：おはよう。",a:"いつの挨拶ですか。",o:["朝","昼","夜","夜中"],c:0,exp:"おはようは朝の挨拶。"}
  ],
  questions:[
    {id:"N5L1q1",dim:"grammar",type:"recall",difficulty:"easy",s:"私___学生です。",a:"は",o:["は","が","を","の"],c:0,exp:"は marks the topic.",linksTo:"N5L1g1"},
    {id:"N5L1q2",dim:"grammar",type:"recall",difficulty:"easy",s:"これは田中さん___本です。",a:"の",o:["の","は","が","を"],c:0,exp:"の links nouns (possession).",linksTo:"N5L1g2"},
    {id:"N5L1q3",dim:"grammar",type:"recall",difficulty:"easy",s:"田中さんは学生___か。",a:"です",o:["です","だ","する","いる"],c:0,exp:"ですか = polite question.",linksTo:"N5L1g1"},
    {id:"N5L1q4",dim:"vocab",type:"recognition",difficulty:"easy",s:"「はじめまして」の意味は？",a:"nice to meet you",o:["good morning","nice to meet you","thank you","goodbye"],c:1,exp:"はじめまして = nice to meet you.",linksTo:"N5L1v2"},
    {id:"N5L1q5",dim:"vocab",type:"recognition",difficulty:"easy",s:"「すみません」の意味は？",a:"excuse me; sorry",o:["thank you","hello","excuse me; sorry","goodbye"],c:2,exp:"すみません = excuse me / sorry.",linksTo:"N5L1v4"},
    {id:"N5L1q6",dim:"kanji",type:"recognition",difficulty:"easy",s:"「日」の漢字の意味は？",a:"day; sun",o:["book","day; sun","person","name"],c:1,exp:"日 = day / sun.",linksTo:"N5L1k1"},
    {id:"N5L1q7",dim:"grammar",type:"recall",difficulty:"medium",s:"これは私の本___。(negative)",a:"じゃないです",o:["です","じゃないです","ます","ました"],c:1,exp:"Negative of です: じゃないです.",linksTo:"N5L1g1"},
    {id:"N5L1q8",dim:"vocab",type:"recognition",difficulty:"easy",s:"「先生」の読み方は？",a:"せんせい",o:["がくせい","せんせい","かいしゃいん","にほんじん"],c:1,exp:"先生 = せんせい.",linksTo:"N5L1v12"},
    {id:"N5L1q9",dim:"vocab",type:"recall",difficulty:"easy",s:"___は何ですか。(What is your ___? — name)",a:"名前",o:["名前","仕事","国","大学"],c:0,exp:"名前 = name.",linksTo:"N5L1v10"},
    {id:"N5L1q10",dim:"kanji",type:"recognition",difficulty:"easy",s:"「人」の漢字の意味は？",a:"person",o:["book","day","person","study"],c:2,exp:"人 = person.",linksTo:"N5L1k3"},
    {id:"N5L1q11",dim:"vocab",type:"recall",difficulty:"medium",s:"どこの___から来ましたか。(country)",a:"国",o:["国","大学","仕事","名前"],c:0,exp:"国 = country.",linksTo:"N5L1v18"},
    {id:"N5L1q12",dim:"kanji",type:"recognition",difficulty:"easy",s:"Which kanji means 'study / learn'?",a:"学",o:["日","本","学","私"],c:2,exp:"学 → 学生 (student).",linksTo:"N5L1k4"}
  ]
},
{
  lessonNum:2,topic:"数字と時間",topicEn:"Numbers & Time",module:'N5L2',moduleLabel:'N5 L2 — Numbers & Time',lesson:'N5L2',lessonLabel:'Numbers & Time',difficulty:"easy",level:"N5",
  vocabulary:[
    {id:"N5L2v1",word:"一",reading:"いち",pitch:2,meaning:"one",example:"一つください。",exampleMeaning:"One, please."},
    {id:"N5L2v2",word:"二",reading:"に",pitch:1,meaning:"two",example:"二人で行きます。",exampleMeaning:"Two people go."},
    {id:"N5L2v3",word:"三",reading:"さん",pitch:1,meaning:"three",example:"三時に会いましょう。",exampleMeaning:"Let's meet at 3."},
    {id:"N5L2v4",word:"四",reading:"よん／し",pitch:1,meaning:"four",example:"四月は桜の季節です。",exampleMeaning:"April is cherry blossom season."},
    {id:"N5L2v5",word:"五",reading:"ご",pitch:1,meaning:"five",example:"五分待ってください。",exampleMeaning:"Please wait 5 minutes."},
    {id:"N5L2v6",word:"時間",reading:"じかん",pitch:0,meaning:"time; hour",example:"時間がありません。",exampleMeaning:"There's no time."},
    {id:"N5L2v7",word:"時",reading:"じ",pitch:0,meaning:"o'clock",example:"三時です。",exampleMeaning:"It's 3 o'clock."},
    {id:"N5L2v8",word:"分",reading:"ふん／ぷん",pitch:1,meaning:"minute",example:"十分待ちました。",exampleMeaning:"I waited 10 minutes."},
    {id:"N5L2v9",word:"半",reading:"はん",pitch:1,meaning:"half",example:"三時半に会いましょう。",exampleMeaning:"Let's meet at 3:30."},
    {id:"N5L2v10",word:"今",reading:"いま",pitch:2,meaning:"now",example:"今何時ですか。",exampleMeaning:"What time is it now?"},
    {id:"N5L2v11",word:"朝",reading:"あさ",pitch:1,meaning:"morning",example:"朝六時に起きます。",exampleMeaning:"I get up at 6 AM."},
    {id:"N5L2v12",word:"昼",reading:"ひる",pitch:2,meaning:"noon; daytime",example:"昼ご飯を食べます。",exampleMeaning:"I eat lunch."},
    {id:"N5L2v13",word:"夜",reading:"よる",pitch:1,meaning:"night",example:"夜十時に寝ます。",exampleMeaning:"I go to bed at 10 PM."},
    {id:"N5L2v14",word:"今日",reading:"きょう",pitch:1,meaning:"today",example:"今日は忙しいです。",exampleMeaning:"I'm busy today."},
    {id:"N5L2v15",word:"明日",reading:"あした",pitch:3,meaning:"tomorrow",example:"明日学校へ行きます。",exampleMeaning:"I'll go to school tomorrow."},
    {id:"N5L2v16",word:"昨日",reading:"きのう",pitch:2,meaning:"yesterday",example:"昨日映画を見ました。",exampleMeaning:"I watched a movie yesterday."},
    {id:"N5L2v17",word:"週末",reading:"しゅうまつ",pitch:1,meaning:"weekend",example:"週末は何をしますか。",exampleMeaning:"What do you do on weekends?"},
    {id:"N5L2v18",word:"今朝",reading:"けさ",pitch:1,meaning:"this morning",example:"今朝パンを食べました。",exampleMeaning:"I ate bread this morning."},
    {id:"N5L2v19",word:"毎日",reading:"まいにち",pitch:1,meaning:"every day",example:"毎日日本語を勉強します。",exampleMeaning:"I study Japanese every day."},
    {id:"N5L2v20",word:"〜月",reading:"〜がつ",pitch:0,meaning:"month (counter)",example:"一月は寒いです。",exampleMeaning:"January is cold."},
    {id:"N5L2v21",word:"年",reading:"とし／ねん",pitch:0,meaning:"year",example:"来年日本へ行きます。",exampleMeaning:"I'll go to Japan next year."},
    {id:"N5L2v22",word:"来年",reading:"らいねん",pitch:0,meaning:"next year",example:"来年大学に入ります。",exampleMeaning:"I'll enter university next year."},
    {id:"N5L2v23",word:"去年",reading:"きょねん",pitch:1,meaning:"last year",example:"去年日本へ行きました。",exampleMeaning:"I went to Japan last year."},
    {id:"N5L2v24",word:"何時",reading:"なんじ",pitch:0,meaning:"what time",example:"今何時ですか。",exampleMeaning:"What time is it now?"},
    {id:"N5L2v25",word:"〜から",reading:"〜から",pitch:0,meaning:"from (time/place)",example:"九時から始まります。",exampleMeaning:"It starts from 9."},
    {id:"N5L2v26",word:"〜まで",reading:"〜まで",pitch:0,meaning:"until (time/place)",example:"五時まで働きます。",exampleMeaning:"I work until 5."},
    {id:"N5L2v27",word:"〜ごろ",reading:"〜ごろ",pitch:0,meaning:"around (approximate time)",example:"六時ごろ起きます。",exampleMeaning:"I get up around 6."},
    {id:"N5L2v28",word:"〜日",reading:"〜にち",pitch:0,meaning:"day of month",example:"三月三日です。",exampleMeaning:"It's March 3rd."},
    {id:"N5L2v29",word:"週間",reading:"しゅうかん",pitch:0,meaning:"weeks (duration)",example:"二週間休みます。",exampleMeaning:"I'll take 2 weeks off."},
    {id:"N5L2v30",word:"何分",reading:"なんぷん",pitch:0,meaning:"how many minutes",example:"何分かかりますか。",exampleMeaning:"How many minutes does it take?"}
  ],
  grammar:[
    {id:"N5L2g1",point:"〜時に〜ます (at [time] I do ~)",explanation:"Specific time takes に: 六時に起きます. Omitted with relative time words like 今日, 明日, 毎日.",examples:["七時に朝ご飯を食べます。 (I eat breakfast at 7.)","毎日日本語を勉強します。 (I study Japanese every day.)"],listening:"に marks specific times.",production:"Say what time you get up and go to bed."},
    {id:"N5L2g2",point:"〜から〜まで (from ~ to ~)",explanation:"から = 'from', まで = 'until/to'. Used for time and place ranges.",examples:["九時から五時まで働きます。 (I work from 9 to 5.)","東京から大阪まで行きます。 (From Tokyo to Osaka.)"],listening:"から = start, まで = end.",production:"Say your schedule using 〜から〜まで."}
  ],
  kanji:[
    {id:"N5L2k1",char:"時",reading:"じ／とき",meaning:"time; o'clock",exampleWord:"時間（じかん）"},
    {id:"N5L2k2",char:"間",reading:"かん／あいだ",meaning:"interval; between",exampleWord:"時間（じかん）"},
    {id:"N5L2k3",char:"分",reading:"ふん／ぷん／わ（ける）",meaning:"minute; divide",exampleWord:"分（ふん）"},
    {id:"N5L2k4",char:"半",reading:"はん",meaning:"half",exampleWord:"三時半（さんじはん）"},
    {id:"N5L2k5",char:"今",reading:"こん／いま",meaning:"now",exampleWord:"今（いま）"},
    {id:"N5L2k6",char:"朝",reading:"ちょう／あさ",meaning:"morning",exampleWord:"朝（あさ）"},
    {id:"N5L2k7",char:"夜",reading:"や／よる",meaning:"night",exampleWord:"夜（よる）"},
    {id:"N5L2k8",char:"来",reading:"らい／く（る）",meaning:"come; next",exampleWord:"来年（らいねん）"}
  ],
  reading:{id:"N5L2r1",title:"毎日のスケジュール",passage:"毎朝六時に起きます。七時に朝ご飯を食べます。八時に家を出ます。九時から五時まで会社で働きます。六時に家に帰ります。夜七時に晩ご飯を食べます。十時に寝ます。",targetWords:[{word:"起きます",id:"N5L2v10"},{word:"働きます",id:"N5L2v6"}],questions:[
    {id:"rqN5L2-1",q:"何時に起きますか。",o:["五時","六時","七時","八時"],c:1,exp:"六時に起きます。"},
    {id:"rqN5L2-2",q:"何時から何時まで働きますか。",o:["8時〜4時","9時〜5時","9時〜6時","8時〜5時"],c:1,exp:"九時から五時まで働きます。"},
    {id:"rqN5L2-3",q:"何時に寝ますか。",o:["九時","十時","十一時","十二時"],c:1,exp:"十時に寝ます。"}
  ]},
  listening:[
    {id:"N5L2l1",audioText:"A：今何時ですか。B：三時半です。",a:"今何時ですか。",o:["三時","三時半","四時","四時半"],c:1,exp:"三時半です。"},
    {id:"N5L2l2",audioText:"A：明日何時に来ますか。B：九時ごろ来ます。",a:"何時に来ますか。",o:["八時ごろ","九時ごろ","十時ごろ","十一時ごろ"],c:1,exp:"九時ごろ来ます。"}
  ],
  questions:[
    {id:"N5L2q1",dim:"grammar",type:"recall",difficulty:"easy",s:"六時___起きます。",a:"に",o:["に","で","を","が"],c:0,exp:"Specific time takes に.",linksTo:"N5L2g1"},
    {id:"N5L2q2",dim:"grammar",type:"recall",difficulty:"easy",s:"九時___五時___働きます。",a:"から・まで",o:["から・まで","に・で","で・に","を・が"],c:0,exp:"から〜まで = from ~ to ~.",linksTo:"N5L2g2"},
    {id:"N5L2q3",dim:"grammar",type:"recall",difficulty:"medium",s:"毎日日本語___勉強します。",a:"を",o:["を","に","で","が"],c:0,exp:"を marks direct object. 毎日 doesn't take に.",linksTo:"N5L2g1"},
    {id:"N5L2q4",dim:"vocab",type:"recognition",difficulty:"easy",s:"「今」の読み方は？",a:"いま",o:["いま","きょう","あした","けさ"],c:0,exp:"今 = いま (now).",linksTo:"N5L2v10"},
    {id:"N5L2q5",dim:"vocab",type:"recognition",difficulty:"easy",s:"「明日」の意味は？",a:"tomorrow",o:["today","tomorrow","yesterday","now"],c:1,exp:"明日 = tomorrow.",linksTo:"N5L2v15"},
    {id:"N5L2q6",dim:"kanji",type:"recognition",difficulty:"easy",s:"「時」の漢字の意味は？",a:"time; o'clock",o:["day","time; o'clock","person","name"],c:1,exp:"時 = time.",linksTo:"N5L2k1"},
    {id:"N5L2q7",dim:"grammar",type:"recall",difficulty:"medium",s:"月曜日___学校へ行きます。",a:"に",o:["に","で","を","から"],c:0,exp:"Specific days take に.",linksTo:"N5L2g1"},
    {id:"N5L2q8",dim:"vocab",type:"recognition",difficulty:"easy",s:"「半」の読み方は？",a:"はん",o:["はん","さん","じ","ふん"],c:0,exp:"半 = はん (half).",linksTo:"N5L2v9"},
    {id:"N5L2q9",dim:"vocab",type:"recall",difficulty:"medium",s:"三時___に会いましょう。(around 3)",a:"ごろ",o:["ごろ","まで","から","に"],c:0,exp:"ごろ = around (approximate time).",linksTo:"N5L2v27"},
    {id:"N5L2q10",dim:"kanji",type:"recognition",difficulty:"easy",s:"Which kanji means 'morning'?",a:"朝",o:["今","朝","夜","時"],c:1,exp:"朝 = morning.",linksTo:"N5L2k6"},
    {id:"N5L2q11",dim:"vocab",type:"recall",difficulty:"medium",s:"去年日本___行きました。",a:"へ",o:["へ","で","を","に"],c:0,exp:"へ marks destination.",linksTo:"N5L2v23"},
    {id:"N5L2q12",dim:"kanji",type:"recognition",difficulty:"easy",s:"Which kanji means 'night'?",a:"夜",o:["朝","今","夜","半"],c:2,exp:"夜 = night.",linksTo:"N5L2k7"}
  ]
},
{
  lessonNum:3,topic:"日常の活動",topicEn:"Daily Activities",module:'N5L3',moduleLabel:'N5 L3 — Daily Activities',lesson:'N5L3',lessonLabel:'Daily Activities',difficulty:"easy",level:"N5",
  vocabulary:[
    {id:"N5L3v1",word:"行きます",reading:"いきます",pitch:3,meaning:"to go",example:"学校へ行きます。",exampleMeaning:"I go to school."},
    {id:"N5L3v2",word:"来ます",reading:"きます",pitch:0,meaning:"to come",example:"友達が家に来ます。",exampleMeaning:"A friend comes to my house."},
    {id:"N5L3v3",word:"帰ります",reading:"かえります",pitch:3,meaning:"to return; go home",example:"六時に帰ります。",exampleMeaning:"I go home at 6."},
    {id:"N5L3v4",word:"食べます",reading:"たべます",pitch:2,meaning:"to eat",example:"朝ご飯を食べます。",exampleMeaning:"I eat breakfast."},
    {id:"N5L3v5",word:"飲みます",reading:"のみます",pitch:2,meaning:"to drink",example:"コーヒーを飲みます。",exampleMeaning:"I drink coffee."},
    {id:"N5L3v6",word:"見ます",reading:"みます",pitch:2,meaning:"to see; watch",example:"テレビを見ます。",exampleMeaning:"I watch TV."},
    {id:"N5L3v7",word:"聞きます",reading:"ききます",pitch:3,meaning:"to listen; ask",example:"音楽を聞きます。",exampleMeaning:"I listen to music."},
    {id:"N5L3v8",word:"読みます",reading:"よみます",pitch:2,meaning:"to read",example:"本を読みます。",exampleMeaning:"I read a book."},
    {id:"N5L3v9",word:"書きます",reading:"かきます",pitch:2,meaning:"to write",example:"手紙を書きます。",exampleMeaning:"I write a letter."},
    {id:"N5L3v10",word:"買います",reading:"かいます",pitch:2,meaning:"to buy",example:"パンを買います。",exampleMeaning:"I buy bread."},
    {id:"N5L3v11",word:"します",reading:"します",pitch:2,meaning:"to do",example:"宿題をします。",exampleMeaning:"I do homework."},
    {id:"N5L3v12",word:"勉強します",reading:"べんきょうします",pitch:0,meaning:"to study",example:"日本語を勉強します。",exampleMeaning:"I study Japanese."},
    {id:"N5L3v13",word:"働きます",reading:"はたらきます",pitch:4,meaning:"to work",example:"会社で働きます。",exampleMeaning:"I work at a company."},
    {id:"N5L3v14",word:"寝ます",reading:"ねます",pitch:2,meaning:"to sleep; go to bed",example:"十時に寝ます。",exampleMeaning:"I go to bed at 10."},
    {id:"N5L3v15",word:"起きます",reading:"おきます",pitch:2,meaning:"to get up",example:"六時に起きます。",exampleMeaning:"I get up at 6."},
    {id:"N5L3v16",word:"学校",reading:"がっこう",pitch:0,meaning:"school",example:"学校へ行きます。",exampleMeaning:"I go to school."},
    {id:"N5L3v17",word:"会社",reading:"かいしゃ",pitch:0,meaning:"company",example:"会社で働きます。",exampleMeaning:"I work at a company."},
    {id:"N5L3v18",word:"家",reading:"いえ／うち",pitch:2,meaning:"house; home",example:"家に帰ります。",exampleMeaning:"I go home."},
    {id:"N5L3v19",word:"店",reading:"みせ",pitch:2,meaning:"shop; store",example:"あの店で買います。",exampleMeaning:"I buy at that shop."},
    {id:"N5L3v20",word:"病院",reading:"びょういん",pitch:0,meaning:"hospital",example:"病院へ行きます。",exampleMeaning:"I go to the hospital."},
    {id:"N5L3v21",word:"銀行",reading:"ぎんこう",pitch:0,meaning:"bank",example:"銀行でお金を出します。",exampleMeaning:"I withdraw money at the bank."},
    {id:"N5L3v22",word:"駅",reading:"えき",pitch:1,meaning:"station",example:"駅前で会いましょう。",exampleMeaning:"Let's meet at the station."},
    {id:"N5L3v23",word:"本",reading:"ほん",pitch:1,meaning:"book",example:"本を読みます。",exampleMeaning:"I read a book."},
    {id:"N5L3v24",word:"テレビ",reading:"テレビ",pitch:1,meaning:"TV",example:"テレビを見ます。",exampleMeaning:"I watch TV."},
    {id:"N5L3v25",word:"音楽",reading:"おんがく",pitch:1,meaning:"music",example:"音楽を聞きます。",exampleMeaning:"I listen to music."},
    {id:"N5L3v26",word:"映画",reading:"えいが",pitch:1,meaning:"movie",example:"映画を見ます。",exampleMeaning:"I watch a movie."},
    {id:"N5L3v27",word:"ご飯",reading:"ごはん",pitch:1,meaning:"rice; meal",example:"ご飯を食べます。",exampleMeaning:"I eat a meal."},
    {id:"N5L3v28",word:"お茶",reading:"おちゃ",pitch:1,meaning:"tea",example:"お茶を飲みます。",exampleMeaning:"I drink tea."},
    {id:"N5L3v29",word:"水",reading:"みず",pitch:0,meaning:"water",example:"水を飲みます。",exampleMeaning:"I drink water."},
    {id:"N5L3v30",word:"パン",reading:"パン",pitch:1,meaning:"bread",example:"パンを食べます。",exampleMeaning:"I eat bread."}
  ],
  grammar:[
    {id:"N5L3g1",point:"〜へ / 〜で / 〜を (place & object particles)",explanation:"へ = destination. で = location of action. を = direct object.",examples:["学校へ行きます。 (Go to school.)","図書館で本を読みます。 (Read a book at the library.)","コーヒーを飲みます。 (Drink coffee.)"],listening:"へ = destination, で = place of action, を = direct object.",production:"Say where you go, where you study, what you eat."},
    {id:"N5L3g2",point:"〜ます / 〜ません / 〜ました (verb forms)",explanation:"Present: 食べます. Negative: 食べません. Past: 食べました. Past neg: 食べませんでした.",examples:["毎朝パンを食べます。 (I eat bread every morning.)","昨日映画を見ませんでした。 (I didn't watch a movie yesterday.)"],listening:"ません = negative, ました = past.",production:"Say what you did yesterday and what you usually do."}
  ],
  kanji:[
    {id:"N5L3k1",char:"行",reading:"こう／い（く）",meaning:"go",exampleWord:"行きます（いきます）"},
    {id:"N5L3k2",char:"来",reading:"らい／く（る）",meaning:"come",exampleWord:"来ます（きます）"},
    {id:"N5L3k3",char:"帰",reading:"き／かえ（る）",meaning:"return",exampleWord:"帰ります（かえります）"},
    {id:"N5L3k4",char:"食",reading:"しょく／た（べる）",meaning:"eat; food",exampleWord:"食べます（たべます）"},
    {id:"N5L3k5",char:"飲",reading:"いん／の（む）",meaning:"drink",exampleWord:"飲みます（のみます）"},
    {id:"N5L3k6",char:"見",reading:"けん／み（る）",meaning:"see; look",exampleWord:"見ます（みます）"},
    {id:"N5L3k7",char:"読",reading:"どく／よ（む）",meaning:"read",exampleWord:"読みます（よみます）"},
    {id:"N5L3k8",char:"書",reading:"しょ／か（く）",meaning:"write",exampleWord:"書きます（かきます）"}
  ],
  reading:{id:"N5L3r1",title:"休みの一日",passage:"日曜日は休みです。朝十時に起きました。お茶を飲んで、パンを食べました。十一時に駅へ行きました。友達と映画を見ました。一時にレストランで昼ご飯を食べました。午後は本を読みました。夜はテレビを見ました。",targetWords:[{word:"起きました",id:"N5L3v15"},{word:"見ました",id:"N5L3v6"}],questions:[
    {id:"rqN5L3-1",q:"何時に起きましたか。",o:["八時","九時","十時","十一時"],c:2,exp:"十時に起きました。"},
    {id:"rqN5L3-2",q:"何をしましたか。",o:["働いた","映画を見た","勉強した","買い物した"],c:1,exp:"映画を見ました。"},
    {id:"rqN5L3-3",q:"午後は何をしましたか。",o:["テレビを見た","本を読んだ","寝た","買い物した"],c:1,exp:"本を読みました。"}
  ]},
  listening:[
    {id:"N5L3l1",audioText:"A：日曜日は何をしましたか。B：朝は本を読みました。午後は買い物に行きました。",a:"午後は何をしましたか。",o:["本を読んだ","買い物に行った","家にいた","映画を見た"],c:1,exp:"買い物に行きました。"},
    {id:"N5L3l2",audioText:"A：毎朝何を食べますか。B：パンと卵を食べます。コーヒーを飲みます。",a:"何を飲みますか。",o:["お茶","水","コーヒー","ジュース"],c:2,exp:"コーヒーを飲みます。"}
  ],
  questions:[
    {id:"N5L3q1",dim:"grammar",type:"recall",difficulty:"easy",s:"学校___行きます。",a:"へ",o:["へ","で","を","に"],c:0,exp:"へ marks destination.",linksTo:"N5L3g1"},
    {id:"N5L3q2",dim:"grammar",type:"recall",difficulty:"easy",s:"図書館___本を読みます。",a:"で",o:["で","へ","を","が"],c:0,exp:"で marks place of action.",linksTo:"N5L3g1"},
    {id:"N5L3q3",dim:"grammar",type:"recall",difficulty:"easy",s:"昨日、映画を見___。(past negative)",a:"ませんでした",o:["ました","ませんでした","ません","ます"],c:1,exp:"Past negative: 見ませんでした。",linksTo:"N5L3g2"},
    {id:"N5L3q4",dim:"vocab",type:"recognition",difficulty:"easy",s:"「食べます」の意味は？",a:"to eat",o:["to drink","to eat","to buy","to read"],c:1,exp:"食べます = to eat.",linksTo:"N5L3v4"},
    {id:"N5L3q5",dim:"vocab",type:"recognition",difficulty:"easy",s:"「学校」の読み方は？",a:"がっこう",o:["がっこう","かいしゃ","びょういん","ぎんこう"],c:0,exp:"学校 = がっこう.",linksTo:"N5L3v16"},
    {id:"N5L3q6",dim:"kanji",type:"recognition",difficulty:"easy",s:"「行」の漢字の意味は？",a:"go",o:["come","go","return","eat"],c:1,exp:"行 = go.",linksTo:"N5L3k1"},
    {id:"N5L3q7",dim:"grammar",type:"recall",difficulty:"medium",s:"本___読みます。",a:"を",o:["を","で","へ","に"],c:0,exp:"を marks direct object.",linksTo:"N5L3g1"},
    {id:"N5L3q8",dim:"vocab",type:"recognition",difficulty:"easy",s:"「飲みます」の意味は？",a:"to drink",o:["to eat","to drink","to see","to write"],c:1,exp:"飲みます = to drink.",linksTo:"N5L3v5"},
    {id:"N5L3q9",dim:"vocab",type:"recall",difficulty:"medium",s:"テレビを___。(watch)",a:"見ます",o:["見ます","読みます","聞きます","書きます"],c:0,exp:"テレビを見ます = watch TV.",linksTo:"N5L3v6"},
    {id:"N5L3q10",dim:"kanji",type:"recognition",difficulty:"easy",s:"Which kanji means 'write'?",a:"書",o:["見","読","書","食"],c:2,exp:"書 → 書きます (to write).",linksTo:"N5L3k8"},
    {id:"N5L3q11",dim:"vocab",type:"recall",difficulty:"medium",s:"音楽を___。(listen)",a:"聞きます",o:["聞きます","見ます","読みます","書きます"],c:0,exp:"音楽を聞きます = listen to music.",linksTo:"N5L3v7"},
    {id:"N5L3q12",dim:"kanji",type:"recognition",difficulty:"easy",s:"Which kanji means 'eat / food'?",a:"食",o:["行","食","見","書"],c:1,exp:"食 → 食べます (to eat).",linksTo:"N5L3k4"}
  ]
}
];
if (typeof window !== 'undefined') window.N5_CONTENT = N5_CONTENT;
if (typeof module !== 'undefined' && module.exports) module.exports = N5_CONTENT;
