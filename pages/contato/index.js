import styles from './index.module.scss';
import { useForm } from "react-hook-form";
export default function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>  { console.log(data) };

    return <>

    

       
<div id='container1' >
    <h1>Fale Com o Instituto.</h1>
        <p className='paragrafo'>
        Você pode tirar suas dúvidas e enviar sugestões.<br></br>
        Se esta é a primeira vez que você entra em contato conosco,<br></br>
        preencha o formulário de contato logo abaixo.
        </p>
</div>

<div id='principal'>

<h2>Fale conosco.</h2>

<form onSubmit ={ handleSubmit(onSubmit) } >

        <div  > 
            <input className='nome' type="text" name="nome" placeholder="Nome" 
                { ... register("nome", { required: true })} />
                { errors.nome && <div className={styles.erro}> O nome é obrigatório!</div>}
        </div>  
    


        <div>
            <input  className='email' type="email" name="email" placeholder="E-mail"
            { ... register("email", { required: true })} />
                { errors.email && <div  className={styles.erro} > O E-mail é obrigatório!</div>}
            
        </div>

<div className='telas-conteudo'>
    
  <div className='telas'> 
        <div >
            <input className='estado' type="text" name="estado" placeholder="Estado"
            { ... register("estado", { required: true })} />
        { errors.estado && <div  className={styles.erro}> O estado é obrigatório!</div>}
        </div>

        <div >
            <input className=' cidade' type="text" name="cidade" placeholder="Cidade"
                { ... register("cidade", { required: true })} />
                { errors.cidade && <div  className={styles.erro}> A cidade é obrigatório!</div>}
        </div>
  </div>
              
    <div className='telas' >
        <div>
            <input className='telefone' type="tel" name="telefone" placeholder="Telefone" 
            { ... register("telefone", { required: true })} />
            { errors.telefone && <div  className={styles.erro}> O telefone é obrigatório!</div>}
        </div>


        <div>
            <textarea className='assunto' name="assunto" placeholder="Assunto" 
            { ... register("assunto", { required: true })} />
            { errors.assunto && <div  className={styles.erro}> O assunto é obrigatório!</div>}
        </div>
    </div>
</div>

                    <textarea className='mensagem' name="mensagem" placeholder="Mensagem"
                     { ... register("mensagem", { required: true })} />
                     { errors.mensagem && <div  className={styles.erro}> A mensagem é obrigatória!</div>} 
               
                 <div>

            <button className='enviar' type="submit">Enviar</button>
        
                
        </div>
</form>
</div>

    </>
}