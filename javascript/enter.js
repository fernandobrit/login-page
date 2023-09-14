 else {
    alert('Email ou Senha incorretos, tente novamente.')
}


senha.addActionListener(new ActionListener() {
public void actionPerformed(ActionEvent ev) {
    // código a ser executado se pressionar 
    // ENTER no campo 'senha'
    doLogin(ENTER);  // EXEMPLO
}
});