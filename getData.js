
var getAwser = () => {
  const awser = [];
  $('.exes_option').map((index, item) => {
    const $lis = $(item).children();
    const result = [];
    $lis.map((index, item) => {
      const $input = $(item).find('input');
      if ($input.attr('checked')) {
        result.push($input.parent().text().trim())
      }
    })
    awser.push(result);
  })
  return awser;
}

console.log(JSON.stringify(getAwser()))
