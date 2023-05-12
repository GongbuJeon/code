/* eslint-disable */
import './App.css';
import { useEffect, useState } from 'react';
let days = []

console.log('app')


function App() {
  
  const [mode, setMode] = useState('')
  // 초기 모드값 state
  console.log(days)
  let [date, setDate] = useState('')
  let [title, setTitle] = useState('')
  let [memo, setMemo] = useState('')
  let [start, setStart] = useState('')
  let [end, setEnd] = useState('')
  // html에 안나오는 것들이라 변수로 씀

  let day = {}
  let taskasd = []
  // 여러개의 일일 일과를 담을 array
  let boxmargin = []
  let boxheight = []

  let height =
    ((parseInt(start.split(":")[0], 10) - parseInt(end.split(":")[0], 10)) * 60 +
      (parseInt(start.split(":")[1], 10) - parseInt(end.split(":")[1], 10))) * 0.69444
  // 높이에 대한 계산식

  let margin =
    (parseInt(start.split(":")[0], 10) * 60 + parseInt(start.split(":")[1], 10)) * 0.69444;
  // 마진탑에 대한 계산식

  const getData = JSON.parse(localStorage.getItem('days'))

  function add(a, key, value) {
    a[key] = value
    return a;
  }
  // 오브젝트의 키값과 밸류값을 만들기 

  function targetvalue() {

  }

  // :로 분리하여 시간과 분으로 나누기
  // 높이를 1000px 기준으로 잡음
  // 1000px/1440 = 0.69444px



  return (
    <div className='container'>

      <input type='date' onChange={(e) => {
        setDate(e.target.value)
        // localstorage에서 id값이 date와 일치하는게 있으면
        // mode가 plan인 boxmargin, boxheight 배열의 인덱스 순서에 따라 박스길이
        // do도 마찬가지 / task[0].title


      }}></input>

      <div className='modal'>

        <div>
        <button style={{ float: 'right' }}
          onClick={() => {
            document.querySelector('.modal').classList.toggle('on-off')
          }}
        > x </button>
        </div>
        {/* 닫기버튼 */}

        <input style={{ margin: '20px' }}
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}>
        </input>
        {/* 제목 input */}

        <input type='time'
          value={start}
          onChange={(e) => { setStart(e.target.value) }}>
        </input>
        {/* 시작시간 input */}

        <input type='time'
          value={end}
          onChange={(e) => { setEnd(e.target.value) }}>
        </input>
        {/* 종료시간 input */}

        <input type='text'
          placeholder='메모'
          value={memo}
          onChange={(e) => { setMemo(e.target.value) }}>
        </input>
        {/* 메모 input */}

        <input style={{ margin: '20px' }}
          type='text'
          placeholder='해쉬태그'>
        </input>
        {/* 해쉬태그 input */}

        <div>
        <button onClick={() => {

          const task = {
            title: title,
            memo: memo,
            start: start,
            end: end,
          }
          // ex) task = {title : asd, memo : qwe, start : 02:00, end : 03:00}

          console.log(height, margin)
          // 박스높이와 박스마진이 제대로 들어가는지 확인

          if (mode == 'plan')
          // plan 부분 작성
          { add(day, 'mode', 'plan') }

          else if (mode == 'do')
          // do 부분 작성
          { add(day, 'mode', 'do') }

            taskasd.push(task)
            // 순서대로 집어넣기
            boxmargin.push(margin)
            boxheight.push(height)

            add(day, 'id', date)
            add(day, 'task', taskasd)
            add(day, 'boxmargin', boxmargin)
            add(day, 'boxheight', boxheight);
            days.push(day);

          // day object = {id = '2023-..', mode = 'do', boxmargin = [...]}

          

          // 데이터를 넣을때 localstorage의 id값이 date값과 일치하는게 있으면
          // mode가 plan인지 do인지 체크
          // getData.task.push(task), getData.boxmargin.push(margin), 
          // getData.boxheight.push(height)

          // day가 없다면
          if (localStorage.getItem('days') == null) 
          { localStorage.setItem('days', JSON.stringify(days)) }

          // day가 있다면
          else {
            getData.push(days)
            localStorage.setItem('days', JSON.stringify(getData));
          }

          // day가 있을때 
          // 날짜와 



          // 초기화
          setTitle('')
          setMemo('')
          setStart('')
          setEnd('')
          console.log(days)
        }
        
        }>
          입력
        </button>
        </div>
      </div>

      <div className='전체'>
        {/* 화면을 꽉 채움 + flex로 가로 배치 */}

        <div className='시간'>시간</div>
        {/* 시간이 적힌 div */}

        <div className='시간표'>

          <div className='plan-do'>
            <div className='block'>
              
              {/* 로컬스토리지 안에 있는 값 [날짜: 2023-.. [sdf : ... , sdfdsfe : ...]]
              배열을 일단 불러와야 함 */}
            </div>
          </div>

          <div className='plan-do'>
            <div className='block'>

            </div>
          </div>

        </div>
      </div>

      {/* plan 버튼 */}
      <button onClick={() => {
        setMode('plan');
        // mode를 변경
        document.querySelector('.modal').classList.toggle('on-off')
      }}>plan
      </button>

      {/* do 버튼 */}
      <button onClick={() => {
        setMode('do');
        document.querySelector('.modal').classList.toggle('on-off')
      }}>do
      </button>

    </div>
  )

}

export default App;
