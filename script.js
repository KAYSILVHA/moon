//chamando os ids no html
let dataDoHtml = document.getElementById('dataDoHtml');
let luaDeHoje = document.getElementById('luaDeHoje');
let luaDescription = document.getElementById('luaDescription');
let pDescription = document.getElementById('p-description');
let luaImg = document.getElementById('luaImg');
let faseDaLua = document.getElementById('fase-da-lua');
let habits = document.getElementById('habits');
let habitsMudar = document.getElementById('habits-description');

//funcoes criadas
habits.addEventListener('click', () =>{
  mudancaDeHabitos();
})


let { anoDoisUltimosDigitos, dia, mes } = descobrindoData();
descobrindoLuaEAlterandoInfo();

//funcoes declaradas
function mudancaDeHabitos() {
  let conta = ((anoDoisUltimosDigitos + 2) * 11 + dia + mes) % 30;

  //let conta = ?;
  if (conta >= 0 && conta <= 7) {
    habits.classList.add(`clicked`);
    habitsMudar.classList.add('habits-description-modific');
    habitsMudar.innerHTML = `
    <h3>Relaxamento em geral</h3>
    <p>
      1) Tenha uma rotina de sono
      Estabelecer uma rotina noturna consistente, com atividades repetidas diariamente, sinaliza ao cérebro a hora de relaxar e dormir, sendo altamente recomendado.
    </p>
    <p>
      2) Tome um banho quente e relaxante
      Banhos quentes relaxam os músculos, promovendo um sono profundo, tornando-os benéficos para o descanso noturno.
    </p>
    <p>
      3) Respire profundamente
      A respiração profunda, ao exigir concentração e oxigenar o cérebro, tem um poderoso efeito relaxante. Isso acalma a mente, reduzindo o enrijecimento muscular associado à ansiedade e preocupação.
    </p>
    <p>
      4) Medite
      A meditação utiliza a respiração profunda para ajudar a limpar a mente de preocupações e ansiedades, favorecendo um sono mais profundo. (Você pode usar os sons do no app se quiser)
    </p>`;

  } else if (conta >= 8 && conta <= 14) {
    habits.classList.add(`clicked`);
    habitsMudar.classList.add('habits-description-modific');
    habitsMudar.innerHTML = `
    <h3>Redução de Cortisol e aumento da Melatonina</h3>
  <p>
    1) Hidrate-se corretamente
    Tomar água regularmente e manter o corpo hidratado são ótimos para evitar os efeitos indesejados do aumento do cortisol
  </p>
  
  <p>
    2) Não durma num ambiente muito claro
    Um ambiente com baixa luminosidade favorece um sono mais profundo e restaurador, contribuindo para o equilíbrio do ciclo circadiano
  </p>

  <p>
    3) Anote as tarefas do dia seguinte
    Bom para pessoas agitadas. Fazer uma lista de afazeres para o dia seguinte antes de dormir tranquiliza o cérebro ao garantir que as tarefas foram registradas. Isso permite um relaxamento mais profundo durante o sono.
  </p>
  <p>
  4) Escreva as preocupações
  Manter um diário para escrever as preocupações ajuda a liberar os pensamentos da mente, assim como a meditação.
  </p>`;
  } else if (conta >= 15 && conta < 21) {
    habits.classList.add(`clicked`);
    habitsMudar.classList.add('habits-description-modific');
    habitsMudar.innerHTML = `
    <h3>Relaxe e cuide da Saúde</h3>
  <p>
    1) Não durma num ambiente muito claro
    Um ambiente com baixa luminosidade favorece um sono mais profundo e restaurador, contribuindo para o equilíbrio do ciclo circadiano.
  </p>
    <p>
      2) Coma certos alimentos antes de dormir
      Nozes, frutas como kiwi, banana, ameixa seca e morango, laticínios e aveia são alguns exemplos.
    </p>
  <p>
    3) Diminuir a cafeína
    Ao reduzir o consumo, é possível equilibrar os níveis de cortisol e promover uma resposta mais saudável ao estresse.
  </p>`;
  } else if (conta >= 21 && conta <= 28) {
    habits.classList.add(`clicked`);
    habitsMudar.classList.add('habits-description-modific');
    habitsMudar.innerHTML = `
    <h3>Relaxe e cuide da Saúde</h3>
  <p>
    1) Não durma num ambiente muito claro
    Um ambiente com baixa luminosidade favorece um sono mais profundo e restaurador, contribuindo para o equilíbrio do ciclo circadiano.
  </p>
  <p>
      2) Coma certos alimentos antes de dormir
      Nozes, frutas como kiwi, banana, ameixa seca e morango, laticínios e aveia são alguns exemplos
  </p>

  <p>
    3) Diminuir a cafeína
    Ao reduzir o consumo, é possível equilibrar os níveis de cortisol e promover uma resposta mais saudável ao estresse.
  </p>`;
  }
}
function descobrindoLuaEAlterandoInfo() {
  //para testar os layouts comente essa linha abaixo e remova as barras da linha -const conta = ?;- , adicone um dos valores representados abaixo:
  // 0 a 7 Lua Nova
  // 8 a 14 Lua Crescente
  // 15 a 21 Lua Cheia 
  // 21 a 28 Lua Minguante
  let conta = ((anoDoisUltimosDigitos + 2) * 11 + dia + mes) % 30;
  //const conta = 28;
  if (conta >= 0 && conta <= 7) {
    faseDaLua.setAttribute('src', './lua-nova.png');
    luaDeHoje.innerText = `Lua Nova`;
    luaImg.setAttribute('src', './lua-nova.png');
    luaDescription.innerText = `Lua Nova`;
    pDescription.innerText = `É o momento em que não se vê a Lua no céu. Nesse período, apenas a face que não é voltada para a Terra recebe a luz solar e por esse motivo não a enxergamos no céu.`;
  } else if (conta >= 8 && conta <= 14) {
    faseDaLua.setAttribute('src', './lua-crescente.png');
    luaDeHoje.innerText = `Lua Crescente`;
    luaImg.setAttribute('src', './lua-crescente.png');
    luaDescription.innerText = `Lua Crescente`;
    pDescription.innerText = `Considerada a fase de transição da Lua nova para a Lua cheia, a Lua crescente é caracterizada por receber luminosidade em apenas uma face (no lado oposto da minguante).`;
  } else if (conta >= 15 && conta < 21) {
    faseDaLua.setAttribute('src', './lua-cheia.png');
    luaDeHoje.innerText = `Lua Cheia`;
    luaImg.setAttribute('src', './lua-cheia.png');
    luaDescription.innerText = `Lua Cheia`;
    pDescription.innerText = `Nessa fase, a lua está posicionada do lado oposto ao Sol. Por essa razão, conseguimos visualizar por completo a sua face iluminada. Uma vez que a Terra está posicionada entre a lua e o Sol, é nessa fase que acontecem os eclipses lunares.`;
  } else if (conta >= 21 && conta <= 28) {
    faseDaLua.setAttribute('src', './lua-minguante.png');
    luaDeHoje.innerText = `Lua Minguante`;
    luaImg.setAttribute('src', './lua-minguante.png');
    luaDescription.innerText = `Lua Minguante`;
    pDescription.innerText = `Também chamada de quarto minguante, tem como característica a formação de um semicírculo do lado oposto ao quarto crescente. Lua nova: é caracterizada pela iluminação da Lua somente do lado oposto ao visível na Terra. Portanto, nessa fase não é possível ver a Lua a olho nu do planeta Terra.`;
  }
}
function descobrindoData() {
  let now = new Date;
  let dia = now.getDate();
  let mes = now.getMonth() + 1;
  let ano = now.getFullYear();
  let anoDoisUltimosDigitos = ano % 100;

  let dataAtual = `${dia}/${mes}/${ano}`;
  let dataAtualModificada = 0;

  if (dia < 10) {
    dataAtualModificada = `0${dia}/0${mes}/${ano}`;
    dataDoHtml.innerText = `${dataAtualModificada}`;
  } else {
    dataDoHtml.innerText = `${dataAtual}`;
  }
  return { anoDoisUltimosDigitos, dia, mes };
}

