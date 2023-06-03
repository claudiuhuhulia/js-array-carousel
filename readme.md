# CAROUSEL #


- Recupero le immagini dalla DOM.
- Creo un index number che incrementando cambi l'immagine attiva. 
- Recupero i button dalla DOM.
- Al click del button modifico l'index number: 
    - Rimuovo la classe 'active' dall'elemento con l'index number corrente.   
    - Aumento o diminuisco l'index number. 
    - Inserisco la classe 'active' all'elemento. 
- Rimuovo le immagini dal HTML per poterle inserire dinamicamente con js utilizzando un array. 
- Per ogni immagine creo il tag img "<>" da inserire nel markup.
- Aggiungio un ciclo infinito: 
    - **SE** il current index è uguale alla lunghezza dell'array **ALLORA** l'index number diventa 0.
    - **SE** il current index è minore di 0 **ALLORA** il current index diventa uguale alla lunghezza dell'array - 1.
- Recupero le thumbnails dalla DOM.
- Rendo la prima thumbnail attiva associandolo all'index number aggiungendo all'elemento la classe 'active'.
- Cambio la thumbnail attiva al click del button modificando l'index number.