const bossService = () => {
    return {
        getBosses: () => fetch('http://localhost:4500/api/bosses').then(d => d.json()).then(d => d),
        getBoss: () => fetch('http://localhost:4500/api/bosses/:bossId').then(d => d.json()).then(d => d.main.temp),
        updateBoss: () => fetch('http://localhost:4500/api/bosses/:bossId').then(d => d.json()).then(d => d.main.temp),
        deleteBoss: () => fetch('http://localhost:4500/api/bosses/:bossId').then(d => d.json()).then(d => d.main.temp),
        createBoss: (newBoss) => fetch('http://localhost:4500/api/bosses', {
            method: "POST",
            body: JSON.stringify(newBoss),
            headers: { 'Content-Type': 'application/json'},
        }).then(d => d.json()).then(d => d)
    };
};

export default bossService();