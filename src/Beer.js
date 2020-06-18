import React from "react";
import './Beer.css';
import {duration, makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


const Beer = (props) => {


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    console.log("beer test");

    const FoodPairing = (foodPair) => {
        let arrayOfLi = [];
        let pairArray = foodPair.pairArray;
        console.log(pairArray);
        for(let i in pairArray){
            console.log(pairArray[i]);
            arrayOfLi.push(<li>{pairArray[i]}</li>)
        }
        return <ul>{arrayOfLi}</ul>;
    }

    const PrepareMethod = (method) => {
        console.log("method" + JSON.stringify(method));
        let methodArray = method.method;
        console.log("methodArray is " + JSON.stringify(methodArray));

        let mashTmp = methodArray["mash_temp"];

        let fermentation = methodArray["fermentation"];
        let fermentationTmp = fermentation["temp"];
        let fermentationVal = fermentationTmp["value"];
        let fermentationUnit = fermentationTmp["unit"];

        console.log("method array fermentation " + JSON.stringify(fermentation));
        console.log("fermentation val " + fermentationVal);
        console.log("fermentation unit " + fermentationUnit);

        let twist = methodArray["twist"];
        console.log("twist  " + twist);

        console.log("method array mash " + JSON.stringify(mashTmp));

        let arrayOfMashUl = [];
        for(let i in mashTmp){
            let tmp = mashTmp[i]["temp"];
            let duration = mashTmp[i]["duration"];
            let value = tmp["value"];
            let unit = tmp["unit"];

            console.log("obj tmp " + mashTmp);
            console.log("obj val " + value);
            console.log("obj unit " + unit);
            console.log("obj duration " + duration);

            let arrayOfMethodLi = [];

            arrayOfMethodLi.push(<li>Temp: {value} {unit}</li>);
            arrayOfMethodLi.push(<li>Duration: {duration}</li>);
            arrayOfMashUl.push(<ul>{arrayOfMethodLi}</ul>);
        }

        let mashDiv =
            <div>
                <h2>Mash Temp</h2>
                {arrayOfMashUl}
            </div>;

        let fermentationDiv =
            <div>
                <h2>Fermentation</h2>
                Temp: {fermentationVal} {fermentationUnit}
            </div>;

        let methodDiv =
            <div>
                {mashDiv}
                {fermentationDiv}
            </div>;


        return methodDiv;
    }


    const Ingredients = (ingredients) => {
        console.log("ingredients" + JSON.stringify(ingredients));
        let ingredientsObj = ingredients.ingredients;
        console.log("ingredientsObj is " + JSON.stringify(ingredientsObj));

        let malt = ingredientsObj["malt"];
         console.log("malt " + JSON.stringify(malt));

        let arrayOfMaltUl = [];
        for(let i in malt){
            let name = malt[i]["name"];
            let amount = malt[i]["amount"];
            let val = amount["value"];
            let unit = amount["unit"];

            let arrayOfMaltLi = [];
            arrayOfMaltLi.push(<li>Name: {name}</li>);
            arrayOfMaltLi.push(<li>Value: {val}</li>);
            arrayOfMaltLi.push(<li>Unit: {unit}</li>);
            arrayOfMaltUl.push(<ul>{arrayOfMaltLi}</ul>);

            console.log("obj name " + name);
            console.log("obj amount " + JSON.stringify(amount));
            console.log("obj amount val " + JSON.stringify(val));
            console.log("obj amount unit " + JSON.stringify(unit));
        }

        let arrayOfHopUl = [];
        let hops = ingredientsObj["hops"];
        console.log("hops " + JSON.stringify(malt));
        for(let i in hops){
            let name = hops[i]["name"];
            let add = hops[i]["add"];
            let attribute = hops[i]["attribute"];
            let amount = hops[i]["amount"];
            let val = amount["value"];
            let unit = amount["unit"];

            console.log("hop obj name " + name);
            console.log("hop obj amount " + JSON.stringify(amount));
            console.log("hop obj amount val " + JSON.stringify(val));
            console.log("hop obj amount unit " + JSON.stringify(unit));
            console.log("hop obj amount attribute " + JSON.stringify(attribute));
            console.log("hop obj amount add " + JSON.stringify(add));


            let arrayOfHopLi = [];
            arrayOfHopLi.push(<li>Name: {name}</li>);
            arrayOfHopLi.push(<li>Value: {val}</li>);
            arrayOfHopLi.push(<li>Unit: {unit}</li>);
            arrayOfHopLi.push(<li>Add: {add}</li>);
            arrayOfHopLi.push(<li>Attribute: {attribute}</li>);
            arrayOfHopUl.push(<ul>{arrayOfHopLi}</ul>);

        }


        let yeast = ingredientsObj["yeast"];
        console.log("yeast " + JSON.stringify(yeast));


        let maltDiv =
        <div>
            <h2>Malts</h2>
            {arrayOfMaltUl}
        </div>;


        let hopDiv =
            <div>
                <h2>Hops</h2>
                {arrayOfHopUl}
            </div>;

        let ingredientsDiv =
            <div>
                {maltDiv}
                {hopDiv}
                Yeast: {yeast}
            </div>;

        return ingredientsDiv;
    }


    let likeString = "Unlike";
    if(!props.liked){
        likeString = "Like";
    }

  return (
    <div id="container">
        <div id="leftRow">
            <div>
                <Button variant="contained" color="primary" onClick={() => props.likedBeer(props.index)}>{likeString}</Button>
            </div>
            <div id="name">
                <strong>Name:</strong>
            </div>
            <div id="name">
                {props.beer.name}
            </div>
            <div id="tagline">
                <strong>Tagline:</strong>
            </div>
            <div id="tagline">
               {props.beer.tagline}
            </div>
            <div id="description">
                <strong>Description:</strong>
            </div>
            <div id="description">
                {props.beer.description}
            </div>
            <div id="brewers_tips">
               <strong>Tips:</strong>
            </div>
            <div id="brewers_tips">
            {props.beer.brewers_tips}
            </div>

            <div id="brewers_tips">
                <strong>First Brewed:</strong>
            </div>
            <div id="brewers_tips">
                {props.beer.first_brewed}
            </div>

            <div id="row">

                <div id="brewers_tips">
                    <strong>abv:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.abv}
                </div>

                <div id="brewers_tips">
                    <strong>ebc:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.ebc}
                </div>

            </div>
            <div id="row">

                <div id="brewers_tips">
                    <strong>Target fg:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.target_fg}
                </div>
                <div id="brewers_tips">
                    <strong>Target og:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.target_og}
                </div>

            </div>
            <div id="row">
                <div id="brewers_tips">
                    <strong>ibu:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.ibu}
                </div>
                <div id="brewers_tips">
                    <strong>srm:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.srm}
                </div>

            </div>
            <div id="row">

                <div id="brewers_tips">
                    <strong>ph:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.ph}
                </div>
                <div id="brewers_tips">
                    <strong>Attenuation Level:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.attenuation_level}
                </div>
            </div>
            <div id="row">
                <div id="brewers_tips">
                    <strong>Volume:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.volume.value} {props.beer.volume.unit}
                </div>
                <div id="brewers_tips">
                    <strong>Boil Volume:</strong>
                </div>
                <div id="brewers_tips">
                    {props.beer.boil_volume.value} {props.beer.boil_volume.unit}
                </div>
            </div>


            <div id="listData">
                <ExpansionPanel expanded={expanded === 'panelPair'+ props.index} onChange={handleChange('panelPair' + props.index)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Food Pairings</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                            <FoodPairing pairArray={props.beer.food_pairing}></FoodPairing>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panelMethod' + props.index} onChange={handleChange('panelMethod' + props.index)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Methods</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                            <PrepareMethod method={props.beer.method}></PrepareMethod>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>


                <ExpansionPanel expanded={expanded === 'panelIngredients' + props.index} onChange={handleChange('panelIngredients' + props.index)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Ingredients</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                            <Ingredients ingredients={props.beer.ingredients}></Ingredients>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
            <div id="brewers_tips">
                <strong>Contributed By:</strong>
            </div>
            <div id="brewers_tips">
                {props.beer.contributed_by}
            </div>

        </div>
        <div id="rightRow">
            <div>
                <img src={props.beer.image_url} alt="Beer"/>
            </div>
        </div>
    </div>
  );
};

export default Beer;
