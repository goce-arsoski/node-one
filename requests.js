exports.showMeSomething = () => {
  console.log('Something arrowed!');
  const something = [
    {
      id: 1,
      name: 'Marko'
    },
    {
      id: 2,
      name: 'Kate'
    },
  ];

  // console.log(something.filter(element => element.name === 'Marko'));

  // console.log(something.map(({name}) => name));

  // console.log(something.map(smth => {
  //   return {
  //     ...smth,
  //     adress: 'Dolno Lisice'
  //   }
  // }));

  // for (const element of something) {
  //   console.log(element);
  // }

  something.forEach(element => {
    console.log(element);
  });
}

// exports.showMeSomething2 = function() {
//   console.log('Something 2');
// }
