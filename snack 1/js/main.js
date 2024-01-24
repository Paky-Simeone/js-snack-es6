const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
  ];

const listVip = vips.map((vip, numeroTavolo) => {
      let listVip = {
          nomeTavolo: 'tavoloVip',
          vip: vip,
          numeroTavolo: numeroTavolo + 1
      };
      return listVip;
  });
  console.table(listVip);
  console.table(vips);
