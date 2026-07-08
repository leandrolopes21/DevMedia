@echo off
title Servico
echo ===================================================
echo     Iniciando o Servidor de Acesso
echo ===================================================
echo.

:: Inicia o Back-end (API) em uma nova janela separada
echo Iniciando API Back-end...
cd /d "%~dp0back-end"
start "Servidor API" node index.js

:: Aguarda 2 segundos para o servidor subir e abre o navegador no Front-end (porta 3000)
timeout /t 2 /nobreak > nul
start "" "http://localhost:3000/"

:: Navega para a pasta do Front-end e inicia o Next.js nesta janela
echo Iniciando Front-end Next.js...
cd /d "%~dp0front-end"
call npm run dev

:: Mantem a janela aberta caso ocorra algum erro critico
pause