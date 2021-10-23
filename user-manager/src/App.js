import useForm from './Hooks/UseForm'
import Input from './Components/Input'
import Card from './Components/Card'

function App(){
  const[form,handleChange] = useForm({name:'', lastName:''})

  console.log(form);

  return(
    <Card>
      <form>
        <Input label='Name' name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
        <Input label='Last Name' name='lastName' placeholder='Last Name' value={form.name} onChange={handleChange}/>
      </form>
    </Card>
  )
}

export default App;