<template>
  <div class="current-weather">
      <div class="container">
          <div class=" row">
              <div class="col-sm-6">
                  <div class="weather-box">
                    <div class="temp"> <b-icon icon="cloud" class="cloud-icon"></b-icon>
                         25°c</div>
                    <div class="weather">Rain</div>
                </div>
              </div>

              <div class="column col-sm-6">
                  <div class="weather-wrap">
                    <div class="location-box">
                        <div class="location"> Santa Cruz, PH </div>
                        <div class="date">  12:36PM  | <span><small>Mon, JAN 09</small></span></div>
                        <div class="humidity"> Humidity   | <span><small> 65%</small></span></div>
                    </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
    return {
      api_key: '71d8e3bf093233db3fd8255c60dfa462',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style scoped>
    .location-box{
        font-size: 26px;
        font-weight: 500;
        text-align: left;
    }
    .location-box .location{
        font-size: 26px;
        font-weight: 500;
        text-align: left;
        text-shadow: 1px 3px lightgrey;
    }
    .location-box .date, .humidity{
        font-size: 18px;
        text-align: left;
    }
    .weather-box{
        text-align: left;
    }
    .weather-box .temp{
        display: inline-block;
        font-size: 60px;
        font-weight: 700;
        text-shadow: 5px 5px lightgrey;
    }
    .weather-box .weather{
        font-size: 20px;
    }

    .column {
        border-left: 2px solid rgb(155, 149, 149);
    }
</style>