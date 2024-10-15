let matematicosFiltradas = [];

fetch("matematicos.json")
    .then(res => res.json())
    .then(matematicos => {
        matematicosFiltradas = matematicos;
        
        
    });