import useForm from './Hooks/UseForm'
import Input from './Components/Input'

function App(){
  const[form,handleChange] = useForm({name:''})

  console.log(form);

  return(
    <form>
      <Input label='Name' name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
    </form>
  )
}

export default App;