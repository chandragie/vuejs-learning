const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    //validation
    if(!req.body.title){
        res.status(400).send({
            message:'Content can not be empty!'
        });
        return;
    }

    //create instance
    const tutorial = {
        title:req.body.title,
        description:req.body.description,
        published:req.body.published ? req.body.published : false
    };

    //save
    Tutorial.create(tutorial).then(data => {
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Some error occured while creating tutorial'
        });
    });
};

exports.findAll=(req,res)=>{
    const title=req.query.title;
    var condition = title ? {title : {[Op.iLike] : `%${title}%`}}:null;

    Tutorial.findAll({where:condition}).then(data=>{
        res.send({
            // message : 'List of datas',
            data : data
        });
    }).catch(err=>{
      res.status(500).send({
            message:err.message||'Some error occured while retrieving tutorials'
      });
    });
};

exports.findOne=(req,res)=>{
    const id = req.params.id;

    Tutorial.findByPk(id).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || `Error retrieving Tutorial with id = ${id}`
        });
    });
};

exports.update=(req,res)=>{
    const id = req.params.id;
    Tutorial.update(req.body, {
        where : {id : id}
    }).then(num=>{
        if(num == 1){
            res.send({
                message : 'Tutorial was updated successfully'
            });
        }else{
            res.send({
                message : `Can not update tutorial with id = ${id}. May be tutorial was not found.`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Error updating tutorial with id = ${id}`
        });
    })
};

exports.delete=(req,res)=>{
    const id = req.params.id;
    Tutorial.destroy({
        where: {id : id}
    }).then(num => {
        if(num == 1){
            res.send({
                message: 'Tutorial successfully deleted.'
            })
        }else{
            res.send({
                message : `Can not delete tutorial with id = ${id}. May be tutorial was not found.`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Could not delete tutorial with id ${id}`
        });
    })
};

exports.deleteAll=(req,res)=>{
    Tutorial.destroy({
        where: {},
        truncate: false
    }).then(nums=>{
        res.send({message : `${nums} tutorials were deleted.`})
    }).catch(err=>{
        res.status(500).send({message : err.message || 'Some error occured while deleting all tutorials.'});
    });
};

exports.findAllPublished=(req,res)=>{
    Tutorial.findAll({where : {published : true}})
        .then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({message : err.message || 'Some error occured while retrieving tutorials'});
        });
};