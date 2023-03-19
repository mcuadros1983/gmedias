const Media = require("../models/Media.js")

const renderMediaForm = (req, res) => {
    console.log("renderform")
    res.render("medias/media-new")
}

const test = (req, res) => {
    console.log("testnuevo")
    res.render("medias/mediaedit")
}   

const getMedias = async (req, res) => {
    const medias = await Media.find();
    return res.json(medias);
};

const renderMedias = async (req, res) => {
    console.log("renderMedias")
    res.redirect("/media/nuevo")
    // const medias = await Media.find()
    // console.log("texto1", medias)
        //.sort({ date: "desc" })
        //.lean();
    //res.render("medias/media-saved");
    //console.log("tropa", medias[10].troop)
};

const getMediaById = async (req, res) => {
    const { id } = req.params;

    const media = await Media.findById(id);
    res.status(200).json(media);
};

const mediasSaved =  async (req, res) => {
    try {
        console.log("text", req.body)
        let medias = req.body
        medias.forEach(async (elem) => {
            let newMedia = new Media({
                barcode: elem.barcode,
                mediacode: elem.mediacode,
                kg: elem.kg,
                troop: elem.troop,
                deleted: false,
                instock: true
            })
            const mediaSaved = await newMedia.save();
            console.log(mediaSaved)
            //res.status(201).json(mediaSaved);
        })
        console.log("texto2 mediasSaved")
        res.redirect("/media");

        // medias.map((elem) => {
        //     return
        //     const newMedia = new Media({
        //         barcode: elem.barcode,
        //         mediacode: elem.mediacode,
        //         kg: elem.kg,
        //         troop: elem.troop,
        //         deleted: false,
        //         instock: true
        //     })
        // }
        // )

        // medias.map((value) => {
        //     return ({
        //         let newMedia = new Media({
        //             barcode: elem.barcode,
        //             mediacode: elem.mediacode,
        //             kg: elem.kg,
        //             troop: elem.troop,
        //             deleted: false,
        //             instock: true
        //         })
        //     })
        // })

    } catch (error) {
        console.log(error)
    }




    //const { barcode, mediacode, kg, troop } = req.body;

    // try {
    //     const newMedia = new Media({
    //         barcode,
    //         mediacode,
    //         kg,
    //         troop,
    //         deleted:false,
    //         instock:true
    //     });

    //     const mediaSaved = await newMedia.save();
    //     res.status(201).json(mediaSaved);

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json(error);
    // }
};

const updateMedia = async (req, res) => {
    const updateMedia = await Media.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );
    res.status(204).json(updateMedia);
};

const deleteMedia = async (req, res) => {
    const { id } = req.params;

    await Media.findByIdAndDelete(id);

    // code 200 is ok too
    res.status(204).json();
};

module.exports = { test, mediasSaved, renderMediaForm, renderMedias, getMedias, getMediaById, updateMedia, deleteMedia }