import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField, Typography
} from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';
import Snackbar from '../../utils/Snackbar';

// type LoginPros = {
//     password: string | null | undefined | FormDataEntryValue;
//     email: string | null | undefined;
// }

export default function Login() {
    const [password, setPassword] = useState<string | null | undefined | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null | undefined>('');
    const [errorMensage, setErrorMensage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        setPassword(data.get('password'));
    }
    useEffect(() => {
        if (password && password.length < 6) {
            setError(true);
            setErrorMensage('A senha dever ter no mínimo 6 caracteres');
        } else if (password) {
            setError(false);
            setErrorMensage('');

            // chamar a API do server para validar usuário e senha.
            // adicionar o snackbar
            setOpen(true);
            console.log(open);
            console.log(password);
            // fazer o redirect
        }
    }, [password]);
    return (
        <Box sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography component="h1" variant="h5">
                Tela de Login
            </Typography>
            {/* Qualquer comentário */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField margin="normal" required id="email" name="email" variant="standard" fullWidth label="Digite o login" autoComplete="email" />
                <TextField margin="normal" required id="password" name="password" variant="standard" fullWidth type="password" label="Digite a senha" autoComplete="current-password" />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Lembrar-me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Login
                </Button>
                {error && <Typography color="error">{errorMensage}</Typography>}
                {open && <Snackbar open={open} hide={5} message={'Usuário logado com sucesso! ...Aguarde...'} severity="success" />}

            </Box>
        </Box>
    )
}
