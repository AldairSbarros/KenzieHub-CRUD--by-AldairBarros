import { DefaultTemplate } from "../../components/DefaultTemplate"
import {LoginForm} from "../../components/forms/LoginForm"

export const LoginPage = ({setUser}) => {

    return(

        <DefaultTemplate>
        
        <main >
        <LoginForm setUser={setUser}/>

        </main>

        </DefaultTemplate>
    )
}
