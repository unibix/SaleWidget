  
// тег для стилей  
  
let salewidgetstyle = document.createElement('style');
document.body.appendChild(salewidgetstyle);
salewidgetstyle.innerHTML = `
.salewidget {
  position:fixed;
  z-index:8000;
  bottom:30px;
  left:30px;
  box-shadow:0 0 10px black;
  max-width:400px;
  color:black;
  padding:10px;
  padding-right:40px;
  background:white;
  transform: translateX(-150%);
  display:flex;
}
.salewidget-close {
  position:absolute;
  z-index:8001;
  top:0;
  right:0;
  padding:10px;
  cursor:pointer;
}
.salewidget-icon {
  width:45px;
  margin:10px;
}

@keyframes swAnimation {
  0% {transform: translateX(-150%);}
  100% {transform: translateY(0);}
}`;

// не выводим акции если их до этого закрывали

 

// проходимся по акциям и выводим их, создавая для каждого свой div
if(getCookie('salewidget') == undefined) {
  
for (let item of sale_config.elements) { 
    let salewidget = document.createElement('div');
    document.body.appendChild(salewidget);
    salewidget.classList.add('salewidget');
    salewidget.innerHTML = `
  <div class="salewidget-icon">
      <img class="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTAyOC40KSI+PHBhdGggZD0ibTI0IDE0YTIgMiAwIDEgMSAtNCAwIDIgMiAwIDEgMSA0IDB6IiBmaWxsPSIjN2Y4YzhkIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxLjI1IC0xMCAxMDMxLjQpIi8+PHBhdGggZD0ibTEyIDEwMzAuNGMtMy44NjYgMC03IDMuMi03IDcuMiAwIDMuMSAzLjEyNSA1LjkgNCA3LjggMC44NzUgMS44IDAgNSAwIDVsMy0wLjUgMyAwLjVzLTAuODc1LTMuMiAwLTVjMC44NzUtMS45IDQtNC43IDQtNy44IDAtNC0zLjEzNC03LjItNy03LjJ6IiBmaWxsPSIjZjM5YzEyIi8+PHBhdGggZD0ibTEyIDEwMzAuNGMzLjg2NiAwIDcgMy4yIDcgNy4yIDAgMy4xLTMuMTI1IDUuOS00IDcuOC0wLjg3NSAxLjggMCA1IDAgNWwtMy0wLjV2LTE5LjV6IiBmaWxsPSIjZjFjNDBmIi8+PHBhdGggZD0ibTkgMTAzNi40LTEgMSA0IDEyIDQtMTItMS0xLTEgMS0xLTEtMSAxLTEtMS0xIDEtMS0xem0wIDEgMSAxIDAuNS0wLjUgMC41LTAuNSAwLjUgMC41IDAuNSAwLjUgMC41LTAuNSAwLjUtMC41IDAuNSAwLjUgMC41IDAuNSAxLTEgMC40MzggMC40LTMuNDM4IDEwLjMtMy40Mzc1LTEwLjMgMC40Mzc1LTAuNHoiIGZpbGw9IiNlNjdlMjIiLz48cmVjdCBmaWxsPSIjYmRjM2M3IiBoZWlnaHQ9IjUiIHdpZHRoPSI2IiB4PSI5IiB5PSIxMDQ1LjQiLz48cGF0aCBkPSJtOSAxMDQ1LjR2NWgzdi0xaDN2LTFoLTN2LTFoM3YtMWgtM3YtMWgtM3oiIGZpbGw9IiM5NWE1YTYiLz48cGF0aCBkPSJtOSAxMDQ2LjR2MWgzdi0xaC0zem0wIDJ2MWgzdi0xaC0zeiIgZmlsbD0iIzdmOGM4ZCIvPjwvZz48L3N2Zz4=" alt="Red dot" /> 
      </div>
        <div class="salewidget-text">
       
       `+item.name+`
        
      </div>  
      <span class="salewidget-close">Х</span>
  `;
  
  
  
}

  

const salewidgets = document.querySelectorAll(".salewidget");


setTimeout(() => {

    salewidgets.forEach(salewidget => {
       salewidget.style.animation = 'swAnimation 2s forwards';
    });
  
}, sale_config.config[0].delay); // 👈️ delay in milliseconds


const swCloseBtns = document.querySelectorAll('.salewidget-close');

for (var i = 0; i < swCloseBtns.length; i++) {
    swCloseBtns[i].addEventListener('click', function(event) {
      console.log(event.target.parentNode);
       event.target.parentNode.style.display = 'none';
      // добавляем куки чтобы не показывать акцию 6 минут
      document.cookie = "salewidget=closed; max-age=360";
    }); 
}
  
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
