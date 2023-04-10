import React, { useRef, useState, useContext, useEffect } from "react";
import MinHeader from "../../layout/minHeader";
import * as S from "./styles";
import { BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { AiOutlineCloseCircle } from "react-icons/ai";

const RegisterContent = () => {
    const router = useRouter();
    const { simulateRegister, token } = useContext<contextAuthUser>(AuthUserContext);
    const senhaRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const [NameBorder, setNameBorder] = useState<string>("1px solid grey");
    const [CpfBorder, setCpfBorder] = useState<string>("1px solid grey");
    const [DateBorder, setDateBorder] = useState<string>("1px solid grey");
    const [PhoneBorder, setPhoneBorder] = useState<string>("1px solid grey");
    const [EmailBorder, setEmailBorder] = useState<string>("1px solid grey");
    const [SenhaBorder, setSenhaBorder] = useState<string>("1px solid grey");

    const [failure, setFailure] = useState<boolean>(false);

    useEffect(() => {
        if (token) {
            router.push("/");
        }
    }, [token]);

    const changeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        if (e.currentTarget.value.length > 1) {
            setNameBorder("1px solid green");
        } else {
            setNameBorder("1px solid red");
        }
    };

    const changeCpf = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
        setCpf(cpfMask(value));
        if (e.currentTarget.value.length === 14) {
            setCpfBorder("1px solid green");
        } else {
            setCpfBorder("1px solid red");
        }
    };

    const changeDate = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
        setDate(dateMask(value));
        if (e.currentTarget.value.length === 10) {
            setDateBorder("1px solid green");
        } else {
            setDateBorder("1px solid red");
        }
    };

    const changePhone = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
        setPhone(phoneMask(value));
        if (e.currentTarget.value.length === 15) {
            setPhoneBorder("1px solid green");
        } else {
            setPhoneBorder("1px solid red");
        }
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
        if (e.currentTarget.value.length >= 8) {
            setSenhaBorder("1px solid green");
        } else {
            setSenhaBorder("1px solid red");
        }
    };

    const cpfMask = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2");
    };
    const dateMask = (value: string) => {
        const v = value.replace(/\D/g, "").slice(0, 10);
        if (v.length >= 5) {
            return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
        } else if (v.length >= 3) {
            return `${v.slice(0, 2)}/${v.slice(2)}`;
        }
        return v;
    };

    const phoneMask = (value: string) => {
        if (!value) return "";
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
    };

    const validationEmail = (email: string) => {
        const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return regex.test(email);
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

    const register = () => {
        console.log("regsiter");
        if (
            validationEmail(email) &&
            name.length >= 1 &&
            cpf.length === 14 &&
            date.length === 10 &&
            phone.length === 15 &&
            senha.length >= 8
        ) {
            const token = "656565";
            simulateRegister(email, token);
        } else {
            setFailure(true);
        }
        return;
    };

    return (
        <>
            {!token && (
                <>
                    <MinHeader />
                    <main>
                        <S.Content>
                            <p className="title">criar seu cadastro</p>
                            <span className="subtitle">
                                veja seus pedidos de forma fácil, compre mais rápido e tenha uma
                                <br /> experiência personalizada :)
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "black" }}>
                                <span style={{ color: "red" }}>*</span> campos obrigatórios
                            </span>

                            {failure && (
                                <S.Failure>
                                    <AiOutlineCloseCircle />
                                    <p>Verifique todos os campos</p>
                                </S.Failure>
                            )}
                            <S.Form>
                                <S.Item>
                                    <p>
                                        <span className="ast">*</span> nome completo
                                    </p>

                                    <S.Input
                                        width="70%"
                                        type="text"
                                        value={name}
                                        onChange={changeName}
                                        required
                                        style={{ border: `${NameBorder}` }}
                                    />
                                </S.Item>
                                <S.ItemGenre>
                                    <p>
                                        <span className="ast">*</span> gênero
                                    </p>
                                    <p className="legend">
                                        pra gente te conhecer um pouquinho melhor :)
                                    </p>
                                    <label className="radios">
                                        <input type="radio" value="Female" name="gender" required />
                                        feminino
                                    </label>
                                    <label className="radios">
                                        <input type="radio" value="Male" name="gender" required />
                                        masculino
                                    </label>
                                    <label className="radios">
                                        <input type="radio" value="Other" name="gender" required />
                                        não informar
                                    </label>
                                </S.ItemGenre>
                                <S.Item>
                                    <p>
                                        <span className="ast">*</span> data de nascineto
                                    </p>
                                    <p className="legend">
                                        necessário pra identificar a maioridade, no formato
                                        DD/MM/AAAA
                                    </p>
                                    <S.Input
                                        width="30%"
                                        type="text"
                                        placeholder="00/00/0000"
                                        value={date}
                                        onChange={changeDate}
                                        maxLength={10}
                                        minLength={10}
                                        required
                                        style={{ border: `${DateBorder}` }}
                                    />
                                </S.Item>
                                <S.Item>
                                    <p>
                                        <span className="ast">*</span> cpf
                                    </p>
                                    <p className="legend">
                                        necessário pra emissão das Notas Fiscais
                                    </p>
                                    <S.Input
                                        width="30%"
                                     
                                        type="text"
                                        placeholder="___ ___ ___ - __"
                                        value={cpf}
                                        onChange={changeCpf}
                                        maxLength={14}
                                        minLength={14}
                                        required
                                        style={{ border: `${CpfBorder}` }}
                                    />
                                </S.Item>
                                <S.Item>
                                    <p>
                                        <span>*</span> telefone
                                    </p>
                                    <p className="legend">
                                        caso a gente precise entrar em contato sobre seus pedidos
                                    </p>
                                    <S.Input
                                        width="30%"
                                 
                                        type="text"
                                        placeholder="(__) _____ - ____"
                                        value={phone}
                                        onChange={changePhone}
                                        maxLength={15}
                                        minLength={15}
                                        required
                                        style={{ border: `${PhoneBorder}` }}
                                    />
                                </S.Item>
                                <S.Item>
                                    <p>
                                        <span>*</span> email
                                    </p>
                                    <p className="legend">
                                        informe um e-mail válido. Você vai precisar ativar sua conta
                                        depois de criar seu cadastro
                                    </p>
                                    <S.Input
                                        autoComplete="new-email"
                                        width="70%"
                                    
                                        type="text"
                                        value={email}
                                        onChange={changeEmail}
                                        required
                                        style={{ border: `${EmailBorder}` }}
                                    />
                                </S.Item>
                                <S.ItemSenha>
                                    <p>
                                        <span>*</span> senha
                                    </p>
                                    <p className="legend">precisa ter entre 8 e 20 caracteres</p>

                                    <div>
                                        <S.InputSenha
                                            autoComplete="new-password"
                                          
                                            type="password"
                                            ref={senhaRef}
                                            placeholder="Digite sua senha"
                                            minLength={8}
                                            required
                                            value={senha}
                                            onChange={changeSenha}
                                            style={{ border: `${SenhaBorder}` }}
                                        />
                                        <BsEyeSlash onClick={hiddenSenha} />
                                    </div>
                                </S.ItemSenha>

                                <button onClick={register}>criar seu cadastro</button>
                            </S.Form>
                            <p style={{ marginTop: "2rem" }}>
                                Não se preocupe, nosso site é seguro! Ao criar o seu cadastro,{" "}
                                <br /> você concorda com a nossa&nbsp;
                                <Link href="/" style={{ textDecoration: "underline" }}>
                                    política de privacidade
                                </Link>
                            </p>
                            <p style={{ marginTop: "2rem" }}>
                                já tem cadastro?&nbsp;
                                <Link href="/login" style={{ textDecoration: "underline" }}>
                                    entrar
                                </Link>
                            </p>
                        </S.Content>
                    </main>
                </>
            )}
        </>
    );
};

export default RegisterContent;
