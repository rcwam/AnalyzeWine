/*
interface AgeProps {
    color:string,
    sweetness:string,
    sediment:string,
    tannins:string,
    toast:string,
    fruitFloral: string[],
    earthMineral: string[],
    biologicalChemical: string[]
}

export class Age extends Component<AgeProps, {}> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            color:props.color,
            sweetness:props.sweetness,
            sediment:props.sediment,
            tannins:props.tannins,
            toast:props.toast,
            fruitFloral: props.fruitFloral,
            earthMineral: props.earthMineral,
            biologicalChemical: props.biologicalChemical
        };
    }

    render(){
            let minAge = 0;
            let maxAge = 0;
            if (sediment == ("Light" || "Heavy")) {
                minAge = 5;
                maxAge = 99;
                //  return;
            } else {
                switch (this.props.notes.eye.wineType) {
                    // get initial guess based on color
                    case "Red":

                        switch (color) {
                            case "Purple":
                                minAge = 0;
                                maxAge = 2;


                                break;
                            case "Ruby":
                                minAge = 1;
                                maxAge = 3;
                                break;
                            case "Red":
                                minAge = 2;
                                maxAge = 5;
                                break;
                            case "Garnet":
                                minAge = 4;
                                maxAge = 9;
                                break;
                            case "Brick":
                                minAge = 5;
                                maxAge = 99;
                                break;
                            case "Brown":
                                minAge = 99;
                                maxAge = 99;
                                break;
                            //   default:
                            //       return;
                        }

                        break;

                    case "White":
                        switch (color) {
                            case "Clear" || "Greenish":
                                minAge = 0;
                                maxAge = 2;
                                break;
                            case "Yellow":
                                minAge = 2;
                                maxAge = 4;
                                break;
                            case "Golden":
                                minAge = 4;
                                maxAge = 7;
                                break;
                            case "Amber":
                                minAge = 5;
                                maxAge = 99;
                                break;
                            case "Brown":
                                minAge = 99;
                                maxAge = 99;
                                break;
                            //  default:
                            //      return;
                        }
                        break;
                    case "Rose":
                        switch (color) {
                            case "Pink":
                                minAge = 0;
                                maxAge = 2;
                                break;
                            case "Salmon":
                                minAge = 2;
                                maxAge = 4;
                                break;
                            case "Orange":
                                minAge = 4;
                                maxAge = 7;
                                break;
                            case "Copper":
                                minAge = 5;
                                maxAge = 99;
                                break;
                            case "Brown":
                                minAge = 99;
                                maxAge = 99;
                                break;
                            //   default:
                            //       return;
                        }
                        break;
                }
            }


            // Make adjustments based on Barrel Aging
            if (toast == "Light") {
                minAge = minAge - 1;
                maxAge = maxAge - 1;
            }
            if (toast == "Heavy") {
                minAge = minAge - 2;
                maxAge = maxAge - 2;
            }

            // Use aroma group to verify the final guess.
            const smellFruitFloraCount = fruitFloral.length;
            const smellEarthMineralCount = earthMineral.length;
            const smellBiologicalChemicalCount = biologicalChemical.length;
//alert(smellFruitFloraCount + " " + smellEarthMineralCount + " "+smellBiologicalChemicalCount);


            // take into account the expected type of wine?
            if (smellFruitFloraCount > smellEarthMineralCount) {
                if (smellFruitFloraCount > smellBiologicalChemicalCount) {
                    minAge = Math.min(minAge, 3);  // three years or less
                    if (tannins === "Harsh" || "Astringent" || "Aggressive") {
                        maxAge = Math.min(maxAge, 5);  // five years or less
                    }
                }
            }

            if (smellBiologicalChemicalCount > smellEarthMineralCount) {
                if (smellBiologicalChemicalCount > smellFruitFloraCount) {
                    minAge = Math.max(minAge, 5);  // at least five years
                }
            }

            // Expand Results
            // minAge--;
            // maxAge++;

            minAge = Math.max(0, minAge);        // minAge is positive
            maxAge = Math.max(minAge + 1, maxAge);  // maxAge is at least one year longer than minAge
            minAge = Math.min(99, minAge);
            maxAge = Math.min(99, maxAge);

            // run prop to update age numbers (min , max)

            //alert(smellFruitFloraCount+" "+smellEarthMineralCount+" "+smellBiologicalChemicalCount);
            // alert(this.props.notes.eye.color + " is "+  minAge +" to " + maxAge);
            this.props.setAge(minAge, maxAge);

            //   this.props.setAge(minAge, maxAge);


            // this.setState(this.props.conclusions.age.min);

            //   this.forceUpdate(() => this.props.conclusions.age);

        }
    }

//export default Age;
*/ 
//# sourceMappingURL=Age.js.map