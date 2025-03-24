import { useForm } from 'react-hook-form';
import logo from '../../assets/logo1.jpg';

interface ILogin {
    username: string;
    password: string;
}

export const Login = () => {

    const { register, handleSubmit } = useForm<ILogin>({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = (data: ILogin) => {
        console.log(data);
    }

    return (
        <div className="h-screen overflow-hidden">

            <div className="h-[60%] bg-[#0a1543] flex items-center justify-center">
                <img src={logo} alt="Logo" className="h-120" />
            </div>

            <div className="h-[30%] bg-white flex justify-center items-start relative">

                <div className="absolute -top-28 bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Iniciar Sesión</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                {...register('username')}
                                placeholder="Usuario"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                {...register('password')}
                                placeholder="Contraseña"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer hover:bg-blue-700"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
