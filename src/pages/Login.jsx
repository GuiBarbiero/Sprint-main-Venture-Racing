import { useState } from 'react';
import ArrowChatButton from '../components/ArrowChatButton';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Funções para alternar entre login e cadastro
  const handleLoginClick = () => setIsLogin(true);
  const handleRegisterClick = () => setIsLogin(false);

  const entrar = (event) => {
    event.preventDefault();
    console.log("Login enviado");
  };

  const cadastrar = (event) => {
    event.preventDefault();
    console.log("Cadastro enviado");
  };

  return (
    <div className="bg-gradient-to-b from-white via-[#C0C0C0] to-[#0000FF] flex items-center justify-center h-screen px-4">
      <main className="relative w-full max-w-4xl">
        {/* Fundo com transição suave */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${isLogin ? 'bg-white' : 'bg-blue-700'} rounded-3xl`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-lg overflow-hidden relative z-10">
          {/* Left side */}
          <div className={`p-8 md:p-10 flex flex-col justify-center items-center ${isLogin ? 'bg-white text-black' : 'bg-blue-700 text-white'}`}>
            {isLogin ? (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700">Faça login</h1>
                <p className="text-sm mt-2 text-center">Coloque o e-mail e sua senha nos campos abaixo:</p>
                <form onSubmit={entrar} className="flex flex-col mt-4 w-full">
                  <input type="email" id="login-email" placeholder="Email" required className="bg-gray-200 my-2 py-2 px-4 rounded-lg" />
                  <input type="password" id="login-password" placeholder="Senha" required className="bg-gray-200 my-2 py-2 px-4 rounded-lg" />
                  <a href="#" className="text-gray-500 text-xs my-4 text-center">Esqueceu sua senha?</a>
                  <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded-lg font-semibold uppercase mt-2">
                    Entrar
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-center">Bem-vindo de volta!</h1>
                <p className="text-sm mt-2 text-center">Entre com os seus dados pessoais para conseguir utilizar todos os recursos do nosso site</p>
                <button onClick={handleLoginClick} className="bg-white text-blue-700 py-2 px-8 mt-4 rounded-lg font-semibold uppercase">
                  Entrar
                </button>
              </>
            )}
          </div>

          {/* Right side */}
          <div className={`p-8 md:p-10 flex flex-col justify-center items-center ${isLogin ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}>
            {isLogin ? (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-center">Olá, corredor!</h1>
                <p className="text-sm mt-2 text-center">Registre-se com seus dados pessoais para usar todos os recursos do nosso site</p>
                <button onClick={handleRegisterClick} className="bg-white text-blue-700 py-2 px-8 mt-4 rounded-lg font-semibold uppercase">
                  Cadastre-se
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700">Crie a sua conta</h1>
                <p className="text-sm mt-2 text-center">Use o seu melhor e-mail e uma senha segura</p>
                <form onSubmit={cadastrar} className="flex flex-col mt-4 w-full">
                  <input type="text" id="register-username" placeholder="Nome de usuário" required className="bg-gray-200 my-2 py-2 px-4 rounded-lg" />
                  <input type="email" id="register-email" placeholder="Email" required className="bg-gray-200 my-2 py-2 px-4 rounded-lg" />
                  <input type="password" id="register-password" placeholder="Senha" required className="bg-gray-200 my-2 py-2 px-4 rounded-lg" />
                  <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded-lg font-semibold uppercase mt-2">
                    Cadastre-se
                  </button>
                </form>
                <ArrowChatButton />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
