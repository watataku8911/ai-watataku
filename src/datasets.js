const defaultDataset = {
    "init": {
        answers: [
            {content: "あなたについて知りたい。", nextId: "person"},
            {content: "あなたにお仕事を依頼したい。", nextId: "job_offer"},
            {content: "坂道アイドルのイベントにいきませんか?", nextId: "consultant"},
            {content: "お付き合いして欲しいです。", nextId: "dating"},
        ],
        question: "はじめましてこんにちは！プログラマーのWatatakuです。ご用件はなんでしょうか？",
    },
    "person": {
        answers: [
            {content: "ポートフォリオサイトをみる。", nextId: "http://watataku.php.xdomain.jp"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "元SIerのプログラマです。今現在は、訳あって休職中ですがフロントエンドエンジニア目指して勉強しています。詳しくはポートフォリオサイトをご覧ください。",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしいです。", nextId: "website"},
            {content: "Webアプリを開発してほしいです。", nextId: "webapp"},
            {content: "モバイルアプリを開発してほしいです。", nextId: "mobile"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる。", nextId: "contact"},
            {content: "最初の質問に戻る。", nextId: "init"}
        ],
        question: "Webサイト制作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる。", nextId: "contact"},
            {content: "最初の質問に戻る。", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "mobile": {
        answers: [
            {content: "問い合わせる。", nextId: "contact"},
            {content: "最初の質問に戻る。", nextId: "init"}
        ],
        question: "モバイルアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる。", nextId: "contact"},
            {content: "最初の質問に戻る。", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "consultant": {
        answers: [
            {content: "あなたの推しメンは誰ですか？", nextId: "lovePerson"}
        ],
        question: "いいですね。ぜひいきましょう！！",
    },
    "lovePerson": {
        answers:[
            {content: "DMする。", nextId: "https://twitter.com/w2NzO8PRB1kC26S"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "日向坂46の宮田愛萌ちゃんです。DMとかでいつでも誘ってください。",
    },
    
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/watataku9"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "えっ・・・！？ほんまに？でもその前に〜、まずご飯とか行かへん？DMとかで連絡してやw",
    },
}

export default defaultDataset