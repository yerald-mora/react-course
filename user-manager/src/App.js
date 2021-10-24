
import Card from './Components/Card'
import Container from './Components/Container'

import { useState } from 'react'
import UserForm from './Components/UserForm'

function App(){
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([
      ...users,
      user
    ]);
  }

  console.log(users);

  return(
    <Container>
      <Card>
        <UserForm submit={submit}/>
      </Card>

      <Card>
        <ul>
          {users.map(u => 
            <li key={u.email}>{`${u.name} ${u.lastName} ${u.email}`}</li>)}
        </ul>
      </Card>
    </Container>
  )
}

export default App;