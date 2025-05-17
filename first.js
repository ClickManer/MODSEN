function hoistingTest() {
    console.log(x)
    console.log(y)
    var x
    let y
    console.log(x)
    console.log(y)
}
hoistingTest()