const searchInput = document.getElementById('search');
const suggestionsList = document.getElementById('suggestions');
const overlay = document.getElementById('overlay');
const noSuggestionsMessage = 'Produto Não Encontrado :(';

let isSuggestionsVisible = false;
const maxSuggestions = 5;

searchInput.addEventListener('input', function() {
    const inputValue = searchInput.value.toLowerCase();

    suggestionsList.innerHTML = '';
    if (inputValue.length > 0) {
        fetch(`/get_suggestions/?query=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    suggestionsList.innerHTML = `<li>${noSuggestionsMessage}</li>`;
                } else {
                    data.slice(0, maxSuggestions).forEach(sugestao => {
                        const li = document.createElement('li');
                        li.textContent = sugestao;

                        li.addEventListener('click', function() {
                            searchInput.value = sugestao;
                            suggestionsList.innerHTML = '';
                        });

                        li.addEventListener('mouseover', function() {
                            li.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                        });

                        li.addEventListener('mouseout', function() {
                            li.style.backgroundColor = 'transparent';
                        });

                        suggestionsList.appendChild(li);
                    });

                    if (data.length > maxSuggestions) {
                        suggestionsList.classList.add('active');
                    }
                }

                if (!isSuggestionsVisible) {
                    suggestionsList.style.display = 'block';
                    suggestionsList.style.position = 'absolute';
                    suggestionsList.style.top = '8.2%';
                    suggestionsList.style.zIndex = '1000';
                    suggestionsList.style.border = '1px solid #ccc';
                    overlay.style.display = 'block';
                    isSuggestionsVisible = true;
                }
            });
    } else {
        suggestionsList.innerHTML = `<li>${noSuggestionsMessage}</li>`;
        suggestionsList.style.display = 'block';
        overlay.style.display = 'block';
        isSuggestionsVisible = true;
    }
});

document.addEventListener('click', function(event) {
    const isClickInsideSearchInput = searchInput.contains(event.target);
    const isClickInsideSuggestionsList = suggestionsList.contains(event.target);

    if (!isClickInsideSearchInput && !isClickInsideSuggestionsList) {
        suggestionsList.style.display = 'none';
        overlay.style.display = 'none';
        isSuggestionsVisible = false;
    }
});
