Vue.component("Padre", {
    template: `
    <div>
        <h2>{{messagePadre}}</h2>
        <Hijo></Hijo>
    </div>`,
    
    data() {
        return{ 
            messagePadre:"Soc el Pare"
        }
        
    }
});


