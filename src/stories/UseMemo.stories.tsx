import React, { useCallback, useMemo, useState } from "react";
export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

resultA= useMemo(()=>{ // выполни эту функцию и запомни ее пока"а" не поменяется 
    let tempResultA=1
    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 1000000) {
            fake++
            const fakeValue = Math.random()
        }
        tempResultA = tempResultA * i
    }
    return tempResultA
},[a])

  
    for (let i = 1; i <= b; i++) {
        resultB = resultA * i
    }

    return <>
        <input value={a} onChange={(e: { currentTarget: { value: any; }; }) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e: { currentTarget: { value: any; }; }) => setB(Number(e.currentTarget.value))} />
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
   console.log('Users secret');
   
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    } </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemoExample = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dim', 'Valer', 'Petya'])
const newArray= useMemo(()=>{
    const newArray= users.filter(u=>u.toLowerCase().indexOf('a') >-1)
   return newArray
},[users])

const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
}
   return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={()=>addUser()}>add user</button>
        {counter}
        <Users users={newArray} /> 
        
    </>
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

   

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newBooks = [...books, 'Angular' + new Date().getTime()]
    //         setBooks(newBooks)
    //     }
    // }, [books])
    const memoizedAddBook =useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    , [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook} books={[]} />

    </>
}

const BooksSecret = (props: { books: Array<string>, addBook:()=>void }) => {
    console.log('Books secret');

    return <div>
        <button onClick={() => props.addBook()}>add book</button>         
    </div>
}
 const Book = React.memo(BooksSecret)
    // <Users users={users.filter(u=>u.toLowerCase().indexOf('a') >-1)} />  фильтр создает новый массив и идет перерисовка. React/memo не срабатывает