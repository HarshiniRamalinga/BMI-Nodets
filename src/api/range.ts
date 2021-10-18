import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {

    try{
        return response.status(200).send(
            {
                "underweight": 18.5,
                "Normal": 24.9,
                "overweight": 29.5,
                "obese" : 29.6
            }
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    //  next(error)
    }
   
})


module.exports = router;