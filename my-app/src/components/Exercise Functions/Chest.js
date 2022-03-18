
var Chest = {
    firstFunc: function bench_press(weight, miniutes){
        return weight * 0.05111111 * miniutes
    },
    secondFunc: function incline_bench_press(weight, miniutes){
        return weight * 0.04533333 * miniutes
    },
    thirdFunc: function dip(weight, miniutes){
        return weight * 0.02644444 * miniutes
    },
    fourthFunc: function chest_fly(weight, miniutes){
        return weight * 0.03888888 * miniutes
    },
    fifthFunc: function dumbbell_press(weight, miniutes){
        return weight * 0.04911111 * miniutes
    },
    sixthFunc: function incline_dumbbell_press(weight, miniutes){
        return weight * 0.04533333 * miniutes
    },
    seventhFunc: function decline_bench(weight, miniutes){
        return weight * 0.04911111 * miniutes
    },
    eighthFunc: function machine_chest_press(weight, miniutes){
        return weight * 0.03888888 * miniutes
    }
}