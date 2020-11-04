const mas = [];

module.exports = async function (arrayAccepted, arrayTo) {
    await arrayTo.forEach(s=>{
        arrayAccepted.includes(s)? mas.push({email: s, status: true}):mas.push({email: s, status: false});
    });
    return mas;
};