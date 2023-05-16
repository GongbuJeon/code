/* eslint-disable */
import './App.css';
import { useEffect, useState } from 'react';

if (JSON.parse(localStorage.getItem('days')) == ! null) {
  let days = JSON.parse(localStorage.getItem('days'))
}

// 조건문 
// 한번만 되게 설정


function App() {

  const [mode, setMode] = useState('')
  let [date, setDate] = useState('')
  let [title, setTitle] = useState('')
  let [memo, setMemo] = useState('')
  let [start, setStart] = useState('')
  let [end, setEnd] = useState('')
  let localdays = JSON.parse(localStorage.getItem('days'))
  console.log(localStorage.getItem('days'))

  let day = {
    id: '',
    plan: [],
    do: []
  }


  function add(a, key, value) {
    a[key] = value
    return a;
  }

  function put(obj, key, value) {
    obj[key].push(value)
    return obj;
  }

  function findValueInObjectKeys(obj, value) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === value) {
        return key;
      }
    }
    return null;
  }

  return (

    <div>
      <input type='date' onChange={(e) => {
        setDate(e.target.value)
      }}></input>


      <input style={{ margin: '20px' }}
        type='text'
        placeholder='제목'
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}>
      </input>

      <input type='time'
        value={start}
        onChange={(e) => { setStart(e.target.value) }}>
      </input>

      <input type='time'
        value={end}
        onChange={(e) => { setEnd(e.target.value) }}>
      </input>

      <input type='text'
        placeholder='메모'
        value={memo}
        onChange={(e) => { setMemo(e.target.value) }}>
      </input>

      <button onClick={() => {
        setMode('plan')
        // 임시로 모드 설정

        const task = {
          title: title,
          memo: memo,
          start: start,
          end: end
        }

        if (mode == 'plan') {

          // day가 초기화되기 때문에 빼놓았었음.
          day.id = date
          day.plan.push(task)
          console.log(day)

          // let days = { }
          // days[date] = day;
          // days.date는 이름이 date인것
          // days[date]는 변수 계산함
          
          //console.log(getData[date], date, 'getdata.days = ', getData.days)

          if (localStorage.getItem('days') == null) 
          { console.log(2)
            localStorage.setItem('days', JSON.stringify({date : day})) 
          }
          else 
          {
            const old = localdays[date];
            if(old == null){
              localdays[date] = day;
              localStorage.setItem('days', JSON.stringify(localdays))
            }
            else
            {
              console.log(111)
              old.plan.push(task)
              localStorage.setItem('days', JSON.stringify(localdays))
            }
            
              // console.log(1)
              // getData[date.plan].push(task)
              // localStorage.setItem('days', JSON.stringify(getData))
            
          }

          // plan일 때 같은 id의 plan

          // console.log('days= ', days)
          // days의 키가 date고
          // value가 day

          // date의 키 값이 null이 아니면
        }

        else if (mode == 'do') {
          234
        }

        setTitle('')
        setMemo('')
        setStart('')
        setEnd('')

        // days에 넣고
        // days를 로컬스토리지에 넣고

      }}> 입력하기 </button>

      <button onClick={() => { setMode('plan') }}>Plan</button>
      <button onClick={() => { setMode('plan') }}>do</button>

    </div>
  )
}

export default App;
