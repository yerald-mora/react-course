import useForm from './Hooks/UseForm'
import Input from './Components/Input'
import Card from './Components/Card'
import Container from './Components/Container'
import Button from './Components/Button'
import { useState } from 'react'

function App(){
  const [users, setUsers] = useState([])
  const[form,handleChange, reset] = useForm({name:'', lastName:'', email:''})

  const submit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      form
    ]);
    reset();
  }

  return(
    <Container>
      <Card>
        <form onSubmit={submit}>
          <Input label='Name' name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
          <Input label='Last Name' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleChange}/>
          <Input label='Email' name='email' placeholder='Email' value={form.email} onChange={handleChange}/>
          <Button>Enviar</Button>
        </form>
      </Card>

      <Card>
        <ul>
          {users.map(u => 
            <li>{`${u.name} ${u.lastName} ${u.email}`}</li>)}
        </ul>
      </Card>
    </Container>
  )
}

export default App;