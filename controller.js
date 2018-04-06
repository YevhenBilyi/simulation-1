




module.exports={
    getAll:(req, res, next)=>{
        const dbInstance=req.app.get('db')
        dbInstance.get_inventory()
        .then(products=>res.status(200).send(products))
        .catch(()=>res.status(500).send());
    },
    create:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        const{name, price, imageurl}=req.body

        dbInstance.create_product([name, price, imageurl])
        .then(()=>res.status(200).send())
        .catch(()=>res.status(500).send());
    },
    delete:(req,res,next)=>{
        const dbInstance=req.app.get('db')
        const{id}=req.params

        dbInstance.delete_product([id])
        .then(()=>res.status(200).send())
        .catch(()=>res.status(500).send())
    }
}