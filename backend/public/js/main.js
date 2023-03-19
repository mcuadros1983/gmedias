let ingresoMedias = []

function addMedia(e) {
    console.log("addmedia")
    let media = {
        barcode: document.getElementById("barcode").value,
        mediacode: document.getElementById("mediacode").value,
        kg: document.getElementById("kg").value,
        troop: document.getElementById("troop").value
    };

    ingresoMedias.push(media)
    //console.log(ingresoMedias)


    document.getElementById("barcode").value = "";
    document.getElementById("mediacode").value = "";
    document.getElementById("kg").value = "";
    document.getElementById("troop").value = "";

    renderMediaList(ingresoMedias);

    return false;
}

function renderMediaList(data) {
    fetch(`http://localhost:4000/mediaList.hbs`)
        .then((res) => res.text())
        .then((res) => {
            const template = Handlebars.compile(res);
            const html = template({ medias: data });
            document.getElementById("mediasContainer").innerHTML = html;
        });
}

// const deleteItem = (data)=> {
//     const deleteItem = state.filter((item) => item.id !== data.id);
//     return setState(deleteItem)
//   };

function deleteItem(data) {
    // alert(data)
    let deleteItem = ingresoMedias.filter((item) => parseInt(item.mediacode) !== parseInt(data));
    console.log("text", deleteItem)
    ingresoMedias = deleteItem
    // // renderMediaList(deleteItem);
    // deleteItem.map((item) => {
    //     return (
    //         alert(item.mediacode)
    //         )
    //     })
    // return false
    //const datos = [{barcode:"147",mediacode:10,kg:12,troop:13},{barcode:"147417",mediacode:13,kg:19,troop:20}]

    // fetch(`http://localhost:4000/mediaList.hbs`)
    // .then((res) => res.text())
    // .then((res) => {
    //     const template = Handlebars.compile(res);
    //     const html = template({ medias: ingresoMedias });
    //     document.getElementById("mediasContainer").innerHTML = html;
    // });

    renderMediaList(ingresoMedias);

};

// HANDLE EVENTS
//productForm.addEventListener('submit', handleSubmit_productForm)

// function handleSubmit_productForm(event) {
//     event.preventDefault()
//     //const { title, price, thumbnail } = event.target
//     addProduct(ingresoMedias)
// }

// API SERVICE

function mediasSaved() {
    //const newProduct = { title, price, thumbnail }
    fetch(`http://localhost:4000/media/media-new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingresoMedias),
    })
        .then((res) => res.json())
        .catch((error) => error)
}


