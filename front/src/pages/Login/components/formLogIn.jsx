import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/formInput";
import axios from "axios";
import useVerify from "../../../hooks/useVerify"
import verifications from "../../../Verify arguments/verifyLogIn.json"

function FormLogIn() {
    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();

    const [form, setForm] = useState({ emailLog: null, passwordLog: null });
    const [backMessages, setBackMessages] = useState({ emailLog: null, passwordLog: null, });

    let formValues = [{ inputValue: form.emailLog }, { inputValue: form.passwordLog }]

    let { verifyForm, verifyMessages } = useVerify(formValues, verifications);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyForm();
        await axios.post(`${URI}`, form, { withCredentials: true })
            .then((response) => {
                if (response.data.si) {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    navigate('/inicio');
                } else {
                    setBackMessages({
                        emailLog: null,
                        passwordLog: null,
                    })
                    setBackMessages(prevBackMessages => ({
                        ...prevBackMessages, [response.data.input]: response.data.alertMessage,
                    }))
                }
            })
    }

    return (
        <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
            <FormInput
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email" handleChange={handleChange}
                verifyInput={verifyMessages.emailLog && verifyMessages.emailLog !== true ? verifyMessages.emailLog : backMessages.emailLog} />
            <FormInput
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña" handleChange={handleChange}
                verifyInput={verifyMessages.passwordLog && verifyMessages.passwordLog !== true ? verifyMessages.passwordLog
                    : backMessages.passwordLog} />
            <input type="submit" value="Ingresar"
                className={`w-44 cursor-pointer border-none text-white text-base font-medium bg-celesteValtech`} />
        </form>
    );
}

export default FormLogIn;