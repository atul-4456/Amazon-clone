const functions=require('firebase-functions');
const express=require('express');
const cors =require('cors');


const stripe = require('stripe')('sk_test_51LQlI8SEQVwLxBohUwXAr2Uyym1VbmxvFP8bUlZMQphBZIHd3rwpUzWrgGh9h5IGcqeql2AnZVhPMbJifenxicLU00A9tYT74X')



const app=express();


app.use(cors({origin:true}));
app.use(express.json());


app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create',async (request,response)=>{
    const total=request.query.total;

    console.log('Payment Request Recieved: ',total)

    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:'usd',
    })

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


exports.api=functions.https.onRequest(app);