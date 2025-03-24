import logo from '../../assets/logo1.jpg';

export const Login = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="h-[55%] bg-[#0a1543] flex justify-center items-end pb-6">

                <img src={logo} alt="Logo" className="h-120" />
            </div>

            <div className="h-[45%] bg-white flex justify-center items-start relative">

                <div className="absolute top-[-120px] bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Iniciar Sesión</h2>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Usuario"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
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
