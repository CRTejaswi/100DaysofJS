/* JS: Implements the Auto-Complete utility with data imported from a JSON file. */

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const searchLatex = async searchText => {
    const response = await fetch('https://crtejaswi.github.io/api/latex1.json');
    const entries = await response.json();

    let matches = entries.filter(entry => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return entry.title.match(regex);
    });
    if (searchText.length === 0){
        matches = []; matchList.innerHTML='';
    }
    outputHtml(matches);
}
const outputHtml = matches => {
    if (matches.length > 0){
        const html = matches.map(
            match => `
                <h4>${match.title}: ${match.equation}
                </h4>
        `).join('');
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchLatex(search.value));
