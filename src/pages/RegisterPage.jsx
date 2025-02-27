import Wrapper from "../components/wrapper";
import AuthForm from "../components/AuthForm";

const Register = () => {
    return(
        <Wrapper>
            <h1>Register</h1>
            <AuthForm isRegister={true}/>
        </Wrapper>
    );
}
export default Register;