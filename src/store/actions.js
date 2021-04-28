import axios from 'axios'
export const getTodaysReport = ({commit}) => {
   axios.get('https://coronavirus-19-api.herokuapp.com/countries/world')
            .then((res) => {
               // console.log(res.data.cases);
                commit('GET_TODAYS_REPORT',res.data)
            })
            .catch(err => {
                console.log(err);
            })
}