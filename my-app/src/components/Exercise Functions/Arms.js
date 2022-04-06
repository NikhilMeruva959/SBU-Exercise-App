const Arms = {
    firstFunc: function Barbell_Curl(weight, miniutes){
        return weight * 0.03977777 * miniutes;
    },
    secondFunc: function Ez_Bar_Curls(weight, miniutes){
        return weight * 0.04155555 * miniutes
    },
    thirdFunc: function Hammer_Curl(weight, miniutes){
        return weight * 0.03588888 * miniutes
    },
    fourthFunc: function incline_dumbbellcurls(weight, miniutes){
        return weight * 0.03777777 * miniutes
    },
    fifthFunc: function dumbell_tricep_extenstions(weight, miniutes){
        return weight * 0.03022222 * miniutes
    },
    sixthFunc: function dumbbell_tricep_press(weight, miniutes){
        return weight * 0.03022222 * miniutes
    },
    seventhFunc: function cable_pushdowns(weight, miniutes){
        return weight * 0.03022222 * miniutes
    },
    eighthFunc: function dumbell_kickbacks(weight, miniutes){
        return weight * 0.03022222 * miniutes
    }
}