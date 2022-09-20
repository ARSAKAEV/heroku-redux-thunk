import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadTodos } from './actions';
import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch()
     
    useEffect(() => {
      dispatch(loadTodos())
    }, [])

  return(
    <div>
      <div><b>List todos:</b></div>
      {loading ? 'loading...' : (
        todos.map(item =>{
          return(
            <div key={item.id}>
              {item.id}
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default App;
