import Input from './Input'
import Button from './Button'
import useForm from '../Hooks/UseForm'

const UserForm = ({submit}) => {
    const[form,handleChange, reset] = useForm({name:'', lastName:'', email:''});
    const handleSubmit = (e) =>{
        e.preventDefault();
        submit(form);
        reset();
    }
    return(
        <form onSubmit={handleSubmit}>
          <Input label='Name' name='name' placeholder='Name' value={form.name} onChange={handleChange}/>
          <Input label='Last Name' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleChange}/>
          <Input label='Email' name='email' placeholder='Email' value={form.email} onChange={handleChange}/>
          <Button>Enviar</Button>
        </form>
    )
}

export default UserForm;