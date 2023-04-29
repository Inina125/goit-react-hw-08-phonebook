import { Helmet } from 'react-helmet-async';
import RegisterForm from '../../components/registerForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
