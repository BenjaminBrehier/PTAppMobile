import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from "highcharts/modules/exporting";
import expor from "highcharts/modules/export-data";
import { format } from 'date-fns';
import { fr } from 'date-fns/esm/locale'

HC_exporting(HighCharts);
expor(HighCharts);

declare var require: any;
var colors: string[] = ['#1069ce', '#f2fd1f', '#54a102', '#2f8590', '#cc35f2', '#ff3451', '#a0abac', '#730689', '#221e8f', '#cc776d', '#340520', '#594ffc'];

@Component({
   selector: 'app-home',
   templateUrl: 'tab1.page.html',
   styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
   dateLocales = { fr: fr}
   today = format(new Date(), 'EEEE MM yyyy hh:mm:ss', {locale: this.dateLocales.fr});

   ionViewDidEnter() {
      this.lineChart();
   }

   lineChart() {
      //? Requete pour récupérer les données de la base (ici du fichier)
      let result = fetch("http://localhost:8888/json.txt", {
         method: "GET",
      }).then(function (response) {
         return response.text()
      }).then(function (text) {
         //? On transforme le string obtenu en un object JSON
         var json = JSON.parse(text)
         var legende = []
         //? On boucle sur chaque groupe de données (Humidité, Température, etc...)
         for (var key in json) {
            if (!(key == 'MOYENNE')) {
               var labels: string[] = []
               var salles = new Map();
               //? On place dans une array toutes les dates et initialise chaque salle dans la map avec un tableau de la même taille que labels (remplit de null)
               for (var i in json[key]) {
                  if (!labels.includes(json[key][i].date_ajout)) {
                     labels.push(json[key][i].date_ajout)
                  }
                  if (!salles.has(json[key][i].nom_noeud)) {
                     salles.set(json[key][i].nom_noeud, [])
                  }
               }
               labels.sort();
               //? On met à null tous les cases pour chaque date dans la map
               for (var [nom, value] of salles) {
                  for (var i in labels) {
                     salles.get(nom).push(null)    //* [null, null, null, null, null, null, …]
                  }
               }

               //? On remplit la map avec les données et laisse null si pas de données pour cette date et cette salle
               for (var i in json[key]) {
                  var valeur = json[key][i].data_val.split(":")      //* On découpe data_val = "TEMPERATURE_i126:41,7"
                  valeur[1] = valeur[1].replace(',', '.')
                  salles.get(json[key][i].nom_noeud)[labels.indexOf(json[key][i].date_ajout)] = valeur[1]
               }

               //? On ajoute les valeurs dans la map et on cherche le min et le max
               var courbes = []
               var max = 0;
               var min = null
               for (var [nom, value] of salles) {
                  var datas = []
                  for (var i in value) {
                     datas.push(parseFloat(value[i]))
                     if (parseFloat(value[i]) > max) {
                        max = parseFloat(value[i])
                     }
                     if (parseFloat(value[i]) < min || min == null) {
                        min = parseFloat(value[i])
                     }
                  }

                  //? Ajout du capteur au graphe
                  courbes.push({
                     type: undefined,
                     name: nom,
                     data: datas,
                  })
               }

               //? On calcule la moyenneHorizontale (Pour chaque date)
               var moyenneHorizontal = []
               for (var i in labels) {
                  var moy = 0
                  var nbCapt = 0
                  for (var j in courbes) {
                     if (!isNaN(courbes[j].data[i])) {
                        nbCapt++
                        moy += courbes[j].data[i]
                     }
                  }
                  moy /= nbCapt
                  moyenneHorizontal.push(moy)
               }

               //? Ajout de la moyenne
               courbes.push({
                  type: undefined,
                  name: "moyenne",
                  data: moyenneHorizontal,
                  visible: false,
               })

               salles.set("moyenne", moyenneHorizontal)


               //? Calcul de la moyenne du graphique
               var moyenne = 0
               for (var i in moyenneHorizontal) {
                  moyenne += moyenneHorizontal[i]
               }
               moyenne /= moyenneHorizontal.length

               //? Calcul de l'écart-type
               var somme = 0
               var cpt = 0
               for (var i in courbes) {
                  if (!isNaN(courbes[j].data[i]) && courbes[j].data[i] != null) {
                     somme += (courbes[j].data[i] - moyenne) ** 2
                     cpt++
                  }
               }
               var ecartType = Math.sqrt(somme / cpt)
               document.getElementById('stats' + key).innerHTML = "Moyenne : " + moyenne.toFixed(2) + "<br>Ecart Type : " + ecartType.toFixed(2) + "<br>Max : " + max + "<br>Min : " + min;

               //? Définition de la légende de l'axe des ordonnées
               if (key == 'HUMIDITE') {
                  legende[key] = {
                     min: 0,
                     title: {
                        text: 'Humidité (en %)',
                        align: 'high'
                     },
                  }
               }
               if (key == 'TEMPERATURE') {
                  legende[key] = {
                     min: 0,
                     title: {
                        text: 'Temperature (en °C)',
                        align: 'high'
                     },
                  }
               }
               if (key == 'PRESENCE') {
                  legende[key] = {
                     min: 0,
                     title: {
                        text: 'Presence (en nombre de personnes)',
                        align: 'high'
                     },
                  }
               }
               //? Création du graphique
               HighCharts.chart('lineChart' + key, {
                  chart: {
                     type: 'line',
                     // backgroundColor: 'transparent'
                  },
                  title: {
                     text: key,
                     style: {
                        color: '#63003C',
                        fontWeight: 'bold'
                     }
                  },
                  xAxis: {
                     type: undefined,
                     categories: labels,
                     labels: {
                        enabled: true //* disable labels
                     }
                  },
                  yAxis: legende[key],
                  plotOptions: {
                     series: {
                        connectNulls: true,
                     },
                     bar: {
                        dataLabels: {
                           enabled: true
                        }
                     }
                  },
                  colors: colors,
                  series: courbes,
                  exporting: {
                     pdfFont: {
                        normal: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Regular.ttf',
                        bold: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Bold.ttf',
                        bolditalic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-BoldItalic.ttf',
                        italic: 'https://www.highcharts.com/samples/data/fonts/NotoSans-Italic.ttf'

                     },
                     chartOptions: {
                        plotOptions: {
                           series: {
                              dataLabels: {
                                 enabled: true
                              }
                           }
                        }
                     },
                     fallbackToExportServer: false
                  }
               });
            }
            else {
               //? On récupère les moyennes de temps réelles et on les ajoute
               document.getElementsByClassName('tempText')[0].innerHTML = " " + json[key].TEMPERATURE + " °C"
               document.getElementsByClassName('humtext')[0].innerHTML = " " + json[key].HUMIDITE + " %"
               document.getElementsByClassName('prestext')[0].innerHTML = " " + json[key].PRESENCE + " pers"
            }
         }
         return json
      }).catch(function (error) {
         console.log(error)
      })
   }
}