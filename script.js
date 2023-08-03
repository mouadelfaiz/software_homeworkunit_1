let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    
    randomQuote()
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  const title = document.querySelector("#main-title")

    title.innerHTML = ("R.I.P Paul Walker")
  
    // Part 2
  document.body.style.background = ("#186d94")
  
    // Part 3
  
  const listItem = document.getElementsByTagName("li")
  listItem[5].remove()

    // Part 4
  const specialTitles = document.querySelectorAll(".special-title")
  const count = specialTitles.length;

  for (let i = 0; i < count; i++) {
    specialTitles[i].style.fontSize = "2rem"
  }
    // Part 5
  
    const pastRaces = document.getElementById("past-races")
    
    pastRaces.getElementsByTagName("li")[3].remove()
  
    // Part 6
    const list = document.createElement("li")
    const node = document.createTextNode("Marrakech")
    list.appendChild(node);

    pastRaces.appendChild(list);
    
  
    // Part 7
    
        const mainSection = document.querySelector('.main');
        
        const newBlogPost = document.createElement('div');
        newBlogPost.classList.add('blog-post', 'purple');
        const h1 = document.createElement("h1")
        h1.innerText = "Barcelona"
        const para = document.createElement("p")
        para.innerText = "This is the most famous city in spain"
        newBlogPost.appendChild(h1)
        newBlogPost.appendChild(para)
        mainSection.appendChild(newBlogPost);
  
    // Part 8
    
    document.querySelector('#quote-title').addEventListener('click', () => randomQuote());
    // Part 9
    const blogPosts = document.querySelectorAll('.blog-post');

    const mouseOutHandler = function() {
      this.classList.toggle('purple');
    };
  
    const mouseEnterHandler = function() {
      this.classList.toggle('red');
    };
  
    blogPosts.forEach(blogPost => {
      blogPost.addEventListener('mouseout', mouseOutHandler);
      blogPost.addEventListener('mouseenter', mouseEnterHandler);
    });
  });