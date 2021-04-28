export const GET_TODAYS_REPORT = (state,cases) => {
    console.log(cases);
    state.todaysData.totalCase = cases.cases
    state.todaysData.totalDeath = cases.deaths
    state.todaysData.totalRecover = cases.recovered
    state.todaysData.todaysCases = cases.todayCases
    state.todaysData.country = cases.country
    state.todaysData.todaysDeaths = cases.todayDeaths
    state.todaysData.todaysTestCase = cases.todayCases
}