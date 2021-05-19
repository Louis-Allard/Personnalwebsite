<template>
    <div id="mainwrap">
        <div class="container">
            <div class="blocres">
                <div id="screen" class="resultat">Résultat</div>
            </div>
            <div class="nbrs">
                <input id="enternbrs1" class="enternbrs1" type="number" min="0" required placeholder="0123..." />
                <span id="toucheoperation" class="signe">+</span>
                <input id="enternbrs2" class="enternbrs2" type="number" min="0" required placeholder="0123..." />
            </div>
        </div>
        <div class="blocblack">
            <div class="blocope">
                <div id="+" @click="touches('+')" class="operateur" style="color:#22c1c3"><div class="placement">+</div></div>
                <div id="-" @click="touches('-')" class="operateur" style="color:#fdbb2d"><div class="placement">-</div></div>
                <div id="x" @click="touches('x')" class="operateur" style="color:whitesmoke"><div class="placement">X</div></div>
                <div id="/" @click="touches('/')" class="operateur" style="color:rgb(114,122,0)"><div class="placement">÷</div></div>
            </div>
            <button id="btn" class="btncalculer" @click="calculer()">=</button>
        </div>

    </div>
</template>

<script>
export default {
  name: "Calc",
  methods: {
    calculer() {
      let nbr1 = document.getElementById("enternbrs1").value;
      let nbr2 = document.getElementById("enternbrs2").value;
      let signedeloperation = document.getElementById("toucheoperation")
        .innerText;
      let resultat = "";
      switch (signedeloperation) {
        case "+":
          resultat = parseFloat(nbr1) + parseFloat(nbr2);
          this.test(resultat);
          break;
        case "-":
          resultat = parseFloat(nbr1) - parseFloat(nbr2);
          this.test();
          break;
        case "x":
          resultat = parseFloat(nbr1) * parseFloat(nbr2);
          this.test(resultat);
          break;
        case "/":
          resultat = parseFloat(nbr1) / parseFloat(nbr2);
          this.test(resultat);
          break;
        default:
          resultat = parseFloat(nbr1) + parseFloat(nbr2);
          this.test(resultat);
          break;
      }
    },
    touches(signe) {
      document.getElementById("toucheoperation").innerHTML = signe;
    },
    test(resultat) {
      if (!isNaN(resultat)) {
        document.getElementById("screen").innerHTML = resultat;
      } else {
        alert("Ouille ! ;-( Entrez un nombre.");
      }
    },
    reset() {
      document.getElementById("enternbrs1").value = 0;
      document.getElementById("enternbrs2").value = 0;
      document.getElementById("screen").innerHTML = "Résultat";
    },
  },
};
</script>

<style lang="css" scoped>
#mainwrap {
  width: 350px;
  height: 540px;
  margin: 30px auto;
  border: 2px solid black;
  background: linear-gradient(50deg, #000000, #515151);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  color: white;
}

.container {
  width: 95%;
  text-align: center;
  margin: 7px;
  font-size: 33px;
}

.btncalculer {
  display: block;
  border-radius: 10px;
  padding: 3px;
  width: 81%;
  height: 18%;
  border: 2px solid #3d3d3d;
  font-size: 21px;
  background: linear-gradient(0deg, #e67315, #f4ab70);
  margin: auto;
}

.btncalculer:hover {
  color: whitesmoke;
  cursor: pointer;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}

.placement {
  margin-top: 30%;
}

.blocblack {
  width: 94%;
  height: 68%;
  text-align: center;
  margin: auto;
  font-size: 33px;
  border: 1px solid black;
  background-color: #3d3d3d;
  padding-right: 10px;
}

.blocres {
  width: 98%;
  height: 70px;
  text-align: center;
  margin: auto;
  font-size: 50px;
  background-color: #e0e2ca;
  color: #1cb328;
  font-family: "Dancing Script", cursive;
}

.blocope {
  width: 90%;
  height: 73%;
  display: block;
  float: right;
  column-count: 2;
  margin: 25px auto auto auto;
}

.blocopehoriz {
  width: 96%;
  height: 60px;
  display: block;
  margin: 0px auto auto 0;
  display: inline-flex;
}

.operateur {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 2px solid #3d3d3d;
  font-size: 25px;
  background: linear-gradient(0deg, #4f433c, #aca19b);
  margin-bottom: 30px;
}

.operateur:hover {
  color: whitesmoke;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  cursor: pointer;
}

.nbrs {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  text-align: center;
  margin: 7px;
}

.enternbrs1,
.enternbrs2 {
  text-align: center;
  justify-content: center;
  height: 50px;
  min-width: 100px;
  margin: 7px;
  border-radius: 10px;
  border: 2px solid #3d3d3d;
}

.signe {
  width: 50px;
  height: 50px;
  margin: 7px;
  color: black;
}
</style>