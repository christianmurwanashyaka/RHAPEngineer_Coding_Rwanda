// Handle form submission
document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get the name entered by the user
    const name = document.getElementById("name").value;
    
    // Fetch school data from data.json
    fetchSchoolData(name);
});

// Fetch healthcare provider data from data.json
function fetchSchoolData(name) {
    // Clear previous results
    document.getElementById("healthcareProviderList").innerHTML = "Loading...";
    
    
    // Make a request to fetch the data.json file
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const healthcares = data.healthcares;
            
            // Filter schools based on the pincode
            const matchedHealthcares  = healthcares.filter(school => healthcare.name === name);
            
            if (matchedHealthcares.length > 0) {
                const efficientOrder = tspSearch(matchedHealthcares);
                displaySchools(matchedHealthcares, efficientOrder);
            } else {
                const content1 = "<p>No healthcare provider found for the given name.</p>"
                const styledContent1 = `<div style="color: #ffffff; padding: auto; margin: auto">${content1}</div>`;
                document.getElementById("healthcareProviderList").innerHTML = styledContent1;
                healthcareProviderList.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error("Error fetching school data:", error);
		const content2 = "<p>An error occurred while fetching school data.</p>"
                const styledContent2 = `<div style="color: #ffffff; padding: auto; margin: auto">${content2}</div>`;
            document.getElementById("healthcareProviderList").innerHTML = styledContent2;
            healthcareProviderList.classList.remove('hidden');
        });
}

// Display the list of provider
function displayProvider(healthcares, efficientOrder) {
    const healthcareProviderList = document.getElementById("healthcareProviderList");
    healthcareProviderList.innerHTML = "";
    
    // Display efficient order
    const efficientOrderHeader = document.createElement("h3");
    efficientOrderHeader.textContent = "Efficient Order:";
    healthcareProviderList.appendChild(efficientOrderHeader);
    
    
    // Display Provider
    const providerHeader = document.createElement("h3");
    providerHeader.textContent = "Provider:";
    healthcareProviderList.appendChild(schoolsHeader);
    
    const healthcareProviderList = document.createElement("ul");
    healthcares.forEach(healthcare => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${healthcare.name}</strong><br>
            Address: ${healthcare.type+', '+healthcare.specialty+', '+healthcare.insurance+', '+healthcare.address+', '}<br>
            phone: ${healthcare.phone}
        `;
        healthcareProviderList.appendChild(listItem);
    });
    healthcareProviderList.appendChild(healthcareProviderList);
    healthcareProviderList.classList.remove('hidden');
}




const card = document.querySelector('.card');

card.addEventListener('mousemove', handleMouseMove);
card.addEventListener('mouseleave', resetAnimation);

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const cardRect = card.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const percentX = (clientX - cardCenterX) / (cardRect.width / 2);
  const percentY = (clientY - cardCenterY) / (cardRect.height / 2);
  const rotationAngleX = 10 * percentX;
  const rotationAngleY = 10 * percentY;
  //const scaleValue = 1.1 - Math.abs(percentX) * 0.1;

  card.style.transform = `perspective(1000px) rotateY(${rotationAngleX}deg) rotateX(${rotationAngleY}deg)`;
}

function resetAnimation() {
  card.style.transform = 'none';
}




