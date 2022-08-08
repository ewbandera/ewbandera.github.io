function renderPosts(boston, container) {
    const people = boston.data;
    const len = boston.data.length;
    let html = '';
    //for (let i = 0; i < len; i++) {
     // html +=
       // '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  //  }
  var sortedPeople =people.sort((a,b)=>b[11]-a[11]);
  let topEarners = sortedPeople.slice(0,5);
    console.log(topEarners);
    //html += '<div id="topSalaries">';
     for (let i=0; i<topEarners.length; i++){
              html += '<li class="post">' +
                  '<h2>' + topEarners[i][8] + '</h2>' +
                  '<h3>' + topEarners[i][11] + '</h3></li>';
          }
    //html += '</div>';
    
    // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
    container.innerHTML = '<ul id = "topSalaries">' + html + ' </ul>';
  }

  console.log('test');
  renderPosts(boston, document.getElementById('container'));
  