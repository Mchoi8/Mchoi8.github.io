
// const search_input = document.getElementById('searchbutton');

// var documents = [{
//   "name": "Website Development and Design",
//   "text": "We provide all the latest features and programs to develop/design your website. We provide all the latest features and programs to develop/design your website and/or mobile app. We work with Drupal, Wordpress, Joomla, CSS3, PHP, Java, AJAX, and HTML just to name a few and can build on any existing hosting sites. However, we also provide in-house hosting as an option. We guarantee that we can build websites for most budgets. The world of web design is ever changing. While we’re not yet gazing out at a virtual reality landscape, front-end designers are continuing to develop the functionality and feel of the web for the technology out there, keeping designs fresh and optimizing for UX. Here are five of the major trends that are driving website design today."
//   }, {
//   "name": "Mobile Applications",
//   "text": "We create mobile apps for iOS and Android users. We customize apps based off the need of your company and marketing initiatives. We create mobile apps for iOS and Android users. We customize apps based on the need of your company and marketing initiatives. We also offer unique designs, consultation, and tracking services to ensure that your mobile app is being utilized to the best of its ability to attract customers and increase your smartphone visibility. Mobile now accounts for over half of all online traffic, so it’s only natural that the focus of web design has moved. Indeed, even if you do incorporate a responsive design, it’s likely to be more important for you to prioritize the appearance and functionality of your site on mobile than on desktop. That doesn’t just mean ensuring that the layout works on a smartphone screen but extends to the specific concerns of mobile users – does the site load quickly? Is the site properly navigable on a smaller screen? And is it easy to access and share content? If the answer to any of those questions is no, then you’re likely to be missing out. And favoring mobile isn’t optional anymore, either – Google will penalize your search rankings if you’re not making mobile work. Fortunately, they have a tool that tells you how you’re doing. You can read more"
// }, {
//   "name": "Internet Marketing/SEO/SMM/PPC",
//   "text": "We specialize in building your brand through a concise marketing plan that reaches all areas of internet marketing. We specialize in building your brand through a concise marketing plan that reaches all areas of internet marketing. This includes SEO, SMM, and PPC initiatives. We also handle all social media management to increase followers and traction to your site. As digital marketing specialists, we are privileged to work with a lot of companies on a daily basis and over the last three years, we realized that there are seven big patterns: 7 reasons why social media is not giving you or your company the bang for its buck. We’re providing you with these because I highly believe that social media (digital marketing as such) is still super underestimated because people don’t know the true power it and/or are doing things wrong."

//  } , {
//     "name": "Internet Marketing/SEO/SMM/PPC",
//     "text": "We specialize in building your br"

//  }   , {
//       "name": "Internet Marketing/SEO/SMM/PPC",
//       "text": "We specialize in building your br"

//  }    , {
//         "name": "Internet Marketing/SEO/SMM/PPC",
//         "text": "We specialize in building your br"

//   }  , {
//       "name": "Internet Marketing/SEO/SMM/PPC",
//       "text": "We specialize in building your br"

// }  , {
//       "name": "Internet Marketing/SEO/SMM/PPC",
//       "text": "We specialize in building your br"

// }  , {
//       "name": "Internet Marketing/SEO/SMM/PPC",
//       "text": "We specialize in building your br"


  

// }]


// var idx = lunr(function () {
//   this.ref('name')
//   this.field('text')

//   documents.forEach(function (doc) {
//     this.add(doc)
//   }, this)
// });



// function configureSearch() {


//   const test = document.getElementById('testing');
//   test.innerHTML = 'You got tested son.';

// }



// search_input.addEventListener('click',function(){

//   console.log(idx.search("library"));


// });

// // (function() {
// //   function displaySearchResults(results, store) {
// //     var searchResults = document.getElementById('search-results');

// //     if (results.length) { // Are there any results?
// //       var appendString = '';

// //       for (var i = 0; i < results.length; i++) {  // Iterate over the results
// //         var item = store[results[i].ref];
// //         appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
// //         appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
// //       }

// //       searchResults.innerHTML = appendString;
// //     } else {
// //       searchResults.innerHTML = '<li>No results found</li>';
// //     }
// //   }

// //   function getQueryVariable(variable) {
// //     var query = window.location.search.substring(1);
// //     var vars = query.split('&');

// //     for (var i = 0; i < vars.length; i++) {
// //       var pair = vars[i].split('=');

// //       if (pair[0] === variable) {
// //         return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
// //       }
// //     }
// //   }

// //   var searchTerm = getQueryVariable('query');

// //   if (searchTerm) {
// //     document.getElementById('search-box').setAttribute("value", searchTerm);

// //     // Initalize lunr with the fields it will be searching on. I've given title
// //     // a boost of 10 to indicate matches on this field are more important.
// //     var idx = lunr(function () {
// //       this.field('id');
// //       this.field('title', { boost: 10 });
// //       this.field('author');
// //       this.field('category');
// //       this.field('content');
// //     });

// //     for (var key in window.store) { // Add the data to lunr
// //       idx.add({
// //         'id': key,
// //         'title': window.store[key].title,
// //         'author': window.store[key].author,
// //         'category': window.store[key].category,
// //         'content': window.store[key].content
// //       });

// //       var results = idx.search(searchTerm); // Get lunr to perform a search
// //       displaySearchResults(results, window.store); // We'll write this in the next section
// //     }
// //   }
// // })();