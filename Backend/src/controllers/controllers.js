import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';

dotenv.config();

const database = process.env.MONGO_URI;
const nombreBase= "Citas"

const mongo = new MongoClient(database);
await mongo.connect();
const db = mongo.db(nombreBase);

const cita = db.collection("Cita")
const Estado_cita = db.collection("Estado-cita")
const Medico = db.collection("Medico")
const Usuario = db.collection("Usuario")
const acudiente = db.collection("acudiente")
const consultorio = db.collection("consultorio")
const especialidad = db.collection("especialidad")
const genero = db.collection("genero")
const tipo_documento= db.collection("tipo_documento")

const primero = async(req, res)=>{
    try {
        const result = await Usuario.find().sort({Usuario:1}).toArray
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}

const segundo = async(req, res)=>{
    try {
        const query = {fecha: /2023-09-20/} 
        const result = await cita.find(query).sort({cita:1}).toArray();
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}

const tercero = async(req, res)=>{
    try {
        const query = {especialidad: /Cardiología/i}
        const result = await especialidad.find(query).toArray();
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}

const cuarto = async (req, res)=>{
    try {
        const cita = await cita('citas').findOne({
            user_id: "650304455933cf904de4be6c",
            fecha: {$gte: currentDate},
        },{
            sort: {fecha: 1},
        });

        if(cita){
            res.json({
                fecha_cita: "2023-09-23"
            });
        }
    } catch (error) {
        console.log(error);
    }
}


const quinto = async (req, res)=>{
    try {
        const medico_id = '6503028c5933cf904de4be62' 
        const citas = await cita('citas').find({medico_id: medico_id}).toArray(); 
        const Usuario = citas.map(cita=> cita.user_id)
        const pacienteInfo = await Usuario('Pacientes').find({user_id:{$in: Usuario}}).toArray();

        res.json(pacienteInfo);
    } catch (error) {
        console.log(error);
    }
}


const sexto = async(req, res)=>{
    try {
        const query = {fecha: /2023-09-21/i}
        const result = await cita.find(query).toArray();
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}


 const septimo = async (req, res)=>{
    try {
        const medico = Medico.db(medico)

        const medicos =[
            {
                $lookup: {
                    from: consultorio,
                    localFied: "650301cf5933cf904de4be5a",
                    as: 'Consultorio A'
                }
            },
            {
                $unwind: consultorio
            },
            {
                $project:{
                    nombre: "Dra. María Rodríguez"
                }
            }
        ]
    } catch (error) {
        
    }
}



const octavo = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
export{primero, segundo, tercero, cuarto, quinto, sexto}