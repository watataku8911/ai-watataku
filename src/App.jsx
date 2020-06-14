import React, {useState, useEffect} from 'react';
import './assets/styles/style.css'
import AnswerList from './components/AnswerList';
import Chats from './components/Chats';
import {db} from './firebase/index'

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});

  // 新しいチャットを追加するCallback関数
  const addChats = (chat) => {
    setChats(prevChats => {
        return [...prevChats, chat]
    })
  };
  
  // 次の質問をチャットエリアに表示する関数
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    // 選択された回答と次の質問をチャットに追加
    addChats({
      text: nextDataset.question,
      type: 'question'
  });
    setAnswers(nextDataset.answers);

    setCurrentId(nextQuestionId);
  }

  // 回答が選択された時に呼ばれる関数
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case /^http:*/.test(nextQuestionId):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        // 現在のチャット一覧を取得
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })

        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 750)
        break;

    }
  }

  // 最初の質問をチャットエリアに表示する
  useEffect(() => {
    (async() => {
        const initDataset = {};

        // Fetch questions dataset from Firestore
        await db.collection('questions').get().then(snapshots => {
            snapshots.forEach(doc => {
                initDataset[doc.id] = doc.data()
            })
        });

        // Firestoreから取得したデータセットを反映
        setDataset(initDataset);

        // 最初の質問を表示
        displayNextQuestion(currentId, initDataset[currentId])
    })();
}, []);

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <section className="c-section">
      <div className="c-box">
        <>
          <Chats chats={chats} />
          <AnswerList　answers={answers} select={selectAnswer}/>
        </>
      </div>
    </section>
  )
}
export default App;
