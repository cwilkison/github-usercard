/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/cwilkison')



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:*/

function createCard(info){
  const cardMain = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUser = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardAnchor = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  cardMain.appendChild(cardImage);
  cardMain.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUser);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardAnchor);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  cardMain.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUser.classList.add('username');

  cardImage.src = info.avatar_url;
  cardName.textContent = info.name;
  cardUser.textContent = info.login; 
  cardLocation.textContent =`Location: ${info.location}`;
  cardProfile.textContent = "Profile: ";
  cardAnchor.href = info.html_url;
  cardAnchor.textContent = info.html_url;
  cardFollowers.textContent = `Followers: ${info.followers}`;
  cardFollowing.textContent = `Following: ${info.following}`;
  cardBio.textContent = `Bio: ${info.bio}`;

  return cardMain

  }

  const newCards = document.querySelector('.cards');

  axios.get('https://api.github.com/users/cwilkison')
    .then((response)=>{
      newCards.appendChild(createCard(response.data))
    })
    .catch(error => {
      console.log("error", error)
    })
    

    


followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(followers => {
    const cardNew = createCard(followers.data),
      people = document.querySelector('.cards')
      people.append(cardNew)
  })
  .catch(error => {
    console.log('Error', error)
  })
})




/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
