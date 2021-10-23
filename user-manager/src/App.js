import useForm from './Hooks/UseForm'
import Input from './Components/Input'
import Card from './Components/Card'
import Container from './Components/Container'
import Button from './Components/Button'

function App(){
  const[form,handleChange] = useForm({name:'', lastName:'', email:''})

  console.log(form);

  return(
    <Container>
      <Card>
        <form>
          <Input label='Name' name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
          <Input label='Last Name' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleChange}/>
          <Input label='Email' name='email' placeholder='Email' value={form.email} onChange={handleChange}/>
          <Button>Enviar</Button>
        </form>
      </Card>
    </Container>
  )
}

export default App;