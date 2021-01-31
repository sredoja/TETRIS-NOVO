function jogo() {

    var botao = document.getElementById('btn');
    botao.parentNode.removeChild(botao)
    var canvas = document.getElementById('tela');
    var ctx = canvas.getContext('2d');
    var tela = {l:240, a:440};
    var bloco = {l:tela.l/12, a:tela.a/22};
    var grid = {l:[0, 0+bloco.l, 0+bloco.l*2, 0+bloco.l*3, 0+bloco.l*4, 0+bloco.l*5, 
                   0+bloco.l*6, 0+bloco.l*7, 0+bloco.l*8, 0+bloco.l*9,  0+bloco.l*10, 
                   0+bloco.l*11],
                a:[0, 0+bloco.a, 0+bloco.a*2, 0+bloco.a*3, 0+bloco.a*4, 0+bloco.a*5, 0+bloco.a*6,
                   0+bloco.a*7, 0+bloco.a*8, 0+bloco.a*9, 0+bloco.a*10, 0+bloco.a*11, 0+bloco.a*12,
                   0+bloco.a*13, 0+bloco.a*14, 0+bloco.a*15, 0+bloco.a*16, 0+bloco.a*17, 0+bloco.a*18,
                   0+bloco.a*19, 0+bloco.a*20, 0+bloco.a*21]}
    var local = {l:5, a:0}
    var inicio = 5+15
    var peça = {tipo:1, lado:2}
    var tile1
    var tile2
    var tile3
    var tile4
    var altura = 0
    var largura = 0
    
    var xy = 15 // 15 = 0  + 14 desce 1, + 1 vai 1 para o lado
    
    //         1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14
    var pos = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //1
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //2
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //3
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //4
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //5
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //6
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //7
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //8
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //9
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //10
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //11
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //12
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //13
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //14
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //15
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //16
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //17
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //18
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //19
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //20
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //21
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //22
               2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, //23
               2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] //24
    
    var ocupado = {l:[], a:[]}
    var parede = {total:[], esquerda:[], direita:[]}
    var placar = document.getElementById('pontos');
    var pontos = 0
    var pausa = false
    
    int = setInterval(funciona, 200)
    
    
    
    
    vetorParede()
    //alert(`parede esquerda é: ${parede.esquerda}.
    //parede direita é: ${parede.direita}.
    //parede total é: ${parede.total}.`)
    centralizar()
    criar()
    limpaTela()
    desenhar()
    
    function ponto(){
     
      var linha1 = {l:[pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], pos[7], pos[8], pos[9], pos[10], pos[11], pos[12]], c:[]}
      var linha2 = {l:[pos[15], pos[16], pos[17], pos[18], pos[19], pos[20], pos[21], pos[22], pos[23], pos[24], pos[25], pos[26]], c:[]}
      var linha3 = {l:[pos[29], pos[30], pos[31], pos[32], pos[33], pos[34], pos[35], pos[36], pos[37], pos[38], pos[39], pos[40]], c:[]}
      var linha4 = {l:[pos[43], pos[44], pos[45], pos[46], pos[47], pos[48], pos[49], pos[50], pos[51], pos[52], pos[53], pos[54]], c:[]}
      var linha5 = {l:[pos[57], pos[58], pos[59], pos[60], pos[61], pos[62], pos[63], pos[64], pos[65], pos[66], pos[67], pos[68]], c:[]}
      var linha6 = {l:[pos[71], pos[72], pos[73], pos[74], pos[75], pos[76], pos[77], pos[78], pos[79], pos[80], pos[81], pos[82]], c:[]}
      var linha7 = {l:[pos[85], pos[86], pos[87], pos[88], pos[89], pos[90], pos[91], pos[92], pos[93], pos[94], pos[95], pos[96]], c:[]}
      var linha8 = {l:[pos[99], pos[100], pos[101], pos[102], pos[103], pos[104], pos[105], pos[106], pos[107], pos[108], pos[109], pos[110]], c:[]}
      var linha9 = {l:[pos[113], pos[114], pos[115], pos[116], pos[117], pos[118], pos[119], pos[120], pos[121], pos[122], pos[123], pos[124]], c:[]}
      var linha10 = {l:[pos[127], pos[128], pos[129], pos[130], pos[131], pos[132], pos[133], pos[134], pos[135], pos[136], pos[137], pos[138]], c:[]}
      var linha11 = {l:[pos[141], pos[142], pos[143], pos[144], pos[145], pos[146], pos[147], pos[148], pos[149], pos[150], pos[151], pos[152]], c:[]}
      var linha12 = {l:[pos[155], pos[156], pos[157], pos[158], pos[159], pos[160], pos[161], pos[162], pos[163], pos[164], pos[165], pos[166]], c:[]}
      var linha13 = {l:[pos[169], pos[170], pos[171], pos[172], pos[173], pos[174], pos[175], pos[176], pos[177], pos[178], pos[179], pos[180]], c:[]}
      var linha14 = {l:[pos[183], pos[184], pos[185], pos[186], pos[187], pos[188], pos[189], pos[190], pos[191], pos[192], pos[193], pos[194]], c:[]}
      var linha15 = {l:[pos[197], pos[198], pos[199], pos[200], pos[201], pos[202], pos[203], pos[204], pos[205], pos[206], pos[207], pos[208]], c:[]}
      var linha16 = {l:[pos[211], pos[212], pos[213], pos[214], pos[215], pos[216], pos[217], pos[218], pos[219], pos[220], pos[221], pos[222]], c:[]}
      var linha17 = {l:[pos[225], pos[226], pos[227], pos[228], pos[229], pos[230], pos[231], pos[232], pos[233], pos[234], pos[235], pos[236]], c:[]}
      var linha18 = {l:[pos[239], pos[240], pos[241], pos[242], pos[243], pos[244], pos[245], pos[246], pos[247], pos[248], pos[249], pos[250]], c:[]}
      var linha19 = {l:[pos[253], pos[254], pos[255], pos[256], pos[257], pos[258], pos[259], pos[260], pos[261], pos[262], pos[263], pos[264]], c:[]}
      var linha20 = {l:[pos[267], pos[268], pos[269], pos[270], pos[271], pos[272], pos[273], pos[274], pos[275], pos[276], pos[277], pos[278]], c:[]}
      var linha21 = {l:[pos[281], pos[282], pos[283], pos[284], pos[285], pos[286], pos[287], pos[288], pos[289], pos[290], pos[291], pos[292]], c:[]}
      var linha22 = {l:[pos[295], pos[296], pos[297], pos[298], pos[299], pos[300], pos[301], pos[302], pos[303], pos[304], pos[305], pos[306]], c:[]}
      var linha23 = {l:[pos[309], pos[310], pos[311], pos[312], pos[313], pos[314], pos[315], pos[316], pos[317], pos[318], pos[319], pos[320]], c:[]}
      
      for (i=0; i<12; i++) {
        if (linha23.l[i] == 1) {
          linha23.c.push(1)
        }
        if (linha22.l[i] == 1) {
          linha22.c.push(1)
        }
        if (linha21.l[i] == 1) {
          linha21.c.push(1)
        }
        if (linha20.l[i] == 1) {
          linha20.c.push(1)
        }
        if (linha19.l[i] == 1) {
          linha19.c.push(1)
        }
        if (linha18.l[i] == 1) {
          linha18.c.push(1)
        }
        if (linha17.l[i] == 1) {
          linha17.c.push(1)
        }
        if (linha16.l[i] == 1) {
          linha16.c.push(1)
        }
        if (linha15.l[i] == 1) {
          linha15.c.push(1)
        }
        if (linha14.l[i] == 1) {
          linha14.c.push(1)
        }
        if (linha13.l[i] == 1) {
          linha13.c.push(1)
        }
        if (linha12.l[i] == 1) {
          linha12.c.push(1)
        }
        if (linha11.l[i] == 1) {
          linha11.c.push(1)
        }
        if (linha10.l[i] == 1) {
          linha10.c.push(1)
        }
        if (linha9.l[i] == 1) {
          linha9.c.push(1)
        }
        if (linha8.l[i] == 1) {
          linha8.c.push(1)
        }
        if (linha7.l[i] == 1) {
          linha7.c.push(1)
        }
        if (linha6.l[i] == 1) {
          linha6.c.push(1)
        }
        if (linha5.l[i] == 1) {
          linha5.c.push(1)
        }
        if (linha4.l[i] == 1) {
          linha4.c.push(1)
        }
        if (linha3.l[i] == 1) {
          linha3.c.push(1)
        }
        if (linha2.l[i] == 1) {
          linha2.c.push(1)
        }
        if (linha1.l[i] == 1) {
          linha1.c.push(1)
        }
      }
      
      if (linha23.c.length == linha23.l.length) {
        pos.splice(307, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha23.c = []
      }
      
      if (linha22.c.length == linha22.l.length) {
        pos.splice(293, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha22.c = []
      }
      
      if (linha21.c.length == linha21.l.length) {
        pos.splice(279, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha21.c = []
      }
      
      if (linha20.c.length == linha20.l.length) {
        pos.splice(265, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha20.c = []
      }
      
      if (linha19.c.length == linha19.l.length) {
        pos.splice(251, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha19.c = []
      }
      
      if (linha18.c.length == linha18.l.length) {
        pos.splice(237, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha18.c = []
      }
      
      if (linha17.c.length == linha17.l.length) {
        pos.splice(223, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha17.c = []
      }
      
      if (linha16.c.length == linha16.l.length) {
        pos.splice(209, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha16.c = []
      }
      
      if (linha15.c.length == linha15.l.length) {
        pos.splice(195, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha15.c = []
      }
      
      if (linha14.c.length == linha14.l.length) {
        pos.splice(181, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha14.c = []
      }
      
      if (linha13.c.length == linha13.l.length) {
        pos.splice(167, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha13.c = []
      }
      
      if (linha12.c.length == linha12.l.length) {
        pos.splice(153, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha12.c = []
      }
      
      if (linha11.c.length == linha11.l.length) {
        pos.splice(139, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha11.c = []
      }
      
      if (linha10.c.length == linha10.l.length) {
        pos.splice(125, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha10.c = []
      }
      
      if (linha9.c.length == linha9.l.length) {
        pos.splice(111, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha9.c = []
      }
      
      if (linha8.c.length == linha8.l.length) {
        pos.splice(97, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha8.c = []
      }
      
      if (linha7.c.length == linha7.l.length) {
        pos.splice(83, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha7.c = []
      }
      
      if (linha6.c.length == linha6.l.length) {
        pos.splice(69, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha6.c = []
      }
      
      if (linha5.c.length == linha5.l.length) {
        pos.splice(55, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha5.c = []
      }
      
      if (linha4.c.length == linha4.l.length) {
        pos.splice(41, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha4.c = []
      }
      
      if (linha3.c.length == linha3.l.length) {
        pos.splice(27, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha3.c = []
      }
      
      if (linha2.c.length == linha2.l.length) {
        pos.splice(13, 14)
        pos.unshift(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2)
        pontos++
        linha2.c = []
      }
    }
    
    /*function ponto() {
      corte = []
      for(linha=1; linha<=pos.length; linha=linha+14) {
        for(i=0; i<12; i++) {
          if (pos[linha+i] == 1) {
            corte.push(1)
          }
           if (corte.length == 12) {
            alert('cortar')
            corte = []
           }
        }
      }
    }
    */
    function vetorParede() {
      for (i=0; i<=pos.length; i++) {
        if (pos[i]==2) {
          parede.total.push(i)
        }
      }
      
      for (i=0; i<=46; i=i+2) {
        parede.esquerda.push(parede.total[i])
      }
      
      for (i=1; i<=47; i=i+2) {
        parede.direita.push(parede.total[i])
      }
    }
    
    
    window.addEventListener('keydown', movimento)
    
    function funciona(){
      descer(peça.tipo, peça.lado)
      placar.innerText = `Pontos: ${pontos}`
    }
    
    function limpaTela() {
      ctx.clearRect(0, 0, 600, 600);
    }
    
    function desenhar() {
     for (linha=0; linha<=24; linha++) {
       for (coluna=0; coluna<=14; coluna++){
        if (pos[coluna+14*linha] != 0) {
        ctx.fillStyle = "black";
        ctx.fillRect(grid.l[coluna-1], grid.a[linha-1], bloco.l, bloco.a)
        }
       }
     }
    }
    
    function descer(tipo, lado) {
      switch (tipo) {
        case 1:
          switch (lado) {
            case 1:
              if(pos[tile1 + 14] == 0 && pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile1 + 14] == 0 && pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
        case 2:
          switch (lado) {
            case 1:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile2 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile1 + 14] == 0 && pos[tile2 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
        case 3:
          switch(lado) {
            case 1:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile1 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
        case 4:
          switch(lado) {
            case 1:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
        case 5:
          switch(lado) {
            case 1:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile2 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile2 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
        case 6:
          switch(lado) {
            case 1:
              if(pos[tile2 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile1 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile2 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;          
          }
        break;
        case 7:
          switch(lado) {
            case 1:
              if(pos[tile1 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 2:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 3:
              if(pos[tile1 + 14] == 0 && pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
            case 4:
              if(pos[tile3 + 14] == 0 && pos[tile4 + 14] == 0) {
                zeraTile()
                desceTile()
                limpaTela()
                andar()
                xy = xy+14
              } else {
                limpaTela()
                centralizar()
                criar()
              }
            break;
          }
        break;
      }
    }
     
    function movimento() {
      switch (event.keyCode) {
        case 40: //baixo
         descer(peça.tipo, peça.lado)
        break;
        case 37: //esquerda
          esquerda(peça.tipo, peça.lado)
        break;
        case 39: //direita
          direita(peça.tipo, peça.lado)
        break;  
        case 32: //espaço
          viraPeça()
        break;
        case 13: //enter
          pause()
        break;
      }
    }
    
    function pause() {
      if (pausa == false) {
        clearInterval(int)
        pausa = true
      } else if (pausa == true) {
        int = setInterval(funciona, 200)
        pausa = false
      }
    }
      
    function esquerda(tipo, lado) {
      switch(tipo) {
        case 1:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile3 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile3 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 2:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 3:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 4:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 5:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 6:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
        case 7:
          switch(lado) {
            case 1:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 3:
              if(pos[tile1 - 1] == 0 && pos[tile3 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 - 1] == 0 && pos[tile2 -1] == 0 && pos[tile4 -1] == 0) {
                zeraTile()
                tile1 = tile1-1
                tile2 = tile2-1
                tile3 = tile3-1
                tile4 = tile4-1
                limpaTela()
                andar()
                xy--
                desenhar()
              }
            break;
          }
        break;
      }
    }
    
    function direita(tipo, lado) {
      switch(tipo) {
        case 1:
          switch(lado) {
            case 1:
              if(pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 + 1] == 0 && pos[tile2 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 + 1] == 0 && pos[tile2 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 2:
          switch(lado) {
            case 1:
              if(pos[tile1 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile2 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 + 1] == 0 && pos[tile2 + 1] == 0 && pos[tile3 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 3:
          switch(lado) {
            case 1:
              if(pos[tile1 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 + 1] == 0 && pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile2 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 4:
          switch(lado) {
            case 1:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 5:
          switch(lado) {
            case 1:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 6:
          switch(lado) {
            case 1:
              if(pos[tile1 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
        case 7:
          switch(lado) {
            case 1:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 2:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 3:
              if(pos[tile2 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
            case 4:
              if(pos[tile1 + 1] == 0 && pos[tile3 + 1] == 0 && pos[tile4 + 1] == 0) {
                zeraTile()
                tile1 = tile1+1
                tile2 = tile2+1
                tile3 = tile3+1
                tile4 = tile4+1
                limpaTela()
                andar()
                xy++
                desenhar()
              }
            break;
          }
        break;
      }
    }
    
    function zeraTile() {
      pos[tile1] = 0
      pos[tile2] = 0
      pos[tile3] = 0
      pos[tile4] = 0
    }
    
    function centralizar() {
      xy = 20
    }
    
    function andar() {
      ponto()
      pos[tile1] = 1
      pos[tile2] = 1
      pos[tile3] = 1
      pos[tile4] = 1
      desenhar()
    }
    
    function criar() {
      peça.tipo = getRandomInt(1, 8)
      peça.lado = getRandomInt(1, 5)
      peças(peça.tipo, peça.lado)
      andar()
    }
      
    function desceTile() {
      tile1 = tile1 + 14
      tile2 = tile2 + 14
      tile3 = tile3 + 14
      tile4 = tile4 + 14
    }
    
    function peças(tipo, lado) {
      switch (tipo) {
        case 1:
          switch (lado) {
            case 1:
              tile1 = xy-1
              tile2 = xy
              tile3 = xy+1
              tile4 = xy+2
            break;
            case 2:
              tile1 = xy-14
              tile2 = xy
              tile3 = xy+14
              tile4 = xy+14*2
            break;
            case 3:
              tile1 = xy-1
              tile2 = xy
              tile3 = xy+1
              tile4 = xy+2
            break;
            case 4:
              tile1 = xy-14
              tile2 = xy
              tile3 = xy+14
              tile4 = xy+14*2
            break;
          }
          break;
        case 2:
          switch (lado) {
            case 1:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+15
              tile4 = xy+16
            break;
            case 2:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+14
              tile4 = xy+14+14
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+2
              tile4 = xy+2+14
            break;
            case 4:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+14+14
              tile4 = xy+14+13
            break;
          }
          break;
        case 3:
          switch (lado) {
            case 1:
              tile1 = xy+1
              tile2 = xy+13
              tile3 = xy+14
              tile4 = xy+15
            break;
            case 2:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+14+14
              tile4 = xy+14+15
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+2
              tile4 = xy+14
            break;
            case 4:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+1+14
              tile4 = xy+1+14+14
            break;
          }
          break;
        case 4:
          switch (lado) {
            case 1:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+14
              tile4 = xy+14+1
            break;
            case 2:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+14
              tile4 = xy+14+1
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+14
              tile4 = xy+14+1
            break;
            case 4:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+14
              tile4 = xy+14+1
            break;
          }
          break;
        case 5:
          switch (lado) {
            case 1:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+13
              tile4 = xy+14
            break;
            case 2:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+15
              tile4 = xy+29
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+13
              tile4 = xy+14
            break;
            case 4:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+15
              tile4 = xy+29
            break;
          }
          break;
        case 6:
          switch (lado) {
            case 1:
              tile1 = xy
              tile2 = xy+13
              tile3 = xy+14
              tile4 = xy+15
            break;
            case 2:
              tile1 = xy
              tile2 = xy+14
              tile3 = xy+15
              tile4 = xy+14+14
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+2
              tile4 = xy+14+1
            break;
            case 4:
              tile1 = xy
              tile2 = xy+13
              tile3 = xy+14
              tile4 = xy+14+14
            break;
          }
          break;
      case 7:
          switch (lado) {
            case 1:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+1+14
              tile4 = xy+2+14
            break;
            case 2:
              tile1 = xy
              tile2 = xy+13
              tile3 = xy+14
              tile4 = xy+14+13
            break;
            case 3:
              tile1 = xy
              tile2 = xy+1
              tile3 = xy+1+14
              tile4 = xy+2+14
            break;
            case 4:
              tile1 = xy
              tile2 = xy+13
              tile3 = xy+14
              tile4 = xy+14+13
            break;
          }
        break;
      }
    }
    
    function viraPeça() {
      if (peça.lado < 4) {
        peça.lado++
        } else {
        peça.lado = 1
      }
      zeraTile()
      peças(peça.tipo, peça.lado)
      while(parede.direita.some(elem => elem == tile1) || parede.direita.some(elem => elem == tile2) || parede.direita.some(elem => elem == tile3) || parede.direita.some(elem => elem == tile4)) {
        //alert('existe')
          tile1--
          tile2--
          tile3--
          tile4--
      }
      while(parede.esquerda.some(elem => elem == tile1) || parede.esquerda.some(elem => elem == tile2) || parede.esquerda.some(elem => elem == tile3) || parede.esquerda.some(elem => elem == tile4)) {
        //alert('existe')
          tile1++
          tile2++
          tile3++
          tile4++
      }
      limpaTela()
      andar()
    }
    
    function trocaPeça() {
      if (peça.tipo < 7) {
        peça.tipo++
        } else {
        peça.tipo = 1
      }
      zeraTile()
      peças(peça.tipo, peça.lado)
      while(parede.direita.some(elem => elem == tile1) || parede.direita.some(elem => elem == tile2) || parede.direita.some(elem => elem == tile3) || parede.direita.some(elem => elem == tile4)) {
        //alert('existe')
          tile1--
          tile2--
          tile3--
          tile4--
      }
      while(parede.esquerda.some(elem => elem == tile1) || parede.esquerda.some(elem => elem == tile2) || parede.esquerda.some(elem => elem == tile3) || parede.esquerda.some(elem => elem == tile4)) {
        //alert('existe')
          tile1++
          tile2++
          tile3++
          tile4++
      }
      limpaTela()
      andar()
    }
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    }