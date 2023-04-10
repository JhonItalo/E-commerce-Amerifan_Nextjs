import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import Link from "next/link";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { RedirectLoginContext, page } from "../../contexts/RedirectLogin";
import MinHeader from "../../layout/minHeader";

const LoginContent = () => {
   
    const router = useRouter();
    const { authentication, token } = useContext<contextAuthUser>(AuthUserContext);
    const { url, setUrl } = useContext<page>(RedirectLoginContext);
    const senhaRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const [EmailBorder, setEmailBorder] = useState<string>("1px solid grey");
    const [SenhaBorder, setSenhaBorder] = useState<string>("1px solid grey");

    const [spanEmail, setSpanEmail] = useState<boolean>(false);

    const [failure, setFailure] = useState<boolean>(false);

    useEffect(() => {
        if (token) {
            if (url) {
                router.push(url);
                setUrl(null);
            } else {
                router.push("/");
            }
        }
    }, [token]);

    const validationEmail = (email: string) => {
        const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return regex.test(email);
    };

    const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        if (validationEmail(e.currentTarget.value)) {
            setEmailBorder("1px solid green");
        } else {
            setEmailBorder("1px solid red");
        }
    };

    const changeSenha = (e: React.FormEvent<HTMLInputElement>) => {
        setSenha(e.currentTarget.value);
        if (e.currentTarget.value.length < 8) {
            setSenhaBorder("1px solid red");
        } else {
            setSenhaBorder("1px solid green");
        }
    };

    const hiddenSenha = () => {
        if (senhaRef) {
            const type = senhaRef.current?.getAttribute("type");
            if (type === "text") {
                senhaRef.current?.setAttribute("type", "password");
            } else if (type === "password") {
                senhaRef.current?.setAttribute("type", "text");
            }
        }
    };

    const Login = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (validationEmail(email) && senha.length >= 8) {
            const result = await authentication(email, senha);
            if (result) {
                return;
            } else {
                setFailure(true);
            }
        }
        if (validationEmail(email) === false) {
            setSpanEmail(true);
        } else {
            setSpanEmail(false);
        }
    };

    return (
        <>
            {!token && (
                <>
                    <MinHeader />
                    <main>
                        <S.Content>
                            <div className="title">
                                <AiOutlineUser />
                                <p>login do cliente</p>
                            </div>
                            <p className="subtitle">
                                Veja seus pedidos de forma fácil, compre mais rápido <br /> e tenha
                                uma experiência personalizada :)
                            </p>

                            {failure && (
                                <div className="failure">
                                    <AiOutlineCloseCircle />
                                    <p>E-mail ou senha incorretos</p>
                                </div>
                            )}
                      
                            <S.Form onSubmit={Login}>
                                <label className="inputs">
                                    <p>
                                        <span>*</span> e-mail
                                    </p>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Digite seu e-mail"
                                        value={email}
                                        onChange={changeEmail}
                                        style={{
                                            border: `${EmailBorder}`,
                                        }}
                                    />
                                    {spanEmail && (
                                        <span
                                            style={{
                                                display: "block",
                                            }}>
                                            campo inválido
                                        </span>
                                    )}
                                </label>

                                <label className="inputs">
                                    <div className="senhaTopicLabel">
                                        <p>
                                            <span>*</span> senha
                                        </p>
                                        <p>esqueceu?</p>
                                    </div>
                                    <div className="senhaInput">
                                        <input
                                            type="password"
                                            placeholder="Digite sua senha"
                                            value={senha}
                                            onChange={changeSenha}
                                            ref={senhaRef}
                                            minLength={8}
                                            required
                                            style={{
                                                border: `${SenhaBorder}`,
                                            }}
                                        />
                                        <BsEyeSlash onClick={hiddenSenha} />
                                    </div>

                                </label>
                                <button type="submit">Continuar</button>
                            </S.Form>

                            <p className="register">
                                Não tem cadastro? <Link href="/register">cadastre-se</Link>
                            </p>

                            <p className="politicprivacy">
                                Ao continuar com o acesso, você concorda com a nossa{" "}
                                <Link href="/">política de privacidade</Link>
                            </p>
                        </S.Content>
                        <S.Modal>
                            <p>email: eve.holt@reqres.in</p>
                            <p>senha: cityslicka</p>
                        </S.Modal>
                    </main>
                </>
            )}
        </>
    );
};
export default LoginContent;
