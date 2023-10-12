<script lang="ts">
  import { onMount } from 'svelte';
  import Counter from './lib/Counter.svelte'

  let valueFrom:string = "USD"
  let valueTo:string = "RUB"
  let inputPrice:number;
  let converted:any;
  let prices:object = {};
  let names:Array<string> = [
    "RUB",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
];

  //$: names && setNames();

  $: valueTo && api();
  $: inputPrice && convertation();
  $: valueFrom && convertation();

  
  // function setNames() {
  //   fetch(`https://v6.exchangerate-api.com/v6/a8a9444ea7f154c2899f8dd3/latest/${valueTo}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     for (let key in data.conversion_rates) {
  //       names.push(key);
  //     }
  //     console.log(names)
  //   })
  //   .catch(err => console.log(err.massege))
  // }  

  function api() {
    fetch(`https://v6.exchangerate-api.com/v6/a8a9444ea7f154c2899f8dd3/latest/${valueTo}`)
    .then(res => res.json())
    .then(data => prices = data.conversion_rates)
    .then(() => convertation())
    .catch(err => console.log(err.massege))
  }

  function convertation() {
    converted = inputPrice * (prices[valueFrom]);
    if (isNaN(converted)) {
      converted = "Введите число"
    }
  }

</script>

<main class="page">
  <h1>Конвертация валюты</h1>
  <div class="page__container">
    <div class="container">
      <h2>Введите текущую валюту и сумму:</h2>
  
      <div class="card">
        <Counter bind:value={valueFrom} {names}/>
      </div>
  
      <input class="input" type="text" bind:value={inputPrice}>
    </div>
  
    <div class="container">
      <h2>Введите желаемую валюту:</h2>

      <div class="card">
        <Counter bind:value={valueTo} {names}/>
      </div>
  
      <p class="output">{converted}</p>
    </div>
  </div>
  

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
</main>

<style>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .page__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 500px;
    min-height: 400px;
    border-radius: 50px;
    border: 1px solid aliceblue ;
    margin-right: 20px;
  }

  .input {
    margin-top: 50px;
    width: 70%;
    min-height: 50px;
    text-align: center;
    border-radius: 24px;
    font-size: 24px;
  }

  .output {
    margin: 50px 0 0;
    padding: 0;
    width: 70%;
    min-height: 50px;
    text-align: center;
    border-radius: 24px;
    font-size: 24px;
    background-color: #3B3B3B;
  }
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
