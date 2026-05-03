async function loadRandomUsers(count = 6) {
  const container = document.getElementById('clients');
  container.textContent = 'Loading...';

  try {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const users = data.results;

    const frag = document.createDocumentFragment();

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card col-12 col-sm-6 col-md-4';

      const img = document.createElement('img');
      img.src = user.picture.large;
      img.alt = `Foto van ${user.name.first} ${user.name.last}`;
      img.className = 'card-img-top';

      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('p');
      title.className = 'card-title text-uppercase fs-6 fw-bolder pt-3';
      title.textContent = `${user.name.first} ${user.name.last}`;

      const text = document.createElement('p');
      text.className = 'card-text h6 small mt-2';
    
      const work = (typeof random_item === 'function' && Array.isArray(works)) ? random_item(works) : 'frontend';
      text.textContent = `Ik kom uit ${user.location.country} en ik werk vooral met ${work}.`;

      const mail = document.createElement('a');
      mail.href = `mailto:${user.email}`;
      mail.innerHTML = '<i class="bi bi-envelope blauwgrijs fs-3"></i>';

      body.appendChild(title);
      body.appendChild(text);
      body.appendChild(mail);

      card.appendChild(img);
      card.appendChild(body);

      frag.appendChild(card);
    });

  
    container.textContent = '';
    const section = document.createElement('section');
    section.className = 'row';
    section.appendChild(frag);
    container.appendChild(section);

  } catch (err) {
    console.error('Error fetching users:', err);
    container.textContent = 'Er is iets misgegaan bij het laden van gebruikers.';
  }
}
loadRandomUsers(6);




async function loadTestimonials(count = 2) {
  const container = document.getElementById('testimonials');
  container.textContent = 'Loading...';

  try {
    const res = await fetch(`https://testimonialapi.vercel.app/api/${count}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const users = data.results;

    const frag = document.createDocumentFragment();

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card col-12 col-sm-6 col-md-4';

      const img = document.createElement('img');
      img.src = user.avatar;
      img.alt = `Foto van ${user.name}`;
      img.className = 'card-img-top';

      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('p');
      title.className = 'card-title text-uppercase fs-6 fw-bolder pt-3';
      title.textContent = `${user.name}`;

      const text = document.createElement('p');
      text.className = 'card-text h6 small mt-2';
      
      const work = (typeof random_item === 'function' && Array.isArray(works2)) ? random_item(works2) : 'frontend';
      text.textContent = `Ik kom uit ${user.location} en ik werk vooral met ${work}.`;


      body.appendChild(title);
      body.appendChild(text);
      body.appendChild(mail);

      card.appendChild(img);
      card.appendChild(body);

      frag.appendChild(card);
    });

    container.textContent = '';
    const section = document.createElement('section');
    section.className = 'row';
    section.appendChild(frag);
    container.appendChild(section);

  } catch (err) {
    console.error('Error fetching users:', err);
    container.textContent = 'Er is iets misgegaan bij het laden van gebruikers.';
  }
}
loadTestimonials(2);