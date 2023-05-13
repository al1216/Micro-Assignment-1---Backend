const express = require('express');
const app = new express();
const port = 3000;
let foodData = require('./data');

app.get('/',(req,res) => {
    res.send(`<h1>Hello To the world of health-api</h1>
    <h2> By, Aditya Kumar Gupta </h2>
    <h2> adityakumargupta115@gmail.com </h2>
    `);
})

app.get('/health-api', (req,res) => {
    let time = new Date().toLocaleTimeString();
    res.json({time: time, app: "express-server", 'status': 'active'});
})

app.get('/all', (req,res) => {
    let foodnames = [];
    foodData.forEach(element => {
        foodnames.push(element.foodname);
    });
    res.json(foodnames);
})

app.get('/vegetable', (req,res) => {
    let vegetables = [];
    foodData.forEach(element => {
        if (element.category === 'Vegetable') vegetables.push(element.foodname);
    });
    res.json(vegetables);
})

app.get('/fruit', (req,res) => {
    let fruits = [];
    foodData.forEach(element => {
        if (element.category === 'Fruit') fruits.push(element.foodname);
    });
    res.json(fruits);
})

app.get('/protien', (req,res) => {
    let protiens = [];
    foodData.forEach(element => {
        if (element.category === 'Protein') protiens.push(element.foodname);
    });
    res.json(protiens);
})

app.get('/calorie-above-100', (req,res) => {
    let calorieAbove100 = [];
    foodData.forEach(element => {
        if (element.calorie > 100) calorieAbove100.push(element.foodname);
    })
    res.json(calorieAbove100);
})

app.get('/calorie-below-100', (req,res) => {
    let calorieBelow100 = [];
    foodData.forEach(element => {
        if (element.calorie < 100) calorieBelow100.push(element.foodname);
    })
    res.json(calorieBelow100);
})


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})