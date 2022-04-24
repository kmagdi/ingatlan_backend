const mysql = require('mysql');
const configDb= require('../configDb')
const db=mysql.createConnection(configDb);

const getIngatlan=(req,res) => {
    console.log('getIngatlan')
    db.query(`select a.id,b.nev,a.leiras,a.hirdetesDatum,a.tehermentes,
    a.ar,a.kepUrl from ingatlanok a,kategoriak b 
    where a.kategoria=b.id`,(err,result) => {
        if(err) console.log(result)
        else res.status(200).send(result)

    })
}

const createIngatlan=(req,res) => {
    const {kategoria,leiras,hirdetesDatum,tehermentes,ar,kepUrl}=req.body
    console.log(kategoria,leiras,hirdetesDatum,tehermentes,ar,kepUrl)
    db.query('insert into ingatlanok (kategoria,leiras,hirdetesDatum,tehermentes,ar,kepUrl) values (?,?,?,?,?,?)', 
        [kategoria,leiras,hirdetesDatum,tehermentes,ar,kepUrl],(err, result) => {
            if(err) res.status(400).send({message:'Hiányos adatok'})
            if(result) res.status(201).send({message:'Sikeres insert:'+result.insertId})
        })

}
const deleteIngatlan=(req, res) => {
    const {id}=req.params;
    db.query('delete from ingatlanok where id=?',[id],(err, result)=>{
        if(err) console.log('hiba....',err)
        //console.log(result)
        if(result.affectedRows==1) res.status(204).send({message:'Sikeres törlés.'})
        if(result.affectedRows==0) res.status(404).send({message:'Az ingatlan nem létezik.'})
    })
}
module.exports = {getIngatlan,createIngatlan,deleteIngatlan}