function checkVoterEligibility(name, age) {
    // Write your logic here
    return age < 18 ? `${name} is not a valid voter.`
    : `${name} is a valid voter.`;
}

module.exports = { checkVoterEligibility };