function construstTimeTable(timeTable, talksData) {
  return Object.keys(timeTable)
    .filter(function (k) {return timeTable[k];})
    .sort()
    .map(function (time) {
      console.log(time);
      var name = timeTable[time];
      console.log(name);

      var index = 0;
      var talk = talksData.filter(function (t) { return t.name.indexOf(name) == 0; })[index];
      console.log(talk)

      if (name == "改行") {
        return { time: "\xa0", name: "\xa0", title: "", major: ""};
      }
      else if (name == "座談会1") {
        return { time: time, name: "", title: "座談会①「専門分野に興味を持ったきっかけ」「大学院を卒業した後の進路」「研究生活で楽しいこと/大変なこと」", major: ""};
      }
      else if (name == "座談会2") {
        return { time: time, name: "", title: "座談会②「研究の息抜き、課外活動」", major: ""};
      }
      else if (name == "講演終了") {
        return { time: time, name: "講演終了", title: "", major: ""};
      }
      else {
        return { time: time, name: talk.name, title: talk.title, major: talk.affiliation };
      }
    });
}


$(function () {
  var firstDayTable  = construstTimeTable(day1, data);
  var secondDayTable = construstTimeTable(day2, data);
  // var thirdDayTable  = construstTimeTable(day3, data);

  var template = $('#template').html();
  Mustache.parse(template);
  var renderedFirst  = Mustache.render(template, {table: firstDayTable,  header: "5/13 (土)"});
  var renderedSecond = Mustache.render(template, {table: secondDayTable, header: "5/14 (日)"});
  // var renderedThird  = Mustache.render(template, {table: thirdDayTable,  header: "11/20 (日)"});
  // $('.article-headline').html(renderedFirst + "<br />" + renderedSecond + "<br />" + renderedThird);
  $('.article-headline').html(renderedFirst + "<br />" + renderedSecond);
});